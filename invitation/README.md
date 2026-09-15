# Babs + Henry wedding site starter

This folder is ready to open in Visual Studio Code.

## Files

- `index.html` — page structure and text
- `styles.css` — layout, sizing, pink background, desktop/mobile behaviour
- `script.js` — optional falling white flakes; no slush/accumulation
- `assets/cakecolour2.jpg` — supplied cake image
- `assets/rsvp-glow.jpg` — supplied RSVP image
- `assets/title-transparent.png` — transparent-background version of your supplied title JPEG
- `assets/TITLE1-original.jpg` — untouched supplied title JPEG
- `assets/harry-babs.png` — correctly encoded copy of the supplied couple image

## Important note about the supplied GIF

The uploaded file named `COMPRESSED-harrybabs.gif` is not actually GIF data. It is a single-frame PNG file with a `.gif` filename. I therefore saved a correctly encoded copy as `assets/harry-babs.png` so it renders reliably.

If you have the real animated GIF, put it inside `assets/`, for example:

```html
<img class="couple" src="assets/COMPRESSED-harrybabs.gif" alt="Babs and Henry">
```

and replace the existing `src` in `index.html`.

## Why the desktop version stays narrow

Your reference is 1284 device pixels wide. On a 3x Retina iPhone that corresponds to **428 CSS pixels**. The project therefore uses:

```css
--site-max-width: 428px;
```

On a phone, the site fills the available screen width. On desktop, it remains a centred 428px-wide vertical scroller. The `body` uses the same pink as the invitation, so the colour continues all the way to the left and right edges of a desktop browser.

If you want the centred desktop version a little larger, change this in `styles.css`, for example:

```css
--site-max-width: 500px;
```

## Easiest layout adjustments

At the very top of `styles.css` are controls for the composition:

```css
--couple-width: 72%;
--couple-left: 14%;
--couple-top: 2.5%;

--cake-width: 100%;
--cake-left: 0%;
--cake-bottom: 0%;

--gap-after-cake: 13.5%;
--title-width: 100%;
--details-width: 96%;
--rsvp-width: 23%;
```

Changing those values is the quickest way to line the page up with your Photoshop mockup.

For example, to make Babs and Henry bigger:

```css
--couple-width: 76%;
--couple-left: 12%;
```

To move them down:

```css
--couple-top: 5%;
```

To make the RSVP image larger:

```css
--rsvp-width: 28%;
```

## Date and location

The separate date/location JPEG shown in your annotated mockup was not part of this upload, so the starter uses editable HTML text:

```html
<p class="date">Sunday 17 January 2027</p>
<p class="location">Hora dancing 8pm Alma Park East Oval</p>
```

If you send the intended JPEG later, it can be swapped in just like the title image.

## RSVP link

In `index.html`, find:

```html
<a class="rsvp-link" href="#" aria-label="RSVP">
```

and replace `#` with the final RSVP URL.

## Previewing in Visual Studio Code

The easiest method is the **Live Server** extension:

1. Open this folder in VS Code.
2. Open `index.html`.
3. Click **Go Live** in the status bar.
4. Resize the browser to compare phone and desktop layouts.

The layout does not use a framework, build step, npm, or external dependencies.
