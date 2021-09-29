// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import Button from '../button';
// import styles from './style.module.css';
// import useForm from '../../services/useForm';
// import { signInWithEmailAndPassword } from '../../services/auth';
// import { saveUserTokenOnLocalStorage } from '../../services/localStorage';

// export default function FormSignIn({ submitForm }) {
//   const {
//     handleChange, values,
//   } = useForm(submitForm);

//   const history = useHistory();
//   const [error, setError] = useState('');

//   return (
//     <form
//       data-testid="form"
//       className={styles.box}
//       onSubmit={(e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(values.email, values.password)
//           .then((response) => {
//             console.log('then', response);
//             if (response.role === 'garçom - garçonete') {
//               saveUserTokenOnLocalStorage(response.token);
//               history.push('/menu');
//             }
//             if (response.role === 'cozinha') {
//               saveUserTokenOnLocalStorage(response.token);
//               history.push('/cozinha');
//             }
//           })
//           .catch((err) => {
//             console.log('catch', err);
//             const errorMessage = err.message;
//             setError(errorMessage);
//           });
//       }}
//     >
//       <p className={styles.subTitle}>
//         Login
//       </p>
//       <input
//         data-testid="email"
//         type="email"
//         name="email"
//         placeholder="Digite o seu email"
//         className={styles.inputBox}
//         value={values.email}
//         onChange={handleChange}
//       />
//       <input
//         data-testid="password"
//         type="password"
//         name="password"
//         placeholder="Digite a sua senha"
//         className={styles.inputBox}
//         value={values.password}
//         onChange={handleChange}
//       />
//       <p className={styles.error}>
//         {error}
//       </p>

//       <Button variant="primary" onClick={() => history.push('/menu')} id="buttom">
//         Entrar
//       </Button>
//     </form>
//   );
// }
