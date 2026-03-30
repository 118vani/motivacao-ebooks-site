const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/pages'));

// Dados dos e-books
const ebooks = [
  {
    id: 'criancas',
    title: '🌟 Motivação para Crianças',
    subtitle: '(6-12 anos)',
    description: 'Descobrindo Seu Superpoder Interior',
    fullDescription: 'Um guia inspirador para crianças descobrirem seu potencial e aprender como manter a motivação sempre carregada. Com histórias reais, exercícios práticos e dicas motivacionais especiais para essa faixa etária.',
    color: '#FFD93D',
    icon: '⭐',
    pages: 42,
    topics: ['Autoconfiança', 'Sonhos e Objetivos', 'Superando Desafios', 'Hábitos Positivos', 'Aprendendo com Erros'],
    pdf: 'ebook-motivacao-criancas.pdf',
    highlights: [
      'Linguagem lúdica e acessível',
      'Histórias inspiradoras de crianças reais',
      'Exercícios práticos de reflexão',
      'Dicas para manter a motivação'
    ]
  },
  {
    id: 'adolescentes',
    title: '🚀 Motivação para Adolescentes',
    subtitle: '(13-17 anos)',
    description: 'Construindo Seu Futuro Extraordinário',
    fullDescription: 'Um guia completo para adolescentes navegarem os desafios da idade, descobrirem sua identidade e construírem motivação genuína. Aborda pressão social, relacionamentos, carreira e resiliência.',
    color: '#6BCB77',
    icon: '🚀',
    pages: 48,
    topics: ['Identidade e Valores', 'Sonhos e Metas', 'Pressão e Medo', 'Resiliência', 'Relacionamentos', 'Redes Sociais', 'Hábitos', 'Futuro'],
    pdf: 'ebook-motivacao-adolescentes.pdf',
    highlights: [
      'Aborda pressão social e identidade',
      'Estratégias para lidar com medo',
      'Planejamento de futuro',
      'Histórias de adolescentes reais'
    ]
  },
  {
    id: 'adultos-jovens',
    title: '💼 Motivação para Adultos Jovens',
    subtitle: '(18-30 anos)',
    description: 'Construindo Sua Carreira e Vida Extraordinária',
    fullDescription: 'Um guia essencial para adultos jovens que estão começando suas carreiras e vidas independentes. Cobre propósito, carreira, relacionamentos, finanças e resiliência.',
    color: '#4D96FF',
    icon: '💼',
    pages: 50,
    topics: ['Propósito', 'Carreira', 'Relacionamentos', 'Finanças', 'Saúde', 'Criatividade', 'Resiliência', 'Visão de Futuro'],
    pdf: 'ebook-motivacao-adultos-jovens.pdf',
    highlights: [
      'Desenvolvimento de carreira',
      'Gestão financeira',
      'Construção de relacionamentos saudáveis',
      'Planejamento de 10 anos'
    ]
  },
  {
    id: 'adultos',
    title: '🎯 Motivação para Adultos',
    subtitle: '(30-50 anos)',
    description: 'Vivendo Sua Melhor Vida',
    fullDescription: 'Um guia para adultos em meia-idade redescobrirem propósito, aprofundarem relacionamentos e viverem com plenitude. Aborda carreira, saúde, legado e crescimento pessoal.',
    color: '#FF6B6B',
    icon: '🎯',
    pages: 46,
    topics: ['Redefinindo Sucesso', 'Carreira', 'Relacionamentos', 'Saúde', 'Propósito', 'Legado', 'Finanças', 'Criatividade'],
    pdf: 'ebook-motivacao-adultos.pdf',
    highlights: [
      'Redefinição de sucesso',
      'Saúde e bem-estar',
      'Legado e mentoria',
      'Crescimento contínuo'
    ]
  },
  {
    id: 'maturidade',
    title: '🌅 Motivação para Maturidade',
    subtitle: '(50+ anos)',
    description: 'Vivendo Com Propósito e Plenitude',
    fullDescription: 'Um guia inspirador para pessoas na maturidade viverem seus melhores anos com propósito, conexão e alegria. Aborda saúde, relacionamentos, legado, liberdade e espiritualidade.',
    color: '#A78BFA',
    icon: '🌅',
    pages: 44,
    topics: ['Redefinindo Envelhecimento', 'Saúde', 'Propósito', 'Relacionamentos', 'Legado', 'Liberdade', 'Crescimento', 'Paz'],
    pdf: 'ebook-motivacao-maturidade.pdf',
    highlights: [
      'Propósito e significado',
      'Relacionamentos profundos',
      'Deixando legado',
      'Paz e aceitação'
    ]
  }
];

// Rotas
app.get('/', (req, res) => {
  res.render('index', { ebooks });
});

app.get('/ebook/:id', (req, res) => {
  const ebook = ebooks.find(e => e.id === req.params.id);
  if (!ebook) {
    return res.status(404).render('404');
  }
  res.render('ebook-detail', { ebook });
});

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  // Validar que o arquivo é um PDF válido
  if (!filename.startsWith('ebook-motivacao-') || !filename.endsWith('.pdf')) {
    return res.status(400).send('Arquivo inválido');
  }
  
  const filepath = path.join(__dirname, 'public/pdfs', filename);
  res.download(filepath, (err) => {
    if (err) {
      console.error('Erro ao fazer download:', err);
      res.status(500).send('Erro ao fazer download do arquivo');
    }
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// 404
app.use((req, res) => {
  res.status(404).render('404');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
