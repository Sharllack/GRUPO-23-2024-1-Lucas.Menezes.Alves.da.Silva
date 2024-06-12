function logar(event) {
    event.preventDefault();
    let login = localStorage.getItem('login');
    let pass = localStorage.getItem('sen');

    let usuario = document.getElementById('idusu');
    let sen = document.getElementById('idsenha');

    localStorage.setItem('usuario', usuario.value);

    if (login == usuario.value && pass == sen.value) {
        document.getElementById('res').textContent = 'Usuário logado com sucesso!';
        document.getElementById('res').style.color = 'rgb(0, 255, 42)';

        setTimeout(function(){ window.location = "./index.html"; }, 2000);

    } else if (usuario.value == '' && sen.value == '' ) {
        document.getElementById('res').textContent = 'Preencha todos os dados!';
        document.getElementById('res').style.color = 'black';

    } else {
        document.getElementById('res').textContent = 'Usuario ou senha incorretos!';
        document.getElementById('res').style.color = 'red';
        
    }

}