Gerador de Link WhatsApp + QR Code
Criado por Gabriel Antonio Duarte Sales

📋 Descrição
Uma ferramenta web que permite gerar links para WhatsApp com mensagens pré-definidas e criar QR Codes para esses links ou qualquer outro URL.

🚀 Funcionalidades
✨ Principais
Gerador de Link WhatsApp: Cria links diretos para conversas no WhatsApp

QR Code WhatsApp: Gera QR Codes para os links do WhatsApp

QR Code Universal: Cria QR Codes para qualquer URL

Download de QR Codes: Permite baixar os QR Codes gerados

🎯 Características
Interface responsiva e intuitiva

Validação de números de telefone

Codificação automática de mensagens

Download de imagens QR Code

Design moderno e clean

🛠️ Tecnologias Utilizadas
HTML5 - Estrutura da página

CSS3 - Estilização e design responsivo

JavaScript Vanilla - Funcionalidades principais

QRCode.js - Biblioteca para geração de QR Codes

📁 Estrutura do Projeto
text
link/
├── index.html          # Página principal
├── style.css           # Estilos da aplicação
├── main.js             # JavaScript principal
└── README.md           # Documentação
🔧 Como Usar
1. Gerar Link WhatsApp + QR Code
Preencha os campos:

DDI (ex: 55 para Brasil)

DDD (ex: 31 para Minas Gerais)

Número do telefone

Mensagem opcional

Clique em "Gerar WhatsApp + QR"

Resultados:

Link do WhatsApp gerado

QR Code correspondente

Opções para abrir, copiar link e download QR Code

2. Gerar QR Code de Qualquer Link
Cole qualquer URL no campo de texto

Clique em "Gerar QR"

Recursos disponíveis:

Visualização do QR Code

Download da imagem

Link para abrir a URL

🎨 Personalização
Cores e Tema
As cores podem ser personalizadas através das variáveis CSS:

css
:root {
    --accent: #25D366;    /* Cor principal (verde WhatsApp) */
    --bg: #f6f7fb;        /* Cor de fundo */
    --card: #fff;         /* Cor dos cards */
    --muted: #666         /* Texto secundário */
}
📱 Responsividade
A aplicação é totalmente responsiva e funciona em:

✅ Desktop

✅ Tablet

✅ Smartphone

🔄 Funcionalidades JavaScript
Classes Principais
SimpleQR - Wrapper para a biblioteca QRCode.js

javascript
const qr = new SimpleQR(element);
qr.makeCode('https://exemplo.com');
qr.clear();
Funções Utilitárias
onlyDigits() - Remove caracteres não numéricos

buildWhatsAppLink() - Constrói URL do WhatsApp

generateImageFromQr() - Prepara download do QR Code

🌐 Deploy
Hospedagem Git Hub Pages

Qualquer servidor web estático

📞 Suporte
Desenvolvido por: Gabriel Antonio Duarte Sales
31 98244-8518

Para dúvidas ou sugestões, entre em contato através do GitHub.

📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.
