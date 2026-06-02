import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DoseCalculator } from "@/components/dose-calculator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const whatsappHref = "https://wa.me/51933640908";
const facebookHref = "https://www.facebook.com/aurapremiumoilcbdperu";

const navLinks = [
  ["Catálogo", "/catalogo"],
  ["Quienes somos", "#quienes-somos"],
  ["Beneficios", "#beneficios"],
  ["Dosis", "#calculadora"],
  ["Certificados", "/certificados"],
  ["FAQ", "/preguntas-frecuentes"],
  ["Contacto", "#contacto"],
] as const;

const cbdProducts = [
  {
    name: "Relax",
    concentration: "10% CBD",
    mg: "1000 mg",
    price: "S/ 140",
    oldPrice: "S/ 250",
    image: "/relax.png",
    accent: "#ef7d1a",
    label: "Descanso",
    summary:
      "Ideal para empezar: apoyo para calma diaria, descanso y bienestar nocturno.",
    bullets: ["30 ml", "Libre de THC", "Suplemento alimenticio"],
  },
  {
    name: "Focus",
    concentration: "20% CBD",
    mg: "2000 mg",
    price: "S/ 220",
    oldPrice: "S/ 350",
    image: "/focus.png",
    accent: "#2f8a35",
    label: "Rutina diaria",
    summary:
      "Una concentración intermedia para equilibrio, enfoque y recuperación cotidiana.",
    bullets: ["30 ml", "CBD aislado", "Uso diario"],
  },
  {
    name: "Plus",
    concentration: "30% CBD",
    mg: "3000 mg",
    price: "S/ 300",
    oldPrice: "S/ 450",
    image: "/plus.png",
    accent: "#0076bf",
    label: "Alta potencia",
    summary:
      "Alta concentración para quienes buscan mayor soporte con menos gotas.",
    bullets: ["30 ml", "Libre de THC", "Concentración alta"],
  },
];

const petProducts = [
  {
    name: "Pets 5%",
    concentration: "5% CBD",
    mg: "500 mg",
    price: "S/ 100",
    oldPrice: "S/ 180",
    image: "/pets5.png",
    accent: "#3b8a35",
    label: "Mascotas",
    summary:
      "Fórmula para perros y gatos, pensada para acompañar rutinas de calma y bienestar.",
  },
  {
    name: "Pets 10%",
    concentration: "10% CBD",
    mg: "1000 mg",
    price: "S/ 140",
    oldPrice: "",
    image: "/pets10.png",
    accent: "#b71f3b",
    label: "Mascotas",
    summary:
      "Presentación de mayor concentración para asesorías personalizadas de mascotas.",
  },
];

const naturalOils = [
  ["Aceite de Muña", "S/ 30", "Confort digestivo y rutina herbal."],
  ["Aceite de Romero", "S/ 30", "Cuidado capilar, masaje y uso externo."],
  ["Aceite de Orégano", "S/ 35", "Línea herbal de apoyo para bienestar natural."],
  ["Herbal Manpower+", "S/ 50", "Macerado natural de la línea complementaria."],
];

const trust = [
  {
    icon: ShieldCheck,
    title: "Libre de THC",
    text: "No contiene elementos psicoactivos en su composición.",
  },
  {
    icon: BadgeCheck,
    title: "Certificados",
    text: "Análisis de laboratorio tercero y control de calidad visible.",
  },
  {
    icon: Truck,
    title: "Envíos a todo el Perú",
    text: "Llevamos nuestros productos a nivel nacional de forma rápida y segura.",
  },
  {
    icon: MessageCircle,
    title: "Asesoría directa",
    text: "Compra guiada por WhatsApp antes de elegir concentración.",
  },
];

const benefits = [
  [
    "Calma",
    "Apoyo para promover el bienestar y la tranquilidad frente al estrés cotidiano.",
    "/benefit-calm.png",
  ],
  [
    "Descanso",
    "Complemento para una noche más tranquila y reparadora.",
    "/benefit-sleep.png",
  ],
  [
    "Recuperación",
    "Acompañamiento para el manejo del dolor, la inflamación y la recuperación asociada a la actividad física y deportiva.",
    "/benefit-recovery.png",
  ],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4faff] text-[#0b1c30]">
      <div className="aura-page-glow" />
      <div className="pointer-events-none fixed inset-0 -z-10 aura-soft-grid bg-[radial-gradient(circle_at_76%_12%,rgba(125,211,252,.38),transparent_30%),radial-gradient(circle_at_18%_34%,rgba(203,219,245,.46),transparent_28%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/62 backdrop-blur-2xl md:bg-white/45">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(11,28,48,.08)] sm:h-12 sm:w-12">
              <Image
                src="/logo-aura.png"
                alt="Aura Premium Oil"
                width={72}
                height={72}
                className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                priority
              />
            </span>
            <span className="hidden text-sm font-bold uppercase tracking-[.18em] text-[#0b1c30] sm:block">
              Aura Premium Oil
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#44474d] md:flex">
            <a className="transition hover:text-[#0b1c30]" href="/catalogo">
              Catálogo
            </a>
            <a className="transition hover:text-[#0b1c30]" href="#quienes-somos">
              Quienes somos
            </a>
            <a className="transition hover:text-[#0b1c30]" href="#beneficios">
              Beneficios
            </a>
            <a className="transition hover:text-[#0b1c30]" href="#calculadora">
              Dosis
            </a>
            <a className="transition hover:text-[#0b1c30]" href="/certificados">
              Certificados
            </a>
            <a className="transition hover:text-[#0b1c30]" href="/preguntas-frecuentes">
              FAQ
            </a>
            <a className="transition hover:text-[#0b1c30]" href="#contacto">
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="aura-premium-button rounded-full bg-[#25d366] px-3 text-white hover:bg-[#20bd5a] sm:px-5" asChild>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir por WhatsApp"
              >
                <Image
                  src="/whatsapp-icon.png"
                  alt=""
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain sm:mr-2"
                />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>
            <Button variant="outline" className="aura-premium-button hidden rounded-full border-[#1877f2]/20 bg-white/70 px-4 text-[#1877f2] hover:bg-[#eef5ff] sm:inline-flex" asChild>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Facebook de Aura Premium Oil"
              >
                <span className="mr-2 grid h-5 w-5 place-items-center rounded-full bg-[#1877f2] text-xs font-black text-white">
                  f
                </span>
                Facebook
              </a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="aura-premium-button rounded-full border-[#bae6fd] bg-white/72 text-[#0b1c30] shadow-[0_14px_34px_rgba(14,83,112,.12)] md:hidden"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[84vw] max-w-[360px] border-l border-white/70 bg-[#eef9ff]/92 p-0 shadow-[0_30px_90px_rgba(14,83,112,.28)] backdrop-blur-2xl"
              >
                <SheetHeader className="border-b border-white/70 p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_14px_34px_rgba(14,83,112,.12)]">
                      <Image
                        src="/logo-aura.png"
                        alt=""
                        width={72}
                        height={72}
                        className="h-10 w-10 object-contain"
                      />
                    </span>
                    <SheetTitle className="text-left text-sm font-bold uppercase tracking-[.18em] text-[#0b1c30]">
                      Aura Premium Oil
                    </SheetTitle>
                  </div>
                </SheetHeader>
                <nav className="grid gap-2 p-5">
                  {navLinks.map(([label, href]) => (
                    <SheetClose key={label} asChild>
                      <a
                        href={href}
                        className="rounded-2xl border border-white/70 bg-white/60 px-5 py-4 text-base font-semibold text-[#0b1c30] shadow-[0_16px_34px_rgba(14,83,112,.08)] transition hover:bg-white"
                      >
                        {label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto grid gap-3 border-t border-white/70 p-5">
                  <SheetClose asChild>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aura-premium-button inline-flex h-12 items-center justify-center rounded-full bg-[#25d366] px-5 text-sm font-bold text-white shadow-[0_18px_38px_rgba(37,211,102,.22)]"
                    >
                      <Image
                        src="/whatsapp-icon.png"
                        alt=""
                        width={22}
                        height={22}
                        className="mr-2 h-5 w-5 object-contain"
                      />
                      WhatsApp
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href={facebookHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aura-premium-button inline-flex h-12 items-center justify-center rounded-full border border-[#1877f2]/20 bg-white/72 px-5 text-sm font-bold text-[#1877f2]"
                    >
                      <span className="mr-2 grid h-5 w-5 place-items-center rounded-full bg-[#1877f2] text-xs font-black text-white">
                        f
                      </span>
                      Facebook
                    </a>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section id="inicio" className="aura-desktop-blue-wash relative mx-auto grid max-w-7xl items-center gap-10 rounded-b-[4rem] px-5 pb-14 pt-28 sm:pb-20 sm:pt-32 lg:min-h-screen lg:grid-cols-[1.02fr_.98fr] lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#7dd3fc]/24 blur-3xl" />
        <div className="animate-aura-fade-up">
          <Badge className="mb-6 rounded-full bg-[#d3e5f1] px-4 py-2 text-xs uppercase tracking-[.22em] text-[#0b1c30] hover:bg-[#d3e5f1]">
            Bienestar Premium
          </Badge>
          <h1 className="max-w-3xl text-balance font-sans text-[clamp(2.75rem,13vw,6.1rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0b1c30] sm:tracking-[-0.055em]">
            Aura Premium CBD Oil
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-snug tracking-[-0.02em] text-[#39475f] sm:text-2xl">
            Bienestar natural diseñado para acompañar tu equilibrio diario.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#44474d]">
            Aceites de CBD aislado, libres de THC y con certificación
            internacional, desarrollados para promover el bienestar físico,
            mental y emocional. Contamos con líneas especializadas para
            humanos y mascotas.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="aura-premium-button rounded-full bg-[#0b1c30] px-8 text-white hover:bg-[#162f4d]" asChild>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Comprar por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="aura-gold-glass-button rounded-full px-8 font-bold" asChild>
              <a href="/catalogo">Ver tienda</a>
            </Button>
            <Button size="lg" variant="outline" className="aura-premium-button rounded-full border-[#0b1c30]/20 bg-white/45 px-8 backdrop-blur hover:bg-white" asChild>
              <a href="#calculadora">Calcular tomas</a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {["10%", "20%", "30%", "Pets"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/75 bg-[#e5f6ff]/72 p-4 shadow-[0_18px_38px_rgba(14,83,112,.1)] backdrop-blur-xl md:bg-white/45 md:shadow-none">
                <div className="text-xl font-semibold tracking-[-0.03em]">{item}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[.16em] text-[#566771]">
                  Aura
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-aura-fade-in aura-delay-2 relative flex min-h-[360px] items-center justify-center sm:min-h-[520px] lg:min-h-[620px]">
          <div className="absolute inset-0 rounded-full bg-[#7dd3fc]/45 blur-[72px] md:bg-[#d3e4fe]/55 md:blur-[90px]" />
          <div className="aura-luminous-card relative z-10 grid w-full max-w-[560px] place-items-center rounded-[2rem] border border-white/70 bg-white/35 p-3 shadow-[0_44px_110px_rgba(14,83,112,.14)] backdrop-blur-2xl sm:rounded-[3rem] sm:p-8">
            <Image
              src="/hero-plus.png"
              alt="Aura Premium Oil Plus 30%"
              width={620}
              height={760}
              className="animate-aura-float h-[340px] w-full rounded-[1.5rem] object-cover drop-shadow-2xl sm:h-[520px] sm:rounded-[2rem]"
              priority
            />
          </div>
          <div className="absolute bottom-8 right-0 hidden w-72 rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_30px_70px_rgba(11,28,48,.1)] backdrop-blur-2xl lg:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0b1c30] text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[.22em] text-[#566771]">
                  Pureza verificada
                </div>
                <div className="text-sm font-semibold text-[#0b1c30]">
                  Certificado de análisis
                </div>
              </div>
            </div>
            <div className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-[#0b1c30]">
              0.00
              <span className="ml-2 text-2xl tracking-[-0.03em]">mg/mL THC</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#44474d]">
              Resultado de laboratorio para Plus 3000 mg: Total THC 0.00 mg/mL.
            </p>
            <Button variant="link" className="mt-2 h-auto p-0 font-bold text-[#0b1c30]" asChild>
              <a href="/certificados">Ver certificado</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="productos-home" className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
        <div className="pointer-events-none absolute right-8 top-6 -z-10 h-64 w-64 rounded-full bg-[#38bdf8]/20 blur-3xl" />
        <div className="aura-luminous-card animate-aura-fade-up overflow-hidden rounded-[2rem] border border-white/70 bg-white/48 shadow-[0_42px_100px_rgba(14,83,112,.12)] backdrop-blur-2xl sm:rounded-[3rem]">
          <div className="relative min-h-[340px] sm:min-h-[480px]">
            <Image
              src="/home-products.png"
              alt="Línea Aura Premium Oil: Relax, Focus y Plus"
              width={1500}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1c30]/38 via-transparent to-white/10" />
            <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/35 bg-white/34 px-5 py-4 shadow-[0_24px_60px_rgba(11,28,48,.08)] backdrop-blur-md sm:inset-x-auto sm:bottom-7 sm:left-7 sm:px-6 sm:py-5">
              <div className="text-xs font-bold uppercase tracking-[.22em] text-[#566771]">
                Línea CBD
              </div>
              <div className="mt-1 text-xl font-semibold tracking-[-0.04em] text-[#0b1c30] sm:text-2xl">
                Relax - Focus - Plus
              </div>
            </div>
          </div>
        </div>

        <div className="animate-aura-fade-up aura-delay-1">
          <Badge variant="outline" className="mb-5 rounded-full border-[#c5c6cd] bg-white/60 px-4 py-2 text-xs uppercase tracking-[.22em]">
            Presentando productos
          </Badge>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:tracking-[-0.045em]">
            Soluciones naturales para cada necesidad.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#44474d]">
            Desde el descanso y la calma hasta el enfoque, el alivio del dolor
            y el bienestar integral, Aura ofrece aceites de CBD y fórmulas
            naturales para humanos y mascotas.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Relax", "10% CBD"],
              ["Focus", "20% CBD"],
              ["Plus", "30% CBD"],
            ].map(([name, text]) => (
              <div key={name} className="rounded-3xl border border-white/70 bg-white/55 p-5 shadow-[0_20px_45px_rgba(11,28,48,.04)] backdrop-blur-xl">
                <div className="text-xl font-semibold tracking-[-0.035em]">{name}</div>
                <div className="mt-1 text-sm font-bold uppercase tracking-[.16em] text-[#566771]">{text}</div>
              </div>
            ))}
          </div>
          <Button className="aura-premium-button mt-9 w-full rounded-full bg-[#0b1c30] px-8 text-white hover:bg-[#162f4d] sm:w-auto" asChild>
            <a href="/catalogo">
              Ir al catálogo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <section id="quienes-somos" className="aura-cyan-band relative mx-auto max-w-none py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="animate-aura-fade-up">
          <Badge className="mb-5 rounded-full bg-[#d3e5f1] px-4 py-2 text-xs uppercase tracking-[.22em] text-[#0b1c30] hover:bg-[#d3e5f1]">
            Quienes somos
          </Badge>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:tracking-[-0.045em]">
            Bienestar natural con asesoría real.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#44474d]">
            En Aura Premium Oil creemos que cada persona es diferente. Por eso
            te ofrecemos asesoría personalizada, orientación continua y
            recomendaciones prácticas para que encuentres la opción más adecuada
            para tus necesidades y objetivos de bienestar.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              ["Compra guiada", "Te orientamos para encontrar la concentración y formulación más adecuadas según tus objetivos de bienestar."],
              ["Calidad visible", "El producto Plus cuenta con certificado de laboratorio."],
              ["Línea completa", "CBD para humanos, CBD para mascotas y Aceites vegetales complementarios."],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4 rounded-3xl border border-white/70 bg-white/55 p-5 backdrop-blur-xl">
                <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0b1c30] text-white">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold tracking-[-0.02em]">{title}</div>
                  <p className="mt-1 text-sm leading-6 text-[#44474d]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="aura-luminous-card animate-aura-fade-up aura-delay-2 overflow-hidden rounded-[2rem] border border-white/70 bg-white/48 shadow-[0_42px_100px_rgba(14,83,112,.14)] backdrop-blur-2xl sm:rounded-[3rem]">
          <div className="relative min-h-[460px] sm:min-h-[620px]">
            <Image
              src="/home-relax-lifestyle.png"
              alt="Uso de aceite Aura Premium Oil en rutina de bienestar"
              width={1200}
              height={1500}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/48 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/35 bg-white/34 p-5 shadow-[0_24px_60px_rgba(11,28,48,.08)] backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
              <div className="text-xs font-bold uppercase tracking-[.22em] text-[#566771]">
                Bienestar diario
              </div>
              <p className="mt-2 text-lg font-semibold leading-7 tracking-[-0.025em] text-[#0b1c30]">
                Pensado para apoyar tu bienestar físico y mental, promoviendo
                la calma, el descanso, la recuperación y el equilibrio diario.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="catalogo" className="hidden">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="outline" className="mb-5 rounded-full border-[#c5c6cd] bg-white/60 px-4 py-2 text-xs uppercase tracking-[.22em]">
            Catálogo
          </Badge>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
            Catálogo por categoría.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#44474d]">
            Tres líneas claras para comprar sin confusión: aceites medicinales
            CBD, mascotas y aceites vegetales.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {[
            ["Aceites medicinales CBD", "#aceites-medicinales-cbd"],
            ["Mascotas", "#mascotas"],
            ["Aceites vegetales", "#aceites-vegetales"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="aura-premium-button rounded-full border border-[#c5c6cd] bg-white/60 px-5 py-3 text-sm font-semibold text-[#0b1c30] backdrop-blur transition hover:bg-[#0b1c30] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="grid gap-20">
          <CategoryBlock
            id="aceites-medicinales-cbd"
            eyebrow="Categoría 01"
            title="Aceites medicinales CBD"
            description="Concentraciones para descanso, calma, enfoque y recuperación diaria."
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {cbdProducts.map((product, index) => (
                <ProductCard key={product.name} product={product} delay={index} />
              ))}
            </div>
          </CategoryBlock>

          <CategoryBlock
            id="mascotas"
            eyebrow="Categoría 02"
            title="Mascotas"
            description="Fórmulas CBD para perros y gatos, con compra guiada según tamaño y necesidad."
          >
            <div className="grid gap-5 lg:grid-cols-2">
              {petProducts.map((product, index) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  delay={index + 3}
                  pet
                  petBackdrop={product.name.includes("5") ? "small" : "large"}
                />
              ))}
            </div>
          </CategoryBlock>

          <CategoryBlock
            id="aceites-vegetales"
            eyebrow="Categoría 03"
            title="Aceites vegetales"
            description="Complementos herbales disponibles en tienda oficial para rutinas naturales."
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {naturalOils.map(([name, price, text]) => (
                <div
                  key={name}
                  className="rounded-[2rem] border border-[#e0f2fe] bg-white/70 p-6 shadow-[0_24px_55px_rgba(11,28,48,.04)] backdrop-blur-xl"
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#eff4ff]">
                    <FlaskIcon />
                  </div>
                  <div className="text-xl font-semibold tracking-[-0.035em]">{name}</div>
                  <div className="mt-2 text-sm font-bold text-[#39475f]">{price}</div>
                  <p className="mt-3 text-sm leading-6 text-[#44474d]">{text}</p>
                  <Button variant="link" className="mt-5 h-auto p-0 font-semibold text-[#0b1c30]" asChild>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      Consultar
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </CategoryBlock>
        </div>
      </section>

      <section id="tecnologia-co2" className="relative mx-auto max-w-7xl px-5 py-14 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute left-1/3 top-12 -z-10 h-72 w-72 rounded-full bg-[#0ea5e9]/18 blur-3xl" />
        <div className="aura-luminous-card overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 shadow-[0_44px_110px_rgba(14,83,112,.12)] backdrop-blur-2xl sm:rounded-[3rem]">
          <div className="grid lg:grid-cols-[1.08fr_.92fr]">
            <div className="relative min-h-[340px] sm:min-h-[520px]">
              <Image
                src="/co2-extraction.png"
                alt="Sistema de extracción por CO2 para aceites CBD"
                width={1600}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30]/35 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/45 bg-white/78 px-5 py-4 shadow-[0_24px_60px_rgba(11,28,48,.16)] backdrop-blur-xl sm:inset-x-auto sm:bottom-7 sm:left-7 sm:px-6 sm:py-5">
                <div className="text-xs font-bold uppercase tracking-[.22em] text-[#566771]">
                  CO2 Extraction
                </div>
                <div className="mt-1 text-xl font-semibold tracking-[-0.04em] text-[#0b1c30] sm:text-2xl">
                  Pureza. Precisión. Calidad.
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <Badge variant="outline" className="mb-5 w-fit rounded-full border-[#c5c6cd] bg-white/60 px-4 py-2 text-xs uppercase tracking-[.22em]">
                Tecnología de extracción por CO2
              </Badge>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl md:tracking-[-0.045em]">
                Extractos limpios, consistentes y de calidad superior.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#44474d]">
                Utilizamos sistemas de extracción por CO2 supercrítico para
                obtener CBD de alta pureza. Este método permite aislar los
                compuestos deseados mediante un proceso preciso y controlado.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Pureza", "Precisión", "Calidad"].map((item) => (
                  <div key={item} className="rounded-3xl border border-[#e0f2fe] bg-white/68 p-5 text-center shadow-[0_18px_40px_rgba(11,28,48,.04)]">
                    <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-[#eff4ff]">
                      <ShieldCheck className="h-5 w-5 text-[#0b1c30]" />
                    </div>
                    <div className="font-semibold tracking-[-0.025em] text-[#0b1c30]">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
              <Button className="aura-premium-button mt-9 w-full rounded-full bg-[#0b1c30] px-8 text-white hover:bg-[#162f4d] sm:w-fit" asChild>
                <a href="/certificados">
                  Ver respaldo de pureza
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <DoseCalculator />

      <section id="beneficios" className="aura-cyan-band py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 grid gap-8 md:grid-cols-[.95fr_1.05fr] md:items-end">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:tracking-[-0.045em]">
              Bienestar físico, mental y emocional.
            </h2>
            <p className="text-lg leading-8 text-[#44474d]">
              Productos de calidad certificada, libres de THC y formulados para
              acompañar tu bienestar de forma natural. Realizamos envíos a todo
              el Perú.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(([title, text, image], index) => (
              <Card key={title} className="animate-aura-fade-up relative overflow-hidden border-white/70 bg-white/45 shadow-[0_30px_60px_rgba(11,28,48,.04)] backdrop-blur-xl" style={{ animationDelay: `${index * 120}ms` }}>
                <Image
                  src={image}
                  alt=""
                  width={720}
                  height={520}
                  className="absolute inset-y-0 right-0 h-full w-[74%] object-cover opacity-[0.78] saturate-[1.12] contrast-[1.08] transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/91 via-white/48 to-white/0" />
                <CardContent className="relative z-10 p-8">
                  <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-white/88 backdrop-blur">
                    <Sparkles className="h-6 w-6 text-[#39475f]" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#44474d]">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificados" className="relative mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute bottom-10 right-12 -z-10 h-80 w-80 rounded-full bg-[#7dd3fc]/22 blur-3xl" />
        <div className="aura-luminous-card grid gap-8 rounded-[2rem] border border-white/70 bg-white/45 p-6 shadow-[0_44px_100px_rgba(14,83,112,.1)] backdrop-blur-2xl sm:rounded-[3rem] sm:p-8 md:grid-cols-[.85fr_1.15fr] md:p-12">
          <div>
            <Badge className="mb-5 rounded-full bg-[#d3e5f1] px-4 py-2 text-[#0b1c30] hover:bg-[#d3e5f1]">
              Confianza
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
              Certificados y compra responsable.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#44474d]">
              Respaldamos la calidad de nuestros productos con análisis
              realizados por laboratorios independientes. Consulta nuestros
              certificados y recomendaciones para realizar una compra informada
              y un uso responsable.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trust.map((item) => (
              <div key={item.title} className="rounded-3xl border border-[#e0f2fe] bg-white/70 p-6">
                <item.icon className="mb-5 h-6 w-6 text-[#39475f]" />
                <div className="text-lg font-semibold tracking-[-0.03em]">{item.title}</div>
                <p className="mt-2 text-sm leading-6 text-[#44474d]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#0b1c30] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
              Compra guiada por WhatsApp.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Contacto oficial: +51 933 640 908 · ventas@aurapremiumcbd.com
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" variant="secondary" className="aura-premium-button w-full rounded-full px-8 sm:w-auto" asChild>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/whatsapp-icon.png"
                  alt=""
                  width={22}
                  height={22}
                  className="mr-2 h-5 w-5 object-contain"
                />
                Escribir ahora
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="aura-premium-button w-full rounded-full border-white/20 bg-white/10 px-8 text-white hover:bg-white/15 hover:text-white sm:w-auto" asChild>
              <a href={facebookHref} target="_blank" rel="noopener noreferrer">
                <span className="mr-2 grid h-5 w-5 place-items-center rounded-full bg-[#1877f2] text-xs font-black text-white">
                  f
                </span>
                Facebook
              </a>
            </Button>
            <Button size="lg" variant="outline" className="aura-premium-button w-full rounded-full border-white/20 bg-white/10 px-8 text-white hover:bg-white/15 hover:text-white sm:w-auto" asChild>
              <a href="/preguntas-frecuentes">Preguntas frecuentes</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b1c30] px-5 pb-8 text-sm text-white/50 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <span className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white">
              <Image
                src="/logo-aura.png"
                alt="Aura Premium Oil"
                width={56}
                height={56}
                className="h-9 w-9 object-contain"
              />
            </span>
            © 2026 Aura Premium Oil. Todos los derechos reservados.
          </span>
          <span className="flex flex-wrap gap-4">
            <a className="transition hover:text-white" href="/libro-de-reclamaciones">
              Libro de Reclamaciones
            </a>
            <span>Este sitio no reemplaza una consulta médica o veterinaria.</span>
          </span>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl justify-center border-t border-white/10 py-10">
          <a
            href="https://pegasusstudio.pe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar Pegasus Studio"
            className="transition duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/pegasus-studio.png"
              alt="Diseñado por Pegasus Studio"
              width={900}
              height={465}
              className="h-44 w-auto max-w-[86vw] object-contain opacity-95 transition hover:opacity-100 sm:h-56 lg:h-64"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}

type ProductCardProps = {
  product: {
    name: string;
    concentration: string;
    mg: string;
    price: string;
    oldPrice: string;
    image: string;
    accent: string;
    label: string;
    summary: string;
    bullets?: string[];
  };
  delay: number;
  pet?: boolean;
  petBackdrop?: "small" | "large";
};

type CategoryBlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

function CategoryBlock({
  id,
  eyebrow,
  title,
  description,
  children,
}: CategoryBlockProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-7 grid gap-5 md:grid-cols-[.85fr_1.15fr] md:items-end">
        <div>
          <Badge variant="outline" className="mb-4 rounded-full border-[#c5c6cd] bg-white/60 px-4 py-2 text-xs uppercase tracking-[.18em]">
            {eyebrow}
          </Badge>
          <h3 className="text-balance text-3xl font-semibold tracking-[-0.045em] md:text-5xl">
            {title}
          </h3>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#44474d]">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

function FlaskIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-[#39475f]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M9 3h6M10 3v5.3L5.7 17a3 3 0 0 0 2.7 4.3h7.2a3 3 0 0 0 2.7-4.3L14 8.3V3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M8 16h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ProductCard({
  product,
  delay,
  pet = false,
  petBackdrop,
}: ProductCardProps) {
  return (
    <Card
      className="animate-aura-fade-up group overflow-hidden rounded-[2rem] border-[#e0f2fe] bg-white/70 shadow-[0_30px_70px_rgba(11,28,48,.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_40px_90px_rgba(11,28,48,.1)]"
      style={{ animationDelay: `${delay * 120}ms` }}
    >
      <div className="relative grid min-h-[440px] place-items-end overflow-hidden bg-gradient-to-br from-white via-[#f8f9ff] to-[#d3e4fe]/55 p-8">
        {petBackdrop ? (
          <Image
            src={petBackdrop === "small" ? "/pets-small-bg.png" : "/pets-large-bg.png"}
            alt=""
            width={900}
            height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-[0.46] saturate-[.95] contrast-[1.04]"
          />
        ) : null}
        {petBackdrop ? (
          <div className="absolute inset-0 bg-gradient-to-r from-white/24 via-white/14 to-white/5" />
        ) : null}
        <div
          className="absolute left-8 top-8 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-white"
          style={{ backgroundColor: product.accent }}
        >
          {product.label}
        </div>
        <Image
          src={product.image}
          alt={`Aura Premium Oil ${product.name}`}
          width={pet ? 440 : 420}
          height={pet ? 560 : 540}
          className="h-[380px] w-auto object-contain drop-shadow-2xl transition duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[.18em] text-[#566771]">
              {product.mg} · 30 ml
            </div>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.045em]">
              {product.name}
            </h3>
          </div>
          <div className="text-right">
            {product.oldPrice ? (
              <div className="text-sm text-[#75777e] line-through">{product.oldPrice}</div>
            ) : null}
            <div className="text-lg font-bold">{product.price}</div>
          </div>
        </div>
        <p className="mt-4 min-h-20 leading-7 text-[#44474d]">{product.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[product.concentration, "0% THC", ...(product.bullets ?? [])].map((item) => (
            <span key={item} className="rounded-full bg-[#eff4ff] px-3 py-1.5 text-xs font-semibold text-[#39475f]">
              {item}
            </span>
          ))}
        </div>
        <Button className="aura-premium-button mt-7 w-full rounded-full bg-[#0b1c30] text-white hover:bg-[#162f4d]" asChild>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Consultar por WhatsApp
            <MessageCircle className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
