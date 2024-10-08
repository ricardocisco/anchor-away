import { createSlice } from "@reduxjs/toolkit";

export interface dataProps {
  id: number;
  name: string;
  model: string;
  pricePerDay: number;
  pricePerWeek: number;
  people: number;
  beds: number;
  year: number;
  builder: string;
  size: string;
  fuelCapacity: string;
  maxSpeed: string;
  cruiseSpeed: string;
  description: string;
  location: string;
  images: string[];
  country: string;
}

const INITIAL_STATE: dataProps[] = [
  {
    id: 1,
    name: "Ocean Explorer",
    model: "Explorer 50",
    pricePerDay: 5000,
    pricePerWeek: 30000,
    people: 12,
    beds: 6,
    year: 2020,
    builder: "Benetti",
    size: "50m",
    fuelCapacity: "20,000 liters",
    maxSpeed: "28 knots",
    cruiseSpeed: "20 knots",
    location: "Monaco",
    country: "Monaco",
    images: [
      "https://yachtharbour.com/static/uploads/5493_dda76.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "The Ocean Explorer offers an unparalleled experience on the water with a spacious deck, modern amenities, and luxurious cabins.",
  },
  {
    id: 2,
    name: "Serenity Now",
    model: "Sunseeker 100",
    pricePerDay: 7000,
    pricePerWeek: 45000,
    people: 10,
    beds: 5,
    year: 2018,
    builder: "Sunseeker",
    size: "30m",
    fuelCapacity: "15,000 liters",
    maxSpeed: "34 knots",
    cruiseSpeed: "25 knots",
    location: "Ibiza, Spain",
    country: "Spain",
    images: [
      "https://www.boatshopping.com.br/wp-content/uploads/2021/06/Sunseeker-100-boat-shopping-2.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Serenity Now, built by Sunseeker in 2018, is a 30-meter yacht designed for speed and comfort.",
  },
  {
    id: 3,
    name: "Majestic Seas",
    model: "Princess 95",
    pricePerDay: 8000,
    pricePerWeek: 50000,
    people: 8,
    beds: 4,
    year: 2022,
    builder: "Princess Yachts",
    size: "29m",
    fuelCapacity: "12,000 liters",
    maxSpeed: "30 knots",
    cruiseSpeed: "22 knots",
    location: "Cannes, France",
    country: "France",
    images: [
      "https://images.boats.com/resize/1/66/66/9306666_20240321052939086_1_XLARGE.jpg?t=1711024094000",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "The Majestic Seas is a state-of-the-art yacht built by Princess Yachts in 2022.",
  },
  {
    id: 4,
    name: "Freedom",
    model: "Azimut Grande 27",
    pricePerDay: 6000,
    pricePerWeek: 38000,
    people: 10,
    beds: 5,
    year: 2019,
    builder: "Azimut",
    size: "27m",
    fuelCapacity: "14,500 liters",
    maxSpeed: "32 knots",
    cruiseSpeed: "24 knots",
    location: "Miami, USA",
    country: "Usa",
    images: [
      "https://old.azimutyachts.com/slider/background/960_02_20170922114924.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Freedom is a luxury yacht built by Azimut in 2019, combining performance and style in a compact 27-meter design.",
  },
  {
    id: 5,
    name: "Endless Horizon",
    model: "Pershing 92",
    pricePerDay: 9000,
    pricePerWeek: 60000,
    people: 14,
    beds: 7,
    year: 2021,
    builder: "Pershing",
    size: "28m",
    fuelCapacity: "18,000 liters",
    maxSpeed: "38 knots",
    cruiseSpeed: "30 knots",
    location: "Mykonos, Greece",
    country: "Greece",
    images: [
      "https://d3gghfo2xrrrqp.cloudfront.net/wp-content/uploads/2023/08/Pershing-92-DORIS-3.jpeg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Endless Horizon is an elegant and powerful yacht built by Pershing in 2021.",
  },
  {
    id: 6,
    name: "Silver Star",
    model: "Mangusta 108",
    pricePerDay: 7500,
    pricePerWeek: 48000,
    people: 10,
    beds: 5,
    year: 2021,
    builder: "Mangusta",
    size: "33m",
    fuelCapacity: "16,500 liters",
    maxSpeed: "36 knots",
    cruiseSpeed: "28 knots",
    location: "Dubrovnik, Croatia",
    country: "Croatia",
    images: [
      "https://images.boatsgroup.com/images/1/40/5/2005-mangusta-108-power-9524005-20240904101902109-1_XLARGE.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Silver Star offers a sleek, stylish design and high-speed cruising for guests who seek both comfort and excitement.",
  },
  {
    id: 7,
    name: "Blue Horizon",
    model: "Heesen 47",
    pricePerDay: 9500,
    pricePerWeek: 58000,
    people: 12,
    beds: 6,
    year: 2020,
    builder: "Heesen",
    size: "47m",
    fuelCapacity: "19,000 liters",
    maxSpeed: "40 knots",
    cruiseSpeed: "32 knots",
    location: "Antibes, France",
    country: "France",
    images: [
      "https://ruyachts.com/images/heesen/47m-steel/crystalady/navigation/heesen-47m-steel-crystalady-navigation-1.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Blue Horizon is known for its stunning design and high-speed performance, making it perfect for ocean adventures.",
  },
  {
    id: 8,
    name: "Seaside Bliss",
    model: "Ferretti 880",
    pricePerDay: 5500,
    pricePerWeek: 33000,
    people: 10,
    beds: 5,
    year: 2017,
    builder: "Ferretti",
    size: "27m",
    fuelCapacity: "14,000 liters",
    maxSpeed: "30 knots",
    cruiseSpeed: "24 knots",
    location: "Naples, Italy",
    country: "Italy",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX5oAB4neaGnqypYaPHK-CZnNZDTaJs6NVw&s",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Seaside Bliss provides a mix of comfort and style with luxurious interiors and ample outdoor lounging space.",
  },
  {
    id: 9,
    name: "Golden Wave",
    model: "Lurssen 72",
    pricePerDay: 12000,
    pricePerWeek: 75000,
    people: 14,
    beds: 7,
    year: 2023,
    builder: "Lurssen",
    size: "72m",
    fuelCapacity: "25,000 liters",
    maxSpeed: "26 knots",
    cruiseSpeed: "18 knots",
    location: "Palma de Mallorca, Spain",
    country: "Spain",
    images: [
      "https://sailica-prod-main.s3.eu-central-1.amazonaws.com/41349/large/daaca6ff2c13c8746c8e7a706bcd9066.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Golden Wave is a recently built superyacht, combining cutting-edge technology with ultimate luxury.",
  },
  {
    id: 10,
    name: "Sun Chaser",
    model: "Sanlorenzo SL104",
    pricePerDay: 6000,
    pricePerWeek: 36000,
    people: 8,
    beds: 4,
    year: 2019,
    builder: "Sanlorenzo",
    size: "31m",
    fuelCapacity: "13,500 liters",
    maxSpeed: "32 knots",
    cruiseSpeed: "26 knots",
    location: "Barcelona, Spain",
    country: "Spain",
    images: [
      "https://ruyachts.com/images/sanlorenzo/sl104/navigation/sanlorenzo-sl104-navigation-1.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Sun Chaser offers a seamless blend of luxury and performance, making it perfect for family trips or romantic getaways.",
  },
  {
    id: 11,
    name: "Aqua Dream",
    model: "Codecasa 55",
    pricePerDay: 11000,
    pricePerWeek: 68000,
    people: 16,
    beds: 8,
    year: 2021,
    builder: "Codecasa",
    size: "55m",
    fuelCapacity: "22,000 liters",
    maxSpeed: "28 knots",
    cruiseSpeed: "20 knots",
    location: "Cannes, France",
    country: "France",
    images: [
      "https://www.charterworld.com/images/yachts/Motor%20yacht%20AQUA%20LIBRA%20-%20003.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Aqua Dream is the ultimate luxury yacht, perfect for large groups seeking an exclusive and comfortable sea adventure.",
  },
  {
    id: 12,
    name: "Crystal Waters",
    model: "Amels 60",
    pricePerDay: 13000,
    pricePerWeek: 80000,
    people: 12,
    beds: 6,
    year: 2022,
    builder: "Amels",
    size: "60m",
    fuelCapacity: "21,500 liters",
    maxSpeed: "27 knots",
    cruiseSpeed: "19 knots",
    location: "Saint-Tropez, France",
    country: "France",
    images: [
      "https://cdn.boatinternational.com/convert/files/2024/09/aafcaaf0-6a9d-11ef-822e-c574394a2333-Amels-60.jpg/r%5Bwidth%5D=1920/aafcaaf0-6a9d-11ef-822e-c574394a2333-Amels-60.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Crystal Waters offers a perfect mix of elegance and modern design, ideal for cruising with style.",
  },
  {
    id: 13,
    name: "Voyager",
    model: "Oceanco 75",
    pricePerDay: 15000,
    pricePerWeek: 95000,
    people: 18,
    beds: 9,
    year: 2023,
    builder: "Oceanco",
    size: "75m",
    fuelCapacity: "28,000 liters",
    maxSpeed: "24 knots",
    cruiseSpeed: "16 knots",
    location: "Porto Cervo, Italy",
    country: "Italy",
    images: [
      "https://images.boatsgroup.com/images/1/43/82/9294382_20240311084635643_1_XLARGE.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Voyager is a 75-meter mega yacht designed for long-distance travel with the utmost luxury and comfort.",
  },
  {
    id: 14,
    name: "Stellar",
    model: "Baglietto 48",
    pricePerDay: 10000,
    pricePerWeek: 60000,
    people: 12,
    beds: 6,
    year: 2020,
    builder: "Baglietto",
    size: "48m",
    fuelCapacity: "17,500 liters",
    maxSpeed: "33 knots",
    cruiseSpeed: "25 knots",
    location: "Porto Montenegro, Montenegro",
    country: "Montenegro",
    images: [
      "https://cdn.yachtbroker.org/images/highdef/2792534_16420aeb_1.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Stellar combines modern design with high-speed cruising, perfect for guests seeking a thrilling yet comfortable yachting experience.",
  },
  {
    id: 15,
    name: "Celestial",
    model: "Perini Navi 60",
    pricePerDay: 14000,
    pricePerWeek: 85000,
    people: 14,
    beds: 7,
    year: 2023,
    builder: "Perini Navi",
    size: "60m",
    fuelCapacity: "20,000 liters",
    maxSpeed: "22 knots",
    cruiseSpeed: "17 knots",
    location: "Athens, Greece",
    country: "Greece",
    images: [
      "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/wJ2CEFm5TlKBgLhcsmup_Seven-sailing-superyacht-perini-navi-credit-guiliano-sargentini.jpg/r%5Bwidth%5D=1920/wJ2CEFm5TlKBgLhcsmup_Seven-sailing-superyacht-perini-navi-credit-guiliano-sargentini.jpg",
      "https://www.talamare.com/medias/3041-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3046-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3045-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3042-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3043-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3047-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3044-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3037-yacht-gulf-craft-majesty-120.jpg",
      "https://www.talamare.com/medias/3038-yacht-gulf-craft-majesty-120.jpg",
    ],
    description:
      "Celestial is a newly built 60-meter yacht, offering a luxurious experience for up to 14 guests with world-class amenities.",
  },
];

export const yachtSlice = createSlice({
  name: "yacht",
  initialState: INITIAL_STATE as dataProps[],
  reducers: {
    viewList: (state) => {
      return [...state];
    },
  },
});

export const { viewList } = yachtSlice.actions;
export default yachtSlice.reducer;
