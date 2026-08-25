## 2024-05-25 - Cache feature detection strings globally
**Learning:** Checking for browser capability repeatedly inside a loop (`matches` vs `matchesSelector` etc. inside `closestParent`) creates unnecessary overhead. We can feature-detect once at startup and cache the property name.
**Action:** Always hoist feature detection string checks out of tight loops or recursive functions when the availability of the feature won't change during the lifecycle of the application.
