# Dropshipping Milionário - Landing Page

Esta é a landing page oficial do **Dropshipping Milionário**, uma plataforma focada em conectar revendedores a um fornecedor exclusivo de moda masculina e acessórios de alto padrão. O projeto foi desenhado para maximizar conversões e apresentar os benefícios do modelo de dropshipping nacional.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as melhores tecnologias modernas de frontend para garantir alta performance, um design atraente e uma experiência de usuário (UX) excepcional:

- **React 19**
- **Vite** (Build Tool super rápido)
- **Tailwind CSS v4** (Estilização utilitária e design responsivo)
- **Framer Motion** (Animações fluídas de entrada e scroll)
- **Lucide React** (Ícones modernos e leves)
- **React Router Dom** (Para futuras expansões de rotas, se necessário)
- **TypeScript** (Tipagem segura e IntelliSense)

## 🤖 Integração com Agentes (Trae AI)

A branch `master` deste repositório preserva as configurações e as memórias do agente conversacional e assistente de código **Trae AI**.

- **`.trae/`**: Contém documentos de especificação de produto (PRD) e arquitetura técnica (`prd.md` e `tech-architecture.md`) gerados automaticamente durante a concepção da interface.
- **`AGENTS.md` / `CLAUDE.md`**: Arquivos de instrução e contexto utilizados pelo agente durante o desenvolvimento assistido.

Se você está rodando o projeto em produção ou não utiliza o Trae AI, recomenda-se usar a branch `prod`, que possui apenas o código essencial da aplicação (clean branch).

## 📦 Como rodar o projeto localmente

Para rodar o projeto na sua máquina, siga os passos abaixo:

### Pré-requisitos
- Node.js instalado (versão 18 ou superior)
- NPM ou Yarn ou PNPM

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/flaviofonsecadev/pagina-vendas-drop-milionario.git
```

2. Acesse a pasta do projeto
```bash
cd pagina-vendas-drop-milionario
```

3. Instale as dependências
```bash
npm install
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

5. Abra o navegador e acesse:
```
http://localhost:5173
```

## 🏗️ Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o servidor de desenvolvimento local.
- `npm run build`: Compila o projeto para produção na pasta `dist`.
- `npm run preview`: Inicia um servidor local para visualizar o build de produção gerado.

## 🎨 Estrutura de Componentes da Landing Page

A página principal está dividida nos seguintes componentes (`src/components`):
- `Header.tsx`: Navegação no topo.
- `Hero.tsx`: Primeira dobra de impacto.
- `Features.tsx`: Benefícios do serviço (Venda sem estoque, Pedidos automatizados, etc).
- `Categories.tsx`: Vitrine visual dos nichos de produtos (Camisas, Calças, Acessórios).
- `HowItWorks.tsx`: Passo a passo do split de pagamento e envio.
- `Footer.tsx`: Rodapé com links e contatos institucionais.

---
Desenvolvido com excelência para empreendedores de sucesso. 👑
