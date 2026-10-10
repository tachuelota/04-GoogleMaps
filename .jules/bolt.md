## 2024-05-18 - [DOM Traversal Optimization]
**Learning:** Checking `parent.nodeType === 1` before invoking `matches()` during upward DOM traversal is critical. Nodes like `document` or `DocumentFragment` don't have `matches()`, causing TypeErrors in `matchesMethod.call(parent, selector)`.
**Action:** Always verify `nodeType === 1` before using DOM-specific methods on traversed parent nodes.
