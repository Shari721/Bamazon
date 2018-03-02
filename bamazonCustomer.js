var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("easy-table");
const cTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  displayInventory();

});

 function displayInventory(){
	  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    console.table(res);
    questions();
 
  });


function questions() {
  inquirer
    .prompt([
    {
      name: "Q1",
      type: "input",
      message: "What is the ID of the item you would like to purchase?",
     },
     {
      	name: "quantity",
    	type: "input",
     	message: "How many units of this item would you like to buy?",
}])

    .then(function(answers) {
    
 var query = 'SELECT stock_quantity, price, product_name FROM products WHERE ?';
        connection.query(query, { id: answers.Q1 },
          function (err, res) {
          
            if (answers.quantity > res[0].stock_quantity) {
              console.log("\r\n*********************************");
              console.log("Not Enough Quantity Available!");
              console.log("*********************************");
              questions();
            }
            else {
              console.log("Order Summary:");
              console.log("Total Cost $" + (res[0].price * answers.quantity));
              console.log(res[0].product_name + " Quantity Remaining: " +
                (res[0].stock_quantity - answers.quantity) + "\n");
              console.log("\nOur stock has been updated. Thank you!\r\n");
              //updateStock();

              questions();
            }
    });
});
  }
}

