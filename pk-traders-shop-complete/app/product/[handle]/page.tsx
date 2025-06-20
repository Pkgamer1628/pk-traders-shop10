'use client';
export default function ProductPage({ params }) {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Product: {params.handle}</h1>
      <p>Product details will be fetched from Shopify.</p>
    </main>
  );
}