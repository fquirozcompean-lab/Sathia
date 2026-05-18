import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de privacidad de MNC. Sathia González Guzmán · Nutrición Clínica.",
};

export default function AvisoPrivacidad() {
  return (
    <div className="min-h-screen bg-snow text-ink">
      <header className="border-b border-snow-border bg-snow">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center gap-4">
          <Link href="/" className="text-violet-mid hover:text-violet-deep transition text-sm">
            ← Regresar
          </Link>
          <span className="text-snow-border">|</span>
          <p className="font-semibold text-violet-deep font-[family-name:var(--font-heading)]">
            Sathia González · Nutrición Clínica
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-semibold text-violet-deep font-[family-name:var(--font-heading)] mb-2">
          Aviso de Privacidad
        </h1>
        <p className="text-sm text-ink-soft mb-10">
          Última actualización: {new Date().getFullYear()}
        </p>

        <div className="prose prose-sm max-w-none space-y-8 text-ink-soft leading-7">
          <section>
            <h2 className="text-lg font-semibold text-violet-deep mb-2">
              Responsable del tratamiento de datos
            </h2>
            <p>
              <strong>MNC. Sathia González Guzmán</strong>, con consultorio ubicado en
              Hospital Ángeles León, Torre II, Consultorio 615, Av. Cerro Gordo, Lomas del
              Campestre, C.P. 37150, León, Guanajuato, México, es responsable del uso y
              protección de sus datos personales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-violet-deep mb-2">
              Datos personales que recabamos
            </h2>
            <p>
              Para llevar a cabo las finalidades descritas en el presente aviso de privacidad,
              utilizaremos los siguientes datos personales:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nombre completo</li>
              <li>Fecha de nacimiento y edad</li>
              <li>Sexo</li>
              <li>Datos de contacto (teléfono, correo electrónico)</li>
              <li>Datos de salud: peso, talla, composición corporal, historial clínico, diagnósticos, medicamentos</li>
              <li>Hábitos alimenticios y estilo de vida</li>
              <li>Resultados de análisis de composición corporal (InBody 270)</li>
            </ul>
            <p className="mt-3">
              Los datos de salud son considerados datos personales sensibles y serán tratados
              con las medidas de seguridad más estrictas conforme a la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-violet-deep mb-2">
              Finalidades del tratamiento
            </h2>
            <p>Sus datos personales serán utilizados para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Brindar atención nutricional clínica personalizada</li>
              <li>Elaborar planes de alimentación y seguimiento nutricional</li>
              <li>Gestionar citas y consultas (presenciales y en línea)</li>
              <li>Comunicarle resultados, recomendaciones y ajustes a su plan</li>
              <li>Cumplir con obligaciones legales aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-violet-deep mb-2">
              Transferencia de datos
            </h2>
            <p>
              Sus datos personales no serán compartidos con terceros sin su consentimiento,
              salvo en los casos previstos por la ley o cuando sea necesario para brindarle
              la atención médica requerida.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-violet-deep mb-2">
              Derechos ARCO
            </h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO)
              al tratamiento de sus datos personales. Para ejercer estos derechos, puede
              contactarnos a través de WhatsApp al número{" "}
              <strong>479 103 7564</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-violet-deep mb-2">
              Cambios al aviso de privacidad
            </h2>
            <p>
              Nos reservamos el derecho de efectuar en cualquier momento modificaciones o
              actualizaciones al presente aviso de privacidad. Estas modificaciones estarán
              disponibles en este sitio web.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-snow-border mt-16 py-6 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} MNC. Sathia González Guzmán · Todos los derechos reservados
      </footer>
    </div>
  );
}
