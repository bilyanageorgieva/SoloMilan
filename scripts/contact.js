categoryNavigation();

$("#send-form-button").click(function() {
  if (
    $("#name").val() != "" &&
    $("#email").val() != "" &&
    $("#subject").val() != "" &&
    $("#message").val() != ""
  ) {
    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val("");
    $("#ask-anything").text("Your message was sent!");
  }
});
