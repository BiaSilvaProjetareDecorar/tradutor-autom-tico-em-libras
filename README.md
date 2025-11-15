# Tradutor Automático de Áudio/Vídeo para Libras (VLibras) — Tela Dividida

Este aplicativo transcreve áudio em tempo real (fala, vídeos, rádio, etc.), adapta a estrutura para Libras automaticamente e apresenta a tradução pelo avatar VLibras **diretamente na mesma tela**, sem abrir novas abas. É ideal para pessoas surdas utilizarem em conversas – basta abrir no navegador do celular ou computador.

## Funcionalidades

- **Captação de áudio ao vivo:** use o microfone do celular/computador, fale ou aproxime fontes de áudio.
- **Transcrição instantânea:** texto aparece na tela em tempo real.
- **Adaptação gramatical para Libras:** regras automáticas para frasear melhor no VLibras.
- **Avatar VLibras embutido:** tradução é apresentada instantaneamente, lado a lado.
- **Botão para copiar texto adaptado.**
- **Layout responsivo:** funciona bem no desktop e no celular.

## Como usar

1. Abra o arquivo `app.html` em um navegador moderno (Chrome recomendado, Edge ou Brave também funcionam bem).
2. Clique em **"Iniciar Microfone"** e fale ou aproxime a fonte de áudio.
3. O texto aparece na tela, já adaptado, e o avatar VLibras ao lado sinaliza a tradução automaticamente.
4. Use **"Copiar Texto Adaptado"** se quiser colar o texto em outro lugar.
5. Clique em **"Parar"** para encerrar a captação de áudio.

**Dica:** Permita o uso do microfone no navegador. Para usado com vídeos, aproxime o microfone da fonte de som.

## Requisitos

- Navegador compatível com [Web Speech API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Speech_API) – Chrome é o mais indicado.
- Permitir o uso do microfone.
- Conexão à internet.

## Estrutura do Projeto

- `app.html` — Aplicativo principal.

## Acessibilidade

- Interface com alto contraste e botões grandes.
- Avatar VLibras sempre visível.
- Controle por teclado
