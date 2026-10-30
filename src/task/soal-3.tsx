import { useState } from "react";

const ProductCategory = {
  ELECTRONICS: "ELECTRONICS",
  FASHION: "FASHION",
  FOOD: "FOOD",
} as const;

type ProductCategoryType =
  (typeof ProductCategory)[keyof typeof ProductCategory];

interface Product {
  id: string | number;
  productName: string;
  category: ProductCategoryType;
  price: number;
  discount?: number;
  warranty?: string;
}

export function ProductCard() {
  const [product, setProduct] = useState<Product>({
    id: "P-01",
    productName: "Kemeja Polos",
    category: ProductCategory.FASHION, 
    price: 150000,
  });

  const handleRestockNewProduct = () => {
    const barangBaru = {
      id: 99,
      productName: "Mechanical Keyboard Wireless",
      category: ProductCategory.ELECTRONICS,
      price: 750000,
      discount: 10,
    };
    setProduct(barangBaru as Product);
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}
    >
      <h2>{product.productName}</h2>
      <p>Kategori: {product.category}</p>
      <p>Harga: Rp {product.price.toLocaleString("id-ID")}</p>
      {product.discount && <p>Diskon: {product.discount}%</p>}

      <button onClick={handleRestockNewProduct}>Restock Barang Baru</button>
    </div>
  );
}
