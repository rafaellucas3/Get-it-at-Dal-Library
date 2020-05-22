// Change the url to library when on click

var l=location;

var url = String(l.origin).split(".").join("-")+'.ezproxy.library.dal.ca'+String(l.href.replace(l.origin, ''));

l.href = url;