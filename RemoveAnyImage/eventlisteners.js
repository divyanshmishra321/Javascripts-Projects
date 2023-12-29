// Event Listeners are the methods used for to handle any action by users and perform any task acc to that event
// imp to learn--
// type,timestamp,defaultprevent
// target,toelement,srcElement,currentTarget,
//clientX,clientY,screenX,screenY
// altkey,ctrlkey,shiftkey,keycode

// document.getElementById('owl').onclick = function(){
//         alert("owl clicked")
//     }

//     document.getElementById('images').addEventListener('click', function(e){
//         console.log("clicked inside the ul");
//     }, false)

//     document.getElementById('owl').addEventListener('click', function(e){
//         console.log("owl clicked");
//         e.stopPropagation() //this will stop propogation and bubblng of any element
//     }, false)

//     document.getElementById('google').addEventListener('click',function(e){
//         e.preventDefault();//this will prevent the default behaviour of any event
//         e.stopPropagation();//this will stop propogation and bubblng of any element
//         console.log("google clicked");
//     }, false)

// project to remove any image on every click

// we will take main reference of UL

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    let childcheck = document.querySelector("ul");

    if (childcheck.hasChildNodes() === true && e.target.tagName === "IMG") {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove(); //will remove the element completely
    } else {
      error();
    }
  },
  false
);

function error() {
  childcheck = false;
  if (childcheck === false) {
    const p = document.querySelector("#para");
    p.innerHTML = `<h1>Oops! its Done</h1>`;
  }
}

document.querySelector("#reset").addEventListener(
  "click",
  function (e) {
    location.reload(); //this will again refresh the page
  },
  false
);
