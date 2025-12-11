//page principal
// URL ProjetoFinal (Render): https://projetoarquitetura-7qtg.onrender.com


function Home() {

    return (
        <div>
          <header>
            <h1 style = {style}>Bem-vindo ao Souza Arquitetura</h1>
            <p style={{color: 'lilac', backgroundColor:'soft purple'}}>No dinâmico universo da arquitetura, onde a criatividade encontra a técnica e a visão se materializa em concreto e aço, surge o Souza Ateliê Arquitetônico.</p>
            <p style={{color: 'lilac', backgroundColor:'soft purple'}}>Fundado pela arquiteta Gabriele Souza, a empresa rapidamente se destacou por sua abordagem personalizada e um compromisso inabalável com a excelência.</p>
          </header>
          <body>
            <div class="HomeDiv">
              <div class="Foto"></div>
            </div>           
          </body>

        </div>
      );
}
export default Home;



const style = {
  textAlign: 'center',
  border: '0.4px solid purple'
};