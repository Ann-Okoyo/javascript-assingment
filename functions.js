// /You manage a grocery store and need to keep track of the inventory
//of various items. You will use arrays to store the data and various functions
//to manipulate and analyze the data.
//Create an array containing the names of all items in the inventory.
let inventory = ["book", "pen", "pencil", "textbook", "marker", "file"];
console.log(inventory);
//Create a separate array with the corresponding
// stock quantities of each item.
let inventorystorage=[20,60,80,30,70,40];
let supply={}
inventory.forEach((store,keep) => {
    supply[store]=inventorystorage[keep]
});
console.log(supply);
//Write a function to add a new item to
// the inventory, updating both arrays.
function keepinventory(box,carton) {
      inventory.push(box)
    inventorystorage.push(carton)
    console.log(box,carton);
}
keepinventory("covers",67)
// //Write a function to update the stock quantity of an existing item.
function changes(box,stuff) {
    let additional=inventory.indexOf(box)
    if (box === -1) {
        console.log(goods);
        return;
      }
      inventorystorage[box]=stuff;
      console.log(`${box } ${stuff}`);
}
changes("laptop",72)
// //Write a function to calculate the total number of items in the inventory.
function all() {
    let alltogether=0;
    for (let i = 0; i < inventorystorage.length; i++) {
        alltogether+=inventorystorage[i];
    }
    return alltogether;
}
let figures=all()
console.log(figures);
//Write a function to find the item with the lowest stock quantity.
function getsmall(){
    let smallest= Math.min(...inventorystorage);
    console.log(smallest);
}
getsmall()