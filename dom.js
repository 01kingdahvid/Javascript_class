console.log("////DOM////");

//Selecting html elements from DOM
//getElementByTagName, getElementById, getElementByClassName
//using querySelectors


//getElementByTagName
const justDeyPlay = document.getElementsByTagName("h1")
console.log(justDeyPlay);

//loop through each h1
for (const h1 of justDeyPlay){
    console.log(h1.style.backgroundColor = 'red');
    h1.style.color = "white";
}


//getElemtById
const idPara = document.getElementById("paraId")
console.log(idPara);

setTimeout(() =>{
idPara.style.backgroundColor = "blue"
}, 5000)

// getElementByClassName

const cls = document.getElementsByClassName('para')
console.log(cls);

//we access collection using loop or index to grab it

console.log(cls[0]);
console.log(cls[0].innerHTML); // grabbing the content in <p></p>
// console.log(cls[0].innerHTML = 'Changed by KIng David');


//Using querySelectors
// querySelector- selects first of type element
// querySelectorAll - selects all elements of the type

const list = document.querySelectorAll('p');
console.log(list[2].style.backgroundColor = "black"); 
console.log(list[1].style.backgroundColor = "brown");

const image = document.getElementsByTagName('img')
console.log(image);
// console.log(image[0].src);
// http://127.0.0.1:5500/images/HD-wallpaper-marcus-rashford-iphone-mario-emblem%20(2).jpg

// image[0].src = 'https://w7.pngwing.com/pngs/932/113/png-transparent-marcus-rashford-thumbnail.png'

// setTimeout(() =>{
//     image[0].src = 'https://w7.pngwing.com/pngs/932/113/png-transparent-marcus-rashford-thumbnail.png';
//     }, 2000)


///////////////////////////////////////

// function changeImages() {
//     setInterval(() => {
//     setTimeout(() => {
//         image[0].src = "https://w7.pngwing.com/pngs/200/321/png-transparent-marcus-rashford-football-player-sport-t-shirt-fifa-world-player-of-the-year-marcus-tshirt-jersey-shoe-thumbnail.png"
//     }, 2000);
//     setTimeout(() => {
//         image[0].src = 'https://w7.pngwing.com/pngs/932/113/png-transparent-marcus-rashford-thumbnail.png'
//     }, 3000);
//     setTimeout(() => {
//         image[0].src = 'https://w7.pngwing.com/pngs/973/540/png-transparent-marcus-rashford-jersey-football-player-marcus-rashford-tshirt-jersey-football-player-thumbnail.png'
//     }, 4000);
//     setTimeout(() => {
//         image[0].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-CMF3N7Prej_ZLzj7UsJX6NHbO_UOTtluA&usqp=CAU'
//     }, 5000);
// }, 5000);
// } 
// changeImages()
// console.log(img[0].innerHTML);

// John
const imgPic =document.getElementById("my-img")
// console.log(imgPic);
let images = ["https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LqlsTaYohSsqGmjAYlzQNzveGxzFd9xoY5OBhA_zOA&s", "https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863"];
    let currentImageIndex = 0;

    function changeImage() {
      currentImageIndex ++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      imgPic.src = images[currentImageIndex]; //0, 1, 2, 33
    
    }
    setInterval(changeImage, 6000);


///////////////////////////////////////


// //creaing html elements
// //createElement

// let bob = document.createElement('div');
// bob.className = 'create' /// <div class = "create"> </div>;
// bob.innerHTML = '<p>This is inside div</p>'
// // div.appendChild = '<a>This is inside div</a>'
// console.log(bob.children);
// //inner html is not good to add multiple children
// // document.body.prepend(div); // at the begining of the body
// document.body.append(bob); // at the bottom of the body
// bob.insertAdjacentHTML('beforehand', '<p>This is inside div</p>')

// console.log(bob.children);
// console.log(bob.innerHTML);
/////////////////////////////////////////







// Creating html elements 
// createElement
let bob = document.createElement('div');
bob.className = 'create' // <div class="create"></div>
bob.innerHTML = '<p>Ths is inside div</p>'
console.log(bob.children);

// To display on the DOM
// document.body.prepend(bob); // At the beginning of body
document.body.prepend(bob); // At the end of body
bob.insertAdjacentHTML('beforeend', '<p>This is the first item inside our div</p>')
console.log(bob.innerHTML);

//Adding and removing css classes

bob.classList.add('dark');
// setTimeout(() =>{
//     bob.classList.remove('dark');
//     bob.classList.add('create');
// }, 5000 )

//JAVASCRIPT EVENTS
// an event is simply a signal that something happened 
// click event, mouse event, form events, focus events, load events, scroll events, resize events (etc)

function showMsg(){
    console.log("Event triggered...");
    bob.classList.remove('dark');
    bob.classList.add('create');

}
const btn = document.getElementById('btn');

// adding event listening
bob.addEventListener('mouseover', showMsg);







