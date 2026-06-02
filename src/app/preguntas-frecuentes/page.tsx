import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, MessageCircle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whatsappHref = "https://wa.me/51933640908";
const facebookHref = "https://www.facebook.com/aurapremiumoilcbdperu";

const faqs = [
  {
    question: "¿Qué es el CBD?",
    answer:
      "El CBD, o cannabidiol, es un compuesto natural presente en el cáñamo o hemp. A diferencia del THC, no genera efectos psicoactivos significativos, por lo que no esta orientado a alterar la conciencia, sino a acompañar rutinas de bienestar.",
  },
  {
    question: "¿Por qué es bueno el CBD?",
    answer:
      "El CBD se ha vuelto popular por su potencial apoyo en bienestar diario, calma, descanso, molestias fisicas e inflamación. Su respuesta puede variar según cada persona, la concentración y la constancia de uso.",
  },
  {
    question: "¿Para qué síntomas se usa normalmente?",
    answer:
      "Suele utilizarse como complemento en rutinas de alivio de molestias, ansiedad cotidiana, descanso, recuperación e inflamación. No reemplaza tratamientos médicos ni diagnósticos profesionales.",
  },
  {
    question: "¿En cuánto tiempo puedo notar cambios?",
    answer:
      "Al ser un producto natural, los cambios pueden variar. En la información oficial de Aura se menciona que algunas personas pueden empezar a notar cambios entre los 7 y 15 días de uso constante.",
  },
  {
    question: "¿Tiene contraindicaciones?",
    answer:
      "El CBD suele considerarse bien tolerado en dosis adecuadas, pero no se recomienda para mujeres embarazadas, mujeres en periodo de lactancia o personas con problemas hepáticos sin orientación profesional.",
  },
  {
    question: "¿Puedo tomar CBD si uso otros medicamentos?",
    answer:
      "Si estás tomando medicamentos o llevas un tratamiento médico, lo más responsable es consultar con un profesional de salud antes de incorporar CBD a tu rutina.",
  },
  {
    question: "¿Cuál es la dosis recomendada?",
    answer:
      "La dosis depende de peso, metabolismo, sensibilidad, concentración del producto y objetivo de uso. Como referencia general, Aura recomienda asesoría personalizada antes de elegir dosis y concentración.",
  },
  {
    question: "¿Qué hago si tengo dudas durante el uso?",
    answer:
      "Aura Premium Oil ofrece asesoría personalizada para orientar la elección del producto, resolver dudas y acompañar la experiencia de compra y uso responsable.",
  },
];

const highlights = [
  ["0% THC", "Productos orientados a bienestar sin efecto psicoactivo."],
  ["Asesoría", "Guía personalizada para elegir concentración y rutina."],
  ["Calidad", "Línea CBD con respaldo de pureza y certificado visible."],
];

export default function FaqPage() {
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
          <div className="flex justify-center gap-2 sm:justify-end">
            <Button className="aura-premium-button rounded-full bg-[#25d366] text-white hover:bg-[#20bd5a]" asChild>
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
            <Button variant="outline" className="aura-premium-button hidden rounded-full border-[#1877f2]/20 bg-white/70 px-4 text-[#1877f2] hover:bg-[#eef5ff] sm:inline-flex" asChild>
              <a href={facebookHref} target="_blank" rel="noopener noreferrer">
                <span className="mr-2 grid h-5 w-5 place-items-center rounded-full bg-[#1877f2] text-xs font-black text-white">
                  f
                </span>
                Facebook
              </a>
            </Button>
          </div>
        </div>

        <section className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/50 p-6 shadow-[0_40px_90px_rgba(11,28,48,.06)] backdrop-blur-2xl sm:rounded-[3rem] sm:p-8 md:grid-cols-[.95fr_1.05fr] md:p-12">
          <div>
            <Badge className="mb-5 rounded-full bg-[#d3e5f1] px-4 py-2 text-[#0b1c30] hover:bg-[#d3e5f1]">
              Preguntas frecuentes
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl md:tracking-[-0.055em]">
              Respuestas claras antes de elegir.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#44474d]">
              Una version resumida y ordenada de las preguntas frecuentes
              oficiales de Aura Premium CBD, con enfoque en compra responsable,
              seguridad y asesoría personalizada.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {highlights.map(([title, text]) => (
              <Card key={title} className="border-[#e0f2fe] bg-white/75">
                <CardContent className="p-5">
                  <ShieldCheck className="mb-4 h-5 w-5 text-[#39475f]" />
                  <div className="text-lg font-semibold tracking-[-0.035em]">
                    {title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#44474d]">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-[#e0f2fe] bg-white/72 p-5 shadow-[0_24px_55px_rgba(11,28,48,.04)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-[-0.03em] sm:text-xl sm:tracking-[-0.035em]">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#39475f] transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-4xl text-base leading-8 text-[#44474d]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-[2rem] bg-[#0b1c30] p-6 text-white shadow-[0_40px_90px_rgba(11,28,48,.14)] sm:rounded-[3rem] sm:p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
                ¿Tienes una duda puntual?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                Escríbenos por WhatsApp para elegir concentración, revisar dosis
                sugerida y confirmar stock antes de comprar.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="aura-premium-button w-full rounded-full px-8 sm:w-auto" asChild>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Pedir asesoría
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
