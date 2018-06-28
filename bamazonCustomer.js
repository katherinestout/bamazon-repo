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

//running this application will first display all of the items available for sale

//then it should ask them what ID of the product they would like to buy
//then it should ask them how many units they would like to buy

//check if store has enough of the product to meet the customers request

//then it 
function start(){
    //query database for all products listed
    connection.query("SELECT id, product_name, price, stock_quantity FROM products", 
    function (err, results){
        if (err) throw err;
    
        for (var i =0; i<results.length; i++){
            console.log("yas");

    idandUnits(results);

        });
        }
    
    
    
    
    function idandUnits(items){

     inquirer
    .prompt([{ 
        name: "productId",
        type:"input",
        message:"What is the id of the product you want to buy?"
            
        },
        {
            name: "units",
            type: "input",
            message: "How many would you like to buy?"
        }])

//get information of the chosen item
    .then(function(answer){
        var chosenItem;

        for(var i = 0; i < results.length; i++){
            if (items[i].id === answer.productId){
                chosenItem = results[i];
                itsThere =true; //means it is in database
                break;
            }
        }
//if the product is NOT in the database...
if(!itsThere){
    console.log("Sorry, this product is not available! Please select another.");
    start();
}
else{
    console.log("Lucky day! It's available!")
}


    })
    {
        

    }

    });

}