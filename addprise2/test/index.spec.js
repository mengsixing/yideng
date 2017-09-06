describe("调用addone方法后是否正确？", function() {
	it("调用一次是否为1", function() {
		var a=addOne(0);
		expect(a).toBe(1);
	});
});



describe("调用节流方法后是否延迟1s执行？", function() {
	 window.b=0;
	beforeEach(function(done){
		throttle(function(){
				window.b=1;
				done();
		});
	},1100);//1.1秒执行
	
	it("调用一次是否为1", function() {
		expect(window.b).toBe(1);
	});
});

describe("测试1s内执行失败？", function() {
	window.c=0;
	beforeEach(function(done){
		throttle(function(){
				window.c=1;
		});
	},0);//0秒执行
	it("调用一次是否为1", function() {
		expect(window.c).toBe(0);
	});
});