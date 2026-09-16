async function getLinks() {
  fetch("./links.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((data) => {
        const linkContainer = document.querySelector(".link_container");
        const link = document.createElement("a");
        link.classList.add("links");
        link.setAttribute("target", "_blank");
        link.href = data.link;
        link.textContent = data.name;
        linkContainer.appendChild(link);
      });
    });
}

console.log(getLinks());
