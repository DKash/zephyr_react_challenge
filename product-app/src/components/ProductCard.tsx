import React from "react";

const ProductCard = () => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 8,
      padding: 16,
      width: 250,
      backgroundColor: "#f9f9f9"
    }}>
      <h3>The Lost Book</h3>
      <p>A curious boy discovers a mysterious book that leads him on an unexpected journey.</p>
      <strong>$39.90</strong>
    </div>
  );
};

export default ProductCard;
