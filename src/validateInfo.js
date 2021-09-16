export default function validateInfo(values) {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = 'Preencha com seu nome';
  }
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'O endereço de email é inválido';
  }
  if (!values.password) {
    errors.password = 'Informe uma senha';
  } else if (values.password.length < 6) {
    errors.password = 'A senha precisa de 6 caracteres ou mais';
  }

  if (!values.password2) {
    errors.password2 = 'Informe uma senha';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Senhas incompatíveis';
  }
  return errors;
}
