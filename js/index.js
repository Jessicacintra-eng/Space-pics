const personalKey="9rk8G4OlOHKHWxEO3PgtkuXh5Iqy0Lf75zKEqbLZ";
let media =$("#media-img").hide()
let mediaVideo =$("#media-video").hide()
let time=null;
let onChange=false;
// $(document).ready( function() {
//     let now = new Date();
//     let month = (now.getMonth() + 1);               
//     let day = now.getDate();
//     if (month < 10) 
//         month = "0" + month;
//     if (day < 10) 
//         day = "0" + day;
//     let today = now.getFullYear() + '-' + month + '-' + day;
//     let  dataDeHoje=$('#data').val(today).toString();
//     $("#data").autofocus=true;
//     console.log(dataDeHoje)
//     // $.ajax({
//     //     url: `https://api.nasa.gov/planetary/apod?api_key=${personalKey}&date=${dataDeHoje}`,
//     //     success: function (resposta) {
//     //         $("#media").show()  
//     //       $("#media").attr("src", resposta.url)
//     //     },
//     //   });
// });
// document.querySelector("#data").addEventListener("focus",function(){
//     document.querySelector("#data").style.backgroundColor="#1DA400"
//     document.querySelector("#data"),style.color="white"
// });

$("#data").change(function(){
    onChange=true;
    clearTimeout(time);
    time=setTimeout(function(){
        onChange=false;
        dataUsuario=$("#data").val()
        $.ajax({
            url: `https://api.nasa.gov/planetary/apod?api_key=${personalKey}&date=${dataUsuario}`,
            success: function (resposta) {
                console.log(resposta.media_type)
                if(resposta.media_type=="image"){
                    if($("#media-img").show()){
                        $("#media-video").hide() 
                    }  
                    $("#media-img").attr("src", resposta.url)
                }else if(resposta.media_type=="video"){
                    if($("#media-video").show()){
                        $("#media-img").hide()
                    }  
                    $("#media-video").attr("src", resposta.url)
                }
            },
          });
    },1000)
})

let dataDeHoje


