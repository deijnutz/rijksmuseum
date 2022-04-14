//Example fetch using pokemonapi.co


// Key: jROiWOrw


// `https://www.rijksmuseum.nl/api/nl/collection?key=[api-key]&involvedMaker=Rembrandt+van+Rijn`





document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {

    const ids = ['BK-17040-A', 'BK-18305', 'BK-NM-13150', 'BK-KOG-656', 'NG-KOG-1208', 'SK-A-3580', 'SK-A-1718', 'SK-A-4', 'SK-A-3584', 'SK-A-404']
    console.log(ids)

    const randomIndex = Math.floor(Math.random() * ids.length);
    const url = `https://www.rijksmuseum.nl/api/en/collection/${ids[randomIndex]}?key=jROiWOrw`



    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            let artObject = data.artObject
            document.querySelector('img').src = artObject.webImage.url
            document.querySelector('h2').innerText = artObject.longTitle
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}