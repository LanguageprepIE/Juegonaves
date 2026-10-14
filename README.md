# SCHOOL ESCAPE: El último viernes

Original browser-local pixel platformer for TY Spanish, built in plain HTML, CSS and JavaScript. No dependencies, CDN assets, APIs, accounts, analytics, forms or server-side student records. Art is drawn using canvas; optional effects use Web Audio. The previous game remains at `space-shopper.html` and in Git history.

## Play

GitHub Pages: https://languageprepie.github.io/Juegonaves/

Controls: arrows / A D move, Space / W / Up jump (hold for a higher jump), E interact, H mission and English hint, P pause, R return to checkpoint. Mouse mode: click Walk to keep moving, Stop to stop, Jump and Talk. Falling or losing health returns to a checkpoint; there are no game-over screens. Three Spanish clues unlock each world's exit. The laboratory also needs the blue card. Sr. Martín requires a three-sentence original description before the final exit.

## Merits

- Kindness: collect at least three gold books and return them to the tired student. Restores health.
- Teamwork: accept the caretaker's request at the trolley, then push right beside it for two seconds. Opens a bridge across the first gap.
- Respect: stand quietly in the marked silent zone for three seconds. Temporary shield.
- Excellence: explore the upper platforms, recover the blue card, and return it to the lost-card NPC. Bonus points and double jump.

Merits do not remove sanctions. MB = Misbehaviour, subtracts points; UB = Unacceptable Behaviour, costs a heart; HW = Homework, slows movement briefly. Ordinary gold books are collectibles, not Merits.

## Friday lesson: suggested 50-minute structure

1. 0–5 minutes: open the link and read the controls. No registration.
2. 5–35 minutes: play and explore; attempt the optional Merit missions. Mixed ability pupils may use English hints.
3. 35–45 minutes: complete the Mission Report, description and Spanish reflection. Partial reports are available at any point.
4. 45–50 minutes: upload the PDF to the teacher's Teams Assignment.

This is a suggested lesson structure, not a measured completion time. Gameplay duration has not been calibrated with pupils. Confident players may finish faster; collecting all books and Merits is optional extra exploration.

### Teams Assignment text (ready to copy)

**SCHOOL ESCAPE — El último viernes**

Open the game link provided in this assignment. Read the controls, then explore the four worlds. Follow the Spanish clues, talk to characters with E and find the exit in each world. Use H for your current mission and an optional English hint. Help characters to earn Merits. If you fall, try again from your checkpoint.

At the end, write your own description of Celia (at least three Spanish sentences) and a short reflection in Spanish. Click Mission Report, enter your name if you wish, then Download PDF. Upload that PDF here in Teams and click Hand in. Download text, Copy Report and Print / Save as PDF are backup options.

If time runs out, click Mission Report and submit your actual progress. Do not close your tab before downloading. The game keeps a recovery save in this browser tab; after a reload, choose Resume saved adventure. It does not upload your answers or name anywhere.

## Reports and privacy

Reports contain actual completed levels, recorded identification attempts, earned Merit actions, points, writing and reflection. Correct clues appear for completed worlds. Writing is not graded automatically: validation only checks minimum length and three sentences. A completed-game report requires a short reflection before export.

PDF export is implemented locally, without a library or external service. Plain text, clipboard and browser print fallbacks are included. `sessionStorage` holds a local recovery snapshot only within the browser tab; closing the tab may remove it. A shared computer's downloaded files must be handled according to the school's normal procedure.

## Development and validation

Run `node --check game.js` and `node tests/logic.cjs`. The tests exercise movement, shelf reach and landing, sanctions, Merit effects/deduplication, checkpoints, world transitions, all twelve clues, laboratory card gating, writing gating and PDF generation using a lightweight DOM harness. They do not replace a full manual browser playthrough.

Static files run without build tooling. Serve the repository root for a local preview or enable GitHub Pages from `main`, `/ (root)`. Browser interactions and outstanding verification limitations are documented in `QA.md`.

## Repository rename

The connected GitHub tools do not provide a repository rename operation. In GitHub: open this repository → Settings → General → Repository name → type `School-Escape` → Rename. Check Settings → Pages afterwards and use the URL displayed there. The game uses relative asset URLs, so no source changes are required after renaming. Do not assume the previous Pages URL redirects.

## Licence

The School Escape source, original procedural canvas artwork and synthesised sounds are offered under the MIT licence in LICENSE. The archived previous game retains its prior provenance; it is not included in this new licence grant.
