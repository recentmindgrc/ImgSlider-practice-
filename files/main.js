var slideImg = document.querySelector ('.slideImg');

var images = new Array (
         "images/02.jpg",
         "images/03.jpg",
         "images/04.jpg",
         "images/05.jpg");

      var len = images.length;
      var i = 0;

      function slider () {
         if (i > len-1){
            i = 0;
         }
         slideImg.src = images[i];
         i++;

         setTimeout('slider()',3000);
      }
   </script>