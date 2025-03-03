import React, { useEffect } from "react";
import Logo from "../components/Logo";
import RegisterForm from "../components/forms/RegisterForm";
const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.target[0].value;
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name is set to ${name}`);
  });
};

const Popup = () => {
  useEffect(() => {
    chrome.storage.sync.get(["name"], (res) => {
      console.log(res.name);
    });
  }, []);

  return (
    <div className="w-[480px] h-[460px] m-auto p-3">
      <Logo classes="text-2xl text-slate-900 hover:text-slate-300" />
      <RegisterForm />
    </div>
  );
};

export default Popup;
