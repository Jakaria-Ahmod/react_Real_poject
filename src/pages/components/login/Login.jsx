import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogInData, setUserLogInData] = useState([]);

  const handelLoinData = e => {
    e.preventDefault();
    if (!valid()) return;
    const newLogin = {
      email: email,
      password: password,
    };
    setUserLogInData(prv => [...prv, newLogin]);
    toast.success('user login successfull');
    setEmail('');
    setPassword('');
    console.log(userLogInData);
  };

  const valid = () => {
    if (!email) {
      toast.warning('enter your email');
      return false;
    }
    if (!password) {
      toast.warning('enter your password');
      return false;
    }
    return true;
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen capitalize font-Popins">
        <form
          action=""
          className="w-[400px] bg-[navy] p-4 rounded-md shadow-2xl shadow-blue-950 h-[320px]"
          onSubmit={handelLoinData}
        >
          <h1 className="text-white text-2xl text-center">Log in </h1>
          <label htmlFor="email" className="block text-[18px] text-white">
            email
          </label>
          <input
            type="email"
            placeholder="enter your Email"
            id="name"
            name="name"
            className="w-full p-3 text-white border rounded-md mb-3 mt-3"
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="block text-[18px] text-white">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            className="w-full p-3 text-white border rounded-md mb-3 mt-3"
            onChange={e => setPassword(e.target.value)}
          />
          <Button className="bg-parimary hover:bg-parimary cursor-pointer">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
