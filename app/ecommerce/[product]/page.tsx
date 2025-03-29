import React from "react";

const Product = async ({ params }: { params: { product: string } }) => {
  const { product } = await params;
  return <div>Product</div>;
};

export default Product;
