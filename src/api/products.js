import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("../../data.json");
  console.log(res.data);
  return res.data;
};
export const getProductBySlug = async (slug) => {
  const res = await axios.get("../../data.json");
  const product = res.data.find((item) => item.slug === slug);
  return product;
};