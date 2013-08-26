(function(_, Backbone, $) {

	/* Main layout */
	APP.Layouts.Main = APP.Layout.extend({
		el : "body",
		events : {
		},
		
		initialize : function( options ){
			
			var self = this;
			this.data = options.data;
			
			// - views

			this.set({
				
				topanchor: new APP.Views.Topanchor({
					// el : 'body'
				}),

				header: new APP.Views.Header({
					detatch : true,
					hide : true
				})
			});
			
			return APP.Layout.prototype.initialize.call(this, options);
		},
		

	});

	APP.Views.Page = APP.View.extend({
		initialize: function(){
			_.bindAll( this, "update");
		},
	});

	APP.Views.Topanchor = Backbone.UI.Topanchor.extend({
	});

	APP.Views.Header = Backbone.UI.Header.extend({
	});


	// Section views (duplicate as needed...)
	APP.Views.Section = APP.View.extend({
		el: "",
		events: {},
		initialize: function(model, options){},
		render: function(){}
	});

})(this._, this.Backbone, this.$);