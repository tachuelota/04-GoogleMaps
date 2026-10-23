## 2024-05-14 - Element Matches caching
**Learning:** Checking parent.matches || parent.matchesSelector in a loop in closestParent is slow, it should be cached at the module level.
**Action:** Cache the matches method at the module level, wrapping it with an existence check for Element to avoid ReferenceError in non-browser environments. Verify nodeType === 1 before calling it.
