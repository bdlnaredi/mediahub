# Changelog

All notable changes are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/), and versions follow [Semantic Versioning](https://semver.org/).

## [0.14.23] - 2026-10-18

### Added
- **Every page has its own address.** Each tab, each Settings section, each library app (Sonarr, Radarr) and each show or movie opens at its own link, such as `#/lib/<app>/<title>`. The browser's Back and Forward buttons and reload now stay on the page you were on, and you can share or bookmark a link. In the Library, the app picker is now a button for each app. Titles still open over the list, with their own address; Back closes them.

## [0.14.22] - 2026-10-18

### Added
- **A calendar link for each show and movie.** The Calendar link button in a show's or movie's details (library, Upcoming) gives an address for just that title, to subscribe to in Google Calendar, Apple Calendar or Outlook. Shows list their episodes for the next year; movies list the cinema, digital and physical release dates. Turning the calendar off in Settings, Account stops these links as well.

## [0.14.21] - 2026-10-18

### Added
- **Android app 1.1.0: downloads.** Backups and other files are saved to the phone's Downloads folder instead of showing a message. Build the app again to get this (tag `app-v1.1.0`).
- **Android app 1.1.0: phone notifications.** Settings, Account has **Notifications on this phone** inside the app. Messages about your requests become notifications, checked about every 15 minutes. The server keeps your latest messages for this (`/api/inbox`, sign-in needed, yours only).
- These Android changes were written without a real phone or the Android build tools to try them on. Please report anything odd.

## [0.14.20] - 2026-10-18

### Added
- **Update notice.** Admins see a small note when a newer MediaHub version is tagged on GitHub (Settings, About). Set `UPDATE_CHECK=off` to turn it off; `UPDATE_URL` points it at another tags address.
- **Seerr as a Discover source.** If Seerr is connected, Discover shows its Trending, Popular and Upcoming lists with no key needed, and marks titles already in the library or requested.
- **Season picker.** Requesting a show from Discover lets you choose which seasons.
- **Indexer controls.** Prowlarr indexers can be turned on or off and given a priority. Jackett indexers have a Feed button that shows the Torznab address and API key to copy.
- **Calendar link.** Settings, Account can make a private calendar address (.ics) for upcoming episodes and movie releases. Subscribe to it in Google Calendar, Apple Calendar or Outlook. The link can be replaced or turned off at any time.

## [0.14.19] - 2026-10-17

### Added
- **The server version is easy to find now.** It is shown under your name at the bottom of the menu, at the bottom of the phone menu (More), and on a new **Settings, About** page, which also shows the server address and whether you are in the Android app or a browser.

## [0.14.18] - 2026-10-17

### Added
- **Add indexers to Jackett from MediaHub, when Jackett has an admin password.** In Settings, Apps, Jackett, there is a new optional **Admin password** box. With it saved, MediaHub signs in to Jackett the way your browser does, so adding and removing indexers works. Without it, MediaHub tries Jackett's settings with no key, and otherwise tells you what to do.

## [0.14.17] - 2026-10-17

### Fixed
- **Jackett indexers: "Jackett returned 400".** Some Jackett versions refuse their settings address when it is called with only the API key. The list of indexers and the Check buttons now use Jackett's search address instead, which always accepts the API key. Check runs a real test search.
- If Jackett still refuses to open an indexer's settings when you press Add, MediaHub says so in plain words instead of showing the number.

## [0.14.16] - 2026-10-17

### Added
- **Indexers tab: everything you have added, with Check buttons.** New **Jackett indexers** view lists every indexer added in Jackett, with its type and language, the last error Jackett remembers, a **Check** button for each and **Check all**. The **Prowlarr indexers** view (before: Indexer health) keeps its list and checks, with the same button names.
- **Add and remove indexers from MediaHub.** Admins get **Add indexer** in both views. Search the app's own list, then fill in what it asks for (a private tracker asks for sign-in details). In Prowlarr, if its check fails you can choose **Add anyway**. Each indexer also has **Remove**.
- Anyone with access to Jackett can see and check its indexers. Adding and removing, and everything in the Prowlarr view, is for admins only.
- Tested against pretend Jackett and Prowlarr only. The real apps have not been tried yet.

## [0.14.15] - 2026-10-16

### Added
- **Discover tab.** Trending, Popular and Anticipated movies and shows from **Trakt**, **TMDB** and **TheTVDB**. Open any title to see its IMDb, TMDB, TVDB and Trakt links, and request it through Seerr in one press. Because the Android app shows the same page, it gets Discover too.
- **Settings, Discover lists.** Admins paste a free key for each site (Trakt Client ID, TMDB key or token, TheTVDB key). Keys stay on the server, and only the last four characters are shown back. The tab appears once at least one key is saved.
- TheTVDB has Popular and Anticipated shows and Popular movies only. It has no trending list.
- Tested against pretend versions of the three sites only. The real sites have not been tried yet.

## [0.14.14] - 2026-10-16

### Added
- **An Android app named MediaHub.** It lives in the `android` folder. It asks once for your server's address, then opens MediaHub full screen with its own icon. A new GitHub workflow, **Android app**, builds `mediahub.apk` for you (press **Run workflow**, or push a tag that starts with `app-v`). You can also build it in Android Studio. See `docs/ANDROID.md`.
- The server image itself is unchanged by this.

## [0.14.13] - 2026-10-16

### Changed
- **MediaHub is now released under the GNU General Public License, version 3 or later** (it was MIT). The `LICENSE` file, the package details, the image label and the README say so. Earlier versions (up to 0.14.12) stay available under the MIT license for anyone who already has them.

## [0.14.12] - 2026-10-16

### Changed
- **"Recently added to Plex" (the large posters) is now its own dashboard section and sits at the very top**, above the poster ticker. Move or hide it with **Customize**, like the other sections.
- **It shows more.** Everything added in the last 7 days, or the newest 10 if fewer than that were added (never more than 40). Jellyfin's list follows the same rule.

## [0.14.11] - 2026-10-16

### Changed
- **The poster ticker at the top of the dashboard is bigger.** Posters are about 45% larger, and the series and movie counts are larger too.

## [0.14.10] - 2026-10-16

### Added
- **IMDb, TMDB and TVDB numbers** now show in the movie and episode pop-up and in the series window. Each is a link to that title's page. There is also a **Trakt** link; Radarr and Sonarr do not store Trakt's own number, so it looks the title up by its IMDb or TMDB number.

## [0.14.9] - 2026-10-16

### Added
- **The movie and episode pop-up now says whether the file is there.** It shows **File available** with the quality, video codec, language, size and file name, or **No file yet** (and whether it is monitored, so a download is expected), or **Not released yet**. TV series already showed this for every episode.

## [0.14.8] - 2026-10-16

### Added
- **Hide things inside a library from Plex profiles.** Under Settings, Users, Sign in with Plex, list genres, tags (labels or collection names) and content ratings to hide from every Plex profile. Each profile can also get its own extra list. Hidden things never appear in their "recently added".
- **Plex's own restrictions are followed too.** MediaHub reads the label and content-rating restrictions you set on each person in Plex (when they sign in) and applies them. The profile card shows what was found, so you can check it worked.

### Notes
- Hidden genres, tags and ratings apply to the "recently added" list. Seerr search results and a person's own watch history are not filtered by them.
- Reading Plex's own restrictions has only been tried against a pretend plex.tv. If the profile card says none were found but you set some in Plex, use the hide lists instead.

## [0.14.7] - 2026-10-16

### Added
- **Plex libraries hidden from a person stay hidden here.** Each time someone signs in with Plex, MediaHub asks your Plex server which libraries their account can open.
  - If every library is open to them, nothing changes for them.
  - If even one library is hidden from them, the library apps (Sonarr, Radarr, Lidarr, Readarr, qBittorrent, SABnzbd, Bazarr, Prowlarr, Jackett) are not given to them, even if ticked. Seerr, Plex, Jellyfin and Tautulli still work, showing only their own activity.
  - Their "recently added" list on Plex only comes from the libraries they can open.
  - The Users list shows how many libraries each Plex profile can open. If MediaHub cannot tell, it treats them as limited.
- **Pictures are locked too.** A Plex profile can only load posters and thumbnails of things it was actually shown.

### Notes
- Profiles made before this version are treated as limited until they sign in with Plex once more.
- Seerr can still say a title "is available" even if it sits in a library hidden from that person.

## [0.14.6] - 2026-10-16

### Added
- **Unraid containers show their own icons.** The Containers list uses the icon each container is set up with in Unraid. A container with no icon, or one that will not load, keeps the logo or letter shown before. Only plain https icon addresses are used, and any address that carries a key is ignored.
- **People who sign in with Plex only see their own viewing.** On Plex, Jellyfin and Tautulli they see only their own streams, watch history and stats, never other people's. The server's "recently added" list is hidden from them too, because it could show libraries you keep from them. Note: this does not yet hide whole libraries in Sonarr, Radarr or the poster pictures; for now only tick the apps you are happy for them to see in full.

### Changed
- **Settings redesigned.** The row of buttons is now a side menu with the sections grouped as You, Server and Care. Each section has an icon, a one-line description and a heading. On phones the menu becomes a strip you swipe along the top.

## [0.14.5] - 2026-10-16

### Added
- **Interactive search shows the language** of each release (for example English, or English, French, German), whether it is a torrent or Usenet, the release group and the leechers, and gives each result a **link to the release page** on its indexer. Click the title or the small arrow icon; it opens in a new tab. Links that contain a key or passkey are never shown. If the indexer gives no page, there is no link.

## [0.14.4] - 2026-10-15

### Added
- **Sign in with Plex.** Turn it on under Settings, then Users. People on your Plex server get a **Sign in with Plex** button on the sign-in page, sign in in Plex's own window (password, two-step, Google or Apple all work), and MediaHub checks that their Plex account can use your Plex server before letting them in. MediaHub never sees their Plex password and does not keep their Plex login.
  - Choose **anyone with access to my Plex server** (a profile is made on first sign-in, with the apps and abilities you pick) or **only people I add** (type their Plex name on their profile).
  - Plex profiles are always regular profiles. Admins sign in with their MediaHub password, and a Plex name can never take over an existing profile.
  - Profiles show a Plex badge. Settings, Account explains there is no password to change.

## [0.14.3] - 2026-10-15

### Added
- Unraid: **Show details** under CPU, Memory and Array storage. CPU shows total load and every thread; memory shows in use, available, free and swap in real amounts; the array shows total size, used, free and how many disks.

### Changed
- The sign-in box is more see-through, so the pictures behind it show.

### Fixed
- Unraid shares showed "used of 0 KB" when Unraid reports no size for a share. The size is now worked out from used plus free, or shown as a share of the array.
- Container logs: MediaHub now tries the other forms of the log request, shows the time on each line, and says why when Unraid will not give a log.

## [0.14.2] - 2026-10-14

### Added
- **Weekly newsletter** (Settings, then Alerts) replaces the weekly summary. It lists what was added to the library (with posters in email), what is coming up, downloads, requests, open problems and apps that are not responding. Email gets a styled HTML version with a plain-text fallback; other channels get plain text. Preview it on the page, send one now, or pick the day and hour.
- **QR code for two-step sign-in.** Scan it with Aegis, Google Authenticator or 1Password. The typed key is still there under "Can't scan?".
- **App icons** in front of every app name in Settings, then Apps, and in the dashboard Apps list.
- **Unraid page rebuilt:** array, CPU and memory rings, disks with temperatures, shares, uptime and CPU model, and containers with image, status, update badge and Start/Stop/Restart/Logs. Newer fields are optional and are left out if your Unraid does not return them.
- **Jellyfin.** Add it under Settings, then Apps (port 8096, an API key). Who is watching, recently added, ending a stream, slowing downloads during streams, offline alerts and the status page all work with Jellyfin the same way as with Plex.
- **Real app logos.** Apps, the dashboard and the Unraid containers show each app's own logo, loaded by your browser from the public dashboard-icons set. Without internet, or with `ICON_BASE` empty, the drawn icons stay.
- Settings, then Account: the sign-in pictures now say how many are saved, what went wrong if none are, and have a **Get pictures now** button.

### Changed
- Settings, then Account: the sign-in picture and password-email panels now show a three-step checklist of what is missing and plain choices for the sign-in page pictures.
- The poster strip on the dashboard moved from the bottom to the top.
- **Live data updates every second** (was every two) on the dashboard, the Unraid page and Downloads. Each app is asked on its own, so one slow app no longer holds the others back.
- Unraid shows the CPU by its full name (maker and model), with cores, threads and speed, on its own line.

### Fixed
- **Sign-in pictures from your library** did not always get saved. MediaHub now handles apps served under a sub-path, backdrops that only accept the key in the address, and apps that are slow to start. It downloads four at a time and retries every couple of minutes until the first pictures are saved.

### Removed
- The weekly summary message (use the weekly newsletter).

## [0.13.0] - 2026-10-14

### Added
- **Forgot password.** A "Forgot password?" link on the sign-in page. Profiles can save a recovery email (Settings, then Account, needs the current password). The reset link is single use, valid for 30 minutes, signs the profile out everywhere and keeps two-step sign-in on. The reply never reveals which names exist, requests are rate limited, and the secret sits after the `#` in the link so it stays out of server logs. Email goes through your existing email alert channel; the address in the link is `PUBLIC_URL` or the address the admin used.
- **Library artwork everywhere.** A featured hero with Ken Burns backdrops and a poster strip, "Recently added" and "Top rated" poster rows, an animated poster wall with counters, a blurred backdrop behind the whole app, rating badges, posters that tilt with a light glare, backdrops in detail windows, fade-in images and page transitions. All of it respects "reduce motion".
- **Sign-in wallpaper from your library.** Backdrops are saved from Sonarr and Radarr into `wallpapers` (16 at a time, rotated every six hours) and fade behind the sign-in card. A switch in Settings, then Account, chooses between library artwork and the built-in scenes. No titles are exposed to signed-out visitors.
- New admin options in Settings, then Account: sign-in wallpaper source, the address used in emails, and a test email.

### Fixed
- The bottom dock on phones did nothing when tapped (only "More" worked).
- Toggle switches looked like large ovals inside phone bottom sheets.

## [0.12.0] - 2026-10-14

### Added
- **New look across the whole app.** Glass panels over a soft aurora background, rounded floating sidebar, gradient buttons, tiles with a coloured glow, and dialogs that slide up as sheets on phones.
- **Phone friendly.** A top bar and a bottom dock (with a More sheet) replace the sidebar on small screens, and tiles use two columns.
- **Changing sign-in wallpaper.** Six built-in scenes fade into each other behind the sign-in card. To use your own, put JPG, PNG or WebP files (under 12 MB, up to 40) in a `wallpapers` folder inside your data folder.
- **Interactive status page builder** in Settings: section cards, a message at the top, a Dark, Light or Match device look, and a live preview you can switch between phone, tablet and wall screen. Existing pages can be edited, and "New address" replaces a link that leaked.
- The public status page is redesigned: status ring, hover details on uptime bars, pause button, full screen, and a kiosk mode (`?kiosk=1`).

### Changed
- Status page code is shared between the public page and the Settings preview (`statuskit.js` and `statuskit.css`).

## [0.11.0] - 2026-10-14

### Added
- **Live dashboard.** One shared live stream (server-sent events) now updates the dashboard about every two seconds instead of each part asking on its own timer. A "Live" badge shows the connection, and the page falls back to asking by hand if the stream is blocked, for example by a proxy that buffers responses.
- New dashboard tiles: download and upload speed with graphs (the recent history is kept on the server, so a fresh page opens already filled in), who is watching, server CPU and memory, array space, Usenet speed, and requests waiting. Tiles open the matching page, and numbers glide instead of jumping.
- **Who is watching** now shows the poster, a progress bar that moves smoothly between updates, direct play, direct stream or transcoding, resolution, bandwidth, and whether the viewer is at home or remote.
- **Uptime history.** Each app shows a 48-hour uptime bar and percentage on the dashboard and on status pages. It is kept in `uptime.json` in the data folder.
- **Stats page** with posters (most watched movies and shows), a plays-per-day chart, busiest hours, devices, viewer avatars, total plays and time watched, and recent plays with posters. Every chart has a "View as table" view and hover details.
- Status pages refresh every four seconds, show an all-clear banner, uptime bars and a speed graph, and can optionally show how many people are watching (titles only, never names or devices).
- The demo now includes pretend Unraid and richer Tautulli and Plex data.

### Changed
- The Dashboard sections are now: needs attention, live tiles, who is watching, downloading now, Usenet, apps, and coming up. If you had customised the order, it is reset to the new defaults for sections that no longer exist.
- New logo and icons.

### Fixed
- Image requests for Plex and Tautulli posters now refuse paths that try to climb out of the library folder.
- Two graphs on one page no longer share the same element id.

### Notes
- The new Plex session details and Tautulli chart data follow the documented APIs and were tested against built-in pretend apps. They have not yet been checked against a real Plex or Tautulli. Please report anything that looks wrong, with your app versions.

## [0.10.0] - 2026-10-14

The default port is now **5080** (was 8080). If you published 8080 before, either change the mapping to `5080:5080` or set `PORT=8080` and map `8080:8080`.

### Added
- Two-step sign-in with an authenticator app and recovery codes. Admins can switch it off for someone who lost their phone.
- Read-only status pages: private links for a wall tablet that show only the sections you choose.
- More alert channels (Pushover, Gotify, webhook and email, next to ntfy, Telegram and Discord), several at once, each with a test button. Your old single channel is converted automatically.
- Automatic daily backups inside the data folder, with a keep count, run-now, restore and delete.
- Weekly summary message, with preview and send-now.
- Library bulk edit: tick many items to monitor, unmonitor, search, change the quality profile or remove, and Sonarr presets (latest season only, future episodes only, all, none).
- Slow downloads while Plex is streaming (switches qBittorrent's alternative speed limits and restores them afterwards, and leaves them alone if you had already set them).
- Health page: warnings from Sonarr, Radarr, Lidarr, Readarr and Prowlarr, stuck downloads, missing counts and disk space.
- Requests: choose seasons, per-person limits, automatic approval for trusted profiles, and **Report a problem** (messages the admins and searches again).
- Music and books pages for Lidarr and Readarr: library, search and add, monitor, search for missing, remove.
- Subtitles page for Bazarr with a Search button per item and for everything shown.
- Prowlarr indexer health with Test and Test all.
- SABnzbd history with retry and remove, and adding an NZB file or address.
- Demo mode (`DEMO=1`) with built-in pretend apps and locked risky settings.
- Translations: Español, Deutsch, Français and हिन्दी. Untranslated text stays in English.
- Accessibility pass: skip link, dialog focus handling, accessible names for fields and icon buttons, and text contrast fixes in both themes.
- A compatibility table in the README that says which apps were checked against a real server.

### Changed
- Default port is 5080.
- Screens refresh less often when the browser tab is hidden and catch up when you return. Several viewers now share one short-lived download list instead of each asking qBittorrent.
- Alert settings are now a list of channels. The "reports" toggle covers problem reports from people.

## [0.9.0] - first public release

### Added
- Dashboard with live speeds, server meters, app status, "needs attention", upcoming releases and a customizable layout.
- Downloads: filters, search, bulk actions, per-file selection, categories and tags, speed limits and schedule, history, and torrent-to-library matching.
- RSS from qBittorrent: articles, mark as read, bulk actions, feeds and auto-download rules with preview.
- Library, Wanted, Upcoming (list and month calendar), Requests with approval, and Search for Sonarr and Radarr.
- Show window in the Library with every season and episode, quality and missing status, monitor switches for the series, each season and each episode (and movies), and season or episode searches.
- Plex, Tautulli, SABnzbd, Unraid, Jackett; status and links for Prowlarr, Bazarr, Lidarr and Readarr.
- Profiles with per-profile app access and permissions, signed-in devices, activity log, and phone alerts (ntfy, Telegram, Discord).
- Encrypted backup and restore, quick search (Ctrl+K), light and dark themes, compact menu and accent colors.

### Security
- App keys and passwords are encrypted on disk (AES-256-GCM). Passwords are hashed with scrypt and must be 8+ characters.
- Sign-in rate limiting, same-site cookies, cross-site request blocking, a strict content security policy and other headers.
- Proxy headers are ignored unless `TRUST_PROXY` is set. Optional `SETUP_TOKEN` protects first-run setup.
- Saves are atomic and a rolling `db.json.bak` is kept; a damaged database is never silently replaced.
- The container drops root after fixing folder ownership (`PUID` / `PGID`).
