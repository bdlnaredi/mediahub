// Calendar feed: a private .ics link for Upcoming releases (pretend Sonarr and Radarr here).
const { test } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { boot, client, setup } = require('./helpers');
const fakes = require('../lib/demo');

test('calendar feed: make a link, read the .ics without signing in, revoke it', async () => {
  const fake = fakes.create(), srv = http.createServer((req, res) => fake.handle(req, res, req.url)).listen(0);
  await new Promise(r => srv.once('listening', r));
  const fb = `http://127.0.0.1:${srv.address().port}`, s = await boot({}), a = client(s.base); await setup(a);
  try {
    assert.equal((await a.post('/api/services', { type: 'sonarr', name: 'Sonarr', url: fb + '/sonarr', apiKey: 'k' })).status, 200);
    assert.equal((await a.post('/api/services', { type: 'radarr', name: 'Radarr', url: fb + '/radarr', apiKey: 'k' })).status, 200);
    assert.equal((await a.get('/api/me/calendar')).data.on, false);
    const made = (await a.post('/api/me/calendar')).data;
    assert.match(made.path, /^\/cal\/[0-9a-f]{48}\.ics$/);
    const r = await fetch(s.base + made.path); // no cookie: it is a public link
    assert.equal(r.status, 200); assert.match(r.headers.get('content-type'), /text\/calendar/);
    const t = await r.text();
    assert.match(t, /^BEGIN:VCALENDAR\r\n/); assert.match(t, /END:VCALENDAR\r\n$/);
    assert.match(t, /BEGIN:VEVENT/); assert.match(t, /SUMMARY:.*S\d\dE\d\d/); assert.match(t, /\(movie release\)/);
    t.split('\r\n').forEach(l => assert.ok(Buffer.byteLength(l) <= 75, 'line too long: ' + l));
    assert.equal((await fetch(s.base + '/cal/' + 'a'.repeat(48) + '.ics')).status, 404);
    // One show and one movie each get their own address
    const up = (await a.get('/api/upcoming?from=' + new Date().toISOString() + '&to=' + new Date(Date.now() + 60 * 864e5).toISOString())).data.calendar;
    const ep = up.find(x => x.cal.kind === 's'), mv = up.find(x => x.cal.kind === 'm'); assert.ok(ep && mv, 'upcoming entries say which title they belong to');
    const tl = async c => (await a.get(`/api/me/calendar/title?sid=${c.sid}&kind=${c.kind}&id=${c.id}`)).data;
    const sp = await tl(ep.cal); assert.match(sp.path, /^\/cal\/t\/\w+\/\w+\/s\d+\/[0-9a-f]{32}\.ics$/);
    const st = await (await fetch(s.base + sp.path)).text();
    assert.match(st, /X-WR-CALNAME:.*\(MediaHub\)/); const sums = st.split('\r\n').filter(l => l.startsWith('SUMMARY:'));
    assert.ok(sums.length >= 1 && sums.every(l => l.includes(ep.title.replace(/[,;]/g, m => '\\' + m))), 'only that show: ' + sums.join(' | '));
    const mp = await tl(mv.cal), mt = await (await fetch(s.base + mp.path)).text();
    assert.match(mt, /SUMMARY:.*\((in cinemas|digital release|physical release)\)/);
    const bad = sp.path.replace(/\/[0-9a-f]{32}\.ics$/, '/' + '0'.repeat(32) + '.ics'); assert.equal((await fetch(s.base + bad)).status, 404);
    assert.equal((await fetch(s.base + sp.path.replace(/s(\d+)\//, (m0, n) => 's' + (+n + 1) + '/'))).status, 404, 'a different title needs its own signature');
    assert.equal((await a.get('/api/me/calendar/title?sid=nope&kind=s&id=1')).status, 404);
    assert.equal((await a.get('/api/me/calendar')).data.on, true);
    await a.del('/api/me/calendar');
    assert.equal((await fetch(s.base + made.path)).status, 404);
    assert.equal((await fetch(s.base + sp.path)).status, 404, 'turning the calendar off also stops the title links');
  } finally { await s.stop(); srv.close(); }
});
