import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { loginValSchema } from '../../service/validationSchemas';
import { loginFormTemplate } from '../../service/formikTemplates/formikTemplates';

const LoginForm = () => {
  const [passFieldType, setPassFieldType] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };
  const onShowPass = () => {
    setPassFieldType(!passFieldType);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginValSchema}
      onSubmit={handleSubmit}
    >
      {loginFormTemplate(passFieldType, onShowPass)}
    </Formik>
  );
};

export default LoginForm;