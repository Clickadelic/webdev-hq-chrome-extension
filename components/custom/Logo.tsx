import logoUrl from "@/assets/icons/extension/icon-32.png";

const img = document.createElement("img");
img.src = logoUrl;

interface LogoProps {
  headingClasses?: string;
  classes?: string;
}

const Logo = ({ headingClasses, classes }: LogoProps = {}) => {
  return (
    <h1 className={headingClasses}>
      <a href={import.meta.env.VITE_HOMEPAGE_URL} className={classes}>
        <img
          src={logoUrl}
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
