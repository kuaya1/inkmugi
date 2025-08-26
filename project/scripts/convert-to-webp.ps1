# PowerShell script to convert gallery images to WebP format
# Run this script when you're ready to migrate from Flickr to local assets

param(
    [string]$InputPath = "assets/images/gallery",
    [string]$Quality = "80"
)

Write-Host "=== WebP Conversion Script for Ink Mugi PMU Gallery ===" -ForegroundColor Green
Write-Host "Input directory: $InputPath" -ForegroundColor Yellow
Write-Host "Quality setting: $Quality%" -ForegroundColor Yellow

# Check if cwebp is installed
try {
    cwebp -version | Out-Null
    Write-Host "✓ cwebp found" -ForegroundColor Green
} catch {
    Write-Host "✗ cwebp not found. Please install WebP tools from:" -ForegroundColor Red
    Write-Host "  https://developers.google.com/speed/webp/download" -ForegroundColor Red
    exit 1
}

# Create output directory if it doesn't exist
$OutputPath = "$InputPath/webp"
if (-not (Test-Path $OutputPath)) {
    New-Item -ItemType Directory -Path $OutputPath -Force
    Write-Host "✓ Created output directory: $OutputPath" -ForegroundColor Green
}

# Convert JPG files to WebP
$jpgFiles = Get-ChildItem "$InputPath/*.jpg" -ErrorAction SilentlyContinue
$convertedCount = 0

if ($jpgFiles.Count -eq 0) {
    Write-Host "⚠ No JPG files found in $InputPath" -ForegroundColor Yellow
    Write-Host "Note: If using Flickr images, first download them to this directory" -ForegroundColor Blue
} else {
    Write-Host "Found $($jpgFiles.Count) JPG files. Converting..." -ForegroundColor Blue
    
    foreach ($file in $jpgFiles) {
        $outputFile = Join-Path $OutputPath ($file.BaseName + ".webp")
        
        try {
            cwebp -q $Quality $file.FullName -o $outputFile
            if ($LASTEXITCODE -eq 0) {
                $convertedCount++
                Write-Host "✓ Converted: $($file.Name) → $($file.BaseName).webp" -ForegroundColor Green
            } else {
                Write-Host "✗ Failed to convert: $($file.Name)" -ForegroundColor Red
            }
        } catch {
            Write-Host "✗ Error converting $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

# Convert PNG files to WebP
$pngFiles = Get-ChildItem "$InputPath/*.png" -ErrorAction SilentlyContinue

if ($pngFiles.Count -gt 0) {
    Write-Host "Found $($pngFiles.Count) PNG files. Converting..." -ForegroundColor Blue
    
    foreach ($file in $pngFiles) {
        $outputFile = Join-Path $OutputPath ($file.BaseName + ".webp")
        
        try {
            cwebp -q $Quality $file.FullName -o $outputFile
            if ($LASTEXITCODE -eq 0) {
                $convertedCount++
                Write-Host "✓ Converted: $($file.Name) → $($file.BaseName).webp" -ForegroundColor Green
            } else {
                Write-Host "✗ Failed to convert: $($file.Name)" -ForegroundColor Red
            }
        } catch {
            Write-Host "✗ Error converting $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

Write-Host "=== Conversion Complete ===" -ForegroundColor Green
Write-Host "✓ Successfully converted $convertedCount files" -ForegroundColor Green

if ($convertedCount -gt 0) {
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Blue
    Write-Host "1. Update galleryItems array in Gallery.tsx to use local WebP paths" -ForegroundColor Blue
    Write-Host "2. Copy images to public/assets/images/gallery/ directory" -ForegroundColor Blue
    Write-Host "3. Test the gallery with optimized images" -ForegroundColor Blue
}

Write-Host ""
Write-Host "File size comparison:" -ForegroundColor Yellow
if (Test-Path $OutputPath) {
    $originalSize = (Get-ChildItem "$InputPath/*.jpg", "$InputPath/*.png" -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    $webpSize = (Get-ChildItem "$OutputPath/*.webp" -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    
    if ($originalSize -gt 0 -and $webpSize -gt 0) {
        $savings = [math]::Round((($originalSize - $webpSize) / $originalSize) * 100, 1)
        Write-Host "Original: $([math]::Round($originalSize / 1MB, 2)) MB" -ForegroundColor Yellow
        Write-Host "WebP: $([math]::Round($webpSize / 1MB, 2)) MB" -ForegroundColor Yellow
        Write-Host "Savings: $savings%" -ForegroundColor Green
    }
}
