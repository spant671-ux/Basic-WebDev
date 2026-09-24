# 🎨 CSS Study Notes & Handbook

A neat, structured companion covering CSS fundamentals, layout systems, visual effects, and animation techniques from the projects.

---

## 📌 Table of Contents
1. [What is CSS?](#1-what-is-css)
2. [Stylesheets & Selectors](#2-stylesheets--selectors)
3. [The Box Model](#3-the-box-model)
4. [CSS Units in Depth](#4-css-units-in-depth)
5. [Typography & Colors](#5-typography--colors)
6. [Display Properties](#6-display-properties)
7. [Position Properties](#7-position-properties)
8. [Float, Clear & Overflow](#8-float-clear--overflow)
9. [Flexbox](#9-flexbox)
10. [CSS Grid](#10-css-grid)
11. [Advanced Grids (Autofit, Minmax & Areas)](#11-advanced-grids-autofit-minmax--areas)
12. [Media Queries & CSS Variables](#12-media-queries--css-variables)
13. [Shadow Effects](#13-shadow-effects)
14. [2D Transforms](#14-2d-transforms)
15. [3D Transforms](#15-3d-transforms)
16. [Transition Effects](#16-transition-effects)
17. [CSS Animations & Keyframes](#17-css-animations--keyframes)

---

## 1. What is CSS?

**CSS** (Cascading Style Sheets) is a stylesheet language used to describe the **presentation** (look and formatting) of HTML documents.

### Core Highlights:
- **Separation of Concerns**: HTML handles structure, CSS handles visual presentation.
- **Cascading**: Styles cascade from multiple sources (browser defaults → external → internal → inline) with specificity and order determining the winner.
- **Selector-Based**: CSS rules target HTML elements using selectors and apply property-value declarations.
- **Responsive Design**: CSS provides the tools (media queries, flexbox, grid, relative units) to build layouts that adapt to any screen size.

### Basic Syntax:
```css
selector {
    property: value;
    property: value;
}
```

---

## 2. Stylesheets & Selectors

### Three Ways to Apply CSS:

| Method | Location | Syntax | Priority |
| :--- | :--- | :--- | :--- |
| **Inline** | Directly on the element | `<p style="color: red;">` | Highest (overrides others) |
| **Internal** | Inside `<style>` tag in `<head>` | `<style> p { color: red; } </style>` | Medium |
| **External** | Separate `.css` file linked in `<head>` | `<link rel="stylesheet" href="style.css">` | Lowest (but most maintainable) |

> [!TIP]
> Always prefer **external stylesheets** for real projects. They keep HTML clean, enable browser caching, and make styles reusable across pages.

### CSS Selectors:

| Selector Type | Syntax | Example | Targets |
| :--- | :--- | :--- | :--- |
| **Element** | `tag` | `p { }` | All `<p>` elements |
| **Class** | `.classname` | `.card { }` | All elements with `class="card"` |
| **ID** | `#idname` | `#header { }` | The single element with `id="header"` |
| **Universal** | `*` | `* { }` | Every element on the page |
| **Grouping** | `A, B` | `h1, h2, p { }` | All `<h1>`, `<h2>`, and `<p>` elements |
| **Descendant** | `A B` | `div p { }` | All `<p>` inside any `<div>` |
| **Child** | `A > B` | `div > p { }` | Only direct `<p>` children of `<div>` |
| **Chained** | `.A.B` | `.card.featured { }` | Elements with **both** classes |
| **Attribute** | `[attr="val"]` | `input[type="text"] { }` | Elements matching the attribute |

### Specificity Hierarchy (Lowest → Highest):
```
Universal (*) → Element (div) → Class (.card) → ID (#main) → Inline style → !important
```

---

## 3. The Box Model

Every HTML element is a rectangular **box** composed of four layers:

```
┌─────────────────────────── Margin ────────────────────────────┐
│  ┌────────────────────── Border ──────────────────────────┐   │
│  │  ┌─────────────── Padding ──────────────────────┐      │   │
│  │  │  ┌──────── Content (width × height) ───────┐ │      │   │
│  │  │  │                                         │ │      │   │
│  │  │  └─────────────────────────────────────────┘ │      │   │
│  │  └──────────────────────────────────────────────┘      │   │
│  └────────────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────────┘
```

| Layer | Description | CSS Properties |
| :--- | :--- | :--- |
| **Content** | The actual text/image area. | `width`, `height` |
| **Padding** | Space between the content and the border (inside the box). | `padding`, `padding-top/right/bottom/left` |
| **Border** | The edge line around the padding. | `border`, `border-width`, `border-style`, `border-color`, `border-radius` |
| **Margin** | Space outside the border (between the element and its neighbors). | `margin`, `margin-top/right/bottom/left` |

### `box-sizing` Property:
```css
/* Default: width/height = content ONLY (padding and border add to total size) */
box-sizing: content-box;

/* Recommended: width/height = content + padding + border (total size stays fixed) */
box-sizing: border-box;
```

> [!IMPORTANT]
> Always set `box-sizing: border-box` globally. Without it, adding padding or borders increases the element's total size beyond its declared width/height, causing layout breakage.

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

### `border-radius`:
Rounds the corners of an element:
```css
.card {
    border-radius: 8px;           /* All corners */
    border-radius: 50%;           /* Perfect circle (on a square element) */
    border-radius: 10px 0 10px 0; /* top-left, top-right, bottom-right, bottom-left */
}
```

---

## 4. CSS Units in Depth

### Absolute Units:
| Unit | Description |
| :--- | :--- |
| `px` | Pixels — fixed size, doesn't scale with user preferences. Most common absolute unit. |
| `cm`, `mm`, `in` | Physical measurements — rarely used for screens, mainly for print stylesheets. |

### Relative Units:
| Unit | Relative To | Example |
| :--- | :--- | :--- |
| `%` | Parent element's corresponding property | `width: 50%` → half of parent's width |
| `em` | Parent element's `font-size` | If parent is `16px`, `1.5em` = `24px`. Compounds when nested! |
| `rem` | Root (`<html>`) element's `font-size` | If root is `16px`, `1.5rem` = `24px`. Does NOT compound. |
| `vw` | 1% of the **viewport width** | `100vw` = full browser width |
| `vh` | 1% of the **viewport height** | `100vh` = full browser height |

### `em` vs `rem`:

```css
html { font-size: 16px; }

/* em — relative to PARENT, compounds in nested elements */
.parent { font-size: 20px; }
.parent .child { font-size: 1.5em; }  /* 20px × 1.5 = 30px */
.parent .child .grandchild { font-size: 1.5em; }  /* 30px × 1.5 = 45px! (compounding) */

/* rem — relative to ROOT, predictable everywhere */
.anything { font-size: 1.5rem; }  /* Always 16px × 1.5 = 24px, no matter the nesting */
```

> [!TIP]
> Use `rem` for font sizes and spacing for consistent, scalable design. Use `%` and `vw`/`vh` for responsive widths and heights. Avoid `em` unless you intentionally want compounding (rare).

---

## 5. Typography & Colors

### Font Properties:
```css
.text {
    font-family: 'Inter', 'Arial', sans-serif;  /* Font stack with fallbacks */
    font-size: 1rem;          /* Size of the text */
    font-weight: 700;         /* Boldness: 100 (thin) to 900 (black) */
    font-style: italic;       /* normal | italic | oblique */
    line-height: 1.6;         /* Vertical spacing between lines (unitless multiplier recommended) */
    text-align: center;       /* left | center | right | justify */
    text-decoration: none;    /* none | underline | line-through | overline */
    text-transform: uppercase; /* uppercase | lowercase | capitalize | none */
    letter-spacing: 1px;      /* Space between characters */
    word-spacing: 4px;         /* Space between words */
}
```

### CSS Color Models:

| Model | Syntax | Example |
| :--- | :--- | :--- |
| **Named** | `color: red;` | Limited set (~140 named colors) |
| **Hex** | `color: #ff5733;` | 6-digit hex (RRGGBB). `#f53` is shorthand for `#ff5533`. |
| **RGB** | `color: rgb(255, 87, 51);` | Red (0–255), Green (0–255), Blue (0–255) |
| **RGBA** | `color: rgba(255, 87, 51, 0.5);` | RGB + Alpha channel (0 = transparent, 1 = opaque) |
| **HSL** | `color: hsl(14, 100%, 60%);` | Hue (0–360°), Saturation (0–100%), Lightness (0–100%) |
| **HSLA** | `color: hsla(14, 100%, 60%, 0.5);` | HSL + Alpha transparency |

> [!TIP]
> **HSL** is the most intuitive color model for design work. Adjusting lightness creates shades/tints of the same hue, and adjusting saturation controls vibrancy — much more intuitive than tweaking RGB channels.

---

## 6. Display Properties

The `display` property controls how an element behaves in the document flow:

| Value | Behavior |
| :--- | :--- |
| `block` | Takes full width, starts on a new line. Allows width/height. |
| `inline` | Flows within text. Width/height are **ignored**. Only horizontal margin/padding apply. |
| `inline-block` | Flows inline like text, but **respects** width, height, and vertical padding/margin. |
| `none` | Completely removes the element from the flow (invisible and takes no space). |

```css
/* Make a link behave like a button (inline element that respects width/height) */
a.button {
    display: inline-block;
    width: 200px;
    padding: 12px 24px;
    text-align: center;
}
```

> [!NOTE]
> `display: none` removes the element entirely. If you want to hide an element but keep its space, use `visibility: hidden` instead.

---

## 7. Position Properties

The `position` property determines how an element is placed in the document:

| Value | Behavior | Removed from flow? | Positioned relative to |
| :--- | :--- | :--- | :--- |
| `static` | Default normal flow. `top/right/bottom/left` have no effect. | ❌ | N/A |
| `relative` | Stays in normal flow but can be offset. | ❌ (space preserved) | Its **original position** |
| `absolute` | Removed from flow. Positioned relative to nearest positioned ancestor. | ✅ | Nearest ancestor with `position: relative/absolute/fixed` |
| `fixed` | Removed from flow. Stays fixed on the viewport during scrolling. | ✅ | The **viewport** (browser window) |
| `sticky` | Toggles between `relative` and `fixed` at a defined scroll threshold. | ❌ | Scrolling viewport |

### `absolute` + `relative` Pattern:
```css
/* Parent must be 'relative' to act as the positioning anchor */
.parent {
    position: relative;
}

/* Child is absolutely positioned within the parent */
.child {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

### `sticky` Navbar Example:
```css
nav {
    position: sticky;
    top: 0;           /* Sticks when scrolled to top of viewport */
    background: white;
    z-index: 100;     /* Ensures it stays above other content */
}
```

> [!NOTE]
> `z-index` only works on positioned elements (anything other than `static`). Higher `z-index` values appear in front of lower ones.

---

## 8. Float, Clear & Overflow

### Float:
Originally designed for **text wrapping around images**. Pulls an element out of normal flow and pushes it to the left or right:
```css
img {
    float: left;     /* float: left | right | none */
    margin-right: 16px;
}
```

### Clear:
Prevents an element from wrapping around floated siblings:
```css
.clearfix {
    clear: both;     /* clear: left | right | both | none */
}
```

### The Clearfix Hack (for parent collapse):
When all children float, the parent collapses to zero height. Fix with:
```css
.parent::after {
    content: "";
    display: table;
    clear: both;
}
```

> [!WARNING]
> `float` was used for page layouts before Flexbox and Grid existed. **Avoid using float for layouts in modern CSS** — use Flexbox or Grid instead. Float is still useful for wrapping text around images.

### Overflow:
Controls what happens when content overflows its container:
```css
.container {
    overflow: visible; /* Default: content spills outside */
    overflow: hidden;  /* Clips overflowing content (invisible) */
    overflow: scroll;  /* Always shows scrollbars */
    overflow: auto;    /* Shows scrollbars only when needed */
}

/* Control axes independently */
.container {
    overflow-x: auto;   /* Horizontal overflow */
    overflow-y: hidden;  /* Vertical overflow */
}
```

---

## 9. Flexbox

**Flexbox** is a one-dimensional layout system for arranging items along a **single axis** (row or column).

### Enabling Flexbox:
```css
.container {
    display: flex;           /* Activates flexbox on the container */
    flex-direction: row;     /* row (default) | row-reverse | column | column-reverse */
}
```

### Container Properties (Parent):

| Property | Purpose | Values |
| :--- | :--- | :--- |
| `flex-direction` | Sets the main axis direction. | `row` · `row-reverse` · `column` · `column-reverse` |
| `justify-content` | Aligns items along the **main axis**. | `flex-start` · `flex-end` · `center` · `space-between` · `space-around` · `space-evenly` |
| `align-items` | Aligns items along the **cross axis**. | `flex-start` · `flex-end` · `center` · `stretch` · `baseline` |
| `flex-wrap` | Controls whether items wrap to the next line. | `nowrap` (default) · `wrap` · `wrap-reverse` |
| `gap` | Space between flex items. | `10px` · `1rem` |
| `align-content` | Aligns wrapped lines (only works with `flex-wrap: wrap`). | Same as `justify-content` |

### Item Properties (Children):

| Property | Purpose | Example |
| :--- | :--- | :--- |
| `flex-grow` | How much the item should grow relative to others. | `flex-grow: 1` (shares available space) |
| `flex-shrink` | How much the item should shrink when space is tight. | `flex-shrink: 0` (don't shrink) |
| `flex-basis` | The initial size of the item before growing/shrinking. | `flex-basis: 200px` |
| `flex` | Shorthand for `grow shrink basis`. | `flex: 1 0 auto` |
| `align-self` | Overrides `align-items` for a single item. | `align-self: flex-end` |
| `order` | Changes the visual order of the item. | `order: -1` (moves first) |

### Common Centering Pattern:
```css
/* Perfect center: both horizontally and vertically */
.container {
    display: flex;
    justify-content: center;  /* Main axis (horizontal by default) */
    align-items: center;      /* Cross axis (vertical by default) */
    height: 100vh;
}
```

---

## 10. CSS Grid

**CSS Grid** is a two-dimensional layout system for creating complex **row and column** layouts.

### Enabling Grid:
```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;  /* 3 columns */
    grid-template-rows: auto 1fr auto;        /* 3 rows */
    gap: 16px;                                /* Space between cells */
}
```

### Container Properties:

| Property | Purpose | Example |
| :--- | :--- | :--- |
| `grid-template-columns` | Defines column tracks. | `200px 1fr 1fr` · `repeat(3, 1fr)` |
| `grid-template-rows` | Defines row tracks. | `auto 300px auto` |
| `gap` / `row-gap` / `column-gap` | Spacing between grid cells. | `gap: 16px` · `row-gap: 10px; column-gap: 20px` |
| `justify-items` | Horizontal alignment of items within their cell. | `start` · `end` · `center` · `stretch` |
| `align-items` | Vertical alignment of items within their cell. | Same as above |
| `justify-content` | Horizontal alignment of the **entire grid** within the container. | `start` · `center` · `space-between` |
| `align-content` | Vertical alignment of the **entire grid** within the container. | Same as above |

### Item Placement Properties:

```css
.item {
    grid-column: 1 / 3;       /* Span from column line 1 to line 3 (2 columns) */
    grid-row: 1 / 2;          /* Span from row line 1 to line 2 (1 row) */
    grid-column: span 2;      /* Span 2 columns from current position */
}
```

### The `fr` Unit:
The `fr` (fraction) unit distributes **available space** proportionally:
```css
grid-template-columns: 1fr 2fr 1fr;
/* Column 2 gets twice the space of columns 1 and 3 */
```

### `repeat()` Function:
```css
grid-template-columns: repeat(3, 1fr);       /* Three equal columns */
grid-template-columns: repeat(4, 200px);     /* Four 200px columns */
```

---

## 11. Advanced Grids (Autofit, Minmax & Areas)

### `auto-fit` & `auto-fill` with `minmax()`:
Creates responsive grids without media queries:

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}
```

| Function | Behavior |
| :--- | :--- |
| `auto-fill` | Creates as many tracks as fit, even if they are empty. |
| `auto-fit` | Creates as many tracks as fit, then **collapses** empty tracks and stretches items to fill. |
| `minmax(min, max)` | Each track is at least `min` and at most `max`. |

> [!TIP]
> `repeat(auto-fit, minmax(250px, 1fr))` is the most powerful responsive pattern in CSS Grid — items automatically wrap and resize without a single media query.

### Grid Template Areas:
Name specific regions of your grid for a visual, readable layout:

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header  header  header"
        "sidebar content aside"
        "footer  footer  footer";
    gap: 16px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

> [!NOTE]
> Area names must form a rectangle. Use `.` to leave a cell empty: `"header header ."`.

---

## 12. Media Queries & CSS Variables

### CSS Custom Properties (Variables):
Define reusable values that can be updated in one place:

```css
:root {
    --primary-color: #6366f1;
    --font-size-base: 16px;
    --spacing-md: 1rem;
    --border-radius: 8px;
}

.button {
    background-color: var(--primary-color);
    font-size: var(--font-size-base);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
}
```

- **`:root`** is the highest-level selector (equivalent to `html`), making variables globally accessible.
- **`var(--name, fallback)`** retrieves a variable value. The optional fallback is used if the variable is undefined.
- Variables **cascade and inherit** — you can override them in child selectors for theming.

### Media Queries:
Apply styles conditionally based on the viewport or device characteristics:

```css
/* Mobile First: Base styles for small screens */
.container {
    padding: 1rem;
    flex-direction: column;
}

/* Tablet (768px and above) */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        flex-direction: row;
    }
}

/* Desktop (1024px and above) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### Common Breakpoints:

| Device | Breakpoint |
| :--- | :--- |
| Mobile | `< 640px` |
| Tablet | `≥ 768px` |
| Laptop | `≥ 1024px` |
| Desktop | `≥ 1280px` |

> [!IMPORTANT]
> Always design **mobile-first** — write base styles for small screens, then use `min-width` media queries to add complexity for larger screens. This approach loads simpler styles first for bandwidth-constrained mobile devices.

---

## 13. Shadow Effects

### `text-shadow`:
Adds shadow to text characters:
```css
h1 {
    /* offset-x | offset-y | blur-radius | color */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    /* Multiple shadows (comma-separated) */
    text-shadow:
        1px 1px 2px black,
        0 0 10px blue,
        0 0 20px darkblue;
}
```

### `box-shadow`:
Adds shadow to the entire box of an element:
```css
.card {
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -2px rgba(0, 0, 0, 0.1);

    /* Inset shadow (inside the element) */
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

| Parameter | Description |
| :--- | :--- |
| `offset-x` | Horizontal shadow offset (positive = right, negative = left) |
| `offset-y` | Vertical shadow offset (positive = down, negative = up) |
| `blur-radius` | How blurry the shadow is (0 = sharp) |
| `spread-radius` | Increases/decreases the shadow size (only for `box-shadow`) |
| `inset` | Places the shadow inside the element (only for `box-shadow`) |

---

## 14. 2D Transforms

The `transform` property modifies the shape and position of elements **without affecting layout flow**:

```css
.element {
    /* Move element horizontally and vertically */
    transform: translate(50px, 100px);
    transform: translateX(50px);
    transform: translateY(100px);

    /* Rotate clockwise */
    transform: rotate(45deg);       /* Positive = clockwise */
    transform: rotate(-45deg);      /* Negative = counter-clockwise */

    /* Resize element */
    transform: scale(1.5);          /* 1 = original, 1.5 = 150%, 0.5 = 50% */
    transform: scaleX(2);           /* Scale horizontally only */

    /* Skew (shear/tilt) */
    transform: skew(20deg, 10deg);  /* Skew along X and Y axes */
    transform: skewX(20deg);

    /* Combine multiple transforms */
    transform: translate(50px, 0) rotate(45deg) scale(1.2);
}
```

### `transform-origin`:
Changes the anchor point around which transforms are applied:
```css
.element {
    transform-origin: center;        /* Default: center of the element */
    transform-origin: top left;      /* Rotate/scale from the top-left corner */
    transform-origin: 50% 100%;      /* Bottom center */
}
```

> [!NOTE]
> Transforms are **visual-only** — the element still occupies its original space in the document flow. Surrounding elements don't shift.

---

## 15. 3D Transforms

CSS can create the illusion of depth with 3D transformations:

### `perspective`:
Defines the depth of the 3D space — how far the viewer is from the element:
```css
.container {
    perspective: 800px;     /* Lower values = more dramatic 3D effect */
}
```

### 3D Transform Functions:
```css
.element {
    transform: rotateX(45deg);      /* Rotate around horizontal axis (tilt forward/back) */
    transform: rotateY(45deg);      /* Rotate around vertical axis (spin left/right) */
    transform: rotateZ(45deg);      /* Same as 2D rotate() */
    transform: translateZ(100px);   /* Move toward/away from viewer */
    transform: rotate3d(1, 1, 0, 45deg); /* Rotate around custom axis */
}
```

### 3D Card Flip:
```css
.card-container {
    perspective: 1000px;
    width: 300px;
    height: 200px;
}

.card {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;   /* Children exist in 3D space */
    transition: transform 0.6s;
}

.card-container:hover .card {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;     /* Hide the back face when rotated */
}

.card-back {
    transform: rotateY(180deg);      /* Pre-rotate so it shows when card flips */
}
```

| Property | Purpose |
| :--- | :--- |
| `perspective` | Sets the virtual distance from the viewer. Applied to the **parent**. |
| `transform-style: preserve-3d` | Makes child elements participate in 3D space (instead of being flattened). |
| `backface-visibility: hidden` | Hides the element when it faces away from the viewer. |

---

## 16. Transition Effects

**Transitions** create smooth animations between two states (e.g., hover → active):

```css
.button {
    background-color: #6366f1;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;

    /* Transition shorthand: property | duration | timing-function | delay */
    transition: all 0.3s ease-in-out;
}

.button:hover {
    background-color: #4f46e5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}
```

### Transition Properties:

| Property | Purpose | Example |
| :--- | :--- | :--- |
| `transition-property` | Which CSS property to animate. | `background-color`, `transform`, `all` |
| `transition-duration` | How long the transition takes. | `0.3s`, `200ms` |
| `transition-timing-function` | The speed curve of the transition. | `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()` |
| `transition-delay` | Wait time before the transition starts. | `0s`, `0.1s` |

### Timing Functions Visualized:
```
ease          ──╱─────   (slow start, fast middle, slow end — DEFAULT)
linear        ──────────  (constant speed)
ease-in       ──╱──────   (starts slow, ends fast)
ease-out      ────────╲   (starts fast, ends slow)
ease-in-out   ──╱────╲    (slow start and end)
```

> [!TIP]
> Always specify exact properties instead of `all` for better performance: `transition: transform 0.3s ease, opacity 0.3s ease;` — this tells the browser exactly what to optimize.

---

## 17. CSS Animations & Keyframes

**Animations** allow multi-step, automatically triggering visual changes without user interaction.

### `@keyframes` — Defining the Animation:
```css
/* Using percentage milestones */
@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Using from/to (equivalent to 0%/100%) */
@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
```

### Applying an Animation:
```css
.element {
    /* animation: name | duration | timing | delay | iteration | direction | fill-mode */
    animation: slideIn 0.6s ease-out 0s 1 normal forwards;
}
```

### Animation Properties:

| Property | Purpose | Example |
| :--- | :--- | :--- |
| `animation-name` | Name of the `@keyframes` rule. | `slideIn` |
| `animation-duration` | How long one cycle takes. | `0.6s`, `2s` |
| `animation-timing-function` | Speed curve. | `ease`, `linear`, `cubic-bezier(0.4, 0, 0.2, 1)` |
| `animation-delay` | Wait before starting. | `0s`, `0.3s` |
| `animation-iteration-count` | How many times to repeat. | `1`, `3`, `infinite` |
| `animation-direction` | Direction of play. | `normal`, `reverse`, `alternate`, `alternate-reverse` |
| `animation-fill-mode` | What styles apply before/after the animation. | `none`, `forwards`, `backwards`, `both` |
| `animation-play-state` | Pause/resume. | `running`, `paused` |

### `animation-fill-mode` Explained:

| Value | Before Animation | After Animation |
| :--- | :--- | :--- |
| `none` | Original styles | Original styles (snaps back) |
| `forwards` | Original styles | **Retains final keyframe** styles |
| `backwards` | **Applies first keyframe** during delay | Original styles |
| `both` | Applies first keyframe during delay | Retains final keyframe styles |

### Practical Example — Bouncing Loader:
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-20px); }
}

.loader-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #6366f1;
    animation: bounce 0.6s ease-in-out infinite;
}

.loader-dot:nth-child(2) { animation-delay: 0.1s; }
.loader-dot:nth-child(3) { animation-delay: 0.2s; }
```

> [!NOTE]
> **Transitions** need a trigger (`:hover`, class toggle) and animate between two states. **Animations** run automatically and can have unlimited keyframe steps.
