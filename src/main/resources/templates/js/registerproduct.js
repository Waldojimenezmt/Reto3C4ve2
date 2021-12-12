function validarVacios() {
    let check = 0;
    let validacionBrand = $("#brand_Prod").val();
    let validacionProcesor = $("#procesor_Prod").val();
    let validacionOs = $("#os_Prod").val();
    let validacionDescription = $("#description_Prod").val();
    let validacionMemory = $("#memory_Prod").val();
    let validacionHardDrive = $("#hardDrive_Prod").val();
    let validacionAvaliability = $("#availability_Prod").val();
    let validacionPrice = $("#price_Prod").val();
    let validacionQuantity = $("#quantity_Prod").val();
    let validacionPhotografy = $("#photografy_Prod").val();
    if (validacionBrand == "" ||
        validacionProcesor == "" ||
        validacionOs == "" ||
        validacionDescription == "" ||
        validacionMemory == "" ||
        validacionHardDrive == "" ||
        validacionAvaliability == "" ||
        validacionPrice == "" ||
        validacionQuantity == "" ||
        validacionPhotografy == "") {
        let conteo = "";
        if (validacionBrand == "") {
            conteo += "Marca";
        }
        if (validacionProcesor == "") {
            conteo += "Procesador";
        }
        if (validacionOs == "") {
            conteo += "SO";
        }
        if (validacionDescription == "") {
            conteo += "Descripcion";
        }
        if (validacionMemory == "") {
            conteo += "Memoria";
        }
        if (validacionHardDrive == "") {
            conteo += "Disco Duro";
        }
        if (validacionAvaliability == "") {
            conteo += "Disponibilidad";
        }
        if (validacionPrice == "") {
            conteo += "Precio";
        }
        if (validacionQuantity == "") {
            conteo += "Cantidad";
        }
        if (validacionPhotografy == "") {
            conteo += "Fotografia";
        }

        if (check == 0) {
            let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
            var wrapper3 = document.createElement('div')
            alertPlaceholderHead.innerHTML = "";
            wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Todos los campos son obligatorios  </p>
        <hr>
        <p class="mb-0">Algunos campos no han sido ingresados correctamente
        ` + conteo + `
        </p>
      </div>`

            alertPlaceholderHead.append(wrapper3)

            check += 1;
        } else {

            let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
            var wrapper3 = document.createElement('div')
            alertPlaceholderHead.innerHTML = "";
            wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Todos los campos son obligatorios </p>
        <hr>
        <p class="mb-0">Algunos campos no han sido ingresados correctamente
        ` + conteo + `
        </p>
      </div>`
            alertPlaceholderHead.append(wrapper3)
        }
    } else {
        crearIdProducto();
        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
        alertPlaceholderHead.innerHTML = "";
    }
}

function crearIdProducto() {
    $.ajax({
        url: 'http://localhost:8080/api/clone/all',
        //  data : { id : 123 },
        type: 'GET',
        dataType: 'json',
        error: function(xhr, status) {
            alert('No Exitoso, ' + xhr.status);
        },
        complete: function(xhr, status) {
            // alert('Exitoso, '+xhr.status);
        },
        success: function(json) {
            window.idCloneGen = json.length + 1;
            console.log(window.idCloneGen)
            guardarProducto();
        }
    });
}

function guardarProducto(clone) {
    let validacionAvaliability = document.getElementById("availability_Prod").value;
    console.log(validacionAvaliability);
    let datos = {
        id: window.idCloneGen,
        brand: $("#brand_Prod").val(),
        procesor: $("#procesor_Prod").val(),
        os: $("#os_Prod").val(),
        description: $("#description_Prod").val(),
        memory: $("#memory_Prod").val(),
        hardDrive: $("#hardDrive_Prod").val(),
        availability: validacionAvaliability,
        price: $("#price_Prod").val(),
        quantity: $("#quantity_Prod").val(),
        photography: $("#photografy_Prod").val()

    }
    console.log(datos);
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),
        url: "http://localhost:8080/api/clone/new",
        success: function(respuesta) {
            console.log("Se han guardado todos los datos");
            let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderClone')
            var wrapper4 = document.createElement('div')
            alertPlaceholderLog.innerHTML = "";
            wrapper4.innerHTML = `<div class="alert alert-success" role="alert">
            <h4 class="alert-heading">¡Creado!</h4>
            <p> El nuevo producto ha sido creado</p>
          </div>`
            alertPlaceholderLog.append(wrapper4)
            setTimeout(function() {
                pagCreProd();
            }, 5000);
        },
        error: function(xhr, status) {
            console.log("Ha ocurrido un error");
        },
        complete: function(xhr, status) {}
    });
}

function limpiarCamposProducto() {
    $("#brand_Prod").val("");
    $("#procesor_Prod").val("");
    $("#os_Prod").val("");
    $("#description_Prod").val("");
    $("#memory_Prod").val("");
    $("#hardDrive_Prod").val("");
    let validacionAvaliability = document.getElementById("availability_Prod").value;
    validacionAvaliability = "Selecciona disponibilidad";
    $("#price_Prod").val("");
    $("#quantity_Prod").val("");
    $("#photografy_Prod").val("");
}