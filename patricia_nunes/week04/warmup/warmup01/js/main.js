const words = $('#words').text().split(/[,."';\n\-]+/)
//console.log(words);

const $body = $('body');

const random = function() {
  return Math.floor(math.random() * max);
}

//console.log(random(6));

const putWord = function() {
  const randomIndex = random(words.length);

  const text = words[randomIndex];

  const $div = $('<div class="word">').html(text);

  $div.css({
    top: random(window.innerHeight) + "px",
    left: random(window.innerWidth) + "px",
    fontSize: (40 + random(80)) + "px",
    color: "rgb(" + random(255) + "," + random(255) + "," + random(255) +")",
    transform: "rotate(" + random(360) + "deg)"
  })

  $div.appendTo($body);

  $div.fadeIn(1000).fadeOut(2000, function(){
    $(this).remove();
  })

  setInterval(putWord, 100)
  
}

