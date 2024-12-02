async function listar_consigna(){


    const respuesta = await fetch("http://localhost:3000/Consignas/entregar"
        , {
            method: "POST", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        });

    datos = await respuesta.json(); 


    //datos = `[{"_id":"667ca5e2cb1799a0fe91c011","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"667cacbe48071f1a90ce56e0","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"667cacc248071f1a90ce56e1","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"66b16159134105ec643de902","titulo":"hola","texto":"asdsada"}]`;

    console.log(datos);


    datos.forEach(noti => {

        nuevaConsigna = `<div class="cuadrado-marron">
                <div class="especificaciones-pedir-consigna">
                    <div class="consigna-titulo">
                        <h4>${noti.titulo}</h4>
                    </div>
                    <div class="consigna-descripcion">
                        ${noti.detalles}
                    </div>
                    <br>
                    <div class="consigna-documentacion">
                        ${noti.documentacion}
                    </div>
                    <br>
                </div>
            </div>
        `;

        seccionConsignas = document.querySelector(".SeccionConsignas");
        seccionConsignas.innerHTML += nuevaConsigna;

    });
}

async function conseguirConsigna(){

    const url = await fetch("http://localhost:3000/Consignas/listar"
        , {
            method: "GET", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        });

    datos = await url.json(); 

}


async function crearConsigna(){
    inputTitulo = document.querySelector("#tituloCrearConsigna")
    inputDetalles = document.querySelector("#detallesCrearConsigna")


}