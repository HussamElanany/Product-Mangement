const title = document.querySelector('#title')
const qty = document.querySelector('#qty')
const price = document.querySelector('#price')
// const discount = document.querySelector('#discount')
const total = document.querySelector('#total')
const count = document.querySelector('#count')
const category = document.querySelector('#category')
const submit = document.querySelector('#submit')
let mood = 'create';
const select = document.querySelector('select')
let temp;

// get Total 
function getTotal() {

    if (qty.value != '') {
        let result = +qty.value * +price.value;
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
        qty: qty.value,
        price: price.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
        vendor: select.value,
        getDate: date.slice(0, 25)
    }


    //Clean data
    if (title.value != '' && qty.value != '' && category.value != '') {
        // category intent
        if (newProduct.category == 'Electrical') {
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


        } else if (newProduct.category == 'Fitting') {
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
        else if (newProduct.category == 'Other') {
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
    qty.value = ''
    price.value = ''
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
        <tr class="tr-container"><tr/>
                <tr id=${i}>
                <td>${i + 1}</td>
                <td>${product.title}</td>
                <td id=${'qty' + i}>${product.qty}</td>
                <td id=${'price' + i}>${product.price}</td>
              
                <td id=${'total' + i}>${product.total}</td>
                <td>${product.category}</td>

                <td>
                <input type='number' id=${'sold-qty' + i} class='sold-qty'>
                </td>

                <td>
                <button onclick='
               sellOneItem(${product.qty}, ${product.price}  , ${product.total}  ,${i})              
                '
                id="sell-1">Sell Part</button></td>
                </td>
                
                <td>
                <button onclick='
                updateData(${i})
                ' id="update">Update</button></td>
                </td>
                
                <td>
                <button onclick="
                sellTo(${i})
                " id="delete${i}">Sell All Pro</button>
                </td>
            </tr>
            `

    })
    let tbody = document.querySelector('#tbody')
    tbody.innerHTML = table


    //category 2
    let tableCat2 = '';
    dataProduct2.forEach((product, i) => {
        tableCat2 += `
        <tr class="tr-container2"><tr/>
                <tr id=${i}>
                <td>${i + 1}</td>
                <td>${product.title}</td>
                <td id=${'qty2' + i}>${product.qty}</td>
                <td id=${'price2' + i}>${product.price}</td>
                <td id=${'total2' + i}>${product.total}</td>
                <td>${product.category}</td>
                <td>
                <input type='number' id=${'sold-qty2' + i} class='sold-qty2'>
                </td>

                <td>

                <button onclick='
               sellOneItem2(${product.qty}, ${product.price}  , ${product.total}  ,${i})              
                '
                id="sell-2"> Sell Part</button></td>
                </td>

                <td><button onclick='
                updateData2(${i})
                ' id="update">Update</button></td>
                <td><button onclick="
                sellTo2(${i})
                " id="delete">Sell All Pro</button></td>
            </tr>`
    })
    let tbodyCat2 = document.querySelector('#tbody-cat2')
    tbodyCat2.innerHTML = tableCat2

    //category 3
    let tableCat3 = '';
    dataProduct3.forEach((product, i) => {
        tableCat3 += `
        <tr class="tr-container3"><tr/>
                <tr id=${i}>
                <td>${i + 1}</td>
                <td>${product.title}</td>
                <td id=${'qty3' + i}>${product.qty}</td>
                <td id=${'price3' + i}>${product.price}</td>
                <td id=${'total3' + i}>${product.total}</td>
                <td>${product.category}</td>
                <td>
                <input type='number' id=${'sold-qty3' + i} class='sold-qty3'>
                </td>
                <td>
                <button onclick='
                sellOneItem3(${product.qty}, ${product.price}  , ${product.total}  ,${i})       
                '
                id="sell-3">Sell Part</button></td>
                </td>

                <td><button onclick='
                updateData3(${i})
                ' id="update">Update</button></td>
                <td><button onclick="
                sellTo3(${i})
                " id="delete">Sell All Pro</button></td>
            </tr>`

    })
    let tbodyCat3 = document.querySelector('#tbody-cat3')
    tbodyCat3.innerHTML = tableCat3


    //show delete all btn
    // let deleteAllDiv = document.querySelector('#delete-all')
    // if (dataProduct.length > 0 || dataProduct2.length > 0 || dataProduct3.length > 0) {
    //     deleteAllDiv.innerHTML = `
    //  <button onclick='deleteAll()' id='delete-all-btn'>Delete All (${dataProduct.length + dataProduct2.length + dataProduct3.length})</button>
    //  `
    // } else {
    //     deleteAllDiv.innerHTML = ''
    // }
}
showData()

// Sell one

let testCustFirstName;
let testCustLasttName;
let testCustPhoneNum;
let soldQty;
let soldTotal;
let oneSoldItem = []

function sellOneItem(qty, price, total, i) {

    console.log(qty, price, total, i, soldTotal);



    let trContaienrTest = document.querySelectorAll('.tr-container')[i]

    trContaienrTest.innerHTML = `
        <td colspan="2">
        <input class='first-name' type="text" placeholder='First name'>
        </td>
         <td colspan="2"> 
         <input class='last-name' type="text" placeholder='Last name'>
         </td>
        <td colspan="2"> 
        <input class='phone-num' type="text" placeholder='Phone number'>
        </td>
        <td colspan="1"> </td>
       <td colspan="2"> 
        <button class='sell-pro-btn' onclick='
        saveSoldItem(${i})
        '>Sell Product</button>
        </td>`

    testCustFirstName = document.querySelector('.first-name')
    testCustLasttName = document.querySelector('.last-name')
    soldQty = document.getElementById('sold-qty' + i)
    testCustPhoneNum = document.querySelector('.phone-num')


    theQty = qty - soldQty.value;
    dataProduct[i].qty = theQty;
    document.getElementById('qty' + i).innerHTML = theQty;

    soldTotal = price * +soldQty.value;
    console.log(soldTotal);
    total = total - (price * +soldQty.value);
    dataProduct[i].total = total;
    document.getElementById('total' + i).innerHTML = total;


    console.log(typeof (+soldQty.value));
    console.log(total);


}

function saveSoldItem(i) {
    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)
    dateOnly = date.slice(0, 15)
    hour = date.slice(15, 24)

    let oneSoldItem = {
        title: dataProduct[i].title,
        qty: soldQty.value,
        price: dataProduct[i].price,
        total: soldTotal,
        count: dataProduct[i].count,
        category: dataProduct[i].category,
        firstName: testCustFirstName.value + ' ',
        lastName: testCustLasttName.value,
        phoneNum: testCustPhoneNum.value,
        dateOnly: dateOnly,
        hour: hour,
        getDate: getDate
    }
    soldProductpage.push(oneSoldItem)

    console.log(soldProductpage);
    showData()

    localStorage.setItem('soldProduct', JSON.stringify(soldProductpage))

    localStorage.setItem('product', JSON.stringify(dataProduct))

    localStorage.product = JSON.stringify(dataProduct)

}

// Cat 2

let testCustFirstName2;
let testCustLasttName2;
let testCustPhoneNum2;
let soldQty2;
let soldTotal2;

function sellOneItem2(qty2, price2, total2, i) {

    console.log(qty2, price2, total2, i);



    let trContaienrTest2 = document.querySelectorAll('.tr-container2')[i]

    trContaienrTest2.innerHTML =
        `
    <td colspan="2">
    <input class='first-name2' type="text" placeholder='First name'>
    </td>
     <td colspan="2"> 
     <input class='last-name2' type="text" placeholder='Last name'>
     </td>
    <td colspan="2"> 
    <input class='phone-num2' type="text" placeholder='Phone number'>
    </td>
    <td colspan="1"> </td>
   <td colspan="2"> 
    <button class='sell-pro-btn' onclick='
    saveSoldItem2(${i})
    '>Sell Product</button>
    </td>`

    testCustFirstName2 = document.querySelector('.first-name2')
    testCustLasttName2 = document.querySelector('.last-name2')
    soldQty2 = document.getElementById('sold-qty2' + i)
    testCustPhoneNum2 = document.querySelector('.phone-num2')


    theQty2 = qty2 - soldQty2.value;
    dataProduct2[i].qty = theQty2;
    document.getElementById('qty2' + i).innerHTML = theQty2;

    soldTotal2 = price2 * +soldQty2.value;
    console.log(soldTotal2);
    total2 = total2 - (price2 * +soldQty2.value);
    dataProduct2[i].total = total2;
    document.getElementById('total2' + i).innerHTML = total2;

}


function saveSoldItem2(i) {


    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)
    dateOnly = date.slice(0, 15)
    hour = date.slice(15, 24)

    let oneSoldItem2 = {
        title: dataProduct2[i].title,
        qty: soldQty2.value,
        price: dataProduct2[i].price,
        total: soldTotal2,
        count: dataProduct2[i].count,
        category: dataProduct2[i].category,
        firstName: testCustFirstName2.value + ' ',
        lastName: testCustLasttName2.value,
        phoneNum: testCustPhoneNum2.value,
        dateOnly: dateOnly,
        hour: hour,
        getDate: getDate
    }
    soldProductpage2.push(oneSoldItem2)

    console.log(soldProductpage2);
    showData()

    // localStorage.setItem('soldProduct2', JSON.stringify(soldProductpage2))

    // localStorage.setItem('product2', JSON.stringify(dataProduct2))

    // localStorage.product2 = JSON.stringify(dataProduct2)
    // let dateFunc = new Date()
    // let date = dateFunc.toString()
    // getDate = date.slice(0, 25)

    // let oneSoldItem2 = {
    //     title: dataProduct2[i].title,
    //     qty: soldQty2.value,
    //     price: dataProduct2[i].price,
    //     total: soldTotal2,
    //     count: dataProduct2[i].count,
    //     category: dataProduct2[i].category,
    //     firstName: testCustFirstName2.value + ' ',
    //     lastName: testCustLasttName2.value,
    //     phoneNum: testCustPhoneNum2.value,
    //     getDate: getDate
    // }
    // soldProductpage2.push(oneSoldItem2)

    // console.log(soldProductpage2);
    // showData()


    localStorage.setItem('soldProduct2', JSON.stringify(soldProductpage2))

    localStorage.setItem('product2', JSON.stringify(dataProduct2))

    localStorage.product2 = JSON.stringify(dataProduct2)

    // localStorage.setItem('soldProduct2', JSON.stringify(soldProductpage2))

    // localStorage.product2 = JSON.stringify(dataProduct2)

}

// Cat 3

let testCustFirstName3;
let testCustLasttName3;
let testCustPhoneNum3;
let soldQty3;
let soldTotal3;

function sellOneItem3(qty3, price3, total3, i) {

    console.log(qty3, price3, total3, i);



    let trContaienrTest3 = document.querySelectorAll('.tr-container3')[i]

    trContaienrTest3.innerHTML = `
        <td colspan="2">
        <input class='first-name3' type="text" placeholder='First name'>
        </td>
         <td colspan="2"> 
         <input class='last-name3' type="text" placeholder='Last name'>
         </td>
        <td colspan="2"> 
        <input class='phone-num3' type="text" placeholder='Phone number'>
        </td>
        <td colspan="1"> </td>
        <td colspan="2"> 
        <button class='sell-pro-btn' onclick='
        saveSoldItem3(${i})
        '>Sell Product</button>
        </td>`
    testCustFirstName3 = document.querySelector('.first-name3')
    testCustLasttName3 = document.querySelector('.last-name3')
    testCustPhoneNum3 = document.querySelector('.phone-num3')
    soldQty3 = document.getElementById('sold-qty3' + i)

    qty3 = qty3 - soldQty3.value
    dataProduct3[i].qty = qty3
    document.getElementById('qty3' + i).innerHTML = qty3


    soldTotal3 = price3 * +soldQty3.value

    total3 = total3 - (price3 * +soldQty3.value)
    dataProduct3[i].total = total3
    document.getElementById('total3' + i).innerHTML = total3
    console.log(dataProduct3);

    testCustFirstName3 = document.querySelector('.first-name3')
    testCustLasttName3 = document.querySelector('.last-name3')
    testCustPhoneNum3 = document.querySelector('.phone-num3')

}


function saveSoldItem3(i) {
    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)
    dateOnly = date.slice(0, 15)
    hour = date.slice(15, 24)

    let oneSoldItem3 = {
        title: dataProduct3[i].title,
        qty: soldQty3.value,
        price: dataProduct3[i].price,
        total: soldTotal3,
        count: dataProduct3[i].count,
        category: dataProduct3[i].category,
        firstName: testCustFirstName3.value + ' ',
        lastName: testCustLasttName3.value,
        phoneNum: testCustPhoneNum3.value,
        dateOnly: dateOnly,
        hour: hour,
        getDate: getDate
    }
    soldProductpage3.push(oneSoldItem3)

    console.log(soldProductpage3);
    showData()


    localStorage.setItem('soldProduct3', JSON.stringify(soldProductpage3))

    localStorage.setItem('product3', JSON.stringify(dataProduct3))

    localStorage.product3 = JSON.stringify(dataProduct3)

}


// Sell Product

let soldProductData;
let soldProductData2;
let soldProductData3;

let custFirstName;
let custLasttName;
let custPhoneNum;


function sellTo(i) {

    let trContaienr = document.querySelectorAll('.tr-container')[i]
    // const newDiv = document.createElement("tr");
    // newDiv.className = 'new-div'
    trContaienr.innerHTML = `
    <td colspan="2"><input class='first-name' type="text" placeholder='First name'></td>
     <td colspan="2"> <input class='last-name' type="text" placeholder='Last name'></td>
    <td colspan="2"> <input class='phone-num' type="text" placeholder='Phone number '></td>
    <td></td>
    <td colspan="2"> 
    <button class='sell-pro-btn' onclick='
    
    sellItem(${i})
    '>Sell Product</button></td>`

}


function sellItem(i) {

    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)
    dateOnly = date.slice(0, 15)
    hour = date.slice(15, 24)

    custFirstName = document.querySelector('.first-name')
    custLasttName = document.querySelector('.last-name')
    custPhoneNum = document.querySelector('.phone-num')
    console.log(custPhoneNum.value);


    soldProductData = dataProduct.splice(i, 1)
    soldProductpage.push({
        data: soldProductData,
        dateOnly: dateOnly,
        hour: hour,
        getDate: getDate,
        firstName: custFirstName.value + ' ',
        lastName: custLasttName.value,
        phoneNum: custPhoneNum.value

    })

    console.log(soldProductpage);
    // Save soldProductpage in local storage
    localStorage.setItem('soldProduct', JSON.stringify(soldProductpage))

    //dataProduct.splice(i, 1)
    localStorage.product = JSON.stringify(dataProduct)

    showData()
    // console.log(soldProductpage);
}


let custFirstName2;
let custLasttName2;
let custPhoneNum2;


function sellTo2(i) {
    let trContaienr2 = document.querySelectorAll('.tr-container2')[i]
    // const newDiv = document.createElement("tr");
    // newDiv.className = 'new-div'
    trContaienr2.innerHTML = `
    <td colspan="2"><input class='first-name2' type="text" placeholder='First name'></td>
     <td colspan="2"> <input class='last-name2' type="text" placeholder='Last name'></td>
    <td colspan="2"> <input class='phone-num2' type="text" placeholder='Phone number '></td>
    <td></td>
    <td colspan="2"> <button class='sell-pro-btn' onclick='
    sellItem2(${i})
    '>Sell Product</button></td>`

    // console.log(custFirstName.value);
    // trContaienr.appendChild(newDiv)
    console.log(trContaienr2);
}



function sellItem2(i) {

    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)
    dateOnly = date.slice(0, 15)
    hour = date.slice(15, 24)


    custFirstName2 = document.querySelector('.first-name2')
    custLasttName2 = document.querySelector('.last-name2')
    custPhoneNum2 = document.querySelector('.phone-num2')
    console.log(custPhoneNum2.value);

    soldProductData2 = dataProduct2.splice(i, 1)
    soldProductpage2.push({
        data: soldProductData2,
        getDate: getDate,
        dateOnly: dateOnly,
        hour: hour,
        firstName: custFirstName2.value + ' ',
        lastName: custLasttName2.value,
        phoneNum: custPhoneNum2.value

    })

    console.log(soldProductpage2);
    // Save soldProductpage in local storage
    localStorage.setItem('soldProduct2', JSON.stringify(soldProductpage2))

    //dataProduct.splice(i, 1)
    localStorage.product2 = JSON.stringify(dataProduct2)

    showData()
    console.log(soldProductpage2);
}


let custFirstName3;
let custLasttName3;
let custPhoneNum3;


function sellTo3(i) {
    let trContaienr3 = document.querySelectorAll('.tr-container3')[i]
    // const newDiv = document.createElement("tr");
    // newDiv.className = 'new-div'
    trContaienr3.innerHTML = `
    <td colspan="2"><input class='first-name3' type="text" placeholder='First name'></td>
     <td colspan="2"> <input class='last-name3' type="text" placeholder='Last name'></td>
    <td colspan="2"> <input class='phone-num3' type="text" placeholder='Phone number '></td>
    <td></td>
    <td colspan="2"> <button class='sell-pro-btn' onclick='
    sellItem3(${i})
    '>Sell Product</button></td>`

    // console.log(custFirstName.value);
    // trContaienr.appendChild(newDiv)
    console.log(trContaienr3);
}




function sellItem3(i) {

    let dateFunc = new Date()
    let date = dateFunc.toString()
    getDate = date.slice(0, 25)
    dateOnly = date.slice(0, 15)
    hour = date.slice(15, 24)

    custFirstName3 = document.querySelector('.first-name3')
    custLasttName3 = document.querySelector('.last-name3')
    custPhoneNum3 = document.querySelector('.phone-num3')
    console.log(custPhoneNum3.value);


    soldProductData3 = dataProduct3.splice(i, 1)
    soldProductpage3.push({
        data: soldProductData3,
        dateOnly: dateOnly,
        hour: hour,
        getDate: getDate,
        firstName: custFirstName3.value + ' ',
        lastName: custLasttName3.value,
        phoneNum: custPhoneNum3.value


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

// function deleteAll() {
//     localStorage.clear()
//     dataProduct.splice(0)
//     dataProduct2.splice(0)
//     dataProduct3.splice(0)
//     showData()
// }


// Update Method

function updateData(i) {
    title.value = dataProduct[i].title
    qty.value = dataProduct[i].qty
    price.value = dataProduct[i].price

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
function updateData2(i) {
    title.value = dataProduct2[i].title
    qty.value = dataProduct2[i].qty
    price.value = dataProduct2[i].price

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
function updateData3(i) {
    title.value = dataProduct3[i].title
    qty.value = dataProduct3[i].qty
    price.value = dataProduct3[i].price

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
            <tr class="tr-container"><tr/>
            <tr id=${i}>
            <td>${i + 1}</td>
            <td>${dataProduct[i].title}</td>
            <td id=${'qty' + i}>${dataProduct[i].qty}</td>
            <td id=${'price' + i}>${dataProduct[i].price}</td>
          
            <td id=${'total' + i}>${dataProduct[i].total}</td>
            <td>${dataProduct[i].category}</td>

            <td>
            <input type='number' id=${'sold-qty' + i} class='sold-qty'>
            </td>

            <td>
            <button onclick='
           sellOneItem(${dataProduct[i].qty}, ${dataProduct[i].price}  , ${dataProduct[i].total}  ,${i})              
            '
            id="sell-1">Sell Part</button></td>
            </td>
            
            <td>
            <button onclick='
            updateData(${i})
            ' id="update">Update</button></td>
            </td>
            
            <td>
            <button onclick="
            sellTo(${i})
            " id="delete${i}">Sell All Pro</button>
            </td>
        </tr>
        `;

            // console.log(dataProduct[i].title);
        }

    }
    let tbody = document.querySelector('#tbody')
    tbody.innerHTML = table

    let table2 = '';
    for (let i = 0; i < dataProduct2.length; i++) {

        if (dataProduct2[i].title.toLowerCase().includes(value) || dataProduct2[i].title.includes(value)) {
            table2 += `
            <tr class="tr-container2"><tr/>
                    <tr id=${i}>
                    <td>${i + 1}</td>
                    <td>${dataProduct2[i].title}</td>
                    <td id=${'qty2' + i}>${dataProduct2[i].qty}</td>
                    <td id=${'price2' + i}>${dataProduct2[i].price}</td>
                    <td id=${'total2' + i}>${dataProduct2[i].total}</td>
                    <td>${dataProduct2[i].category}</td>
                    <td>
                    <input type='number' id=${'sold-qty2' + i} class='sold-qty2'>
                    </td>
    
                    <td>
    
                    <button onclick='
                   sellOneItem2(${dataProduct2[i].qty}, ${dataProduct2[i].price}  , ${dataProduct2[i].total}  ,${i})              
                    '
                    id="sell-2"> Sell Part</button></td>
                    </td>
    
                    <td><button onclick='
                    updateData2(${i})
                    ' id="update">Update</button></td>
                    <td><button onclick="
                    sellTo2(${i})
                    " id="delete">Sell All Pro</button></td>
                </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbodyCat2 = document.querySelector('#tbody-cat2')
    tbodyCat2.innerHTML = table2

    let table3 = '';
    for (let i = 0; i < dataProduct3.length; i++) {

        if (dataProduct3[i].title.toLowerCase().includes(value) || dataProduct3[i].title.includes(value)) {
            table3 += `
            <tr class="tr-container3"><tr/>
                    <tr id=${i}>
                    <td>${i + 1}</td>
                    <td>${dataProduct3[i].title}</td>
                    <td id=${'qty3' + i}>${dataProduct3[i].qty}</td>
                    <td id=${'price3' + i}>${dataProduct3[i].price}</td>
                    <td id=${'total3' + i}>${dataProduct3[i].total}</td>
                    <td>${dataProduct3[i].category}</td>
                    <td>
                    <input type='number' id=${'sold-qty3' + i} class='sold-qty3'>
                    </td>
                    <td>
                    <button onclick='
                    sellOneItem3(${dataProduct3[i].qty}, ${dataProduct3[i].price}  , ${dataProduct3[i].total}  ,${i})       
                    '
                    id="sell-3">Sell Part</button></td>
                    </td>
    
                    <td><button onclick='
                    updateData3(${i})
                    ' id="update">Update</button></td>
                    <td><button onclick="
                    sellTo3(${i})
                    " id="delete">Sell All Pro</button></td>
                </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbodyCat3 = document.querySelector('#tbody-cat3')
    tbodyCat3.innerHTML = table3
}