const etiqueta = document.getElementById("etiqueta");
const nomeDaTarefa = document.getElementById("nome-da-tarefa");
const botao = document.getElementById("botao");

const div = document.createElement("div")

botao.addEventListener("click", () => {
    const taskText = nomeDaTarefa.value.trim();

    if (taskText === "") 
        return alert("Digite uma tarefa!");

    const taskEtiqueta = etiqueta.value.trim();

    if (taskEtiqueta === "") 
        return alert("Digite uma etiqueta!");
})