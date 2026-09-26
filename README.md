# Garagem Autopeças e Acessórios 🚗⚡

Website institucional moderno, premium e totalmente responsivo para a **Garagem Autopeças e Acessórios**, empresa situada em **Rio Branco - AC**.

---

## 🏢 Sobre a Empresa

- **Nome Comercial:** Garagem Autopeças e Acessórios
- **Localização:** Av. Sobral, 521, Rio Branco - AC
- **WhatsApp:** (68) 99207-8888
- **Instagram:** [@garagemautoac](https://www.instagram.com/garagemautoac/)
- **Avaliação Google:** 5,0 ⭐ (52 avaliações públicas)
- **Diferencial:** Entregamos em Rio Branco e região

### Horários de Atendimento
- **Segunda a sexta:** 08:00 às 17:00
- **Sábado:** 08:00 às 12:00
- **Domingo:** Fechado

---

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** (App Router, Turbopack, TypeScript)
- **[React](https://react.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)** (Identidade visual automotiva: Preto, Grafite, Branco e Vermelho)
- **[Lucide Icons](https://lucide.dev/)**
- **SEO & Schema.org:** LocalBusiness / AutoPartsStore JSON-LD, Open Graph, Sitemap dinâmico e Robots.txt

---

## 📁 Estrutura do Projeto

```text
garagem-autopecas/
├── public/
│   └── images/
│       ├── logo.png                # Logotipo horizontal oficial
│       ├── fachada.jpg             # Fotografia real da fachada na Av. Sobral
│       ├── balcao-produtos.jpg     # Fotografia real dos produtos e balcão
│       └── interior-amplo.jpg      # Fotografia real do interior da loja
├── src/
│   ├── app/
│   │   ├── globals.css             # Estilos globais e identidade visual da Garagem
│   │   ├── layout.tsx              # SEO, metadados, viewport e Schema JSON-LD
│   │   ├── page.tsx                # Página única com todas as seções
│   │   ├── robots.ts               # Configuração para motores de busca
│   │   └── sitemap.ts              # Sitemap XML dinâmico
│   ├── components/
│   │   ├── Navbar.tsx              # Header sticky com glassmorphism e menu mobile
│   │   ├── Hero.tsx                # Seção Hero com foto real da fachada e CTAs
│   │   ├── CategoriesBento.tsx     # Bento Grid de Autopeças, Baterias, Óleos e Acessórios
│   │   ├── StoreShowcase.tsx       # Composição editorial com as fotos reais da loja
│   │   ├── Differentials.tsx       # Diferenciais em fundo claro premium
│   │   ├── GoogleRating.tsx        # Destaque de avaliação 5.0 do Google
│   │   ├── DeliverySection.tsx     # Seção de entregas em Rio Branco e região
│   │   ├── AboutSection.tsx        # Apresentação factual da empresa
│   │   ├── LocationSection.tsx     # Endereço, mapa interativo e horários
│   │   ├── InstagramSection.tsx    # Feed demonstrativo com link do perfil oficial
│   │   ├── FinalCta.tsx            # CTA marcante com gradiente vermelho
│   │   ├── FloatingWhatsApp.tsx    # Botão flutuante responsivo de WhatsApp
│   │   └── Footer.tsx              # Rodapé com dados oficiais e copyright dinâmico
│   └── data/
│       └── company.ts              # Centralização de dados cadastrais e links
├── package.json
└── tsconfig.json
```

---

## 🛠️ Como Executar Localmente

1. Clone o repositório ou acesse a pasta do projeto:
```bash
cd C:\Users\Francis\.gemini\antigravity\scratch\projetos\sites\garagem-autopecas
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador: [http://localhost:3000](http://localhost:3000)

---

## 🚢 Como Subir para o GitHub e Hospedar na Vercel

### 1. Subir para o GitHub:
```bash
# Crie um novo repositório vazio no seu GitHub (ex: garagem-autopecas)
git remote add origin https://github.com/SEU_USUARIO/garagem-autopecas.git
git branch -M main
git push -u origin main
```

### 2. Hospedar na Vercel:
1. Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
2. Clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório `garagem-autopecas`.
4. A Vercel detectará automaticamente as configurações de Next.js.
5. Clique em **"Deploy"**. Em menos de 1 minuto seu site estará online com HTTPS e CDN global!
