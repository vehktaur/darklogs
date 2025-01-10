'use client';

import Input from '../../../components/ui/input';
import { emailPattern, LoginSchema } from '@/lib/definitions';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Button from '../../../components/ui/button';
import { AuthError } from 'next-auth';

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<LoginSchema>();

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      await signIn('credentials', { ...data, callbackUrl: '/' });
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return { error: 'Invalid credentials' };
          default:
            return { error: 'Something went wrong' };
        }
      }

      throw error;
    }
  };

  return (
    <form
      className='mx-auto w-full'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className='space-y-5'>
        <Input
          label='Email Address'
          name='email'
          type='email'
          placeholder='user@email.com'
          pattern={{
            value: emailPattern,
            message: 'Enter a valid email',
          }}
        />

        <Input
          label='Password'
          name='password'
          type='password'
          placeholder='password'
        />
      </div>

      <Button
        className='mx-auto mt-10 w-full max-w-md'
        disabled={isSubmitting}
        type='submit'
        isSubmitting={isSubmitting}
      >
        {isSubmitting ? 'Login...' : 'Login'}
      </Button>
    </form>
  );
};
export default LoginForm;
