function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");

    if (username === "usuario" && password === "contraseña") {
        // Simulación de inicio de sesión exitoso
        window.location.href = "index.html";
    } else if(username === null){
        loginError.textContent = "debe ingresar un email";
    } else if(username === null){
        loginError.textContent = "debe ingresar una contraseña";
    } else{
        loginError.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
    
}
