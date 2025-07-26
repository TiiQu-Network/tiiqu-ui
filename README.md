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
- ✨ **Zero-config styles** with automatic CSS—no setup needed
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

```tsx
import { Button } from "@tiiqu/ui";

export default function Example() {
  return <Button intent="primary">Click Me</Button>;
}
```

## 🧱 Components

```
✅ Button
```



The `Button` component is a flexible, theme-aware, utility-first button built using Tailwind CSS and [class-variance-authority (CVA)](https://cva.style/). 
It supports multiple variants (`intent`), sizes, and boolean states like `disabled` and `fullWidth`.

---

## 🎨 Variants (`intent`)

Supported button styles via the `intent` prop:

- `primary`
- `secondary`
- `light_primary`
- `light_secondary`
- `outline_primary`
- `outline_secondary`
- `borderless_primary`
- `borderless_secondary`
- `grab_outline`

---

## 📏 Sizes (`size`)

- `sm` – Small
- `md` – Medium (default)
- `lg` – Large

---

## ✅ Boolean Props

- `disabled`: Disables the button and applies dimmed styles.
- `fullWidth`: Makes the button stretch to 100% width. Defaults to `true`.

---

## 📦 Usage

```tsx
import { Button } from '@/components/ui/button';

<Button>Default</Button>

<Button intent="primary">Primary</Button>
<Button intent="outline_secondary">Secondary Outline</Button>
<Button intent="grab_outline">Grab Outline</Button>

<Button intent="borderless_primary" size="sm">Small Link</Button>
<Button intent="light_secondary" disabled>Disabled</Button>
<Button intent="outline_primary" fullWidth={false}>Fixed Width</Button>

```


## 🎨 Theming

You can customize the look and feel of the components using the className props. Override colors, spacing, or other utilities.


```css
@theme {
  --color-tiiqu-primary: #18e1c9;
  --color-tiiqu-secondary: #034459;

  --color-tiiqu-primary-light: #18e1c966;
  --color-tiiqu-secondary-light: #03445966;

  --color-tiiqu-gray: #e6ecee;

  --color-tiiqu-white: #ffffff;
}

```

## 🛠️ Customization

You can customize the button further by passing your own Tailwind or custom CSS classes via the className prop.

```tsx
<Button intent="primary" className="shadow-lg hover:scale-105 transition-transform">
  Custom Styled Button
</Button>


```


## 🪟 Modal

The `Modal` component provides an accessible, customizable modal dialog powered by native HTML `<dialog>` with smooth animations and Tailwind CSS styling.

---

### 🚀 Usage

```tsx
import { Modal } from "@tiiqu/ui";
import React, { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary">
        Open Modal
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        showCloseIcon={true}
      >
        <div>
            <p>This is the modal content area.</p>
        </div>
      </Modal>
    </>
  );
}
```

## 📋 Props

| Name            | Type         | Default     | Description                                 |
| --------------- | ------------ | ----------- | ------------------------------------------- |
| `open`          | `boolean`    | required    | Controls visibility of the modal            |
| `onClose`       | `() => void` | required    | Callback fired when modal requests to close |
| `children`      | `ReactNode`  | required    | Content inside the modal                    |
| `className`     | `string`     | `undefined` | Additional CSS classes for modal container  |
| `showCloseIcon` | `boolean`    | `true`      | Show or hide the close (X) button           |
| `closeIcon`     | `ReactNode`  | `undefined` | Custom icon to replace default close icon   |




## 🚧 Coming Soon

We're actively working on expanding the TiiQu UI library with the following components:

- 📊 **Table** — Fully customizable data tables with sorting, pagination, and responsive design.
- 🧾 **Accordion** — Expandable sections for FAQs, nested content, and more.
- 📚 **SideNav** — Sidebar navigation for complex layouts and dashboards.

```
⚠️ This package requires Tailwind CSS v3.0.0 or later to be installed in your project.

```

[![npm version](https://img.shields.io/npm/v/@tiiqu/ui)](https://www.npmjs.com/package/@tiiqu/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
