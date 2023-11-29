function generateSignature() {
    let name = document.getElementById('name').value;
    let title = document.getElementById('title').value;
    let website = document.getElementById('website').value;
    let logo = document.getElementById('logo').files[0];

    // Build the signature HTML
    let signatureHtml = `<div><img src="${logo}" alt="Logo"><p>${name}<br>${title}<br><a href="${website}">Website</a></p></div>`;

    // Display the signature
    document.getElementById('signature-preview').innerHTML = signatureHtml;

    // Output the HTML code
    document.getElementById('signature-html').value = signatureHtml;
}
