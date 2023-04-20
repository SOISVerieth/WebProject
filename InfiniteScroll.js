function createLinkRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    const cell = document.createElement("td");
    const link = document.createElement("a");
    const img = document.createElement("img");
    img.src = "1.jpg";
    img.width = 340;
    link.href = "WorkInProgress.html";
    link.appendChild(img);
    link.appendChild(document.createTextNode("Скоро будет"));
    cell.appendChild(link);
    row.appendChild(cell);
  }
  return row;
}

function loadMoreLinks() {
  const tableBody = document.querySelector("#links table tbody");
  for (let i = 0; i < 20; i++) {
    const row = createLinkRow();
    tableBody.appendChild(row);
  }
}

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollPosition = scrollTop + clientHeight;

  if (scrollPosition >= scrollHeight - 10) {
    loadMoreLinks();
  }
}
loadMoreLinks();
window.addEventListener("scroll", handleScroll);
