const personalKey = "9rk8G4OlOHKHWxEO3PgtkuXh5Iqy0Lf75zKEqbLZ";
let media = $("#media-img").hide()
let mediaVideo = $("#media-video").hide()
let time = null;
let onChange = false;
let hoje

$(document).ready(function () {
    let now = new Date();
    let month = (now.getMonth() + 1);
    let day = now.getDate();
    if (month < 10)
        month = "0" + month;
    if (day < 10)
        day = "0" + day;
    let today = now.getFullYear() + '-' + month + '-' + day;
    hoje=$('#data').val(today)
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${personalKey}&date=${today}`,
        success: function (resposta) {
            $("#name").text(resposta.title)
            $("#copyright").text(resposta.copyright)
            $("#explanation").text(resposta.explanation)

            if (resposta.media_type == "image") {
                if ($("#media-img").show()) {
                    $("#media-video").hide()
                }
                $("#media-img").attr("src", resposta.url)
            } else if (resposta.media_type == "video") {
                if ($("#media-video").show()) {
                    $("#media-img").hide()
                }
                $("#media-video").attr("src", resposta.url)
            }
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
});



$("#data").change(function () {


    onChange = true;
    clearTimeout(time);
    time = setTimeout(function () {
        if( $("#data").val()>hoje){
            console.log(oi);
        }
        onChange = false;


        dataUsuario = $("#data").val()
        $.ajax({
            url: `https://api.nasa.gov/planetary/apod?api_key=${personalKey}&date=${dataUsuario}`,
            success: function (resposta) {
                $("#name").text(resposta.title)
                $("#copyright").text(resposta.copyright)
                $("#explanation").text(resposta.explanation)
                if (resposta.media_type == "image") {
                    if ($("#media-img").show()) {
                        $("#media-video").hide()
                    }
                    $("#media-img").attr("src", resposta.url)

                } else if (resposta.media_type == "video") {
                    if ($("#media-video").show()) {
                        $("#media-img").hide()
                    }
                    $("#media-video").attr("src", resposta.url)

                }
            },
        });
    }, 1000)

})