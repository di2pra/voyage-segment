export type IFlashDeal = {
  url: string;
  title: string;
  imgUrl: string;
  duration: string;
  location: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: string;
  isTrending: boolean;
}

export type ICarrousselItem = {
  cards: IFlashDeal[]
}

export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}