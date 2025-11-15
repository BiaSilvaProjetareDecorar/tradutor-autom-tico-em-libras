# Tradutor Automático de Áudio/Vídeo para Libras (Integração com VLibras)

Este projeto é um aplicativo que capta áudios em tempo real (conversa, vídeos, etc.), transcreve para texto em português, adapta automaticamente a estrutura gramatical para Libras e envia esse texto diretamente para o VLibras, facilitando a comunicação e acessibilidade de pessoas surdas.

## Principais Funcionalidades

- **Captação de Áudio em tempo real:** Use o microfone do navegador para captar falas, vídeos ou outros sons.
- **Transcrição Inteligente:** O áudio é convertido em texto em português.
- **Adaptação de estrutura-Libras:** Aplica regras automáticas para ajustar o texto à gramática visual da Língua Brasileira de Sinais.
- **Integração direta com VLibras:** Abre automaticamente o tradutor VLibras, exibindo o avatar que sinaliza o texto adaptado.
- **Fácil de usar:** Basta um clique para começar a captar o áudio!

## Como Usar

1. Abra o `app.html` em um navegador moderno (Google Chrome, Edge, Brave ou Firefox com suporte à Reconhecimento de Fala).
2. Clique em **"Iniciar Microfone"** e comece a falar ou aproxime o microfone do áudio de um vídeo.
3. O sistema mostra o texto original e, ao terminar, adapta e envia o texto para o VLibras, abrindo em uma nova aba.
4. Veja o avatar VLibras sinalizando o que foi falado!

## Requisitos

- Navegador com suporte a [Web Speech API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Speech_API).
- Permissão para uso do microfone.

## Estrutura do Projeto

- `frontend/` — Aplicação React + Vite (opcional, evolução).
- `backend/` — API Node.js (Fastify) em TypeScript (opcional para uso avançado ou integração).
- `app.html` — Aplicativo simples, leve e funcional para uso direto pelo navegador.

## Acessibilidade e Sugestões

- Compatível com leitor de tela.
- Código aberto para evolução.
- Sugestões de melhoria são bem-vindas!

## Suporte

Em caso de dúvidas, problemas ou sugestões, [abra uma issue](https://github.com/BiaSilvaProjetareDecorar/tradutor-autom-tico-em-libras/issues) ou compartilhe sua experiência por aqui.

---
