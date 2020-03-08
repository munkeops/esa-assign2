var cart =require('../controllers/cartController')

app.route('/cart')
.get(cart.list_all_cartitems)

app.route('/cart/:cartId')
.get(cart.read_a_cartitem)
.put(cart.update_a_cartitem)
.delete(cart.delete_a_cartitem);