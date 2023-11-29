async function generateSignature() {
    let name = document.getElementById('name').value;
    let title = document.getElementById('title').value;
    let website = document.getElementById('website').value;
    let logo = document.getElementById('logo').files[0];

    // Use Cloudinary's upload API with an unsigned preset
    let formData = new FormData();
    formData.append('file', logo);
    formData.append('upload_preset', 'uhvtfwpo'); // Your unsigned upload preset

    try {
        let uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/hilnr/image/upload`, { // Your Cloudinary cloud name
            method: 'POST',
            body: formData
        });

        if (uploadResponse.ok) {
            let uploadData = await uploadResponse.json();
            let logoUrl = uploadData.secure_url; // URL of the uploaded image

            // Build the signature HTML
            let signatureHtml = `<div><img src="${logoUrl}" alt="Logo"><p>${name}<br>${title}<br><a href="${website}">Website</a></p></div>`;

            // Display the signature
            document.getElementById('signature-preview').innerHTML = signatureHtml;

            // Output the HTML code
            document.getElementById('signature-html').value = signatureHtml;
        } else {
            console.error('Upload failed:', uploadResponse.statusText);
        }
    } catch (error) {
        console.error('Error during upload:', error);
    }
}
