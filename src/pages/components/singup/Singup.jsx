import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Singup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConpassword] = useState('');

  const [mainData, setMainData] = useState([]);
  // const [loading, setLoding] = useState(false);

  const handleSumitData = e => {
    e.preventDefault();

    if (!valid()) return;

    const mainFormData = {
      name: name,
      email: email,
      password: password,
      conPassword: conPassword,
    };
    setMainData(prv => [...prv, mainFormData]);
    toast.success('user create successfully');
    setName('');
    setEmail('');
    setPassword('');
    setConpassword('');

    console.log(mainData);
  };

  const valid = () => {
    if (!name) {
      toast.warning('plese enter your name');
      return false;
    }
    if (!email) {
      toast.warning('plese enter your email');
      return false;
    }
    if (!password) {
      toast.warning('plese enter your password');
      return false;
    }
    if (!conPassword) {
      toast.warning('plese enter your conpassword');
      return false;
    }
    return true;
  };

  return (
    <div className="flex items-center justify-center h-screen capitalize">
      <div></div>
      <div>
        <form
          action=""
          className="w-[500px] bg-fuchsia-600 rounded-md shadow-2xl p-6"
          onSubmit={handleSumitData}
        >
          <h1 className="text-center text-4xl font-Popins text-white">
            contact us
          </h1>
          <label
            htmlFor="name"
            className="block text-[18px] text-white font-Popins"
          >
            name
          </label>
          <input
            type="text"
            placeholder="enter your name"
            id="name"
            name="name"
            className="block w-full p-2 border border-[#ddd] rounded-md mt-3 mb-3 text-white"
            onChange={e => setName(e.target.value)}
          />
          <label
            htmlFor="email"
            className="block text-[18px] text-white font-Popins"
          >
            email
          </label>
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            id="email"
            className="block w-full p-2 border border-[#ddd] rounded-md mt-3 mb-3 text-white"
            onChange={e => setEmail(e.target.value)}
          />
          <label
            htmlFor="password"
            className="block text-[18px] text-white font-Popins"
          >
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter your password"
            className="block w-full p-2 border border-[#ddd] rounded-md mt-3 mb-3 text-white"
            onChange={e => setPassword(e.target.value)}
          />
          <label
            htmlFor="conPassword"
            className="block text-[18px] text-white font-Popins"
          >
            conPassword
          </label>
          <input
            type="password"
            name="conPassword"
            id="conPassword"
            placeholder="enter your conPassword"
            className="block w-full p-2 border border-[#ddd] rounded-md mt-3 mb-3 text-white"
            onChange={e => setConpassword(e.target.value)}
          />
          <Button className="w-full bg-parimary hover:bg-parimary p-4 cursor-pointer">
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Singup;
