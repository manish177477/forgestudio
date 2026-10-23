Forge Studio website

This is the editable React + Vite source for the Forge Studio website.

Page source files live in src/pages/:
  HomePage.jsx
  AboutPage.jsx
  ContactPage.jsx
  NotFoundPage.jsx
  services/BrandIdentityPage.jsx
  services/CreativeDesignPage.jsx
  services/ContentProductionPage.jsx
  services/WebsiteDevelopmentPage.jsx
  services/MarketingPage.jsx
  services/AiContentPage.jsx
  services/CorporateGiftingPage.jsx

Shared UI components are in src/components/, common page metadata is in
src/data/pageSeo.js, and service content is in src/data/services.js.

Local development:
  npm install
  npm run dev

Production build:
  npm run build
  npm run preview

The site uses React Router for /about, /contact and the seven individual
/services/... pages. Deploy the generated dist folder to a static host with
history fallback enabled so direct service-page visits and refreshes work.
For Apache hosting, public/.htaccess is copied into dist and routes extensionless
URLs back to the app while allowing real missing assets to return 404 responses.
For GitHub Pages, .github/workflows/deploy.yml builds and deploys the site when
changes are pushed to main. In repository Settings > Pages, set the source to
GitHub Actions. The workflow configures the Vite base path and creates a 404
fallback so React Router routes continue to load on refresh.
The sitemap lists all page routes; set a production domain in sitemap.xml
before submitting it to search engines.

The contact form opens WhatsApp with the visitor's enquiry prefilled. No
WhatsApp number is configured, so visitors can choose a recipient in WhatsApp.

Brand palette: orange #ff6a00, blue #1e3a8a, and white #ffffff. The Forge
Studio logo is reused from assets/forge-logo-qGJ_2-zb.png.
