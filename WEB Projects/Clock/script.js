const currentTime = ()=>{
    const el = document.querySelector("h1");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let time = `${hh}:${mm}:${ss}`;
    el.innerText = time;
};
currentTime();
setInterval(currentTime,1000);