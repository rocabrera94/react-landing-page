import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Menu />    
      <Inicio />
      <Fotos imgs={['https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1607792246307-2c7ba687b50a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60']}/>
      <Productos />              
                    
    </div>
  );
}

export default App;


function Menu() {
  return <div className='menu'>
    <ul className='lista'>
      <li><a href='#'>Inicio</a></li> 
      <li><a href='#'>Fotos</a></li>
      <li><a href='#'>Colecciones</a></li>
    </ul>
  </div>
}

function Inicio(){
  return (
    <div className='inicio'>
      <div >
        <img className='inicio-foto' src='https://static.mercadonegro.pe/wp-content/uploads/2020/12/16190638/NIKE.jpg'></img>
      </div>
      <div className='inicio-texto'>
        <p className='titulo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Nunc dapibus felis cursus felis dapibus, in.</p>
        <button className='btn-inicio'>Saber Mas</button>
      </div>
      
    </div>
  )
}


function Fotos({imgs}){
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length -1){
      setIndex(0)
    } else setIndex(index + 1)
  }

  const prev = () => {
    if (index === 0){
      setIndex(imgs.length -1)
    } else setIndex(index-1)
  }

  return (
    <div className='carretel'>
      <button onClick={prev} className='btn-prev'> <img className='img-prev' src='https://image.flaticon.com/icons/png/512/484/484018.png?w=826'></img> </button>
      <img  src={ imgs[index] } className='imgs'/>
      <button onClick={next} className='btn-next'> <img className='img-next' src='https://image.flaticon.com/icons/png/512/484/484018.png?w=826'></img> </button>
      
    </div>
  )
}


function Productos(){
  return (
    <div className='productos'>
      <h1 className='colecciones-texto'>Colecciones</h1>
      <div className='cards'>
      <div className='card'>
      <img src='https://i.ytimg.com/vi/aaa6EcSGP5o/hqdefault.jpg' className='card-image'/>
        <div className='texto-container'>
          <p className='texto-title'>Running</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='card-btn'>Mas</button>
        </div>
      </div>

      <div className='card'>
      <img src='https://i.pinimg.com/474x/a7/b6/4f/a7b64ff0b438a3098343ce429671f31a.jpg' className='card-image'/>
        <div className='texto-container'>
          <p className='texto-title' >Futbol</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='card-btn'>Mas</button>
          
        </div>
      </div>

      <div className='card'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJZHDYoWm1c0ty0nVr6uXvqr45wz5ZvLKiA&usqp=CAU' className='card-image'/>
        <div className='texto-container'>
          <p className='texto-title'>Air Jordan</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='card-btn'>Mas</button>
        </div>
      </div>
      </div>
    </div>
  )
}

//<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Those Icons - Flaticon</a>

