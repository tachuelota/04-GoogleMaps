## 2026-09-28 - DOM Traversal matches optimization
**Learning:** Checking for nodeType === 1 before calling Element.prototype.matches in tight DOM loops prevents TypeErrors on document/DocumentFragment and can be slightly faster.
**Action:** When optimizing DOM traversal in this codebase, always verify that nodes are Element nodes (`nodeType === 1`) before invoking DOM-specific methods like `.matches()`, as traversing up to `document` or `DocumentFragment` will throw a TypeError.
