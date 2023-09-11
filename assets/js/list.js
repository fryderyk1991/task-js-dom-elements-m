const list = [
  {
    id: 1,
    parentId: null,
    text: "Zastosowanie",
    link: "#Zastosowanie",
  },
  {
    id: 44,
    parentId: null,
    text: "Historia",
    link: "#Historia",
  },
  {
    id: 7,
    parentId: 44,
    text: "Dialekty",
    link: "#Dialekty",
  },
  {
    id: 31,
    parentId: 44,
    text: "Java",
    link: "#Java",
  },
  {
    id: 24,
    parentId: null,
    text: "JavaScript dla WWW",
    link: "#JavaScript_dla_WWW",
  },
  {
    id: 10,
    parentId: 24,
    text: "Interakcja",
    link: "#Interakcja",
  },
  {
    id: 25,
    parentId: 24,
    text: "Osadzanie",
    link: "#Osadzanie",
  },
];

function createItem(id, link, text) {

  const li = document.createElement("li");
  const a = document.createElement("a");
  li.setAttribute("data-id", id);
  a.setAttribute("href", link);
  a.textContent = text;
  li.appendChild(a);

  return li;

}

const sectionArticle = document.querySelector(".article__list");
const ul = document.createElement("ul");
sectionArticle.appendChild(ul);

list.forEach(function (el) {
  if (el.parentId === null) {
    const li = createItem(el.id, el.link, el.text);
    ul.appendChild(li);
  }
});

const listWithNull = ul.querySelectorAll("li");
listWithNull.forEach(function (item) {
  const id = Number(item.dataset.id);
  const children = list.filter(function (el) {
    return el.parentId === id;
  });



  const ulDropdown = document.createElement("ul");
  children.forEach(function (li) {
    const item = createItem(li.id, li.link, li.text);
    ulDropdown.appendChild(item);
  });

  if(children.length > 0) {
    item.appendChild(ulDropdown);
  }
});
