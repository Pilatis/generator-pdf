const express = require('express');
const fs = require('fs');
const path = require('path');
const PdfGenerator = require('./PdfGenerator');
const app = express();
const port = 4710;
const cors = require('cors')

app.use(cors())
app.use(express.json());

let storedData = null;

app.post('/pdf-generator', async (req, res) => {
    const data = req.body;
    try {
      storedData = data;
  
      const pdfGenerator = new PdfGenerator(data);
      const pdfBuffer = await pdfGenerator.generatePdf();
  
      const tempFilePath = path.join(__dirname, `laudo_veiculo-${data.id}.pdf`);
      fs.writeFileSync(tempFilePath, pdfBuffer);
  
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="laudo_veiculo-${data.id}.pdf"`
      );
      res.status(200).sendFile(tempFilePath, (err) => {
        if (err) {
          console.error('Erro ao enviar o arquivo:', err);
          res.status(500).send({ mensagem: 'Erro ao enviar PDF' });
        }
  
        fs.unlink(tempFilePath, (unlinkErr) => {
          if (unlinkErr) console.error('Erro ao deletar arquivo:', unlinkErr);
        });
      });
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
      res.status(500).send({ mensagem: 'Erro ao gerar PDF', erro: err.message });
    }
  });

app.get('/api/data', (req, res) => {
    try {
      if (!storedData) {
        return res.status(404).send({ mensagem: 'Nenhum dado encontrado.' });
      }
      res.status(200).json(storedData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      res.status(500).send({ mensagem: 'Erro ao buscar dados', erro: error.message });
    }
  });

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
