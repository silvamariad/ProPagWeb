/**Imagenes**/
const cargarImagenes=async()=>{

    let input=document.querySelector("#busquedad").value;

     /**llamamos la constatnte para el msjError **/
    if(input===''){
        mostrarError("#msj-error", "Falta Escribir el Valor de busqueda");
        return;
    }

    /**variable constante para la appPixabay **/
    const key="36197946-5703d23ead3a4135af9d516d8";
    const url=`https://pixabay.com/api/?key=${key}&q=${input}`;
    //console.log(url);
    
    const respuesta=await fetch(url);
    const resultado=await respuesta.json();

    /** Respùesta de las img**/
    let imagenes=resultado.hits;
    console.log(imagenes);

    /** como traer las img del json **/
    let imagenesHTML=``;
    imagenes.map(imagen=>{
                        const{largeImageURL, likes, previewURL, tags, views}=imagen;

        /**como ordenar las img **/
            imagenesHTML+=` 
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center">
                                <div class="card mb-3 rounded-3 shadow-sm">
                                    <div class="card-header py-3">
                                            <img src="${previewURL}" alt="${tags}" class="card-img-top">
                                        <div class="card-body">
                                            <p class="card-text">${likes} Me gusta </p>
                                            <p class="card-text">${views} Visitas </p>
                                        </div>

                                        <div class="card-footer">
                                            <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block"> Ver Imagen </a> 
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        `;
            });
    divListadoImagenes=document.querySelector("#listadoImagenes");

    /**Spinner llamamos a la img que esta cargando **/
    divListadoImagenes.innerHTML=`  <div style="text-align:center">
                                        <img src="./img/loading-gif.gif" width=300 height=300>
                                    </div>
                                `;
    
    /**Mostrar las img en 3seg **/
    setTimeout(()=>{divListadoImagenes.innerHTML=imagenesHTML;},3000);

    totalPaginas=Math.ceil(resultado.totalHits/imagenesPorPagina);

    let divPaginacion=document.querySelector("#paginacion");
    
    let pagAnterior=(paginaActual===1) ?`` : `
    <button type="button" class="btn btn-inf" onclick="paginaAnterior()"> Anterior </button>`; 

    let pagSiguiente=(paginaActual===totalPaginas) ?`` : `
    <button type="button" class="btn btn-inf" onclick="paginaSiguiente()"> Siguiente </button>`;
    
    divPaginacion.innerHTML=`${pagAnterior} ${pagSiguiente}`;

    const jumbotron=document.querySelector(".jumbotron");
    jumbotron.scrollIntoView({behavior:'smooth'});
}

/** Paginacion**/
const paginaAnterior=()=>{
    paginaActual--;
    if(paginaActual===0){
        return;
    }else{ 
        cargarImagenes();
    }
}

const paginaSiguiente=()=>{
    paginaActual++;
    if(paginaActual>totalPaginas){
        return;
    }else{
        cargarImagenes();
    }
}
/**msj Error **/
const  mostrarError=(elemento, mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class ="alert alert-primary">${mensaje}</p>`;
    setTimeout(()=> {divError.innerHTML=``;}, 2000);
}