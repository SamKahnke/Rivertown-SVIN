$(function() {
   const transcript = $( "#transcript-dialog" );
   const transcriptButton = $( "#transcript-btn" );

   transcript.dialog({
      autoOpen: false,
      position: { at: "left bottom" },
      hide: "slide",
      show: "slide",
      height: 400,
      width: 340,
      dragstop: function( event, ui ) {},
      resizestop: function( event, ui ) {}
   });

   transcript.on( "dialogdragstop dialogresizestop", function( event, ui ) {
      setEffect();
   });

   transcriptButton.click(function() {
      let isOpen = transcript.dialog( "isOpen" );

      if (isOpen) {
         transcript.dialog( "close" );
      } else {
         transcript.dialog( "open" );
      }
   });

   // enables slide effect if dialog is touching the window's left side
   function setEffect() {
      let pos = transcript.dialog( "option", "position" ).at;

      if (pos.includes("left ") || pos.includes("left+0")) {
         transcript.dialog( "option", { hide: "slide", show: "slide" } );
      } else {
         transcript.dialog( "option", { hide: false, show: false } );
      }
   }

   $(".dropdown").click(function() {
      $(this).toggleClass("show");
   });
});
