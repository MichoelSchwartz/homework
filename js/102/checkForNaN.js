export default (req, res, next) => {
    const val1 = Number(req.query.val1);
    const val2 = Number(req.query.val2);
    req.query.val1 = val1;
    req.query.val2 = val2;
    if (isNaN(val1) || isNaN(val2)) {
        res.statusCode = 500;
        res.end('please pass only valid numbers to the program');
    } else {
        return next();
    }
};