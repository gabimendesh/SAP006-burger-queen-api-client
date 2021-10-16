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

  const [client, setClient] = useState({
    name: '',
    table: '',
    products: [],
  });

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClient({
      ...client,
      [name]: value,
    });
  };
  return {
    handleChange, values, handleClientChange, client,
  };
};

export default useForm;
