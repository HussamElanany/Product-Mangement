let invoice;
if (localStorage.theInvoice != null) {
    invoice = JSON.parse(localStorage.theInvoice)
} else {
    invoice = []
}

let invoice2;
if (localStorage.theInvoice2 != null) {
    invoice2 = JSON.parse(localStorage.theInvoice2)
} else {
    invoice2 = []
}

let invoice3;
if (localStorage.theInvoice3 != null) {
    invoice3 = JSON.parse(localStorage.theInvoice3)
} else {
    invoice3 = []
}




function clearInvoice() {
    localStorage.removeItem("theInvoice");
    localStorage.removeItem("theInvoice2");
    localStorage.removeItem("theInvoice3");
}


const invoiceContainer = document.querySelector('.center-invoice')

if (invoice3 != '') {
    let invoiceHtml3 = `
            <div>
               <span>Title:</span> <span>${invoice3[0].title || invoice3[0].data[0].title} </span>
            </div>
            <div>
                <span>Quantity:</span> <span>${invoice3[0].qty || invoice3[0].data[0].qty} </span>
            </div>
            <div>
                <span>Price:</span> <span>${invoice3[0].price || invoice3[0].data[0].price} </span>
            </div>
            <div>
                <span>Total:</span> <span>${invoice3[0].total || invoice3[0].data[0].total} </span>
            </div>
            <div>
                <span>Category:</span> <span>${invoice3[0].category || invoice3[0].data[0].category} </span>
            </div>
            <div>
                <span>Sold To:</span> <span> ${invoice3[0].firstName + ' ' + invoice3[0].lastName || invoice3[0].firstName + ' ' + invoice3[i].lastName}</span>
            </div>
            <div>
                <span>Phone number:</span> <span>${invoice3[0].phoneNum || invoice3[0].phoneNum} </span>
            </div>
            <div>
                <span>Date & Hour:</span> <span>${invoice3[0].getDate || invoice3[0].data[0].getDate} </span>
            </div>
            <div>
                <hr>
                <h3 class='invoice-logo'> Standard </h3>
            </div>
    `
    invoiceContainer.innerHTML = invoiceHtml3;

}

if (invoice2 != '') {
    let invoiceHtml2 = `
            <div>
               <span>Title:</span> <span>${invoice2[0].title || invoice2[0].data[0].title} </span>
            </div>
            <div>
                <span>Quantity:</span> <span>${invoice2[0].qty || invoice2[0].data[0].qty} </span>
            </div>
            <div>
                <span>Price:</span> <span>${invoice2[0].price || invoice2[0].data[0].price} </span>
            </div>
            <div>
                <span>Total:</span> <span>${invoice2[0].total || invoice2[0].data[0].total} </span>
            </div>
            <div>
                <span>Category:</span> <span>${invoice2[0].category || invoice2[0].data[0].category} </span>
            </div>
            <div>
                <span>Sold To:</span> <span> ${invoice2[0].firstName + ' ' + invoice2[0].lastName || invoice2[0].firstName + ' ' + invoice2[i].lastName}</span>
            </div>
            <div>
                <span>Phone number:</span> <span>${invoice2[0].phoneNum || invoice2[0].phoneNum} </span>
            </div>
            <div>
                <span>Date & Hour:</span> <span>${invoice2[0].getDate || invoice2[0].data[0].getDate} </span>
            </div>
            <div>
            <hr>
            <h3 class='invoice-logo'> Standard </h3>
        </div>
    `
    invoiceContainer.innerHTML = invoiceHtml2;

}

if (invoice != []) {
    let invoiceHtml = `
            <div>
               <span>Title:</span> <span>${invoice[0].title || invoice[0].data[0].title} </span>
            </div>
            <div>
                <span>Quantity:</span> <span>${invoice[0].qty || invoice[0].data[0].qty} </span>
            </div>
            <div>
                <span>Price:</span> <span>${invoice[0].price || invoice[0].data[0].price} </span>
            </div>
            <div>
                <span>Total:</span> <span>${invoice[0].total || invoice[0].data[0].total} </span>
            </div>
            <div>
                <span>Category:</span> <span>${invoice[0].category || invoice[0].data[0].category} </span>
            </div>
            <div>
                <span>Sold To:</span> <span> ${invoice[0].firstName + ' ' + invoice[0].lastName || invoice[0].firstName + ' ' + invoice[i].lastName}</span>
            </div>
            <div>
                <span>Phone number:</span> <span>${invoice[0].phoneNum || invoice[0].phoneNum} </span>
            </div>
            <div>
                <span>Date & Hour:</span> <span>${invoice[0].getDate || invoice[0].data[0].getDate} </span>
            </div>
            <div>
            <hr>
            <h3 class='invoice-logo'> Standard </h3>
        </div>
    `
    invoiceContainer.innerHTML = invoiceHtml;

}
