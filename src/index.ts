import { OrderService } from "./OrderService";
import { Product } from "./Product";
import { filterExpensiveProducts } from "./utils";

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 80 },
  { id: 3, name: "Mouse", price: 35 },
];

const orderService = new OrderService();
const order = orderService.createOrder(products);
const total = orderService.calculateTotal(order);
const discountedTotal = orderService.applyDiscount(order, 10);
const expensiveProducts = filterExpensiveProducts(products, 100);

console.log("Order:", order);
console.log("Total:", total);
console.log("Total after discount:", discountedTotal);
console.log("Expensive products:", expensiveProducts);