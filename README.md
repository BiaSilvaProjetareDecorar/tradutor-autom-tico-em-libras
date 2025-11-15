# Tradutor Automático de Áudio/Vídeo para Libras (VLibras)

Este aplicativo capta áudio em tempo real (voz ao vivo, vídeos próximos ao microfone/computador) e converte para texto adaptado à gramática da Libras. O texto adaptado é enviado automaticamente ao VLibras, permitindo que a tradução para sinais ocorra de forma instantânea e visual.

## Principais Funcionalidades

- **Captação de áudio ao vivo:** Com um clique, o microfone ouve sua fala ou o som de vídeos, transcrevendo em tempo real.
- **Adaptação automática do texto para Libras:** Aplica regras para transformar o texto no formato que a comunidade surda reconhece e o VLibras interpreta melhor.
- **Envio e visualização instantânea via VLibras:** Após adaptar o texto, o app abre uma nova aba com o VLibras sinalizando o conteúdo convertido.

## Como Usar

1. Abra o arquivo `app.html` em um navegador moderno (com suporte Web Speech API, como Chrome).
2. Clique em "Iniciar Microfone". Fale normalmente próximo ao microfone **ou** aproxime fontes de áudio, como vídeos.
3. O texto transcrito e adaptado será exibido na tela. Assim que finalizado, abrirá uma nova aba no VLibras, que irá sinalizar em libras.
4. Feche a aba do VLibras e repita o processo quando desejar!

> **Recomendação:** Use microfones próximos à fonte de áudio e, para vídeos do próprio computador, prefira caixas de som próximas ao microfone ou use softwares para transmissão do som do sistema.

## Compatibilidade & Pré-Requisitos

- **Navegador compatível com o Reconhecimento de Fala (Web Speech API).**
- **Permissão de acesso ao microfone.**
- Recomenda-se Google Chrome para melhor experiência.

## Estrutura do Projeto

- `app.html` — Aplicativo prático, pronto para uso, integração total com o VLibras Web.
- `frontend/` — (Futuro) Aplicativo React+Vite para expansão.
- `backend/` — (Opcional) API Node.js (Fastify) em TypeScript para lógica avançada, uso corporativo ou integração.

## Sugestões e Suporte

- Para erros, dúvidas ou sugestões, [abra uma issue](https://github.com/BiaSilvaProjetareDecorar/tradutor-autom-tico-em-libras/issues).
- O projeto é aberto a contribuições; evolua as regras ou adapte para outras línguas de sinais!

## Licença

[MIT, livre para uso e adaptação.]

---

Feito por apaixonados por acessibilidade! 🤟
