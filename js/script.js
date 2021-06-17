//* Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
//* Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
//* Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
//* Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.




//! Milestone 1
//* Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
const gruppoGatti = [
    {
        nome : "Salem",
        eta : 7,
        colore : "#0a0a0a",
        sesso : "maschio"
    },
    {
        nome : "Garfield",
        eta : 3,
        colore : "#fc8403",
        sesso : "maschio"
    },
    {
        nome : "Romeo",
        eta : 9,
        colore : "#f2bc3f",
        sesso : "maschio"
    },
    {
        nome : "Duchessa",
        eta : 10,
        colore : "#7d7c79",
        sesso : "femmina"
    },
    {
        nome : "Minù",
        eta : 2,
        colore : "#f5f4f2",
        sesso : "femmina"
    },
];

//* Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

gruppoGatti.forEach((element) => {
    document.getElementById("nome_gatti").innerHTML +=
    `
        C'è un gatto che si chiama ${element.nome} e ha il colore <i class="fas fa-cat" style="color:${element.colore}"></i>.<br>
    `;
});



//! Milestone 2
//* Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.


const rosa = "pink";
const blue = "blue";


const nGruppoGatti = gruppoGatti.map((element) => {

    const nome = element.nome;
    const eta = element.eta;
    const colore = element.colore;
    const sesso = element.sesso;
    

    //* a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
    let fioccoColore = blue;
    if (sesso === "femmina"){
        fioccoColore = rosa;
    }
    

    //* Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
    const opacita = element.eta / 10;

    return {
        nome,
        eta,
        colore,
        sesso,
        fiocco : {
            colore : fioccoColore,
            opacita : opacita

        }

    }
});

// Ristampa dei gatti con il fiocco.
nGruppoGatti.forEach((element) => {
    document.getElementById("nome_gatti_fiocco").innerHTML +=
    `
        C'è un gatto che si chiama ${element.nome} e ha il colore <i class="fas fa-cat" style="color:${element.colore}"></i> <i class="fas fa-award" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacita}"></i>.<br>
    `;
});


//* Dividere i gatti in due contenitori distinti in base al sesso.
const gattiM = nGruppoGatti.filter((element) => {
    return element.sesso === "maschio";
});
const gattiF = nGruppoGatti.filter((element) => {
    return element.sesso === "femmina";
});

console.log("gruppo di gatti maschi: ", gattiM);
console.log("gruppo di gatti femmina: ", gattiF);



//! Milestone 3 
//* Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.



const allGatti = [...gattiF,...gattiM];


//* inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
allGatti.map((element) => {
    document.getElementById("tutti_gatti").innerHTML += 
    `
        ${element.nome} <i class="fas fa-award" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opacita}"></i>;
    `
});
