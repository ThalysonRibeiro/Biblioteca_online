# Biblioteca Online 📚

Um aplicativo web interativo para gerenciar uma biblioteca digital, permitindo aos usuários pesquisar, visualizar, adicionar e remover livros.

## 🚀 Funcionalidades

- **Pesquisa em Tempo Real**: Busca dinâmica por títulos, autores e informações dos livros
- **Visualização Detalhada**: Interface intuitiva para ver detalhes completos de cada livro
- **Gerenciamento de Livros**: 
  - Adicionar novos livros com informações detalhadas
  - Remover livros existentes
  - Sistema de classificação com estrelas (0-5)
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- **Navegação Suave**: Botão de retorno ao topo para melhor experiência do usuário

## 💻 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap Icons
- Font Awesome
- Google Fonts (Poppins)

## 📋 Estrutura do Projeto

```
biblioteca-online/
├── index.html
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── dados.js
│       └── script.js
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL-do-repositório]
```

2. Abra o arquivo `index.html` em seu navegador

## 📝 Campos do Formulário de Adição de Livros

- Capa do livro (URL)
- Título
- Autor
- Ano
- Classificação (0-5 estrelas)
- Descrição do livro
- Mais Informações (URL)
- Onde comprar (URL)
- Ler online (URL)

## 🔍 Funcionalidades da Pesquisa

A pesquisa é realizada em tempo real e considera os seguintes campos:
- Título
- Autor
- Ano
- Classificação
- Descrição

## 🎨 Componentes da Interface

### Header
- Logo/Título da Biblioteca
- Barra de navegação
- Campo de pesquisa

### Main
- Seção de resultados da pesquisa
- Visualização detalhada dos livros
- Formulário de adição de novos livros

### Footer
- Links úteis
- Informações de copyright

## 🔐 Dependências Externas

- Bootstrap Icons: `bootstrap-icons@1.11.3`
- Font Awesome: `font-awesome@6.5.2`
- Google Fonts: Poppins (300, 400, 500, 600, 700)

## 💡 Características Especiais

- **Debounce na Pesquisa**: Implementação de debounce para otimizar as requisições de pesquisa
- **Confirmação de Remoção**: Sistema de confirmação antes de remover um livro
- **Navegação Intuitiva**: Sistema de navegação entre seções com transições suaves
- **Visualização em Grid**: Layout em grade para melhor organização dos livros

## 📄 Licença

© 2024 Biblioteca Online. Todos os direitos reservados.
