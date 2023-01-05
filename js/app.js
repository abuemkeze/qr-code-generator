const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value

    if (url === '') {
        alert('Please Enter a URL')
    } else {
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url);
        }, 2000)
    }
}

const generateQRCode = (url) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: 200,
        height: 200,
    });
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const clearUI = () => {
    qr.innerHTML = '';
}

hideSpinner();
form.addEventListener('submit', onGenerateSubmit);