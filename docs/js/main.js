setInterval(function() {
  document.getElementById("d2").innerHTML = new Date().toLocaleString();
}, 1000);



tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  }
}
