# Gallery Image Optimization Guide

## Current State
Your gallery currently uses external Flickr images with URLs like:
- `https://live.staticflickr.com/65535/54366216764_db37388bbe_c_d.jpg`

## Optimizations Implemented

### 1. **Lazy Loading with Intersection Observer**
- ✅ Images load only when they enter the viewport
- ✅ Reduces initial page load time
- ✅ Improves Core Web Vitals (LCP, CLS)

### 2. **Priority Loading**
- ✅ First 6 images load immediately (above-the-fold)
- ✅ Remaining images use lazy loading
- ✅ Optimizes perceived performance

### 3. **WebP Support with Fallback**
- ✅ Attempts to load WebP version first
- ✅ Falls back to original image if WebP fails
- ✅ Reduces image size by 25-35% on average

### 4. **Enhanced Loading States**
- ✅ Loading spinner while images load
- ✅ Smooth opacity transition when loaded
- ✅ Proper sizing to prevent layout shift

## Migration to Local Assets (Optional)

### Step 1: Download Images from Flickr
```powershell
# Create directory structure
New-Item -ItemType Directory -Path "public/assets/images/gallery" -Force

# Download images manually or use a script
# Example for one image:
Invoke-WebRequest -Uri "https://live.staticflickr.com/65535/54366216764_db37388bbe_c_d.jpg" -OutFile "public/assets/images/gallery/before-1.jpg"
```

### Step 2: Convert to WebP
```powershell
# Run the conversion script
./scripts/convert-to-webp.ps1 -InputPath "public/assets/images/gallery" -Quality 80
```

### Step 3: Update Gallery Data
Update `galleryItems` array in `Gallery.tsx`:
```typescript
const galleryItems = [
  {
    beforeImage: '/assets/images/gallery/webp/before-1.webp',
    afterImage: '/assets/images/gallery/webp/after-1.webp',
    category: 'ombre-brows',
    // ... rest of the item
  },
  // ... more items
];
```

## Performance Benefits

### Current Implementation (with Flickr URLs):
- ✅ Lazy loading reduces initial load
- ✅ Priority loading for above-fold images
- ✅ Intersection Observer API for efficient loading
- ❌ External domain requests (slight latency)
- ❌ No control over image optimization

### With Local WebP Assets:
- ✅ All current benefits PLUS:
- ✅ Same-origin requests (faster)
- ✅ 25-35% smaller file sizes
- ✅ Full control over image optimization
- ✅ Better caching strategies
- ✅ Offline capability

## Core Web Vitals Impact

### Largest Contentful Paint (LCP)
- **Before**: Flickr images could delay LCP
- **After**: Optimized images load faster, priority loading ensures above-fold content loads quickly

### Cumulative Layout Shift (CLS)
- **Before**: Images might cause layout shifts
- **After**: Proper aspect ratios and loading states prevent shifts

### First Input Delay (FID)
- **Before**: Heavy image loading could block main thread
- **After**: Lazy loading reduces initial JavaScript execution time

## Testing the Optimizations

1. **Open Gallery**: http://localhost:5173/gallery
2. **Check Network Tab**: Images should load progressively as you scroll
3. **Test Performance**: Use Lighthouse or Core Web Vitals tools
4. **Mobile Testing**: Verify lazy loading works on mobile devices

## Commands Reference

### Development Server
```powershell
npm run dev
```

### WebP Conversion
```powershell
./scripts/convert-to-webp.ps1
```

### Performance Testing
```powershell
# Install Lighthouse CLI (if not already installed)
npm install -g @lhci/cli lighthouse

# Run Lighthouse on gallery page
lighthouse http://localhost:5173/gallery --chrome-flags="--no-sandbox" --output=html --output-path=./gallery-performance.html
```

## Expected Performance Improvements

- **LCP**: 20-40% improvement
- **Image Load Time**: 15-30% faster with WebP
- **Bundle Size**: No change (images load separately)
- **Initial Paint**: Significantly faster due to lazy loading
- **Mobile Performance**: Major improvement on slower connections
