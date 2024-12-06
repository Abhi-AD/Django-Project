$(document).ready(function () {
  $(document).on("submit", "#contact-form-ajax", function (e) {
    e.preventDefault();
    let full_name = $("#full_name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let subject = $("#subject").val();
    let message = $("#message").val();
    $.ajax({
      url: "/essence/ajax_contact",
      data: {
        full_name: full_name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      },
      dataType: "json",
      beforeSend: function () {
        console.log("Sending Data to Server...");
      },
      success: function (response) {
        console.log("Sending Data to Server...!");
        $("#contact-form-ajax").hide();
        $("#message-response").html("Message sent successfully!");
      },
    });
  });
});
