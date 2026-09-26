## 2026-09-26 - [DOM Traversal Optimization]
**Learning:** [When optimizing DOM traversal loops in legacy environments, traversing up to the document node without checking nodeType === 1 causes TypeError: Illegal invocation on methods like matches()]
**Action:** [Always verify parent.nodeType === 1 before calling DOM-specific methods during upward traversal]
