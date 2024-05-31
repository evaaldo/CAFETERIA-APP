$(document).ready(() => {

    $("#conteudo").hide();
    $("#buscar_produtos").hide();
    $("#btn_buscar_produtos").hide();

    $("#banner_btn").click(() => {
        setTimeout(() => {
            $("#banner_btn").fadeOut();
        }, 100)

        setTimeout(() => {
            $("#conteudo").fadeIn();
            $("#buscar_produtos").fadeIn();
            $("#btn_buscar_produtos").fadeIn();
        }, 400)
    })

})