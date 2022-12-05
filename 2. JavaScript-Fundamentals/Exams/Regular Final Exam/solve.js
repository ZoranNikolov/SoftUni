class A {
	static b = 1;
	c = 2;
	constructor() {
		this.b = 3;
		this.c = 4;
	}
}
const B = new A();
console.log(A.b, A.c, B.b, B.c);
