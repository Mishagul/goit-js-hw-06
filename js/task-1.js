const customer = {
discount: 0,
balance: 10000,
orders: [],

getDiscount() {
    return this.discount;
},

setDiscount(newDiscount) {
    this.discount = newDiscount;
},

getBalance() {
    return this.balance;
},

getOrders() {
    return this.orders;
},

addOrder(cost, orderName) {
    this.orders.push(orderName);
    this.balance -= cost * (1 - this.discount);
}
};

console.log(customer.getDiscount());
customer.setDiscount(0.15);
console.log(customer.getDiscount());

console.log(customer.getBalance());
customer.addOrder(5000, "Steak");
console.log(customer.getBalance());
console.log(customer.getOrders());
