💡 What: Cached the DOM `matches` method lookup at the module level rather than re-evaluating it inside the `while` loop of the `closestParent` function. Also added a check to ensure `parent.nodeType === 1` before invoking `matchesMethod`.

🎯 Why: The previous implementation caused unnecessary overhead by evaluating `parent.matches || parent.matchesSelector || parent.msMatchesSelector` on every iteration while traversing up the DOM tree. Additionally, traversing up to non-Element nodes (like `document` or `DocumentFragment`) without checking `nodeType === 1` could lead to TypeErrors.

📊 Impact: Reduces overhead during DOM traversal, especially for deeply nested elements. It avoids repeated feature detection per parent node.

🔬 Measurement: Verify by running unit tests (`npm run test`) and inspecting the performance of operations that invoke `closestParent` (e.g. fragment transitions or zooming) in the browser.
