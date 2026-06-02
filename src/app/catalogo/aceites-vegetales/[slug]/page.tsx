import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { vegetableOils } from "@/lib/vegetable-oils";

const whatsappHref = "https://wa.me/51933640908";

export function generateStaticParams() {
  return vegetableOils.map((oil) => ({ slug: oil.slug }));
}

export default async function VegetableOilPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const oil = vegetableOils.find((item) => item.slug === slug);

  if (!oil) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f9ff] px-5 py-8 text-[#0b1c30] lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_74%_8%,rgba(203,219,245,.68),transparent_32%),linear-gradient(90deg,rgba(13,28,50,.035)_1px,transparent_1px),linear-gradient(180deg,rgba(13,28,50,.03)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <Button variant="outline" className="w-fit rounded-full bg-white/70" asChild>
            <Link href="/catalogo?categoria=vegetales">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al catálogo
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
              Consultar
            </a>
          </Button>
        </div>

        <section className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-[0_40px_90px_rgba(11,28,48,.08)] backdrop-blur-2xl sm:rounded-[3rem] sm:p-8 lg:grid-cols-[.95fr_1.05fr] lg:p-12">
          <div className="relative grid min-h-[420px] place-items-center justify-items-end overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-white via-[#f8f9ff] to-[#d3e4fe]/50 p-6 sm:min-h-[620px] sm:rounded-[2.5rem] sm:p-8">
            <Image
              src={oil.plantBackdrop}
              alt=""
              width={1200}
              height={1200}
              className="absolute -left-12 bottom-2 h-[390px] w-[390px] -rotate-6 object-contain opacity-[0.3] saturate-[.95] contrast-[1.04] sm:-left-16 sm:bottom-8 sm:h-[560px] sm:w-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/18 via-white/8 to-white/0" />
            <div
              className="absolute left-8 top-8 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-white"
              style={{ backgroundColor: oil.accent }}
            >
              {oil.eyebrow}
            </div>
            <Image
              src={oil.image}
              alt={`Aura ${oil.name}`}
              width={560}
              height={760}
              className="relative z-10 mr-6 h-[360px] w-auto object-contain drop-shadow-2xl sm:mr-12 sm:h-[520px]"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <Badge variant="outline" className="mb-5 w-fit rounded-full border-[#c5c6cd] bg-white/70 px-4 py-2 text-xs uppercase tracking-[.22em]">
              Aceites vegetales
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl md:tracking-[-0.055em]">
              {oil.name}
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#39475f]">
              {oil.summary}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {oil.details.map((detail) => (
                <div key={detail} className="rounded-3xl border border-[#e0f2fe] bg-white/72 p-5 text-center">
                  <BadgeCheck className="mx-auto mb-3 h-5 w-5 text-[#39475f]" />
                  <div className="text-sm font-bold uppercase tracking-[.12em] text-[#39475f]">
                    {detail}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="rounded-full bg-white px-6 py-3 text-2xl font-bold shadow-[0_18px_45px_rgba(11,28,48,.06)]">
                {oil.price}
              </div>
              <div className="rounded-full bg-white/70 px-5 py-3 text-sm font-bold uppercase tracking-[.16em] text-[#566771]">
                {oil.volume}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="aura-premium-button w-full rounded-full bg-[#0b1c30] px-8 text-white hover:bg-[#162f4d] sm:w-auto" asChild>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="aura-premium-button w-full rounded-full bg-white/65 px-8 sm:w-auto" asChild>
                <Link href="/catalogo?categoria=vegetales">
                  Ver más productos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="mb-5 rounded-full bg-[#d3e5f1] px-4 py-2 text-[#0b1c30] hover:bg-[#d3e5f1]">
              Beneficios principales
            </Badge>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl md:tracking-[-0.045em]">
              Uso herbal, explicado de forma simple.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#44474d]">
              {oil.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {oil.benefits.map((benefit) => (
                <Card key={benefit} className="border-[#e0f2fe] bg-white/72 shadow-[0_20px_45px_rgba(11,28,48,.04)]">
                  <CardContent className="flex h-full gap-4 p-5">
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white"
                      style={{ backgroundColor: oil.accent }}
                    >
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="leading-7 text-[#39475f]">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-[#e0f2fe] bg-white/72 p-6 text-sm leading-7 text-[#44474d] shadow-[0_20px_45px_rgba(11,28,48,.04)]">
              <strong className="text-[#0b1c30]">Nota responsable:</strong>{" "}
              {oil.note}
          </div>
        </section>
      </div>
    </main>
  );
}
