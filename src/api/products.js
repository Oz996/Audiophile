import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("../../data.json");
  console.log(res.data)
  return res.data;
};