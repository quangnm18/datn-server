const authPage = (permission) => {
  return (res, req, next) => {
    const role = req.body.role;
    if (!role) {
      return res.status(403).json("You not authorized");
    }

    if (!permission.includes(role)) {
      return res.status(403).json("You not authorized");
    }

    next();
  };
};

module.exports = { authPage };
