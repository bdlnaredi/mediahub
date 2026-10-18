# Maintaining MediaHub

A short checklist for keeping the project healthy and safe over time.

## One-time setup on GitHub

1. Turn on **two-factor authentication** for your account.
2. In **Settings, then Code security**, switch on: Dependency graph, Dependabot alerts, Dependabot security updates, Secret scanning with push protection, and **Private vulnerability reporting**.
3. In **Settings, then Branches**, add a rule for `main`: require a pull request, require the **CI** checks to pass, and block force pushes.
4. After the first image is published, open the package (Packages on your profile, then mediahub) and set **Visibility to Public**, and link it to the repository.
5. Add a short description and topics (for example `self-hosted`, `dashboard`, `docker`, `unraid`) to the repository.

## Making a release

1. Update `version` in `package.json` and add a section to `CHANGELOG.md`.
2. Commit to `main` and wait for CI to pass.
3. Tag and push: `git tag v0.14.26` then `git push origin v0.14.26`.
4. The **Publish image** workflow builds for amd64 and arm64 and publishes `0.14.26`, `0.14` and `latest`.
5. On GitHub, create a **Release** from the tag and paste the changelog notes. Mention anything that needs action from users.

## Keeping it secure

- Merge Dependabot pull requests for the base image and actions after CI passes.
- When a security report arrives, reproduce it privately, fix it, add a test, release, and then publish the advisory.
- Never add a runtime dependency without a good reason: the project stays small and auditable on purpose.
- Review any change to sign-in, permissions, backups or storage with extra care, and keep tests for them.
- Keep `public/lang/*.json` in step with the page: `npm test` fails when a translated text no longer exists.
- Keep the compatibility table in the README honest: only say "Author's server" for what has really been tried on a real app.

## Data safety rules for changes

- Never change how `db.json` is read in a way that could discard data. Old files must load.
- New fields get safe defaults.
- Keep saves atomic.
- Backups made by older versions must keep restoring.
