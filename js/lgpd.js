
//----------------------LGPD--------------------------------
//Selecionando os elementos que serão manipulados pelo Javascript
const lgpd = document.querySelector('.lgpd');
const btnLgpd = document.querySelector('.lgpd button');

//console.log(lgpd);
//console.log(btnLgpd);

//Associando o evento de click ao botão da lgpd
btnLgpd.addEventListener('click',function(){
    //alert('ok');
    lgpd.style.display = 'none';
    //Além de fechar, vamos guardar uma informação no navegador do usuário
                          //chave, valor
    localStorage.setItem('fechouLgpd','sim');
})


//Se o usuário já fechou a lgpd (tem a informação guardada no storage)
//se a informação guardada no storage é igual (==) a 'sim'
if(localStorage.getItem('fechouLgpd') == 'sim'){
    lgpd.style.display = 'none';    
}
