## 2024-05-19 - Batch DOM reads/writes to prevent layout thrashing
**Learning:** Calling `element.style.height` and `element.parentNode.offsetHeight` or reading `slide.scrollHeight` inside a loop for each element causes severe layout thrashing (forced synchronous layout).
**Action:** Always separate DOM reads and writes into separate phases. Use `.map()` to collect all reads (like `offsetHeight`, `scrollHeight`) into an array first, then use `.forEach()` to apply all writes (like `style.height`, `style.top`) in a single pass.
