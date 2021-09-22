import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from './auth';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    restaurant: 'The emo\'s burger',
  });

  const [errors, setErrors] = useState({});

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const history = useHistory();
    signInWithEmailAndPassword(values.email, values.password)
      .then((response) => response.json())
      .then((responseDone) => {
        console.log(responseDone);
        const { token } = responseDone;
        const userRole = responseDone.role;
        if (userRole === 'garçom - garçonete') {
          localStorage.setItem('token', token);
          history.push('/menu');
        }
        if (userRole === 'cozinha') {
          localStorage.setItem('token', token);
          history.push('/cozinha');
        } else if (responseDone) {
          const errorMessage = responseDone.message;
          setErrors(errorMessage);
        }
      });
  };

  // setErrors(validate(values));
  // setIsSubmitting(true);

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors],
  // );

  return {
    handleChange, values, handleSubmit, errors,
  };
};

export default useForm;
