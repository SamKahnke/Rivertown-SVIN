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
            $( "#transcript-opener" ).click(function() {
               $( "#transcript-dialog" ).dialog( "open" );
            });
         });
         
