export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  previousPrice?: number;
  mileage: number;
  exteriorColor: string;
  exteriorColorHex: string;
  interiorColor: string;
  interiorColorHex: string;
  matchPercent: number;
  badge?: "excellent-price" | "price-drop";
  estimatedMonthly: number;
  dealerName: string;
  dealerDistance: number;
  hasWarranty: boolean;
  isInspected: boolean;
  ownerCount: number;
  imageUrl: string;
}

export interface FilterTag {
  id: string;
  label: string;
  removable: boolean;
}

export interface SearchState {
  query: string;
  totalResults: number;
  sortBy: string;
  filters: FilterTag[];
  vehicles: Vehicle[];
}
