import React from "react";
import ReactDOM from "react-dom/client";
import ProductCard from "./components/ProductCard";

const App = () => (
  <div style={{ padding: 20 }}>
    <h1>Product App</h1>
    <ProductCard />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
