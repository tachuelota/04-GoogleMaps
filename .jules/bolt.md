## 2026-09-24 - O(N^2) to O(N) optimization in getSlidePastCount
**Learning:** The `getSlidePastCount()` method iterates through all slides using querySelectorAll inside a loop and calling toArray() continuously, resulting in heavy DOM traversals and object allocations, while the target indices (`indexh` and `indexv`) are already available as closure variables.
**Action:** Replace the brute-force DOM-based calculation with one that relies on `indexh` and `indexv` variables, looping only over the preceding horizontal slides to sum their vertical slide counts, cutting runtime significantly.
