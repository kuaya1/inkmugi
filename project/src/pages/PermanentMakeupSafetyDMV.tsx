import React from "react";
import { Helmet } from "react-helmet";

const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Permanent Makeup Safety in the DMV",
  "description": "A comprehensive guide to safety standards, regulations, and best practices for permanent makeup procedures in the Washington DC, Maryland, and Virginia area.",
  "author": {
    "@type": "Person",
    "name": "Kuaya Nguyen",
    "jobTitle": "Board-Certified Permanent Makeup Artist",
    "affiliation": {
      "@type": "Organization",
      "name": "Inkmugi Studio"
    }
  },
  "reviewedBy": {
    "@type": "MedicalOrganization",
    "name": "Inkmugi Studio"
  }
};

const PermanentMakeupSafetyDMV = () => (
  <div className="container mx-auto px-4 py-8">
    <Helmet>
      <title>Permanent Makeup Safety in the DMV | Inkmugi Studio</title>
      <meta name="description" content="A comprehensive guide to safety standards, regulations, and best practices for permanent makeup procedures in the Washington DC, Maryland, and Virginia area." />
      <script type="application/ld+json">{JSON.stringify(medicalSchema)}</script>
    </Helmet>
    <h1 className="text-3xl font-bold mb-4">Permanent Makeup Safety in the DMV</h1>
    <p className="mb-6 text-lg">A comprehensive guide to safety standards, regulations, and best practices for permanent makeup procedures in Washington DC, Maryland, and Virginia.</p>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Quick Facts</h2>
      <ul className="list-disc pl-6">
        <li>All PMU artists in DC, MD, and VA must be licensed and work in inspected facilities.</li>
        <li>Strict sterilization and hygiene protocols are required by law.</li>
        <li>Single-use needles and medical-grade pigments are mandatory.</li>
        <li>Client consent forms and aftercare instructions are standard practice.</li>
        <li>Annual inspections and continuing education are required for studios.</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Table of Contents</h2>
      <ol className="list-decimal pl-6">
        <li><a href="#regulations" className="text-blue-600 underline">Regulations & Licensing</a></li>
        <li><a href="#facility" className="text-blue-600 underline">Facility Standards</a></li>
        <li><a href="#artist" className="text-blue-600 underline">Artist Qualifications</a></li>
        <li><a href="#sterilization" className="text-blue-600 underline">Sterilization Protocols</a></li>
        <li><a href="#client" className="text-blue-600 underline">Client Safety & Consent</a></li>
        <li><a href="#aftercare" className="text-blue-600 underline">Aftercare & Follow-Up</a></li>
        <li><a href="#faq" className="text-blue-600 underline">FAQ</a></li>
        <li><a href="#references" className="text-blue-600 underline">References</a></li>
      </ol>
    </section>
    <section id="regulations" className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Regulations & Licensing</h2>
      <p>Permanent makeup (PMU) procedures are regulated by state and local health departments in the DMV. Artists must hold valid licenses and studios must pass regular inspections.</p>
      <ul className="list-disc pl-6">
        <li><strong>DC:</strong> Department of Health requires PMU artists to complete training and pass an exam.</li>
        <li><strong>Maryland:</strong> State Board of Cosmetology oversees licensing and facility standards.</li>
        <li><strong>Virginia:</strong> Department of Professional and Occupational Regulation (DPOR) mandates annual inspections.</li>
      </ul>
    </section>
    <section id="facility" className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Facility Standards</h2>
      <ul className="list-disc pl-6">
        <li>Studios must use hospital-grade disinfectants and maintain clean workspaces.</li>
        <li>Separate areas for procedures and sterilization are required.</li>
        <li>Sharps containers and biohazard disposal protocols must be followed.</li>
      </ul>
    </section>
    <section id="artist" className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Artist Qualifications</h2>
      <ul className="list-disc pl-6">
        <li>Artists must complete accredited training programs.</li>
        <li>Continuing education is required to maintain licensure.</li>
        <li>CPR and bloodborne pathogen certifications are recommended.</li>
      </ul>
    </section>
    <section id="sterilization" className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Sterilization Protocols</h2>
      <ul className="list-disc pl-6">
        <li>Single-use needles and disposable supplies are mandatory.</li>
        <li>Autoclaves are used for sterilizing reusable tools.</li>
        <li>Hand hygiene and glove use are strictly enforced.</li>
      </ul>
    </section>
    <section id="client" className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Client Safety & Consent</h2>
      <ul className="list-disc pl-6">
        <li>Clients must complete medical history and consent forms before procedures.</li>
        <li>Pre-procedure consultations cover risks, benefits, and expectations.</li>
        <li>Studios provide written aftercare instructions and emergency contact info.</li>
      </ul>
    </section>
    <section id="aftercare" className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Aftercare & Follow-Up</h2>
      <ul className="list-disc pl-6">
        <li>Clients receive detailed aftercare instructions to prevent infection.</li>
        <li>Follow-up appointments are recommended to monitor healing.</li>
        <li>Studios maintain records of procedures and client outcomes.</li>
      </ul>
    </section>
    <section id="faq" className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
      <ul className="list-disc pl-6">
        <li><strong>Is permanent makeup safe?</strong> Yes, when performed by licensed professionals in regulated facilities.</li>
        <li><strong>How do I verify an artist's credentials?</strong> Ask to see their license and training certificates.</li>
        <li><strong>What should I expect during the procedure?</strong> A sterile environment, single-use needles, and clear aftercare instructions.</li>
        <li><strong>What if I have a reaction?</strong> Contact your studio and seek medical advice if needed.</li>
      </ul>
    </section>
    <section id="references" className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">References</h2>
      <ul className="list-disc pl-6">
        <li>DC Department of Health: <a href="https://dchealth.dc.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">dchealth.dc.gov</a></li>
        <li>Maryland State Board of Cosmetology: <a href="https://www.dllr.state.md.us/license/cos/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">dllr.state.md.us/license/cos/</a></li>
        <li>Virginia DPOR: <a href="https://www.dpor.virginia.gov/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">dpor.virginia.gov</a></li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">About This Document</h2>
      <p>This guide was prepared by Kuaya Nguyen, Board-Certified Permanent Makeup Artist at Inkmugi Studio, to help clients and artists understand safety standards in the DMV area.</p>
    </section>
  </div>
);

export default PermanentMakeupSafetyDMV;
