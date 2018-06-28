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
    connection.query("SELECT * FROM products", function(err, results){
    inquirer
    .prompt([
        {
            
            name: "productId",
            type: "input",
            choices: "View Products for Sale!",
            //message:"Enter the product you want to buy!"
            },
            {
                name: "units",
                type: "input",
                message: "How many would you like to buy?"
            }
            ])
        
        .then(function(answer){
            if(answer.options === "View Products for Sale"){
                viewProducts();
            };
        });

    
