import { useState, useEffect } from 'react';
import sneakerShopApi from '../../api/sneaker-shop-api';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
    remember: '',
  });

  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    setProcessing(true);
    setErrors({});

    try {
      const response = await sneakerShopApi.login('/login', data);

      setStatus(response.data.status);
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }

    setProcessing(false);
  };

  const reset = (field) => {
    setData((prevData) => ({
      ...prevData,
      [field]: '',
    }));
  };

  const canResetPassword = true;

  return (
    <div>
      <h1>Login</h1>

      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <form onSubmit={submit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            autoFocus
            onChange={onHandleChange}
          />
          {errors.email && <div className="mt-2 text-sm text-red-600">{errors.email[0]}</div>}
        </div>

        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={onHandleChange}
          />
          {errors.password && <div className="mt-2 text-sm text-red-600">{errors.password[0]}</div>}
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              checked={data.remember}
              onChange={onHandleChange}
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <a
              href="/password/reset"
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot your password?
            </a>
          )}

          <button type="submit" className="ml-4" disabled={processing}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
