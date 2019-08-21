"use strict";

let candy = [
    {
        product: "Gummy Worms", 
        price: 5.79
    },
    {
        product: "Plain M&Ms", 
        price: 2.89
    },
    {
        product: "Twizzlers", 
        price: 3.49
    },
    {
        product: "Twix", 
        price: 5.19
    },
    {
        product: "Kit Kat", 
        price: 5.59
    },
    {
        product: "Jolly Ranchers", 
        price: 4.79
    },
    {
        product: "Taffy", 
        price: 6.79
    },
    {
        product: "Starburst", 
        price: 2.99
    },
    {
        product: "Snickers", 
        price: 4.19
    },
    {
        product: "Dum Dum", 
        price: 1.99
    }
];

let products= candy.filter(c => c.price <5.00);

for ( let i=0; i < products.length; i++)
{
    console.log("Price:"+products[i].price)
}

// Find 

let candyType = "Chocolate"
let m= candy.find(c => c.product == candyType);

if (m== null)
{
    console.log (" We don't carry "+candyType)
}

else{
    console.log ("Price:"+m.price)
}