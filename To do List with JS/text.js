// Add a "checked" symbol when any item is clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI')
  {
    ev.target.classList.toggle('checked');
  }
}

// Creates a new list item when the "Add" button is clicked
function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue); li.appendChild(t);
  if (inputValue === ''){
    alert("Task cannot be empty!");
  }
  else { document.getElementById("myUL").appendChild(li);
}

//Creates a close button on each task created
document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
