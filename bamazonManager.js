// list menu options products for sale, low inventory, inventory, new products

var inquire = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({

	host: "localhost",
	user: "Local instance MySql57",
	password: "root",
	database: "Bamazon"

});

connection.connect();


 inquire.prompt(
	[
		{
			type: "list",
			message: "What would you like to do?",
			choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
			name: "choice"
		}
	]).then(function(user){
		

		switch(user.choice){
			case ("View Products for Sale"):
				viewProducts();
			break;
			case ("View Low Inventory"):
				viewLowInventory();
			break;
			case ("Add to Inventory"):
				addInventory();
			break;
			case ("Add New Product"):
				addProduct();
			break;
		}

		
	})

