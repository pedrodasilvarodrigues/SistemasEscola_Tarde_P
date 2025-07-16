let prompt = require("prompt-sync")();

let alunos = [];
let cursos = [];

let opcao;
let senhaCorreta = "Senai123";
let tentativasSenha = 0;

while (tentativasSenha < 3) {
  let senhaDigitada = prompt("Digite a senha para acessar o sistema: ");

  if (senhaDigitada === senhaCorreta) {
    console.log("Senha correta! Acesso concedido.");
    break;
  } else {
    tentativasSenha++;

    console.log(
      "Senha incorreta. Tentativas restantes: " + (3 - tentativasSenha)
    );
  }
}

if (tentativasSenha === 3) {
  console.log("Acesso não autorizado. Você excedeu o número de tentativas.");
  process.exit();
}

do {
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
      let nomeAluno = prompt("Digite o nome do aluno:");

      if (nomeAluno && nomeAluno.trim() !== "") {
        alunos.push({ nome: nomeAluno.trim(), curso: null });
        console.log("Aluno cadastrado com sucesso!");
      } else {
        console.log("Nome inválido.");
      }
      break;

    case "2":
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
      break;

    case "3":
      let nomeCurso = prompt("Digite o nome do curso:");

      if (nomeCurso && nomeCurso.trim() !== "") {
        cursos.push(nomeCurso.trim());
        console.log("Curso cadastrado com sucesso!");
      } else {
        console.log("Nome inválido.");
      }
      break;

    case "4":
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
      break;

    case "5":
      console.log("\nAlunos Cadastrados:");

      if (alunos.length > 0) {
        for (let i = 0; i < alunos.length; i++) {
          let statusCurso = alunos[i].curso;
          alunos[i].curso;
          ("Não matriculado");
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
      break;

    case "6":
      if (alunos.length === 0 || cursos.length === 0) {
        console.log(
          "É necessário ter alunos e cursos cadastrados para realizar a matrícula."
        );
        break;
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
        break;
      }

      console.log("Cursos disponíveis:");

      for (let i = 0; i < cursos.length; i++) {
        console.log(i + 1 + " - " + cursos[i]);
      }

      let cursoEscolhidoIndex =
        parseInt(prompt("Escolha o número do curso:")) - 1;

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
      break;

    case "7":
      console.log("Saindo do sistema...");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== "7");
