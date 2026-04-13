# Interactive Allyship Demo

This repository contains two small interactive pages demonstrating the 
LGBTQ+ workplace struggles and gauge allyship.

## Structure

- `index.html`, `script.js`, `yes.html` etc. – original Valentine-themed demo
- `ally.html`, `ally-script.js`, `ally-yes.html`, etc. – allyship version
- `style.css` – shared styling with extra rules for `.ally-page`
- `gifs/` – drop your custom GIFs here
- `music/` – drop the MP3 used by both demos (filename `pride-anthem.mp3` for ally theme)

## Customizing

To make the allyship story feel authentic, replace the placeholder assets:

1. **GIFs** – save eight images under `gifs/` named:
   - `neutral.gif`
   - `confused.gif`
   - `sad.gif`
   - `closet.gif`
   - `teary.gif`
   - `overwhelmed.gif`
   - `runaway.gif`
   - `hopeful.gif`

   These will be shown in sequence as the user clicks **No**. Choose visuals such as
   a rainbow handshake, a closet door, a crying rainbow, etc.

2. **Music** – put a song with an ally/pride theme at `music/pride-anthem.mp3`.
   It should be a short loopable MP3.

3. **Text** – feel free to edit the messages in `ally-script.js` or the HTML copy to
   better reflect the narrative you want to tell.

## Testing

Run a local server and open `https://tanvid18.github.io/workplace-allyship/` to try the interaction. The No button will
move after several clicks, nudging the user toward the supportive outcome.

---

Feel free to fork or adapt this demo for workshops, presentations, or personal
projects.
