import { Order } from "./Order";
import { Product, validateProduct } from "./Product";

export class OrderService {
  private nextOrderId = 1;

  createOrder(products: Product[]): Order {
    products.forEach(validateProduct);

    const order: Order = {
      id: this.nextOrderId,
      products: [...products],
    };

    this.nextOrderId += 1;
    return order;
  }

  calculateTotal(order: Order): number {
    return order.products.reduce((total, product) => total + product.price, 0);
  }

  applyDiscount(order: Order, discount?: number): number {
    if (discount === undefined) {
      return this.calculateTotal(order);
    }

    if (discount < 0 || discount > 100) {
      throw new Error("Discount must be between 0 and 100.");
    }

    order.discount = discount;
    const total = this.calculateTotal(order);
    return total - total * (discount / 100);
  }
}