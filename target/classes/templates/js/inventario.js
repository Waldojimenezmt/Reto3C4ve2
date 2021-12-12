function closeForm() {
    $(".form-popup-bg").removeClass("is-visible");
}

function openForm(id) {
    $(".form-popup-bg").addClass("is-visible");
    $("#id_pro").val(id);
}

function openFormAddP() {
    $(".form1-popup-bg").addClass("is-visible");
    $("#save");
}


$(document).ready(function($) {
    /* Contact Form Interactions */
    $("#btnOpenForm").on("click", function(event) {
        event.preventDefault();

        $(".form-popup-bg").addClass("is-visible");
    });

    //close popup when clicking x or off popup

    $(".form-popup-bg").on("click", function(event) {
        if (
            $(event.target).is(".form-popup-bg") ||
            $(event.target).is("#btnCloseForm")
        ) {
            event.preventDefault();
            $(this).removeClass("is-visible");
        }
    });

    //para el segundo formulario llamado form1
    /* Contact Form Interactions */
    $("#btnOpenForm").on("click", function(event) {
        event.preventDefault();

        $(".form1-popup-bg").addClass("is-visible");
    });

    //close popup when clicking x or off popup

    $(".form1-popup-bg").on("click", function(event) {
        if (
            $(event.target).is(".form1-popup-bg") ||
            $(event.target).is("#btnCloseForm")
        ) {
            event.preventDefault();
            $(this).removeClass("is-visible");
        }
    });

});



$("document").ready(function() {
    getProducts();
});

//Consultar productos existentes
function getProducts() {
    $.ajax({
        url: "http://localhost:8080/api/clone/all",
        type: "GET",
        datatype: "JSON",
        contentType: "application/json",
        success: function(response) {
            console.log(response);
            showProducts(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {},
    });
}

//Componer y mostrar la tabla con la consulta de productos existentes
function showProducts(response) {
    let table = "<table>";
    for (i = 0; i < response.length; i++) {
        //console.log(response[i].brand);
        table += "<tr>";
        table += "<td>" + response[i].brand + "</td>";
        table += "<td>" + response[i].procesor + "</td>";
        table += "<td>" + response[i].os + "</td>";
        table += "<td>" + response[i].description + "</td>";
        table += "<td>" + response[i].memory + "</td>";
        table += "<td>" + response[i].hardDrive + "</td>";
        table += "<td>" + response[i].availability + "</td>";
        table += "<td>" + response[i].price + "</td>";
        table += "<td>" + response[i].quantity + "</td>";
        table += "<td>" + response[i].photography + "</td>";
        table += '<td><center><button onclick="getProductById(' + response[i].id + ')">Actualizar</button><center></td>';
        table += '<td><center><button onclick="deleteProduct(' + response[i].id + ')">Borrar</button><center></td>';
        table += "</tr>";

    }

    table += "</table>";
    $("#cloneList tbody").html(table);
}

/*Obtener y mostrar en el formulario de actualización
los datos del producto a actualizar*/
function getProductById(id) {
    //jQuery.support.cors = true;
    $.ajax({
        dataType: 'json',
        url: "http://localhost:8080/api/clone/" + id,
        type: 'GET',
        success: function(response) {
            console.log(response);
            let product = response;
            $("#marca-producto").val(product.brand);
            $("#procesador-producto").val(product.procesor);
            $("#so-producto").val(product.os);
            $("#descripcion-producto").val(product.description);
            $("#memoria-producto").val(product.memory);
            $("#hdd-producto").val(product.hardDrive);
            $("#stock-producto").val(product.availability);
            $("#precio-producto").val(product.price);
            $("#cantidad-producto").val(product.quantity);
            $("#foto-producto").val(product.photography);
            openForm(id);

        }
    })
}

//Ventana popup para actualizar productos existentes
function getJSONUpdate(id) {
    return {
        id: $.trim($("#id_pro").val()),
        brand: $.trim($("#marca-producto").val()),
        procesor: $.trim($("#procesador-producto").val()),
        os: $.trim($("#so-producto").val()),
        description: $.trim($("#descripcion-producto").val()),
        memory: $.trim($("#memoria-producto").val()),
        hardDrive: $.trim($("#hdd-producto").val()),
        availability: $.trim($("#stock-producto").val()),
        price: $("#precio-producto").val(),
        quantity: $("#cantidad-producto").val(),
        photography: $.trim($("#foto-producto").val())
    };
}

$("#btn_post_update").click(function() {
    let data = getJSONUpdate();
    let url = "http://localhost:8080/api/clone/update";

    // PETICION PUT (UPDATE)
    $.when(jqueryPUT(url, data)).done(function() { // AJAX => ASINCRONO
        alert("El producto se ha actualizado correctamente!");
        closeForm();

    });
});

function jqueryPUT(url, data) {
    return $.ajax({
        url: url,
        type: "PUT",
        datatype: "JSON",
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}

//Ventana popup para agregar nuevos productos
function getJSONCreate() {
    if ($("#marca1-producto").val().length == 0 ||
        $("#procesador1-producto").val().length == 0 ||
        $("#so1-producto").val().length == 0 ||
        $("#descripcion1-producto").val().length == 0 ||
        $("#memoria1-producto").val().length == 0 ||
        $("#hdd1-producto").val().length == 0 ||
        $("#stock1-producto").val().length == 0 ||
        $("#precio1-producto").val().length == 0 ||
        $("#cantidad1-producto").val().length == 0) {
        alert("Por favor llene todos los campos de registro solicitados.");
    } else {
        let prodData1 = {
            //id: $("#id1-producto").val(),
            brand: $.trim($("#marca1-producto").val()),
            procesor: $.trim($("#procesador1-producto").val()),
            os: $.trim($("#so1-producto").val()),
            description: $.trim($("#descripcion1-producto").val()),
            memory: $.trim($("#memoria1-producto").val()),
            hardDrive: $.trim($("#hdd1-producto").val()),
            availability: $.trim($("#stock1-producto").val()),
            price: $("#precio1-producto").val(),
            quantity: $("#cantidad1-producto").val(),
            photography: $.trim($("#foto1-producto").val()),
        }
        return prodData1;
    }
}

$("#btn_post_create").click(function() {
    let data = getJSONCreate();
    let url = "http://localhost:8080/api/clone/new";
    console.log(data);
    // PETICION POST (create)
    $.when(jqueryPOST(url, data)).done(function() { // AJAX => ASINCRONO
        alert("Se ha agregado correctamente!");
        closeForm();

    });
});

function jqueryPOST(url, data) {
    return $.ajax({
        url: url,
        type: "POST",
        datatype: "JSON",
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}

//Eliminar un producto del sistema
function deleteProduct(id) {

    let product = {
        id: id
    };

    console.log(product);
    let dataToSend = JSON.stringify(product);

    $.ajax({
        url: "http://localhost:8080/api/clone/" + id,
        type: "DELETE",
        datatype: "JSON",
        data: dataToSend,
        contentType: "application/json",
        success: function(response) {
            console.log(response);
            $("#productList").empty();
            getProducts();
            console.log("Se ha eliminado el registro del producto.");
            alert("Se ha eliminado el registro del producto.")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("No se ha eliminado el registro del producto, por favor verifique.");
            alert("Se ha eliminado el registro del producto, por favor verifique.")
        }
    });
}

/**
function updateProduct(id) {

    if ($("#marca-producto").val().length == 0 ||
        $("#procesador-producto").val().length == 0 ||
        $("#so-producto").val().length == 0 ||
        $("#descripcion-producto").val().length == 0 ||
        $("#memoria-producto").val().length == 0 ||
        $("#hdd-producto").val().length == 0 ||
        $("#stock-producto").val().length == 0 ||
        $("#precio-producto").val().length == 0 ||
        $("#cantidad-producto").val().length == 0) {
        alert("Por favor llene todos los campos de registro solicitados.");
    } else {

        let product = {
            id: id,
            brand: $("#marca-producto").val(),
            procesor: $("#procesador-producto").val(),
            os: $("#so-producto").val(),
            description: $("#descripcion-producto").val(),
            memory: $("#memoria-producto").val(),
            hardDrive: $("#hdd-producto").val(),
            availability: $("#stock-producto").val(),
            price: $("price-producto").val(),
            quantity: $("#cantidad-producto").val(),
            photography: $("#foto-producto").val()
        }
        console.log(product.id);
        let dataToSend = JSON.stringify(product);

        $.ajax({
            url: "http://localhost:8084/api/clone/update",
            type: "PUT",
            datatype: "JSON",
            data: dataToSend,
            contentType: "application/json",
            success: function(response) {
                console.log(response);
                $("#productList").empty();
                getProducts();
                console.log("Se ha actualizado el registro del producto.");
                alert("Se ha actualizado el registro del producto.")
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("No se ha actualizado el registro del producto, por favor verifique.");
                alert("No se ha actualizado el registro del producto, por favor verifique.")
            }
        });
        console.log(response);
    }
}
*/
/**
function saveProduct() {

    if ($("#marca-producto").val().length == 0 || $("#procesador-producto").val().length == 0 || $("#so-producto").val().length == 0 ||
        $("#descripcion-producto").val().length == 0 || $("#memoria-producto").val().length == 0 || $("#stock-producto").val().length == 0 ||
        $("#precio-producto").val().length == 0 || $("#cantidad-producto").val().length == 0) {

        alert("Por favor llene todos los campos de registro solicitados.");

    } else {

        let product = {
            brand: $("#marca-producto").val(),
            procesor: $("#procesador-producto").val(),
            os: $("#so-producto").val(),
            description: $("#descripcion-producto").val(),
            memory: $("#memoria-producto").val(),
            hardDrive: $("#hdd-producto").val(),
            availability: $("#stock-producto").val(),
            price: $("precio-producto").val(),
            quantity: $("#cantidad-producto").val(),
            photography: $("#foto-producto").val()
        }

        console.log(product);
        let dataToSend = JSON.stringify(product);

        $.ajax({
            url: "http://localhost:8084/api/clone/new",
            type: "POST",
            datatype: "JSON",
            data: dataToSend,
            contentType: "application/json",
            success: function(response) {
                console.log(response);
                $("#productList").empty();
                $("#marca-producto").val("");
                $("#procesador-producto").val("");
                $("#so-producto").val("");
                $("#descripcion-producto").val("");
                $("#memoria-producto").val("");
                $("#hdd-producto").val("");
                $("#stock-producto").val("");
                $("#precio-producto").val("");
                $("#cantidad-producto").val("");
                $("#foto-producto").val("");
                getProducts();
                console.log("Se ha añadido el registro del producto al sistema.");
                alert("Se ha añadido el registro del producto al sistema.")
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("No se ha añadido el registro del producto, por favor verifique.");
                alert("Se ha añadido el registro del producto, por favor verifique.")
            }
        });

    }
}
*/