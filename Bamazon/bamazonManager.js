var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table");

// Define the MySQL connection parameters
var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "Bamazon"
}); //end connection info
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id: " + connection.threadId);
  promptAction();
}); //end connection function
//connection.query ('Select *')
function promptAction() {
  connection.query("select * From products", function(err, res) {
    if (err) throw err;
    var displayTable = new Table({
      head: ["Item ID", "product Name", "Catergory", "Price", "Quantity"],
      colWidths: [10, 25, 25, 10, 14]
    }); //end var display
    for (var i = 0; i < res.length; i++) {
      displayTable.push([
        res[i].item_id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity
      ]); //end display table push
    } //end for loop

    //purchasePrompt({"product_name":"toy"});

    console.log(displayTable.toString());
    //purchasePrompt();

    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "Please enter Item Id to make a purchase."
        },
        {
          type: "input",
          name: "Quantity",
          message: "How many items would you like to purchase?"
        }
      ])

      /* validate: function(value) {
          if (isNaN(value) == false) {
            return true;
          } //end if statement
          else {
            return false;
          } //end else statement
        } //end validate function
      }
    ])*/

      .then(function(answer) {
        // console.log("answers:");
        //console.log(answer);
        //console.log("items:");
        //console.log(items);
        var idWanted = answer.id;
        var quantityNeeded = parseInt(answer.Quantity);
        connection.query(
          "select * from products where item_id= " + idWanted,
          function(err, selectedItem) {
            if (err) throw err;
            if (selectedItem[0].stock_quantity - quantityNeeded >= 0) {
              console.log(
                "The current inventory has: " +
                  selectedItem[0].stock_quantity +
                  " and Order Quantity: " +
                  quantityNeeded
              );
              console.log(
                "Yay Bamazon has enough stock to fill your order of the " +
                  selectedItem[0].product_name +
                  "."
              );
              console.log(
                "Thank you for your purshase of " +
                  selectedItem[0].product_name +
                  ". Your total is: $" +
                  (quantityNeeded * selectedItem[0].price).toFixed(2) +
                  ". Thank you for shopping at Bamazon!"
              );
              connection.query(
                "update products set stock_quantity=? WHERE item_id=?",
                [selectedItem[0].stock_quantity - quantityNeeded, idWanted],
                function(err, inventory) {
                  if (err) throw err;
                  promptAction();
                }
              );
            } else {
              console.log(
                "Sorry the " +
                  selectedItem[0].product_name +
                  " has the quantity of " +
                  selectedItem[0].stock_quantity +
                  ". Please Make another selection or select a quantity that we have available. Thank you for shopping Bamazon. We hope to hear from you soon."
              );
              promptAction();
            }
          }
        );
      });
  });
}
//     for (var i = 0; i < items.length; i++) {
//         var product = items[i];
//         if (idWanted == product.item_id) {
//           if (product.stock_quantity >= quantityNeeded) {
//             console.log(
//               "Thank you for your purshase of " + product.product_name
//             );
//             console.log(
//               "Your total is : $" + (product.price * quantityNeeded).toFixed(2)
//             );
//           } else {
//             console.log(
//               "sorry We do not have stock on " + product.product_name + "."
//             );
//           }
//         }
//         connection.query(
//           "update products set stock_quantity = stock_quantity-" +
//             quantityNeeded +
//             " where item_id = " +
//             idWanted
//         );
//       }
//     });
// }
