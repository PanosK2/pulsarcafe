const XLSX = require('xlsx');
const workbook = XLSX.readFile('catalog.xlsx');
const sheet_name_list = workbook.SheetNames;
const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

xlData.forEach((item) => {
    const productName = item['A']; // Αντικαταστήστε το 'Όνομα Προϊόντος' με την ακριβή ονομασία της αριστερής στήλης.
    const productPrice = item['B']; // Αντικαταστήστε το 'Τιμή' με την ακριβή ονομασία της δεξιάς στήλης.

    const html = `<article class="item"><p class="products">${productName}</p><p class="price">${productPrice}</p></article>`;
    console.log(html); // Αντί για console.log μπορείτε να χρησιμοποιήσετε τον τρόπο που επιθυμείτε για να εμφανίσετε τα δεδομένα στον πίνακα HTML.
});
