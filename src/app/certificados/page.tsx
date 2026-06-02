import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProtectedCertificate } from "@/components/protected-certificate";

const whatsappHref = "https://wa.me/51933640908";
const facebookHref = "https://www.facebook.com/aurapremiumoilcbdperu";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-[#f8f9ff] px-5 py-10 text-[#0b1c30] lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <Button variant="outline" className="w-fit rounded-full bg-white/70" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
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
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            <Button className="aura-premium-button flex-1 rounded-full bg-[#25d366] text-white hover:bg-[#20bd5a] sm:flex-none" asChild>
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

        <section className="mb-10 grid gap-8 rounded-[2rem] border border-white/70 bg-white/50 p-6 shadow-[0_40px_90px_rgba(11,28,48,.06)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-8 md:grid-cols-[.82fr_1.18fr] md:p-12">
          <div>
            <Badge className="mb-5 rounded-full bg-[#d3e5f1] px-4 py-2 text-[#0b1c30] hover:bg-[#d3e5f1]">
              Certificado de pureza
            </Badge>
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-6xl md:tracking-[-0.045em]">
              Plus 3000 mg, 0.00 mg/mL THC.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#44474d]">
              Resultado de análisis para AURA OIL 3000 mg CBD Tincture. El
              documento muestra Total THC 0.00 mg/mL, CBD 97.18 mg/mL y
              cannabinoides totales 99.31 mg/mL.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Total THC", "0.00 mg/mL"],
              ["Total CBD", "97.18 mg/mL"],
              ["Cannabinoides", "99.31 mg/mL"],
            ].map(([label, value]) => (
              <Card key={label} className="border-[#e0f2fe] bg-white/75">
                <CardContent className="p-5">
                  <ShieldCheck className="mb-4 h-5 w-5 text-[#39475f]" />
                  <div className="text-xs font-bold uppercase tracking-[.18em] text-[#566771]">
                    {label}
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    {value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <ProtectedCertificate />
      </div>
    </main>
  );
}
