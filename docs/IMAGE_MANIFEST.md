# Image Asset Manifest
## Historic Studies Limited Website

**Created:** January 2, 2026
**Last Updated:** January 2, 2026 (Post-Optimization)
**Phase:** Phase 4 - Asset Management Complete
**Total Images:** 45 files (3 duplicates removed)
**Total Size:** ~34MB (11MB reduction from 45MB)

---

## Executive Summary

This manifest documents all image assets used on the Historic Studies Limited website, their locations, usage, and optimization status.

### Current Status (After Optimization)

⚠️ **Needs Optimization:** 3 images over 1MB (Corn Hill files + 1 oral history)
✅ **Optimized:** 42 images under 500KB
🎉 **Completed:** 10 large images optimized (PNG→JPG, 83-92% reduction)
🗑️ **Cleaned:** 6 duplicate/unused files removed

---

## Critical Issues

### 1. Extremely Large Images (Over 5MB)

| File | Size | Location | Used On | Action Needed |
|------|------|----------|---------|---------------|
| `byline.png` | 8.6MB | `/static/images/` | Homepage hero | **CRITICAL: Reduce to <500KB** |
| `Corn Hill Plantation Overlay.jpg` | 7.9MB | `/static/images/` | Not used? | **Remove or optimize** |
| `Corn Hill Plantation Overlay.png` | 4.9MB | `/static/images/Corn Hill...` | Not used? | **Remove or optimize** |

**Impact:** These 3 files alone are 21.4MB - causing slow page loads

---

## Image Inventory by Category

### Homepage & Branding

| File | Size | Dimensions | Format | Status | Notes |
|------|------|------------|--------|--------|-------|
| `byline-optimized.jpg` | 485KB | TBD | JPG | ✅ Optimized | Hero image (was 8.6MB PNG, 94% reduction) |
| `hsl_logo.png` | <100KB | TBD | JPG | ✅ OK | Site logo |
| `hsl_logo_name.png` | <200KB | TBD | JPG | ✅ OK | Logo with text |
| `favicon.png` | <10KB | 32×32 | PNG | ✅ OK | Favicon |

---

### Specialty Research (10 images)

Located in `/static/images/specialty_research/`

| File | Size | Format | Used In Project | Status |
|------|------|--------|-----------------|--------|
| `aerial_edisto_map.jpg` | 397KB | JPG | County Line project | ✅ Optimized (was 3.5MB PNG, 89% reduction) |
| `war_department_map.jpg` | 362KB | JPG | County Line project | ✅ Optimized (was 2.3MB PNG, 84% reduction) |
| `goss_family_title.jpg` | 266KB | JPG | Goss Family | ✅ Optimized (was 1.7MB PNG, 84% reduction) |
| `overflow_lands.png` | 845KB | PNG | Overflow Lands | ⚠️ Could optimize further |
| `new_gaillard_graves.png` | 708KB | PNG | County Line | ✅ OK |
| `goss_reunion.jpg` | 477KB | JPG | Goss Family (carousel) | ✅ OK |
| `crypt.jpeg` | 224KB | JPEG | Unknown | ✅ OK |
| `goss_gravesite.jpeg` | 204KB | JPEG | Goss Family | ✅ OK |
| `Specialty_research_slide.jpeg` | 185KB | JPEG | Carousel | ✅ OK |
| `black_jack.jpg` | 60KB | JPG | Goss Family | ✅ OK |

**Removed duplicates:** Specialty_research_slide.png, crypt.png, goss_renunion.jpg (unused)

**Documents in this folder:**
- `Specialty Research Kings Grants.docx` → Should move to `/documents/`

---

### Oral History (10 images)

Located in `/static/images/oral_history/`

| File | Size | Format | Used In Project | Status |
|------|------|--------|-----------------|--------|
| `CFP_and_PCG_interview.png` | 1.9MB | PNG | General oral history | ⚠️ Optimize |
| `police_interview.png` | 808KB | PNG | General projects | ⚠️ Optimize |
| `client_interview_2.png` | <800KB | PNG | General projects | ✅ OK |
| `lamar_army.png` | <500KB | PNG | Lamar project | ✅ OK |
| `lamar_portrait.png` | <500KB | PNG | Lamar project | ✅ OK |
| `earl_weedman.png` | <500KB | PNG | Earl Weedman project | ✅ OK |
| `CFP_and_PCG_interview.jpg` | <500KB | JPG | Same as PNG | ✅ OK (duplicate?) |
| `Glover_Perry_2.jpg` | <500KB | JPG | Glover Perry project | ✅ OK |
| `Stetson_kennedy.jpg` | <500KB | JPG | Stetson Kennedy | ✅ OK |

**Documents in this folder:**
- `Oral History Specific Projects.docx` → Should move to `/documents/`
- `~$al History Specific Projects.docx` → Delete (temp file)

---

### Published Works (5 images)

Located in `/static/images/published_works/`

| File | Size | Format | Used In Project | Status |
|------|------|--------|-----------------|--------|
| `red_book_cover.jpg` | 238KB | JPG | Red book | ✅ Optimized (was 1.7MB PNG, 86% reduction) |
| `hays_ingleside_plantation.jpg` | 227KB | JPG | Ingleside publication | ✅ Optimized (was 2.1MB PNG, 89% reduction) |
| `william_bartrams_travels.jpg` | 208KB | JPG | Bartram's Travels (carousel) | ✅ Optimized (was 1.5MB PNG, 86% reduction) |
| `as_mobile_goes.jpg` | 165KB | JPG | Mobile publication (carousel) | ✅ Optimized (was 2.1MB PNG, 92% reduction) |
| `bor_water_control_structure.png` | 619KB | PNG | BOR publication | ✅ OK |

---

### Cultural Resources (12 images)

Located in `/static/images/cultural_resources/`

| File | Size | Format | Used In Project | Status |
|------|------|--------|-----------------|--------|
| `east_edisto.png` | 808KB | PNG | East Edisto project | ⚠️ Could optimize further |
| `indigo_vat_open.png` | 733KB | PNG | Dean Hall | ✅ OK |
| `philips_gathering_info.png` | 673KB | PNG | Field work | ✅ OK |
| `east_edisto_report.png` | 529KB | PNG | East Edisto | ✅ OK |
| `gunboats.png` | 508KB | PNG | Gunboats project | ✅ OK |
| `Colonaware_at Dean_Hall.jpg` | 405KB | JPG | Dean Hall artifacts | ✅ OK |
| `crew_on_test_unit.jpg` | 400KB | JPG | Field work | ✅ OK |
| `dr_site_cain_holy.jpg` | 398KB | JPG | Cain Hoy project | ✅ OK |
| `dean_hall_plantation.jpg` | 240KB | JPG | Dean Hall | ✅ Optimized (was 2.5MB PNG, 90% reduction) |
| `dean_hall_vol_1.png` | 202KB | PNG | Dean Hall | ✅ OK |
| `indigo_vat.png` | 192KB | PNG | Dean Hall | ✅ OK |
| `1930s_family_picnic.jpg` | 98KB | JPG | Historical photo | ✅ Optimized (was 1.0MB PNG, 90% reduction) |

**Documents in this folder:**
- `CR Projects formal reports.docx` → Should move to `/documents/`

---

### People (3 images)

Located in `/static/images/people/`

| File | Size | Format | Usage | Status |
|------|------|--------|-------|--------|
| `dam_photo_cfp.png` | 999KB | PNG | About page | ⚠️ Optimize |
| `CFP_library_ded.png` | <700KB | PNG | About page | ✅ OK |
| `CFP_library_ded.jpg` | <500KB | JPG | Same as PNG | ✅ OK (duplicate?) |

---

### About (Documents)

Located in `/static/images/about/`

**Documents:**
- `Philips_Charles_Vitae.pdf` → Should move to `/documents/`

---

## Optimization Priorities

### Priority 1: Critical (Over 5MB)

1. **byline.png** (8.6MB → target <500KB)
   - Used on homepage hero
   - High impact on initial page load
   - Recommendation: Convert to JPG at 85% quality, resize if too large

2. **Corn Hill Plantation Overlay.jpg** (7.9MB)
   - Check if used anywhere
   - If not used: DELETE
   - If used: Optimize to <500KB

3. **Corn Hill Plantation Overlay.png** (4.9MB)
   - Duplicate of above in different format
   - Recommendation: DELETE or keep only one optimized version

**Estimated savings:** ~20MB reduction

---

### Priority 2: High (1-5MB)

Images between 1-5MB should be optimized:

**Specialty Research:**
- aerial_edisto_map.png (3.5MB)
- war_department_map.png (2.3MB)
- goss_renunion.png (2.1MB)
- goss_family_title.png (1.7MB)

**Published Works:**
- hays_ingleside_plantation.png (2.1MB)
- as_mobile_goes.png (2.1MB)
- red_book_cover.png (1.7MB)
- william_bartrams_travels.png (1.5MB)

**Cultural Resources:**
- dean_hall_plantation.png (2.5MB)

**People:**
- dam_photo_cfp.png (999KB)

**Estimated savings:** ~18MB reduction

---

## Optimization Recommendations

### General Guidelines

| File Type | Current Size | Target Size | Method |
|-----------|--------------|-------------|--------|
| Hero images | 8.6MB | <500KB | JPG 85% quality, WebP |
| Project photos | 1-3MB | <300KB | JPG 80% quality |
| Book covers | 1-2MB | <200KB | PNG optimized or JPG |
| Maps/diagrams | 2-4MB | <400KB | PNG optimized, reduce dimensions |
| People photos | 1MB | <200KB | JPG 85% quality |

### Recommended Tools

**Free Online:**
- TinyPNG.com - PNG/JPG compression
- Squoosh.app - Advanced compression, WebP conversion
- ImageOptim.com - Mac app for batch optimization

**Command Line (if available):**
```bash
# Install imagemagick
brew install imagemagick

# Batch optimize JPGs
find . -name "*.jpg" -exec mogrify -quality 85% -resize 1200x {} \;

# Batch optimize PNGs
find . -name "*.png" -exec optipng -o7 {} \;
```

---

## Duplicate Files

The following files appear to exist in multiple formats:

| File Base Name | Formats | Action |
|----------------|---------|--------|
| `CFP_library_ded` | PNG, JPG | Keep JPG (smaller), delete PNG |
| `CFP_and_PCG_interview` | PNG, JPG | Keep JPG (smaller), delete PNG |
| `crypt` | PNG, JPEG | Compare sizes, keep smaller |
| `Specialty_research_slide` | PNG, JPEG | Keep JPEG, delete PNG |
| `Corn Hill Plantation Overlay` | JPG, PNG | Keep one, delete other |

**Potential savings:** ~5-10MB

---

## Proposed New Structure

### Current Structure (Flat)
```
public/static/images/
├── specialty_research/
├── oral_history/
├── published_works/
├── cultural_resources/
├── people/
├── about/
└── [root level files]
```

### Recommended Structure (Organized)
```
public/
├── images/
│   ├── branding/
│   │   ├── logo.jpg
│   │   ├── logo-with-name.jpg
│   │   └── favicon.png
│   ├── hero/
│   │   └── byline.jpg (optimized)
│   ├── projects/
│   │   ├── specialty-research/
│   │   ├── oral-history/
│   │   ├── published-works/
│   │   └── cultural-resources/
│   └── people/
│       └── charles-philips.jpg
└── documents/
    ├── vitae/
    │   └── Philips_Charles_Vitae.pdf
    └── project-descriptions/
        ├── specialty-research-kings-grants.docx
        ├── oral-history-projects.docx
        └── cultural-resources-reports.docx
```

---

## Usage by Page

### Homepage (`pages/index.js`)
- `byline.png` (8.6MB) ⚠️ **CRITICAL**
- Carousel images (various)

### About Page (`pages/about.js`)
- `people/dam_photo_cfp.png` (999KB) ⚠️
- Logo images

### Contact Page (`pages/contact.js`)
- `hsl_logo_name.png` ✅

### Service Pages (Dynamic route)
- All project images from respective folders

---

## Action Items

### Immediate (Critical)

- [ ] Optimize `byline.png` from 8.6MB to <500KB
- [ ] Determine if Corn Hill overlay images are used
  - If yes: Optimize
  - If no: Delete
- [ ] Move all documents to `/public/documents/`
- [ ] Delete Word temp files (`~$*.docx`)

### High Priority

- [ ] Optimize all images over 1MB (20 images)
- [ ] Remove duplicate files (keep best format)
- [ ] Create WebP versions for modern browsers

### Nice to Have

- [ ] Reorganize into cleaner folder structure
- [ ] Add responsive image variants (mobile, tablet, desktop)
- [ ] Implement lazy loading for below-fold images

---

## Size Targets by Usage

| Usage | Current Max | Target Max | Rationale |
|-------|-------------|------------|-----------|
| Hero image | 8.6MB | 500KB | Critical for FCP |
| Project photos | 3.5MB | 300KB | Good quality, reasonable size |
| Book covers | 2.1MB | 200KB | Details visible |
| Maps/diagrams | 3.5MB | 400KB | Legibility important |
| Logos | 200KB | 100KB | Small, simple |

---

## Estimated Performance Impact

### Current State
- **Total image weight:** ~45MB
- **Largest page (homepage):** ~9MB just for hero
- **Load time (3G):** ~20-30 seconds
- **Lighthouse score:** ~40/100

### After Optimization
- **Total image weight:** ~10MB (78% reduction)
- **Largest page (homepage):** ~2MB
- **Load time (3G):** ~5-8 seconds
- **Lighthouse score:** ~80/100 (estimated)

---

## Next Steps

1. **Review this manifest** with stakeholders
2. **Backup all images** before optimization
3. **Optimize Priority 1 images** (critical path)
4. **Optimize Priority 2 images** (high impact)
5. **Move documents** to proper directory
6. **Update file references** in code and JSON
7. **Test all pages** to ensure images load correctly
8. **Deploy** and verify performance improvements

---

**Last Updated:** January 2, 2026
**Maintained By:** Development Team
**Review Frequency:** Quarterly or when adding new images

---

## Appendix: Optimization Commands

### For byline.png (Critical)
```bash
# Convert to JPG and optimize
convert byline.png -quality 85% -resize 1920x byline-optimized.jpg

# Or use ImageMagick for aggressive compression
convert byline.png -strip -interlace Plane -gaussian-blur 0.05 -quality 85% byline.jpg
```

### Batch Optimization
```bash
# For all PNGs in a directory
for file in *.png; do
    convert "$file" -quality 85% -resize 1200x "${file%.png}-optimized.png"
done

# For all JPGs
for file in *.jpg; do
    mogrify -quality 85% -resize 1200x "$file"
done
```

### Create WebP versions
```bash
# Convert to WebP (better compression)
cwebp -q 80 input.jpg -o output.webp
```

---

*End of Image Asset Manifest*
