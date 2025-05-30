
function buyNow(name, price) {
      let orders = JSON.parse(localStorage.getItem('orders')) || [];

      // Create a new order with default qty=1 and no size
      const newOrder = {
        name: name,
        qty: 1,
        size: '', // no size selected here
        price: price
      };

      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));
      alert(Order placed for "${name}". Thank you for your purchase!);
    }
