/*Declare variables*/
let addbutton = document.getElementById("btnadd");
let listdiego = document.getElementById("uldiego");
let uldiego = document.getElementsByClassName("uldiego");
let textin = document.getElementById("intext");

/*button click event*/
addbutton.onclick = addElement;

/*Function to add elements*/
function addElement() {
  let usertext = document.getElementById('intext').value;
  let text = document.createTextNode(usertext);
  let listitem = document.createElement("li");
  let checkBox = document.createElement('input');
  let inEleButton = document.createElement('button');

  checkBox.type = "checkbox";
  checkBox.setAttribute("onclick", "selectedItem");
  checkBox.className = "checkBox"; //to identify
  inEleButton.innerHTML = "Delete";
  inEleButton.className = "delbtn";
  inEleButton.id = "deletebutton";
  if (usertext === '') {
    alert("You must write something!");
  } else {
    //document.getElementById("myUL").appendChild(li);
    listdiego.appendChild(listitem);
    listitem.appendChild(text);
    listitem.appendChild(checkBox);
    listitem.appendChild(inEleButton);
  }
  //after add, now clean the field
  document.getElementById("intext").value = "";
  let checkboxSelectedItem = document.getElementsByClassName("checkBox"); //with "checkBox" -VM246:1 Uncaught ReferenceError:
  console.log(checkboxSelectedItem);

  let deleteClickedItem = document.getElementsByClassName("delbtn");
  console.log(deleteClickedItem);

  let ulItems = document.querySelectorAll("ul");
  
  for (i = 0; i < checkboxSelectedItem.length; i++) {
    checkboxSelectedItem[i].onclick = function (e) {
      let item = document.getElementsByClassName("uldiego");
      //let li2 = this.parentElement;
      //let actualelement = e.target.nextElementSiblig;
      let li = this.parentElement;
      console.log(item);

      if(li.style.textDecoration == "line-through"){
        li.style.textDecoration = ""; // this line works but its not possible to remove the line when unselected
        li.style.color = "white";
        //item.appendChild(li);
        ul.appendChild(li);
      }else{
        li.style.textDecoration = "line-through"; // this line works but its not possible to remove the line when unselected
        li.style.color = "darkred";
        //ulItems.checkboxSelectedItem.length.appendChild(elementClicked);
        
        /*ssendToTheEnd;*/
      }
      //item.appendChild(li);
      /*ulItems.appendChild(li);*/
    }
  }

  function sendToTheEnd(e){
    let elementClicked = e.target;
    ulItems.appendChild(li);
    
    /*divweaher.appendChild(elementClicked);
    */
  }

  //delete working
  for (i = 0; i < deleteClickedItem.length; i++) {
    deleteClickedItem[i].onclick = function () {
      let li = this.parentElement;
      let parent = li.parentElement;
      parent.removeChild(li);
    }
  }

}


if ('ondevicelight' in window) {
  window.addEventListener('devicelight', function(event) {
    var body = document.querySelector('body');
    console.log('value: '+event.value);
    if (event.value < 50) {
      body.classList.add('darklight');
      body.classList.remove('brightlight');
    } else {
      body.classList.add('brightlight');
      body.classList.remove('darklight');
    }
  });
} else {
  console.log('devicelight event not supported');
}


/*

// Create a list with all the created items of the list
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  myNodelist[i].appendChild(document.getElementById('deletebutton'));
}
let inputfield = document.getElementsByName('input');

// Add a "checked" symbol when clicking on a list box
let list = document.querySelector('ul'); //ul
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/

/*This part just contains all the code that I use to try the process to delete the items */

/*
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("delbtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/
/*
let chkbox = document.getElementById("checkbox");
//chkbox.onclick = selectedItem;

// Click on a close button to hide the current list item
//var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function selectedItem(e){
    let p = e.target;
    
    var checkBox = document.getElementById("checkbox");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        className = "Checked";
    } else {
        className = "UnChecked";
    }
}
*/