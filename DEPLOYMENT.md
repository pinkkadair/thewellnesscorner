# Deployment Guide for The Wellness Corner Website

## 🚀 Quick Deployment Options

Your website is ready to deploy with the updated SEO content. Here are the recommended deployment options:

### Option 1: Vercel (Recommended - Free & Easy)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Import Project** from your GitHub repository: `https://github.com/pinkkadair/thewellnesscorner.git`
4. **Deploy** - Vercel will automatically build and deploy your site
5. **Custom Domain** - Add your domain `azwellnesscorner.com` in Vercel settings

### Option 2: Netlify (Free & Easy)

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with your GitHub account
3. **New site from Git** - Connect your GitHub repository
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy** - Netlify will build and deploy your site

### Option 3: GitHub Pages (Free)

1. **Go to your repository settings** on GitHub
2. **Scroll to Pages** section
3. **Source**: Deploy from a branch
4. **Branch**: Select `main` and `/ (root)`
5. **Add a workflow file** (see below)

## 📋 Pre-Deployment Checklist

✅ **SEO Meta Tags Updated** - All meta descriptions and titles are optimized
✅ **Contact Information Updated** - Phone: 623-257-3350, Email: support@azwellnesscorner.com
✅ **Content Optimized** - Medical office rental and medical director services prominently featured
✅ **Build Files Ready** - Run `npm run build` to generate latest dist/ folder

## 🔧 Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build locally
npm run preview
```

## 🌐 Domain Configuration

Once deployed, you'll need to:

1. **Point your domain** `azwellnesscorner.com` to your hosting provider
2. **Update DNS records** to point to your hosting provider's servers
3. **Enable HTTPS** (most hosting providers do this automatically)

## 🔍 Google Search Console Setup

After deployment:

1. **Go to [Google Search Console](https://search.google.com/search-console)**
2. **Add your property** `https://azwellnesscorner.com`
3. **Verify ownership** (usually via DNS or HTML file)
4. **Submit sitemap** (if you have one)
5. **Request indexing** for your main pages

## 📈 SEO Optimization Status

Your website now includes:

- ✅ **Optimized Title**: "Medical Office for Rent in Peoria AZ | Medical Director Services | The Wellness Corner"
- ✅ **Enhanced Description**: "The Wellness Corner: Premier medical office space for rent in Peoria, Arizona. Medical director services for laser technicians & RNs. Hourly, daily & monthly medical office leasing with full support staff. Call 623-257-3350."
- ✅ **Keywords**: Medical office rental, medical director services, Peoria Arizona
- ✅ **Structured Data**: JSON-LD schema for local business
- ✅ **Open Graph**: Social media optimization
- ✅ **Mobile Responsive**: Works on all devices

## 🚨 Important Notes

1. **Google Indexing**: It can take 1-4 weeks for Google to update search results after deployment
2. **DNS Propagation**: Domain changes can take 24-48 hours to propagate globally
3. **HTTPS Required**: Make sure your site uses HTTPS for better SEO
4. **Page Speed**: Test your site speed with Google PageSpeed Insights

## 📞 Support

If you need help with deployment:
- **Email**: support@azwellnesscorner.com
- **Phone**: 623-257-3350

---

**Next Steps**: Choose a deployment option above and follow the steps to get your website live with the updated SEO content!
