const fetchFact = function () {
  const s = document.getElementById("search").value;
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const p = document.createElement('p');
    const img = document.createElement('img');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const date = document.createElement('p');
    const pageCount = document.createElement('p');
    const desc = document.createElement('p');

    const data = JSON.parse( xhr.responseText );

    title.innerHTML = data.items[0].volumeInfo.title;
    author.innerHTML = data.items[0].volumeInfo.authors[0];
    date.innerHTML = data.items[0].volumeInfo.publishedDate;
    pageCount.innerHTML = data.items[0].volumeInfo.pageCount;
    desc.innerHTML = data.items[0].volumeInfo.description;
    img.src = data.items[0].volumeInfo.imageLinks.smallThumbnail;

    document.body.appendChild(p);
    p.appendChild( title);
    p.appendChild(author);
    p.appendChild(date);
    p.appendChild(pageCount);
    p.appendChild(desc);
    document.body.appendChild(img);
  };

  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + (s) )
  xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchFact);
