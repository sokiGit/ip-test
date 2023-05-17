async function getData() {
  const r = await fetch("https://api.ipify.org/?format=json");
  const jData = await r.json();

  document.getElementsByName("ipv4")[0].innerHTML = jData.ip;
}

getData();
