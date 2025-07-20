<p align="center">
  <img src="https://v2.pdf2qa.org/images/logo-primary.svg" alt="Logo" width="150" />
</p>

<p align="center">
  ✨ A customizable, accessible, and developer-friendly React UI component library powered by Tailwind CSS, TypeScript, and Vite.
</p>

## ⚙️ Technologies

[![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download)
[![clsx](https://img.shields.io/badge/clsx-1e293b?style=for-the-badge&logo=npm&logoColor=white)](https://github.com/lukeed/clsx)
[![tailwind-merge](https://img.shields.io/badge/tw--merge-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://github.com/dcastil/tailwind-merge)
[![class-variance-authority](https://img.shields.io/badge/CVA-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white)](https://cva.style)

## 📦 Installation

```bash
  npm install @tiiqu/ui
```

## 🚀 Getting Started

```javascript
import { Button } from "@tiiqu/ui";

export default function Example() {
  return <Button variant="primary">Click Me</Button>;
}
```

```javascript
// This library uses Tailwind CSS.
// Make sure your project includes Tailwind or import the prebuilt CSS in the entry file to the application:
// eg. index.ts

import "@tiiqu/ui/style.css";
```

## 🧱 Components

```
✅ Button
```

The Button component is a flexible, theme-aware button with built-in variants and utility-first styling.

🎨 Variants

- primary
- secondary
- primaryLight
- secondaryLight
- primaryOutline
- secondaryOutline
- primaryBorderless
- secondaryBorderless

## 📦 Usage

```javascript
<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondaryOutline">Secondary Outline</Button>


```

## 🎨 Theming

You can customize the look and feel of the components using the className props. Override colors, spacing, or other utilities.

```
@theme {
  --color-primary: #7dffef;
  --color-primaryLight: #18e1c966;
  --color-secondary: #4b7d94;
  --color-secondaryLight: #0344594d;
  --color-primaryGray: #e0e0e0;
  --color-secondaryGray: #03445966;
}

```

[![npm version](https://img.shields.io/npm/v/@tiiqu/ui)](https://www.npmjs.com/package/@tiiqu/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
