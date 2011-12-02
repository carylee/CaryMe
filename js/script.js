/* Author: Cary Lee

*/

$(".btn.twitter, a.twitter").click(function(e){
  e.preventDefault();
  window.open(e.target.href, "_blank","toolbar=no, location=no, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=no, width=520, height=570");
});

var setActiveNav = function(){
  nav = $(".secondary-nav");
  nav.find("li").removeClass("active");
  href = document.location.pathname
  if(href.match(/blog/))
  {
    nav.find("li.blog");
    $(".secondary-nav li.blog").addClass("active");
  }
  else if(href == "/")
  {
    nav.find("li.home").addClass("active");
  }
  else if(href.match(/projects/))
    nav.find("li.projects").addClass("active");
}

$(document).ready(function(){
  setActiveNav();
});
