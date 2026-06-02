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
      "El tesoro de los Andes en cada gota. Una fórmula natural elaborada con muña y aceite de oliva extra virgen, tradicionalmente valorada por su aporte al bienestar digestivo y respiratorio.",
    description:
      "La muña ha sido valorada durante generaciones por sus propiedades aromáticas y su aporte al bienestar digestivo y respiratorio. Hoy llega a ti en una práctica presentación concentrada y lista para usar.",
    benefits: [
      "Apoyo para una mejor digestión",
      "Uso tradicional como antiparasitario",
      "Apoyo al bienestar respiratorio",
      "Apoyo para mejorar circulación",
      "Apoya la fijación del calcio",
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
      "Aceite de romero macerado en aceite de oliva extra virgen, ideal para el cuidado del cabello, la piel y los masajes corporales.",
    description:
      "El romero es una planta aromática tradicionalmente reconocida en el cuidado del cabello y la piel. Este aceite vegetal de uso externo ha sido formulado para el cuidado capilar, el bienestar de la piel y el masaje corporal.",
    benefits: [
      "Estimula el crecimiento capilar",
      "Combate la caída",
      "Controla la caspa",
      "Hidrata la piel",
      "Ayuda reducir líneas expresión y arrugas",
      "Reduce irritación y acné en la piel",
    ],
    details: ["Aceite vegetal", "Uso externo", "Formato gotero"],
    note: "Evitar contacto con ojos y mucosas. Realizar prueba en una zona pequeña de piel antes de usar.",
  },
  {
    slug: "oregano",
    name: "Aceite de Orégano",
    shortName: "Orégano",
    price: "S/ 35",
    volume: "30 ml",
    image: "/aceite-oregano.png",
    plantBackdrop: "/plant-oregano-real.png",
    accent: "#2578c8",
    eyebrow: "Fórmula mejorada",
    summary:
      "OREGAN+ concentra el poder del orégano en una presentación comestible potenciada con CBD premium.",
    description:
      "El aceite de orégano es reconocido por su contenido natural de compuestos bioactivos como el carvacrol y el timol, que definen su perfil aromático intenso y su uso tradicional en el cuidado herbal.",
    benefits: [
      "Elimina la candidiasis y otros hongos",
      "Potente antibacteriano",
      "Poder antioxidante",
      "Uso tradicional como expectorante, antiespasmódico y antiséptico",
      "Uso tópico para eliminar hongos en uñas y piel",
      "Ayuda a calmar picazón o molestias por picaduras",
    ],
    details: ["Aceite comestible", "Potenciado con CBD", "Consultar modo de uso"],
    note: "Por su potencia herbal, consultar por WhatsApp antes de usar, especialmente si tomas medicación o tienes una condición médica.",
  },
];

export type VegetableOil = (typeof vegetableOils)[number];
