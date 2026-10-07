## 2024-05-15 - DOM Traversal Optimization
**Learning:** When writing fallback implementations for modern DOM methods like `Element.prototype.closest()`, it is critical to add a `nodeType === 1` check before calling Element-specific methods (like `matches()`) on parent nodes. Otherwise, traversing up the tree will eventually hit `Document` (nodeType 9) or `DocumentFragment` (nodeType 11), causing TypeErrors.
**Action:** Always include a check for `nodeType === 1` when looping upwards through DOM parents and invoking Element methods.
