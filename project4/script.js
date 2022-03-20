const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

filter.addEventListener("input", (e) => {
  filterout(e.target.value);
})

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach(user => {
    const li = document.createElement("li");

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</P>
      </div>
    `

    listItems.push(li);
    result.append(li);
  });
}

function filterout(text) {
  console.log(text)
  listItems.forEach((user) => {
    if (user.innerText.toLowerCase().includes(text.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  })
}

getData();
