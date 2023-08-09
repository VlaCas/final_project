import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string({
    required_error: 'What is your name?'//,
    // invalid_type_error: "Why does your name contain numbers? that's weird..."
  }).regex(/^[a-zA-ZñÑ ]+$/, {
    message: "Why does your name contain numbers? that's weird..."
  }).max(32, {
    message: 'Try a shorter name please.'
  }),
  email: z.string({
    required_error: "don't skip the email please."
  }).email({
    message: "Enter a valid email, don't try to trick me."
  }),
  password: z.string({
    required_error: 'You forgot the password. In fact, how can you forget the password?'
  }).regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@.,$*+\-])[a-zA-Z0-9@.,$*+\-]{8,16}$/, {
    message: 'The password must contain at least one letter, one number and one special character "@.,$*+-". with a minimum of 8 characters and a maximum of 16.'
  })
});

export const loginSchema = z.object({
  email: z.string({
    required_error: "don't skip the email please."
  }).email({
    message: "Enter a valid email, don't try to trick me."
  }),
  password: z.string({
    required_error: 'You forgot the password. In fact... how can you forget the password?'
  }).min(8, {
    message: 'Remember that the password must have more than 8 characters and less than 16, do not forget it again.'
  }).max(16, {
    message: 'Remember that the password must have more than 8 characters and less than 16, do not forget it again.'
  })
})