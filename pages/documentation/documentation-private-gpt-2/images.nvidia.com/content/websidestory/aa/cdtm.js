(function(){
var ppath=window.location.href;	

if(ppath.indexOf("developer.nvidia.com/login")>-1){
	
	function gtag_report_conversion() {
	  var callback = function () {
	  };
	  gtag('event', 'conversion', {
		  'send_to': 'AW-1041695361/gSAjCPSY_u8BEIGF3PAD',
		  'event_callback': callback
	  });
	  return false;
	}
	
	
	jQuery('#edit-submit-button').on('click',function(){
		gtag_report_conversion();
		
	})
	
}
	
})();


