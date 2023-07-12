const title = document.querySelector('#title')
const price = document.querySelector('#price')
const taxes = document.querySelector('#taxes')
const discount = document.querySelector('#discount')
const total = document.querySelector('#total')
const count = document.querySelector('#count')
const category = document.querySelector('#category')
const submit = document.querySelector('#submit')
let mood = 'create';
const select = document.querySelector('select')
let temp;

// get Total 
function getTotal() {

    if (price.value != '') {
        let result = +price.value + +taxes.value - +discount.value
        total.innerHTML = result
        total.style.background = '#040'
    }
    else {
        total.innerHTML = ''
        total.style.background = '#a00d02'
    }
}



// create product
let dataProduct;
if (localStorage.product != null) {
    dataProduct = JSON.parse(localStorage.product)
} else {
    dataProduct = []
}

let dataProduct2;
if (localStorage.product2 != null) {
    dataProduct2 = JSON.parse(localStorage.product2)
} else {
    dataProduct2 = []
}

let dataProduct3;
if (localStorage.product3 != null) {
    dataProduct3 = JSON.parse(localStorage.product3)
} else {
    dataProduct3 = []
}

submit.onclick = function () {
    let dateFunc = new Date()
    let date = dateFunc.toString()
    console.log(date);
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
        vendor: select.value,
        getDate: date.slice(0, 25)
    }


    //Clean data
    if (title.value != '' && price.value != '' && category.value != '') {
        // category intent
        if (newProduct.category == 'Category 1') {
            //Update
            if (mood === 'create') {
                //count
                if (newProduct.count > 1) {
                    for (let i = 0; i < newProduct.count; i++) {
                        dataProduct.push(newProduct)
                    }
                } else {
                    dataProduct.push(newProduct)
                }
            } else {
                dataProduct[temp] = newProduct;
                mood = 'create'
                submit.innerHTML = 'Create'
                count.style.display = 'block'
            }


        } else if (newProduct.category == 'Category 2') {
            //Update
            if (mood === 'create') {
                //count
                if (newProduct.count > 1) {
                    for (let i = 0; i < newProduct.count; i++) {
                        dataProduct2.push(newProduct)
                    }
                } else {
                    dataProduct2.push(newProduct)
                }
            } else {
                dataProduct2[temp] = newProduct;
                mood = 'create'
                submit.innerHTML = 'Create'
                count.style.display = 'block'
            }
        }
        else if (newProduct.category == 'Category 3') {
            //Update
            if (mood === 'create') {
                //count
                if (newProduct.count > 1) {
                    for (let i = 0; i < newProduct.count; i++) {
                        dataProduct3.push(newProduct)
                    }
                } else {
                    dataProduct3.push(newProduct)
                }
            } else {
                dataProduct3[temp] = newProduct;
                mood = 'create'
                submit.innerHTML = 'Create'
                count.style.display = 'block'
            }
        }
        else {
            alert('pleas fill the form')
        }
    }

    localStorage.setItem('product', JSON.stringify(dataProduct))
    localStorage.setItem('product2', JSON.stringify(dataProduct2))
    localStorage.setItem('product3', JSON.stringify(dataProduct3))
    showData()
    clearData()
}

function clearData() {
    title.value = ''
    price.value = ''
    taxes.value = ''
    discount.value = ''
    total.innerHTML = ''
    count.value = ''
    category.value = ''
    total.style.background = '#a00d02'
}


// show data
function showData() {
    let table = '';
    dataProduct.forEach((product, i) => {
        table += `
                <tr>
                <td>${i + 1}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.taxes}</td>
                <td>${product.discount}</td>
                <td>${product.total}</td>
                <td>${product.category}</td>
                <td><button onclick='
                updateData(${i})
                ' id="update">Update</button></td>
                <td><button onclick="
                sellItem(${i})
                " id="delete">Sell</button></td>
            </tr>`

    })
    let tbody = document.querySelector('#tbody')
    tbody.innerHTML = table


    //category 2
    let tableCat2 = '';
    dataProduct2.forEach((product, i) => {
        tableCat2 += `
                <tr>
                <td>${i + 1}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.taxes}</td>
                <td>${product.discount}</td>
                <td>${product.total}</td>
                <td>${product.category}</td>
                <td><button onclick='
                updateData(${i})
                ' id="update">Update</button></td>
                <td><button onclick="
                sellItem2(${i})
                " id="delete">Sell</button></td>
            </tr>`

    })
    let tbodyCat2 = document.querySelector('#tbody-cat2')
    tbodyCat2.innerHTML = tableCat2

    //category 3
    let tableCat3 = '';
    dataProduct3.forEach((product, i) => {
        tableCat3 += `
                <tr>
                <td>${i + 1}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.taxes}</td>
                <td>${product.discount}</td>
                <td>${product.total}</td>
                <td>${product.category}</td>
                <td><button onclick='
                updateData(${i})
                ' id="update">Update</button></td>
                <td><button onclick="
                sellItem3(${i})
                " id="delete">Sell</button></td>
            </tr>`

    })
    let tbodyCat3 = document.querySelector('#tbody-cat3')
    tbodyCat3.innerHTML = tableCat3


    //show delete all btn
    let deleteAllDiv = document.querySelector('#delete-all')
    if (dataProduct.length > 0) {
        deleteAllDiv.innerHTML = `
     <button onclick='deleteAll()' id='delete-all-btn'>Delete All (${dataProduct.length + dataProduct2.length + dataProduct3.length})</button>
     `
    } else {
        deleteAllDiv.innerHTML = ''
    }
}
showData()


// Sell Product

let soldProductData;
let soldProductData2;
let soldProductData3;


function sellItem(i) {

    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)

    soldProductData = dataProduct.splice(i, 1)
    soldProductpage.push({
        data: soldProductData,
        getDate: getDate
    })

    console.log(soldProductpage);
    // Save soldProductpage in local storage
    localStorage.setItem('soldProduct', JSON.stringify(soldProductpage))

    //dataProduct.splice(i, 1)
    localStorage.product = JSON.stringify(dataProduct)

    showData()
    console.log(soldProductpage);
}

function sellItem2(i) {

    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)

    soldProductData2 = dataProduct2.splice(i, 1)
    soldProductpage2.push({
        data: soldProductData2,
        getDate: getDate
    })

    console.log(soldProductpage2);
    // Save soldProductpage in local storage
    localStorage.setItem('soldProduct2', JSON.stringify(soldProductpage2))

    //dataProduct.splice(i, 1)
    localStorage.product2 = JSON.stringify(dataProduct2)

    showData()
    console.log(soldProductpage2);
}
function sellItem3(i) {

    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)

    soldProductData3 = dataProduct3.splice(i, 1)
    soldProductpage3.push({
        data: soldProductData3,
        getDate: getDate
    })

    console.log(soldProductpage3);
    // Save soldProductpage in local storage
    localStorage.setItem('soldProduct3', JSON.stringify(soldProductpage3))

    //dataProduct.splice(i, 1)
    localStorage.product3 = JSON.stringify(dataProduct3)

    showData()
    console.log(soldProductpage3);
}



// Delete All

function deleteAll() {
    localStorage.clear()
    dataProduct.splice(0)
    showData()
}


// Update Method

function updateData(i) {
    title.value = dataProduct[i].title
    price.value = dataProduct[i].price
    taxes.value = dataProduct[i].taxes
    discount.value = dataProduct[i].discount
    getTotal()
    count.style.display = 'none'
    category.value = dataProduct[i].category;
    submit.innerHTML = 'Update'
    mood = 'update'
    temp = i;
    scroll({
        top: 0,
        behavior: "smooth"
    })
}

// Update Category 2
function updateData(i) {
    title.value = dataProduct2[i].title
    price.value = dataProduct2[i].price
    taxes.value = dataProduct2[i].taxes
    discount.value = dataProduct2[i].discount
    getTotal()
    count.style.display = 'none'
    category.value = dataProduct2[i].category;
    submit.innerHTML = 'Update'
    mood = 'update'
    temp = i;
    scroll({
        top: 0,
        behavior: "smooth"
    })
}

// Update Category 3
function updateData(i) {
    title.value = dataProduct3[i].title
    price.value = dataProduct3[i].price
    taxes.value = dataProduct3[i].taxes
    discount.value = dataProduct3[i].discount
    getTotal()
    count.style.display = 'none'
    category.value = dataProduct3[i].category;
    submit.innerHTML = 'Update'
    mood = 'update'
    temp = i;
    scroll({
        top: 0,
        behavior: "smooth"
    })
}


// Search

function getSearchMood() {
    let search = document.querySelector('#search')
    search.focus()
    search.placeholder = 'Search By Title'

}


function searchData(value) {

    let table = '';
    for (let i = 0; i < dataProduct.length; i++) {

        if (dataProduct[i].title.toLowerCase().includes(value) || dataProduct[i].title.includes(value)) {
            table += `
            <tr>
            <td>${i + 1}</td>
            <td>${dataProduct[i].title}</td>
            <td>${dataProduct[i].price}</td>
            <td>${dataProduct[i].taxes}</td>
            <td>${dataProduct[i].discount}</td>
            <td>${dataProduct[i].total}</td>
            <td>${dataProduct[i].category}</td>
            <td><button onclick='
            updateData(${i})
            ' id="update">Update</button></td>
            <td><button onclick="
            deleteTest(${i})
            " id="delete">Delete</button></td>
        </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbody = document.querySelector('#tbody')
    tbody.innerHTML = table
}