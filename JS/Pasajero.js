var UrlApiGetAll = 'http://localhost:5006/pasajero/getAll';
var UrlApiInsert = 'http://localhost:5006/pasajero/insertar';
var UrlApiGetUno = 'http://localhost:5006/pasajero/getone/:codigopasajero';
var UrlApiUdpate = 'http://localhost:5006/pasajero/actualizar/:codigopasajero';
var UrlApiDelete = 'http://localhost:5006/pasajero/eliminar/:codigopasajero';

$(document).ready(function(){{{}}
    CargarPasajeros();
});

// GetAll para agregar Pasajero
function CargarPasajeros(){
    $.ajax({
        url: UrlApiGetAll,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MisItems = response;
            var Valores = '';
            for (i = 0; i < MisItems.length; i++)
            {
                Valores += 
                ' <tr>' + 
                     ' <td>' + MisItems[i].codigopasajero +' </td>' +
                     ' <td>' + MisItems[i].nombres +' </td>' +
                     ' <td>' + MisItems[i].apellidos +' </td>' + 
                     ' <td>' + MisItems[i].fecharegistro +' </td>' +
                     ' <td>' + MisItems[i].nacionalidad +' </td>' + 
                     ' <td>' + MisItems[i].numerotelefonico +' </td>' +
                     ' <td>' + MisItems[i].email +' </td>' +
                     '<td>'  +
                     '<button id="btneditar" class="btn btn-primary" onclick="CargarPasajero('+ MisItems[i].codigopasajero +')">Editar</button>' +                            
                     '</td>' +
                     '<button id="btneliminar" class="btn btn-danger" onclick="CargarPasajero('+ MisItems[i].codigopasajero +')">Eliminar</button>' +                            
                     '</td>' +
                ' </tr>';

                $('#DatosPasajeros').html(Valores);
            }
        }
    });
}


// GetInsert para insertar Pasajero
function AgregarPasajero(){

    var datospasajero = {
        codigopasajero: $('#codigopasajero').val(),
        nombres: $('#nombres').val(),
        apellidos: $('#apellidos').val(),
        fecharegistro: $('#fecharegistro').val(),
        nacionalidad: $('#nacionalidad').val(),
        numerotelefonico: $('#numerotelefonico').val(),
        email: $('#email').val(),
    };

    
    var datospasajerojson = JSON.stringify(datospasajero);
    alert (datospasajerojson);

    $.ajax({
        url: UrlApiInsert,
        type: 'POST',
        data: datospasajerojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            alert('Pasajero Ingresado de Forma Correcta');
            $('#Miformulario').submit();
        },
        error : function(textError, errorThrown){
            alert('Error: '+ textError + errorThrown);
        }
    });
}


//GetOne para cargar Pasajero
function CargarPasajero(p_codigopasajero){
    var datospasajero = {
        codigopasajero: p_codigopasajero
    };

    var datospasajerojson = JSON.stringify(datospasajero);
    $.ajax({
        url : UrlApiGetUno,
        type: 'POST',
        data: datospasajerojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            var MisItems = response;
            for (i = 0; i < MisItems.length; i++){
                $('#codigopasajero').val(MisItems[i].codigopasajero);
                $('#nombres').val(MisItems[i].nombres);
                $('#apellidos').val(MisItems[i].apellidos);
                $('#fecharegistro').val(MisItems[i].fecharegistro);
                $('#nacionalidad').val(MisItems[i].nacionalidad);
                $('#numerotelefonico').val(MisItems[i].numerotelefonico);
                $('#email').val(MisItems[i].email);
                var btnactualizar = '<input type="Submit" class="btn btn-primary" '+
                'id="btnagregar" onclick="AgregarPasajero('+ MisItems[i].codigopasajero +')" value="Actualizar Pasajero" >';
                $('#btnagregarpasajero' ).html(btnactualizar)
            }
        }
    });
}

//GetUpdate para actualizar pasajero
function ActualizarPasajero(p_codigopasajero){
    var datospasajero = {
        codigopasajero: p_codigopasajero,
        codigopasajero: $('#codigopasajero').val(),
        nombres: $('#nombres').val(),
        apellidos: $('#apellidos').val(),
        fecharegistro: $('#fecharegistro').val(),
        nacionalidad: $('#nacionalidad').val(),
        numerotelefonico: $('#numerotelefonico').val(),
        email: $('#email').val(),
    };

    
    var datospasajerojson = JSON.stringify(datospasajero);
    alert (datospasajerojson);

    $.ajax({
        url: UrlApiInsert,
        type: 'PUT',
        data: datospasajerojson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            alert('Pasajero Ingresado de Forma Correcta');
            $('#Miformulario').submit();
        },
        error : function(textError, errorThrown){
            alert('Error: '+ textError + errorThrown);
        }
    });
}







//GetDelete para eliminar pasaajero
function EliminarPasajero(p_codigopasajero){

}