import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z.string().min(1, '이메일은 필수 입력입니다.').email('이메일 형식으로 작성해 주세요.'),
    nickname: z.string().min(1, '닉네임은 필수 입력입니다.').max(8, '닉네임은 최대 8자까지 가능합니다.'),
    password: z
      .string()
      .min(1, '비밀번호는 필수 입력입니다.')
      .min(8, '비밀번호는 최소 8자 이상입니다')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, '비밀번호는 대문자, 소문자, 숫자를 모두 포함해야 합니다.'),
    confirmPassword: z.string().min(1, '비밀번호 확인은 필수 입력입니다.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z.string().min(1, '이메일은 필수 입력입니다.').email('이메일 형식으로 작성해 주세요'),
  password: z.string().min(1, '비밀번호는 필수 입력입니다.'),
});
