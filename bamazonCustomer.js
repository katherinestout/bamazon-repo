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
});



function displayInventory(){
    queryStr = "SELECT * FROM products";

	// Make the db query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the user for item/quantity they would like to purchase
	start();
	})
}



function start(){
    inquirer.prompt({
        name: "itemId",
        type: "input",
        //validate: validateInput,
        message: "what is the id of the item you want to buy?"
    },
    {
        type: "input",
        name: "units",
        message: "How many units do you need?",
       //validate: validateInput

    }
        
    ).then(function(input){
        var item = input.itemId;
        var unit = input.units;

        var queryStr = "SELECT * FROM products WHERE?";

        connection.query(queryStr, {itemId: item}, function (err, data){
            if (err) throw err;

      
        })})}


