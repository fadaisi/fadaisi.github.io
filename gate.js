const gateForm = document.getElementById("gateForm");

if (gateForm) {
  gateForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("telefone");

    const email = emailField ? emailField.value.trim() : "";
    const telefone = phoneField ? phoneField.value.trim() : "";

    localStorage.setItem("liveStudioEmail", email);
    localStorage.setItem("liveStudioTelefone", telefone);

    window.location.href = "formulario.html";
  });
}
