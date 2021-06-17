//* Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
//* Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
//* Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
//* Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
//* Fate la prima Milestone da soli e poi attendete in comunicazioni l'orario del collegamento.



//* Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
const gruppoGatti = [
    {
        nome : "Salem",
        eta : 7,
        colore : "nero",
        sesso : "maschio"
    },
    {
        nome : "Garfield",
        eta : 3,
        colore : "arancione",
        sesso : "maschio"
    },
    {
        nome : "Romeo",
        eta : 9,
        colore : "arancione striato",
        sesso : "maschio"
    },
    {
        nome : "Duchessa",
        eta : 10,
        colore : "grigio",
        sesso : "femmina"
    },
    {
        nome : "Minù",
        eta : 2,
        colore : "bianco",
        sesso : "femmina"
    },
];

//* Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

gruppoGatti.forEach((element) => {
    document.getElementById("nome_gatti").innerHTML += 
    `
        C'è un gatto che si chiama: ${element.nome} e ha il colore ${element.colore}. <br>
    `;
});