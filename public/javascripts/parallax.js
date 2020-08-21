(function() {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * -0.01}% ${50 - (_mouseY - _h) * -0.005}%`;
      let x = `${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = x;
  }
})();