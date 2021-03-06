# Market/Webshop app

A small, easy to use webshop.

## Description

It's a webshop where you browse items and add them to your cart. Made to get familiar with the MEAN stack.


M - MongoDB
E - ExpressJS
A - Angular
N - NodeJS


I started this application as I wanted to get familiar with Angular. Then I found the MEAN stack and wanted to give it a try as I like the idea of it's simplicity.
Bear in mind that this is my first project with Angular, MongoDB and ExpressJS


## Getting Started

### Dependencies

MongoDb, Angular and ExpressJS needs to be installed (if using Windows, 
MongoDb and ExpressJS should be added to env variables to be able to use their commands globally)

### Installing

* Clone the program to a folder
* Add a database called "market" and add a collection(named DEALS) to it.
* After you added the table, you should import the JSON from Market-Angular/mongo-db/deals.json
* Add a collection(names CART) to the market database and import the JSON from Market-Angular/mongo-db/cart.json
* Open market-service, run npm install , after it's done, run the same command in market folder.
* Navigate to market-service and run npm start command, and do the same in market folder.
* Open browser and navigate to localhost:4200

### Executing program

* If you want to enable hot reload on market-service, install nodemon to run it in hot reload.

### Features done (updating as I move forward in the project)
* Reading items from database
* Adding items to cart
* Progress bar when loading something
* Notification about data load has been done
* Light/Dark theme switcher


### Features planned
* Deleting from cart is in progress
* I want to populate every item in the store with more details(such as price, quantity)
* Filter ingredients by new details
* Checkout-page
* Search on page
* User register/login
* UI Refactor
* UI Notifications for every action

## Help

If you need any help please contact me on GitHub or via my e-mail.
