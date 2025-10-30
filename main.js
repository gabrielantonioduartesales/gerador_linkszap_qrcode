!function (t) {
    function e(t) {
        this.qr = null, this._el = t, this.clear()
    }
    e.prototype.makeCode = function (t) {
        this.clear(); this.qr = new QRCode(this._el, { text: t, width: 200, height: 200 })
    }, e.prototype.clear = function () {
        this._el.innerHTML = ""
    }, window.SimpleQR = e

}(window);

var script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
document.head.appendChild(script);


function onlyDigits(s) { return (s || '').replace(/\D+/g, '') }
function el(id) { return document.getElementById(id) }

const genBtn = el('genBtn'), clearBtn = el('clearBtn');
const ddi = el('ddi'), ddd = el('ddd'), phone = el('phone'), message = el('message');
const output = el('output'), waLink = el('waLink'), openWa = el('openWa'), copyWa = el('copyWa');
const waQrDiv = el('waQr'), downloadWaQr = el('downloadWaQr');

const linkInput = el('linkInput'), genLinkQr = el('genLinkQr');
const linkQrBox = el('linkQrBox'), linkQrDiv = el('linkQr'), linkQrText = el('linkQrText'), downloadLinkQr = el('downloadLinkQr'), openLink = el('openLink');

let waQr = null, linkQr = null;

function buildWhatsAppLink(number, text) { return 'https://wa.me/' + number + (text ? ('?text=' + encodeURIComponent(text)) : '') }

function generateImageFromQr(qrDiv, a, filename = 'qrcode.png') {
    setTimeout(() => {
        const img = qrDiv.querySelector('img');
        if (img && img.src.startsWith('data:image')) {
            a.href = img.src;
            a.download = filename; 
        } else {
            console.warn('QR Code não encontrado ou ainda não renderizado.');
        }
    }, 500);
}


genBtn.addEventListener('click', () => {
    const nddi = onlyDigits(ddi.value), nddd = onlyDigits(ddd.value), nphone = onlyDigits(phone.value), text = message.value || '';
    if (!nddi || !nddd || !nphone) { alert('Preencha DDI, DDD e telefone'); return }
    const number = nddi + nddd + nphone, link = buildWhatsAppLink(number, text);
    waLink.textContent = link;
    openWa.href = link;
    copyWa.onclick = e => { e.preventDefault(); navigator.clipboard.writeText(link).then(() => alert('Copiado!')) }

    if (!waQr) waQr = new SimpleQR(waQrDiv);
    waQr.makeCode(link);
    generateImageFromQr(waQrDiv, downloadWaQr);
    output.style.display = 'grid';
})

clearBtn.addEventListener('click', () => {
    ddi.value = ''; ddd.value = ''; phone.value = ''; message.value = '';
    output.style.display = 'none';
    waLink.textContent = '';
    if (waQr) waQr.clear();
})

genLinkQr.addEventListener('click', () => {
    const href = (linkInput.value || '').trim();
    if (!href) { alert('Insira um link'); return; }
    linkQrText.textContent = href; openLink.href = href;
    if (!linkQr) linkQr = new SimpleQR(linkQrDiv);
    linkQr.makeCode(href);
    generateImageFromQr(linkQrDiv, downloadLinkQr);
    linkQrBox.style.display = 'block';
})