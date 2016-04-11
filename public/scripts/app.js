/* CLIENT-SIDE JS
  people can see this, be careful!

*/

$(document).ready(function() {
  // make an ajax call to my server
  $('#add').on('click', function clickHandler(e){
    console.log("here's my form", $('#f1').serialize());
  /*  e.preventDefault();    */
      $.ajax({
        method: "POST",
        url: ('/api/orders/2/items'),
        data: $('#f1').serialize(),
        success: sanitySuccess,
      });
    });


  $('#total').on('click', function handleClick(){
    console.log("woo hoo!!! I did something right!", $('#f2').serialize());
      $.ajax({
        method: "POST",
        url: ('/api/orders/'),
        data: $('#f2').serialize(),
        success: success2,
    });
  });


$('#f2').keyup(function () {
  var input = $(this).val();
  $('#f3').text(input);
    console.log('value:#f2');
});


// these are being loaded when this app.js is executed
function sanitySuccess(pleaseWork){
  console.log("YOU DID IT! SUCCESS!", formData);
  var formData = ('#f1');
}

function success2(goodthings){
  console.log("YOU DID IT! SUCCESS!", formEntry);
  var formEntry = ('#f2');
}

function sanityError(error) {
  console.log("DAMNIT! ERROR!!!");
  console.log(error);
}
});
