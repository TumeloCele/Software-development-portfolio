class Order:
    def __init__(self, order_id, customer_name, items):
        self.order_id = order_id
        self.customer_name = customer_name
        self.items = items

    def calculate_total(self):
        total = 0
        for item in self.items:
            total += item["price"] * item["quantity"]
        return total

    def display_order_details(self):
        print("Order ID:", self.order_id)
        print("Customer:", self.customer_name)
        print("Items:")
        for item in self.items:
            print(f"- {item['name']}: {item['quantity']} x R{item['price']}")
        print("Total:R", self.calculate_total())


order_id = input("Enter the order ID: ")
customer_name = input("Enter the customer name: ")

items = []
while True:
    item_name = input("Enter item name (or 'done' to finish): ")
    if item_name.lower() == "done":
        break
    item_quantity = int(input("Enter item quantity: "))
    item_price = float(input("Enter item price: "))
    item = {"name": item_name, "quantity": item_quantity, "price": item_price}
    items.append(item)

order = Order(order_id, customer_name, items)
order.display_order_details()
