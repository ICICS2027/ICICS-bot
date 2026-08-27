# ICICS 2027 static website

This dependency-free responsive website is prepared for the 29th International
Conference on Information and Communications Security (ICICS 2027), Chengdu,
China. Its conference scope and preliminary author guidance are based on the
official ICICS 2024 and ICICS 2026 websites.

The homepage hero uses a local CC0 photograph of Chengdu City Concert Hall by
MspreilsCN, sourced from Wikimedia Commons. The earlier repository's Chengdu
panorama remains as a visual fallback.

The page intentionally follows the concise, information-first structure used
by the ICICS 2026 website: About, Important Dates, Call for Papers, Submission,
Organization and Venue. Conference details that have not been confirmed are
clearly marked as "To be announced".

## Update confirmed conference information

Edit `assets/site-config.js` to change dates, venue, submission URL and contact
email. Values left as `To be announced` remain visibly marked as unconfirmed.

The topic list and preliminary submission guidance are in `index.html`.
Committee and keynote names should be added only after appointments are
confirmed. Publication wording should also be updated after the ICICS 2027
Springer arrangement is official.

If the published site uses a URL other than `https://icics2027.github.io/`,
replace that URL in the canonical, Open Graph and Twitter metadata near the top
of `index.html`.

## Preview locally

From this directory, run any static server, for example:

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Publish with GitHub Pages

Place these files at the root of the new Pages repository, commit them to the
publishing branch, and enable GitHub Pages for that branch. No build step is
required.

## Reference editions

- ICICS 2026: https://sulab-sever.u-aizu.ac.jp/icics2026/index.html
- ICICS 2024: https://icics2024.aegean.gr/
