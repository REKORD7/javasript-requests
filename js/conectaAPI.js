async function listaVideos(){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"GET",
        headers:{
        "Content-type":"application/json",
        "Permissions-Policy": "geolocation=(self `http://localhost:3001/videos`)"
        }
    });
    
    const conexionConvertida=await conexion.json();
    //res.setHeader('Permissions-Policy', 'ch-ua-form-factor');
    console.log(conexion);
    console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion= await fetch("http://localhost:3001/videos",{
    method:"POST",
    headers:{
        "Content-type":"'application/json; charset=utf-8'"
    },
    body:JSON.stringify({
        titulo:titulo,
        descripcion:`${descripcion} mil visualizaciones`,
        url:url,
        imagen:imagen
    })
    })

    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error("No se pudo enviar el video");
    }

    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conectaAPI={
    listaVideos,enviarVideo,buscarVideos
}
