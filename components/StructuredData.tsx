export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "MNC. Sathia González Guzmán · Nutrición Clínica",
    description:
      "Nutrición clínica especializada con Maestría por el INSP y el Instituto Nacional de Perinatología. Análisis de composición corporal InBody 270. Consultas presenciales y en línea.",
    url: "https://www.nutriologasathia.com",
    telephone: "+524791037564",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av Cerro Gordo, Lomas del Campestre, Torre II Consultorio 615",
      addressLocality: "León",
      addressRegion: "Guanajuato",
      postalCode: "37150",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.1314,
      longitude: -101.6671,
    },
    sameAs: [
      "https://www.instagram.com/nutriologa.sathiagonzalez/",
      "https://www.facebook.com/sg.nutricionclinica/",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    medicalSpecialty: "DietNutrition",
    availableService: [
      { "@type": "MedicalTherapy", name: "Consulta de nutrición clínica" },
      { "@type": "MedicalTherapy", name: "Análisis de composición corporal InBody 230" },
      { "@type": "MedicalTherapy", name: "Plan nutricional personalizado" },
      { "@type": "MedicalTherapy", name: "Consulta de nutrición en línea" },
      { "@type": "MedicalTherapy", name: "Nutrición perinatal y en embarazo" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
