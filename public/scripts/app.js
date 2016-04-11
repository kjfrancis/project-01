/* CLIENT-SIDE JS
  people can see this, be careful!

*/

$(document).ready(function() {
  // make an ajax call to my server
  $('#add').on('click', function clickHandler(e){
    console.log("here's my form", $('#f1').serialize());
  /*  e.preventDefault();    */
      $.ajax({
        method: "GET",
        url: ('/api/primary'),
        data: $('#f1').serialize(),
        success: sanitySuccess,
      });
    });


/*  $('#total').on('click', function handleClick(){
      console.log("woo hoo!!! I did something right!", formData);
      $.ajax({
        method: "POST",
        url: "",
        data: $('#f2').serialize(),
        success: blah,
        error:
*/
// these are being loaded when this app.js is executed
function sanitySuccess(pleaseWork){
  console.log("YOU DID IT! SUCCESS!", formData);
  var formData = ('#f1');
}


function sanityError(error) {
  console.log("DAMNIT! ERROR!!!");
  console.log(error);
}
});
