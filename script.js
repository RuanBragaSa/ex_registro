const titulo = document.getElementById("titulo") // primeira area de digitar
const conteudo = document.getElementById("conteudo") // segunda area de digitar

const btnfechar = document.getElementById("btnfechar") // botao de fechar - vermelho
const btncadastrar = document.getElementById("btncadastrar") // botao de cadastrar - verde

const btnabrir = document.getElementById("btnabrir") // botao inicial para abrir o div principal

const principal = document.querySelector(".container")
const botao = document.querySelector("#btnabrir")
const overlay = document.querySelector(".modal-overlay");

btnabrir.addEventListener("click", () => {
    botao.style.display = "none"
    principal.style.display = "flex"
    overlay.style.display = "block"
});

btnfechar.addEventListener("click", () => {
    principal.style.display = "none"
    overlay.style.display = "none"
    botao.style.display = "flex"
});

async function enviar() {
    const post = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1
    }

    const toma = await fetch ("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    
    const data = await toma.json();

    alert("Cadastro feito com sucesso ! ID: " + data.id)
}

btncadastrar.addEventListener("click", enviar) // pq ? emot pensativo

