💡 What: Caches the `matches` (or its polyfill) method reference at the module level instead of repeatedly performing property lookups on every loop iteration inside `closestParent`.

🎯 Why: To reduce the overhead of DOM traversal during user interactions. The `closestParent` utility function used to repeatedly check for `parent.matches`, `parent.matchesSelector`, or `parent.msMatchesSelector` inside its `while(parent)` loop.

📊 Impact: Reduces overhead in the `closestParent` utility function by avoiding redundant feature checks and logical OR evaluations during each DOM traversal loop iteration.

🔬 Measurement: Tests and linter can be run using `OPENSSL_CONF=/dev/null npm run test` and `OPENSSL_CONF=/dev/null npx grunt jshint`.
