

function generatePoem(event){
    event.preventDefault()

    let poemElement=document.querySelector("#poem");
      new Typewriter("#poem", {
        strings: "Je ne regarderai ni l’or du soir qui tombe",
        autoStart: true,
        delay: 10,
        cursor: "🕯",
      });
    poemElement.innerHTML
}




let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem)