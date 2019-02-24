function create() {
    var gameBg = game.add.image(0, 0, "bg");
    var widthSpace = settings.symWidth+settings.symSpace;

    //данные для барабанов - скорость и количество шагов (от и до)
    var speeds = [15, 20, 30, 45, 60];
    var steps = [ [5,7],[10,12],[20,22],[38,40],[55,57] ];
    var syms = ["str", "lem", "wat", "che", "app", "ras"];

    //создаем барабаны
    for (var i = 0; i <= settings.reelsCount; i++) {
        reels[i] = new Reel(shuffle(syms), widthSpace*i, speeds[i], steps[i]);
    }

    //кнопки
    spinBtn = game.add.image(925, 70, "spinBtn");
    spinBtn.inputEnabled = true;
    spinBtn.input.useHandCursor = true;
    spinBtn.events.onInputDown.add(function() {
        if (settings.spiningCount == 0) {
            reels.forEach(function(reel) {
                reel.run();
            });
        }
    }, this);

    stopBtn = game.add.image(925, 300, "stopBtn");
    stopBtn.inputEnabled = true;
    stopBtn.input.useHandCursor = true;
    stopBtn.events.onInputDown.add(function() {
        reels.forEach(function(reel) {
            reel.stop();
        });
    }, this);
}
