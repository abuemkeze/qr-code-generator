const form = document.getElementById('generate-form');
const qr = document.getElementById('qr-code');

const onGenerateSubmit = (e) => {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert("Please Enter a URL")
    } else {
        generateQRcode(url,size);
    }

}

const generateQRcode = (url, size) => {  
  
    const qrcode = new QRCode(document.getElementById("qrcode"),{
        text: url,
        width: size,
        height: size
    });
}

form.addEventListener('submit', onGenerateSubmit);
