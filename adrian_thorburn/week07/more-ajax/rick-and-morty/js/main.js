const showImages = function(results){
  // console.log(results);
  // console.log(`is this working? ${results.results[0].name}`);
  results.results.forEach(function (data) {
    // console.log(data.name);
    $thisFuckingDiv = $(`<div class="item"><img src="${data.image}" alt="${data.name}"></br><div class="item2"><ul><li><strong>${data.name}</strong></li><li>Location: ${data.location.name}</li><li>Species: ${data.species}</li><li>Status: ${data.status}</li></div></div>`)

    //$('#images').append($name)
    $('#images').append($thisFuckingDiv)
  })
}

page = 1

const searchCharacters = function (char){
  charURL = `https://rickandmortyapi.com/api/character/?name=${char}`
  locations = "https://rickandmortyapi.com/api/location"
  episodes = "https://rickandmortyapi.com/api/episode"

  $.getJSON(charURL).done(showImages).done(function (data){
    console.log(data);
  })
}


$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); //stay on the same page
    const query = $('#query').val();
    console.log(`searching for ${query}`);
    $('#images').empty();
    searchCharacters(query)
  })
});
