var greet = require("../index.js")
describe('greet', function(){
	it("is a dummy success case", function(){
		expect(1).to.eql(1);
	});

	it("should greet a person by name", function(){
		expect(greet("Amos")).to.eql("hello, Amos");
	});

	it("should greet a person flirtatiously if drunk", function(){
		expect(greet("Amos --drunk")).to.eql("hello, Amos --drunk");
	});

});
