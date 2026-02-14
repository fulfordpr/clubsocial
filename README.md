# Club Social — Single Page Site

This is a minimal single-page site for the wedding/event band "Club Social".

Quick notes
- Hero image is expected at: `Assets/hero.jpg` (already present in your workspace).
- Styles and JS live under `Assets/`
- The map uses the Google Maps JavaScript API. You must provide an API key.

Local preview

1. Add your Google Maps JavaScript API key by replacing `YOUR_API_KEY` in `index.html` with a valid key.
2. From the project root run:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Notes about the map
- The map centers on Fort Wayne, IN and draws a circle approximating a 3-hour drive using a straight-line distance (~180 miles). For true drive-time isochrones you would need a dedicated isochrone API (Google Maps Isochrone-like features require paid services or backend processing).

Customization
- To change accent color, edit `Assets/site.css` variable `--teal`.
- To change the hero image, replace `Assets/hero.jpg`.
# clubsocial
# clubsocial
