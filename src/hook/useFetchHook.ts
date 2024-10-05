import { useEffect, useState } from "react";
import { productFetch } from "@/api/productFetch";
import { ProductProps } from "@/types/types";

const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await productFetch();
      if (response) setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default useFetchProducts;
