'use client';

import { loginSchema } from '@/apis/auth/schemas';
import { LoginFormType } from '@/apis/auth/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Logo from '../ui/Logo';
import { Card, CardContent } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import SocialButton from './SocialButton';
import Link from 'next/link';

export default function LoginForm() {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormType) => {
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
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input placeholder='비밀번호를 입력하세요' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='h-10 w-full'>
                로그인
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
          아직 계정이 없으신가요?{' '}
          <Link href='/signup' className='text-primary font-medium hover:underline'>
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
