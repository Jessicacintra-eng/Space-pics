const personalKey = "9rk8G4OlOHKHWxEO3PgtkuXh5Iqy0Lf75zKEqbLZ";
let media = $("#media-img").hide()
let mediaVideo = $("#media-video").hide()
let time = null;
let onChange = false;
$(document).ready(function () {
    let now = new Date();
    let month = (now.getMonth() + 1);
    let day = now.getDate();
    if (month < 10)
        month = "0" + month;
    if (day < 10)
        day = "0" + day;
    let today = now.getFullYear() + '-' + month + '-' + day;
    console.log(today)
    let dataDeHoje = $('#data').val(today).toString();
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
                $("#media-img").attr("src", resposta.hdurl)
            } else if (resposta.media_type == "video") {
                if ($("#media-video").show()) {
                    $("#media-img").hide()
                }
                $("#media-video").attr("src", resposta.hdurl)
            }
        },
    });
});
$("#about").show()
$("#loading").hide() 

$("#data").change(function () {
    $("#about").hide() 
    $("#loading").show()
    onChange = true;
    clearTimeout(time);
    time = setTimeout(function () {
        $("#loading").hide() 
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
                    $("#media-img").attr("src", resposta.hdurl)
                    $("#about").show()
                } else if (resposta.media_type == "video") {
                    if ($("#media-video").show()) {
                        $("#media-img").hide()
                    }
                    $("#media-video").attr("src", resposta.hdurl)
                    $("#about").show()
                }
            },
        });
        
    }, 2000)
   
 
})