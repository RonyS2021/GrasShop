const imagenes = [
    {
        src: "./Gras/Ofertas.jpg",      
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Artículo 1',
        precio: 52
    },
    {
    src: "./Gras/Ofertas.jpg",      
        alt: 'Gatitos, no se puede decir más',
      nombre: 'Artículo 2',
      precio: 82
    },
    {
        src: "./Gras/Ofertas.jpg",      
        alt: 'Gatitos, no se puede decir más',
      nombre: 'Artículo 3',
      precio: 99
    },
    {
        src: "./Gras/Ofertas.jpg",        
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Artículo 1',
        precio: 52
      },
      {
        src: "./Gras/Ofertas.jpg",        
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Artículo 2',
        precio: 82
      },
      {
        src: "./Gras/Ofertas.jpg",        
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Artículo 3',
        precio: 99
      },{
        src: "./Gras/Ofertas.jpg",        
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Artículo 1',
        precio: 52
      },
      {
        src: "./Gras/Ofertas.jpg",
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Artículo 2',
        precio: 82
      },
      {
        src: "./Gras/Ofertas.jpg",
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Artículo 3',
        precio: 99
      },
  ];
  
  function renderizarGaleria(imagenes) {
    let html = '';
    
    imagenes.forEach(function(imagen){
      html += `
        <div class="galeria-item">
          <img src="${imagen.src}" alt="${imagen.alt}" class = "icon" />
          <h3>${imagen.nombre}</h3>
          <p class="about__paragraph">${imagen.precio}€</p>
          <a href="https://api.whatsapp.com/send?phone=584124127629&text=Me%20interesaria%20saber%20de%20esta%20oferta" class="add-cart">Comprar</a>
        </div>
      `;
    });
    
    $('#galeria').html(html);
  }
  
  $(function() {
    renderizarGaleria(imagenes);
  });