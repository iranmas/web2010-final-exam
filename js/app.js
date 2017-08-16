const dog_api = 'https://dog.ceo/api/'

$.ajax({
  url: dog_api + "breeds/list/all"
})
.done(function(response) {
  console.log(response);
  var breeds = Object.keys(response.message)

  for(let i = 0; i < breeds.length; i++){
    selectBreed.innerHTML += `
      <option value=${breeds[i]}>${breeds[i]}</option>
    `
  }
})

viewDog.addEventListener('click', function(event) {
  const breedName = selectBreed.value
  console.log(breedName);

  $.ajax({

  url: dog_api + `breed/${breedName}/images/random`
  })
  .done(function(response) {
    console.log(response);

breedImage.src = response.message;

  })
})






//
//
//
// // const breedName =selectBreed.value   numero 5
