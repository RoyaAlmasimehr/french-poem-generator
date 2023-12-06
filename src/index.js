function displayPoem(response){
    console.log(response.data.answer);
       new Typewriter("#poem", {
         strings: response.data.answer,
         autoStart: true,
         delay: 10,
         cursor: "🖋",
       });
}




function generatePoem(event){
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "f29361d047d2c04bf4b0cbot3b20ea11";
    let context =
       "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let prompt = ` User instructions : insGenerate a French poem about ${instructionsInput.value} `;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement=document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = ` <div class="blink"> ⌛️  Generating a French poem about ${instructionsInput.value}`


    axios.get(apiUrl).then(displayPoem);

    console.log("Generating poem");
    console.log(`Prompt:${prompt}`);
    console.log(`Context :${context}`);
   
 
}




let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem)