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
            <td>${soldProductpage[i].title || soldProductpage[i].data[0].title}</td>

            <td>${soldProductpage[i].qty || soldProductpage[i].data[0].qty}</td>

            <td>${soldProductpage[i].price || soldProductpage[i].data[0].price}</td>

            <td>${soldProductpage[i].total || soldProductpage[i].data[0].total}</td>

            <td>${soldProductpage[i].category || soldProductpage[i].data[0].category}</td>

            <td>${soldProductpage[i].firstName + ' ' + soldProductpage[i].lastName || soldProductpage[i].firstName + ' ' + soldProductpage[i].lastName}</td>

            <td>${soldProductpage[i].phoneNum || soldProductpage[i].phoneNum}</td>

            <td>${soldProductpage[i].getDate || soldProductpage[i].data[0].getDate}</td>

            <td><button onclick="
            deleteItem(${i})
            " id="delete">Delete</button></td>
        </tr>`
        console.log(soldProductpage);
    }
    let tbody = document.querySelector('#tbody-sold-p1')
    tbody.innerHTML = tableSoldPro



    let tableSoldPro2 = '';

    for (let i = 0; i < soldProductpage2.length; i++) {

        tableSoldPro2 += `
        <tr>
        <td>${i + 1}</td>
            <td>${soldProductpage2[i].title || soldProductpage2[i].data[0].title}</td>

            <td>${soldProductpage2[i].qty || soldProductpage2[i].data[0].qty}</td>

            <td>${soldProductpage2[i].price || soldProductpage2[i].data[0].price}</td>

            <td>${soldProductpage2[i].total || soldProductpage2[i].data[0].total}</td>

            <td>${soldProductpage2[i].category || soldProductpage2[i].data[0].category}</td>

            <td>${soldProductpage2[i].firstName + ' ' + soldProductpage2[i].lastName || soldProductpage2[i].firstName + ' ' + soldProductpage2[i].lastName}</td>

            <td>${soldProductpage2[i].phoneNum || soldProductpage2[i].phoneNum}</td>

            <td>${soldProductpage2[i].getDate || soldProductpage2[i].data[0].getDate}</td>

            <td><button onclick="
            deleteItem2(${i})
            " id="delete">Delete</button></td>
    </tr>`
        console.log(soldProductpage2[i].title);
    }
    let tbody2 = document.querySelector('#tbody-sold-p2')
    tbody2.innerHTML = tableSoldPro2



    let tableSoldPro3 = '';

    for (let i = 0; i < soldProductpage3.length; i++) {

        tableSoldPro3 += `
        <tr>
        <td>${i + 1}</td>
        <td>${soldProductpage3[i].title || soldProductpage3[i].data[0].title}</td>

        <td>${soldProductpage3[i].qty || soldProductpage3[i].data[0].qty}</td>

        <td>${soldProductpage3[i].price || soldProductpage3[i].data[0].price}</td>

        <td>${soldProductpage3[i].total || soldProductpage3[i].data[0].total}</td>

        <td>${soldProductpage3[i].category || soldProductpage3[i].data[0].category}</td>

        <td>${soldProductpage3[i].firstName + ' ' + soldProductpage3[i].lastName || soldProductpage3[i].firstName + ' ' + soldProductpage3[i].lastName}</td>

        <td>${soldProductpage3[i].phoneNum || soldProductpage3[i].phoneNum}</td>

        <td>${soldProductpage3[i].getDate || soldProductpage3[i].data[0].getDate}</td>

        <td><button onclick="
        deleteItem3(${i})
        " id="delete">Delete</button></td>
    </tr>`

    }
    let tbody3 = document.querySelector('#tbody-sold-p3')
    tbody3.innerHTML = tableSoldPro3
}
showSoldProductData()
//test function 

// function testShowSoldProductData() {

// }
// testShowSoldProductData()



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

// Search


function searchDataSoldPro(value) {

    let table = '';
    for (let i = 0; i < soldProductpage.length; i++) {

        if (soldProductpage[i].firstName.toLowerCase().includes(value) || soldProductpage[i].firstName.includes(value)) {
            table += `
            <tr>
            <td>${i + 1}</td>
            <td>${soldProductpage[i].title || soldProductpage[i].data[0].title}</td>

            <td>${soldProductpage[i].qty || soldProductpage[i].data[0].price}</td>

            <td>${soldProductpage[i].price || soldProductpage[i].data[0].price}</td>

            <td>${soldProductpage[i].price || soldProductpage[i].data[0].total}</td>

            <td>${soldProductpage[i].category || soldProductpage[i].data[0].category}</td>

            <td>${soldProductpage[i].firstName + ' ' + soldProductpage[i].lastName || soldProductpage[i].firstName + ' ' + soldProductpage[i].lastName}</td>

            <td>${soldProductpage[i].phoneNum || soldProductpage[i].phoneNum}</td>

            <td>${soldProductpage[i].getDate || soldProductpage[i].data[0].getDate}</td>

            <td><button onclick="
            deleteItem(${i})
            " id="delete">Delete</button></td>
        </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbody = document.querySelector('#tbody-sold-p1')
    tbody.innerHTML = table

    let table2 = '';
    for (let i = 0; i < soldProductpage2.length; i++) {

        if (soldProductpage[i].firstName.toLowerCase().includes(value) || soldProductpage2[i].firstName.includes(value)) {
            table2 += `
            <tr>
            <td>${i + 1}</td>
            <td>${soldProductpage2[i].title || soldProductpage2[i].data[0].title}</td>
    
            <td>${soldProductpage2[i].qty || soldProductpage2[i].data[0].price}</td>
    
            <td>${soldProductpage2[i].price || soldProductpage2[i].data[0].price}</td>
    
            <td>${soldProductpage2[i].price || soldProductpage2[i].data[0].total}</td>
    
            <td>${soldProductpage2[i].category || soldProductpage2[i].data[0].category}</td>
    
            <td>${soldProductpage2[i].firstName + soldProductpage2[i].lastName || soldProductpage2[i].firstName + soldProductpage2[i].lastName}</td>
    
            <td>${soldProductpage2[i].phoneNum || soldProductpage2[i].phoneNum}</td>
    
            <td>${soldProductpage2[i].getDate || soldProductpage2[i].getDate}</td>
    
            <td><button onclick="
            deleteItem2(${i})
            " id="delete">Delete</button></td>
        </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbody2 = document.querySelector('#tbody-sold-p2')
    tbody2.innerHTML = table2


    let table3 = '';
    for (let i = 0; i < soldProductpage3.length; i++) {

        if (soldProductpage3[i].firstName.toLowerCase().includes(value) || soldProductpage3[i].firstName.includes(value)) {
            table3 += `
            <tr>
            <td>${i + 1}</td>
            <td>${soldProductpage3[i].title || soldProductpage3[i].data[0].title}</td>
    
            <td>${soldProductpage3[i].qty || soldProductpage3[i].data[0].qty}</td>
    
            <td>${soldProductpage3[i].price || soldProductpage3[i].data[0].price}</td>
    
            <td>${soldProductpage3[i].price || soldProductpage3[i].data[0].price}</td>
    
            <td>${soldProductpage3[i].category || soldProductpage3[i].data[0].category}</td>
    
            <td>${soldProductpage3[i].firstName + soldProductpage3[i].lastName || soldProductpage3[i].firstName + ' ' + soldProductpage3[i].lastName}</td>
    
            <td>${soldProductpage3[i].phoneNum || soldProductpage3[i].phoneNum}</td>
    
            <td>${soldProductpage3[i].getDate || soldProductpage3[i].getDate}</td>
    
            <td><button onclick="
            deleteItem3(${i})
            " id="delete">Delete</button></td>
        </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbody3 = document.querySelector('#tbody-sold-p3')
    tbody3.innerHTML = table3

}

//Search by Phone Number Method
function searchByPhoneSoldPro(value) {

    let table = '';
    for (let i = 0; i < soldProductpage.length; i++) {

        if (soldProductpage[i].phoneNum.toLowerCase().includes(value) || soldProductpage[i].phoneNum.includes(value)) {
            table += `
            <tr>
            <td>${i + 1}</td>
            <td>${soldProductpage[i].title || soldProductpage[i].data[0].title}</td>

            <td>${soldProductpage[i].qty || soldProductpage[i].data[0].price}</td>

            <td>${soldProductpage[i].price || soldProductpage[i].data[0].price}</td>

            <td>${soldProductpage[i].price || soldProductpage[i].data[0].total}</td>

            <td>${soldProductpage[i].category || soldProductpage[i].data[0].category}</td>

            <td>${soldProductpage[i].firstName + ' ' + soldProductpage[i].lastName || soldProductpage[i].firstName + ' ' + soldProductpage[i].lastName}</td>

            <td>${soldProductpage[i].phoneNum || soldProductpage[i].phoneNum}</td>

            <td>${soldProductpage[i].getDate || soldProductpage[i].data[0].getDate}</td>

            <td><button onclick="
            deleteItem(${i})
            " id="delete">Delete</button></td>
        </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbody = document.querySelector('#tbody-sold-p1')
    tbody.innerHTML = table

    let table2 = '';
    for (let i = 0; i < soldProductpage2.length; i++) {

        if (soldProductpage2[i].phoneNum.toLowerCase().includes(value) || soldProductpage2[i].phoneNum.includes(value)) {
            table2 += `
            <tr>
            <td>${i + 1}</td>
            <td>${soldProductpage2[i].title || soldProductpage2[i].data[0].title}</td>
    
            <td>${soldProductpage2[i].qty || soldProductpage2[i].data[0].price}</td>
    
            <td>${soldProductpage2[i].price || soldProductpage2[i].data[0].price}</td>
    
            <td>${soldProductpage2[i].price || soldProductpage2[i].data[0].total}</td>
    
            <td>${soldProductpage2[i].category || soldProductpage2[i].data[0].category}</td>
    
            <td>${soldProductpage2[i].firstName + soldProductpage2[i].lastName || soldProductpage2[i].firstName + soldProductpage2[i].lastName}</td>
    
            <td>${soldProductpage2[i].phoneNum || soldProductpage2[i].phoneNum}</td>
    
            <td>${soldProductpage2[i].getDate || soldProductpage2[i].getDate}</td>
    
            <td><button onclick="
            deleteItem2(${i})
            " id="delete">Delete</button></td>
        </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbody2 = document.querySelector('#tbody-sold-p2')
    tbody2.innerHTML = table2


    let table3 = '';
    for (let i = 0; i < soldProductpage3.length; i++) {

        if (soldProductpage3[i].phoneNum.toLowerCase().includes(value) || soldProductpage3[i].phoneNum.includes(value)) {
            table3 += `
            <tr>
            <td>${i + 1}</td>
            <td>${soldProductpage3[i].title || soldProductpage3[i].data[0].title}</td>
    
            <td>${soldProductpage3[i].qty || soldProductpage3[i].data[0].qty}</td>
    
            <td>${soldProductpage3[i].price || soldProductpage3[i].data[0].price}</td>
    
            <td>${soldProductpage3[i].price || soldProductpage3[i].data[0].price}</td>
    
            <td>${soldProductpage3[i].category || soldProductpage3[i].data[0].category}</td>
    
            <td>${soldProductpage3[i].firstName + soldProductpage3[i].lastName || soldProductpage3[i].firstName + ' ' + soldProductpage3[i].lastName}</td>
    
            <td>${soldProductpage3[i].phoneNum || soldProductpage3[i].phoneNum}</td>
    
            <td>${soldProductpage3[i].getDate || soldProductpage3[i].getDate}</td>
    
            <td><button onclick="
            deleteItem3(${i})
            " id="delete">Delete</button></td>
        </tr>`;
            // console.log(dataProduct[i].title);
        }

    }
    let tbody3 = document.querySelector('#tbody-sold-p3')
    tbody3.innerHTML = table3

}