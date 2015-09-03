var xhr = new XMLHttpRequest();

var base = 'https://raw.githubusercontent.com/frodetbj/all-of-my-writing/master/presentations/';
var ext = '.txt';
var presentation = getParameterByName('pres');
var resource = base + presentation + ext;

xhr.open('GET', resource, true);

xhr.onreadystatechange = function(){
  document.getElementById('source').innerHTML = xhr.responseText;
  //console.log();
  var slideshow = remark.create({
    ratio: '16:9',
    highlightStyle: 'monokai'
  });
};

xhr.send();

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
