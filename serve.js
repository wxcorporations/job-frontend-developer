const { spawn } = require('child_process');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/download', (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL inválida.' });
  
  // Comando yt-dlp para jogar o arquivo para stdout
  const ytDlp = spawn('yt-dlp', ['--cookies-from-browser', 'chrome', '-f', 'mp4', '-o', '-',  url]);


  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');

  ytDlp.stdout.pipe(res);

  ytDlp.stderr.on('data', (data) => {
    console.error(`yt-dlp error: ${data}`);
  });

  ytDlp.on('close', (code) => {
    if (code !== 0) {
      console.error(`yt-dlp saiu com código ${code}`);

      res.end()

      // Se possível, finalize a resposta com erro (caso ainda não tenha enviado dados)
    }
  });
});

app.listen(5000, () => console.log('Servidor ativo!'));