//EXAMINE THEDOCUMENTOBJECT //

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 'Hello javascript';
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.styleSheets);
//console.log(document.all[5].textContent='ss');
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

// GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//headerTitle.textContent;
//headerTitle.innerText;
//console.log(headerTitle.innerHTML ='<span>logo</span>');
//headerTitle.style.fontSize='432px';

// GET ELEMEMENT BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[0]);
// console.log(items[1].style.backgroundColor="red");
// console.log(items[2].style.fontWeight="bold");

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "tomato";
// }


// GET ELEMEMENT BY CLASS NAME
// var li = document.getElementsByTagName('li');
// console.log(li[0]);
// console.log(li[1].style.backgroundColor="red");
// console.log(li[2].style.fontWeight="bold");

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = "tomato";
// }

// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.border='10px solid green';
// var input = document.querySelector('input');
// input.value ='hello world';
// var submit = document.querySelector('input[type="submit"]');
// submit.value="Send";
// var item = document.querySelector('.list-group-item');
// item.style.color ="red";
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color ="blue";


//QUERY SELECTOR ALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent= "Hello";
// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");
// for(var i = 0; i<odd.length; i++){
//     odd[i].style.backgroundColor = "yellow";
//     even[i].style.backgroundColor = "orange";
// }


// TRAVERSUBG THE DOM
// var itemList = document.querySelector('#items');
// parentNodes
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "tomato";
// console.log(itemList.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="red";

//childNodes
//console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// console.log(itemList.firstChild)
// console.log(itemList.firstElementChild.textContent='first child');
// console.log(itemList.lastElementChild.textContent='last child');


// nexSibiling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previusSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// Create Elements
// create a div
// var newDiv = document.createElement('div');

// create class
// newDiv.className = 'newClass';

// create id
// newDiv.id = 'newId';

// create attribute
// newDiv.setAttribute('title',  'this is attribute');
// newDiv.setAttribute('alt','this is alter');
// newDiv.setAttribute('area-label','label')

// create text node
// var newDivText = document.createTextNode("text for new div");

// add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = "30";

//Event listener
// var button = document.getElementById('button').addEventListener('click', buttonClick)

//function buttonClick(e){
    // console.log("button click");
    // document.getElementById('header-title').textContent = "Changed";
    // document.querySelector('input[type="submit"]'.vlue="sent");
    // var x = document.querySelector('input[type="submit"]').value="show";
    // console.log(x.value="sent");
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className)
    // var output = document.getElementById('output');
    // output.innerHTML = "<h3>"+e.target.classList+"</h3>";
    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
    // if(e.altKey == true){
    //     console.log("hello world");
    // }else{
    //     console.log("my bad");
    // }

//}
// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mousemove',runEvent);

// FORM GET DATA
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)
// itemInput.addEventListener('input', runEvent)

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log("EVENT TYPE: " + e.type);




    // if(e.type === 'cut'){
    //     document.body.style.background = "orange";
    // }else if(e.type === 'paste'){
    //     document.body.style.background = "tomato"
        
    // }


    // console.log(e.target.value);
    // document.getElementById("output").innerHTML = '<h2>'+    e.target.value +'</h2>';

    // output.innerHTML = '<h3>MouseX: '+ e.offsetX + '</h3><h3>MouseY: ' + e.offsetY+'</h3>';
    // box.style.backgroundColor = "rgb("+e.offsetY+","+e.offsetX+",100)";
}
