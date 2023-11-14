export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string;
  price: number;
  slug: string;
  new: boolean;
  categoryImage: CategoryImage;
  gallery: Gallery;
  image: ProductImage;
  includes: Includes;
  others: Others;
  item: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CategoryImage {
  desktop: string;
  mobile: string;
  tablet: string;
}

interface Gallery {
  first: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  second: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  third: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
}

interface ProductImage {
  desktop: string;
  mobile: string;
  tablet: string;
}

interface Includes {
  item: string;
  quantity: Includes;
}

interface Others {
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  name: string;
  slug: string;
}
