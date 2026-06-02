import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whatsappHref = "https://wa.me/51933640908";

const documentTypes = ["DNI", "CE", "Pasaporte", "RUC"];
const departments = [
  "Amazonas",
  "Ancash",
  "Apurimac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Callao",
  "Cusco",
  "Huancavelica",
  "Huanuco",
  "Ica",
  "Junin",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martin",
  "Tacna",
  "Tumbes",
  "Ucayali",
];

export default function ComplaintsBookPage() {
  return (
    <main className="min-h-screen bg-[#f8f9ff] px-5 py-8 text-[#0b1c30] lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_76%_12%,rgba(203,219,245,.72),transparent_32%),linear-gradient(90deg,rgba(13,28,50,.035)_1px,transparent_1px),linear-gradient(180deg,rgba(13,28,50,.03)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <Button variant="outline" className="w-fit rounded-full bg-white/70" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
          </Button>
          <Link href="/" className="order-first flex items-center justify-center gap-3 sm:order-none">
            <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(11,28,48,.08)]">
              <Image
                src="/logo-aura.png"
                alt="Aura Premium Oil"
                width={80}
                height={80}
                className="h-12 w-12 object-contain"
                priority
              />
            </span>
            <span className="text-sm font-bold uppercase tracking-[.18em] text-[#0b1c30]">
              Aura Premium Oil
            </span>
          </Link>
          <Button className="aura-premium-button w-full rounded-full bg-[#25d366] text-white hover:bg-[#20bd5a] sm:w-fit" asChild>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Image
                src="/whatsapp-icon.png"
                alt=""
                width={22}
                height={22}
                className="mr-2 h-5 w-5 object-contain"
              />
              WhatsApp
            </a>
          </Button>
        </div>

        <section className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/55 p-6 shadow-[0_40px_90px_rgba(11,28,48,.08)] backdrop-blur-2xl sm:rounded-[3rem] sm:p-8 md:grid-cols-[.9fr_1.1fr] md:p-12">
          <div>
            <Badge className="mb-5 rounded-full bg-[#d3e5f1] px-4 py-2 text-[#0b1c30] hover:bg-[#d3e5f1]">
              Atención al consumidor
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl md:tracking-[-0.055em]">
              Libro de Reclamaciones.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#44474d]">
              De acuerdo con el Reglamento del Libro de Reclamaciones del Código
              de Protección y Defensa del Consumidor, este canal permite
              registrar quejas y reclamos relacionados con Aura Premium Oil.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {[
              ["Reclamo", "Desacuerdo relacionado con productos o servicios."],
              ["Queja", "Malestar no relacionado directamente al producto."],
              ["Respuesta", "Atención dentro del plazo legal correspondiente."],
            ].map(([title, text]) => (
              <Card key={title} className="border-[#e0f2fe] bg-white/75">
                <CardContent className="p-5">
                  <FileText className="mb-4 h-5 w-5 text-[#39475f]" />
                  <div className="text-lg font-semibold tracking-[-0.035em]">
                    {title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#44474d]">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <form className="py-14">
          <FormSection
            eyebrow="Sección 01"
            title="Identificación del consumidor reclamante"
            description="Completa tus datos de contacto para que podamos responder tu solicitud."
          >
            <div className="grid gap-4 md:grid-cols-3">
              <Field label="Nombre" required />
              <Field label="Primer apellido" required />
              <Field label="Segundo apellido" required />
              <SelectField label="Tipo de documento" options={documentTypes} required />
              <Field label="Número de documento" required />
              <Field label="Celular" type="tel" required />
              <SelectField label="Departamento" options={departments} required />
              <Field label="Provincia" required />
              <Field label="Distrito" required />
              <Field label="Dirección" required className="md:col-span-2" />
              <Field label="Referencia" />
              <Field label="Correo electrónico" type="email" required className="md:col-span-2" />
              <SelectField label="¿Eres menor de edad?" options={["No", "Sí"]} required />
            </div>
          </FormSection>

          <FormSection
            eyebrow="Sección 02"
            title="Padre, madre o tutor"
            description="Completar solo si el consumidor reclamante es menor de edad."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Nombre del tutor" />
              <Field label="Correo electrónico del tutor" type="email" />
              <SelectField label="Tipo de documento" options={documentTypes} />
              <Field label="Número de documento" />
            </div>
          </FormSection>

          <FormSection
            eyebrow="Sección 03"
            title="Detalle del reclamo y orden del consumidor"
            description="Indica el producto, servicio y detalle de tu solicitud con la mayor claridad posible."
          >
            <div className="grid gap-4 md:grid-cols-3">
              <SelectField label="Tipo de solicitud" options={["Reclamación", "Queja"]} required />
              <SelectField label="Tipo de consumo" options={["Producto", "Servicio"]} required />
              <Field label="N° de pedido" required />
              <Field label="Fecha de reclamación / queja" type="date" />
              <Field label="Proveedor" defaultValue="Aura Premium Oil" />
              <Field label="Monto reclamado (S/.)" type="number" />
              <Field label="Descripción del producto o servicio" required className="md:col-span-3" />
              <Field label="Fecha de compra" type="date" />
              <Field label="Fecha de consumo" type="date" />
              <Field label="Fecha de caducidad" type="date" />
              <TextArea label="Detalle de la reclamación o queja" required />
              <TextArea label="Pedido del cliente" required />
            </div>
          </FormSection>

          <section className="rounded-[2rem] border border-[#e0f2fe] bg-white/75 p-6 shadow-[0_24px_55px_rgba(11,28,48,.04)] backdrop-blur-xl">
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#39475f]" />
              <div className="space-y-3 text-sm leading-7 text-[#44474d]">
                <p>
                  Declaro bajo juramento la veracidad de los hechos descritos y
                  acepto el contenido de este formulario.
                </p>
                <p>
                  La formulación del reclamo no excluye el recurso a otros
                  medios de resolución de controversias ni es requisito previo
                  para presentar una denuncia ante Indecopi.
                </p>
                <p>
                  El proveedor debe responder la reclamación en un plazo no
                  superior a quince (15) días naturales, pudiendo ampliarse
                  según corresponda por ley.
                </p>
                <label className="flex items-start gap-3 pt-2 font-semibold text-[#0b1c30]">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[#c5c6cd]" />
                  He leído y acepto la política de privacidad y el tratamiento
                  de mis datos para la atención de esta solicitud.
                </label>
              </div>
            </div>
          </section>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button type="button" size="lg" className="aura-premium-button w-full rounded-full bg-[#0b1c30] px-8 text-white hover:bg-[#162f4d] sm:w-auto">
              Enviar reclamación
            </Button>
            <Button type="button" size="lg" variant="outline" className="aura-premium-button w-full rounded-full bg-white/70 px-8 sm:w-auto" asChild>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar ayuda
              </a>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

function FormSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 rounded-[1.5rem] border border-[#e0f2fe] bg-white/72 p-5 shadow-[0_24px_55px_rgba(11,28,48,.04)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6 md:p-8">
      <div className="mb-7 grid gap-3 md:grid-cols-[.85fr_1.15fr] md:items-end">
        <div>
          <Badge variant="outline" className="mb-4 rounded-full border-[#c5c6cd] bg-white/70 px-4 py-2 text-xs uppercase tracking-[.18em]">
            {eyebrow}
          </Badge>
          <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-4xl md:tracking-[-0.045em]">
            {title}
          </h2>
        </div>
        <p className="leading-7 text-[#44474d]">{description}</p>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  type = "text",
  required = false,
  className = "",
  defaultValue,
}: {
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
  defaultValue?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-[#39475f]">
        {label} {required ? <span className="text-[#b71f3b]">*</span> : null}
      </span>
      <input
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="h-12 w-full rounded-2xl border border-[#d8e8f2] bg-white/75 px-4 text-sm outline-none transition focus:border-[#0b1c30] focus:ring-4 focus:ring-[#d3e5f1]"
      />
    </label>
  );
}

function SelectField({
  label,
  options,
  required = false,
}: {
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#39475f]">
        {label} {required ? <span className="text-[#b71f3b]">*</span> : null}
      </span>
      <select
        required={required}
        className="h-12 w-full rounded-2xl border border-[#d8e8f2] bg-white/75 px-4 text-sm outline-none transition focus:border-[#0b1c30] focus:ring-4 focus:ring-[#d3e5f1]"
      >
        <option value="">Seleccionar</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, required = false }: { label: string; required?: boolean }) {
  return (
    <label className="block md:col-span-3">
      <span className="mb-2 block text-sm font-semibold text-[#39475f]">
        {label} {required ? <span className="text-[#b71f3b]">*</span> : null}
      </span>
      <textarea
        required={required}
        rows={5}
        className="w-full rounded-2xl border border-[#d8e8f2] bg-white/75 px-4 py-3 text-sm outline-none transition focus:border-[#0b1c30] focus:ring-4 focus:ring-[#d3e5f1]"
      />
    </label>
  );
}
