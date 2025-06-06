import { z } from 'zod';
import { loginSchema, signupSchema } from './schemas';

export type SignupFormType = z.infer<typeof signupSchema>;

export type LoginFormType = z.infer<typeof loginSchema>;
