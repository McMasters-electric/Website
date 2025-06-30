import React from 'react';
import { Helmet } from 'react-helmet-async';
import LegalLayout from '../components/LegalLayout';

const TermsOfService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | McMasters Electric LLC - Saratoga Springs NY Electrician</title>
        <meta name="description" content="Terms of Service for McMasters Electric LLC electrical contractor services in Saratoga Springs NY. Learn about our service terms, conditions, and warranty policies." />
        <meta name="keywords" content="terms of service, McMasters Electric LLC, electrical contractor, service agreement, terms and conditions, electrician Saratoga Springs NY" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="McMasters Electric LLC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://mcmasterselectric.com/terms-of-service" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms of Service | McMasters Electric LLC - Licensed Electrician Saratoga Springs NY" />
        <meta property="og:description" content="Terms of Service for McMasters Electric LLC electrical contractor services in Saratoga Springs NY." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mcmasterselectric.com/terms-of-service" />
        <meta property="og:site_name" content="McMasters Electric LLC" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Service | McMasters Electric LLC - Saratoga Springs NY" />
        <meta name="twitter:description" content="Terms of Service for McMasters Electric LLC electrical contractor services." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - McMasters Electric LLC",
            "description": "Terms of Service for McMasters Electric LLC electrical contractor services in Saratoga Springs NY",
            "url": "https://mcmasterselectric.com/terms-of-service",
            "datePublished": "2025-01-26",
            "dateModified": "2025-01-26",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "McMasters Electric LLC",
              "url": "https://mcmasterselectric.com",
              "publisher": {
                "@type": "LocalBusiness",
                "@id": "https://mcmasterselectric.com/#organization"
              }
            },
            "about": {
              "@type": "LocalBusiness",
              "@id": "https://mcmasterselectric.com/#organization",
              "name": "McMasters Electric LLC",
              "description": "Licensed electrical contractor serving Saratoga Springs NY",
              "url": "https://mcmasterselectric.com",
              "telephone": "(518) 491-0389",
              "email": "mcmasterelectricllc@gmail.com",
              "areaServed": {
                "@type": "City",
                "name": "Saratoga Springs",
                "containedInPlace": {
                  "@type": "State",
                  "name": "New York"
                }
              },
              "serviceType": "Electrical Contractor Services"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://mcmasterselectric.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Terms of Service",
                  "item": "https://mcmasterselectric.com/terms-of-service"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <LegalLayout title="Terms of Service" lastUpdated="January 26, 2025">
        <div className="space-y-6 text-gray-300">
          
          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>
              By engaging McMasters Electric LLC for electrical services, accessing our website, or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Services Description</h2>
            <div className="space-y-4">
              <p>McMasters Electric LLC provides professional electrical services including, but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Electrical repairs and troubleshooting</li>
                <li>Electrical panel upgrades and installation</li>
                <li>New wiring for residential properties</li>
                <li>Outlet and switch installation</li>
                <li>Lighting installation and design</li>
                <li>Emergency electrical services</li>
                <li>Code compliance and safety inspections</li>
              </ul>
              <p>
                All work is performed by licensed master electricians in accordance with New York State electrical codes and safety standards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Estimates and Pricing</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All estimates are provided free of charge and are valid for 30 days unless otherwise specified</li>
                <li>Final pricing may vary based on actual conditions discovered during work</li>
                <li>Any significant changes to scope or pricing will be discussed and approved before proceeding</li>
                <li>Emergency service calls may be subject to premium pricing</li>
                <li>Payment terms will be specified in individual service agreements</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Scheduling and Access</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service appointments must be scheduled in advance except for emergency calls</li>
                <li>Customer must provide reasonable access to work areas</li>
                <li>Cancellations must be made at least 24 hours in advance to avoid charges</li>
                <li>We reserve the right to reschedule due to weather, equipment issues, or other circumstances</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Customer Responsibilities</h2>
            <div className="space-y-4">
              <p>Customers are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing accurate information about electrical issues and property conditions</li>
                <li>Ensuring safe working conditions and access to work areas</li>
                <li>Removing personal items from work areas</li>
                <li>Obtaining necessary permits where required (we can assist with permit applications)</li>
                <li>Providing timely payment according to agreed terms</li>
                <li>Notifying us immediately of any concerns with completed work</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Warranty and Guarantees</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We warrant our workmanship for one (1) year from completion date</li>
                <li>Material warranties are provided by manufacturers according to their terms</li>
                <li>Warranty does not cover damage due to misuse, alterations, or normal wear and tear</li>
                <li>Emergency repairs may have different warranty terms</li>
                <li>We guarantee all work meets applicable electrical codes and safety standards</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <div className="space-y-4">
              <p>
                Our liability is limited to the cost of the services provided. We are not liable for indirect, consequential, or punitive damages. Our insurance coverage protects against property damage and injury caused by our negligence.
              </p>
              <p>
                We are not responsible for pre-existing conditions, code violations, or issues not directly related to our work scope.
              </p>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Safety and Compliance</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All work complies with current New York State electrical codes</li>
                <li>We maintain proper licensing and insurance as required by law</li>
                <li>Safety is our top priority for both our team and customers</li>
                <li>We reserve the right to stop work if unsafe conditions are present</li>
                <li>Customers will be informed of any safety hazards discovered</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Payment Terms</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment terms will be specified in individual service agreements</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>Late payments may be subject to finance charges</li>
                <li>Disputed charges must be reported within 30 days</li>
                <li>Final payment may be required before project completion for large jobs</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Dispute Resolution</h2>
            <p>
              Any disputes will be resolved through good faith negotiation. If necessary, disputes will be handled through binding arbitration in accordance with New York State law.
            </p>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on our website and take effect immediately. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="chrome-text text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2">
              <p>For questions about these Terms of Service, please contact us:</p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p><strong>McMasters Electric LLC</strong></p>
                <p>Email: mcmasterelectricllc@gmail.com</p>
                <p>Phone: (518) 491-0389</p>
                <p>Service Area: Saratoga Springs, NY and surrounding areas</p>
                <p>Licensed Master Electrician - New York State</p>
              </div>
            </div>
          </section>

        </div>
      </LegalLayout>
    </>
  );
};

export default TermsOfService;
