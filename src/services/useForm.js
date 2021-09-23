import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    restaurant: 'The emo\'s burger',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    handleChange, values,
  };
};

export default useForm;
