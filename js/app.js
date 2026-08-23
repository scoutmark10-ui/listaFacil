// =============================================
//                  VARIABLES
// =============================================

// variables modal
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const cancelarBtn = document.querySelector("#cancelarBtn");
const modal = document.querySelector("#modal");

// variables analitys
const total = document.querySelector("#total");
const comprados = document.querySelector("#comprados");
const pendentes = document.querySelector("#pendentes");
const valor_total = document.querySelector("#valor_total");
const currency = document.querySelector(".currency");

// =============================================
//                    MODAL
// =============================================

openModal.addEventListener("click", () => {
	modal.style.display = `flex`;
});

closeModal.addEventListener("click", () => {
	modal.style.display = `none`;
});

// =============================================
//                 MODELO DE DADOS
// =============================================

const produtos = [];
const nome_txt = document.getElementById("nome");
const preco_txt = document.getElementById("preco");

// containerProdutos.innerHTML = ``

addProduto.addEventListener("click", () => {
	const nome = nome_txt.value || "sem name";
	const preco = Number(preco_txt.value) || 0;
	const containerProdutos = document.getElementById("produtos");

	// variables produto
	const id = produtos.length + 1;
	const Produto = {
		id: id,
		nome: nome,
		preco: preco,
		comprado: false,
	};

	produtos.push(Produto);
	console.log(Produto);
	containerProdutos.innerHTML += `
					<div class="card-produto">
						<p id="produto-nome">${Produto.nome}</p>
						<span id="produto-preco">${Produto.preco}<span id="currency">MT</span></span>
						<button class="btnEditar"><i class="ph ph-note-pencil"></i></button>
						<button class="btnRemover"><i class="ph ph-trash-simple"></i></button>
					</div>`;

	modal.style.display = `none`;
});

cancelarBtn.addEventListener("click", () => {
	modal.style.display = `none`;
});

// =============================================
//                 KPIs - ANALYTICS
// =============================================

total.innerHTML = `12`;
comprados.innerHTML = `16`;
pendentes.innerHTML = `12`;
valor_total.innerHTML = `1200`;
