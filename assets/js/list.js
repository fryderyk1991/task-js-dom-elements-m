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



const sectionArticle = document.querySelector(".article__list");
const ul = document.createElement("ul");
sectionArticle.appendChild(ul);

function createListItem(link, text) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", link);
  a.textContent = text;
  ul.appendChild(li);
  li.appendChild(a);
}



// const ul = document.createElement("ul");
// sectionArticle.appendChild(ul);
// list.forEach(function (el) {
//   if (el.parentId === null) {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     li.setAttribute("data-id", el.id);
//     a.setAttribute("href", el.link);
//     a.textContent = el.text;
//     ul.appendChild(li);
//     li.appendChild(a);
//   }
// });
// const listWithNull = ul.querySelectorAll("li");
// listWithNull.forEach(function (item) {
//   const id = Number(item.dataset.id);
//   const children = list.filter(function (el) {
//     return el.parentId === id;
//   });
//   const ulDropdown = document.createElement("ul");
//   if (id !== 1) {
//     item.appendChild(ulDropdown);
//   }
//   children.forEach(function (li) {
//     const liInsideDropdown = document.createElement("li");
//     const aInsideLi = document.createElement("a");           ////// => to zamienil na funkcje get children i wniej jako parametr podac to z liniki numer 57 do 63 i 77- 82
//     aInsideLi.setAttribute("href", li.link);
//     aInsideLi.textContent = li.text;
//     ulDropdown.appendChild(liInsideDropdown);
//     liInsideDropdown.appendChild(aInsideLi);
//   });
// });