let prompt = require('prompt-sync')();
let alunos = [];
let cursos =[];

let opcao;



do{
    opcao = prompt(
        'Sistema Escolar \n\n'+
        '1 - Cadastar aluno\n' +
        '2 - Exclur aluno\n'+
        '3 - Cadastrar Curso\n'+
        '4 - Excluir Curso\n' +
        '5- Visualizar Informações\n' +
        '6 - Matricular Aluno em Curso\n' +
        '7 - Sair\n\n' +
        'Escolha uma opção\n');


switch(opcao){
    case '1':
    let nomeAluno = prompt('Digite o nome do Aluno : ');
    if(nomeAluno && nomeAluno.trim() !== '  ') {
         alunos.push({nome :nomeAluno.trim(), cursos: null});    
     console.log('Aluno Cadastrado com sucesso! ' );
        }else{
        console.log('Nome inválido. ');
    }
break;
    
    case '2':
//Excluir aluno
let nomeExcluirAluno = prompt('Digite o nome do aluno a ser excluido : ')
let indexAluno = -1
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome === nomeExcluirAluno){
        indexAluno = i;
        break;
    }
}
if (indexAluno !== -1) {
    alunos.splice(indexAluno, 1);

    console.log('Aluno excluído com sucesso ! ');
}else{
    console.log('Aluno não Encontrado. ');
} 

break;
    

    case'3':
//Cadastrar Curso
    let nomeCurso = prompt('Digite o nome do Curso : ');
    if(nomeCurso  && nomeCurso.trim() !== '  ') {
         cursos.push(nomeCurso.trim());    
     console.log('Curso Cadastrado com sucesso! ');
        }else{
        console.log('Curso  inválido. ');
        }
   break;

    case'4':
        //Excluir Curso
        let nomeExcluirCurso = prompt('Digite o nome do curso a ser excluido : ')
let indexCurso = cursos.indexOf(cursoExcluir);
      if(indexCurso !== -1){
    cursos.splice(indexCurso, 1);
for (let i = 0; i<cursos.length; i++){
    if (alunos[i].curso === nomeExcluirCurso){
        alunos[i].curso = null;

    }
}
console.log('Curso excluído com sucesso! ');
}else{
    console.log('Curso não encontrado.')
}
    break;

    case '5':
        //Relatório
     console.log('\nAlunos Cadastrados: ');
     if(alunos.length > 0){
        for (i = 0; i<alunos.length; i++){
            let curso;
            if (alunos[i].curso){
                curso = alunos[i].curso;
            }else{
                curso = 'Não matriculado';
            }
        }console.log('-' + alunos[i].nome + '(Curso: ')
     }else{
        console.log('Nenhum aluno cadastrado. ');
     }
        

    case '6' :
//Matricular aluno em curso
if
















    case '7' :
        //Sair do sistema 
        console.log('Saindo do sistema ...');
break;


default:
    console.log('opção inválida. Tente novamente.');

}

}while
(opcao != 7); 