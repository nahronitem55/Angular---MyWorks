function save(product) {
    console.log(product.name + "saved");
}
function saveTwo(product) {
    console.log(product.name + "saved");
}
save({ id: 1, name: "Laptop", unitPrice: 10 });
saveTwo({ id: 2, name: "Mouse", unitPrice: 11 });
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () { };
    return CustomerService;
}());
