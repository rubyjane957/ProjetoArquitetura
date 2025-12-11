import "../app/css/menu.css";

function Menu() {
    return(
        <nav>
            <div class="logoDiv">
                <div class="logo"></div>
                <h1>Souza Ateliê Arquitetônico
                </h1>
            </div>
            
            <div>
                <a href="/">Home</a>&nbsp;
                <a href="/arquitetos">Arquitetos</a>&nbsp;
                <a href="/categorias">Categorias</a>&nbsp;
                <a href="/clientes">Clientes</a>&nbsp;
                <a href="/projetos">Projetos</a>&nbsp;
                <a href="/agendamentos">Agendamentos</a>&nbsp;
           </div>
        </nav>
    );
}

export default Menu;