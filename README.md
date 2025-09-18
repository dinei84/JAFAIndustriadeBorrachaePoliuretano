# JAFA Indústria de Borracha e Poliuretano - Site Institucional

## 📋 Sobre o Projeto

Site institucional da **JAFA Indústria de Borracha e Poliuretano**, empresa especializada em soluções industriais de borracha e poliuretano desde 1990. O site apresenta a empresa, seus produtos, história e informações de contato de forma moderna e responsiva.

## 🏢 Sobre a Empresa

A JAFA Vedantes está localizada em Senador Canedo, Goiás, e oferece soluções personalizadas e ágeis para diversos setores industriais. Com mais de 30 anos de experiência no mercado, a empresa atua nos segmentos de borracha e poliuretano com apoio técnico e comercial especializado.

### Missão
Abastecer o mercado de vedações e peças técnicas de borracha e poliuretano com qualidade, seriedade e agilidade.

### Visão
Expandir continuamente nossa atuação no mercado de borracha e poliuretano com responsabilidade social, excelência técnica e relações comerciais sólidas e duradouras.

### Valores
Integridade, inovação, excelência, responsabilidade social e moral.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações customizadas
- **JavaScript** - Interatividade e funcionalidades
- **Tailwind CSS** - Framework CSS utilitário
- **Font Awesome** - Ícones
- **Google Maps** - Integração de mapas

## 📁 Estrutura do Projeto

```
JAFAIndustriadeBorrachaePoliuretano/
├── assets/
│   ├── css/
│   │   ├── style.css          # Estilos customizados
│   │   └── modal.css          # Estilos para modais
│   ├── js/
│   │   ├── main.js           # JavaScript principal
│   │   └── modal.js          # Funcionalidades de modal
│   ├── clients/              # Logos dos clientes
│   │   ├── cargill.png
│   │   ├── heinz.png
│   │   ├── renault.png
│   │   └── teuto.png
│   └── [imagens diversas]     # Imagens do site
├── includes/
│   ├── header.html           # Cabeçalho reutilizável
│   └── footer.html           # Rodapé reutilizável
├── pages/
│   ├── contato.html          # Página de contato
│   ├── produtos.html         # Página de produtos
│   └── sobre.html            # Página sobre a empresa
├── index.html                # Página inicial
└── LICENSE                   # Licença do projeto
```

## 🎨 Design e Identidade Visual

### Paleta de Cores
- **Verde Principal**: `#488A31` - Cor de destaque para botões e elementos interativos
- **Verde Escuro**: `#3a7327` - Hover states
- **Preto Principal**: `#070F0A` - Backgrounds escuros e texto principal
- **Cinza**: `#gray-50`, `#gray-100`, `#gray-300` - Backgrounds e textos secundários

### Tipografia
- **Fonte**: Sans-serif (sistema)
- **Hierarquia**: Títulos grandes (text-4xl, text-5xl), subtítulos (text-xl, text-2xl), corpo (text-base)

## 📱 Funcionalidades

### Página Inicial (`index.html`)
- **Hero Section**: Slideshow automático com imagens da empresa
- **Seção de Diferenciais**: Qualidade, tecnologia e entrega rápida
- **Preview de Produtos**: Cards com principais categorias
- **Navegação responsiva** com menu mobile

### Página Sobre (`pages/sobre.html`)
- **História da empresa** com imagem da fábrica
- **Missão, Visão e Valores** em cards
- **Diretoria executiva** com foto do diretor
- **Galeria de clientes** (Cargill, Heinz, Renault, Teuto)

### Página de Produtos (`pages/produtos.html`)
- **Navegação por categorias**: Borracha, Poliuretano, Personalizados, Acessórios
- **Seções detalhadas** para cada categoria
- **Grid de produtos** com imagens e descrições
- **Links para solicitação de orçamento**

### Página de Contato (`pages/contato.html`)
- **Informações completas**: Endereço, telefone, email, horários
- **Formulário de contato** com campos específicos
- **Mapa integrado** do Google Maps
- **FAQ** com perguntas frequentes
- **Links para redes sociais**

## ⚙️ Funcionalidades JavaScript

### `assets/js/main.js`
- **Menu mobile**: Toggle do menu hambúrguer
- **Hero slider**: Slideshow automático na página inicial
- **Smooth scrolling**: Navegação suave entre seções
- **Back to top**: Botão para voltar ao topo
- **Animações**: Efeitos de entrada dos elementos

### `assets/js/modal.js`
- **Sistema de modais**: Para galerias e detalhes de produtos

## 🎭 Animações CSS

### Classes de Animação
- `.animate-fadeIn` - Fade in suave
- `.animate-slideInLeft` - Entrada da esquerda
- `.animate-slideInRight` - Entrada da direita
- `.animate-float` - Efeito flutuante para botões

### Transições
- **Hover effects** em cards e botões
- **Transform scale** em elementos interativos
- **Smooth transitions** em todos os elementos

## 📞 Informações de Contato

### Endereço
Av. Pedro Miranda, 1473, Qd 5 - Lt 38 - Bairro Terra Bela Cerrado I
Senador Canedo - Goiás - CEP 75264-240

### Contato
- **Telefone**: (62) 3413-4396
- **WhatsApp**: (62) 9190-0795
- **Email**: comercial.jafavedantes@gmail.com
- **Email 2**: comercial2.jafavedantes@gmail.com

### Horário de Funcionamento
Segunda a Sexta: 8h às 18h

## 🛠️ Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd JAFAIndustriadeBorrachaePoliuretano
   ```

2. **Abra o arquivo index.html** em um navegador web ou use um servidor local:
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Usando Node.js (http-server)
   npx http-server
   
   # Usando PHP
   php -S localhost:8000
   ```

3. **Acesse** `http://localhost:8000` no navegador

## 📦 Dependências Externas

O projeto utiliza CDNs para as seguintes bibliotecas:
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- **Google Maps**: Para integração de mapas

## 🔧 Personalização

### Adicionando Novos Produtos
1. Adicione a imagem do produto na pasta `assets/`
2. Edite `pages/produtos.html` para incluir o novo produto
3. Atualize as seções relevantes

### Modificando Cores
1. Edite as variáveis CSS em `assets/css/style.css`
2. Atualize as classes Tailwind nos arquivos HTML
3. Mantenha a consistência da identidade visual

### Adicionando Novas Páginas
1. Crie o arquivo HTML na pasta `pages/`
2. Copie a estrutura de navegação das páginas existentes
3. Atualize os links de navegação em todas as páginas

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado com navegação otimizada
- **Mobile**: Menu hambúrguer e layout vertical

## 🎯 SEO e Acessibilidade

- **Meta tags** adequadas em todas as páginas
- **Alt text** em todas as imagens
- **Estrutura semântica** HTML5
- **Navegação por teclado** funcional
- **Contraste adequado** de cores

## 🚀 Deploy

### Hospedagem Estática
O site pode ser hospedado em qualquer serviço de hospedagem estática:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**

### Configurações Recomendadas
- **HTTPS** obrigatório
- **Compressão GZIP** habilitada
- **Cache headers** configurados
- **CDN** para assets estáticos

## 📈 Melhorias Futuras

### Funcionalidades Sugeridas
- [ ] **Sistema de blog** para notícias da empresa
- [ ] **Catálogo online** com filtros avançados
- [ ] **Calculadora de orçamento** interativa
- [ ] **Chat online** para suporte
- [ ] **Sistema de newsletter** funcional
- [ ] **Galeria de projetos** realizados
- [ ] **Certificações e prêmios** da empresa
- [ ] **Depoimentos de clientes** com sistema de avaliação

### Otimizações Técnicas
- [ ] **Lazy loading** para imagens
- [ ] **Minificação** de CSS e JS
- [ ] **Otimização de imagens** (WebP, compressão)
- [ ] **Service Worker** para cache offline
- [ ] **Analytics** integrado (Google Analytics)
- [ ] **Schema markup** para SEO

## 📄 Licença

Este projeto está sob a licença especificada no arquivo `LICENSE`.

## 👥 Equipe de Desenvolvimento

Para futuras alterações e manutenção, consulte a documentação técnica e mantenha a consistência com o design system estabelecido.

---

**JAFA Indústria de Borracha e Poliuretano** - Soluções industriais de qualidade desde 1990.
