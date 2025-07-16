let prompt = require("prompt-sync")();

let alunos = [];
let cursos = [];

function cadastrarAluno() {
  let nomeAluno = prompt("Digite o nome do aluno:");

  if (nomeAluno && nomeAluno.trim() !== "") {
    alunos.push({ nome: nomeAluno.trim(), curso: null });
    console.log("Aluno cadastrado com sucesso!");
  } else {
    console.log("Nome inválido.");
  }
}

function excluirAluno() {
  let nomeExcluirAluno = prompt("Digite o nome do aluno a ser excluído:");
  let indexAlunoEncontrado = -1;

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome === nomeExcluirAluno) {
      indexAlunoEncontrado = i;
      break;
    }
  }

  if (indexAlunoEncontrado !== -1) {
    alunos.splice(indexAlunoEncontrado, 1);
    console.log("Aluno excluído com sucesso!");
  } else {
    console.log("Aluno não encontrado.");
  }
}

function cadastrarCurso() {
  let nomeCurso = prompt("Digite o nome do curso:");

  if (nomeCurso && nomeCurso.trim() !== "") {
    cursos.push(nomeCurso.trim());
    console.log("Curso cadastrado com sucesso!");
  } else {
    console.log("Nome inválido.");
  }
}

function excluirCurso() {
  let nomeExcluirCurso = prompt("Digite o nome do curso a ser excluído:");

  let indexCursoEncontrado = cursos.indexOf(nomeExcluirCurso);

  if (indexCursoEncontrado !== -1) {
    cursos.splice(indexCursoEncontrado, 1);

    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].curso === nomeExcluirCurso) {
        alunos[i].curso = null;
      }
    }
    console.log("Curso excluído com sucesso!");
  } else {
    console.log("Curso não encontrado.");
  }
}

function visualizarInformacoes() {
  console.log("\nAlunos Cadastrados:");

  if (alunos.length > 0) {
    for (let i = 0; i < alunos.length; i++) {
      let statusCurso = alunos[i].curso ? alunos[i].curso : "Não matriculado";
      console.log("- " + alunos[i].nome + " (Curso: " + statusCurso + ")");
    }
  } else {
    console.log("Nenhum aluno cadastrado.");
  }

  console.log("\nCursos Cadastrados:");

  if (cursos.length > 0) {
    for (let i = 0; i < cursos.length; i++) {
      console.log("- " + cursos[i]);
    }
  } else {
    console.log("Nenhum curso cadastrado.");
  }
}

function matricularAlunoEmCurso() {
  if (alunos.length === 0 || cursos.length === 0) {
    console.log(
      "É necessário ter alunos e cursos cadastrados para realizar a matrícula."
    );
    return;
  }

  let nomeMatricula = prompt("Digite o nome do aluno para matrícula:");
  let alunoEncontrado = null;

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome === nomeMatricula) {
      alunoEncontrado = alunos[i];
      break;
    }
  }

  if (!alunoEncontrado) {
    console.log("Aluno não encontrado.");
    return;
  }

  console.log("Cursos disponíveis:");

  for (let i = 0; i < cursos.length; i++) {
    console.log(i + 1 + " - " + cursos[i]);
  }

  let cursoEscolhidoIndex = parseInt(prompt("Escolha o número do curso:")) - 1;

  if (cursoEscolhidoIndex >= 0 && cursoEscolhidoIndex < cursos.length) {
    alunoEncontrado.curso = cursos[cursoEscolhidoIndex];
    console.log(
      "Aluno " +
        alunoEncontrado.nome +
        " matriculado no curso " +
        alunoEncontrado.curso +
        "."
    );
  } else {
    console.log("Curso inválido.");
  }
}

// --- LÓGICA PRINCIPAL ---

let opcao; // Variável que armazenará a opção escolhida no menu
let senhaCorreta = "Senai123"; // Define a senha correta para acesso
let tentativasSenha = 0; // Contador de tentativas de senha

// Loop para solicitação de senha com limite de tentativas
while (tentativasSenha < 3) {
  let senhaDigitada = prompt("Digite a senha para acessar o sistema: ");

  if (senhaDigitada === senhaCorreta) {
    console.log("Senha correta! Acesso concedido.");
    break; // Sai do loop de senha se a senha estiver correta
  } else {
    tentativasSenha++; // Incrementa o contador de tentativas
    // Informa ao usuário quantas tentativas restam
    console.log(
      "Senha incorreta. Tentativas restantes: " + (3 - tentativasSenha)
    );
  }
}

// Verifica se as tentativas de senha foram esgotadas
if (tentativasSenha === 3) {
  console.log("Acesso não autorizado. Você excedeu o número de tentativas.");
  process.exit(); // Encerra o programa
}

// Loop principal do sistema, só é acessado se a senha for validada
do {
  // Exibe o menu principal e armazena a escolha do usuário
  opcao = prompt(
    "Sistema Escolar\n\n" +
      "1 - Cadastrar Aluno\n" +
      "2 - Excluir Aluno\n" +
      "3 - Cadastrar Curso\n" +
      "4 - Excluir Curso\n" +
      "5 - Visualizar Informações\n" +
      "6 - Matricular Aluno em Curso\n" +
      "7 - Sair\n\n" +
      "Escolha uma opção:\n"
  );

  switch (opcao) {
    case "1":
      cadastrarAluno(); // Chama a função para cadastrar aluno
      break;

    case "2":
      excluirAluno(); // Chama a função para excluir aluno
      break;

    case "3":
      cadastrarCurso(); // Chama a função para cadastrar curso
      break;

    case "4":
      excluirCurso(); // Chama a função para excluir curso
      break;

    case "5":
      visualizarInformacoes(); // Chama a função para visualizar informações
      break;

    case "6":
      matricularAlunoEmCurso(); // Chama a função para matricular aluno em curso
      break;

    case "7":
      // Encerra o programa
      console.log("Saindo do sistema...");
      break;

    default:
      // Caso o usuário digite uma opção inválida
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== "7"); // Repete o menu até o usuário escolher sair
