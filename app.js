// Elementos da interface
const saidaTexto = document.getElementById('saida-texto');
const iniciarBtn = document.getElementById('iniciar');
const pararBtn = document.getElementById('parar');
const exportTxt = document.getElementById('export-txt');
const exportPdf = document.getElementById('export-pdf');
const whatsappBtn = document.getElementById('whatsapp');
const historicoUl = document.getElementById('historico');
const audioFile = document.getElementById('audio-file');
const uploadAudio = document.getElementById('upload-audio');
const btnDark = document.getElementById('btn-darkmode');
const showManual = document.getElementById('show-manual');
const popManual = document.getElementById('pop-manual');
const closeManual = document.getElementById('close-manual');

let finalTranscript = '';
let textoAdaptado = '';
let vlibrasWin = null;
let ultimaFraseEnviada = '';
let historico = [];

// HISTÓRICO
function mostraHistorico() {
  historicoUl.innerHTML = '';
  historico.slice(-10).reverse().forEach((obj) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Original:</strong> ${obj.original}<br><strong>Libras:</strong> ${obj.libras}`;
    historicoUl.appendChild(li);
  });
}

// MICROFONE E RECONHECIMENTO DE FALA
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    saidaTexto.innerHTML = `<span style="color:var(--error);">ERRO: Navegador não suporta reconhecimento de fala (Web Speech API).<br>
      Teste no Chrome/Edge - ou faça upload de áudio se possível.</span>`;
    iniciarBtn.disabled = true;
    pararBtn.disabled = true;
    uploadAudio.disabled = false;
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    let interimTranscript = '';
    finalTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + " ";
      } else {
        interimTranscript += transcript;
      }
    }
    let textoParaAdaptar = (finalTranscript + interimTranscript).trim();
    saidaTexto.innerHTML = `<b>Original:</b> ${textoParaAdaptar}`;
  };

  recognition.onend = () => {
    iniciarBtn.style.backgroundColor = 'green';
    iniciarBtn.innerText = 'Iniciar Microfone';
    pararBtn.disabled = true;

    if (finalTranscript.trim().length > 0) {
      textoAdaptado = aplicarRegrasDeLibras(finalTranscript.trim());
      saidaTexto.innerHTML = `<b>Original:</b> ${finalTranscript}<br><b>Tradução adaptada para Libras:</b><br>"${textoAdaptado}"`;
      exportTxt.style.display = 'inline-block';
      exportPdf.style.display = 'inline-block';
      whatsappBtn.style.display = 'inline-block';
      historico.push({ original: finalTranscript.trim(), libras: textoAdaptado });
      mostraHistorico();

      abrirOuAtualizarVlibras(textoAdaptado);
    } else {
      exportTxt.style.display = 'none';
      exportPdf.style.display = 'none';
      whatsappBtn.style.display = 'none';
      saidaTexto.innerText += "\nNada captado. Tente novamente!";
    }
  };

  iniciarBtn.addEventListener('click', () => {
    if (typeof recognition.start === 'function') {
      finalTranscript = '';
      textoAdaptado = '';
      ultimaFraseEnviada = '';
      recognition.start();
      iniciarBtn.style.backgroundColor = 'orange';
      iniciarBtn.innerText = 'Gravando... (Espaço para parar)';
      pararBtn.disabled = false;
      saidaTexto.innerText = '🔴 Gravando... Fale ou aproxime áudio!';
      exportTxt.style.display = 'none';
      exportPdf.style.display = 'none';
      whatsappBtn.style.display = 'none';
    } else {
      saidaTexto.innerText = "ERRO: Não foi possível iniciar o microfone!";
    }
  });

  pararBtn.addEventListener('click', () => {
    recognition.stop();
    iniciarBtn.style.backgroundColor = 'green';
    iniciarBtn.innerText = 'Iniciar Microfone';
    pararBtn.disabled = true;
  });

  recognition.onerror = (event) => {
    let msg = '';
    if (event.error === 'not-allowed') {
      msg = "ERRO: Permissão ao microfone negada.";
    } else if (event.error === 'no-speech') {
      msg = "Nenhuma fala detectada. Tente novamente.";
    } else {
      msg = `Erro: ${event.error}`;
    }
    saidaTexto.innerText = msg;
    iniciarBtn.style.backgroundColor = 'green';
    iniciarBtn.innerText = 'Iniciar Microfone';
    pararBtn.disabled = true;
    exportTxt.style.display = 'none';
    exportPdf.style.display = 'none';
    whatsappBtn.style.display = 'none';
  };
}

// UPLOAD DE ÁUDIO (placeholder, precisa backend futuro)
uploadAudio.addEventListener('click', () => { audioFile.click(); });
audioFile.addEventListener('change', () => {
  if (audioFile.files[0]) {
    saidaTexto.innerText = "⚠️ Upload de áudio só será possível em versão futura com backend próprio.";
  }
});

// EXPORTAÇÃO
exportTxt.addEventListener('click', () => {
  if (textoAdaptado) {
    const blob = new Blob([textoAdaptado], { type: "text/plain" });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "tradução_libras.txt";
    link.click();
  }
});

exportPdf.addEventListener('click', () => {
  if (textoAdaptado) {
    const janela = window.open('', 'PDF');
    janela.document.write(`<pre style="font:1.05em monospace;padding:2em;">${textoAdaptado.replace(/</g, "&lt;")}</pre>`);
    janela.print();
  }
});

whatsappBtn.addEventListener('click', () => {
  if (textoAdaptado) {
    window.open(`https://wa.me/?text=${encodeURIComponent(textoAdaptado)}`);
  }
});

// DARK MODE
btnDark.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkmode", document.body.classList.contains("dark") ? "1" : "0");
};
if(localStorage.getItem("darkmode")==="1") document.body.classList.add("dark");

// ATALHO DE TECLADO Espaço
document.body.onkeyup = function(e){
  if(e.code==="Space"){
    if(iniciarBtn.disabled===false) iniciarBtn.click();
    else if(pararBtn.disabled===false) pararBtn.click();
  }
}

// POPUP MANUAL
showManual.onclick = ()=>{ popManual.style.display = "block";}
closeManual.onclick = ()=>{ popManual.style.display = "none";}
window.onclick = function(event) { if (event.target == popManual) popManual.style.display = "none"; }

// VLibras integração automática
function abrirOuAtualizarVlibras(frase) {
  if (!vlibrasWin || vlibrasWin.closed) {
    vlibrasWin = window.open(
      "https://www.vlibras.gov.br/tradutor/?query=" + encodeURIComponent(frase),
      "vlibrasLive"
    );
  } else {
    vlibrasWin.location.href = "https://www.vlibras.gov.br/tradutor/?query=" + encodeURIComponent(frase);
    vlibrasWin.focus();
  }
}

// REGRA DE ADAPTAÇÃO
function aplicarRegrasDeLibras(textoOriginal) {
    let textoCorrigido = textoOriginal.toLowerCase();
    textoCorrigido = textoCorrigido.replace(/\btá bom\b/g, 'ok')
      .replace(/\ba gente\b/g, 'nós')
      .replace(/\bmeu\b/g, 'eu')
      .replace(/\bminha\b/g, 'eu')
      .replace(/\bobrigado\b/g, 'obrigado')
      .replace(/\bnao\b/g, 'não')
      .replace(/\bcomprei\b/g, 'comprar')
      .replace(/\bfui\b/g, 'ir')
      .replace(/\bgosta\b/g, 'gostar')
      .replace(/\bvai\b/g, 'ir')
      .replace(/\bvá\b/g, 'ir')
      .replace(/\b(é|está|estou|somos|estar)\b/g, '');

    if (textoCorrigido.includes('amanhã')) {
      textoCorrigido = textoCorrigido.replace('amanhã', '').trim();
      textoCorrigido = 'amanhã ' + textoCorrigido;
    }
    if (textoCorrigido.includes('ontem')) {
      textoCorrigido = textoCorrigido.replace('ontem', '').trim();
      textoCorrigido = 'ontem ' + textoCorrigido;
    }
    if (textoCorrigido.includes(' não ')) {
      textoCorrigido = textoCorrigido.replace(' não ', ' ');
      textoCorrigido = textoCorrigido.trim() + ' NÃO';
    }
    if (textoCorrigido.includes(' ir ')) {
      let partes = textoCorrigido.split(' ');
      partes = partes.filter(p => p !== 'ir');
      textoCorrigido = partes.join(' ') + ' IR';
    }
    textoCorrigido = textoCorrigido.replace(/\b(o|a|à|os|as|um|uma|uns|umas|de|da|do|e|em|por)\b/g, '').trim();
    textoCorrigido = textoCorrigido.replace(/[.!?]/g, '');
    textoCorrigido = textoCorrigido.replace(/\s+/g, ' ').trim();
    return textoCorrigido.toUpperCase();
}
