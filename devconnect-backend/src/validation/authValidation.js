import {z} from 'zod';

export const signupSchema= z.object({
    username: z.string().min(3,'Username must be at least 3 characters').max(30,'username must not exceed 30 characters'),
    email: z.email('Invalid email format'),
    password: z.string().min(6,'password must alteast 6 characters')
})

export const signinSchema= z.object({
    email: z.email('Invalid email format'),
    password: z.string().min(6,'password must alteast 6 characters')
})