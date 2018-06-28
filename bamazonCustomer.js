//depedencies

var mysql = require("mysql");
var inquirer = require("inquirer");

//establish the connection
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
    
    user: "root",

    password: "",
    database: "bamazon_db"
});

//connect to the mysql server and sql database
connection.connect(function(err){
    if(err) throw err;
    start();
});
//selecting all of the products
function start(){
    //connection.query("SELECT * FROM products", function(err, results){
    inquirer
    .prompt(
        {
            
            //name: "productId",
            //type: "input",
            //choices: ["View Products for Sale!"],
            //message:"Enter the product you want to buy!",
            //checkProduct();
            name: "choice",
            type: "rawlist",
            message: "View all of our [PRODUCTS] for sale, or [LIST] an item",
            choices: ["PRODUCTS", "LIST"]
            //},
            //{
             //   name: "units",
              //  type: "input",
              //  message: "How many would you like to buy?"
            })
            .then(function(answer){
                if (answer.start.toUpperCase() === "PRODUCTS"){
                    products();
                }
                else {
                    list();
                }
            });
        }

function products(){
    connection.query("SELECT * FROM products", function(err, results){
    if (err) throw err;

    inquirer
    .prompt([
        {
    name: "productsUnits",
    type: "rawlist",
    choices: function() {
    var choiceArray = [];
    for (var i = 0; i < results.length; i++) {
    choiceArray.push(results[i].product_name);
    }
     return choiceArray;
     },
    message: "Which Product?"
    },
    {
    name: "units",
    type: "input",
    message: "How many units would you like?"
    }
    ])
   // .then(function(answer){}


