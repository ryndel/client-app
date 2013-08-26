Handlebars.registerHelper("prettyDate", function (time) {
	
	var date = new Date((time || "")),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
		return;
			
	return day_diff == 0 && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 8 && Math.ceil( day_diff / 7 ) + " week ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
});

Handlebars.registerHelper('linkify', function (text) {
    text = text.replace(/(https?:\/\/\S+)/gi, function (s) {
        return '<a href="' + s + '">' + s + '</a>';
    });

    text = text.replace(/(^|)@(\w+)/gi, function (s) {
        return '<a href="http://twitter.com/' + s + '">' + s + '</a>';
    });

    text = text.replace(/(^|)#(\w+)/gi, function (s) {
        return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/,'%23') + '">' + s + '</a>';
     });
    return new Handlebars.SafeString(text);
});


Handlebars.registerHelper('stripTags', function (text) {
	cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
	return cleanText;
});

Handlebars.registerHelper('html', function (text) {
	return new Handlebars.SafeString(text);

});

Handlebars.registerHelper('displayImage', function (sizes) {
	return sizes.max_1240 || sizes.original;

});