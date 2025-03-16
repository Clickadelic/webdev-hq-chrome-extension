import Logo from "@/components/custom/Logo";

const App = () => {
  return (
    <div className="size-[600px] bg-slate-100 p-3">
      <Logo wrapperClasses="w-[165px] mx-auto mt-8" />
      <div className="rounded-md p-4">
        <h1 className="text-2xl font-light text-center mt-3 mb-6 text-slate-900">
          Login
        </h1>
        <form className="bg-white p-12 rounded-md w-96 flex flex-col space-y-3 mx-auto">
          <input
            type="text"
            className="block border w-full p-2 text-xl rounded-md"
            placeholder="E-Mail"
          />
          <input
            type="text"
            className="block border w-full p-2 text-xl rounded-md"
            placeholder="Password"
          />
          <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
        <a
          href="https://webdev-hq.com/auth/forgot-password"
          className="block mt-3 mx-auto text-center text-slate-500 hover:text-blue-600"
          target="_blank"
        >
          Forgot Password
        </a>
      </div>
    </div>
  );
};

export default App;
