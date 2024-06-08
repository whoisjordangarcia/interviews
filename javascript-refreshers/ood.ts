class Base {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    console.log("Hello world");
    this.height = height;
    this.width = width;
  }

  dimensions() {
    console.log("width:" + this.width);
    console.log("height:" + this.height);
  }

  calculate() {
    return Math.max(this.width, this.height);
  }
}

class NewBase extends Base {
  constructor(height: number, width: number) {
    super(height, width);
  }
}

const base = new Base(1, 2);
base.dimensions();
base.calculate();

const newBase = new NewBase(1, 2);
newBase.dimensions();
newBase.calculate();
