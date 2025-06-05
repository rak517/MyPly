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
import { useState, useTransition } from 'react';
import { login } from '@/utils/supabase/actions';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: LoginFormType) => {
    setError(null);
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    startTransition(async () => {
      try {
        await login(formData);
        router.push('/');
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('로그인 중 알 수 없는 오류가 발생했습니다.');
        }
      }
    });
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
                      <Input type='password' placeholder='비밀번호를 입력하세요' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && <div className='text-sm text-red-500'>{error}</div>}
              <Button type='submit' className='h-10 w-full' disabled={isPending}>
                {isPending ? '로그인 중...' : '로그인'}
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
