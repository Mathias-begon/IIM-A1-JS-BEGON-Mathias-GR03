// for (let i = 0; i < 4; i++) {
//     console.log("Hello world");
//     }  


const para = document.createElement("h");
const node = document.createTextNode("dtfyu");
para.appendChild(node);
const element = document.getElementById("txt");
element.appendChild(para);


const TitreAnim = document.querySelectorAll('.lien');
const lien = document.querySelector('.liens');
const avatar = document.querySelector('.avatar')

window.addEventListener('load', () => {

    const tl = gsap.timeline({paused: true});

    tl
    .from(lien, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .from(avatar, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
 
    
    tl.play();
})


// const button = document.querySelector("#btn");
// const h1 = document.querySelector('#h1');
// const body = document.querySelector("body"); 
const colore = document.querySelector("h1")


button.addEventListener("click", function () {
    colore.style.color = "green";
})


// const newParapgraph = documenet.body.appendChild(aChild)



let i = 0;
let e = 0;
let txt = 'JE SUIS MATHIAS BEGON,';
let txt2= 'ETUDIANT EN ANNEE 1 A L IIM Bienvenue sur mon Portfolio !';
let speed = 50;
            
// Fonction d'animation de tape.
for (let i = 0; i < 2; i++) {
    
        function typeWriter() {
            if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
                }
            }

        setTimeout(typeWriter, 8000);
        setTimeout(typeWrite, 9000);

      

        // Idem.
        function typeWrite() {
            if (e < txt2.length) {
            document.getElementById("demo2").innerHTML += txt2.charAt(e);
            e++;
            setTimeout(typeWrite, speed);
                }
            }
        }

      

    

        // Timer pour afficher le deuxième message.

// let demo = document.querySelector('demo');

// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo") += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }