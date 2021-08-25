const button = document.querySelector("button")
const add = document.querySelector("append")

button.addEventListener("click", event => {
  add.innerText = ""
  fetch("http://localhost:3000/cake")
    .then(response => response.json())
    .then(data => {
      data.forEach((item) => {
        const heading = document.createElement("h3")
        heading.innerText = item.type
        add.append(heading)
      })
    }).catch(error => console.log(error.message))
})
