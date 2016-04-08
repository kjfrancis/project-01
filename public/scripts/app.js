/* CLIENT-SIDE JS
  people can see this, be careful!

*/

$(document).ready(function() {
  // make an ajax call to my server
  $('#add').on('click', function clickHandler(e){
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "",
      data: $('#f1').serialize(),
      success: ,
      error:
    });

  $('#total').on('click', function handleClick(){
      console.log("woo hoo!!! I did something right!", formData);
      $.ajax({
        method: "POST",
        url: "",

        success: ,
        error:
      });
    });

  var addItem = function () {
    add.text("");
  };
  });



});

// these are being loaded when this app.js is executed
function sanitySuccess(res.json) {
  console.log("YOU DID IT! SUCCESS!", formData);
  console.log(success);
  var allPrimaries = success;
}
  // traverse all of my db entries and append each entry's favorite color to my #colorAnswer div


function sanityError(error) {
  console.log("DAMNIT! ERROR!!!");
  console.log(error);
}
