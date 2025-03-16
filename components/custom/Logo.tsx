const Logo = () => {
  return (
    <h1 className="flex text-3xl text-white">
      <a href="/" className="flex text-slate-800">
        <img
          src="/assets/icons/extension/icon-32.png"
          className="logo inline mr-2 -mt-1"
          alt="WebDev HQ Logo"
        />
        <span className="font-light">
          <span className="web">Web</span>
          <span className="dev-hq font-medium">Dev HQ</span>
        </span>
      </a>
    </h1>
  );
};

export default Logo;
