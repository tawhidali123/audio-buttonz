const animals = document.querySelectorAll('.animal');

for(let animal of animals){ 
    animal.addEventListener('click', () => {
        let lowerCaseAnimal = animal.innerHTML.toLocaleLowerCase()
        makeSound(lowerCaseAnimal)
    })
};

function makeSound(animal){
    if(animal === 'lion'){
        let sound1 = new Audio('./sounds/lioncub.mp3')
        return sound1.play();
    } else if(animal === 'bear'){
        let sound2 = new Audio('./sounds/bear-roar.mp3')
        return sound2.play();
    } else {
        let sound3 = new Audio('./sounds/bark3.mp3')
        sound3.play();
    }
}