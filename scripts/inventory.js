document.querySelector("#add_more_product").onclick = function (){
    location.href = "index.html";
}

var alldetails = JSON.parse(localStorage.getItem("products"));
console.log(alldetails);
alldetails.forEach(function (elem, index){


    var division  = document.createElement("div");
    division.setAttribute("id", "productdiv")

    var tdata1 = document.createElement("h3");
    tdata1.innerText = elem.type;

    var tdata2 = document.createElement("h3");
    tdata2.innerText = elem.desc;

    var tdata3 = document.createElement("h3");
    tdata3.innerText = elem.price;

    var img = document.createElement("img");
    img.setAttribute("src", elem.image);
    
    var removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.setAttribute("id", "remove_product");

    removeBtn.addEventListener("click", function(){
        removeFun(elem, index);
    })

    document.querySelector("#all_products").append(division);
    division.append(img, tdata1, tdata2, tdata3, removeBtn);

    function removeFun(elem, index){{
        alldetails.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(alldetails));
        window.location.reload();
    }}
});