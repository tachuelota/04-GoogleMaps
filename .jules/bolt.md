## 2024-06-25 - NodeList to Array Conversion Performance
**Learning:** `Array.prototype.slice.call()` is significantly slower than manual array population when converting `NodeList` or other array-like objects to arrays. In `reveal.js`, `toArray()` is called highly frequently for DOM querying (`querySelectorAll`).
**Action:** Replace `Array.prototype.slice.call` with a manual `for` loop initialization when `toArray` is a hot path for performance optimization in legacy JS codebases or performance-sensitive environments.
