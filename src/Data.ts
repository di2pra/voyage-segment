import { ICarrousselItem, IFlashDeal } from "./Types";

export const FlashDeals : IFlashDeal[] = [
  {
    url: "maldives-mermaid-beach-resort",
    title: "Mermaid Beach Resort: The most joyful way to spend your holiday",
    imgUrl: "/assets/img/gallery/maldives.png",
    location: "Maldives",
    duration: "4 jours",
    originalPrice: 200,
    discountedPrice: 150,
    discountPercentage: "25%",
    isTrending: true
  },
  {
    url: "bora-bora-romantic-cruise",
    title: "Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life",
    imgUrl: "/assets/img/gallery/cinnamon.png",
    location: "Singapour",
    duration: "5 jours",
    originalPrice: 500,
    discountedPrice: 450,
    discountPercentage: "10%",
    isTrending: true
  },
  {
    url: "fihalhohi-island-resort",
    title: "Fihalhohi Island Resort: Luxury destination without compromise",
    imgUrl: "/assets/img/gallery/dhigu.png",
    location: "Maldives",
    duration: "7 jours",
    originalPrice: 700,
    discountedPrice: 630,
    discountPercentage: "10%",
    isTrending: false
  }
]

export const CarrousselItems: ICarrousselItem[] = [
  {
    cards: FlashDeals
  }
];