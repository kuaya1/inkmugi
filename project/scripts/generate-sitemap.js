#!/usr/bin/env node

/**
 * Automated Sitemap Generator for Ink Mugi PMU Studio
 * Generates sitemap.xml based on React routes and blog data
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'https://www.inkmugi.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Static routes with their priorities and change frequencies
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/gallery', priority: 0.8, changefreq: 'weekly' },
  { path: '/booking', priority: 0.8, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog', priority: 0.7, changefreq: 'weekly' },
  { path: '/faq', priority: 0.6, changefreq: 'monthly' },
  { path: '/authority', priority: 0.6, changefreq: 'monthly' },
  
  // Critical pages for SEO/indexing
  { path: '/permanent-makeup-safety-dmv', priority: 0.8, changefreq: 'monthly' },
  { path: '/pmu-safety-statistics', priority: 0.8, changefreq: 'monthly' },
  { path: '/licensed-pmu-artist-annandale', priority: 0.7, changefreq: 'monthly' },
  { path: '/why-we-use-vegan-pmu-pigments', priority: 0.7, changefreq: 'monthly' }
];

// Blog posts extracted from blogData.ts
const blogPosts = [
  { path: '/blog/nano-brows-vs-microblading-comparison', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/ombre-powder-brows-complete-guide', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/choosing-right-brow-shape', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/why-we-use-vegan-pmu-pigments', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/pmu-healing-timeline-week-by-week', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/pmu-pigment-science-quality-importance', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/pmu-myths-versus-facts-expert-guide', priority: 0.6, changefreq: 'monthly' }
];

// Generate XML sitemap
function generateSitemap(routes) {
  const urls = routes.map(route => {
    return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// Main function
function main() {
  try {
    console.log('🗺️  Generating sitemap...');
    
    // Combine all routes
    const allRoutes = [...staticRoutes, ...blogPosts];
    
    // Generate sitemap
    const sitemapXML = generateSitemap(allRoutes);
    
    // Write to file
    fs.writeFileSync(OUTPUT_PATH, sitemapXML, 'utf8');
    
    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📍 Location: ${OUTPUT_PATH}`);
    console.log(`🔗 Total URLs: ${allRoutes.length}`);
    console.log(`📅 Last modified: ${CURRENT_DATE}`);
    
    // Copy to dist directory if it exists
    const distPath = path.join(__dirname, '../dist/sitemap.xml');
    if (fs.existsSync(path.dirname(distPath))) {
      fs.writeFileSync(distPath, sitemapXML, 'utf8');
      console.log(`📋 Copied to dist directory`);
    }
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Execute main function
main();
