# Asset Management Guide
## Historic Studies Limited Website

**Created:** January 2, 2026
**Phase:** Phase 4 - Asset Management
**For:** Content Editors & Developers

---

## Overview

This guide explains how to add, optimize, and manage images and documents on the HSL website.

### Quick Rules

✅ **DO:**
- Optimize images before uploading (<500KB target)
- Use descriptive filenames (lowercase-with-dashes)
- Store images in correct category folders
- Keep documents in `/public/documents/`
- Update IMAGE_MANIFEST.md when adding assets

❌ **DON'T:**
- Upload images larger than 2MB
- Use spaces in filenames
- Store documents in image folders
- Upload temporary/backup files
- Forget to add alt text in JSON

---

## File Size Targets

| Asset Type | Max Size | Recommended | Notes |
|------------|----------|-------------|-------|
| Hero images | 500KB | 300-400KB | Critical for page speed |
| Project photos | 400KB | 200-300KB | Good quality |
| Book covers | 300KB | 150-200KB | Details visible |
| Maps/diagrams | 500KB | 300-400KB | Legibility important |
| Logos | 100KB | 50-75KB | Small files |
| Documents (PDF) | 5MB | 2-3MB | Compress if possible |

---

## Adding New Images

### Step 1: Prepare the Image

#### Option A: Online Optimization (Easiest)

1. Go to https://tinypng.com or https://squoosh.app
2. Upload your image
3. Download the compressed version
4. Verify it looks good and is under target size

#### Option B: Using ImageOptim (Mac)

1. Download ImageOptim (free): https://imageoptim.com
2. Drag image onto ImageOptim icon
3. It will optimize automatically
4. Check the new file size

#### Option C: Using Preview (Mac Built-in)

1. Open image in Preview
2. Tools → Adjust Size
3. Set width to 1200-1600px (keep aspect ratio)
4. File → Export
5. Format: JPEG, Quality: 85%
6. Save

### Step 2: Rename the File

Use descriptive, lowercase names with dashes:

```bash
# ❌ Bad names
DSC_1234.jpg
Photo Jan 2 2026.png
goss family.jpg

# ✅ Good names
goss-family-reunion-2020.jpg
aerial-edisto-map.png
charles-philips-library-dedication.jpg
```

### Step 3: Choose the Right Folder

```
public/static/images/
├── specialty_research/    # Specialty research project images
├── oral_history/          # Oral history project images
├── published_works/       # Book covers, publications
├── cultural_resources/    # Cultural resource project images
└── people/                # People photos (Charles, etc.)
```

### Step 4: Upload the File

1. Place file in appropriate folder
2. Note the path (e.g., `/static/images/specialty_research/new-project.jpg`)

### Step 5: Update JSON Data

Edit the appropriate JSON file in `/data/services/`:

```json
{
    "image": {
        "src": "/static/images/specialty_research/new-project.jpg",
        "alt": "Descriptive text for accessibility",
        "width": 400,
        "height": 300
    }
}
```

**Important:** Always provide descriptive alt text!

### Step 6: Update IMAGE_MANIFEST.md

Add your new image to `docs/IMAGE_MANIFEST.md`:

```markdown
| new-project.jpg | 250KB | JPG | New Project Name | ✅ OK |
```

---

## Adding Documents (PDFs, Word, etc.)

### Step 1: Prepare the Document

**For PDFs:**
- Use "Save As → Reduce File Size" in Preview (Mac)
- Or use online PDF compressor: https://www.ilovepdf.com/compress_pdf
- Target: Under 3MB if possible

**For Word documents:**
- Save as PDF first (File → Export as PDF)
- Then compress the PDF

### Step 2: Organize by Type

```
public/documents/
├── vitae/
│   └── philips-charles-vitae.pdf
├── project-descriptions/
│   ├── specialty-research-overview.pdf
│   ├── oral-history-projects.pdf
│   └── cultural-resources-methodology.pdf
└── publications/
    └── publication-samples.pdf
```

### Step 3: Link in JSON

```json
{
    "vitae": {
        "url": "/documents/vitae/philips-charles-vitae.pdf",
        "text": "Download CV (PDF)"
    }
}
```

---

## Image Format Guide

### When to Use JPG

✅ **Use JPG for:**
- Photographs
- Complex images with many colors
- Project photos
- People photos

**Settings:**
- Quality: 80-85%
- Progressive encoding: Yes

### When to Use PNG

✅ **Use PNG for:**
- Logos (with transparency)
- Screenshots
- Images with text
- Simple graphics

**Settings:**
- Optimize with TinyPNG or ImageOptim
- Use PNG-8 for simple images
- Use PNG-24 for complex images

### When to Use WebP (Advanced)

✅ **Use WebP for:**
- Modern browsers (90%+ support)
- Better compression than JPG/PNG
- Requires fallback for old browsers

**How to create:**
```bash
# Using cwebp command line tool
cwebp -q 80 input.jpg -o output.webp
```

---

## Responsive Images (Future Enhancement)

For better performance, create multiple sizes of each image:

```
image-name-mobile.jpg    # 600px wide
image-name-tablet.jpg    # 1200px wide
image-name-desktop.jpg   # 1920px wide
```

Then use Next.js Image component's `sizes` prop:

```javascript
<Image
    src="/static/images/project.jpg"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    ...
/>
```

---

## Optimization Workflow

### For Existing Large Images

If you find an image over 1MB:

1. **Check current usage:**
   ```bash
   grep -r "image-name.jpg" data/
   ```

2. **Backup original:**
   ```bash
   cp image-name.jpg image-name-original.jpg
   ```

3. **Optimize:**
   - Use TinyPNG.com
   - Or ImageOptim
   - Or command line (see below)

4. **Replace and test:**
   - Replace original with optimized version
   - View page to ensure quality is acceptable
   - Check file size reduced

5. **Update manifest:**
   - Update size in IMAGE_MANIFEST.md
   - Change status from ⚠️ to ✅

### Command Line Batch Optimization

**For JPG files:**
```bash
# Navigate to image folder
cd public/static/images/specialty_research/

# Optimize all JPGs
for file in *.jpg; do
    # Backup
    cp "$file" "backup-$file"
    # Optimize
    mogrify -quality 85% -resize 1200x "$file"
done
```

**For PNG files:**
```bash
# Using optipng
for file in *.png; do
    optipng -o7 "$file"
done
```

---

## Common Issues & Solutions

### Issue: Image Not Showing on Website

**Checklist:**
1. ✓ File path is correct in JSON (starts with `/static/images/`)
2. ✓ Filename matches exactly (case-sensitive!)
3. ✓ File is in the right folder
4. ✓ No spaces in filename
5. ✓ File extension is correct (.jpg not .JPG)

**Solution:**
```bash
# Check if file exists
ls public/static/images/specialty_research/your-image.jpg

# Rename if needed (fix case or spaces)
mv "Image Name.JPG" "image-name.jpg"
```

### Issue: Page Loads Slowly

**Cause:** Images too large

**Solution:**
1. Check IMAGE_MANIFEST.md for large files
2. Optimize images over 500KB
3. Use Next.js Image component (auto-optimization)

### Issue: Image Looks Blurry

**Cause:** Over-compression or wrong dimensions

**Solution:**
1. Check original image quality
2. Use higher quality setting (90% instead of 80%)
3. Ensure image is at least as large as display size
4. For retina displays, use 2x dimensions

### Issue: Document Won't Download

**Checklist:**
1. ✓ Document is in `/public/documents/`
2. ✓ Path in JSON starts with `/documents/`
3. ✓ File extension is included (.pdf)
4. ✓ No special characters in filename

---

## Best Practices

### File Naming

```bash
# Project images
goss-family-reunion.jpg
aerial-edisto-map.png
dean-hall-excavation.jpg

# People
charles-philips-portrait.jpg
charles-philips-field-work.jpg

# Documents
charles-philips-vitae.pdf
specialty-research-overview.pdf
```

### Alt Text Writing

```json
// ❌ Bad alt text
"alt": "image"
"alt": "photo"
"alt": "DSC_1234"

// ✅ Good alt text
"alt": "Goss family reunion at James Island cemetery, 2020"
"alt": "Aerial map of Edisto Island showing property boundaries"
"alt": "Charles Philips examining historical documents"
```

### Folder Organization

Keep similar images together:

```bash
specialty_research/
├── goss-family-*     # All Goss family project images
├── county-line-*     # All County Line project images
└── overflow-lands-*  # All Overflow Lands images
```

---

## Image Optimization Checklist

Before adding any image to the website:

- [ ] Image is optimized (<500KB for most images)
- [ ] Filename is descriptive and uses dashes
- [ ] File is in correct category folder
- [ ] Dimensions are appropriate (not 4000px+)
- [ ] Format is correct (JPG for photos, PNG for logos)
- [ ] Alt text is descriptive and helpful
- [ ] JSON data file is updated
- [ ] IMAGE_MANIFEST.md is updated
- [ ] Page is tested to verify image loads
- [ ] Mobile view is checked

---

## Tools & Resources

### Free Online Tools

| Tool | URL | Best For |
|------|-----|----------|
| TinyPNG | https://tinypng.com | Quick PNG/JPG compression |
| Squoosh | https://squoosh.app | Advanced options, format conversion |
| ILovePDF | https://www.ilovepdf.com/compress_pdf | PDF compression |
| ImageOptim | https://imageoptim.com | Mac batch optimization |

### Checking Image Info

**On Mac:**
```bash
# Get image dimensions
sips -g pixelWidth -g pixelHeight image.jpg

# Get file size
ls -lh image.jpg

# Get all info
file image.jpg
```

**Online:**
- Upload to Squoosh.app to see dimensions and size

---

## Monthly Maintenance

### Asset Audit

Once per month, review:

1. **Check for new large files:**
   ```bash
   find public/static/images -size +1M
   ```

2. **Look for duplicates:**
   ```bash
   # Find potential duplicates by name
   find public/static/images -name "*.jpg" | sort | uniq -d
   ```

3. **Remove unused files:**
   - Check IMAGE_MANIFEST.md
   - Search codebase for usage
   - Delete if not referenced

4. **Update documentation:**
   - Add new images to IMAGE_MANIFEST.md
   - Update sizes and statuses
   - Note any optimization needed

---

## Emergency: Page Won't Load

If a page won't load due to image issues:

### Step 1: Check Browser Console

1. Open Developer Tools (F12)
2. Look for 404 errors
3. Note which image files are missing

### Step 2: Fix File Paths

Common issues:
```javascript
// ❌ Wrong
src: "static/images/photo.jpg"          // Missing leading slash
src: "/public/static/images/photo.jpg"  // Shouldn't include 'public'

// ✅ Correct
src: "/static/images/photo.jpg"
```

### Step 3: Verify Files Exist

```bash
# Check if file exists
ls public/static/images/specialty_research/photo.jpg

# If not found, search for it
find public -name "photo.jpg"
```

### Step 4: Clear Next.js Cache

```bash
rm -rf .next
npm run build
```

---

## Quick Reference

### Standard Image Sizes

| Usage | Width | Height | Quality |
|-------|-------|--------|---------|
| Hero image | 1920px | Auto | 85% |
| Project photo | 800px | Auto | 80% |
| Thumbnail | 400px | Auto | 80% |
| Logo | 200px | Auto | 90% |

### File Paths

```javascript
// Images
/static/images/category/image.jpg

// Documents
/documents/category/document.pdf

// In JSON
"src": "/static/images/specialty_research/project.jpg"
```

### Testing Checklist

After adding images:

```bash
# 1. Build the site
npm run build

# 2. Start dev server
npm run dev

# 3. Check these pages:
# - Homepage
# - Relevant service page
# - Contact page (if applicable)

# 4. Verify:
# - Image loads
# - No 404 errors in console
# - Page loads quickly
# - Image looks good on mobile
```

---

**Questions?** Refer to:
- `IMAGE_MANIFEST.md` - Full image inventory
- `CONTENT_GUIDE.md` - Content editing basics
- `COMPONENT_GUIDE.md` - Component usage

---

*Last Updated: January 2, 2026*
