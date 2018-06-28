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

function start(){
    connection.query("SELECT * FROM products", function(err, results){
    inquirer
    .prompt([
        {
            name: "productId",
            type: "rawlist",
            choices: function(){
                var choiceArray = [];
                for (var i=0; i<results.length; i++){
                    choiceArray.push(results[i].item_name);

                }
                return choiceArray;
            },

            message:"What is the id of the product you want to buy?"

            },

            {
                name: "units",
                type: "input",
                message: "How many would you like to buy?"
            }
            ])
        

        .then(function(answer){
            var chosenItem;
            for (var i = 0; i<results.length; i++){
                if (results[i].product_name === answer.choice){
                    chosenItem = results[i];
                }
            }
        });
    
    });
}


    
