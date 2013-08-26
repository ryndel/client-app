// Backbone.js Topanchor extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/topanchor
//
// Licensed under the MIT license: 
// http://makesites.org/licenses/MIT

(function(_, Backbone) {
	
	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;
	
	Backbone.UI.Topanchor = View.extend({
		
		el: function(){ return $('<'+ this.options.tagName +' class="ui-topanchor '+ this.options.className +'">'+ this.options.text +'</'+ this.options.tagName +'>') },
		
		options : {
			scroll : true,
			className : "",
			tagName : "a",
			text: "Back to top",
			scrollOffset : 0
		},
		
		events: {
			"scroll" : "pageScroll",
			"click"  : "backToTop"
		},
		
		initialize: function(model, options){
			$(this.el).appendTo('body');
			
			_.bindAll(this, 'render', 'pageScroll'); 
			
			this.options.scrollOffset = ( this.options.scrollOffset ) ? this.options.scrollOffset : $(window).height() ;
			
			$(window).scroll(this.pageScroll);
			
		},
		
		pageScroll: function() {
			
			if ($(window).scrollTop() > this.options.scrollOffset) {
				
				$(this.el).addClass('ui-element-active');
			} else {
				$(this.el).removeClass('ui-element-active');
			}
		},
		
		backToTop: function() {
			$("html, body").animate({scrollTop: 0}, 1000);
		},

	});
	
})(this._, this.Backbone);