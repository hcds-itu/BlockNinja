// when used in html file, the user is not allowed to go back
history.pushState(null, null, location.href);
window.onpopstate = function() {
  history.go(1);
};