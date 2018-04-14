<!doctype html>
<html lang="en">
  <?php include("templates/_head.php"); ?>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9HT2T6"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
     <div class="container body-content">
      <?php include("templates/_navigation.php"); ?>
      <section class="hero">
        <img class="img-responsive" src="images/aerial-1-banner.jpg" alt="Cypress trees" />
      </section>
       <section>
         <div class="container">
           <div class="row">
            <div class="col-xs-12 col-sm-6">
              <h1>Directions</h1>
              <p>Knowing how to get somewhere is half the battle. Let me help you out because Caddo Lake is a gem that can be hard to find.</p>
              <p>Rest assured, once you make it to Caddo Lake you will find that it was well worth it.</p>
              <h2>Specific Directions</h2>
              <p>Caddo Lake is located between Marshall, Texas and Shreveport, Louisiana in Uncertain, Texas.</p>
              <p>Bayou Tours is located at Shady Glade Resort, five miles from Caddo Lake State Park. <strong>Tours are available daily</strong>.</p>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="map-container">
                <iframe width="100%"
                        height="450"
                        frameborder="0"
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_873jk-UNoYRe7fYU9z3y3I&key=AIzaSyDOtUaGuS_0BsqEpfUPkNVxYdihgtihOhY"
                        allowfullscreen></iframe>
              </div>
            </div>
          </div>
         </div>
       </section>
       <section>
         <div class="container">
          <div class="row">
           <div class="col-xs-12 col-sm-6">
             <div class="img-container">
               <img class="img-responsive" src="images/sunset/lake-sunset-xl.jpg" alt="Sunset" />
             </div>
           </div>
           <div class="col-xs-12 col-sm-6">
             <h3>Take in the beauty</h3>
             <p>Still not convinced that Caddo Lake is worth the visit? Check out our photo gallery to get a glimpse of what awaits you.</p>
             <p><a class="btn btn-info" href="contact.php">Book a Tour</a></p>
           </div>
         </div>
         </div>
       </section>
       <?php include("templates/_footer.php"); ?>
      </div>
    </div>

    <!-- build:js js/bootstrap-bundle.js -->
    <script type="text/javascript" src="/node_modules/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="/node_modules/bootstrap-sass/assets/javascripts/bootstrap/button.js"></script>
    <script type="text/javascript" src="/node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js"></script>
    <script type="text/javascript" src="/node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js"></script>
    <script type="text/javascript" src="/node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js"></script>
    <script type="text/javascript" src="/node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js"></script>
    <!-- endbuild -->
  </body>
</html>
