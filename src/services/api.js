export async function fetchProducts(page = 1) {
  const res = await fetch(`https://jeval.com.au/collections/hair-care/products.json?page=${page}`);
  if (!res.ok) throw new Error("Failed to load products");
  const data = await res.json();
  return data?.products ?? [];
}
