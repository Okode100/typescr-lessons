let Status: "success" | "error" | "loading" = "success";

enum Role  {
    admin,
    user,
    guest
}

const userRole: Role = Role.user;

console.log(`The status is: ${Status}`);
console.log(`The user role is:${Role[userRole]}`);