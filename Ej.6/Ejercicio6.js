// JavaScript source code
function my_Clock() {
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}

my_Clock.prototype.Run = function () {
    setInterval(this.update.bind(this), 1000);
};

my_Clock.prototype.update = function () {
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

my_Clock.prototype.updateTime = function (seconds) {
    this.seconds += seconds;

    if (this.seconds >= 60) {
        this.minutes++;
        this.seconds = 0;
    }

    if (this.minutes >= 60) {
        this.hours++;
        this.minutes = 0;
    }

    if (this.hours >= 24) {
        this.hours = 0;
    }
};

var clock = new my_Clock();
clock.Run();