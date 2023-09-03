fetch('https://rickandmortyapi.com/api/character/1')
  .then(response => response.json()
  .then(data => { document.getElementById('name').innerHTML = `Nombre: ${data.name} <br> Estado: ${data.status} <br> Especie: ${data.species}`;
  })
  .catch(error => {
    
    console.error('Ocurrió un error:', error);
  }))
