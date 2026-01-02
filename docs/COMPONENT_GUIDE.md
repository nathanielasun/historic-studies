# Component Guide
## Historic Studies Limited Website

**Last Updated:** January 2, 2026
**Phase:** Phase 2 - Component Refactoring
**For:** Developers & Maintainers

---

## Overview

Phase 2 introduced a modern, modular component architecture that significantly reduces code duplication and improves maintainability. This guide documents all new components and their usage.

### Key Improvements

✅ **Unified ImageCard**: 4 component variants reduced to 1 (53% code reduction)
✅ **ServiceTemplate**: 4 service pages reduced to 1 dynamic route (75% code reduction)
✅ **Layout Component**: Consistent page structure across all pages
✅ **Section Component**: Reusable content wrapper with variants

---

## Component Architecture

### Directory Structure

```
components/
├── layout/              # Layout components
│   ├── Layout.js       # Main layout wrapper
│   ├── Header/
│   │   └── Header.js   # Site header
│   └── Footer/
│       └── Footer.js   # Site footer
├── ui/                  # Reusable UI components
│   ├── ImageCard/
│   │   ├── ImageCard.js
│   │   └── ImageCard.module.css
│   ├── Section/
│   │   ├── Section.js
│   │   └── Section.module.css
│   └── Button/         # (Future)
└── templates/           # Page templates
    └── ServiceTemplate.js
```

---

## Components

### 1. Layout Component

**Location:** `components/layout/Layout.js`

**Purpose:** Provides consistent page structure with Header and Footer

**Usage:**

```javascript
import Layout from '../components/layout/Layout';

export default function MyPage() {
    return (
        <Layout>
            <h1>Page Content</h1>
        </Layout>
    );
}
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Page content |

---

### 2. ImageCard Component

**Location:** `components/ui/ImageCard/ImageCard.js`

**Purpose:** Unified component for all image/text card layouts

**Replaces:**
- `Imagecard_l` (image-left)
- `Imagecard_r` (image-right)
- `Imagecard_m` (image-middle)
- `Imagecard_db` (double-bottom)

**Usage:**

#### Image Left Layout

```javascript
import ImageCard from '../components/ui/ImageCard/ImageCard';

<ImageCard
    variant="image-left"
    image={{
        src: "/static/images/example.jpg",
        alt: "Description",
        width: 400,
        height: 300
    }}
    title="Card Title"
    text="Card content text..."
/>
```

#### Image Right Layout

```javascript
<ImageCard
    variant="image-right"
    image={{
        src: "/static/images/example.jpg",
        alt: "Description",
        width: 400,
        height: 300
    }}
    title="Card Title"
    text="Card content text..."
/>
```

#### Image Middle Layout (Two Images)

```javascript
<ImageCard
    variant="image-middle"
    images={[
        {
            src: "/static/images/image1.jpg",
            alt: "First image",
            width: 300,
            height: 400
        },
        {
            src: "/static/images/image2.jpg",
            alt: "Second image",
            width: 300,
            height: 400
        }
    ]}
    title="Card Title"
    text="Card content with images on sides..."
/>
```

#### Double Bottom Layout (Two Images Below)

```javascript
<ImageCard
    variant="double-bottom"
    images={[
        {
            src: "/static/images/image1.jpg",
            alt: "First image",
            width: 400,
            height: 300
        },
        {
            src: "/static/images/image2.jpg",
            alt: "Second image",
            width: 400,
            height: 300
        }
    ]}
    title="Card Title"
    text="Card content above images..."
/>
```

#### JSX Titles (for linked titles)

```javascript
import Link from 'next/link';

<ImageCard
    variant="image-left"
    image={imageData}
    title={
        <Link href="https://example.com" target="_blank">
            Linked Title
        </Link>
    }
    text="Card content..."
/>
```

**Props:**

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| variant | string | 'image-left' | No | Layout variant: 'image-left', 'image-right', 'image-middle', 'double-bottom' |
| title | string\|ReactNode | - | Yes | Card title (can be JSX for links) |
| text | string | - | Yes | Card content (supports HTML via dangerouslySetInnerHTML) |
| image | object | - | Conditional | Single image object (for left/right variants) |
| images | array | - | Conditional | Array of image objects (for middle/double-bottom) |
| className | string | '' | No | Additional CSS classes |
| style | object | {} | No | Inline styles |

**Image Object Structure:**

```javascript
{
    src: "/static/images/example.jpg",  // Image path
    alt: "Description",                  // Alt text for accessibility
    width: 400,                          // Width in pixels
    height: 300                          // Height in pixels
}
```

**Features:**

- ✅ Background blur effect on first image
- ✅ Next.js Image optimization
- ✅ Responsive design (mobile/desktop)
- ✅ Support for JSX titles
- ✅ HTML content via dangerouslySetInnerHTML

---

### 3. Section Component

**Location:** `components/ui/Section/Section.js`

**Purpose:** Wrapper for content sections with consistent styling

**Usage:**

```javascript
import Section from '../components/ui/Section/Section';

<Section id="about" background="default">
    <h2>Section Title</h2>
    <p>Section content...</p>
</Section>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Section content |
| id | string | - | Section ID for navigation |
| background | string | 'default' | Background variant: 'default', 'alternate', 'transparent' |
| className | string | '' | Additional CSS classes |
| style | object | {} | Inline styles |

**Background Variants:**

- `default`: Light blue background (#ebffff)
- `alternate`: White background
- `transparent`: No background

---

### 4. ServiceTemplate Component

**Location:** `components/templates/ServiceTemplate.js`

**Purpose:** Reusable template for all service pages

**Usage:**

Used internally by the dynamic service route (`pages/services/[service].js`). Handles:
- Head meta tags
- Page title with customizable suffix
- Project rendering with ImageCard
- Client info formatting
- Linked titles (published works)
- Border styling (cultural resources)

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| service | object | - | Service data from JSON |
| titleSuffix | string | 'Service Examples' | Suffix for page title |
| showClient | boolean | true | Whether to show client info |

**Service Data Structure:**

```javascript
{
    slug: "specialty-research",
    title: "Specialty Research",
    meta: {
        title: "SEO Title",
        ogTitle: "OG Title",
        ogType: "website",
        description: "SEO description"
    },
    projects: [
        {
            id: "unique-id",
            title: "Project Title",
            layout: "image-left",
            description: "Project description...",
            client: {
                name: "Client Name",
                location: "City, State"
            },
            image: {
                src: "/path/to/image.jpg",
                alt: "Alt text",
                width: 400,
                height: 300
            }
        }
    ]
}
```

---

## Migration Guide

### Migrating from Old ImageCard Components

**Before (Old Components):**

```javascript
import {Imagecard_l, Imagecard_r, Imagecard_m} from '../components/imagecard';

<Imagecard_l
    imageurl="/static/images/example.jpg"
    imagealt="Description"
    width={400}
    height={300}
    title="Title"
    text="Content..."
/>
```

**After (Unified Component):**

```javascript
import ImageCard from '../components/ui/ImageCard/ImageCard';

<ImageCard
    variant="image-left"
    image={{
        src: "/static/images/example.jpg",
        alt: "Description",
        width: 400,
        height: 300
    }}
    title="Title"
    text="Content..."
/>
```

### Key Differences

1. **Import Path:** Changed from `../components/imagecard` to `../components/ui/ImageCard/ImageCard`
2. **Component Name:** All variants use `ImageCard` with `variant` prop
3. **Image Props:** Individual props (`imageurl`, `imagealt`, `width`, `height`) consolidated into `image` object
4. **Multi-Image:** `imageProps` array replaced with `images` array of objects

---

## Best Practices

### 1. Use Correct Variant

Choose the appropriate variant for your layout:

- **image-left**: Standard left image, right text
- **image-right**: Standard right image, left text
- **image-middle**: Two images flanking center text
- **double-bottom**: Text above, two images below

### 2. Provide Alt Text

Always provide descriptive alt text for accessibility:

```javascript
image={{
    src: "/static/images/historical-site.jpg",
    alt: "Historic building from 1850s",  // ✅ Good
    // alt: "image"                        // ❌ Bad
}}
```

### 3. Optimize Images

- Keep images under 500KB
- Use appropriate dimensions (don't serve 4K images for 400px display)
- Use Next.js Image component benefits (automatic optimization)

### 4. Use Section Component

Wrap page sections for consistent styling:

```javascript
<Section id="services" background="default">
    {/* Content */}
</Section>
```

### 5. Leverage ServiceTemplate

For new service pages, use the dynamic route pattern:
- Add JSON file to `data/services/`
- Route automatically created
- No page component needed

---

## Component Styling

### CSS Modules

All components use CSS Modules for scoped styling:

- **ImageCard:** `ImageCard.module.css`
- **Section:** `Section.module.css`

### Modifying Styles

To customize component styles:

1. Locate the component's CSS module file
2. Edit styles (changes apply to all uses of component)
3. Or use `className` prop to add page-specific styles

**Example:**

```javascript
// Custom styling via className
<ImageCard
    variant="image-left"
    className="custom-card"
    image={imageData}
    title="Title"
    text="Content"
/>
```

---

## Code Reduction Metrics

### Before Phase 2

| Metric | Count |
|--------|-------|
| ImageCard components | 4 files |
| ImageCard total lines | ~264 lines |
| Service page files | 4 files |
| Service page total lines | ~380 lines |

### After Phase 2

| Metric | Count | Reduction |
|--------|-------|-----------|
| ImageCard components | 1 file | **75%** |
| ImageCard total lines | ~124 lines | **53%** |
| Service page files | 1 dynamic route | **75%** |
| Service template lines | ~85 lines | **78%** |

**Overall:** ~515 lines reduced to ~209 lines = **59% code reduction**

---

## Troubleshooting

### Issue: ImageCard not displaying

**Checklist:**
- ✓ Correct import path: `components/ui/ImageCard/ImageCard`
- ✓ Using `image` object (not `imageurl`, `imagealt`, etc.)
- ✓ Variant is one of: 'image-left', 'image-right', 'image-middle', 'double-bottom'
- ✓ Image path is correct (starts with `/static/images/`)

### Issue: Dynamic service route not working

**Check:**
- Old service page files deleted? (specialty-research.js, etc.)
- Service slug exists in `data/services/` directory
- `lib/content.js` functions working correctly

### Issue: Styles not applying

**Verify:**
- CSS module is imported: `import styles from './Component.module.css'`
- Class names use camelCase: `styles.sectionContainer` not `styles.section__container`
- CSS module file exists in same directory as component

---

## Future Enhancements (Phase 3+)

Planned component improvements:

- 🔲 Button component with variants
- 🔲 Card component (generic wrapper)
- 🔲 Typography components
- 🔲 Design token system
- 🔲 Storybook integration
- 🔲 Component testing suite

---

## Resources

- **Content Editing:** See `CONTENT_GUIDE.md`
- **Technical Roadmap:** See `WEBSITE_RESTRUCTURING.md`
- **Phase Completion:** See `COMPLETED_UPDATES.md`

---

**Questions or issues?**
- Refer to component JSDoc comments in source files
- Check Next.js documentation: https://nextjs.org/docs
- Create a GitHub issue

---

*This guide covers all components created in Phase 2 of the website restructuring.*
