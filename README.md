# Interactive Allyship Demo

This repository contains two small interactive pages demonstrating the 
LGBTQ+ workplace struggles and gauge allyship.

## Structure

- `ally.html`, `ally-script.js`, `ally-yes.html`, etc. – allyship version
- `style.css` – shared styling with extra rules for `.ally-page`
- `gifs/` – drop your custom GIFs here
- `music/` – optional background music file

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

2. **Music** – add this file:
   - `music/musicorchestral.mp3.mpeg`

   The site uses one speaker button. Click it to play/pause the same track.
   Use royalty-free music or audio you have permission to use.

3. **Text** – feel free to edit the messages in `ally-script.js` or the HTML copy to
   better reflect the narrative you want to tell.

## Testing

Run a local server and open `https://tanvid18.github.io/workplace-allyship/` to try the interaction. The No button will
move after several clicks, nudging the user toward the supportive outcome.

---

Feel free to fork or adapt this demo for workshops, presentations, or personal
projects.
