let prompt = require("prompt-sync")();

let cliente = [];
let filmes = [];

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
      "1 - Cadastrar Cliente\n" +
      "2 - Excluir Cliente\n" +
      "3 - Cadastrar Filme\n" +
      "4 - Excluir Filme\n" +
      "5 - Visualizar Informações\n" +
      "6 - Matricular Cliente ao filme\n" +
      "7 - Sair\n\n" +
      "Escolha uma opção:\n"
  );

  switch (opcao) {
    case "1":
      let nomeCliente = prompt("Digite o nome do Cliente:");

      if (nomeCliente && nomeCliente.trim() !== "") {
        cliente.push({ nome: nomeCliente.trim(), filmes: null });
        console.log("Cliente cadastrado com sucesso!");
      } else {
        console.log("Nome inválido.");
      }
      break;

    case "2":
      let nomeExcluirCliente = prompt(
        "Digite o nome do Cliente a ser excluído:"
      );
      let indexClienteEncontrado = -1;

      for (let i = 0; i < cliente.length; i++) {
        if (cliente[i].nome === nomeExcluirCliente) {
          indexClienteEncontrado = i;
          break;
        }
      }

      if (indexClienteEncontrado !== -1) {
        cliente.splice(indexClienteEncontrado, 1);
        console.log("Cliente excluído com sucesso!");
      } else {
        console.log("Cliente não encontrado.");
      }
      break;

    case "3":
      let nomeFilme = prompt("Digite o nome do filmes:");

      if (nomeFilme && nomeFilme.trim() !== "") {
        filmes.push(nomeFilme.trim());
        console.log("Filme cadastrado com sucesso!");
      } else {
        console.log("Nome inválido.");
      }
      break;

    case "4":
      let nomeExcluirCurso = prompt("Digite o nome do filme a ser excluído:");

      let indexFilmeEncontrado = filmes.indexOf(nomeExcluirCurso);

      if (indexFilmeEncontrado !== -1) {
        filmes.splice(indexFilmeEncontrado, 1);

        for (let i = 0; i < cliente.length; i++) {
          if (cliente[i].filmes === nomeExcluirCurso) {
            cliente[i].filmes = null;
          }
        }
        console.log("Filme excluído com sucesso!");
      } else {
        console.log("Filme não encontrado.");
      }
      break;

    case "5":
      console.log("\nCliente Cadastrados:");

      if (cliente.length > 0) {
        for (let i = 0; i < cliente.length; i++) {
          let statusFilme = cliente[i].filmes;
          cliente[i].filmes;
          ("Não matriculado");
          console.log("- " + cliente[i].nome + " (Filme: " + statusFilme + ")");
        }
      } else {
        console.log("Nenhum Cliente cadastrado.");
      }

      console.log("\nFilme Cadastrados:");

      if (filmes.length > 0) {
        for (let i = 0; i < filmes.length; i++) {
          console.log("- " + filmes[i]);
        }
      } else {
        console.log("Nenhum filmes cadastrado.");
      }
      break;

    case "6":
      if (cliente.length === 0 || filmes.length === 0) {
        console.log(
          "É necessário ter cliente e filmes cadastrados para realizar a matrícula."
        );
        break;
      }

      let nomeJuncao = prompt("Digite o nome do Cliente para matrícula:");
      let clienteEncontrado = null;

      for (let i = 0; i < cliente.length; i++) {
        if (cliente[i].nome === nomeJuncao) {
          clienteEncontrado = cliente[i];
          break;
        }
      }

      if (!clienteEncontrado) {
        console.log("Cliente não encontrado.");
        break;
      }

      console.log("Filmes disponíveis:");

      for (let i = 0; i < filmes.length; i++) {
        console.log(i + 1 + " - " + filmes[i]);
      }

      let cursoEscolhidoIndex =
        parseInt(prompt("Escolha o número do filmes:")) - 1;

      if (cursoEscolhidoIndex >= 0 && cursoEscolhidoIndex < filmes.length) {
        clienteEncontrado.filmes = filmes[cursoEscolhidoIndex];
        console.log(
          "Cliente " +
            clienteEncontrado.nome +
            " matriculado no filmes " +
            clienteEncontrado.filmes +
            "."
        );
      } else {
        console.log("Filme inválido.");
      }
      break;

    case "7":
      console.log("Saindo do sistema...");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== "7");
