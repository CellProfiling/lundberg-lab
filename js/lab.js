function convertContent() {
   var converter = new showdown.Converter();
   var finalUrl = window.location + "";
   finalUrl = finalUrl.substring(0, finalUrl.lastIndexOf("/") + 1);

   $( ".mdcontent" ).each(function( index ) {
      var mdDiv = this;
      var mdName = $( this ).attr('class').split(' ').pop();
      $.get(finalUrl + mdName + ".md", function(response) {
         $( mdDiv ).html(converter.makeHtml(response));
      });
   });
}

$(document).keypress(function(e) {
   alert(e.keyCode)
   if ( e.keyCode == 115 ) {
      var KICKASSVERSION='2.0';
      var s = document.createElement('script');
      s.type = 'text/javascript';
      document.body.appendChild(s);
      s.src='//hi.kickassapp.com/kickass.js';
      void(0);
   }
});

