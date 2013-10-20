/*
 * mm_example javascript source
 */
 
 //Touch Events: Progressive Enhancement
 //var touchEvents =(
 $js = 'var attr = document.createAttribute("ontouchstart");
				attr.value = "touch(event)";
				document.getElementById("main-content").setAttributeNode(attr);
				attr = document.createAttribute("ontouchend");
				attr.value = "clean()";
				document.getElementById("main-content").setAttributeNode(attr);
				function touch(event) {
					event.preventDefault();
					var i;
					for (i=0; i<event.touches.length; i++) {
						var sx = event.touches[i].screenX;
						var sy = event.touches[i].screenY;
						var cx = event.touches[i].clientX;
						var cy = event.touches[i].clientY;
						var px = event.touches[i].pageX;
						var py = event.touches[i].pageY;
						document.getElementById("screenx").innerHTML += i.toString() + ": " + sx.toString() + ", ";
						document.getElementById("screeny").innerHTML += i.toString() + ": " + sy.toString() + ", ";
						document.getElementById("pagex").innerHTML += i.toString() + ": " + px.toString() + ", ";
						document.getElementById("pagey").innerHTML += i.toString() + ": " + py.toString() + ", ";	
						document.getElementById("clientx").innerHTML += i.toString() + ": " + cx.toString() + ", "
						document.getElementById("clienty").innerHTML += i.toString() + ": " + cy.toString() + ", ";
					}
				}
				function clean() {
					document.getElementById("screenx").innerHTML = "Screen-X:";
					document.getElementById("screeny").innerHTML = "Screen-Y:";
					document.getElementById("pagex").innerHTML = "Page-X:";
					document.getElementById("pagey").innerHTML = "Page-Y:";
					document.getElementById("clientx").innerHTML = "Client-X:";
					document.getElementById("clienty").innerHTML = "Client-Y:";
				}';
				
				
				
				var url = '/data.php';
var params = [
    'id=934875',
    'limit=20'
];

var req = new XMLHttpRequest();

req.onreadystatechange = function() {
    if (req.readyState === 4) {
        var responseHeaders = req.getAllResponseHeaders(); // Get the response
headers.
        var data = req.responseText; // Get the data.
        // Process the data here...
    }
}
function getURLInfo(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open (
    "GET",                               /* do NOT use escape() */
    "http://RESTfulAPI/info.json?url=" + encodeURIComponent(url),
    true
  );
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // defensive check
      if (typeof callback == "function") {
        // apply() sets the meaning of "this" in the callback
        callback.apply(xhr);
      }
    }
  }
  // send the request *after* the event handler is defined 
  xhr.send();
}


// getURLInfo() completes immediately...
getURLInfo(
  "http://example.com/", 
  // ...however, the callback function is invoked AFTER the response arrives
  function() {
    // "this" is the XHR object here!
    var resp  = JSON.parse(this.responseText);

    /* now do something with resp */
  }
);
req.open('GET', url + '?' + params.join('&'), true);
req.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // Set a request
header.
req.send(null); // Send the request.

	$js='var sa = document.getElementById("scrollarea");
		var lastSong=document.getElementById("songlist").lastElementChild;
		var url = "/survey-info/mm-example/data/" + lastSong.id;
		fetch(url, process);
		function fetch(url, callback) {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);
			xhr.onreadystatechange = function() {
				if (xhr.readystate == 4) {
					callback.call(xhr);
				}
			}
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			xhr.send(null);
		}
		function process() {
			var res = JSON.parse(this.responseText);
			console.log("hi");
			console.log(res);
		}
	';	


	function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document. documentElement.clientWidth) /*or $(window).width() */
        );
}