describe("调用addone方法后是否正确？", function() {
	it("调用一次是否为1", function() {
		var a=addOne(0);
		expect(a).toBe(1);
	});
});