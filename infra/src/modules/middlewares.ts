import { body, validationResult } from "express-validator";

/* User Registration Validation */

export const userValidationRules = () => {
    return [
        body('email')
            .isEmail()
            .withMessage('Enter a valid email address'),
        body('password')
            .trim()
            .escape()
            .not()
            .isEmpty()
            .withMessage('Password cannot be empty or only whitespace')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long'),
        body('firstname')
            .trim()
            .escape()
            .not()
            .isEmpty()
            .withMessage('First Name cannot be empty'),
        body('lastname')
            .trim()
            .escape()
            .not()
            .isEmpty()
            .withMessage('Last name cannot be empty')
    ];
};

export const signInValidationRules = () => {
    return [
        body('email')
            .isEmail()
            .withMessage('Enter a valid email address'),
        body('password')
            .trim()
            .escape()
            .not()
            .isEmpty()
            .withMessage('Password cannot be empty or only whitespace')
    ];
}
export const validate = (req,res,next) => {
    console.log('req.body', req.body,)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}