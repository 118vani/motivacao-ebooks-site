# 📚 Motivação para Todas as Idades - Website

Um site profissional para a série de e-books sobre motivação adaptados para diferentes faixas etárias.

## 🚀 Características

- **5 E-books Completos**: Crianças, Adolescentes, Adultos Jovens, Adultos e Maturidade
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Download de PDFs**: Sistema seguro de download dos e-books
- **Páginas Informativas**: Home, Sobre, Contato, Detalhes de cada e-book
- **SEO Otimizado**: Estrutura semântica e meta tags
- **Performance**: Carregamento rápido e otimizado

## 📋 Estrutura do Projeto

```
motivacao-ebooks-site/
├── public/
│   ├── pdfs/              # E-books em PDF
│   ├── styles.css         # Estilos do site
│   ├── script.js          # JavaScript do site
│   └── images/            # Imagens (se necessário)
├── src/
│   └── pages/             # Templates EJS
│       ├── index.ejs      # Home
│       ├── ebook-detail.ejs
│       ├── about.ejs
│       ├── contact.ejs
│       └── 404.ejs
├── server.js              # Servidor Express
├── package.json           # Dependências
└── README.md             # Este arquivo
```

## 🛠️ Instalação

### Pré-requisitos
- Node.js 14+
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd motivacao-ebooks-site
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm start
```

4. Acesse no navegador:
```
http://localhost:3000
```

## 📦 Deploy Permanente

### Opção 1: Heroku

1. Crie uma conta em [Heroku](https://www.heroku.com)
2. Instale o Heroku CLI
3. Execute:
```bash
heroku login
heroku create seu-app-name
git push heroku main
```

### Opção 2: Railway

1. Crie uma conta em [Railway](https://railway.app)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente
4. Deploy automático

### Opção 3: DigitalOcean

1. Crie um Droplet Ubuntu 22.04
2. SSH para o servidor
3. Clone o repositório
4. Instale Node.js e npm
5. Use PM2 para gerenciar o processo:
```bash
npm install -g pm2
pm2 start server.js --name "motivacao-site"
pm2 startup
pm2 save
```

### Opção 4: AWS

1. Crie uma instância EC2
2. Configure o security group
3. SSH para a instância
4. Siga os passos do DigitalOcean

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env`:
```
PORT=3000
NODE_ENV=production
```

### Personalização

- **Cores**: Edite as variáveis CSS em `public/styles.css`
- **Conteúdo**: Edite os templates em `src/pages/`
- **E-books**: Adicione novos PDFs em `public/pdfs/`

## 📧 Contato

Para adicionar funcionalidade de email no formulário de contato, configure:

1. Instale nodemailer:
```bash
npm install nodemailer
```

2. Adicione ao `server.js`:
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## 📊 Analytics

Para adicionar Google Analytics, adicione ao template HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🔒 Segurança

- Valide todos os inputs
- Use HTTPS em produção
- Implemente rate limiting
- Mantenha dependências atualizadas

## 📝 Licença

Este projeto está sob a licença MIT.

## 👥 Contribuições

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request.

## 📞 Suporte

Para suporte, entre em contato através de:
- Email: contato@motivacao-ebooks.com
- Telefone: (11) 9999-9999

---

**Desenvolvido com ❤️ por Manus AI**
