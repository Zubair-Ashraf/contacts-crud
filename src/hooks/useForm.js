import { useState, useCallback } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleValueChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setValues({ ...values, [name]: value });
    },
    [values]
  );

  const reset = useCallback((values) => setValues(values), []);

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    onSubmit(e, values);
  };

  return { values, reset, handleSubmit, handleValueChange };
};
