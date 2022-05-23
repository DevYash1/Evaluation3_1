//store the products array in localstorage as "products"
function PumaProduct(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

var add = document.querySelector("#add_product");
add.addEventListener("click", addProduct);
var productarray = JSON.parse(localStorage.getItem("products")) || []  ;
function addProduct(){
    event.preventDefault();
    // console.log("clisked")
    var type = document.querySelector("#type").value;
    var desc = document.querySelector("#desc").value;
    var price = document.querySelector("#price").value;
    var image = document.querySelector("#image").value;

    var product = new PumaProduct(type, desc, price, image);
    productarray.push(product);
    localStorage.setItem("products", JSON.stringify(productarray));
    
}
