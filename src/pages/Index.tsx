<dyad-write path="src/pages/Index.tsx" description="Update main page layout to include the logos below the header."/>
<dyad-rename from="src/components/HowItWorks.tsx" to="src/components/TrustedByLogos.tsx"></dyad-rename>
<dyad-write path="src/components/TrustedByLogos.tsx" description="Create a new component to display the logos side by side."/>
<dyad-write path="src/components/TrustedByLogos.tsx" description="Create component with logos side by side."/>
<dyad-write path="src/components/TrustedByLogos.tsx" <>
"use client";

import React from 'react';

const TrustedByLogos = () => {
  return (
    <div className="flex justify-center items-center space-x-8 mt-6 mb-8">
      <img src="/assets/iit_delhi.png" alt="IIT Delhi" className="h-12 object-contain" />
      <img src="/assets/iit-madras-logo-png_seeklogo-310945.png" alt="IIT Madras" className="h-12 object-contain" />
    </div>
  );
};

export default TrustedByLogos;