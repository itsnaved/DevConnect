import express from 'express'
import  UserModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import { signinSchema, signupSchema } from '../validation/authValidation.js';

const router= express.Router();

router.post('/signup',async (req, res)=>{
    try {
        const validatedData= signupSchema.safeParse(req.body);

        if(!validatedData.success){
            return res.status(400).json({msg: 'invalid inputs', errors: validatedData.error.errors});
        }
    const {username, email, password}= validatedData.data;

    const existingUser= await UserModel.findOne({
      email: email  
    })

    if(existingUser){
        return res.status(409).json({msg: "Email Already exists"})
    }
        const salt= await bcrypt.genSalt(10);
        // const hashedPassword= ;

            await UserModel.create({
            email: email,
            password: await bcrypt.hash(password, salt),
            username: username
        })
        
        return res.status(200).json({msg: 'User Created Succesfull'})
        
    } catch (err) {
          console.error(err);
          res.status(401).json({msg:"Error while creating a new user"});
    }
})

router.post('/signin', async(req, res)=>{
    try {
        const validatedData= signinSchema.safeParse(req.body);
        if(!validatedData.success){
            return res.status(400).json({msg: 'invalid inputs', errors: validatedData.error.errors});
        }
        const {email, password}= validatedData.data;
            const findUser= await UserModel.findOne({
            email: email
            })

            if (!findUser) return res.status(404).json({ msg: 'User not found' });
           
        bcrypt.compare(password, findUser.password).then((result)=>{result? res.status(200).json({msg: "Login succesfull"}): res.status(404).json({msg: "Invalid Credentials"});});

    } catch (err) {
            console.error(err);
            res.status(400).json({msg:"something gone wrong while logging in"})
    }
})

export default router;