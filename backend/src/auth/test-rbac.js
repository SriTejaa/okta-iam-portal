const { getPermissionsByRole } =
  require("./permissionResolver");

console.log(
  getPermissionsByRole("IAM-USER")
);