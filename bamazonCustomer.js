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
    displayInventory();
    start();
});



function displayInventory(){
    queryStr = "SELECT * FROM products";

	// Make the db query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
            strOut += 'Department: ' + data[i].department_name + '  //  ';
            strOut += 'Stock Quantity:' + data[i].stock_quantity + ' // ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the user for item/quantity they would like to purchase
	start();
	})
}




function start(){
    inquirer.prompt([{
        //which item would they like to buy?
        name: "itemId",
        type: "input",
        message: "what is the id of the item you want to buy?",
    },
    //how many units of selected item?
    {
        type: "input",
        name: "itemQuantity",
        message: "How many units do you need?",
       validate: function(value){
           if (isNaN(value) === false){
               return true;
           } else {
               return false;
           }
       }

    }]).then(function(answer){
        connection.query("SELECT * FROM products WHERE id =?", [answer.itemId], 
    function(err, res){
        if (answer.itemQuantity > res[0].stock_quantity){
            console.log("Sorry try again!")
            displayInventory();
        }
        else {
            var checkout = res[0].price * answer.itemQuantity;
            console.log("your total is: $" + checkout);

        }})})}