const verifyPermission = (permissions, requiredPermission) => {
  return permissions.includes(requiredPermission);
};

const checkPermission = (requiredPermission) => {
  return (req, res, next) => {
    const { permissions } = req.query;

    if (!permissions) return res.status(403).json({ message: "Unauthorized" });

    if (verifyPermission(permissions, requiredPermission)) {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  };
};

module.exports = {
  checkPermission,
};
