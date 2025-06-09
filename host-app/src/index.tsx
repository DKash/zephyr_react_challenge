import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

const ProductCard = React.lazy(() => import('productApp/ProductCard'));

const App = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Suspense fallback={<div>Carregando produto...</div>}>
          <ProductCard />
          <ProductCard />
        </Suspense>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
