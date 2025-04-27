var Status = "success";
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["guest"] = 2] = "guest";
})(Role || (Role = {}));
var userRole = Role.user;
console.log("The status is: ".concat(Status));
console.log("The user role is:".concat(Role[userRole]));
