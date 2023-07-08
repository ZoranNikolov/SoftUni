var isEven = false;
var num = 5;
var peshoUser = {
    name: "pesho",
    age: 21,
};
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    return AnotherUserClass;
}());
var anotherUserList = [
    { firstName: "Ivan", id: 1 },
    { firstName: "Mitko", id: 2 },
    { firstName: "Kiril", id: 3 },
];
anotherUserList.forEach(function (_a) {
    var firstName = _a.firstName, id = _a.id;
    console.log("".concat(id, ": ").concat(firstName, " "));
});
