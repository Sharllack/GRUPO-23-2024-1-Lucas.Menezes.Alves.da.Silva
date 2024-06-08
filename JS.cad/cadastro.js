    let nome = document.getElementById("idnome");
    let data = document.getElementById("idata");
    let sexo = document.getElementById("idsexo");
    let mae = document.getElementById("idmae");
    let cpf = document.getElementById("cpf");
    let email = document.getElementById("idemail");
    let cell = document.getElementById("idtel");
    let tel = document.getElementById("idtelf");
    let cep = document.getElementById("idcep");
    let rua = document.getElementById('idrua');
    let num = document.getElementById('idnum');
    let comp = document.getElementById('idcomp');
    let bai = document.getElementById('idbai');
    let cdd = document.getElementById('idcdd');
    let est = document.getElementById('idest');
    let login = document.getElementById("idlogin");
    let sen = document.getElementById("idsen");
    let csen = document.getElementById("idcsen");
    let resSenha = document.getElementById('resSenha');

function confirmarSenha() {
    if(sen.value != csen.value){
        resSenha.textContent = "As senhas não correspondem!";
        resSenha.style.color = "red";
        csen.style.border = "1.5px solid red";
        return false;
    } else {
        resSenha.textContent = "Tudo certo!";
        resSenha.style.color = "green";
        csen.style.border = "1.5px solid green";
        return true;
    }
}

function cadastrarUsuario(event) {
    event.preventDefault();

    if (!verificarCPF()) {
        return false;
    }

    if(sen.value != csen.value){
        resSenha.textContent = "As senhas não correspondem!";
        resSenha.style.color = "red";
        csen.style.border = "1.5px solid red";
        return false;
    
    }else if (nome.value != ''
            && data.value != ''
            && sexo.value != ''
            && mae.value != ''
            && cpf.value != ''
            && email.value != ''
            && cell.value != ''
            && tel.value != ''
            && cep.value != ''
            && rua.value != ''
            && num.value != ''
            && comp.value != ''
            && bai.value != ''
            && cdd.value != ''
            && est.value != ''
            && login.value != ''
            && sen.value != ''
            && csen.value != '') {

        localStorage.setItem('nome', nome.value);
         localStorage.setItem('data', data.value);
          localStorage.setItem('sexo', sexo.value);
           localStorage.setItem('mae', mae.value);
            localStorage.setItem('cpf', cpf.value);
             localStorage.setItem('email', email.value);
              localStorage.setItem('cell', cell.value);
               localStorage.setItem('tel', tel.value);
                localStorage.setItem('cep', cep.value);
                 localStorage.setItem('rua', rua.value);
                  localStorage.setItem('num', num.value);
                   localStorage.setItem('comp', comp.value);
                    localStorage.setItem('bai', bai.value);
                     localStorage.setItem('cdd', cdd.value);
                      localStorage.setItem('est', est.value);
                       localStorage.setItem('login', login.value);
                        localStorage.setItem('sen', sen.value);
                         localStorage.setItem('csen', csen.value);

    resSenha.textContent = "Cadastro efetuado com sucesso!";
    resSenha.style.color = "green";

    setTimeout(function(){ window.location = "./login.html"; }, 2000);


    } else {
        alert('Preencha os campos corretamente.');
    };

}

function formataCell(v){
    v.value = v.value.replace(/\D/g, '');
    v.value = v.value.replace(/(\d{2})(\d{2})(\d{5})(\d)/, '+$1 ($2) $3-$4');
}

function formataTel(v){
    v.value = v.value.replace(/\D/g, '');
    v.value = v.value.replace(/(\d{2})(\d{2})(\d{4})(\d)/, '+$1 ($2) $3-$4');
}

// Função para verificar se apenas caracteres alfabéticos foram inseridos
function apenasAlfabeticos(event) {
    var input = event.target;
    var valor = input.value;
    
    // Expressão regular para verificar se há apenas caracteres alfabéticos
    var regex = /^[a-zA-Z]+$/;
    
    // Se o valor não corresponder à expressão regular, limpe o campo
    if (!regex.test(valor)) {
        input.value = valor.replace(/[^a-zA-Z]/g, '');
    }
}

// Adicione event listeners para os campos de login, senha e confirmação de senha
document.getElementById('idlogin').addEventListener('input', apenasAlfabeticos);
document.getElementById('idsen').addEventListener('input', apenasAlfabeticos);
document.getElementById('idcsen').addEventListener('input', apenasAlfabeticos);
