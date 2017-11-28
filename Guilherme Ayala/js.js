var registro_alunos = new Array();


class mt{
	constructor(nome,RA,turma,material){
		this.nome = nome;
		this.RA = RA;
		this.turma = turma;
		this.material= material;
	}
	mensagem(){
		alert("Salvo com Sucesso");
	}
}



document.querySelector("#btnSalvar").onclick = function(){

	var nome = document.querySelector("#nome").value;
	var RA =+document.querySelector("#ra").value;
	var turma = document.querySelector("#turma").value;

	if (!nome && !RA && !turma &&) {
		alert("Campos Vazios");
	}else{
		var registro = new mt(nome,RA,turma,recebe_material);
		registro_alunos.push(registro);
		registro.mensagem();
	}
}

var recebe_material;

document.querySelector('#material').addEventListener('change', function(evt){
   recebe_material = evt.target.value;
   this.material = recebe_material;
});


function lista(){
	for (var i = 0; i < registro_alunos.length; i++) {
		document.getElementById('Registros').innerHTML += registro_alunos[i].nome + ":"  + registro_alunos[i].ra+ ":"  + registro_alunos[i].turma+ ":" + registro_alunos[i].material+ ":" "<br>";
	};
	
}