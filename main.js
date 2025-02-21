document.addEventListener("DOMContentLoaded", function () {
    const nameField = document.getElementById("nome");
    const phoneField = document.getElementById("phone");
    const emailField = document.getElementById("email");

    // Adiciona eventos de tecla Enter para mover o foco
    nameField.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            phoneField.focus();
        }
    });

    phoneField.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            emailField.focus();
        }
    });

    emailField.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addContact(); // Chama a função addContact quando a tecla Enter é pressionada no campo email
        }
    });
});

function addContact() {
    const nameField = document.getElementById("nome");
    const phoneField = document.getElementById("phone");
    const emailField = document.getElementById("email");

    if (!nameField.checkValidity()) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (!phoneField.checkValidity()) {
        alert("Por favor, insira um número de telefone válido.");
        return;
    }

    if (!emailField.checkValidity()) {
        alert("Por favor, insira um email válido.");
        return;
    }

    const name = nameField.value;
    const phone = phoneField.value;
    const email = emailField.value;

    const table = document.getElementById("contactTable");

    // Verifica se o contato já existe na tabela
    for (let i = 1; i < table.rows.length; i++) {
        const existingPhone = table.rows[i].cells[1].innerHTML;
        const existingEmail = table.rows[i].cells[2].innerHTML;

        if (existingPhone === phone || existingEmail === email) {
            alert("Contato já existe.");
            return;
        }
    }

    // Adiciona o novo contato à tabela
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = phone;
    cell3.innerHTML = email;

    document.querySelector(".formulario").reset(); // Reseta o formulário
    console.log("Contato adicionado com sucesso.");
}
