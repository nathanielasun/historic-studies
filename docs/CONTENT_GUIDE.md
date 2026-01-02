# Content Editing Guide
## Historic Studies Limited Website

**Last Updated:** January 2, 2026
**For:** Content Editors & Site Administrators

---

## Overview

This guide explains how to update content on the Historic Studies Limited website **without touching any code**. All website content is now stored in simple JSON files that can be edited with any text editor.

### What Changed?

✅ **Before:** Content was hardcoded in JavaScript files (required developer)
✅ **After:** Content is in JSON files (anyone can edit)

**Time to update content:**
- Before: 15-30 minutes (developer needed)
- Now: 2-5 minutes (no developer needed)

---

## Quick Start

### 1. Find the Content File

All content files are in the `/data` directory:

```
data/
├── site-config.json          # Site-wide settings (contact info, copyright)
├── navigation.json            # Menu structure
├── content/
│   └── homepage.json         # Homepage content
├── about/
│   ├── charles-philips.json  # Charles Philips bio
│   └── company-info.json     # Company information
└── services/
    ├── specialty-research.json
    ├── oral-history.json
    ├── published-works.json
    └── cultural-resources.json
```

### 2. Edit the File

- Use any text editor (VS Code recommended, but Notepad works too)
- Make your changes
- **Important:** Keep the JSON structure intact (don't remove commas, brackets, or quotes)

### 3. Save & Deploy

- Save the file
- Push to Git (or send to developer)
- Vercel automatically rebuilds and deploys

---

##Common Tasks

### Update Contact Information

**File:** `data/site-config.json`

```json
{
  "contact": {
    "email": "cphilips5509@gmail.com",  ← Edit this
    "phone": "843-532-6327",             ← Edit this
    "name": "Charles Philips"
  }
}
```

**Where it appears:** Footer on all pages

---

### Update Homepage Content

**File:** `data/content/homepage.json`

To update the main homepage text:

```json
{
  "sections": [
    {
      "id": "work-with-hsl",
      "title": "Work with HSL",
      "content": "Edit this text here..."  ← Edit content
    }
  ]
}
```

---

### Update About Page

**File:** `data/about/charles-philips.json`

To update Charles Philips' bio:

```json
{
  "name": "Charles F. Philips, Jr.",
  "bio": "Edit biography text here...",  ← Edit bio
  "education": [
    {
      "degree": "B.A.",
      "institution": "Mercer University",
      "year": 1975
    }
  ]
}
```

---

### Update Service Content

**Files:** `data/services/[service-name].json`

Example: Adding a new project to Specialty Research

**File:** `data/services/specialty-research.json`

```json
{
  "title": "Specialty Research",
  "projects": [
    {
      "id": "unique-id",                      ← Unique identifier (lowercase-with-dashes)
      "title": "Project Title",               ← Project name
      "layout": "image-left",                 ← Layout: image-left, image-right, image-middle, or double-bottom
      "year": 2024,                           ← Project year
      "description": "Full project description...",  ← Main content
      "client": {
        "name": "Client Name",
        "location": "City, State"
      },
      "image": {
        "src": "/static/images/specialty_research/image.jpg",  ← Image path
        "alt": "Description for accessibility",
        "width": 400,
        "height": 300
      }
    }
  ]
}
```

**Layout Options:**
- `"image-left"` - Image on left, text on right
- `"image-right"` - Image on right, text on left
- `"image-middle"` - Two images with text in middle
- `"double-bottom"` - Text above, two images below

---

### Add a New Project

1. **Prepare your content:**
   - Project title
   - Description (200-500 words)
   - Client name and location
   - Year completed
   - Image file

2. **Add the image:**
   - Place image in `/public/static/images/[service-category]/`
   - Example: `/public/static/images/specialty_research/new-project.jpg`
   - Compress to <200KB if possible

3. **Edit the service JSON file:**

Open `data/services/[service-name].json` and add a new project object:

```json
{
  "id": "my-new-project",
  "title": "My New Project Title",
  "layout": "image-left",
  "year": 2024,
  "description": "Full project description goes here. Include all relevant details about the project, methodology, outcomes, and significance.",
  "client": {
    "name": "Client Organization Name",
    "location": "City, State"
  },
  "image": {
    "src": "/static/images/specialty_research/my-new-project.jpg",
    "alt": "Descriptive alt text for the image",
    "width": 400,
    "height": 300
  }
}
```

**Important:** Make sure to add a comma after the previous project entry!

---

### Change Image for a Project

1. **Upload new image** to `/public/static/images/[category]/`
2. **Update the JSON:**

```json
{
  "image": {
    "src": "/static/images/specialty_research/new-image.jpg",  ← Update path
    "alt": "Updated description",                              ← Update alt text
    "width": 500,                                               ← Update dimensions
    "height": 400
  }
}
```

---

## JSON Editing Tips

### ✅ Do's

- ✅ Use a text editor with JSON syntax highlighting (VS Code, Sublime, Atom)
- ✅ Keep the structure intact (braces `{}`, brackets `[]`, commas)
- ✅ Use double quotes `"` for strings
- ✅ Validate JSON after editing (use [JSONLint.com](https://jsonlint.com))
- ✅ Make small changes and test

### ❌ Don'ts

- ❌ Don't remove commas between items
- ❌ Don't use single quotes `'`
- ❌ Don't forget closing braces `}` or brackets `]`
- ❌ Don't add trailing commas after the last item

### Common Mistakes

**❌ Wrong:**
```json
{
  "title": 'My Title',  ← Single quotes don't work
  "year": 2024,         ← Trailing comma before closing brace
}
```

**✅ Correct:**
```json
{
  "title": "My Title",
  "year": 2024
}
```

---

## Formatting Text

### Line Breaks

Use `\n` for new lines:

```json
{
  "description": "First paragraph.\n\nSecond paragraph after blank line."
}
```

### Special Characters

- **Quotes:** Use `\"` for quotes inside text
- **Bullets:** Use `•` or just write "• "

Example:
```json
{
  "content": "Perhaps you need...\n• A cultural resource study\n• A King's Grant study\n• An oral history project"
}
```

---

## Validation

### Before Deploying

**Always validate your JSON:**

1. Copy your edited JSON
2. Go to [JSONLint.com](https://jsonlint.com)
3. Paste and click "Validate JSON"
4. Fix any errors it shows

**VS Code users:** Errors are highlighted automatically in red!

---

## Testing Locally

If you have Node.js installed:

```bash
# In the project directory
npm run dev
```

Then open `http://localhost:3000` to see your changes.

---

## Deployment

### Option 1: Git (Recommended)

```bash
git add data/
git commit -m "Update content: [describe change]"
git push
```

Vercel automatically rebuilds and deploys in ~2 minutes.

### Option 2: Send to Developer

If you're not comfortable with Git, email your edited JSON files to the developer.

---

## Troubleshooting

### Build Failed After Editing

**Problem:** Vercel build fails
**Solution:** Invalid JSON syntax

1. Go to [JSONLint.com](https://jsonlint.com)
2. Paste your JSON file
3. Fix errors shown
4. Re-commit and push

### Changes Don't Appear

**Problem:** Updated content doesn't show on website
**Possible causes:**

1. **Browser cache:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. **Build in progress:** Wait 2-3 minutes for Vercel to rebuild
3. **Wrong file:** Double-check you edited the correct JSON file
4. **JSON error:** Check Vercel dashboard for build errors

### Image Not Showing

**Problem:** Image doesn't display
**Checklist:**

- ✓ Image is in `/public/static/images/` directory
- ✓ Path starts with `/static/images/` (not `/public/static/images/`)
- ✓ Filename matches exactly (case-sensitive!)
- ✓ Image file size is reasonable (<500KB)

---

## Getting Help

### Resources

- **JSON Validator:** [JSONLint.com](https://jsonlint.com)
- **Text Editor:** [VS Code](https://code.visualstudio.com/) (free)
- **Image Compression:** [TinyPNG.com](https://tinypng.com)

### Contact

For questions or issues:
- Create an issue on GitHub
- Contact the website developer
- Refer to `WEBSITE_RESTRUCTURING.md` for technical details

---

## Quick Reference

### File Locations

| Content | File Path |
|---------|-----------|
| Contact info | `data/site-config.json` |
| Navigation menu | `data/navigation.json` |
| Homepage | `data/content/homepage.json` |
| About Charles | `data/about/charles-philips.json` |
| About HSL | `data/about/company-info.json` |
| Services | `data/services/[service-name].json` |

### Image Paths

| Category | Directory |
|----------|-----------|
| Specialty Research | `/public/static/images/specialty_research/` |
| Oral History | `/public/static/images/oral_history/` |
| Published Works | `/public/static/images/published_works/` |
| Cultural Resources | `/public/static/images/cultural_resources/` |
| People | `/public/static/images/people/` |
| About | `/public/static/images/about/` |

---

**Remember:** Content updates are now simple and safe. You can't break the website by editing JSON files - worst case, the build will fail and you can revert your changes!
