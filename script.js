console.log("Java Script carregado...");

function valida_cpf(cpf) {

  console.log(cpf.length);
  if (cpf.length != 11) {
    return false;
  } else {
    // o metodo substring extrai caracteres de uma string de incia A ao indice B
    // sendo o valor do indice B(end), sendo opcional.
    
    var num = cpf.substring(0, 9);
    var dig = cpf.substring(9);

   
    var soma = 0;
    for (var i = 10; i > 1; i--) {
      
      soma += num.charAt(10 - i) * i;
      console.log(num.charAt(i));
    }

    var result = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    // Validção do primeiro digito
    if (result != dig.charAt(0)) {
      return false;
    }

    soma = 0;
    num = cpf.substring(0, 10);

    for (k=11; k>1; k--){
      soma += num.charAt(11 - k) * k;
    }


    // validação do segundo digito
    result = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if(result != dig.charAt(1)){
      return false;
    }

    return true;
  }
}

function Validacao() {
  console.log("Iniciando a função de validação.")

  //informando apenas uma menssagem na tela.

  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';

  var cpf = document.getElementById('cpf_digitado').value;

  var validaResult = valida_cpf(cpf);

  if (validaResult) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}