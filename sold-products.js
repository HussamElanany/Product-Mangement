let soldProductpage;
if (localStorage.soldProduct != null) {
    soldProductpage = JSON.parse(localStorage.soldProduct)
} else {
    soldProductpage = []
}

let soldProductpage2;
if (localStorage.soldProduct2 != null) {
    soldProductpage2 = JSON.parse(localStorage.soldProduct2)
} else {
    soldProductpage2 = []
}

let soldProductpage3;
if (localStorage.soldProduct3 != null) {
    soldProductpage3 = JSON.parse(localStorage.soldProduct3)
} else {
    soldProductpage3 = []
}

let dataDate;
console.log(dataDate);

// show data
function showSoldProductData() {
    // let dateFunc = new Date()
    // let date = dateFunc.toString()
    //soldProductpage[16].title[0].title
    let tableSoldPro = '';

    for (let i = 0; i < soldProductpage.length; i++) {

        tableSoldPro += `
            <tr>
            <td>${i + 1}</td>
            <td>${soldProductpage[i].data[0].title}</td>
            <td>${soldProductpage[i].data[0].price}</td>
            <td>${soldProductpage[i].data[0].total}</td>
            <td>${soldProductpage[i].data[0].category}</td>
            <td>${soldProductpage[i].firstName} ${soldProductpage[i].lastName}</td>
            <td>${soldProductpage[i].phoneNum}</td>
            <td>${soldProductpage[i].getDate}</td>
            <td><button onclick="
            deleteItem(${i})
            " id="delete">Delete</button></td>
        </tr>`
        console.log(soldProductpage[i].data[0].price);
    }
    let tbody = document.querySelector('#tbody-sold-p1')
    tbody.innerHTML = tableSoldPro



    let tableSoldPro2 = '';

    for (let i = 0; i < soldProductpage2.length; i++) {

        tableSoldPro2 += `
        <tr>
        <td>${i + 1}</td>
        <td>${soldProductpage2[i].data[0].title}</td>
        <td>${soldProductpage2[i].data[0].price}</td>
        <td>${soldProductpage2[i].data[0].taxes}</td>
        <td>${soldProductpage2[i].data[0].discount}</td>
        <td>${soldProductpage2[i].data[0].total}</td>
        <td>${soldProductpage2[i].data[0].category}</td>
        <td>${soldProductpage2[i].getDate}</td>
        <td><button onclick="
        deleteItem2(${i})
        " id="delete">Delete</button></td>
    </tr>`
        console.log(soldProductpage2[i].data[0].price);
    }
    let tbody2 = document.querySelector('#tbody-sold-p2')
    tbody2.innerHTML = tableSoldPro2



    let tableSoldPro3 = '';

    for (let i = 0; i < soldProductpage3.length; i++) {

        tableSoldPro3 += `
        <tr>
        <td>${i + 1}</td>
        <td>${soldProductpage3[i].data[0].title}</td>
        <td>${soldProductpage3[i].data[0].price}</td>
        <td>${soldProductpage3[i].data[0].taxes}</td>
        <td>${soldProductpage3[i].data[0].discount}</td>
        <td>${soldProductpage3[i].data[0].total}</td>
        <td>${soldProductpage3[i].data[0].category}</td>
        <td>${soldProductpage3[i].getDate}</td>
        <td><button onclick="
        deleteItem3(${i})
        " id="delete">Delete</button></td>
    </tr>`
        console.log(soldProductpage3[i].data[0].price);
    }
    let tbody3 = document.querySelector('#tbody-sold-p3')
    tbody3.innerHTML = tableSoldPro3
}
showSoldProductData()

console.log(soldProductpage);
// delete item

function deleteItem(i) {
    soldProductpage.splice([i], 1)
    localStorage.soldProduct = JSON.stringify(soldProductpage)

    showSoldProductData()
}

function deleteItem2(i) {
    soldProductpage2.splice([i], 1)
    localStorage.soldProduct2 = JSON.stringify(soldProductpage2)

    showSoldProductData()
}

function deleteItem3(i) {
    soldProductpage3.splice([i], 1)
    localStorage.soldProduct3 = JSON.stringify(soldProductpage3)
    console.log(i);
    console.log(soldProductpage3);

    showSoldProductData()
}