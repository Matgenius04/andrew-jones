var title;
var text;
var date = new Date();
date = date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear();
function generate() {
  title = document.getElementById('title');
  text = document.getElementById('text');
  var doot = "<h2 class='heading'>"+title+"</h2> \
  <date class='date'>"+date+"</date> \
  <p class='normal-text'>"+text+"</p>";
  document.createElement('p').innerHTML = 
  return doot;
}