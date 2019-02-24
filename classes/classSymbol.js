/*
Класс Символ.
Адаптирует картинку для класса Барабан.
Может содержать дополнительные методы, например для получения
состояния (виден ли, в каком ряду и так далее)
*/

//Конструктор
function Symbol(imgName, x, y) {
    this.img = game.add.image(x, y, imgName);
    this.img.width = settings.symWidth;
    this.img.height = settings.symHeight;
}
