// The HTML is configured intentionally with h2.animalTitle containing audio file names like "Cow".
// Put all of your code inside the DOMContentLoaded event listener provided.

document.addEventListener('DOMContentLoaded', () => {
    const animalTitles = document.getElementsByClassName('animalTitle');

    // Create a new Object with properties and values like 'animal01: "Cow" '.
      // These values can be found in the HTMLCollection.
      const animalNames = {};
      for (let i = 0; i < animalTitles.length; i++) {
        const animalName = animalTitles[i].textContent;
        animalNames[`animal${i + 1}`] = animalName;
      }

    const animalImages = document.getElementsByTagName('img');
    for (let image of animalImages) {
      image.addEventListener('click', () => {
        // Determine which sprite to play based on the animal title
        const animalTitle = image.previousElementSibling.textContent;
        // Play the audio for the selected animal
        const animalSound = animalNames[image.id];
        playAnimal(animalSound, sprite);
      });

      // Add mouseover styling to img elements
      image.addEventListener('mouseover', () => {
        image.style.border = '3px solid red';
      });
      image.addEventListener('mouseout', () => {
        image.style.border = '0px';
      });
    } 

    function playAnimal(animalSound) {
      var sound = new Howl({
        src: [`Media/${animalSound}.wav`],
      });
      sound.play();
    }
});
