# Style Guide
## Historic Studies Limited

This guide documents the styling system, design tokens, and conventions used throughout the site. The goal is to keep styling consistent, easy to edit, and scalable.

---

## Source of Truth

- `styles/variables.css` - Design tokens (colors, spacing, typography, layout, borders)
- `styles/global.css` - Reset + base styles
- `styles/utils.css` - Utility classes

---

## Color Palette

| Token | Value | Usage |
| --- | --- | --- |
| `--color-surface` | `#f5f0e6` | Page background base |
| `--color-surface-alt` | `#ffffff` | Alternate surface |
| `--color-panel` | `#fff9f1` | Card and panel surfaces |
| `--color-panel-strong` | `#f1e7d9` | Header/footer bands |
| `--color-ink` | `#1f1a17` | Primary text |
| `--color-ink-muted` | `#4b4239` | Secondary text |
| `--color-accent` | `#2f5d62` | Accent/CTA |
| `--color-accent-contrast` | `#fef9f2` | Text on accent backgrounds |
| `--color-accent-soft` | `#d7e7e5` | Accent wash |
| `--color-border` | `#d8c7b2` | Subtle borders |
| `--color-border-strong` | `#2a2420` | Strong borders |
| `--color-wash-1` | `#fdf7ef` | Background gradient |
| `--color-wash-2` | `#e7f1f0` | Background gradient |
| `--color-wash-3` | `#f2e7d7` | Background gradient |

---

## Typography

- **Primary font:** `var(--font-serif)` (Iowan Old Style, Palatino)
- **Secondary font:** `var(--font-sans)` (Gill Sans, Optima)
- **Base size:** `16px` (browser default)
- **Scale:**
  - `--font-size-xs` (10px)
  - `--font-size-sm` (12px)
  - `--font-size-md` (14px)
  - `--font-size-lg` (18px)
  - `--font-size-xl` (24px)
  - `--font-size-2xl` (36px)
  - `--font-size-3xl` (48px)
- **Line height:** `var(--line-height-base)` (1.5)

---

## Spacing Scale

Use spacing tokens instead of raw pixel values whenever possible.

- `--space-0-5` (2px)
- `--space-1` (4px)
- `--space-2` (8px)
- `--space-3` (12px)
- `--space-4` (16px)
- `--space-5` (20px)
- `--space-6` (24px)
- `--space-7` (32px)
- `--space-8` (40px)
- `--space-9` (48px)
- `--space-10` (64px)
- `--space-11` (80px)

---

## Layout Tokens

- `--layout-width-mobile` (94vw)
- `--layout-width-desktop` (90vw)
- `--layout-min-width` (500px)
- `--layout-max-width` (1200px)
- `--header-height-mobile` (80px)
- `--header-height-desktop` (275px)
- `--footer-height-mobile` (90px)
- `--footer-height-desktop` (125px)
- `--carousel-height` (400px)
- `--gutter-mobile` (15px)
- `--gutter-desktop` (25px)
- `--panel-padding-mobile` (20px)
- `--panel-padding-desktop` (32px)
- `--section-gap-mobile` (20px)
- `--section-gap-desktop` (32px)

---

## Borders, Radius, and Shadows

- `--border-thin` (1px solid `--color-border`)
- `--border-strong` (2px solid `--color-border-strong`)
- `--border-contrast` (2px solid `--color-surface-alt`)
- `--radius-sm` (6px)
- `--radius-md` (12px)
- `--radius-lg` (20px)
- `--shadow-soft` (0 8px 24px rgba(45, 35, 28, 0.12))
- `--shadow-strong` (0 18px 40px rgba(45, 35, 28, 0.2))

---

## Breakpoints

Mobile-first styling is the default. Apply desktop overrides using:

```
@media screen and (min-width: 768px) {
  /* desktop styles */
}
```

---

## Utility Classes

Defined in `styles/utils.css`:

- `.visuallyHidden` - Accessibility helper
- `.textCenter` - Center-align text
- `.stackSm` / `.stackMd` - Vertical spacing helpers
- `.inlineLink` - Styled inline links

---

## Usage Examples

```css
.card {
  background: var(--color-panel);
  border: var(--border-thin);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.title {
  font-size: var(--font-size-xl);
  color: var(--color-ink);
}
```

---

## Adding New Tokens

1. Add the token to `styles/variables.css`.
2. Update this guide with the new token and intended usage.
3. Use the new token in component or page styles instead of raw values.
