// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = ['De Mysteriis Dom Sathanas', 'Reign of Blood', 'Ride the Lightning', 'Painkiller', 'Iron Fist'];

const listUlAlbums = document.createElement('ul');
albums.forEach((album) => {
    const listLiAlbum = document.createElement('li');
    listLiAlbum.innerText = album;
    listUlAlbums.appendChild(listLiAlbum);
});
document.body.appendChild(listUlAlbums);
