let firstTick = true
const moves = ["N","E","S","W"]

rl.on("line", (line) => {
    const data = JSON.parse(line);

    if (firstTick){
        const { width, height } = data.config;
        console.error(`The evermoving one is dropped on a ${width}x${height} arena, sponsored by Raid Shadow Legends.`);
    }

    var [posX, posY] = data.bot;
    var [diaX, diaY] = data.visible_gems[0].position;

    while(data.visible_gems[0].ttl > 0){
        var disX = posX - diaX;
        var disY = posY - diaY

        if(disX < 0 && Math.abs(disX) > Math.abs(disY)){
            console.log("E");
        } else if(disX > 0 && Math.abs(disX) > Math.abs(disY)){
            console.log("W");
        } else if(disY > 0 && Math.abs(disX) < Math.abs(disY)){
            console.log("S");
        } else if(disY < 0 && Math.abs(disX) < Math.abs(disY)){
            console.log("N");
        };
    };
});
