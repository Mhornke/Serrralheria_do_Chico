const form = document.querySelector(".order-form");
form.addEventListener("submit", processOrder);

function processOrder(event) {
  event.preventDefault();
  const dados = new FormData(event.target);

  const response = {
    sucesso: "response: 201",
    error: "response: 400",
  };
  const nome = dados.get("Nome-Cliente");
  const tel = dados.get("telefone");
  const servico = dados.get("servico");
  const descricao = dados.get("descricao");

  if (
    nome.trim() != "" ||
    tel.trim() != "" ||
    servico.trim() != "" ||
    descricao.trim() != ""
  ) {
    alert(
      "O pedido Foi enviado com Sucesso, Aguarde retorno de até 3 dias uteis",
    );
    form.reset();
    console.log(response.sucesso);

    const objetoDeDados = {
      nome_cliente: nome,
      telefone: tel,
      tipo_servico: servico,
      descricao: descricao,
    };
    const pacoteJson = JSON.stringify(objetoDeDados);
    console.log(pacoteJson);

    return (response.sucesso, pacoteJson);
  }
}

const menubtn = document.getElementById("menu-btn");
const menuNav = document.getElementById("menuNav");

menubtn.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

const linkNav = document.querySelectorAll("a");
linkNav.forEach((link) => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("active");
  });
});
