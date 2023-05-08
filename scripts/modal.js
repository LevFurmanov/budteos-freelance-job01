$(".modal-btn").on("click", (e) => {
    e.preventDefault();
    $("#ex1").modal({
        escapeClose: false,
        clickClose: true,
        showClose: false, 
        fadeDuration: 200
      });
})