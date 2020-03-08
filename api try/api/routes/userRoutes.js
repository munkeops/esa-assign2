
'use strict';


module.exports = function(app) {

var product = require('../controllers/userController');
app.route('/Users')
    .get(product.list_all_users)
    .post(product.create_a_user);


app.route('/Users/:username')
    .get(product.read_a_user)
    .put(product.update_a_user)
    .delete(product.delete_a_user);



};
