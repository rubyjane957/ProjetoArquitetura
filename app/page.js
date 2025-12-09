//page principal

function Home() {

    return (
        <div>
          <h1 style = {style}>Bem-vindo ao Souza Arquitetura</h1>
          <p style={{color: 'lilac', backgroundColor:'soft purple'}}>teste</p>
          <img src= "logo-removebg-preview.png" id= "logo" className= "Logo"></img>
        </div>
      );
}
export default Home;



const style = {
  textAlign: 'center',
  border: '0.4px solid purple'
};