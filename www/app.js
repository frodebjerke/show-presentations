var xhr = new XMLHttpRequest();

var resource = 'https://raw.githubusercontent.com/frodetbj/all-of-my-writing/master/presentations/2015-09-01_ITEX_brukervennlig-api-design.txt'

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
