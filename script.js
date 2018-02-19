var cart = [];


var Item = function(name, price,quantity){
  this.name=name;
  this.price=price;
  this.quantity=quantity;
};
var tea = new Item("Tea",1.99,1);
var coffee = new Item("Coffee", 2.99,1);

function addToCart(item){   

  for(var j in cart){
        if(cart[j].name === item.name){
              item.quantity ++;
              return;
        } 
  }
  cart.push(item);    

  printShoppingCart(item);




}


function printShoppingCart(item){
            var cartList = document.getElementById("ShoppingCart");
           // var itemRow = document.createElement("tr");
           // var tabledata = document.createElement("td");
           // var tabledataPrice = document.createElement("td");

            //var itemText = document.createTextNode(item.name);
            //var itemPrice = document.createTextNode(item.price);
            cartList.appendChild(document.createElement("tr")).appendChild(document.createElement("td")).appendChild(document.createTextNode(item.name));
           // cartList.appendChild(document.createElement("tr")).appendChild(document.createElement("td")).appendChild(itemPrice);
        
     
}



  
 