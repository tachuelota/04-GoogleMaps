## 2024-05-15 - Setup and Testing
**Learning:** Node Sass doesn't support the current environment but it doesn't block jshint or qunit. PhantomJS requires `OPENSSL_CONF=/dev/null` to bypass legacy OpenSSL issues during testing.
**Action:** Always use `OPENSSL_CONF=/dev/null` when running `npm run test`.

## 2024-05-15 - Caching DOM Methods and Node Traversal
**Learning:** Caching DOM methods like `matches` requires wrapping it in an existence check like `typeof Element !== 'undefined'` to avoid reference errors in non-browser environments. Additionally, when traversing up to the document object, you must verify the node is an Element node (`nodeType === 1`) before invoking `.matches()` to avoid TypeErrors.
**Action:** Always wrap module-level DOM object references in existence checks and check `nodeType === 1` before invoking DOM-specific methods during node traversal.
