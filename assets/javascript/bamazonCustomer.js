var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3300,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What is the ID of the product that you want?",
      choices: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "[EXIT]"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "01":
          quantityPrompt();
          break;

        case "02":
          quantityPrompt();
          break;

        case "03":
          quantityPrompt();
          break;

        case "04":
          quantityPrompt();
          break;

        case "05":
          quantityPrompt();
          break;

        case "06":
          quantityPrompt();
          break;

        case "07":
          quantityPrompt();
          break;

        case "08":
          quantityPrompt();
          break;

        case "09":
          quantityPrompt();
          break;

        case "10":
          quantityPrompt();
          break;

        case "[EXIT]":
          connection.end();
          break;
      }
    })
};

function quantityPrompt() {
  inquirer
    .prompt({
      name: "purchaseQuantity",
      type: "input",
      message: "Quantity of item(s) being sold?"
    }).then(function(answer){
      var query = "SELECT item_id FROM products WHERE ?"
      connection.query(query, {purchaseQuantity: answer.purchaseQuantity}, function(req, res){
        for (var i = 0; i < req.length; i++){
          console.log("Item ID : "+ res[0].item_id);
          console.log("Position: " + req[i]);
        }
        // console.log("Item ID : "+ req[i].product_name);
        runSearch()
        
      })
    })
};