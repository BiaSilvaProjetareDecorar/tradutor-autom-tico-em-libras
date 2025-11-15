# Tradutor Automático de Áudio/Vídeo para Libras (VLibras)

Este aplicativo permite captar áudio em tempo real (voz, vídeos, rádio, aulas, etc.) e converter em texto adaptado à estrutura esperada pelo VLibras, tornando simples a visualização em Libras em tempo real.

## Principais Funcionalidades

- **Captação de áudio ao vivo:** fale no microfone ou aproxime uma fonte de áudio.
- **Transcrição automática:** fala convertida em texto no navegador.
- **Adaptação gramatical para Libras:** regras que tornam o texto mais adequado à sinalização do VLibras.
- **Envio direto ao VLibras:** envio instantâneo do texto adaptado a uma nova aba do VLibras, para visualização do avatar sinalizando.
- **Botão para copiar o texto adaptado.**

## Como Usar

1. Abra o arquivo `app.html` em um navegador moderno (Chrome, Edge, Brave).
2. Clique em **"Iniciar Microfone"** e fale ou aproxime qualquer fonte de áudio do microfone.
3. Ao finalizar, o texto original e o adaptado aparecerão na tela.
4. O VLibras abrirá numa nova aba, sinalizando a tradução em Libras.
5. Use o botão "Copiar Texto Adaptado" se quiser colar a frase em outro local.

**Dica:** Para captar o áudio de vídeos, aproxime o microfone da fonte de som (caixas, TV, celular). Permita sempre o uso do microfone pelo navegador!

## Requisitos

- Navegador compatível com [Web Speech API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Speech_API) (Chrome recomendado).
- Permissão para acessar o microfone.

## Estrutura do Projeto

- `app.html` — Aplicativo principal, pronto para uso direto.
- `frontend/` — (Opcional/futuro) versão React+Vite.
- `backend/` — (Opcional/futuro) API Node.js para integração avançada.

## Acessibilidade

- Altos contrastes e botões acessíveis.
- Integrado ao plugin VLibras para navegação e tradução automática.

## Contribua!

Sugestões de novas regras gramaticais, melhorias de interface ou integração são bem-vindas! Abra uma issue ou envie um pull request.

## Licença

MIT, aberto para uso e personalização.

---
Feito com foco em acessibilidade e inclusão. 🤟
