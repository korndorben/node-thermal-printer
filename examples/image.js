var printer = require("../node-thermal-printer");
printer.init({
	type: printer.printerTypes.EPSON,
    ip: "172.18.13.250", // Ethernet printing IP
	port: 9100
}); // Ethernet printing PORT
printer.printImage('./assets/olaii-logo-black-small.png', function(done) {
	printer.cut();
	printer.execute();
});
