import logoUrl from "@/assets/icons/extension/icon-32.png";
import { cn } from "@/lib/utils";
import { i18n } from "#i18n";

i18n.t("helloWorld"); // "Hello world!"

const img = document.createElement("img");
img.src = logoUrl;

interface LogoProps {
  wrapperClasses?: string;
  headingClasses?: string;
  linkClasses?: string;
  imgClasses?: string;
}

const Logo = ({
  wrapperClasses,
  headingClasses,
  linkClasses,
  imgClasses,
}: LogoProps) => {
  return (
    <div className={cn("flex items-center", wrapperClasses)}>
      <h1 className={cn("flex text-2xl", headingClasses)}>
        <a href="/" className={cn("flex text-slate-800", linkClasses)}>
          <img
            src={logoUrl}
            className={cn("size-7 mr-2 mt-[2px]", imgClasses)}
            alt="WebDev HQ Logo"
          />
          <span className="font-light">
            <span className="web">Web</span>
            <span className="dev-hq font-medium">Dev HQ</span>
          </span>
        </a>
      </h1>
    </div>
  );
};

export default Logo;
