//ES.7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
/* document.getElementById("titolo").innerText = "Magic Market"; */

/* ES.8: Scrivi una funzione per cambiare il colore di background della pagina */

/* document.body.style.backgroundColor="red"; */
//ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
/* document.getElementById("end").innerText="Corso alfieri 125"; */

//ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
/* let newPiece=document.createElement("ciao"); */
/* function addClassToLink() {
    const links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add("amazonLink");
    }
    console.log(links);
  }
  addClassToLink(); */

//ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

/* function imageClass() {
    const img = document.querySelectorAll("img");
    for (let i = 0; i < img.length; i++) {
      img[i].classList.toggle("visibility");
    }
    console.log(img);
  }
  imageClass(); */

//ES.12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function priceColor() {
    const price = document.querySelectorAll(".price");
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
    console.log(randomColor);
    for (let i = 0; i < price.length; i++) {
      price[i].style.color = randomColor;
    }
  }
  priceColor();