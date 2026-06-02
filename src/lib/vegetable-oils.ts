export const vegetableOils = [
  {
    slug: "muna",
    name: "Aceite de Muña",
    shortName: "Muña",
    price: "S/ 30",
    volume: "30 ml",
    image: "/aceite-muna.png",
    plantBackdrop: "/plant-muna-real.png",
    accent: "#2f8a60",
    eyebrow: "100% natural",
    summary:
      "Aceite de muña con aceite de oliva extra virgen, inspirado en el uso tradicional andino para rutinas digestivas y respiratorias.",
    description:
      "La muña es una planta aromática tradicionalmente valorada en los Andes. Esta presentación busca acompañar rutinas naturales de bienestar, especialmente cuando se busca una opción herbal práctica y concentrada.",
    benefits: [
      "Apoyo para una mejor digestión",
      "Uso tradicional como antiparasitario",
      "Acompañamiento en rutinas respiratorias",
      "Apoyo para mejorar circulación",
      "Asociado tradicionalmente a la fijación de calcio",
    ],
    details: ["Aceite vegetal", "Con aceite de oliva extra virgen", "Formato gotero"],
    note: "Producto natural de apoyo. No reemplaza diagnóstico, tratamiento médico ni indicación profesional.",
  },
  {
    slug: "romero",
    name: "Aceite de Romero",
    shortName: "Romero",
    price: "S/ 30",
    volume: "30 ml",
    image: "/aceite-romero.png",
    plantBackdrop: "/plant-romero-real.png",
    accent: "#2f8a35",
    eyebrow: "100% natural",
    summary:
      "Aceite vegetal de romero para rutinas de cuidado capilar, masaje y cuidado externo de la piel.",
    description:
      "El romero es una planta aromática muy usada en rutinas de cuidado personal. Esta presentación está pensada para quienes buscan un aceite vegetal natural para masaje, cuero cabelludo y cuidado externo.",
    benefits: [
      "Apoya rutinas para estimular el crecimiento del cabello",
      "Ayuda a mejorar la circulación mediante masaje",
      "Acompaña rutinas contra la caída del cabello",
      "Apoyo en rutinas de cuidado para piel con acné",
      "Ayuda a mantener la piel con apariencia lozana",
    ],
    details: ["Aceite vegetal", "Uso externo", "Formato gotero"],
    note: "Evitar contacto con ojos y mucosas. Realizar prueba en una zona pequeña de piel antes de usar.",
  },
  {
    slug: "oregano",
    name: "Aceite de Orégano+",
    shortName: "Orégano+",
    price: "S/ 35",
    volume: "30 ml",
    image: "/aceite-oregano.png",
    plantBackdrop: "/plant-oregano-real.png",
    accent: "#2578c8",
    eyebrow: "Fórmula mejorada",
    summary:
      "Aceite de orégano comestible, potenciado con CBD premium para una rutina herbal de mayor soporte.",
    description:
      "El aceite de orégano es reconocido por sus compuestos aromáticos naturales. Esta línea lo presenta como una fórmula herbal mejorada y orientada a bienestar, siempre con asesoría antes de usar.",
    benefits: [
      "Apoyo en rutinas relacionadas con candidiasis",
      "Acompañamiento en molestias respiratorias",
      "Uso tradicional en rutinas para hongos en uñas",
      "Apoyo en rutinas urinarias",
      "Ayuda a calmar picazón o molestias por picaduras",
      "Uso tradicional como expectorante, antiespasmódico y antiséptico",
    ],
    details: ["Aceite comestible", "Potenciado con CBD", "Consultar modo de uso"],
    note: "Por su potencia herbal, consultar por WhatsApp antes de usar, especialmente si tomas medicación o tienes una condición médica.",
  },
];

export type VegetableOil = (typeof vegetableOils)[number];
