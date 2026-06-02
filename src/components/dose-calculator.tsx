"use client";

import { useState } from "react";
import { Calculator, Droplets, Info, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const whatsappHref = "https://wa.me/51933640908";

const concentrations = {
  "10": {
    label: "CBD 10%",
    detail: "aprox. 5 mg por gota",
    accent: "#ef7d1a",
    equivalence: "3000 mg / 30 ml",
  },
  "20": {
    label: "CBD 20%",
    detail: "aprox. 10 mg por gota",
    accent: "#2f8a35",
    equivalence: "6000 mg / 30 ml",
  },
  "30": {
    label: "CBD 30%",
    detail: "aprox. 15 mg por gota",
    accent: "#0076bf",
    equivalence: "9000 mg / 30 ml",
  },
} as const;

const weights = {
  "50-60": "50-60 kg",
  "60-80": "60-80 kg",
  "80-100": "80-100 kg",
} as const;

const goals = {
  bienestar: "Bienestar",
  estres: "Estrés / ansiedad",
  sueno: "Sueño",
  moderado: "Dolor moderado",
  intenso: "Dolor intenso",
} as const;

const doseTable = {
  "10": {
    "50-60": {
      bienestar: "1-2 gotas",
      estres: "2-4 gotas",
      sueno: "4-6 gotas",
      moderado: "6-10 gotas",
      intenso: "10-15 gotas",
    },
    "60-80": {
      bienestar: "2-3 gotas",
      estres: "3-5 gotas",
      sueno: "5-8 gotas",
      moderado: "8-12 gotas",
      intenso: "12-20 gotas",
    },
    "80-100": {
      bienestar: "3-4 gotas",
      estres: "4-6 gotas",
      sueno: "6-10 gotas",
      moderado: "10-15 gotas",
      intenso: "15-25 gotas",
    },
  },
  "20": {
    "50-60": {
      bienestar: "1 gota",
      estres: "1-2 gotas",
      sueno: "2-3 gotas",
      moderado: "3-5 gotas",
      intenso: "5-8 gotas",
    },
    "60-80": {
      bienestar: "1-2 gotas",
      estres: "2-3 gotas",
      sueno: "3-4 gotas",
      moderado: "4-6 gotas",
      intenso: "6-10 gotas",
    },
    "80-100": {
      bienestar: "2 gotas",
      estres: "2-4 gotas",
      sueno: "4-5 gotas",
      moderado: "5-8 gotas",
      intenso: "8-12 gotas",
    },
  },
  "30": {
    "50-60": {
      bienestar: "1 gota",
      estres: "1 gota",
      sueno: "2 gotas",
      moderado: "2-3 gotas",
      intenso: "4-5 gotas",
    },
    "60-80": {
      bienestar: "1 gota",
      estres: "1-2 gotas",
      sueno: "2-3 gotas",
      moderado: "3-4 gotas",
      intenso: "5-7 gotas",
    },
    "80-100": {
      bienestar: "1-2 gotas",
      estres: "2 gotas",
      sueno: "3-4 gotas",
      moderado: "4-5 gotas",
      intenso: "6-8 gotas",
    },
  },
} as const;

type Concentration = keyof typeof concentrations;
type Weight = keyof typeof weights;
type Goal = keyof typeof goals;

export function DoseCalculator() {
  const [selection, setSelection] = useState<{
    concentration: Concentration;
    weight: Weight;
    goal: Goal;
  }>({
    concentration: "10",
    weight: "60-80",
    goal: "bienestar",
  });

  const { concentration, weight, goal } = selection;
  const current = concentrations[concentration];
  const resultKey = `${concentration}-${weight}-${goal}`;
  const dose = doseTable[concentration][weight][goal];
  const calculationText = `${current.label} + ${weights[weight]} + ${goals[goal]}`;

  function updateSelection(nextSelection: Partial<typeof selection>) {
    setSelection((currentSelection) => ({
      ...currentSelection,
      ...nextSelection,
    }));
  }

  return (
    <section id="calculadora" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
      <div className="mb-10 grid gap-6 md:grid-cols-[.9fr_1.1fr] md:items-end">
        <div>
          <Badge className="mb-5 rounded-full bg-[#d3e5f1] px-4 py-2 text-xs uppercase tracking-[.22em] text-[#0b1c30] hover:bg-[#d3e5f1]">
            Guía referencial
          </Badge>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
            Calculadora de tomas CBD.
          </h2>
        </div>
        <p className="text-lg leading-8 text-[#44474d]">
          Seleccióna concentración, peso y objetivo para ver una referencia de
          gotas. Empieza por la cantidad más baja y ajusta gradualmente.
        </p>
      </div>

      <Card className="overflow-hidden rounded-[2rem] border-white/70 bg-white/55 shadow-[0_40px_90px_rgba(11,28,48,.08)] backdrop-blur-2xl sm:rounded-[3rem]">
        <CardContent className="grid gap-0 p-0 lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-6 sm:p-8 md:p-10">
            <div className="space-y-3 sm:hidden">
              <Label className="text-sm font-bold uppercase tracking-[.16em] text-[#566771]">
                Concentración
              </Label>
              <select
                key={`concentration-${concentration}`}
                value={concentration}
                onInput={(event) =>
                  updateSelection({
                    concentration: event.currentTarget.value as Concentration,
                  })
                }
                onChange={(event) =>
                  updateSelection({
                    concentration: event.currentTarget.value as Concentration,
                  })
                }
                className="h-14 w-full appearance-none rounded-2xl border px-5 text-base font-semibold text-white outline-none transition focus:ring-4"
                style={{
                  backgroundColor: current.accent,
                  borderColor: current.accent,
                  boxShadow: `0 0 0 4px ${current.accent}18`,
                }}
                aria-label="Seleccióna concentración"
              >
                {(Object.entries(concentrations) as [
                  Concentration,
                  typeof concentrations[Concentration],
                ][]).map(([value, item]) => (
                  <option key={value} value={value}>
                    {item.label} - {item.detail}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden gap-5 sm:grid sm:grid-cols-3">
              {(Object.keys(concentrations) as Concentration[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateSelection({ concentration: item })}
                  className={`min-h-24 rounded-3xl border p-3 text-left transition duration-300 sm:p-5 ${
                    concentration === item
                      ? "border-transparent text-white shadow-[0_22px_45px_rgba(11,28,48,.14)]"
                      : "border-[#e0f2fe] bg-white/70 text-[#0b1c30] hover:-translate-y-1"
                  }`}
                  style={{
                    backgroundColor:
                      concentration === item
                        ? concentrations[item].accent
                        : undefined,
                  }}
                >
                  <div className="text-base font-semibold tracking-[-0.03em] sm:text-lg">
                    {concentrations[item].label}
                  </div>
                  <div
                    className={`mt-2 text-xs leading-5 sm:text-sm ${
                      concentration === item ? "text-white/82" : "text-[#566771]"
                    }`}
                  >
                    {concentrations[item].detail}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="space-y-3">
                <Label className="text-sm font-bold uppercase tracking-[.16em] text-[#566771]">
                  Peso
                </Label>
                <select
                  key={`weight-${weight}`}
                  value={weight}
                  onInput={(event) =>
                    updateSelection({
                      weight: event.currentTarget.value as Weight,
                    })
                  }
                  onChange={(event) =>
                    updateSelection({
                      weight: event.currentTarget.value as Weight,
                    })
                  }
                  className="h-14 w-full appearance-none rounded-2xl border border-[#d8e6f2] bg-white/80 px-5 text-base font-semibold text-[#0b1c30] outline-none transition focus:border-[#0076bf] focus:ring-4 focus:ring-[#d3e4fe]"
                  aria-label="Seleccióna peso"
                >
                  {(Object.entries(weights) as [Weight, string][]).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-bold uppercase tracking-[.16em] text-[#566771]">
                  Objetivo
                </Label>
                <select
                  key={`goal-${goal}`}
                  value={goal}
                  onInput={(event) =>
                    updateSelection({
                      goal: event.currentTarget.value as Goal,
                    })
                  }
                  onChange={(event) =>
                    updateSelection({
                      goal: event.currentTarget.value as Goal,
                    })
                  }
                  className="h-14 w-full appearance-none rounded-2xl border border-[#d8e6f2] bg-white/80 px-5 text-base font-semibold text-[#0b1c30] outline-none transition focus:border-[#0076bf] focus:ring-4 focus:ring-[#d3e4fe]"
                  aria-label="Seleccióna objetivo"
                >
                  {(Object.entries(goals) as [Goal, string][]).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button
              type="button"
              onClick={() => updateSelection({ ...selection })}
              className="aura-premium-button mt-6 w-full rounded-full text-white lg:hidden"
              style={{ backgroundColor: current.accent }}
            >
              Calcular dosis
            </Button>

            <div
              key={resultKey}
              className="mt-8 rounded-3xl p-5 text-white shadow-[0_22px_45px_rgba(11,28,48,.14)] lg:hidden"
              style={{ backgroundColor: current.accent }}
            >
              <div className="text-xs font-bold uppercase tracking-[.18em] text-white/55">
                Resultado sugerido
              </div>
              <div className="mt-3 text-4xl font-semibold tracking-[-0.055em]">
                {dose}
              </div>
              <div className="mt-3 text-sm text-white/70">
                {current.label} · {weights[weight]} · {goals[goal]}
              </div>
            </div>

            <div
              key={`${resultKey}-fórmula`}
              className="mt-4 rounded-3xl border p-5 lg:hidden"
              style={{
                borderColor: `${current.accent}40`,
                backgroundColor: `${current.accent}10`,
              }}
            >
              <div className="text-xs font-bold uppercase tracking-[.18em] text-[#566771]">
                Cálculo aplicado
              </div>
              <div className="mt-2 text-sm font-semibold leading-6 text-[#0b1c30]">
                {calculationText} = {dose}
              </div>
              <div className="mt-1 text-sm text-[#566771]">{current.detail}</div>
            </div>

            <div className="mt-8 rounded-3xl border border-[#e0f2fe] bg-[#f8f9ff]/78 p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white">
                  <Info className="h-5 w-5 text-[#39475f]" />
                </div>
                <div>
                  <div className="font-semibold tracking-[-0.02em]">
                    Nota para la web
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#44474d]">
                    Cada persona puede responder diferente al CBD según su peso,
                    metabolismo y sensibilidad individual. Esta herramienta no
                    reemplaza asesoría médica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative hidden overflow-hidden p-6 text-white sm:p-8 md:p-10 lg:block"
            style={{ backgroundColor: current.accent }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(211,228,254,.28),transparent_36%),radial-gradient(circle_at_12%_92%,rgba(239,125,26,.24),transparent_34%)]" />
            <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-between">
              <div>
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
                  <Calculator className="h-6 w-6" />
                </div>
                <div className="text-sm font-bold uppercase tracking-[.22em] text-white/55">
                  Resultado sugerido
                </div>
                <div className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
                  {dose}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                    {current.label}
                  </span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                    {weights[weight]}
                  </span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                    {goals[goal]}
                  </span>
                </div>
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5">
                  <div className="text-xs font-bold uppercase tracking-[.18em] text-white/58">
                    Cálculo aplicado
                  </div>
                  <div className="mt-2 text-sm font-semibold leading-6 text-white">
                    {calculationText} = {dose}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5 grid gap-3 rounded-3xl border border-white/10 bg-white/8 p-5">
                  <div className="flex items-center gap-3">
                    <Droplets className="h-5 w-5 text-[#d3e4fe]" />
                    <span className="text-sm text-white/72">
                      {current.equivalence} · {current.detail}
                    </span>
                  </div>
                  <div className="text-sm text-white/62">
                    Equivalencia general: 1 ml aprox. 20 gotas.
                  </div>
                </div>
                <Button className="aura-premium-button w-full rounded-full bg-white text-[#0b1c30] hover:bg-[#eff4ff]" asChild>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    Confirmar dosis por WhatsApp
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
