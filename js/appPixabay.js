/**Imagenes**/
const cargarImagenes=async()=>{

    let input=document.querySelector("#busquedad").value;

     /**llamamos la constatnte para el msjError **/
    if(input===''){
        mostrarError("#msj-error", "FALTA ESCRIBIR VALOR");
        return;
    }

    /**variable constante para la appPixabay **/
    const key="13119377-fc7e10c6305a7de49da6ecb25";
    const url=`https://pixabay.com/api/?key=${key}&q=${input}`;
    console.log(url);
    
    const respuesta=await fetch(url);
    const resultado=async respuesta.json();

    /** Respùesta de las img**/
    let imagenes=resultado.hits;
}

/**msj Error **/
const  mostrarError=(elemento, mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class ="alert alert-primary">${mensaje}</p>`;
    setTimeout(()=> {divError.innerHTML=``;}, 2000);
}