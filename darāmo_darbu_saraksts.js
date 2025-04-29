var button = document.getElementById("enter"); //Izveido pogu enter
var input = document.getElementById("userinput"); //Lauciņš kur ierakstīt jaunu darbu
var ul = document.querySelector("ul"); //Izveido sarindotu sarakstu


function inputLength() {
    return input.value.length;
}

function createListElement() { //Sastāda sarakstu
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    // Izveido pogu
    var btnDelete = document.createElement("button");
    btnDelete.classList.add("Dzēst"); //Dzēst poga
    btnDelete.textContent = "Dzēst";
    
    // Izveido sarakstu
    li.appendChild(btnDelete);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteAfterClick(event) {
  // Nosaka vai tika nopsiesta poga 'dzēst'
  if(event.target.classList.contains("delete")){
    // Noņem līdzīgāko elementu
    event.target.closest("li").remove();
  }

}

button.addEventListener("click", addListAfterClick);


input.addEventListener("keydown", addListAfterKeypress);

// Handle all the clicks that originate from within the <ul> at
// the <ul> level when they bubble up to it instead of setting each
// button within the <ul> up with its own click event handler.
ul.addEventListener("click", deleteAfterClick);