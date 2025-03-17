let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse amigo já está participando! :)");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "X";
        btnRemover.onclick = () => removerAmigo(index);
        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para o sorteio.");
        return;
    }

    const meuNome = prompt("Insira seu nome para descobrir quem é o seu amigo secreto:");
    if (!meuNome || !amigos.includes(meuNome)) {
        alert("Não encontrei seu nome na lista :( Você também precisa estar participando!");
        return;
    }

    let embaralhado = [...amigos];
    let resultado = {};

    do {
        embaralhado = embaralhado.sort(() => Math.random() - 0.5);
    } while (embaralhado.some((amigo, i) => amigo === amigos[i]));

    amigos.forEach((amigo, i) => {
        resultado[amigo] = embaralhado[i];
    });

    exibirResultado(meuNome, resultado[meuNome]);
}

function exibirResultado(meuNome, amigoSecreto) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `${meuNome}, seu amigo secreto é: ${amigoSecreto} !! Agora é só descobrir o que ele quer ganhar de presente rs`;
    listaResultado.appendChild(li);
}
