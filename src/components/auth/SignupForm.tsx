'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import google_icon from '@/assets/icons/google_icon.svg';
import Link from 'next/link';

// TODO: UI구현을 위한 임시 스키마, 기능 구현시 변경 예정
const formSchema = z
  .object({
    email: z.string().email({
      message: '이메일 형식으로 입력해주세요',
    }),
    password: z.string().min(8, {
      message: '비밀번호는 8자 이상입니다.',
    }),
    passwordConfirm: z.string().min(8, {
      message: '비밀번호는 8자 이상입니다.',
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export default function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex w-full flex-col items-center gap-4 md:max-w-[400px]">
      <div className="mt-6">
        <div className="flex flex-col gap-2">
          <h1 className="animate-fade-in text-center text-2xl font-bold text-muted-foreground delay-100">
            회원가입
          </h1>
          <p className="animate-fade-in text-muted-foreground delay-100">
            새로운 계정을 만드세요
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <Button
          variant="outline"
          className="flex h-12 w-full items-center justify-center gap-2"
        >
          <Image src={google_icon} width={20} height={20} alt="google" />
          Google로 회원가입하기
        </Button>
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="tex-xs relative flex justify-center uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              또는
            </span>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder="이메일을 입력해주세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="비밀번호를 다시 한번 입력해 주세요."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="h-12 w-full bg-[#E91E63] hover:bg-[#D81B60]"
            >
              회원가입
            </Button>
          </form>
        </Form>
        <div className="text-center text-sm">
          <span className="text-muted-foreground">
            이미 계정이 있으신가요?{' '}
          </span>
          <Link
            href="/login"
            className="font-medium text-[#E91E63] hover:underline"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
