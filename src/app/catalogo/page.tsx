import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ChevronRight,
  FlaskConical,
  HeartPulse,
  MessageCircle,
  PawPrint,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { vegetableOils } from "@/lib/vegetable-oils";

const whatsappHref = "https://wa.me/51933640908";
const facebookHref = "https://www.facebook.com/aurapremiumoilcbdperu";

const cbdProducts = [
  {
    name: "Relax",
    concentration: "10% CBD",
    mg: "1000 mg",
    price: "S/ 140",
    oldPrice: "S/ 250",
    image: "/relax.png",
    accent: "#ef7d1a",
    tagline: "Ideal para quienes comienzan con CBD.",
    summary:
      "Apoyo para promover la calma, el descanso y el bienestar diario.",
    duration: "Rinde 1 a 1.5 meses",
  },
  {
    name: "Focus",
    concentration: "20% CBD",
    mg: "2000 mg",
    price: "S/ 220",
    oldPrice: "S/ 350",
    image: "/focus.png",
    accent: "#2f8a35",
    tagline: "Para quienes buscan un mayor nivel de apoyo.",
    summary:
      "Concentración intermedia diseñada para acompañar el bienestar físico, mental y emocional.",
    duration: "Rinde 2 a 3 meses",
  },
  {
    name: "Plus",
    concentration: "30% CBD",
    mg: "3000 mg",
    price: "S/ 300",
    oldPrice: "S/ 450",
    image: "/plus.png",
    accent: "#0076bf",
    tagline: "Para quienes buscan la máxima concentración.",
    summary:
      "Mayor cantidad de CBD por gota para un soporte más intenso y duradero.",
    duration: "Rinde 3 a 4 meses",
  },
];

const petProducts = [
  {
    name: "Pets 5%",
    concentration: "5% CBD",
    mg: "500 mg",
    price: "S/ 100",
    oldPrice: "S/ 140",
    image: "/pets5.png",
    accent: "#3b8a35",
    summary: "Ideal para promover la calma, el bienestar y el confort diario.",
    backdrop: "/pets-small-bg.png",
  },
  {
    name: "Pets 10%",
    concentration: "10% CBD",
    mg: "1000 mg",
    price: "S/ 140",
    oldPrice: "S/ 210",
    image: "/pets10.png",
    accent: "#b71f3b",
    summary:
      "Para mascotas que requieren un apoyo más amplio para su bienestar físico, movilidad y calidad de vida.",
    backdrop: "/pets-large-bg.png",
  },
];

const categories = [
  {
    id: "cbd",
    href: "/catalogo?categoria=cbd",
    title: "Aceites CBD para tu bienestar",
    description:
      "Relax, Focus y Plus para acompañar el bienestar físico, mental y emocional.",
    icon: HeartPulse,
    backdrop: "/home-products.png",
    position: "right center",
  },
  {
    id: "mascotas",
    href: "/catalogo?categoria=mascotas",
    title: "Aceites CBD para mascotas",
    description:
      "Formulaciones para perros y gatos orientadas a su bienestar y calidad de vida.",
    icon: PawPrint,
    backdrop: "/pets-small-bg.png",
    position: "45% center",
  },
  {
    id: "vegetales",
    href: "/catalogo?categoria=vegetales",
    title: "Aceites vegetales",
    description: "Complementos herbales y aceites naturales.",
    icon: FlaskConical,
    backdrop: "/category-vegetales-oil-photo.png",
    position: "78% center",
  },
];

export default async function CatalogPage({
  searchParams,
}: {
  searchParams?: Promise<{ categoria?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = categories.find(
    (category) => category.id === params?.categoria,
  );

  return (
    <main className="min-h-screen bg-[#f4faff] px-5 py-8 text-[#0b1c30] lg:px-8">
      <div className="aura-page-glow" />
      <div className="pointer-events-none fixed inset-0 -z-10 aura-soft-grid bg-[radial-gradient(circle_at_74%_8%,rgba(125,211,252,.42),transparent_32%),radial-gradient(circle_at_12%_40%,rgba(203,219,245,.48),transparent_30%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <Button variant="outline" className="rounded-full bg-white/65" asChild>
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
            <Button className="aura-premium-button rounded-full bg-[#25d366] px-4 text-white hover:bg-[#20bd5a]" asChild>
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

        <section className="mx-auto max-w-4xl py-8 text-center sm:py-12">
          <Badge variant="outline" className="mb-5 rounded-full border-[#c5c6cd] bg-white/60 px-4 py-2 text-xs uppercase tracking-[.22em]">
            Catálogo Aura
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-7xl md:tracking-[-0.055em]">
{activeCategory ? activeCategory.title : "Selecciona una categoría."}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#44474d]">
            {activeCategory
              ? "Mostrando solo los productos de esta línea. Puedes cambiar de categoría cuando quieras."
              : "Elige la línea que quieres revisar. Luego puedes consultar por WhatsApp para confirmar dosis, stock y recomendación."}
          </p>
        </section>

        {!activeCategory ? (
          <section className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => {
              const isPets = category.id === "mascotas";

              if (isPets) {
                return (
                  <Link key={category.title} href={category.href} className="group">
                    <Card className="aura-luminous-card relative h-full overflow-hidden rounded-[2rem] border-white/80 bg-white/60 shadow-[0_34px_80px_rgba(14,83,112,.14)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_44px_100px_rgba(14,83,112,.16)]">
                      <div className="relative h-56 overflow-hidden bg-[#eaf8ff]">
                        <Image
                          src="/pets-small-bg.png"
                          alt=""
                          width={900}
                          height={700}
                          className="h-full w-full object-cover object-[34%_52%] opacity-100 saturate-[1.22] contrast-[1.1] transition duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/30" />
                      </div>
                      <CardContent className="relative z-10 p-8 pt-6 md:p-8">
                        <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-[#eff4ff]/88 backdrop-blur">
                          <category.icon className="h-6 w-6 text-[#39475f]" />
                        </div>
                        <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                          {category.title}
                        </h2>
                        <p className="mt-3 min-h-16 leading-7 text-[#44474d]">
                          {category.description}
                        </p>
                        <div className="mt-6 inline-flex items-center text-sm font-bold text-[#0b1c30]">
                          Ver productos
                          <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              }

              return (
                <Link key={category.title} href={category.href} className="group">
                  <Card className="aura-luminous-card relative h-full min-h-[270px] overflow-hidden rounded-[2rem] border-white/80 bg-white/50 shadow-[0_34px_80px_rgba(14,83,112,.14)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_44px_100px_rgba(14,83,112,.16)] md:min-h-0">
                    <Image
                      src={category.backdrop}
                      alt=""
                      width={900}
                      height={700}
                      className="absolute inset-0 h-full w-full object-cover opacity-[0.82] saturate-[1.12] contrast-[1.08] transition duration-500 group-hover:opacity-[0.92]"
                      style={{ objectPosition: category.position }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/94 via-white/58 to-white/8" />
                    <CardContent className="relative z-10 p-8">
                      <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-[#eff4ff]/88 backdrop-blur">
                        <category.icon className="h-6 w-6 text-[#39475f]" />
                      </div>
                      <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                        {category.title}
                      </h2>
                      <p className="mt-3 min-h-16 leading-7 text-[#44474d]">
                        {category.description}
                      </p>
                      <div className="mt-6 inline-flex items-center text-sm font-bold text-[#0b1c30]">
                        Ver productos
                        <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </section>
        ) : null}

        {activeCategory ? (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className={`aura-premium-button rounded-full px-5 font-bold ${
                  activeCategory.id === category.id
                    ? "border-[#0b1c30] bg-[#0b1c30] text-white hover:bg-[#162f4d] hover:text-white"
                    : "border-[#bae6fd] bg-white/68 text-[#0b1c30] hover:bg-white"
                }`}
                asChild
              >
                <Link href={category.href}>{category.title}</Link>
              </Button>
            ))}
          </div>
        ) : null}

        {activeCategory?.id === "cbd" ? (
          <CategorySection
            id="aceites-medicinales-cbd"
            eyebrow="Categoría 01"
            title="Aceites CBD para tu bienestar"
            description="Relax, Focus y Plus para acompañar el bienestar físico, mental y emocional."
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {cbdProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </CategorySection>
        ) : null}

        {activeCategory?.id === "mascotas" ? (
          <CategorySection
            id="mascotas"
            eyebrow="Categoría 02"
            title="Aceites CBD para mascotas"
            description="Formulaciones para perros y gatos orientadas a su bienestar y calidad de vida."
          >
            <div className="grid gap-5 lg:grid-cols-2">
              {petProducts.map((product) => (
                <ProductCard key={product.name} product={product} pet />
              ))}
            </div>
          </CategorySection>
        ) : null}

        {activeCategory?.id === "vegetales" ? (
          <CategorySection
            id="aceites-vegetales"
            eyebrow="Categoría 03"
            title="Aceites vegetales"
            description="Complementos herbales y aceites vegetales de la tienda oficial."
          >
            <div className="grid gap-5 md:grid-cols-3">
              {vegetableOils.map((oil) => (
                <Card key={oil.slug} className="aura-luminous-card group overflow-hidden rounded-[2rem] border-[#bae6fd]/70 bg-white/66 shadow-[0_28px_70px_rgba(14,83,112,.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_44px_100px_rgba(14,83,112,.14)]">
                  <div className="relative grid min-h-[320px] place-items-end justify-items-end overflow-hidden bg-gradient-to-br from-white via-[#f8f9ff] to-[#d3e4fe]/45 p-6 sm:min-h-[360px] sm:p-8">
                    <Image
                      src={oil.plantBackdrop}
                      alt=""
                      width={900}
                      height={900}
                      className="absolute -left-8 bottom-4 h-[280px] w-[280px] -rotate-6 object-contain opacity-[0.32] saturate-[.95] contrast-[1.04] sm:-left-10 sm:bottom-2 sm:h-[340px] sm:w-[340px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/18 via-white/8 to-white/0" />
                    <div
                      className="absolute left-7 top-7 z-10 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-white"
                      style={{ backgroundColor: oil.accent }}
                    >
                      {oil.eyebrow}
                    </div>
                    <Image
                      src={oil.image}
                      alt={`Aura ${oil.name}`}
                      width={420}
                      height={540}
                      className="relative z-10 mr-6 h-[260px] w-auto object-contain drop-shadow-2xl transition duration-500 group-hover:scale-105 sm:mr-8 sm:h-[300px]"
                    />
                  </div>
                  <CardContent className="p-7">
                    <div className="text-xs font-bold uppercase tracking-[.18em] text-[#566771]">
                      {oil.volume}
                    </div>
                    <h3 className="mt-2 text-3xl font-semibold tracking-[-0.045em]">
                      {oil.name}
                    </h3>
                    <div className="mt-2 text-lg font-bold text-[#0b1c30]">
                      {oil.price}
                    </div>
                    <p className="mt-4 min-h-20 text-sm leading-6 text-[#44474d]">{oil.summary}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Button className="aura-premium-button w-full rounded-full bg-[#0b1c30] text-white hover:bg-[#162f4d] sm:w-auto" asChild>
                        <Link href={`/catalogo/aceites-vegetales/${oil.slug}`}>
                          Ver ficha
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="aura-premium-button w-full rounded-full bg-white/65 sm:w-auto" asChild>
                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                          Consultar
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CategorySection>
        ) : null}
      </div>
    </main>
  );
}

type CategorySectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

function CategorySection({
  id,
  eyebrow,
  title,
  description,
  children,
}: CategorySectionProps) {
  return (
    <section id={id} className="scroll-mt-10 py-14 sm:py-20">
      <div className="mb-8 grid gap-5 md:grid-cols-[.82fr_1.18fr] md:items-end">
        <div>
          <Badge variant="outline" className="mb-4 rounded-full border-[#c5c6cd] bg-white/60 px-4 py-2 text-xs uppercase tracking-[.18em]">
            {eyebrow}
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl md:tracking-[-0.045em]">
            {title}
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#44474d]">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

type Product = {
  name: string;
  concentration: string;
  mg: string;
  price: string;
  oldPrice: string;
  image: string;
  accent: string;
  tagline?: string;
  summary: string;
  duration?: string;
  backdrop?: string;
};

function ProductCard({ product, pet = false }: { product: Product; pet?: boolean }) {
  return (
    <Card className="aura-luminous-card group overflow-hidden rounded-[2rem] border-[#bae6fd]/70 bg-white/66 shadow-[0_34px_80px_rgba(14,83,112,.13)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_44px_100px_rgba(14,83,112,.16)]">
      <div className="relative grid min-h-[360px] place-items-end overflow-hidden bg-gradient-to-br from-white via-[#f8f9ff] to-[#d3e4fe]/55 p-6 sm:min-h-[430px] sm:p-8">
        {product.backdrop ? (
          <>
            <Image
              src={product.backdrop}
              alt=""
              width={900}
              height={900}
              className="absolute inset-0 h-full w-full object-cover opacity-[0.62] saturate-[1.04] contrast-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/18 via-white/8 to-white/0" />
          </>
        ) : null}
        <div className="absolute left-5 top-5 z-20 flex max-w-[calc(100%-2.5rem)] flex-col items-start gap-2 sm:left-8 sm:top-8">
          <div
            className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-white"
            style={{ backgroundColor: product.accent }}
          >
            {pet ? "Mascotas" : product.concentration}
          </div>
          {product.duration ? (
            <div
              className="rounded-full px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[.08em] text-white shadow-[0_12px_28px_rgba(11,28,48,.14)] sm:px-4 sm:text-xs sm:tracking-[.12em]"
              style={{ backgroundColor: product.accent }}
            >
              {product.duration}
            </div>
          ) : null}
        </div>
        <Image
          src={product.image}
          alt={`Aura ${product.name}`}
          width={pet ? 440 : 420}
          height={pet ? 560 : 540}
          className="relative z-10 h-[300px] w-auto object-contain drop-shadow-2xl transition duration-500 group-hover:scale-105 sm:h-[360px]"
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
              <div className="text-sm text-[#75777e] line-through">
                {product.oldPrice}
              </div>
            ) : null}
            <div className="text-lg font-bold">{product.price}</div>
          </div>
        </div>
        {product.tagline ? (
          <p className="mt-4 text-sm font-semibold leading-6 text-[#39475f]">
            {product.tagline}
          </p>
        ) : null}
        <p className={`${product.tagline ? "mt-2" : "mt-4"} leading-7 text-[#44474d]`}>
          {product.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[product.concentration, "0% THC"].map((item) => (
            <span key={item} className="rounded-full bg-[#eff4ff] px-3 py-1.5 text-xs font-semibold text-[#39475f]">
              {item}
            </span>
          ))}
          {product.duration ? (
            <span
              className="rounded-full px-3 py-1.5 text-xs font-semibold text-white"
              style={{ backgroundColor: product.accent }}
            >
              Rendimiento estimado
            </span>
          ) : null}
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
