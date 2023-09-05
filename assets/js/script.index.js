function verificarinputs() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let celular = document.getElementById("celular").value;
    let foto = document.getElementById("foto").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let insta = document.getElementById("insta").value;
    let github = document.getElementById("github").value;

    if (nome == "" || telefone == "" || celular == "" || foto == "" || data == "" || email == "" ||
        cep == "" || cidade == "" || insta == "" || github == "") {
        return true
    } else {
        return false
    }
}
function msg(msg, tipoMsg)