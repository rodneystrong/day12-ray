// "use strict";
//   var request;
//   request=new XMLHttpRequest();
//   request.open('GET', 'js/data.json');
//   request.onreadystatechange = function() {
//     if ((request.status === 200) &&
//       (request.readyState === 4)) {
//         var data = JSON.parse(request.responseText);
//         var template = document.querySelector('#speakerstpl').innerHTML;
//         var html = Mustache.to_html(template, data);
//         document.querySelector('#speakers').innerHTML=html;
//     } //ready
//   }; //event
//   request.send();

  "use strict";
  var request;
  var myNode = document.querySelector('#search');
  var myList = document.querySelector('#update');

  request=new XMLHttpRequest();
  request.open('GET', 'js/data.json');
  request.onreadystatechange = function() {
    if ((request.status === 200) &&
      (request.readyState === 4)) {
        var data = JSON.parse(request.responseText);

        myNode.addEventListener('keyup', function(e) {
          var searchField = e.target.value;
          var myExp = new RegExp(searchField, 'i');
          var output;

          output = '<ul>';
          for (var key in data) {
            if ((data[key].name.search(myExp) !== -1) ||
            (data[key].bio.search(myExp) !== -1)) {
              output += '<li>';
              output += '<h2>'+ data[key].name +'</h2>';
              output += '<img src="images/'+ data[key].shortname +'_tn.jpg" alt="'+ data[key].name +'" />';
              output += '<p>'+ data[key].bio +'</p>';
              output += '</li>';
            } // if
          } // for
          output += '</ul>';
          myList.innerHTML = output;
        }); //keyup
      } //ready
    }; //event
    request.send();
