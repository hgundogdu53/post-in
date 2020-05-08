exports.validateSignup = (req, res, next) => {
    req.sanitizeBody('name')
    req.sanitizeBody('email')
    req.sanitizeBody('password')


    req.checkBody('name', 'Enter a name').not

};

exports.signup = () => {};

exports.signin = () => {};

exports.signout = () => {};

exports.checkAuth = () => {};
