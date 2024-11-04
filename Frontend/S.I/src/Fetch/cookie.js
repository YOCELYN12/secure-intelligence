const crearCookie = (nombre, valor, dias) => {
    let expira = "";
    if (dias) {
        let date = new Date();
        date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000)); // Calcula la fecha de expiración
        expira = "; expires=" + date.toUTCString(); // Formatea la fecha para la cookie
    }
    document.cookie = nombre + "=" + (valor || "") + expira + "; path=/"; // Crea la cookie
}
export { crearCookie } // Exporta la función para su uso en otros módulos


const traerCookie = (nombre) => {
    let nameEQ = nombre + "="; // Define el formato de búsqueda
    let cookies = document.cookie.split(';'); // Divide las cookies en un array
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length); // Elimina espacios en blanco
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length); // Retorna el valor de la cookie
    }
    return null; // Retorna null si la cookie no se encuentra
}
export { traerCookie } // Exporta la función para su uso en otros módulos













