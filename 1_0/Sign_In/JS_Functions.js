$(document).ready(function() {
  //Makes div larger
  
  /*
  $('').mouseenter(function() {
    $(this).animate({ height: '+=10px' });
  });
  */

  var images = ['Image1.jpg','Image2.jpg'];
  var index = 0; // starting index
  var maxImages = images.length - 1;
  var timer = setInterval(function() {
    var curImage = images[index];
    index = (index == maxImages) ? 0 : ++index;
    // set your image using the curImageVar 
    $('div.preview img').attr('src','Sign_In/Images/'+curImage);
    }
    ,5000
  );

});