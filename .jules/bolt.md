## 2024-10-25 - Caching element matches method
**Learning:** Checking for `parent.matches` (and prefixed variants) inside the while loop of `closestParent` function introduces unnecessary overhead for DOM traversal, especially when it's called frequently during media autoplay checks.
**Action:** Cache the matches method at the module scope so we do the feature detection only once, and always check that `parent.nodeType === 1` before invoking the method to prevent TypeErrors on non-Element nodes.
