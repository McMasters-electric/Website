import React from 'react';
import { Helmet } from 'react-helmet-async';
import LegalLayout from '../components/LegalLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | McMasters Electric LLC - Saratoga Springs NY Electrician</title>
        <meta
          name="description"
          content="McMasters Electric LLC Privacy Policy. Learn how we collect, use, and protect your personal information when you use our electrical contractor services in Saratoga Springs NY."
        />
        <meta
          name="keywords"
          content="privacy policy, McMasters Electric LLC, electrical contractor, personal information, data protection, electrician Saratoga Springs NY"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="McMasters Electric LLC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://mcmasterselectric.com/privacy-policy" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Privacy Policy | McMasters Electric LLC - Licensed Electrician Saratoga Springs NY"
        />
        <meta
          property="og:description"
          content="Privacy Policy for McMasters Electric LLC. Learn how we collect, use, and protect your personal information when using our electrical services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mcmasterselectric.com/privacy-policy" />
        <meta property="og:site_name" content="McMasters Electric LLC" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Privacy Policy | McMasters Electric LLC - Saratoga Springs NY"
        />
        <meta
          name="twitter:description"
          content="Privacy Policy for McMasters Electric LLC electrical contractor. Learn how we protect your personal information."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy - McMasters Electric LLC",
            description:
              "Privacy Policy for McMasters Electric LLC electrical contractor services in Saratoga Springs NY",
            url: "https://mcmasterselectric.com/privacy-policy",
            datePublished: "2025-01-26",
            dateModified: "2025-01-26",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              name: "McMasters Electric LLC",
              url: "https://mcmasterselectric.com",
              publisher: {
                "@type": "LocalBusiness",
                "@id": "https://mcmasterselectric.com/#organization",
              },
            },
            about: {
              "@type": "LocalBusiness",
              "@id": "https://mcmasterselectric.com/#organization",
              name: "McMasters Electric LLC",
              description: "Licensed electrical contractor serving Saratoga Springs NY",
              url: "https://mcmasterselectric.com",
              telephone: "(518) 491-0389",
              email: "mcmasterelectricllc@gmail.com",
              areaServed: {
                "@type": "City",
                name: "Saratoga Springs",
                containedInPlace: {
                  "@type": "State",
                  name: "New York",
                },
              },
              serviceType: "Electrical Contractor Services",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://mcmasterselectric.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Privacy Policy",
                  item: "https://mcmasterselectric.com/privacy-policy",
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <LegalLayout title="Privacy Policy" lastUpdated="January 26, 2025">
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <p>McMasters Electric LLC collects information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request a quote or consultation for electrical services</li>
                <li>Schedule electrical work in the Saratoga Springs NY area</li>
                <li>Contact us via phone, email, or our website</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Provide feedback or reviews about our electrical services</li>
              </ul>
              <p>The types of personal information we may collect include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Property details and electrical service requirements</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide electrical services and customer support</li>
                <li>Process quotes, estimates, and scheduling for electrical work</li>
                <li>Communicate about your electrical projects and services</li>
                <li>Send important updates about appointments or safety recalls</li>
                <li>Improve our electrical contractor services and customer experience</li>
                <li>Comply with legal obligations and electrical industry regulations</li>
                <li>Process payments and maintain financial records</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
            <div className="space-y-4">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Service Providers:</strong> We may share information with electrical contractors, suppliers, or vendors who assist in providing our services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or government request
                </li>
                <li>
                  <strong>Safety and Emergency:</strong> We may share information to protect safety or prevent electrical hazards or property damage
                </li>
                <li>
                  <strong>Business Transfers:</strong> Information may be transferred in connection with a merger, sale, or acquisition of our electrical contracting business
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <div className="space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt-out of marketing communications about electrical services</li>
                <li>Request information about how we process your data</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below.</p>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your experience. For detailed information about our use of cookies, please see our{' '}
              <a href="/cookie-policy" className="text-orange-400 hover:text-orange-300">
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              Our electrical contractor services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2">
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p>
                  <strong>McMasters Electric LLC</strong>
                </p>
                <p>Email: mcmasterelectricllc@gmail.com</p>
                <p>Phone: (518) 491-0389</p>
                <p>Service Area: Saratoga Springs, NY and surrounding areas</p>
              </div>
            </div>
          </section>
        </div>
      </LegalLayout>
    </>
  );
};

export default PrivacyPolicy;
