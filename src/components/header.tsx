import logoHitcolor from "../assets/logo-hitcolor.svg";
import { Drawer } from "./index";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4">
      <div className="flex h-6 w-auto items-center justify-center">
        <img src={logoHitcolor} className="h-full w-auto" />
      </div>

      <Drawer />
    </header>
  );
};
