let prompt = require('prompt-sync')();
let alunos = [];
let curso =[];

let opcao;



do{
    opcao = prompt(
        'Sistema Escolar \n\n'+
        '1 - Cadastar aluno\n' +
        '2 - Exclur aluno\n'+
        '3 - Cadastrar Curso\n'+
        '4 - Excluir Curso\n' +
        '5- Visualizar Informações\n' +
        '6 - Sair\n\n' +
        'Escolha uma opção\n');


switch(opcao){
    case '1':
    let nomeAluno = prompt('Digite o nome do Aluno : ');
    if(nomeAluno !== null  && nomeAluno.trim() !== '  ') {
         alunos.push(nomeAluno.trim());    
     console.log('Aluno Cadastrado com sucesso! ' + nomeAluno);
        }else{
        console.log('Nome inválido. ');
    }
break;
    
    case '2':
//Excluir aluno
let nomeExcluirAluno = prompt('Digite o nome do aluno a ser excluido : ')
let indexAluno = alunos.indexOf(nomeExcluirAluno);
if(indexAluno !== -1){
    alunos.splice(indexAluno, 1);
    console.log('Aluno excluido com sucesso ! ')
    
} else {
    console.log('Aluno não encontrado. ');
}

break;
    

    case'3':
//Cadastrar Curso
    let nomeCurso = prompt('Digite o nome do Curso : ');
    if(nomeCurso !== null  && nomeCurso.trim() !== '  ') {
         alunos.push(nomeCurso.trim());    
     console.log('Curso Cadastrado com sucesso! ');
        }else{
        console.log('Nome inválido. ');
        }
   break;

    case'4':
        //Excluir Curso
        let nomeExcluirCurso = prompt('Digite o nome do aluno a ser excluido : ')
let indexCurso = nomeCurso.indexOf(nomeExcluirCurso);
if(indexCurso !== -1){
    nomeCurso.splice(indexCurso, 1);
    console.log('Curso excluido com sucesso ! ')
    } else {
    console.log('Curso não encontrado. ');
}

    break;

    case '5':
        //Relatório
        let info = "\nAlunos Cadastrados : \n";
        if(alunos.length > 0){
            for( let i = 0; i < curso.length; i++){
                info += "-" + alunos[i] + '\n';

            }

        } else {
            info += 'Nenhum aluno Cadastrado. \n';

        }
        info += '\nCurso Cadastrados :\n';
        if(curso.length > 0 ) {
            for (let i = 0; i < curso.length; i++){
                info += '-' + curso[i] + '\n';
            }
        }else{
            info += 'Nenhum curso cadastrado.\n'
        }
console.log(info)
    break;

    case '6' :
        //Sair do sistema 
        console.log('Saindo do sistema ...');
break;


default:
    console.log('opção inválida. Tente novamente.');

}

}while
(opcao != 6); 