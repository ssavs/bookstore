let tbody = document.querySelector("tbody");

let checkoutBooks = JSON.parse(localStorage.getItem("checkoutStore"));
console.log(checkoutBooks);

Object.keys(checkoutBooks).forEach((item) => {

  tbody.innerHTML += `
    <tr>
        <td>${checkoutBooks[item].title}</td>
        <td>${checkoutBooks[item].author}</td>
        <td>                              </td>
        <td>${checkoutBooks[item].price}</td>
    </tr>
    `;
});

// const arrayOfObjCopy = [

// ]

// Object.keys(arrayOfObjCopy.forEach(key)) => {
//     arrayOfObjCopy[key]= JSON.stringify(arrayOfObjCopy[key]);

// }