# Instagram Profile UI Exercise

A frontend recreation of an Instagram-style profile page using vanilla JavaScript, CSS, and Vite. It renders a sample profile, statistics, an image grid with engagement overlays, image-loading placeholders, and a theme toggle.

## Run locally

Use Node.js 22.12+:

```sh
npm install
npm run dev
```

Open the URL printed by Vite. Build with `npm run build`; preview the generated `dist/` bundle with `npm run preview`.

## Customize

- Edit the `user` object in `src/main.js` to change the sample profile, counters, image paths, and engagement numbers.
- Edit `index.html` for the page layout.
- Update `src/style.css` and the accompanying SCSS source for styling.
- Put referenced images in `public/`.

## Scope

This is a visual learning project, unaffiliated with Instagram. Profile data is hardcoded; there is no Instagram API, login, posting, or server persistence. The generated **Load More** button has no loading handler. No automated tests are configured.
