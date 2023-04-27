import { useEffect, useState } from "react";

const ProductList = ({category}: {category: string}) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return (
    <div>
      ProductList
      {/* <select
        className="form-select mb-3"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} /> */}
    </div>
  );
};

export default ProductList;
