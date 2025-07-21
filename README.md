<p align="center">
  <img src="https://v2.pdf2qa.org/images/logo-primary.svg" alt="Logo" width="150" />
</p>

<p align="center">
  ✨ A customizable, accessible, and developer-friendly React UI component library powered by <strong>Tailwind CSS</strong> , <strong>TypeScript</strong>, and <strong>Vite</strong>.
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

## ✨ Features

- 🎨 **Pre-styled Components** using raw CSS hex values (no custom theme required)
- ⚛️ **React 19** with `forwardRef` and `class-variance-authority`
- 🌀 **Tailwind CSS v3+ compatible**
- 💅 Consistent design using `cva` and `tailwind-merge`
- 📦 Tree-shakable, typed, and optimized via Vite
- 📚 Storybook and TypeScript support

## 📦 Installation

Install the library (and make sure your app has Tailwind):

```bash
pnpm add @tiiqu/ui
# or
npm install @tiiqu/ui
```

## 🚀 Getting Started

```javascript
import { Button } from "@tiiqu/ui";

export default function Example() {
  return <Button variant="primary">Click Me</Button>;
}
```

### 📦 Tailwind CSS Integration

This library uses [Tailwind CSS](https://tailwindcss.com/docs/functions-and-directives).  
To ensure styles render correctly, you must include Tailwind in your project and import the precompiled CSS file provided by the library.

In your main CSS file (e.g., `globals.css` or `app.css`), add:

```css
@import "../../node_modules/@tiiqu/ui/dist/index.css";
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

## 🚧 Coming Soon

We're actively working on expanding the TiiQu UI library with the following components:

- 📊 **Table** — Fully customizable data tables with sorting, pagination, and responsive design.
- 🪟 **Modal** — Accessible modals with smooth transitions and flexible content areas.
- 🧾 **Accordion** — Expandable sections for FAQs, nested content, and more.
- 📚 **SideNav** — Sidebar navigation for complex layouts and dashboards.

```
⚠️ This package requires Tailwind CSS v3.0.0 or later to be installed in your project.

```

[![npm version](https://img.shields.io/npm/v/@tiiqu/ui)](https://www.npmjs.com/package/@tiiqu/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
