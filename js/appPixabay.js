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
        //col-12 col-sm-6 col-md-4 col-lg-3 md-4
        //col-lg-3 col-md-4 col-sm-6 col-xs-12
            imagenesHTML+=`<div class="pt-4">
                                <div class="card">
                                    <img src="${previewURL}" alt="${tags}" class="card-img-top">
                                    <div class="card-body">
                                        <p class="card-text">${likes} Me gusta </p>
                                        <p class="card-text">${views} Visitas </p>
                                    </div>
                                    
                                    <div class="card-footer">
                                        <a 
                                        href="${largeImageURL}" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="btn btn-primary btn-block"> 
                                        Ver Imagen </a> 
                                    </div>
                                <div>
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
}

/**msj Error **/
const  mostrarError=(elemento, mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class ="alert alert-primary">${mensaje}</p>`;
    setTimeout(()=> {divError.innerHTML=``;}, 2000);
}