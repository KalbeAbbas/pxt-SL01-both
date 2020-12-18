basic.forever(function()
{
	OD01.clear()
	//OD01.printNumber(SL01.checkVersion())
	OD01.printString("LUX", true)
	OD01.printNumber(SL01.getlux())

	OD01.printString("UVI", true)
	OD01.printNumber(SL01.getuvindex())

	basic.pause(1000)
})