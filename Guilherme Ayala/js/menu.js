function abrirMenu(){
  document.querySelector('header').className = 'opened';
  document.querySelector('#menu').className = 'opened';
}

function fecharMenu(){
  document.querySelector('header').className = '';
  document.querySelector('#menu').className = '';
}

document.querySelector('#menu').onclick = function(){
  if(document.querySelector('header').className != 'opened'){
    abrirMenu();  
  }else{
    fecharMenu();
  }
};

document.querySelectorAll('nav a').forEach(function(item){
  item.onclick = function(){
    fecharMenu();   
  }  
});
