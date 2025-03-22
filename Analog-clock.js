(function(){
    var time = new Date(),
    secound = time.getSeconds() / 60 * 360,
    minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6,
    hour = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30,

    animation = [
        "@keyframes sec-hand{from{transform: rotate(" + secound + "deg);}to{transform:rotate(" + (secound + 360) + "deg);}}",
        "@keyframes min-hand{from{transform: rotate(" + minute + "deg);}to{transform:rotate(" + (minute + 360) + "deg);}}",
        "@keyframes hr-hand{from{transform: rotate(" + hour + "deg);}to{transform:rotate(" + (hour + 360) + "deg);}}",
    ].join("");
    document.querySelector('#clock-animate').innerHTML = animation;
})();