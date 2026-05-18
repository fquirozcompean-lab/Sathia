"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";

const WA_AGENDAR =
  "https://wa.me/524791037564?text=Hola%20MNC.%20Sathia%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta";
const WA_LINK = "https://wa.me/524791037564";
const MAPS_ANGELES_IFRAME =
  "https://www.google.com/maps?q=Hospital+Angeles+Le%C3%B3n&hl=es&z=17&output=embed";
const MAPS_ANGELES_LINK = "https://maps.google.com/?q=Hospital+Angeles+Le%C3%B3n";
const INSTAGRAM = "https://www.instagram.com/nutriologa.sathiagonzalez/";
const FACEBOOK = "https://www.facebook.com/sg.nutricionclinica/";
const GOOGLE_BUSINESS = "https://g.page/r/Cb-rkb2aqpqhEBM/review";
const DOCTORALIA = "https://www.doctoralia.com.mx/sathia-gonzalez-guzman/nutricionista-nutriologo-clinico/leon";
const LINKEDIN = "https://www.linkedin.com/in/mnc-sathia-gonz%C3%A1lez-guzm%C3%A1n-926747113/?originalSubdomain=mx";

function RevealOnScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  const [showMap, setShowMap] = useState(false);
  const [mapSearch, setMapSearch] = useState("");
  const [mapSearchSrc, setMapSearchSrc] = useState<string | null>(null);
  const [mapMode, setMapMode] = useState<"ANGELES" | "SEARCH">("ANGELES");
  const [showReporte, setShowReporte] = useState(false);

  const iframeSrc =
    mapMode === "ANGELES"
      ? MAPS_ANGELES_IFRAME
      : mapSearchSrc || MAPS_ANGELES_IFRAME;

  const currentMapsLink =
    mapMode === "ANGELES"
      ? MAPS_ANGELES_LINK
      : `https://maps.google.com/?q=${encodeURIComponent(mapSearch || "")}`;

  const handleMapSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!mapSearch.trim()) return;
    setMapMode("SEARCH");
    setMapSearchSrc(
      `https://www.google.com/maps?q=${encodeURIComponent(mapSearch)}&hl=es&z=16&output=embed`
    );
    setShowMap(true);
  };

  return (
    <div className="min-h-screen bg-snow text-ink">
      {/* Top bar */}
      <div className="w-full bg-violet-deep text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="opacity-90">León, Gto. · Hospital Ángeles Torre II · Consultorio 615</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="#ubicacion" className="hover:underline">Ubicación</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-snow/80 bg-snow/95 border-b border-snow-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Sathia González Nutrición Clínica" className="h-14 w-auto object-contain" />
            <div>
              <p className="font-semibold leading-tight text-violet-deep font-[family-name:var(--font-heading)]">
                Sathia González
              </p>
              <p className="text-xs text-ink-soft">Nutrición Clínica</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="text-ink hover:text-violet-mid transition">Servicios</a>
            <a href="#inbody" className="text-ink hover:text-violet-mid transition">InBody 230</a>
            <a href="#sobre-mi" className="text-ink hover:text-violet-mid transition">Sobre mí</a>
            <a href="#ubicacion" className="text-ink hover:text-violet-mid transition">Ubicación</a>
            <a href="#resenas" className="text-ink hover:text-violet-mid transition">Reseñas</a>
            <a
              href={WA_AGENDAR}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 bg-violet-deep text-white shadow hover:bg-violet-mid transition font-medium"
            >
              Agendar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-violet-light blur-3xl opacity-80" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-light blur-3xl opacity-60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-24 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1 bg-violet-deep text-white text-xs px-3 py-1 rounded-full font-medium">
                🎓 Maestría en Nutrición Clínica
              </span>
              <span className="inline-flex items-center gap-1 bg-sky text-white text-xs px-3 py-1 rounded-full font-medium">
                📊 Análisis InBody 230
              </span>
              <span className="inline-flex items-center gap-1 bg-leaf text-white text-xs px-3 py-1 rounded-full font-medium">
                🩺 Nutrición clínica especializada
              </span>
              <a
                href={DOCTORALIA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 bg-snow border border-snow-border text-ink text-xs px-3 py-1 rounded-full font-medium hover:bg-violet-light transition shadow-sm"
              >
                ⭐ Ver perfil en Doctoralia
              </a>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-violet-deep font-[family-name:var(--font-heading)]">
              Nutrición clínica{" "}
              <span className="text-sky">especializada</span>{" "}
              en León, Gto.
            </h1>

            <p className="mt-4 text-ink-soft md:text-lg leading-relaxed">
              <strong className="text-violet-deep">MNC. Sathia González Guzmán</strong> ·
              Licenciada por la <strong>Universidad de Guadalajara</strong> y Maestra en
              Nutrición Clínica en convenio con el{" "}
              <strong>Instituto Nacional de Salud Pública</strong> y el{" "}
              <strong>Instituto Nacional de Perinatología</strong>. Atención especializada
              a pacientes con comorbilidades complejas, análisis de composición corporal
              InBody 230 y planes individualizados basados en evidencia.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-5 py-3 bg-violet-deep text-white shadow hover:bg-violet-mid transition font-medium"
              >
                Agendar consulta (WhatsApp)
              </a>
              <a
                href="#inbody"
                className="rounded-xl px-5 py-3 border border-sky text-sky bg-snow shadow hover:bg-sky-light transition"
              >
                Conocer InBody 230
              </a>
              <a
                href="#servicios"
                className="rounded-xl px-5 py-3 border border-violet-deep text-violet-deep bg-snow shadow hover:bg-violet-light transition"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm flex-wrap">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-snow-border bg-snow px-3 py-2 shadow hover:bg-violet-light transition"
              >
                <InstagramIcon /> @nutriologa.sathiagonzalez
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-snow-border bg-snow px-3 py-2 shadow hover:bg-violet-light transition"
              >
                <FacebookIcon /> sg.nutricionclinica
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-ink-soft">
              <Badge>Nutrición oncológica</Badge>
              <Badge>Pacientes con estoma</Badge>
              <Badge>Nutrición enteral y parenteral</Badge>
              <Badge>InBody 230</Badge>
              <Badge>Enfoque clínico</Badge>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative">
            <div className="w-full rounded-3xl bg-snow border border-snow-border shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-6 flex flex-col">
                  <h3 className="text-base font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                    Motivos de consulta
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                    <li className="flex items-center gap-2"><Leaf /> Pacientes oncológicos</li>
                    <li className="flex items-center gap-2"><Leaf /> Pacientes con estoma</li>
                    <li className="flex items-center gap-2"><Leaf /> Nutrición enteral</li>
                    <li className="flex items-center gap-2"><Leaf /> Nutrición parenteral</li>
                    <li className="flex items-center gap-2"><Leaf /> Soporte nutricional perioperatorio</li>
                    <li className="flex items-center gap-2"><Leaf /> Control de peso</li>
                    <li className="flex items-center gap-2"><Leaf /> Diabetes y síndrome metabólico</li>
                    <li className="flex items-center gap-2"><Leaf /> Hipertensión y cardiopatías</li>
                    <li className="flex items-center gap-2"><Leaf /> Nutrición en embarazo</li>
                  </ul>
                </div>
                <div className="p-6 bg-violet-light flex flex-col">
                  <h3 className="text-base font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                    InBody 230
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                    <li className="flex items-center gap-2"><Check /> Masa muscular</li>
                    <li className="flex items-center gap-2"><Check /> Porcentaje de grasa</li>
                    <li className="flex items-center gap-2"><Check /> Agua corporal total</li>
                    <li className="flex items-center gap-2"><Check /> Grasa visceral</li>
                    <li className="flex items-center gap-2"><Check /> Índice musculoesquelético</li>
                    <li className="flex items-center gap-2"><Check /> Tasa metabólica basal</li>
                    <li className="flex items-center gap-2"><Check /> Segmentación por extremidades</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí / Credenciales */}
      <RevealOnScroll>
        <section id="sobre-mi" className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Foto */}
            <div className="rounded-3xl overflow-hidden border border-snow-border shadow-md bg-gradient-to-br from-violet-light via-snow to-sky-light">
              <img
                src="/sathia.png"
                alt="MNC. Sathia González Guzmán, nutrióloga clínica en León"
                className="w-full h-full object-cover object-top"
                style={{ maxHeight: "520px" }}
              />
            </div>

            <div className="rounded-3xl border border-snow-border bg-snow shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                Sobre mí
              </h2>

              <p className="mt-4 text-ink-soft leading-7">
                Hola, soy la{" "}
                <strong className="text-violet-deep">MNC. Sathia González Guzmán</strong>.
                Me formé como Licenciada en Nutrición en la{" "}
                <strong>Universidad de Guadalajara</strong>. Posteriormente continué mis
                estudios con la Maestría en Nutrición Clínica avalada por el{" "}
                <strong>Instituto Nacional de Salud Pública (INSP)</strong> y el{" "}
                <strong>Instituto Nacional de Perinatología</strong> en la Ciudad de México.
              </p>

              <p className="mt-4 text-ink-soft leading-7">
                Mi enfoque es la nutrición clínica de alta complejidad: atiendo a pacientes
                oncológicos, pacientes con necesidad de soporte de nutrición enteral o
                parenteral, portadores de estoma digestivo y personas con enfermedades
                crónicas como diabetes, hipertensión y síndrome metabólico. También acompaño
                a mujeres durante el embarazo y la lactancia.
              </p>

              <div className="mt-6 grid gap-3">
                <CredBadge
                  icon="🎓"
                  title="Licenciatura en Nutrición"
                  detail="Universidad de Guadalajara"
                />
                <CredBadge
                  icon="🏅"
                  title="Maestría en Nutrición Clínica"
                  detail="En convenio con el INSP y el Instituto Nacional de Perinatología · CDMX"
                />
                <CredBadge
                  icon="📊"
                  title="InBody 230 disponible en consultorio"
                  detail="Análisis de composición corporal de precisión clínica"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-snow-border bg-snow px-4 py-2 text-sm shadow hover:bg-violet-light transition"
                >
                  <LinkedInIcon /> Ver trayectoria en LinkedIn
                </a>
                <a
                  href={DOCTORALIA}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-snow-border bg-snow px-4 py-2 text-sm shadow hover:bg-violet-light transition"
                >
                  <DoctoraliaIcon /> Ver perfil en Doctoralia
                </a>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Servicios */}
      <RevealOnScroll>
        <section id="servicios" className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                Servicios
              </h2>
              <p className="mt-2 text-ink-soft">
                Atención nutricional clínica integral con enfoque en pacientes complejos.
              </p>
            </div>
            <a
              href={WA_AGENDAR}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-block text-sm text-violet-mid hover:text-violet-deep hover:underline transition"
            >
              Agenda una valoración →
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Consulta de nutrición clínica"
              description="Valoración nutricional completa: historia clínica, diagnóstico nutricional y plan de tratamiento por escrito basado en evidencia."
              icon="🩺"
            />
            <ServiceCard
              title="Análisis InBody 230"
              description="Medición de composición corporal por bioimpedancia: masa muscular, grasa, agua, grasa visceral y tasa metabólica basal."
              icon="📊"
              highlight
            />
            <ServiceCard
              title="Nutrición oncológica"
              description="Apoyo nutricional especializado para pacientes en tratamiento oncológico: quimioterapia, radioterapia y cirugía."
              icon="🎗️"
            />
            <ServiceCard
              title="Nutrición enteral y parenteral"
              description="Diseño y supervisión de planes de nutrición artificial para pacientes hospitalizados o en atención domiciliaria."
              icon="💉"
            />
            <ServiceCard
              title="Pacientes con estoma"
              description="Orientación nutricional especializada para pacientes con colostomía, ileostomía y otros tipos de estoma digestivo."
              icon="🏥"
            />
            <ServiceCard
              title="Plan nutricional personalizado"
              description="Diseñado con base en resultados InBody, diagnóstico clínico, comorbilidades y estilo de vida del paciente."
              icon="📋"
            />
            <ServiceCard
              title="Nutrición en embarazo y lactancia"
              description="Acompañamiento nutricional durante el embarazo, posparto y lactancia con formación en nutrición perinatal."
              icon="🤰"
            />
            <ServiceCard
              title="Seguimiento y monitoreo"
              description="Consultas de seguimiento con medición InBody 230 para evaluar cambios reales en composición corporal."
              icon="📈"
            />
            <ServiceCard
              title="Consulta a distancia"
              description="Atención por videollamada para pacientes que no pueden acudir de manera presencial al consultorio."
              icon="💻"
            />
          </div>
        </section>
      </RevealOnScroll>

      {/* InBody 230 spotlight */}
      <RevealOnScroll>
        <section id="inbody" className="bg-sky-light border-y border-sky/20 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-semibold tracking-widest text-sky uppercase mb-3">
                  Tecnología diferenciadora
                </p>
                <h2 className="text-2xl md:text-4xl font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                  Análisis de composición corporal{" "}
                  <span className="text-sky">InBody 230</span>
                </h2>
                <p className="mt-4 text-ink-soft leading-relaxed">
                  El peso en la báscula no cuenta toda la historia. El{" "}
                  <strong>InBody 230</strong> utiliza bioimpedancia eléctrica segmentada para
                  medir con precisión cada componente de tu cuerpo en menos de 60 segundos,
                  generando un reporte clínico detallado.
                </p>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  En el contexto clínico, conocer la composición corporal real del paciente
                  —especialmente en oncología, cirugía o enfermedades crónicas— es
                  determinante para el diseño del plan nutricional y el seguimiento del
                  tratamiento.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Masa muscular", desc: "Por segmento: brazos, piernas y tronco" },
                    { label: "% Grasa corporal", desc: "Total y grasa visceral abdominal" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-snow border border-snow-border p-4 shadow-sm">
                      <p className="font-semibold text-violet-deep text-sm">{item.label}</p>
                      <p className="text-xs text-ink-soft mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Foto máquina */}
                <div className="mt-8 flex justify-center">
                  <img
                    src="/inbody-maquina.png"
                    alt="InBody 230 — analizador de composición corporal"
                    className="h-64 w-auto object-contain drop-shadow-lg"
                  />
                </div>

                <a
                  href={WA_AGENDAR}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-xl px-5 py-3 bg-violet-deep text-white shadow hover:bg-violet-mid transition font-medium"
                >
                  Agendar análisis InBody 230
                </a>
              </div>

              <div className="space-y-6">
                {/* Reporte de ejemplo */}
                <div className="rounded-3xl bg-snow border border-snow-border shadow-md overflow-hidden">
                  <div className="px-6 pt-6 pb-3">
                    <p className="text-xs font-semibold tracking-widest text-violet-mid uppercase mb-1">
                      Reporte de ejemplo
                    </p>
                    <h3 className="text-base font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                      Así luce tu análisis InBody 230
                    </h3>
                    <p className="text-xs text-ink-soft mt-1">
                      Un reporte completo con datos clínicos que guían tu plan nutricional.
                    </p>
                  </div>
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setShowReporte(true)}
                  >
                    <img
                      src="/inbody-reporte.png"
                      alt="Ejemplo de reporte InBody 230"
                      className="w-full object-cover max-h-80 object-top"
                    />
                    <div className="absolute inset-0 bg-violet-deep/0 group-hover:bg-violet-deep/10 transition flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition bg-white text-violet-deep text-sm font-medium px-4 py-2 rounded-full shadow">
                        Ver reporte completo
                      </span>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-3">
                    <button
                      onClick={() => setShowReporte(true)}
                      className="text-sm text-violet-mid hover:text-violet-deep hover:underline transition"
                    >
                      Ver reporte completo →
                    </button>
                  </div>
                </div>

                {/* Por qué importa */}
                <div className="rounded-3xl bg-snow border border-snow-border shadow-md p-6">
                  <h3 className="text-base font-semibold text-violet-deep font-[family-name:var(--font-heading)] mb-4">
                    ¿Por qué importa en el contexto clínico?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      {
                        icon: "🎗️",
                        title: "En oncología",
                        text: "La sarcopenia (pérdida de músculo) afecta la tolerancia al tratamiento y el pronóstico. El InBody 230 la detecta antes de que sea visible.",
                      },
                      {
                        icon: "💉",
                        title: "En soporte nutricio enteral o parenteral",
                        text: "Permite calcular requerimientos reales de proteína y energía, evitando la sobrealimentación o subalimentación.",
                      },
                      {
                        icon: "🏥",
                        title: "En pacientes con estoma",
                        text: "El estado nutricional y la distribución de agua son fundamentales para la recuperación y calidad de vida.",
                      },
                      {
                        icon: "📉",
                        title: "En enfermedades crónicas",
                        text: "Va más allá del IMC: dos pacientes con el mismo peso pueden tener composiciones corporales radicalmente distintas.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex gap-4">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-medium text-ink text-sm">{item.title}</p>
                          <p className="text-xs text-ink-soft mt-1">{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Cómo funciona */}
      <RevealOnScroll>
        <section className="bg-violet-light py-16 border-y border-snow-border">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                ¿Cómo funciona?
              </h2>
              <p className="mt-2 text-ink-soft">
                Un proceso claro, personalizado y orientado a resultados reales.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Agenda tu consulta",
                  desc: "Escríbeme por WhatsApp o redes sociales. Agendar es rápido y sin complicaciones.",
                  color: "bg-violet-deep",
                },
                {
                  step: "02",
                  title: "Análisis InBody 230",
                  desc: "En tu primera consulta realizamos el análisis de composición corporal. 60 segundos para conocer tu cuerpo a fondo.",
                  color: "bg-sky",
                },
                {
                  step: "03",
                  title: "Plan personalizado",
                  desc: "Diseño un plan basado en tus resultados InBody, diagnóstico clínico, comorbilidades y estilo de vida.",
                  color: "bg-leaf",
                },
                {
                  step: "04",
                  title: "Seguimiento continuo",
                  desc: "Monitoreamos tu progreso con métricas objetivas. Ajustamos el plan según tus avances y condición clínica.",
                  color: "bg-violet-mid",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl bg-snow border border-snow-border p-6 shadow-sm">
                  <div className={`w-10 h-10 rounded-full ${item.color} text-white flex items-center justify-center text-sm font-bold mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Ubicación */}
      <RevealOnScroll>
        <section id="ubicacion" className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                Ubicación
              </h2>
              <p className="mt-2 text-ink-soft">
                Consultorio en Hospital Ángeles León. También disponible a distancia.
              </p>
            </div>
            <form onSubmit={handleMapSearch} className="hidden md:flex items-center gap-2">
              <input
                value={mapSearch}
                onChange={(e) => setMapSearch(e.target.value)}
                placeholder="Buscar en Google Maps"
                className="rounded-lg border border-snow-border bg-snow px-3 py-2 text-sm w-56 focus:outline-none focus:border-violet-mid"
              />
              <button className="rounded-lg bg-violet-deep text-white px-3 py-2 text-sm shadow hover:bg-violet-mid transition">
                Buscar
              </button>
            </form>
          </div>

          <div className="mt-8 rounded-[2rem] border border-snow-border bg-gradient-to-br from-violet-light via-snow to-sky-light p-6 md:p-8 shadow-md">
            <p className="text-sm font-semibold tracking-wide text-violet-mid uppercase">Consultorio</p>
            <h3 className="mt-1 text-xl md:text-2xl font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
              Hospital Ángeles León · Torre II · Consultorio 615
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              Av Cerro Gordo, Lomas del Campestre, 37150 · León, Gto.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-2 bg-violet-deep text-white shadow hover:bg-violet-mid transition text-sm"
              >
                Agendar por WhatsApp
              </a>
              <button
                onClick={() => { setMapMode("ANGELES"); setShowMap(true); }}
                className="rounded-xl px-4 py-2 bg-snow border border-snow-border shadow hover:bg-violet-light transition text-sm"
              >
                Ver mapa
              </button>
              <a
                href={MAPS_ANGELES_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-2 bg-snow border border-snow-border shadow hover:bg-violet-light transition text-sm"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>

          <form onSubmit={handleMapSearch} className="mt-6 md:hidden flex items-center gap-2">
            <input
              value={mapSearch}
              onChange={(e) => setMapSearch(e.target.value)}
              placeholder="Buscar en Google Maps"
              className="rounded-lg border border-snow-border bg-snow px-3 py-2 text-sm w-full"
            />
            <button className="rounded-lg bg-violet-deep text-white px-3 py-2 text-sm shadow hover:bg-violet-mid transition">
              Buscar
            </button>
          </form>
        </section>
      </RevealOnScroll>

      {/* Horarios + CTA */}
      <RevealOnScroll>
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <div className="rounded-3xl bg-gradient-to-br from-violet-deep to-violet-mid p-8 md:p-12 text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-semibold font-[family-name:var(--font-heading)]">
                  ¿Lista para empezar?
                </h2>
                <p className="mt-2 text-white/90">
                  Agenda tu primera consulta con análisis InBody 230 y recibe un plan
                  nutricional diseñado específicamente para tu condición clínica.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WA_AGENDAR}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl px-5 py-3 bg-white text-violet-deep shadow hover:bg-violet-light transition font-medium"
                  >
                    Agendar por WhatsApp
                  </a>
                  <button
                    onClick={() => { setMapMode("ANGELES"); setShowMap(true); }}
                    className="rounded-xl px-5 py-3 bg-white/20 text-white border border-white/30 shadow hover:bg-white/30 transition"
                  >
                    Cómo llegar
                  </button>
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur border border-white/20">
                <h3 className="font-semibold font-[family-name:var(--font-heading)]">Horarios</h3>
                <ul className="mt-3 text-sm text-white/90 space-y-2">
                  <li className="flex justify-between"><span>Lunes a viernes</span><span>9:00–19:00</span></li>
                  <li className="flex justify-between"><span>Sábado</span><span>9:00–13:00</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Reseñas */}
      <RevealOnScroll>
        <section id="resenas" className="bg-snow-deep border-t border-snow-border py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                Reseñas de pacientes
              </h2>
              <p className="mt-2 text-ink-soft">
                Opiniones verificadas en Doctoralia y Google. Sin filtros, directamente de los pacientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Doctoralia — principal */}
              <a
                href={DOCTORALIA}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border-2 border-violet-mid/30 bg-snow px-6 py-5 shadow-md hover:bg-violet-light hover:border-violet-mid transition group"
              >
                <DoctoraliaIcon size={36} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-violet-deep group-hover:text-violet-mid transition">
                      Doctoralia
                    </p>
                    <span className="text-xs bg-violet-light text-violet-deep font-semibold px-2 py-0.5 rounded-full">
                      Verificado
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft mt-1">
                    Reseñas verificadas de pacientes reales. Consulta mi perfil completo con especialidad, atención y calificaciones.
                  </p>
                  <p className="mt-3 text-xs text-violet-mid font-medium group-hover:underline">
                    Ver reseñas y perfil completo →
                  </p>
                </div>
              </a>

              {/* Google Business */}
              <a
                href={GOOGLE_BUSINESS}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-snow-border bg-snow px-6 py-5 shadow-md hover:bg-violet-light hover:border-violet-mid transition group"
              >
                <GoogleIcon />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-ink group-hover:text-violet-deep transition">
                      Google
                    </p>
                  </div>
                  <p className="text-sm text-ink-soft mt-1">
                    Reseñas en Google Business. Comparte tu experiencia o consulta la opinión de otros pacientes.
                  </p>
                  <p className="mt-3 text-xs text-violet-mid font-medium group-hover:underline">
                    Ver en Google →
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-snow-border bg-snow px-4 py-2 text-sm shadow hover:bg-violet-light transition text-ink-soft"
              >
                <InstagramIcon /> Instagram
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-snow-border bg-snow px-4 py-2 text-sm shadow hover:bg-violet-light transition text-ink-soft"
              >
                <FacebookIcon /> Facebook
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-snow-border bg-snow px-4 py-2 text-sm shadow hover:bg-violet-light transition text-ink-soft"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Footer */}
      <footer className="border-t border-snow-border bg-snow">
        <div className="mx-auto max-w-7xl px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src="/logo.png" alt="Sathia González Nutrición Clínica" className="h-14 w-auto object-contain mb-3" />
            <p className="text-ink-soft">Nutrición clínica especializada en León, Gto.</p>
          </div>
          <div>
            <p className="font-semibold text-violet-deep font-[family-name:var(--font-heading)]">Contacto</p>
            <ul className="mt-2 space-y-1 text-ink-soft">
              <li>WhatsApp: 479 103 7564</li>
              <li>Instagram: @nutriologa.sathiagonzalez</li>
              <li>Facebook: sg.nutricionclinica</li>
            </ul>
            <div className="mt-3 flex flex-col gap-1">
              <a href={DOCTORALIA} target="_blank" rel="noreferrer" className="text-violet-mid hover:text-violet-deep hover:underline transition text-xs">
                Doctoralia — Reseñas verificadas
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-violet-mid hover:text-violet-deep hover:underline transition text-xs">
                LinkedIn — Trayectoria profesional
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-violet-deep font-[family-name:var(--font-heading)]">Dirección</p>
            <ul className="mt-2 space-y-1 text-ink-soft">
              <li>Hospital Ángeles León</li>
              <li>Torre II · Consultorio 615</li>
              <li>Av Cerro Gordo, Lomas del Campestre</li>
              <li>37150 · León, Gto.</li>
            </ul>
            <button
              onClick={() => { setMapMode("ANGELES"); setShowMap(true); }}
              className="mt-2 text-violet-mid hover:text-violet-deep hover:underline transition"
            >
              Ver mapa
            </button>
          </div>
          <div>
            <p className="font-semibold text-violet-deep font-[family-name:var(--font-heading)]">Avisos</p>
            <p className="mt-2 text-ink-soft">
              Esta página es informativa y no sustituye una valoración nutricional clínica.
            </p>
            <a
              href="/aviso-privacidad"
              className="mt-2 inline-block text-violet-mid hover:text-violet-deep hover:underline transition"
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-ink-soft pb-8">
          © {new Date().getFullYear()} MNC. Sathia González Guzmán · Todos los derechos reservados
        </div>
      </footer>

      {/* Modal mapa */}
      {showMap && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-violet-deep/70 p-4"
          onClick={() => setShowMap(false)}
        >
          <div
            className="w-full max-w-3xl rounded-2xl bg-snow shadow border border-snow-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-snow-border">
              <h3 className="font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                Cómo llegar
              </h3>
              <button onClick={() => setShowMap(false)} className="text-ink-soft hover:text-ink transition" aria-label="Cerrar mapa">✕</button>
            </div>

            <div className="px-4 pt-4">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { key: "ANGELES", label: "Hospital Ángeles León" },
                  { key: "SEARCH", label: "Buscar" },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setMapMode(t.key as "ANGELES" | "SEARCH")}
                    className={`rounded-full px-3 py-1 text-sm border transition ${
                      mapMode === t.key
                        ? "bg-violet-deep text-white border-violet-deep"
                        : "bg-snow text-ink-soft border-snow-border hover:bg-violet-light"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {mapMode === "SEARCH" && (
              <form onSubmit={handleMapSearch} className="px-4 pt-3 flex items-center gap-2">
                <input
                  value={mapSearch}
                  onChange={(e) => setMapSearch(e.target.value)}
                  placeholder="Ej. estacionamiento, farmacia cercana..."
                  className="rounded-lg border border-snow-border bg-snow px-3 py-2 text-sm w-full focus:outline-none focus:border-violet-mid"
                />
                <button className="rounded-lg bg-violet-deep text-white px-3 py-2 text-sm shadow hover:bg-violet-mid transition">
                  Buscar
                </button>
              </form>
            )}

            <div className="p-4">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-snow-border">
                <iframe
                  title="Mapa Hospital Ángeles León"
                  src={iframeSrc}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-ink-soft">
                  {mapMode === "ANGELES"
                    ? "Hospital Ángeles León · Torre II · Consultorio 615"
                    : mapSearch ? `Búsqueda: ${mapSearch}` : "Escribe arriba para buscar"}
                </p>
                <a
                  href={currentMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-mid hover:text-violet-deep hover:underline transition text-sm"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal reporte InBody */}
      {showReporte && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-violet-deep/80 p-4"
          onClick={() => setShowReporte(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-snow shadow border border-snow-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-snow-border">
              <h3 className="font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
                Ejemplo de reporte InBody 230
              </h3>
              <button onClick={() => setShowReporte(false)} className="text-ink-soft hover:text-ink transition" aria-label="Cerrar reporte">✕</button>
            </div>
            <div className="overflow-y-auto max-h-[80vh]">
              <img
                src="/inbody-reporte.png"
                alt="Reporte completo InBody 230"
                className="w-full object-contain"
              />
            </div>
            <div className="p-4 border-t border-snow-border text-center">
              <p className="text-xs text-ink-soft">
                Este es un ejemplo del reporte que recibes tras tu análisis InBody 230 en consultorio.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-snow-border px-3 py-1 bg-snow shadow-sm text-xs text-ink-soft">
      <span className="w-1.5 h-1.5 rounded-full bg-violet-mid"></span>
      {children}
    </span>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  highlight = false,
}: {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border p-6 shadow-sm hover:shadow-md transition ${
        highlight ? "border-sky/40 bg-sky-light" : "border-snow-border bg-snow"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <h3 className="mt-3 font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink-soft">{description}</p>
      {highlight && (
        <span className="mt-3 inline-block text-xs font-semibold text-sky border border-sky/30 rounded-full px-2 py-0.5">
          Diferenciador clave
        </span>
      )}
    </article>
  );
}

function CredBadge({ icon, title, detail }: { icon: string; title: string; detail: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-snow-border bg-snow-deep p-4">
      <span className="text-xl shrink-0">{icon}</span>
      <div>
        <p className="font-medium text-violet-deep text-sm">{title}</p>
        <p className="text-xs text-ink-soft mt-0.5">{detail}</p>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-violet-mid">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Leaf() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-leaf">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2s2-7-7-7C7 0 3 3 3 3s4.33.2 6.07 2.3C10.5 7.07 11 10.13 11 10s4.97-1.45 6-2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-violet-mid">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-violet-mid">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#0077B5]">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function DoctoraliaIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="16" cy="16" r="16" fill="#00A99D" />
      <path
        d="M10 8h5.5c4.142 0 7.5 3.358 7.5 7.5S19.642 23 15.5 23H10V8zm3 3v9h2.5a4.5 4.5 0 0 0 0-9H13z"
        fill="white"
      />
    </svg>
  );
}
