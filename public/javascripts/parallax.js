(function() {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  
  function parallax(event) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = event.clientX;
      let _mouseY = event.clientY;
      let _background = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.001}%`;
      let _foreground = `${50 - (_mouseX - _w) * -0.01}% ${50 - (_mouseY - _h) * -0.003}%`;
      let position = `${_foreground}, ${_background}`;
      elem.style.backgroundPosition = position;
  }
})();