import React, { useEffect } from 'react';

import { I18n } from 'aws-amplify';
import { Authenticator, translations } from '@aws-amplify/ui-react';

import { useNavigate } from 'react-router-dom';
import useAppStore from 'src/store/useAppStore';
import { Layout } from 'src/container/Layout/Layout';
import { CreateStudentInput } from 'src/API';

import { addElement } from '../../services/apiMutations';
import { createStudent } from 'src/graphql/mutations';

I18n.putVocabularies(translations);
I18n.setLanguage('es');

I18n.putVocabularies({
  es: {
    'Sign in to your account': 'Inicia sesión en tu cuenta',
    'Sign In': 'Iniciar sesión',
    'Sign in': 'Iniciar sesión',
    'Sign Up': 'Regístrate',
    'Username *': 'Usuario *',
    Username: 'Usuario',
    'Password *': 'Contraseña *',
    Password: 'Contraseña',
    'Enter your Password': 'Ingresa tu Contraseña',
    'Enter your Email': 'Ingresa tu Correo',
    'Enter your Username': 'Ingresa tu usuario',
    'No account?': '¿No tienes una cuenta?',
    'Create account': 'Crea una cuenta',
    'Create Account': 'Crear cuenta',
    'Have an account?': '¿Tenes cuenta?',
    'Have a code?': '¿Tienes un código?',
    'Code *': 'Codigo',
    Confirm: 'Confirmar',
    'Reset Password': 'Reiniciar contraseña',
    'Reset password': 'Reiniciar Contraseña',
    'Reset your password': 'Reinicia tu contraseña',
    'Back to Sign in': 'Volver al inicio de sesion',
    'You will receive a verification code to reset your password':
      'Recibirás un codigo de verificacion para restablecer tu contraseña',
    Submit: 'Enviar',
    Verify: 'Verificar',
    'Verify Contact': 'Verificar contacto',
    Skip: 'Omitir',
    "Lost your code?'": '¿Perdiste tu código?',
    Resend: 'Reenviar',
    'Forgot your password?': '¿Olvidaste tu contraseña?',
    'You will receive a verification code': 'Recibirás un codigo de verificación',
    Code: 'Código',
    'Account recovery requires verified contact information':
      'La recuperación de la cuenta requiere información de contacto verificada',
    'User does not exist.': 'El usuario no existe',
    'User already exists': 'El usuario ya existe',
    'Incorrect username or password': 'Nombre de usuario o contraseña incorrecta',
    'Invalid password format': 'Formato de contraseña inválido',
    'Invalid phone number format':
      'Formato de número de teléfono inválido. Utiliza el formato de número de teléfono +12345678900',
    'Username cannot be empty': 'El nombre de usuario no puede estar vacio',
    'Custom auth lambda trigger is not configured for the user pool.':
      'No esta permitido el inicio de sesión sin contraseña',
    'Incorrect username or password.': 'Usuario o contraseña incorrecto',
    'Password attempts exceeded': 'Excedido el tiempo de reintentos, espera unos segundos',
    'Forget your password? ': '¿Olvidaste tu contraseña?',
    'No account? ': '¿No tienes una cuenta?',
    'Have an account? ': '¿Ya tienes un cuenta?',
    'Send Code': 'Enviar código',
    'Back to Sign In': 'Regresa al inicio de sesión',
    'Please confirm your Password': 'Confirma tu Contraseña',
    'Enter your Name': 'Ingresa tu nombre',
    'Enter your Phone Number': 'Ingresa tu Número de Teléfono',
    'Phone Number': 'Número de Teléfono',
    'Resend Code': 'Reenviar Código',
    'Confirm Password': 'Confirmar Contraseña',
    'Name': 'Nombre',
    'Please fill out this field.': 'Por favor llenar este campo.',
    'Email': 'Correo electrónico',
  },
});
// I18n.putVocabularies(dict);
// I18n.setLanguage('es');

export const SignIn: React.FC = () => {
  
  const userProfile = useAppStore((state) => state.userProfile);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (userProfile) navigate('/');
  }, [userProfile]);

  return (
    <Layout title='' >
      <Authenticator signUpAttributes={['name', 'phone_number']} />
    </Layout>
  );
};
