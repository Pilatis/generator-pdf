const puppeteer = require('puppeteer');
const QRCode = require('qrcode');
const path = require('path');
const customStyle = require('./customStyle.js')

class PdfGenerator {
  constructor(data) {
    this.data = data;
  }

  async generatePdf() {
    const qrCodeUrl = await QRCode.toDataURL(`http://exemplo.com/laudo/${this.data.id}`);
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.goto('http://localhost:5173/');

    await page.evaluate((style) => {
      const head = document.head || document.getElementsByTagName('head')[0];
      const styleTag = document.createElement('style');
      styleTag.type = 'text/css';
      styleTag.innerHTML = style;
      head.appendChild(styleTag);
    }, customStyle);

    await page.evaluate((qrCode) => {
        const qrContainer = document.querySelector('.qr-code');
        if (qrContainer) {
          const qrImage = document.createElement('img');
          qrImage.src = qrCode;
          qrImage.alt = 'QR Code';
          qrContainer.appendChild(qrImage);
        }
      }, qrCodeUrl);

    const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20px',
            bottom: '20px',
            left: '5px',
            right: '5px'
        }
    });
    await browser.close();

    return pdfBuffer;
  }
}

module.exports = PdfGenerator;
