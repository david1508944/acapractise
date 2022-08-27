const text = document.querySelector(".texts");
const loader = document.querySelector("#loading")
const loader1 = document.getElementById('loading')

function displayLoadin(){
  loader.classList.add('display')
}
function hideLoad(){
  loader.classList.remove('display')
  loader1.remove()
}

const getAndRenderData = () => {
  displayLoadin()
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((el) => el.json())
    .then((el) =>
      el.forEach((element) => {
  hideLoad()
        const li = document.createElement("li");
        li.classList.add("list"); 
        li.innerHTML = `
    <div class="padd userId">${element.userId}</div>
    <div class="padd id">${element.id}</div>
    <div class="color title">${element.title}</div>
    <div class=" body">${element.body}</div>
    `;
        text.append(li);
      })
    );
};

const button= document.getElementById('button')
button.addEventListener("click", getAndRenderData) 
