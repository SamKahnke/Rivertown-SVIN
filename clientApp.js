$(function() {
   $( "#transcript-dialog" ).dialog({
      autoOpen: false,
      position: {
        at: "left bottom"
      },
      hide: "slide",
      show : "slide",
      height: 400
   });

   $( "#transcript-btn" ).click(function() {
      if ($( "#transcript-dialog" ).dialog( "isOpen" )) {
         $( "#transcript-dialog" ).dialog( "close" );
      } else {
         $( "#transcript-dialog" ).dialog( "open" );
      }
   });
});
