const showImages = function(results) {
  // Nested AKA Helper function that returns a thumbnail URL for a given photo object
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // resize image, q=thumbnail, m=medium, o=original
    ].join('');
  }

  results.photos.photo.forEach(function (photo){
    // create a URL for the photo
    const thumbnailURL = generateURL(photo);
    // create an image to display that photo URL
    const $img = $('<img>', {src: thumbnailURL, alt: photo.title });

    //get the image link information
    const photoID = photo.id
    const photoOwner = photo.owner

    //build the direct URL and place inside <a> tag with picture
    const $largeIMG = $('<a>', {href: `https://www.flickr.com/photos/${photoOwner}/${photoID}`, target: '_blank', class: 'item'})
    //console.log($largeIMG);
    $largeIMG.appendTo('#images')
    $img.appendTo($largeIMG)

    // $('img').on('click', function (event) {
    //   console.log('hi');
    //   $('img', this).empty();
    //   $('img', this).empty();
    //});

  });
};

let currentPage = 1;
let lastPage = false;

const searchFlickr = function (terms) { //the ajax request
  console.log(`Searching flickr for ${terms}`);
  //checks for last lage
  if (lastPage === false ) {
    //set the URL
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'
    //make the request
    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', //not a secret key
      text: terms,
      format: 'json',
      page: currentPage++
    }).done(showImages).done(function (data){
      if (data.photos.page >= data.photos.pages) {
        lastPage = true;
        console.log(lastPage);
      } else {
        // console.log( "id " + data.photos['photo'][0]['id'] );
        // console.log( "owner " + data.photos.photo.owner );
         console.log(data);
         //https://www.flickr.com/photos/{user-id}/{photo-id} - individual photo


      }
    });
  } else {
    console.log("last page reached");
  }
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); //stay on the same page
    currentPage = 1 //resets to page 1
    lastPage = false;

    //find the search Terms
    const query = $('#query').val();
    $('#images').empty();
    searchFlickr(query);
  });

  $(window).on('scroll', _.throttle(function() { //throttle using lodash
    const scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if (scrollBottom <= 500) {
      const query = $('#query').val();
      searchFlickr(query);
    }
  }, 500));

  $('.item').hover(function(){
    console.log('hover');
  });

  // reset to top of page:
  // When the user clicks on the button, scroll to the top of the document
  $('#topButton').on('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
});
