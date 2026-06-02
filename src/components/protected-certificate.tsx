"use client";

import Image from "next/image";

export function ProtectedCertificate() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-[#e0f2fe] bg-white shadow-[0_40px_90px_rgba(11,28,48,.08)]"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="absolute right-4 top-4 z-10 rounded-full bg-[#0b1c30]/82 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-white backdrop-blur">
        Vista protegida
      </div>
      <Image
        src="/certificate-plus-3000mg.png"
        alt="Certificado de análisis Aura Plus 3000 mg"
        width={822}
        height={1024}
        className="mx-auto h-auto w-full max-w-4xl select-none"
        draggable={false}
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_44%,rgba(11,28,48,.035)_45%,rgba(11,28,48,.035)_55%,transparent_56%,transparent_100%)] bg-[length:220px_220px]" />
    </div>
  );
}
