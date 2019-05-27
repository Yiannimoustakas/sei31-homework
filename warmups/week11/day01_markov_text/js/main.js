let markov = {};

let beginnings = [];

const bookFileName = '../trump.txt'

// Build our markov chain table by iterating over the given text
const makeMarkov = (text) => {
  const words = text.split(/[ ;\-\n]+/);

  for ( let i = 0; i < words.length - 1; i++ ) {
    let word = words[ i ];

    if (!markov[word]) {
      markov[word] = [];
    }

    let nextWord = words[ i+1 ];

    markov[word].push(nextWord);

    if (word.match(/^[A-Z][a-z]/)) {
      beginnings.push(word);
    }
  } //for
};

const randy = (max) => {
  return Math.floor(Math.random() * max);
};

const choose = (arr) => {
  return arr[randy(arr.length)];
};

// Generate a new string from our Markov chain table, of the specified length

const generate = (length) => {
  let next = choose(beginnings);
  let output = next;

  for ( let i = 0; i < length; i++ ) {
    let word = choose(markov[next]);

    output += " " + word;

    next = word;
  };

  return output;
}


$(document).ready(function() {
  // Load our text file over ajax
  // FOR THIS TO WORK: you will have to run a server on your laptop
  // i.e by typing the command python ver 3. 'python -m http.server' python ver 2 'python -m 'SimpleHTTPServer'
  // npm install -g http-server
  // 'http-server'

  $.ajax(bookFileName)
    .done((res) => {

      makeMarkov(res);

      let nextText = generate(60);

      let $el = $('<p>').text(nextText);
      $("#output").append($el);

    })
    .fail((err) => {
      console.warn(err)
    });

    $(document).keypress(function(e) {
      if (e.keyCode === 13) {
        let nextText = generate(60);

        let $el = $('<p>').text(nextText);
        $("#output").append($el);
      }
    })
})
