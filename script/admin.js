let books = JSON.parse(localStorage.getItem('bookstore')) ?
JSON.parse(localStorage.getItem('bookstore')) : [

    {
    id: 1,
    title: "It ends with us",
    author: "Colleen Hoover",
    published:2016,
    price:34.95,
    img:"https://i.postimg.cc/nVY3SHKt/It-Ends-with-Us-Colleen-Hoover.png",
    genre:"Romance"
    },
    
    {
    id:2,
    title:"You",
    author:"Caroline Kepnes",
    published: 2014,
    price:22.25,
    img:"https://i.postimg.cc/5053XVfJ/36430011-SY475.jpg",
    genre:"Thriller"
    },
    
    {
    id:3,
    title:"Gone Girl",
    author:"Gillian Flynn",
    published:2012,
    price:24.95,
    img:"https://i.postimg.cc/TwTkqw71/gone-girl.jpg",
    genre:"Thriller"
    },
    
    {
        id:4,
        title:"Verity",
        author:"Colleen Hoover",
        published:2020,
        price: 23 ,
        img:"https://i.postimg.cc/CKwDc6DM/thumbnail.jpg",
        genre:"Thriller"
    },
    
    {
        id:5,
        title:"Percy Jackson",
        author:"Rick Riordan",
        published:2005,
        price:35.95,
        img:"https://i.postimg.cc/7L41pLvk/percy-jackson-and-the-lightning-thief-book-1-of-percy-jackson.jpg",
        genre:"Fantasy"
    },
    
    {
        id:6,
        title:"Wuthering Heights",
        author:"Emily Bronte",
        published:1847,
        price: 47,
        img:"https://i.postimg.cc/433kbs8J/wuthering-heights-124.jpg",
        genre:"Classic"
    },
    
    {
        id:7,
    title:"Frankenstein",
    author:"Mary Shelley",
    published:1818,
    price:16.95,
    img:"https://i.postimg.cc/0NzXyQWJ/81z7-E0u-Wdt-L.jpg",
    genre:"Classic"
    },
    
    {
        id:8,
        title:"Fantastic beasts",
        author:"J.K Rowling",
        published:2001,
        price:26,
        img:"https://i.postimg.cc/T13DTy0z/515-Ezr8-Cea-S.jpg",
        genre:"Fantasy"
    }
    
]


function display(){
Object.keys(books).forEach((bookshelf)=>{
    document.querySelector('tbody').innerHTML +=
    ` <tr>
    <th scope="row">${books[bookshelf].id}</th>
    <td><img src="${books[bookshelf].img} class="card-img-top" alt="..." width="100px" height="150px"></td>
    <td>${books[bookshelf].title}</td>
    <td>${books[bookshelf].author}</td>
    <td>${books[bookshelf].published}</td>
    <td>${books[bookshelf].price}</td>
    <td>${books[bookshelf].genre}</td>
  </tr>`
}


)

}
display();