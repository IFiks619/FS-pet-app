import { body } from "express-validator";

export const registerValidation = [
    body('email', 'Wrong email format').isEmail(),
    body('password', 'Password must be at least with 5 signs').isLength({min:5}),
    body('fullName', 'Name must be at least 2 letters').isLength({min:2}),
    body('avatarUrl', 'Wrong URL to the avatar').optional().isURL()
]

export const loginValidation = [
    body('email', 'Wrong email format').isEmail(),
    body('password', 'Password must be at least with 5 signs').isLength({min:5}),
]

export const postCreateValidation = [
    body('title', 'Write a title').isLength({min: 3}).isString(),
    body('text', 'Write a text').isLength({min: 3}).isString(),
    body('tags', 'Wrong format of tags').optional().isString(),
    body('imageUrl', 'Wrong image URL').optional().isString(),
]