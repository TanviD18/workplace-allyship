# Interactive Allyship Demo

Two static pages create a short interactive story about workplace allyship.

## Project Structure

- `index.html` - landing page with the Yes/No interaction.
- `ally-yes.html` - follow-up page shown after the supportive path.
- `ally-script.js` - interaction logic for the landing page.
- `ally-yes-script.js` - follow-up page logic and confetti.
- `style.css` - shared styling for both pages.
- `gifs/` - image assets used throughout the experience.
- `music/` - optional background music asset.

## Required Assets

Expected files in `gifs/`:

- `neutral.gif`
- `confused.gif`
- `sad.gif`
- `closet.gif`
- `teary.gif`
- `overwhelmed.gif`
- `runaway.gif`
- `hopeful.gif`
- `GABLE (002).png`

Expected file in `music/`:

- `musicorchestral.mp3.mpeg`

## Local Run

Use any static server from the repository root, for example:

```powershell
python -m http.server 5500
```

Then open:

- `http://localhost:5500/index.html`

## Deployment Notes

- This is a static site (HTML/CSS/JS only), so it can be hosted on GitHub Pages, Netlify, or any static host.
- Keep file names and folder names unchanged unless you also update all references in HTML/JS.
- Audio playback is user-gesture gated by browser policy; this is expected behavior.
