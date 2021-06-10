interface Rent {
  period: string;
  price: number;
}

interface Acessory {
  type: string;
  name: string;
}

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: Rent;
  fuel_type: string;
  thumbnail: string;
  accessories: Acessory[];
  photos: string[];
}
