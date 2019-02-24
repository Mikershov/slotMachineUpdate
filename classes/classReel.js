/*
Класс барабан.
Конструирует барабан и содержит методы по его запуску, остановки и контроля.
symbolsArray - массив имен символов
x - координата по оси X для барабана
speed - скорость вращения
stepsArray - массив шагов барабана
*/

//Конструктор
function Reel(symbolsArray, x, speed, stepsArray) {
    var self = this;
    this.speed = speed;
    this.countMove = 0;
    this.stepsMin = stepsArray[0];
    this.stepsMax = stepsArray[1];
    this.countMoveLimit;
    this.ySpacer = settings.symHeight + settings.symSpace;
    this.symbols = {};
    this.upperSymbol = new String();
    this.isMoving = false;

    symbolsArray.forEach(function(symbol, index) {
        if (index == 0) {
            self.upperSymbol = symbol;
        }

        self.symbols[symbol] = new Symbol(symbol, x, -self.ySpacer + (self.ySpacer * index));
    });
}

//запуск
Reel.prototype.run = function () {
    settings.spiningCount++;
    this.isMoving = true;
    this.countMoveLimit = game.rnd.integerInRange(this.stepsMin, this.stepsMax);
};

//принудительная остановка
Reel.prototype.stop = function () {
    this.countMoveLimit = this.countMove;
};

//движение, контроль запуска и остановки
Reel.prototype.movesListener = function () {
    if (this.isMoving) {
        for (symbol in this.symbols) {
            this.symbols[symbol].img.y = this.symbols[symbol].img.y + this.speed;
        }

        for (symbol in this.symbols) {
            if (this.symbols[symbol].img.y >= settings.worldHeight) {
                this.symbols[symbol].img.y = this.symbols[this.upperSymbol].img.y - (this.ySpacer);
                this.upperSymbol = symbol;
                this.countMove++;
                if (this.countMove >= this.countMoveLimit) {
                    this.isMoving = false;
                    this.countMove = 0;
                    settings.spiningCount--;
                }
            }
        }
    }
}
