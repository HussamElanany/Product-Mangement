const afterDiscount = document.querySelector('.after-discount')
const discountAmount = document.querySelector('.discount-amount')
const afterTax = document.querySelector('.after-tax')
const taxAmount = document.querySelector('.tax-amount')
const totalAftTax = document.querySelector('.total-after-tax')
const totalSection = document.querySelector('.total-of-totals')
const discountSection = document.querySelector('.discount-of-totals')
const totalQtyNum = document.querySelector('.total-qty-num')
const cstName = document.querySelector('.the-cst-name')
const cstNum = document.querySelector('.the-cst-num')
const cstAdress = document.querySelector('.the-cst-adress')
const sellingHour = document.querySelector('.selling-hour')
const sellingDate = document.querySelector('.selling-date')
const seller = document.querySelector('.seller')
let fullInvoice;
if (localStorage.theFullInvoice != null) {
    fullInvoice = JSON.parse(localStorage.theFullInvoice)
} else {
    fullInvoice = []
}


function clearFullInvoice() {
    localStorage.removeItem("theFullInvoice");
    // localStorage.removeItem("theInvoice2");
    // localStorage.removeItem("theInvoice3");
}

function showHeaderData() {
    for (let i = 0; i < fullInvoice.length; i++) {
        cstName.innerHTML = `${fullInvoice[0].firstName}`
        cstNum.innerHTML = `${fullInvoice[0].phoneNum}`
        sellingHour.innerHTML = `${fullInvoice[0].hour}`
        sellingDate.innerHTML = `${fullInvoice[0].dateOnly}`
        seller.innerHTML = `${fullInvoice[0].lastName}`
    }
}
showHeaderData()
function showInvoiceData() {
    // let dateFunc = new Date()
    // let date = dateFunc.toString()
    //soldProductpage[16].title[0].title

    let invoiceBodyHtml = '';

    for (let i = 0; i < fullInvoice.length; i++) {

        invoiceBodyHtml += `
            <tr>
            <td>${i + 1}</td>
            <td>${fullInvoice[i].title || fullInvoice[i].data[0].title}</td>

            <td>${fullInvoice[i].qty || fullInvoice[i].data[0].qty}</td>

            <td>${fullInvoice[i].price || fullInvoice[i].data[0].price}</td>

            <td>${+fullInvoice[i].price * +fullInvoice[i].qty || fullInvoice[i].data[0].total}</td>

            <td>${fullInvoice[i].category || fullInvoice[i].data[0].category}</td>
            </tr>
            `
        console.log(fullInvoice);
    }
    let tbody = document.querySelector('#invoice-body')
    tbody.innerHTML = invoiceBodyHtml

}
showInvoiceData()

let nums = []
let sum = 0;
function getTotal() {

    for (let i = 0; i < fullInvoice.length; i++) {

        // var num = test[i] + test[i];
        nums.push(+fullInvoice[i].total || +fullInvoice[i].data[0].total)
        sum += parseInt(nums[i]);
    }
    totalSection.innerHTML = `Total: ${sum} `

}

getTotal()

function applyDiscount() {

    afterDiscount.innerHTML = sum - discountAmount.value;
}

function applyTax() {
    afterTax.innerHTML = afterDiscount.innerHTML * taxAmount.value;
    totalAftTax.innerHTML = `Total After Tax: ${Math.round(afterTax.innerHTML) + +afterDiscount.innerHTML} `
}



let numsQty = []
let sumQty = 0;
function getTotalQty() {

    for (let i = 0; i < fullInvoice.length; i++) {

        // var num = test[i] + test[i];
        numsQty.push(+fullInvoice[i].qty || +fullInvoice[i].data[0].qty)
        sumQty += parseInt(numsQty[i]);
    }
    totalQtyNum.innerHTML = `Items: ${sumQty} `
    console.log(sumQty);

}

getTotalQty()