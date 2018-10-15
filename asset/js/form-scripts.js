$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Todos los campos  requeridos");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
    // Initiate Variables With Form Content
    var Kunnr = $("#Kunnr").val();
    console.log(Kunnr);
    var Name1 = $("#Name1").val();
    console.log(Name1);
    var Stcd1 = $("#Stcd1").val();
    console.log(Stcd1);
    var Mcod3 = $("#Mcod3").val();
    console.log(Mcod3);
    var Regio = $("#Regio").val();
    console.log(Regio);
    var Land1 = $("#Land1").val();
    console.log(Land1);
    var Pstlz = $("#Pstlz").val();
    console.log(Pstlz);
    var Telf1 = $("#Telf1").val();
    console.log(Telf1);
    var Erdat = $("#Erdat").val();
    console.log(Erdat);
    var Altkn = $("#Altkn").val();
    console.log(Altkn);
    var Maktx = $("#Maktx").val();
    console.log(Maktx);
    var Matnr = $("#Matnr").val();
    console.log(Matnr);
    var Matkl = $("#Matkl").val();
    console.log(Matkl);
    var Meins = $("#Meins").val();
    console.log(Meins);
    var Mtart = $("#Mtart").val();
    console.log(Mtart);
    var Maktg = $("#Maktg").val();
    console.log(Maktg);
    var Knumh = $("#Knumh").val();
    console.log(Knumh);
    var Kbetr = $("#Kbetr").val();
    console.log(Kbetr);
    var Konwa = $("#Konwa").val();
    console.log(Konwa);
    var Kdmat = $("#Kdmat").val();
    console.log(Kdmat);
    var Vkbur = $("#Vkbur").val();
    console.log(Vkbur);

    $.ajax({
        type: "POST",
        url: "ApiSAP.php",
        data: "Kunnr=" + Kunnr + "&Name1=" + Name1
                + "&Name1=" + Name1 + "&Name1=" + Name1
                + "&Stcd1=" + Stcd1 + "&Mcod3=" + Mcod3
                + "&Regio=" + Regio + "&Land1=" + Land1
                + "&Pstlz=" + Pstlz + "&Telf1=" + Telf1
                + "&Erdat=" + Erdat + "&Altkn=" + Altkn
                + "&Maktx=" + Maktx + "&Matnr=" + Matnr
                + "&Matkl=" + Matkl + "&Meins=" + Meins
                + "&Mtart=" + Mtart + "&Maktg=" + Maktg
                + "&Knumh=" + Knumh + "&Kbetr=" + Kbetr
                + "&Konwa=" + Konwa + "&Kdmat=" + Kdmat
                + "&Vkbur=" + Vkbur,
        success: function (text) {
            console.log(text);
            var detailErro= text.SapInternalError.faultstring;
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false,detailErro);
            }
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Bienvenido!")
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}