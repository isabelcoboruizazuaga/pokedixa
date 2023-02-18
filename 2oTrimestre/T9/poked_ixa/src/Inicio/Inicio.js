import "./Inicio.css"

export default function Inicio() {

    return (
        <section className="inicio"><link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />
            <div data-bs-spy="scroll" id="navbar-example" data-bs-target="#navbar-example" data-bs-offset="20"
                className="scrollspy-example" tabIndex="0">

                <section id="titulo">
                    <div id="carruselTitulo" className="carousel" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('../media/charizard.png')} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 id="a">Pokedixa</h1>
                                    <p>La mejor pokédex del mercado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sobre-nosotros">
                    <h2 id="b">Nuestra página</h2>
                    <div className="row p-2  conjunto align-items-center">
                        <div className="col-5 imagen">
                            <img className="img-responsive" src={require('../media/pokemon.jpg')} />
                        </div>
                        <div className="col-7 texto">
                            <h3 id="b4">Lista de pokemon</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere suscipit tellus eu
                                pretium. Nunc
                                pharetra ac mauris ac tincidunt. Vestibulum blandit laoreet purus non dignissim. Nulla sed
                                nisl vitae
                                magna pharetra aliquam. Fusce in finibus tellus. Pellentesque elit magna, pulvinar vel augue
                                id, semper
                                congue arcu. Mauris sed suscipit nisl, sit amet varius ex. Aenean varius massa consequat est
                                sagittis,
                                faucibus sagittis purus gravida. Proin sollicitudin pellentesque tristique</p>
                        </div>
                    </div>
                    <div className="row p-2 conjunto align-items-center">
                        <div className="col-7 texto">
                            <h3 id="b1">Detalle Pokemon</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere suscipit tellus eu
                                pretium. Nunc
                                pharetra ac mauris ac tincidunt. Vestibulum blandit laoreet purus non dignissim. Nulla sed
                                nisl vitae
                                magna pharetra aliquam. Fusce in finibus tellus. Pellentesque elit magna, pulvinar vel augue
                                id, semper
                                congue arcu. Mauris sed suscipit nisl, sit amet varius ex. Aenean varius massa consequat est
                                sagittis,
                                faucibus sagittis purus gravida. Proin sollicitudin pellentesque tristique</p>
                        </div>
                        <div className="col-5 imagen">
                            <img className="img-responsive" src={require('../media/detalle.png')} />
                        </div>
                    </div>
                    <div className="row p-2  conjunto align-items-center">
                        <div className="col-5 imagen">
                            <img className="img-responsive" src={require('../media/juega.png')} />
                        </div>
                        <div className="col-7 texto">
                            <h3 id="b2">Juega con nosotros</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere suscipit tellus eu
                                pretium. Nunc
                                pharetra ac mauris ac tincidunt. Vestibulum blandit laoreet purus non dignissim. Nulla sed
                                nisl vitae
                                magna pharetra aliquam. Fusce in finibus tellus. Pellentesque elit magna, pulvinar vel augue
                                id, semper
                                congue arcu. Mauris sed suscipit nisl, sit amet varius ex. Aenean varius massa consequat est
                                sagittis,
                                faucibus sagittis purus gravida. Proin sollicitudin pellentesque tristique</p>
                        </div>
                    </div>
                </section>

                <section id="opiniones">
                    <h2 id="c">Algunos pokemon</h2>
                    <div className="row p-2 cards justify-content-center">
                        <div className="card col-auto ms-4 mb-4">
                            <img className="card-img-top" alt="..." src={require('../media/chansey.png' )}/>
                            <div className="card-body">
                                <h4 className="card-title">Chansey</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-auto ms-4 mb-4">
                            <img className="card-img-top" alt="..." src={require('../media/ditto.png' )} />
                            <div className="card-body">
                                <h4 className="card-title">Ditto</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-auto ms-4 mb-4">
                            <img className="card-img-top" alt="..." src={require('../media/totodile.png' )} />
                            <div className="card-body">
                                <h4 className="card-title">Totodile</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-auto ms-4 mb-4">
                            <img className="card-img-top" alt="..." src={require('../media/espeon.png' )} />
                            <div className="card-body">
                                <h4 className="card-title">Espeon</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="suscribete">
                    <div className="row p-5 m-5 align-items-baseline">
                        <div className="col-7 d-flex justify-content-end">
                            <h1 id="e">Entérate de todas las novedades</h1>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-outline-light col-6 offset-1 align-bottom"
                                data-bs-toggle="modal" data-bs-target="#miFormulario">
                                Suscribirme
                            </button>
                        </div>

                    </div>


                    <div className="modal fade" id="miFormulario" tabIndex="-1" aria-labelledby="miFormularioLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="miFormularioLabel">Introduce tus datos</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="container-fluid">
                                        <div className="mb-3 row">
                                            <label htmlFor="inputNombre" className="col-3 col-htmlForm-label">Nombre</label>
                                            <div className="col-9">
                                                <input type="text" className="htmlForm-control" id="inputNombre" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label htmlFor="inputApellidos" className="col-3 col-htmlForm-label">Apellidos</label>
                                            <div className="col-9">
                                                <input type="text" className="htmlForm-control" id="inputApellidos" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label htmlFor="miFormularioControlInput1" className="col-3 col-htmlForm-label">Email</label>
                                            <div className="col-9">
                                                <input type="email" className="htmlForm-control-plaintext"
                                                    id="miFormularioControlInput1" placeholder="correoelectronico@ejemplo.com" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                        Cerrar
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Suscribirme
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}