# React Native Light Loader

A lightweight and customizable loader (spinner) component for React Native, built with TypeScript.

## Features
- ⚡ **Lightweight** – No external dependencies
- 🎨 **Customizable** – Easily change color, size, and styles
- 📦 **Works with React Native CLI & Expo**
- 🔧 **TypeScript support** – Full typings for better DX

## Installation

```sh
npm install react-native-light-loader
# or
yarn add react-native-light-loader
```

## Usage

```tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Loader } from 'react-native-light-loader';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loader size={50} color="red" visible={true} />
    </SafeAreaView>
  );
}
```

## Props

| Prop    | Type        | Default     | Description                  |
| ------- | ----------- | ----------- | ---------------------------- |
| `size`  | `number`    | `40`        | Loader size (width & height) |
| `color` | `string`    | `#007AFF`   | Loader color                 |
| `style` | `ViewStyle` | `undefined` | Custom container styles      |
| `visible`| `boolean`  | `false`     | Custom loader visible        |