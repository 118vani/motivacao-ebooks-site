# 🚀 Guia de Deploy Permanente

Este documento fornece instruções passo a passo para fazer deploy permanente do site "Motivação para Todas as Idades".

## ☁️ Opção 1: Heroku (Recomendado para Iniciantes)

### Pré-requisitos
- Conta Heroku (gratuita em https://www.heroku.com)
- Heroku CLI instalado
- Git instalado

### Passos

1. **Faça login no Heroku**
```bash
heroku login
```

2. **Crie uma nova aplicação**
```bash
heroku create seu-app-motivacao
```

3. **Configure o buildpack**
```bash
heroku buildpacks:set heroku/nodejs
```

4. **Faça deploy**
```bash
git push heroku master
```

5. **Abra a aplicação**
```bash
heroku open
```

### URL Permanente
Seu site estará disponível em: `https://seu-app-motivacao.herokuapp.com`

---

## 🚂 Opção 2: Railway (Fácil e Moderno)

### Pré-requisitos
- Conta Railway (gratuita em https://railway.app)
- Repositório GitHub

### Passos

1. **Conecte seu repositório GitHub**
   - Vá para railway.app
   - Clique em "New Project"
   - Selecione "Deploy from GitHub"
   - Autorize e selecione o repositório

2. **Configure variáveis de ambiente**
   - Na aba "Variables", adicione:
   ```
   PORT=3000
   NODE_ENV=production
   ```

3. **Deploy automático**
   - Railway fará deploy automaticamente quando você fazer push

### URL Permanente
Seu site estará disponível em: `https://seu-projeto.up.railway.app`

---

## 🌐 Opção 3: DigitalOcean (Mais Controle)

### Pré-requisitos
- Conta DigitalOcean ($5-6/mês)
- SSH client

### Passos

1. **Crie um Droplet**
   - Vá para DigitalOcean
   - Clique em "Create" > "Droplets"
   - Selecione Ubuntu 22.04
   - Escolha o plano básico ($5/mês)
   - Clique em "Create Droplet"

2. **Conecte via SSH**
```bash
ssh root@seu-ip-droplet
```

3. **Instale Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/motivacao-ebooks-site.git
cd motivacao-ebooks-site
npm install
```

5. **Instale PM2 (gerenciador de processos)**
```bash
sudo npm install -g pm2
pm2 start server.js --name "motivacao-site"
pm2 startup
pm2 save
```

6. **Configure Nginx como reverse proxy**
```bash
sudo apt-get install -y nginx
```

Edite `/etc/nginx/sites-available/default`:
```nginx
server {
    listen 80 default_server;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Reinicie Nginx:
```bash
sudo systemctl restart nginx
```

7. **Configure SSL com Let's Encrypt**
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com
```

### URL Permanente
Seu site estará disponível em: `https://seu-ip-droplet` ou `https://seu-dominio.com`

---

## 🔧 Opção 4: AWS (Escalável)

### Pré-requisitos
- Conta AWS
- EC2 console acesso

### Passos

1. **Crie uma instância EC2**
   - Vá para AWS Console
   - Clique em "Launch Instance"
   - Selecione Ubuntu 22.04 LTS
   - Escolha t2.micro (elegível para free tier)
   - Configure security group para permitir portas 80 e 443

2. **Conecte via SSH**
```bash
ssh -i seu-chave.pem ubuntu@seu-ip-ec2
```

3. **Siga os passos 3-7 da seção DigitalOcean**

4. **Configure domínio com Route 53**
   - Vá para Route 53
   - Crie um hosted zone
   - Aponte para seu IP EC2

### URL Permanente
Seu site estará disponível em: `https://seu-dominio.com`

---

## 📊 Opção 5: Vercel (Ideal para Node.js)

### Pré-requisitos
- Conta Vercel (gratuita em https://vercel.com)
- Repositório GitHub

### Passos

1. **Conecte seu repositório**
   - Vá para vercel.com
   - Clique em "Import Project"
   - Selecione seu repositório GitHub

2. **Configure variáveis de ambiente**
   - Adicione `PORT=3000` e `NODE_ENV=production`

3. **Deploy**
   - Vercel fará deploy automaticamente

### URL Permanente
Seu site estará disponível em: `https://seu-projeto.vercel.app`

---

## 🔐 Segurança em Produção

### Checklist

- [ ] Use HTTPS (SSL/TLS)
- [ ] Configure CORS adequadamente
- [ ] Use variáveis de ambiente para secrets
- [ ] Implemente rate limiting
- [ ] Configure firewall
- [ ] Use senhas fortes
- [ ] Mantenha dependências atualizadas
- [ ] Configure backups automáticos
- [ ] Monitore logs de erro
- [ ] Configure alertas

### Exemplo de Configuração Segura

```javascript
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Segurança
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN);
  next();
});
```

---

## 📈 Monitoramento

### Ferramentas Recomendadas

- **Uptime Monitoring**: UptimeRobot (gratuito)
- **Error Tracking**: Sentry
- **Analytics**: Google Analytics
- **Performance**: New Relic

---

## 🆘 Troubleshooting

### Porta já em uso
```bash
lsof -i :3000
kill -9 <PID>
```

### Permissões negadas
```bash
sudo chown -R $USER:$USER /caminho/do/projeto
```

### Dependências não instaladas
```bash
rm -rf node_modules package-lock.json
npm install
```

### Servidor não inicia
```bash
npm start
# Verifique os logs
tail -f /var/log/syslog
```

---

## 📞 Suporte

Para dúvidas sobre deploy, consulte:
- Documentação oficial da plataforma
- Stack Overflow
- GitHub Issues
- Comunidades Node.js

---

**Sucesso no seu deploy! 🎉**
