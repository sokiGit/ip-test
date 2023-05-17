async function getData() {
  const r = await fetch("https://api.ipify.org/?format=json");
  const jData = await r.json();

  document.getElementsByName("ipv4")[0].innerHTML = jData.ip;
  const http = new XMLHttpRequest();
  http.open("GET", "https://sokigit.github.io/rurl/");
  http.responseType = "text/html"
  http.send();
  http.onreadystatechange=(e)=>{
   console.log(http.responseText);
    document.getElementsByName("requestResponse")[0].innerHTML = http.responseText;
  }
}

getData();
