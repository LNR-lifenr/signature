async function generateSignature() {
    let name = document.getElementById('name').value;
    let title = document.getElementById('title').value;
    let website = document.getElementById('website').value;
    let logo = document.getElementById('logo').files[0];

    // Get signature from your server
    let response = await fetch('YOUR_SERVER_ENDPOINT');
    let data = await response.json();
    let signature = data.signature;
    let timestamp = data.timestamp;

    // Use Cloudinary's upload API
    let formData = new FormData();
    formData.append('file', logo);
    formData.append('timestamp', timestamp);
    formData.append('api_key', '822413918619826');
    formData.append('signature', signature);

    let uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/hilnr/image/upload`, {
        method: 'POST',
        body: formData
    });

    let uploadData = await uploadResponse.json();
    let logoUrl = uploadData.secure_url; // URL of the uploaded image

    // Build the signature HTML
    let signatureHtml = `<div><img src="${logoUrl}" alt="Logo"><p>${name}<br>${title}<br><a href="${website}">Website</a></p></div>`;

    // Display the signature
    document.getElementById('signature-preview').innerHTML = signatureHtml;

    // Output the HTML code
    document.getElementById('signature-html').value = signatureHtml;
}
