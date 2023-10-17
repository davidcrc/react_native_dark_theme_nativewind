# Setup

```bash
npx react-native@latest init react_native_dark_theme_nativewind --template react-native-template-typescript
```

# Add NativeWind

- https://www.nativewind.dev/quick-starts/create-react-native-app

```bash
yarn add nativewind
```

```bash
yarn add --dev tailwindcss@3.3.2
```

```bash
yarn add postcss@8.4.23
```

- run:

```bash
npx tailwindcss init
```

- add folders that will use tailwind

```ts
content: ["./src/App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
```

- add to babel.config.js

```js
...,
plugins: ["nativewind/babel"],
```

- for typescript projects, create: app.d.ts, and add:

```ts
/// <reference types="nativewind/types" />
```
