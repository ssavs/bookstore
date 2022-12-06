// fetch('/Data/products.json')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     let tbody = document.querySelector('tbody');
//    Object.keys(data).forEach( (item)=>{
//         if(data[item].length){
//            console.log(`${item}: ${data[item]}`);
//             tbody.innerHTML +=
//            `
//                <tr>
//                    <td>${item}</td>
//                    <td>${data[item]}</td>
//                </tr>             `
//        }
//       } )
// })

let cards = document.querySelector('.cards');

async function fetchData(){
    let res = await fetch('../Data/products.json');
    let data = await res.json();
    return data.books;
};

async function display(){
    let data = await fetchData();
    data.forEach((item)=>{
        cards.innerHTML +=
        ` <div class="card">
        <img src="${item.img}" alt="" style="width:50%">
        <h1>${item.title}</h1>
        <h2 class="author">${item.author}</h2>
        <p>${item.published}</p>
        <p>R${item.price}</p>
        <h3><button>Buy</button></h3>
      </div>`
    })
}
display();