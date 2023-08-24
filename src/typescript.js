let entrada = document.getElementById("entrada");
let botao = document.getElementById("botao");

botao.addEventListener("click", criarAluno);

function criarAluno(evento) {
  criarDiv();

  // let listaAluno = document.createElement("h3");
  // listaAluno.innerHTML = aluno;
  
  // document.getElementById("alunos").appendChild(listaAluno);
}

function criarDiv() {
  let div = document.createElement("div");
  div.id = "aluno"
  div.innerHTML = getAluno();

  document.getElementById("lista").appendChild(div);
}

function getAluno() {
  const aluno = entrada.value
  return aluno
}
