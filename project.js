var btn=document.getElementById("more")

var modal=document.getElementById("modal")

var close=document.getElementById("idom")

btn.onclick = function() {
    modal.style.display = "block";
  }

close.onclick = function() {
    modal.style.display="none";
}

const body = document.body;

function theme() {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 18 || currentHour < 6) {
    body.classList.add('dark-mode');
  }
  
}

console.log(theme())
