## 2024-05-23 - DOM Traversal Optimization in Legacy Reveal.js
**Learning:** Traversing up the DOM to `document` or `DocumentFragment` can throw a `TypeError` if methods like `.matches()` are invoked, because these are only present on Element nodes (`nodeType === 1`). Furthermore, skipping property lookups on non-element nodes avoids unneeded processing.
**Action:** When optimizing DOM traversal in this codebase, always verify that nodes are Element nodes (`nodeType === 1`) before invoking DOM-specific methods.
