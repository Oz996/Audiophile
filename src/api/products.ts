import axios from "axios";
import { Product } from "../../types/types";

export const getProducts = async ():Promise<Product[] | undefined> => {
  const res = await axios.get("../../data.json");
  console.log(res.data);
  return res.data;
};
export const getProductBySlug = async (slug: string) => {
  const res = await axios.get("../../data.json");
  const product = res.data.find((item: Product) => item.slug === slug);
  return product;
};
