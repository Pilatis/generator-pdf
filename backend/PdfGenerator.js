const puppeteer = require('puppeteer');
const QRCode = require('qrcode');
const path = require('path');

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
        displayHeaderFooter: true,
        margin: {
            top: '40mm',
            bottom: '40mm',
            left: '20mm',
            right: '20mm'
        }
    });
    await browser.close();

    return pdfBuffer;
  }
}

module.exports = PdfGenerator;
