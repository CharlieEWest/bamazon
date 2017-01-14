var inquirer = require('inquirer');
var mysql = require('mysql');

mysql.createConnection({

	host: 'localhost',
	port: 3306,
	database: 'Bamazon',
	user: 'local instance MySQL57',
	password:'root',

});


connection.connect(function(err){
	if(err) {
		throw err;
	}
});

inquirer.prompt([{
	name: 'choice',
	message: '   ?',
	type: 'list',
	choices: [ 'item_id', 'product_name', 'department_name', 'price',]

}]).then(function (a) {

	if(a.choice === 'nothing I want'){
		console.log("Check back later"); 
	} else {
		shopItem();

	}
});


var    =  (item_id, product_name, department_name, price){ 
	this["item_id"] = id;
	this["product_name"] =  product_name;
	this["department_name"] = department_name;
	this["price"] = price;
}; 