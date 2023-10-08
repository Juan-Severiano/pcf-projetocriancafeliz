export default function App() {

  return (
    <>
      <div className="fundo-video">
        <img className='video' src="/pcf.jpeg" alt="asd"></img>
      </div>
      <main className="container home d-flex justify-content-between">
        <aside className="welcome d-flex align-items-center justify-content-center">
          <h1 className='title-home'>SEJAM BEM VINDOS</h1>
          <h2>CONHEÇA MAIS SOBRE O NOSSO PROJETO</h2>
        </aside>
        <aside id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/1.jpeg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/1.jpeg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/1.jpeg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </aside>
      </main>
    </>
  )
}
