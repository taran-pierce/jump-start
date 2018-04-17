<?php

  # show at least one slide if no slides are set on gallery
  if ( $count === null ) {
    $count = 1;
  }

  $thumb_path = "images/gallery/thumbs/IMG-";
  $large_path = "images/gallery/lightbox/IMG-";
  $image_ext = ".jpg";
  $image_alt = "Lake Thumbnail";

  for ( $i = 1; $i <= $count; $i++ ) {
    $image = "<img src='" . $thumb_path . $i . $image_ext . "' alt='" . $image_alt . "' />";
    $link = $large_path . $i . $image_ext;

    print_r("<div class='slide'>");
      print_r( "<a class='gallery-link' href=$link>");
        print_r( $image );
      print_r("</a>");
    print_r("</div>");
  }

?>