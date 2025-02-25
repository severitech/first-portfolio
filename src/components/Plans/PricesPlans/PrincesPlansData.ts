import { PricesPlansData } from "./PricesPlans.type";

export const dataPricePlans: PricesPlansData = [
  {
    id: 1,
    name: "Started",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum",
    primary: false,
    prices: [
      {
        id: 1,
        name: "/mes",
        prices: "50$",
      },
      {
        id: 2,
        name: "/anual",
        prices: "550$",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: false,
      },
      {
        id: 3,
        name: "Lorem ipsum lorem",
        active: false,
      },
      {
        id: 4,
        name: "Lorem ipsum lorem",
        active: false,
      },
      {
        id: 5,
        name: "Lorem ipsum lorem",
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Advance",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum",
    primary: true,
    prices: [
      {
        id: 1,
        name: "/mes",
        prices: "80$",
      },
      {
        id: 2,
        name: "/anual",
        prices: "880$",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: true,
      },
      {
        id: 3,
        name: "Lorem ipsum lorem",
        active: true,
      },
      {
        id: 4,
        name: "Lorem ipsum lorem",
        active: false,
      },
      {
        id: 5,
        name: "Lorem ipsum lorem",
        active: false,
      },
    ],
  },
  {
    id: 3,
    name: "Premium",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum",
    primary: false,
    prices: [
      {
        id: 1,
        name: "/mes",
        prices: "100$",
      },
      {
        id: 2,
        name: "/anual",
        prices: "1.100$",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: true,
      },
      {
        id: 3,
        name: "Lorem ipsum lorem",
        active: true,
      },
      {
        id: 4,
        name: "Lorem ipsum lorem",
        active: true,
      },
      {
        id: 5,
        name: "Lorem ipsum lorem",
        active: true,
      },
    ],
  },
];