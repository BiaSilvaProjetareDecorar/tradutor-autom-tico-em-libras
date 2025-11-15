# Tradutor Automático de Áudio/Vídeo para Libras (VLibras) — Tradução Dinâmica

Este aplicativo permite captar áudio em tempo real (voz, vídeos, rádio, aulas, etc.) e converter em texto adaptado à estrutura esperada pelo VLibras, realizando a tradução para Libras em **quase tempo real** — ou seja, a cada frase ou trecho reconhecido o VLibras atualiza imediatamente a sinalização do avatar.

## Principais Funcionalidades

- **Captação de áudio ao vivo:** Fale no microfone ou aproxime vídeos ou outra fonte de som.
- **Transcrição automática:** O reconhecimento converte o áudio em texto, exibindo-o imediatamente na tela.
- **Adaptação gramatical para Libras:** O texto é automaticamente preparado para sinalização clara no VLibras.
- **Envio dinâmico ao VLibras:** Ao iniciar, o VLibras já abre automaticamente e o texto traduzido vai sendo atualizado durante toda a gravação, permitindo acompanhamento em “quase tempo real”.
- **Botão para copiar o texto adaptado.**

## Como Usar

1. Abra o arquivo `app.html` em um navegador moderno (Chrome, Edge, Brave).
2. Clique em **"Iniciar Microfone"** e fale ou aproxime qualquer fonte de áudio do microfone.
3. O VLibras será aberto em uma nova aba. Ela será constantemente atualizada a cada frase falada ou ouvida.
4. Veja o texto adaptado ser exibido na sua tela e o avatar VLibras sinalizando imediatamente.
5. Use o botão **Copiar Texto Adaptado** para copiar o resultado mais recente, se desejar.

**Dica:** Para captar áudio de vídeos, aproxime o microfone da fonte de som (caixa, TV, celular). Permita que o navegador acesse o microfone!

## Requisitos

- Navegador compatível com [Web Speech API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Speech_API) (Chrome recomendado).
- Permissão para acessar o microfone.

## Estrutura do Projeto

- `app.html` — Aplicativo principal, pronto para uso direto.

## Acessibilidade

- Altos contrastes e botões acessíveis por teclado.
- Integrado ao plugin VLibras para navegação acessível e sinalização em Libras.

## Contribua ou Sugira Melhorias!

Sugestões, regras gramaticais ou melhorias são bem-vindas! Abra uma issue ou envie um pull request.

## Licença

MIT — uso livre e adaptável para outras línguas de sinais.

---
Feito para acessibilidade, comunicação e inclusão. 🤟
