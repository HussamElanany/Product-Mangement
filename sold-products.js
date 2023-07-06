let soldProductpage;
if (localStorage.soldProduct != null) {
    soldProductpage = JSON.parse(localStorage.soldProduct)
} else {
    soldProductpage = []
}

// show data
function showSoldProductData() {

    //soldProductpage[16].title[0].title
    let tableSoldPro = '';

    for (let i = 0; i < soldProductpage.length; i++) {

        tableSoldPro += `
            <tr>
            <td>${i + 1}</td>
            <td>${soldProductpage[i].data[0].title}</td>
            <td>${soldProductpage[i].data[0].price}</td>
            <td>${soldProductpage[i].data[0].taxes}</td>
            <td>${soldProductpage[i].data[0].discount}</td>
            <td>${soldProductpage[i].data[0].total}</td>
            <td>${soldProductpage[i].data[0].category}</td>
            <td>${soldProductpage[i].data[0].getDate}</td>
            <td><button onclick="
            deleteItem(${i})
            " id="delete">Delete</button></td>
        </tr>`
        console.log(soldProductpage[i].data[0].price);
    }
    let tbody = document.querySelector('#tbody-sold-p')
    tbody.innerHTML = tableSoldPro
}
showSoldProductData()

console.log(soldProductpage);
// delete item
function deleteItem(i) {
    soldProductpage.splice(soldProductpage[i], 1)
    localStorage.soldProduct = JSON.stringify(soldProductpage)

    showSoldProductData()
}