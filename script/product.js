let books = JSON.parse(localStorage.getItem("bookstore"))
  ? JSON.parse(localStorage.getItem("bookstore"))
  : [
      {
        id: 1,
        title: "It ends with us",
        author: "Colleen Hoover",
        published: 2016,
        price: 34.95,
        img: "https://i.postimg.cc/nVY3SHKt/It-Ends-with-Us-Colleen-Hoover.png",
        genre: "Romance",
      },

      {
        id: 2,
        title: "You",
        author: "Caroline Kepnes",
        published: 2014,
        price: 22.25,
        img: "https://i.postimg.cc/5053XVfJ/36430011-SY475.jpg",
        genre: "Thriller",
      },

      {
        id: 3,
        title: "Gone Girl",
        author: "Gillian Flynn",
        published: 2012,
        price: 24.95,
        img: "https://i.postimg.cc/TwTkqw71/gone-girl.jpg",
        genre: "Thriller",
      },

      {
        id: 4,
        title: "Verity",
        author: "Colleen Hoover",
        published: 2020,
        price: 23,
        img: "https://i.postimg.cc/CKwDc6DM/thumbnail.jpg",
        genre: "Thriller",
      },

      {
        id: 5,
        title: "Percy Jackson",
        author: "Rick Riordan",
        published: 2005,
        price: 35.95,
        img: "https://i.postimg.cc/7L41pLvk/percy-jackson-and-the-lightning-thief-book-1-of-percy-jackson.jpg",
        genre: "Fantasy",
      },

      {
        id: 6,
        title: "Wuthering Heights",
        author: "Emily Bronte",
        published: 1847,
        price: 47,
        img: "https://i.postimg.cc/433kbs8J/wuthering-heights-124.jpg",
        genre: "Classic",
      },

      {
        id: 7,
        title: "Frankenstein",
        author: "Mary Shelley",
        published: 1818,
        price: 16.95,
        img: "https://i.postimg.cc/0NzXyQWJ/81z7-E0u-Wdt-L.jpg",
        genre: "Classic",
      },

      {
        id: 8,
        title: "Fantastic beasts",
        author: "J.K Rowling",
        published: 2001,
        price: 26,
        img: "https://i.postimg.cc/T13DTy0z/515-Ezr8-Cea-S.jpg",
        genre: "Fantasy",
      },
    ];

function display() {
  books.forEach((book) => {
    document.getElementById("book").innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${book.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h1>${book.title}</h1>
          <h2 class="author">${book.author}<h2>
          <h5>${book.published}</h5>
          <h5>Price: R${book.price}</h5>
          <h5>${bookstore.genre}</h5>
      
        </div>
        <div class="card-footer">
        <a id="checkoutBtn" href="" class="btn btn-dark">Add to Checkout</a>
        </div>
      </div>
              `;
  });
}
display();

localStorage.setItem("bookstore", JSON.stringify(books));

let checkoutPage = [];
localStorage.setItem("checkoutStore", JSON.stringify(checkoutPage));

let addToCheckoutBtn = [...document.querySelectorAll("#checkoutBtn")];
console.log(addToCheckoutBtn);

Object.keys(addToCheckoutBtn).forEach((item) => {
  addToCheckoutBtn[item].addEventListener("click", (e) => {
    e.preventDefault();
    console.log(addToCheckoutBtn[item]);
    console.log(books[item]);
    checkoutPage.push(books[item]);
    console.log(checkoutPage);
    localStorage.setItem("checkoutStore", JSON.stringify(checkoutPage));
  });
});

//attempting to filter my books//

// let filtered = document.getElementById("#myBtnContainer");
// filtered.addEventListener("change",(e)=>{
//   console.log(e.target.value)
//   let filteredBooks = books.filter(item =>{
//     return item.genre === e.target.value
//   })

//   document.querySelector("#cards").innerHTML ="";
//   Object.keys(filteredBooks).forEach((item) => {
//   document.querySelector("#cards").innerHTML += `
//   <div class="card" style="width: 18rem;">
//   <img src="${filteredBooks[item].img}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h1>${filteredBooks[item].title}</h1>
//     <h2 class="author">${filteredBooks[item].author}<h2>
//     <h5>${filteredBooks[item].published}</h5>
//     <h5>Price: R${filteredBooks[item].price}</h5>
//     <h5>${filteredBooks[item].genre}</h5>

//   </div>
//   <div class="card-footer">
//   <a id="checkoutBtn" href="" class="btn btn-dark">Add to Checkout</a>
//   </div>
// </div>
//         `;
//       })
// })
