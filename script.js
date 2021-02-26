var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebutton = 10;

function createButton(li, deletebutton) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.classList.add("delete_listitem");
    btn.onclick = removeParent;

}

function createListItem(li) {
    li.appendChild(document.createTextNode(input.value + " "));
    ul.appendChild(li);
}

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        createListItem(li);
        createButton(li);
        input.value = "";
    } else {
        alert("Please enter some text in the input first");
    }
})

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        createListItem(li);
        createButton(li);
        input.value = "";
    } else if (input.value.length = 0 && event.keyCode === 13) {
        alert("Please enter some text in the input first");
    }
})

var deletebtn = document.getElementsByClassName("delete_listitem");

for (var i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
  }
