export interface Product {
  id: number;
  name: string;
  price: number;
}

export function validateProduct(product: Product): Product {
  if (!/^[A-Za-z]+$/.test(product.name)) {
    throw new Error("Product name must contain only alphabets.");
  }

  if (product.price <= 0) {
    throw new Error("Product price must be greater than 0.");
  }

  return product;
}