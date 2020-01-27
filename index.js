function ValidateEmail() {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = $(".email")[0].value;
  // console.log(email);
  var found = String(email).match(mailFormat);
  // console.log(found);

  if (found) {
    $(".validation").css("visibility", "hidden");
    return true;
  } else {
    $(".validation").css("visibility", "visible");
    $(".email").addClass("error");
    return false;
  }

}
