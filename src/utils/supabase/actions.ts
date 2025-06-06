'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
}

export async function signupWithEmailPassword(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        nickname: formData.get('nickname') as string,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/', 'layout');
}

export async function signInWithGoogle() {
  const supabase = await createClient();

  const auth_callback_url = `${process.env.NEXT_PUBLIC_SITE_URL}/oauth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: auth_callback_url,
    },
  });

  if (error || !data?.url) {
    redirect('/error');
  }

  redirect(data.url as string);
}
