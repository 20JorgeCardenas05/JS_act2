let edad = prompt("¿Cuál es tu edad?");
if (edad >= 18) {
    let nombre = prompt("¿Cúal es tu nombre y apellido? (escribelo con las primeras letras mayúsculas)");
    let saludo = document.getElementById("saludo");
    saludo.textContent = ("Hola " + nombre + ".");
    function promedio() {
        cali1 = parseFloat(document.getElementById("cal1").value);
        cali2 = parseFloat(document.getElementById("cal2").value);
        cali3 = parseFloat(document.getElementById("cal3").value);
        let suma = (cali1 + cali2 + cali3);
        let prom = (suma)/3;
        if (prom >= 8) {
            document.write("Tu promedio es de " + prom  + ". ¡FELICIDADES, LO LOGRASTE!");
        } else {
            document.write("Tu promedio es de " + prom + " ¡Sigue estudiando!")
        }
    }
} else {
    let saludo = document.getElementById("saludo");
    saludo.textContent = ("Lo siento, no eres mayor de edad.");
} 


