persona = {
    "Nombre":"Emmanuel",
    "Edad":"19 años",
    "Nacimiento":"02-06-2006"
};

tag = ["Nombre", "Edad", "Nacimiento"];

for (let i = 0; i < tag.length; i++) {
    let tagSetup = tag[i];
    document.writeln(persona[tagSetup]);
}

do {
    var age = prompt(`Ingrese su edad para acceder!`);
    if (age < 18) {
        alert("No.")
        break;
    }
    for (let i = 0; i <= 10; i++){
        alert(`Proceso #${i} (completado).`);
    }
    age = 0;
} while (age >= 18);