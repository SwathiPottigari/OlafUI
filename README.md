# Olaf

## Overview

Olaf is a community-driven, food service application which offers  both customer-side and seller-side interactivity. Once the user navigates to the home page, they can create an account as either a user/customer to purchase food items, or a chef/seller to sell their homemade goods. 

## Chef Experience

Once the chef has registered for an account, or logged in to their existing account they can create new food items by filling out the form to include relevant data such as dish name, quantity, ingredients, cuisine type, item description, or even a photo of their dish (uploaded via cloudinary widget). Data for the diah is displayed as a card in the chef dashboard where the chef can then go online. Once a chef's item is ordered they will recieve a text message (through the use of Twilio) notifying them of their order. 

Here is an example of a chef creating an item then posting it online.

![image of chef creating item](./public/image/chef.gif)

## Customer Experience

Once the customer has created an account or logged in, they are shown a Google map with carrot placeholders indicating all the locations of chef's in their area. The customer can click on any of these locations and all of the items listed under that chef will appear on the customer's dashboard. The customer can then add items to their cart and navigate to their shopping cart where they can confirm their final order. Once an order is placed, the customer will recieve a SMS message (via Twilio) providing them with the total cost and an address to pick up their purchased items. 

Here is an example of the customer shopping experience.

![image of customer dashboard](./public/image/user.gif)

[Here](https://olafui.herokuapp.com/) is a link to the deployed application. And below are some images showcasing some of the features of our application.

## Mobile Responsivness

Yes, our application is mobile responsive. It looks nice and functions well at all screen sizes. Here, have a look!

![desktop view](./public/image/desktop.gif) ![mobile view](./public/image/mobile.gif)

## Technologies Used

* React
* MDBootstrap
* MySQL
* Sequelize
* Axios (to connect with our backend API)
* React-Switch-Toggle (for toggle button)
* Google Geocoding (to convert the chef's address to latitude and longitude coordinates)
* Google Map API (to place chef's locations on the map)
* Cloudinary Widget (for photo upload and storage)
* Twilio (to send SMS text messages once orders are placed)
* Our backend server and database API can be seen [here](https://github.com/SwathiPottigari/OlafAPI)

## Contributors

Made in collaboration with:
* [Shivali Bhalla](https://github.com/sbc1133)
* [Swathi Pottigari](https://github.com/SwathiPottigari)
* [Willie Edwards](https://github.com/WillieEdwards)
* [Andrew Weiss](https://github.com/wandrew8)

Visit our github accounts to see more of our work. Thanks for visiting and finally a huge shoutout to all the support and assistance from our teacher, TAs, and fellow classmates!


