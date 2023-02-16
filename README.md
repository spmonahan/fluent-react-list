# @fluentui/react List control comparison

Two basic React apps to compare the rendering behavior of Fluent UI v8's List control before and after [this change](https://github.com/microsoft/fluentui/pull/25331).

All `@fluentui/react` versions are pinned for consistent results. Apps are created with `yarn create react-app`.

## Usage

### Run "latest" (at the time of this writing: v8.105.8)

1. From repo root: `cd latest`
2. `yarn` (first time only to install deps)
3. `yarn start`

### Run "8.99.1" (the version published immediately before the change in question)

1. From repo root: `cd 8_99_1`
2. `yarn` (first time only to install deps)
3. `yarn start`

## Analyzing

The change to rendering behavior "moved rendering up", ensure `List` content is rendered on the first React `render()` call so it can be properly focused so our analysis will start with looking at the number of calls to `render()` that happen on mount. There are a couple ways to do this but I'll focus on using the [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) Profiler as this issue is really about how React behaves so the information provided by the profiler will be helpful here.

1. Open the app in your browser and open the browser DevTools. Go to the React Profiler tab.
2. Under the Settings (gear icon) ensure "Record why each component rendered while profiling." is checked under the "Profiler" tab
3. Click the "Reload and start profiling" button (it looks like a browser refresh icon).
4. Let the page load and render.
5. Give it a couple seconds then stop the recording.
6. Examine the profile results.