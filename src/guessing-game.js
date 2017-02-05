class GuessingGame {
    constructor() {
        this.MinValue = null;
        this.MaxValue = null; 
        this.CenterValue = null;
    }

    setRange(min, max) {
        this.MinValue = min;
        this.MaxValue = max;
    }

    guess() {
        this.CenterValue = Math.round((this.MinValue + this.MaxValue)/2);
        return this.CenterValue;
    }

    lower() {
        this.MaxValue = this.CenterValue;
    }

    greater() {
        this.MinValue = this.CenterValue;
    }
}

module.exports = GuessingGame;
