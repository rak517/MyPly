'use client';

import { SignupFormType } from '@/apis/auth/types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/apis/auth/schemas';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Logo from '../ui/Logo';
import SocialButton from './SocialButton';
import { Separator } from '../ui/separator';
import Link from 'next/link';

export default function SignupForm() {
  const form = useForm<SignupFormType>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: SignupFormType) => {
    console.log(data);
  };

  return (
    <div className='w-full max-w-md space-y-8'>
      <Logo />
      <Card className='border-0 shadow-lg'>
        <CardContent className='p-8'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input placeholder='이메일을 입력하세요' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='nickname'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>닉네임</FormLabel>
                    <FormControl>
                      <Input placeholder='닉네임을 입력하세요' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='비밀번호를 입력하세요' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호 확인</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='비밀번호를 다시 입력하세요' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='h-10 w-full'>
                회원가입
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <Separator className='w-full' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='text-muted-foreground bg-white px-4 font-medium'>또는 소셜 계정으로 계속</span>
        </div>
      </div>
      <SocialButton />

      <div className='text-center'>
        <p className='text-muted-foreground'>
          계정이 이미 있으신가요?{' '}
          <Link href='/login' className='text-primary font-medium hover:underline'>
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}
