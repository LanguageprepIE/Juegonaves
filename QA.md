# Validation record — 14 October 2026

## Confirmed

- GitHub Pages deployment succeeded for the final game implementation. Public Chrome page loads the start screen and its CSS/JavaScript.
- Browser interactions: start, continuous mouse movement, jumping, scrolling camera, Mission Report opening, entering a test name/reflection, downloading a PDF, copying report text to clipboard, reload displaying Resume saved adventure.
- Node regression harness passes: movement, initial shelf reach and landing, MB/UB/HW effects, shield and health restoration, Merit deduplication, checkpoint recovery, all four level transitions and ending, all twelve identification clues, science card gating, three-sentence writing gate, report progress and PDF serialization.
- A generated report PDF was independently parsed with pypdf; report text was extracted successfully.
- JavaScript syntax check passes.
- All game assets are local procedural drawings/synthesised sound. No gameplay fetch requests, AI services, tracking, accounts or student server records.

## Limits of verification

- A full manual playthrough of all four worlds in the browser has not been completed. Transition/mission/end tests use the logic harness.
- No direct tests in Edge, Firefox or Safari, and no school-network test. These should be checked before the lesson.
- Print / Save as PDF is implemented with print CSS but has not been checked in a physical printer or every browser's print dialog.
- Sound synthesis is implemented but its audible output has not been listened to.
- A 25–35 minute completion time is not empirically verified. Skilled players may finish much faster. Optional book and Merit exploration and the final writing give additional lesson activity.

## Scope

The four worlds use a shared platform layout and compact original pixel drawings, with different scenery, characters, Spanish clues, a moving-platform laboratory and a comic Sr. Martín encounter. This is a functional classroom game rather than a production-scale commercial platformer. No automatic assessment of the quality of Spanish writing is claimed.

## Staff boss update

Regression harness passes all four boss question sequences, incorrect-answer detention, physical traversal of detention, return to the boss, preservation of Merits and clues, MB ball firing, expanded platform routes and boss-answer report evidence. `node --check` passes for both game scripts. Browser fixtures separately exercise the real staff-checkpoint UI; they do not constitute a full manual adventure playthrough.

Browser verification of the update: all four real boss UIs tested with three correct answers and pass-granted confirmation using the isolated fixture page. A wrong answer produced its Spanish explanation and opened the detention route; movement and jumping in detention were exercised. Full physical escape and progress preservation pass in the logic harness. The live downloaded report PDF was parsed independently (two pages) and contains all tested boss answers and the detention count. The normal student URL loads the new start instructions and contains no fixture controls or school logo.
