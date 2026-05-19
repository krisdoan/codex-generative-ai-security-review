# OWNDAYS Eyeglasses AI Try-On

Private security-review snapshot of the OWNDAYS generative AI try-on app.

## What Is Included

- Frontend app bundle source in `recovery/readable/index-DGdfkmHX.pretty.js`
- Static recovery shell and styles in `recovery/`
- Server/API routes in `server/` and `api/`
- Build script in `scripts/build-owndays-recovery.mjs`
- Example environment variables in `.env.example`

## What Is Not Included

- Gemini API keys
- Firebase service-account JSON
- Vercel Blob tokens
- Local `.env*` files
- `.vercel`, `.firebase`, `.wrangler`, `node_modules`, and built `dist`

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local env file from the example:

```bash
cp .env.example .env.local
```

3. Add your own secrets to `.env.local`.

4. Build the static app:

```bash
npm run build
```

5. Run the local server:

```bash
PORT=4174 HOST=127.0.0.1 npm run start
```

Open `http://127.0.0.1:4174`.

## Review Login

For this repository snapshot, real production users are not seeded.

- Email: `krisdoan.fr@gmail.com`
- Password: `123456`
- Role: `admin`

## Security Notes

- Do not commit real `.env*` files or service-account JSON files.
- The app reads production secrets from deployment environment variables.
- Shared data persistence uses Firestore when configured.
- Shared gallery assets use Vercel Blob when configured.
