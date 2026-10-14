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
