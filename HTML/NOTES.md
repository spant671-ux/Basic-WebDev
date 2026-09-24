# 🏗️ HTML Study Notes & Handbook

A neat, structured companion covering core HTML concepts, elements, attributes, and practical lessons from the projects.

---

## 📌 Table of Contents
1. [What is HTML?](#1-what-is-html)
2. [HTML Document Structure](#2-html-document-structure)
3. [Inline vs Block Elements](#3-inline-vs-block-elements)
4. [Images, Lists & Tables](#4-images-lists--tables)
5. [Forms & Input Elements](#5-forms--input-elements)
6. [IDs & Classes](#6-ids--classes)
7. [Semantic HTML5 Tags](#7-semantic-html5-tags)
8. [HTML Entities](#8-html-entities)
9. [Multimedia Elements](#9-multimedia-elements)
10. [Bookmark Manager & Links](#10-bookmark-manager--links)

---

## 1. What is HTML?

**HTML** (HyperText Markup Language) is the standard markup language for creating web pages. It defines the **structure** and **content** of a web page using a system of **tags** and **attributes**.

### Core Highlights:
- **Not a programming language**: HTML is a *markup* language — it describes content structure, not logic.
- **Tag-Based**: Content is wrapped in opening (`<tag>`) and closing (`</tag>`) tags.
- **Browser-Rendered**: Browsers parse HTML files and render them visually as web pages.
- **Foundation of the Web**: Every website starts with HTML. CSS handles styling, JavaScript handles behavior.

---

## 2. HTML Document Structure

Every HTML5 document follows a standard boilerplate structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Page content goes here -->
</body>
</html>
```

### Key Tags Explained:

| Tag | Purpose |
| :--- | :--- |
| `<!DOCTYPE html>` | Declares the document as HTML5 (not a tag itself, but a declaration). |
| `<html lang="en">` | Root element of the page. `lang` attribute helps search engines and screen readers. |
| `<head>` | Contains metadata — not visible on the page itself. Includes `<title>`, `<meta>`, stylesheets, and scripts. |
| `<meta charset="UTF-8">` | Sets character encoding to UTF-8, supporting all international characters and symbols. |
| `<meta name="viewport" ...>` | Ensures responsive design on mobile devices by controlling the viewport width and initial zoom. |
| `<title>` | Sets the text shown in the browser tab and used by search engines for SEO. |
| `<body>` | Contains all visible page content (text, images, links, etc.). |

> [!NOTE]
> Comments in HTML are written as `<!-- comment -->`. They are invisible in the browser but visible in the source code.

---

## 3. Inline vs Block Elements

HTML elements fall into two display categories that determine how they flow on the page:

### Block-Level Elements:
- Start on a **new line** and take up the **full width** available.
- Can contain other block and inline elements.
- Examples: `<div>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<ol>`, `<section>`, `<header>`, `<footer>`

```html
<div>This is a block element — takes full width.</div>
<p>This paragraph starts on a new line.</p>
```

### Inline Elements:
- Do **not** start on a new line — they flow within the surrounding text.
- Only take up as much width as their content needs.
- Examples: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`, `<br>`

```html
<p>This is <span>inline</span> and <a href="#">this is a link</a>.</p>
```

### Key Differences:

| Property | Block Elements | Inline Elements |
| :--- | :--- | :--- |
| **Starts on new line?** | ✅ Yes | ❌ No |
| **Takes full width?** | ✅ Yes | ❌ Only content width |
| **Can contain block elements?** | ✅ Yes | ❌ No (only inline/text) |
| **Width/Height settable?** | ✅ Yes | ❌ No (use `inline-block`) |

> [!TIP]
> `<div>` is the generic **block** container, and `<span>` is the generic **inline** container. Use them when no semantic tag fits.

---

## 4. Images, Lists & Tables

### Images (`<img>`):
The `<img>` tag is a **self-closing**, **inline** element for embedding images:

```html
<img src="image.jpg" alt="Description of image" width="300" height="200">
```

- **`src`**: Path to the image file (relative or absolute URL).
- **`alt`**: Alternative text shown if the image fails to load. Critical for **accessibility** (screen readers) and **SEO**.
- **`width` / `height`**: Control image dimensions in pixels.

> [!IMPORTANT]
> Always include the `alt` attribute. It improves accessibility for visually impaired users and helps search engines understand your content.

### Lists:

**Unordered List** (`<ul>`) — Bullet points:
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

**Ordered List** (`<ol>`) — Numbered items:
```html
<ol>
    <li>First</li>
    <li>Second</li>
</ol>
```

**Description List** (`<dl>`) — Term/definition pairs:
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

### Tables:

```html
<table>
    <caption>Student Grades</caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>A+</td>
        </tr>
        <tr>
            <td colspan="2">No more students</td>
        </tr>
    </tbody>
</table>
```

| Tag | Purpose |
| :--- | :--- |
| `<table>` | Container for the entire table. |
| `<caption>` | Title/description for the table. |
| `<thead>` | Semantic wrapper for header rows. |
| `<tbody>` | Semantic wrapper for body data rows. |
| `<tr>` | Table Row — contains cells. |
| `<th>` | Table Header Cell — bold and centered by default. |
| `<td>` | Table Data Cell — regular content. |
| `colspan="N"` | Merges `N` columns horizontally. |
| `rowspan="N"` | Merges `N` rows vertically. |

---

## 5. Forms & Input Elements

Forms are the primary way to collect user input on a web page.

### Basic Form Structure:
```html
<form action="/submit" method="POST">
    <!-- Input fields go here -->
    <button type="submit">Submit</button>
</form>
```

- **`action`**: URL where form data is sent upon submission.
- **`method`**: HTTP method — `GET` (data in URL) or `POST` (data in body, more secure).

### Common Input Types:

| Input Type | Code | Purpose |
| :--- | :--- | :--- |
| **Text** | `<input type="text">` | Single-line text input. |
| **Password** | `<input type="password">` | Masked text input. |
| **Email** | `<input type="email">` | Email with built-in validation. |
| **Number** | `<input type="number">` | Numeric input with spinners. |
| **Radio** | `<input type="radio">` | Single selection from a group (same `name`). |
| **Checkbox** | `<input type="checkbox">` | Multiple selections. |
| **Submit** | `<input type="submit">` | Submits the form. |

### Labels, Textareas & Dropdowns:

```html
<!-- Label linked to input via 'for' attribute matching 'id' -->
<label for="username">Username:</label>
<input type="text" id="username" name="username" placeholder="Enter your username">

<!-- Multi-line text input -->
<textarea name="comment" rows="4" cols="50"></textarea>

<!-- Dropdown selection -->
<select name="fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
</select>
```

### Key Form Attributes:

| Attribute | Purpose |
| :--- | :--- |
| `name` | Identifies the input data when submitted (used as the key in key-value pairs). |
| `id` | Unique identifier — used to associate `<label>` with its input via `for`. |
| `placeholder` | Greyed-out hint text inside the input field. |
| `value` | Pre-filled or submitted value of the input. |
| `required` | Prevents form submission if the field is empty (built-in HTML5 validation). |

> [!NOTE]
> Radio buttons with the **same `name` attribute** form a group where only one can be selected at a time. Checkboxes are independent by default.

---

## 6. IDs & Classes

IDs and Classes are **global attributes** used to target elements for CSS styling and JavaScript manipulation.

### `id` Attribute:
- **Unique** — only one element per page should have a given `id`.
- Used for **specific, one-off targeting**.
- In CSS: selected with `#` → `#header { ... }`
- In JS: accessed via `document.getElementById("header")`

### `class` Attribute:
- **Reusable** — multiple elements can share the same class name.
- An element can have **multiple classes** separated by spaces.
- In CSS: selected with `.` → `.card { ... }`
- In JS: accessed via `document.getElementsByClassName("card")`

```html
<!-- Unique ID -->
<h1 id="main-title">Welcome</h1>

<!-- Reusable Classes (multiple classes on one element) -->
<div class="card featured dark-theme">Content</div>
<div class="card">Another card</div>
```

```css
/* ID Selector — highest specificity */
#main-title {
    color: navy;
}

/* Class Selector — reusable */
.card {
    border: 1px solid #ccc;
    padding: 16px;
}

.featured {
    border-color: gold;
}
```

### CSS Selector Specificity (Lowest → Highest):
```
Element (p, div)  →  Class (.card)  →  ID (#header)  →  Inline Style  →  !important
```

> [!WARNING]
> Avoid using `id` for styling when `class` can do the job. IDs have very high specificity and make CSS harder to override and maintain.

---

## 7. Semantic HTML5 Tags

**Semantic tags** describe the **meaning** and **role** of the content they contain, rather than just how it looks.

### Why Use Semantic HTML?
1. **Accessibility**: Screen readers can navigate using landmarks (`<nav>`, `<main>`, `<footer>`).
2. **SEO**: Search engines understand the page structure better, improving ranking.
3. **Readability**: Code becomes self-documenting — developers instantly understand the layout.

### Common Semantic Elements:

```html
<header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <article>
            <h2>Blog Post Title</h2>
            <p>Content goes here...</p>
        </article>
    </section>

    <aside>
        <p>Sidebar content, ads, related links.</p>
    </aside>
</main>

<footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>
```

| Semantic Tag | Purpose |
| :--- | :--- |
| `<header>` | Introductory content or navigation links (typically at the top). |
| `<nav>` | Block of navigation links. |
| `<main>` | The dominant, unique content of the page (only one per page). |
| `<section>` | Thematic grouping of content, typically with a heading. |
| `<article>` | Self-contained, independently distributable content (blog post, news article). |
| `<aside>` | Content tangentially related to the main content (sidebars, pull quotes). |
| `<footer>` | Footer for the nearest section or the page (copyright, links). |
| `<figure>` / `<figcaption>` | Self-contained media (image, diagram) with an optional caption. |

### Non-Semantic vs Semantic:
```html
<!-- ❌ Non-Semantic: Meaningless containers -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="content">...</div>

<!-- ✅ Semantic: Self-describing structure -->
<header>...</header>
<nav>...</nav>
<main>...</main>
```

---

## 8. HTML Entities

**HTML Entities** are special character codes used to display reserved characters or symbols that can't be typed directly in HTML.

### Why Use Entities?
- Characters like `<`, `>`, `&` are reserved in HTML syntax. Typing `<` directly would be interpreted as a tag opening.
- Entities allow you to display these characters as visible text.

### Common HTML Entities:

| Character | Entity Name | Entity Number | Description |
| :--- | :--- | :--- | :--- |
| `<` | `&lt;` | `&#60;` | Less than (reserved — opens tags) |
| `>` | `&gt;` | `&#62;` | Greater than (reserved — closes tags) |
| `&` | `&amp;` | `&#38;` | Ampersand (reserved — starts entities) |
| `"` | `&quot;` | `&#34;` | Double quotation mark |
| `'` | `&apos;` | `&#39;` | Apostrophe / single quote |
| ` ` | `&nbsp;` | `&#160;` | Non-breaking space (prevents line wraps) |
| `©` | `&copy;` | `&#169;` | Copyright symbol |
| `®` | `&reg;` | `&#174;` | Registered trademark |
| `™` | `&trade;` | `&#8482;` | Trademark |

### Usage Example:
```html
<!-- Display: 5 < 10 & 10 > 5 -->
<p>5 &lt; 10 &amp; 10 &gt; 5</p>

<!-- Non-breaking spaces for extra spacing -->
<p>Hello&nbsp;&nbsp;&nbsp;World</p>

<!-- Copyright in footer -->
<footer>&copy; 2024 My Website</footer>
```

> [!TIP]
> Use `&nbsp;` (non-breaking space) when you need multiple spaces in a row. HTML collapses consecutive whitespace characters into a single space by default.

---

## 9. Multimedia Elements

### Video (`<video>`):
```html
<video width="400" height="300" controls autoplay loop muted poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

| Attribute | Purpose |
| :--- | :--- |
| `controls` | Shows play/pause, volume, and seek bar UI. |
| `autoplay` | Starts playing automatically (requires `muted` in most browsers). |
| `loop` | Restarts the video when it ends. |
| `muted` | Starts with sound muted. |
| `poster` | Image displayed before the video plays. |
| `width` / `height` | Sets the player dimensions. |

### Audio (`<audio>`):
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

### SVG (Scalable Vector Graphics):
SVGs can be embedded directly in HTML for resolution-independent graphics:
```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
```

### iFrame (Inline Frame):
Used to embed external content (other websites, YouTube videos, maps):
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID"
        width="560" height="315"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen>
</iframe>
```

> [!CAUTION]
> Use `<iframe>` carefully — embedding untrusted external content can expose your site to security risks (clickjacking). Many websites block being embedded via `X-Frame-Options` headers.

---

## 10. Bookmark Manager & Links

### Headings Hierarchy (`<h1>` to `<h6>`):
HTML provides six levels of headings. Use them in **logical order** to create a document outline:

```html
<h1>Main Title (Only one per page)</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>
```

> [!IMPORTANT]
> Every page should have exactly **one `<h1>`**. Don't skip heading levels (e.g., jumping from `<h2>` to `<h4>`) — it breaks the document outline for screen readers and SEO.

### Hyperlinks (`<a>`):
```html
<!-- Basic link -->
<a href="https://google.com">Go to Google</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank">Google (New Tab)</a>

<!-- Internal page link (bookmark/anchor) -->
<a href="#section-2">Jump to Section 2</a>

<!-- Anchor target -->
<h2 id="section-2">Section 2</h2>
```

### `target` Attribute Values:

| Value | Behavior |
| :--- | :--- |
| `_self` | Opens in the **same tab** (default). |
| `_blank` | Opens in a **new tab/window**. |
| `_parent` | Opens in the parent frame. |
| `_top` | Opens in the full body of the window (breaks out of iframes). |

### Internal Bookmarks:
Use the `id` attribute on any element to create an anchor target, then link to it with `#id`:
```html
<nav>
    <a href="#intro">Introduction</a>
    <a href="#features">Features</a>
    <a href="#contact">Contact</a>
</nav>

<section id="intro">...</section>
<section id="features">...</section>
<section id="contact">...</section>
```
