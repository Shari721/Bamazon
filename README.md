# Bamazon

This customer interface, BAMAZON, allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order..

The app was designed with NPM inquirer package and MYSQL database.

to run this interface you will need to follow these steps:

git clone https://github.com/Shari721/Bamazon.git
cd bamazon
npm install
node bamazonCustomer.js
