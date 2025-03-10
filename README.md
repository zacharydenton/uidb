# UIDB

This is a user interface for the [Ubiquiti
UIDB](https://static.ui.com/fingerprint/ui/public.json).

## Dev Setup

Install dependencies with:

```console
$ npm install
```

Start a dev server with:

```console
$ npm run dev
```

## Deploy

Create a production build with:

```console
$ npm run build
```

If you are deploying to a subdirectory, specify `VITE_BASE_PATH`:

```console
$ VITE_BASE_PATH=/uidb/ npm run build
```

Deploy the contents of `dist` to any static file host.

## Updating UIDB version

The UIDB schema is subject to change and no guarantees are made regarding
backward compatibility. Therefore, the UIDB is bundled as part of the app. This
allows static analysis to catch any breaking changes before they appear to the
user.

To update to the latest version of UIDB, replace `src/assets/uidb.json` with
the latest version, and fix any typecheck or test failures. (In a production
setting, this step would run as a nightly automated task (e.g. with GitHub
Actions), notifying the relevant team if errors occur.)
