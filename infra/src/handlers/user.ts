import prisma from "../db";
import {comparePasswords, createJWT, hashPassword} from "../modules/auth";

/* Create New User */
export const createNewUser = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                password: await hashPassword(req.body.password),
                firstName: req.body.firstname,
                lastName: req.body.lastname,
            }
        });
        const token = createJWT(user);
        res.json({ token });
    } catch (error) {
        if (error.code === 'P2002') { // Prisma error code for unique constraint violation
            return res.status(400).json({ error: 'Username already exists' });
        }
        res.status(500).json({ error: 'User could not be created' });
    }
}

/* Sign in existing user */
export const signIn = async (req,res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const isValid = await comparePasswords(req.body.password, user.password);

        if(!isValid) {
            res.status(401)
            res.json({message: 'Not authorized'})
        }else {
            const token = createJWT(user);
            // Remove the password field from the user object before sending the response
            const { password, ...userData } = user;
            return res.status(200).json({ token, user: userData });
        }

    }catch (error) {
        return res.status(500).json({ error: 'An error occurred during sign-in' });
    }
}