import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("../../data.json");
  console.log(res.data);
  return res.data;
};
export const getProduct = async (id) => {
  const res = await axios.get(`../../data.json`);
  const product = res.data.find((item) => item.id === id);
  return product;
};
