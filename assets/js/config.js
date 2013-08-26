// different config for localhost
var config, 	
	is_localhost = ( window.location.hostname.search("localhost") > -1 );

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27786728-1']);
_gaq.push(['_trackPageview']);

if( is_localhost ) {
	
	config = {
		//facebook : {
		//	key : "213969952036518",
		//	namespace : "makesites",
		//	access_token : "213969952036518|aZvv0bLBJbBpE5nkNGHj4Uk0uJ0"
		// },
		behance : {
			key : "NVBvLPd3PYK4uCgAjLEBBoXFGCdHQX3C"
			
			// key : "dgpAWsvElMXqSStVoa9asij6bEJWjiNf"
		}
	};

} else {
	
	config = {
		//facebook : {
		// 	key : "218203651659085",
		//	namespace : "mjwadvertising",
		//	access_token : "218203651659085|IaeRH9gfmkKC2l9xeEmoSzDlBA8"
		//},
		behance : {
			
			// key : "HRoteVw4ovXi2EBR5WJw5CuvcvGiM9R6"
			// my key:
			key : "dgpAWsvElMXqSStVoa9asij6bEJWjiNf"
		}
	};

}
