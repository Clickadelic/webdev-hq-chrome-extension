import React from "react";
import { useState } from "react";

function RegisterForm() {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  function handleRegister() {}

  return (
    <div className="w-56 h-[300px] p-2 mt-8 mx-auto">
      <h2 className="text-2xl text-slate-900 my-4">
        {chrome.i18n.getMessage("Register")}
      </h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4 text-base">
          <label htmlFor="username">{chrome.i18n.getMessage("Username")}</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={chrome.i18n.getMessage("Username")}
            className="bg-slate-100 rounded-md p-3 mt-2"
          />
        </div>
        <div className="mb-4 text-base">
          <label htmlFor="passwort">{chrome.i18n.getMessage("Password")}</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder={chrome.i18n.getMessage("Password")}
            className="bg-slate-100 rounded-md p-3 mt-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-3 rounded"
          onClick={handleRegister}
        >
          {chrome.i18n.getMessage("Login")}
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
