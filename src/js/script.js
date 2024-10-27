// Funções principais
document.addEventListener("DOMContentLoaded", () => {
  const campoPesquisa = document.getElementById("campo-pesquisa");
  const resultadoPesquisa = document.getElementById(
    "resultados-pesquisa"
  );
  const livroDetalhes = document.getElementById("livroDetalhes");
  const formLivro = document.getElementById("form-livro");
  const adicionarLivroSection =
    document.getElementById("adicionar-livro");

  // Função para gerar estrelas de classificação
  const gerarClassificacao = (classificacao) => {
    const estrelaCheia = '<i class="bi bi-star-fill"></i>';
    const estrelaVazia = '<i class="bi bi-star"></i>';
    return (
      estrelaCheia.repeat(classificacao) +
      estrelaVazia.repeat(5 - classificacao)
    );
  };

  // Função para mostrar detalhes do livro
  window.mostrarDetalhes = (id) => {
    const livro = livros.find((l) => l.id === id);
    if (!livro) {
      console.error("Livro não encontrado");
      return;
    }

    resultadoPesquisa.style.display = "none";
    adicionarLivroSection.style.display = "none";
    livroDetalhes.style.display = "block";

    livroDetalhes.innerHTML = `
               <button onclick="voltarParaLista()" class="voltar-btn">
        ← Voltar para lista
      </button>
      <div class="detalhes-grid">
        <div>
          <img
            src="${livro.capaLivro}"
            alt="${livro.titulo
      }"
            class="detalhes-imagem"
          />
        </div>
        <div class="detalhes-conteudo">
          <h1>${livro.titulo}</h1>
          <div class="detalhes-meta">
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p><strong>Ano:</strong> ${livro.ano}</p>
            <p>
              <strong>Classificação:</strong> ${gerarClassificacao(
        livro.classificacao)}
            </p>
          </div>
          <div class="detalhes-descricao">
            <h3>Sobre o livro:</h3>
            <p>${livro.descricao}</p>
          </div>
          <div class="links-grid">
            <a
              href="${livro.maisInformacoes
      }"
              target="_blank"
              class="link-btn"
              >Mais Informações</a
            >
            <a
              href="${livro.ondeComprar
      }"
              target="_blank"
              class="link-btn"
              >Comprar</a
            >
          </div>
        </div>
      </div>
          `;
  };

  // Função para voltar para a lista
  window.voltarParaLista = () => {
    livroDetalhes.style.display = "none";
    resultadoPesquisa.style.display = "grid";
    adicionarLivroSection.style.display = "block";
  };

  // Função para gerar card do livro
  const gerarCardLivro = (livro) => `
          <div class="livro-card" onclick="mostrarDetalhes(${livro.id})">
              <img src="${livro.capaLivro}" alt="${livro.titulo
    }" class="livro-imagem">
              <div class="livro-info">
                  <h2 class="livro-titulo">${livro.titulo}</h2>
                  <p class="livro-autor">${livro.autor}</p>
                  <div class="livro-classificacao">${gerarClassificacao(
      livro.classificacao
    )}</div>
                  <button class="remover__livro" data-id="${livro.id
    }" onclick="event.stopPropagation()">
                      Remover Livro
                  </button>
              </div>
          </div>
      `;

  // Função para realizar pesquisa
  const realizarPesquisa = (termoPesquisa) => {
    termoPesquisa = termoPesquisa.trim().toLowerCase();
    const livrosEncontrados = livros.filter((livro) => {
      const { titulo, autor, ano, classificacao, descricao } = livro;
      return [
        titulo,
        autor,
        ano.toString(),
        classificacao.toString(),
        descricao,
      ].some((valor) => valor.toLowerCase().includes(termoPesquisa));
    });

    resultadoPesquisa.style.display = "grid";
    livroDetalhes.style.display = "none";
    adicionarLivroSection.style.display = "block";

    if (livrosEncontrados.length === 0) {
      resultadoPesquisa.innerHTML = `
                  <div class="item-resultado">
                      <p>Nenhum resultado encontrado para "${termoPesquisa}"</p>
                  </div>`;
      return;
    }

    resultadoPesquisa.innerHTML = livrosEncontrados
      .map(gerarCardLivro)
      .join("");

    // Adicionar eventos aos botões de remover
    resultadoPesquisa
      .querySelectorAll(".remover__livro")
      .forEach((botao) => {
        botao.addEventListener("click", removerLivro);
      });
  };

  // Função para remover livro
  const removerLivro = (event) => {
    const idLivro = parseInt(event.target.getAttribute("data-id"));
    if (confirm("Tem certeza que deseja remover este livro?")) {
      livros = livros.filter((livro) => livro.id !== idLivro);
      realizarPesquisa(campoPesquisa.value);
    }
  };

  // Função para mostrar seção específica
  window.mostrarSecao = (secaoId) => {
    const sections = [
      "resultados-pesquisa",
      "adicionar-livro",
      "livroDetalhes",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (id === secaoId) {
        element.style.display =
          id === "resultados-pesquisa" ? "grid" : "block";
      } else {
        element.style.display = "none";
      }
    });

    if (secaoId === "resultados-pesquisa") {
      realizarPesquisa(campoPesquisa.value);
    }
  };

  // Event listener para pesquisa com debounce
  let timeoutPesquisa;
  campoPesquisa.addEventListener("input", (e) => {
    clearTimeout(timeoutPesquisa);
    timeoutPesquisa = setTimeout(() => {
      realizarPesquisa(e.target.value);
    }, 300);
  });

  // Event listener para adicionar novo livro
  formLivro.addEventListener("submit", (e) => {
    e.preventDefault();

    const novoLivro = {
      id: livros.length ? Math.max(...livros.map((l) => l.id)) + 1 : 1,
      capaLivro: document.getElementById("capa__livro").value,
      titulo: document.getElementById("titulo").value,
      autor: document.getElementById("autor").value,
      ano: parseInt(document.getElementById("ano").value),
      classificacao: parseInt(
        document.getElementById("classificacao").value
      ),
      descricao: document.getElementById("descricao__livro").value,
      maisInformacoes: document.getElementById("mais__informacoes").value,
      ondeComprar: document.getElementById("onde__comprar").value,
      lerOnline: document.getElementById("ler__online").value,
    };

    livros.push(novoLivro);
    // livros.unshift(novoLivro);
    alert("Livro adicionado com sucesso!");
    formLivro.reset();
    realizarPesquisa("");
    mostrarSecao("resultados-pesquisa");
  });

  // Inicializar a lista com todos os livros
  realizarPesquisa("");
});