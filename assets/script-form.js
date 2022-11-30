
(function ($) {
  $(".main__form").submit(function (event) {
    event.preventDefault();
 
    let successSendText = "The message was sent successfully";
    let errorSendText = "Message not sent. Try again!";
    let requiredFieldsText = "Fill all the fields";

    let message = $(this).find(".contact-form__message");
 
    let form = $("#" + $(this).attr("id"))[0];
    let fd = new FormData(form);
    $.ajax({
      url: "assets/send.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      beforeSend: () => {
        $(".preloader").addClass("preloader_active");
      },
      success: function success(res) {
        $(".preloader").removeClass("preloader_active");

        let respond = $.parseJSON(res);
 
        if (respond === "SUCCESS") {
          message.text(successSendText).css("color", "#21d4bb");
          setTimeout(() => {
            $('.main__form').find('input').val('');
            message.text("");
          }, 4000);
        } else if (respond === "NOTVALID") {
          message.text(requiredFieldsText).css("color", "#d42121");
          setTimeout(() => {
            message.text("");
          }, 3000);
        } else {
          message.text(errorSendText).css("color", "#d42121");
          setTimeout(() => {
            message.text("");
          }, 4000);
        }
      }
    });
  });
})(jQuery);