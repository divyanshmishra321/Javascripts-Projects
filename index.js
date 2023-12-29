const admin = document.querySelector("#admin");

admin.addEventListener("click", PopUpForm);

function PopUpForm() {
  document.querySelector("#linkForm").style.display = "block";
  document.querySelector("#admin").style.display = "none";

  document.querySelector("#linkForm").innerHTML = ` <form>
<div class="inputfieldBlock">
    <div class="inputfield"><label>Enter Link of Project => </label><input id="link" type="url"></div>
    <div class="inputfield"> <label>Enter Title => </label><input id="title" type="text"></div>
</div> </form>
<div class="btn" onclick="createLink()" id="CreateLink">Create Link</div>
<div class="btn" onclick="closeForm()" id="close">Close form</div>`;
}

function closeForm() {
  document.querySelector("#admin").style.display = "flex";
  document.querySelector("#linkForm").style.display = "none";
}

function createLink() {
  // Get the input element
  const input = document.querySelector("#link");
  const title = document.querySelector("#title");

  // Get the value of the input element
  const inputValue = input.value;
  const titleValue = title.value;


  console.log(inputValue);

  if (inputValue==='' || titleValue==='') {
    alert('enter valid inputs')
    closeForm()
  }
  else{
// Create a new anchor element
const anchor = document.createElement("a");
anchor.classList.add("link");
// Taking Its Parent reference so that we can add this child in it 
const parentNode = document.querySelector("#links");
// parentNode.appendChild(anchor);
parentNode.appendChild(anchor).innerHTML = `<a href="${inputValue}" target="_blank" class="link">${titleValue}</a>`;

closeForm();
  }

  
}

