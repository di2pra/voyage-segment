export type IFlashDeal = {
  title: string;
  imgUrl: string;
  duration: string;
  location: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
}

export type ICarrousselItem = {
  cards: IFlashDeal[]
}