import { Add, Bag, CallCalling, Home, Menu, People, Shop, User } from "iconsax-reactjs";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const Drawer = () => {
  const iconVariant = "Broken";
  const [open, setOpen] = useState<boolean>(false);
  const [display, setDisplay] = useState<string>();
  const path = useLocation().pathname;

  useEffect(() => {
    setDisplay(open ? "flex" : "hidden");
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-hitcolor-700 active:bg-hitcolor-700 flex h-auto w-auto items-center justify-center rounded-md p-2 duration-300 ease-in-out active:text-white">
        <Menu size="20" variant={iconVariant} />
      </button>

      <section
        className={`h-full w-full ${display} fixed top-0 left-0 z-10 items-start justify-end backdrop-brightness-50`}>
        <article className="bg-hitcolor-800 flex h-full w-10/12 flex-col items-start justify-start gap-8 p-4">
          <header className="flex h-auto w-full items-center justify-start">
            <button
              className="active:text-hitcolor-800 flex h-auto w-auto items-center justify-center p-1 text-zinc-50 duration-300 ease-in-out active:bg-white"
              onClick={() => setOpen(false)}>
              <Add size="24" variant={iconVariant} className="rotate-45" />
            </button>
          </header>

          <section className="flex h-full w-full flex-col items-start justify-start gap-4 px-2">
            <Link
              to="/"
              className={`flex h-auto w-full items-center justify-start gap-4 border border-zinc-50 p-4 ${
                path === "/"
                  ? "text-hitcolor-800 active:bg-hitcolor-800 bg-zinc-50 active:text-zinc-50"
                  : "active:text-hitcolor-800 text-zinc-50 active:bg-zinc-50"
              } duration-300 ease-in-out`}>
              <Home size="20" variant={iconVariant} />

              <span>Principal</span>
            </Link>

            <Link
              to="/products"
              className={`flex h-auto w-full items-center justify-start gap-4 border border-zinc-50 p-4 ${
                path === "/products"
                  ? "text-hitcolor-800 active:bg-hitcolor-800 bg-zinc-50 active:text-zinc-50"
                  : "active:text-hitcolor-800 text-zinc-50 active:bg-zinc-50"
              } duration-300 ease-in-out`}>
              <Shop size="20" variant={iconVariant} />

              <span>Produtos</span>
            </Link>

            <Link
              to="/about"
              className={`flex h-auto w-full items-center justify-start gap-4 border border-zinc-50 p-4 ${
                path === "/about"
                  ? "text-hitcolor-800 active:bg-hitcolor-800 bg-zinc-50 active:text-zinc-50"
                  : "active:text-hitcolor-800 text-zinc-50 active:bg-zinc-50"
              } duration-300 ease-in-out`}>
              <People size="20" variant={iconVariant} />

              <span>Sobre nós</span>
            </Link>

            <Link
              to="/contact"
              className={`flex h-auto w-full items-center justify-start gap-4 border border-zinc-50 p-4 ${
                path === "/contact"
                  ? "text-hitcolor-800 active:bg-hitcolor-800 bg-zinc-50 active:text-zinc-50"
                  : "active:text-hitcolor-800 text-zinc-50 active:bg-zinc-50"
              } duration-300 ease-in-out`}>
              <CallCalling size="20" variant={iconVariant} />

              <span>Contato</span>
            </Link>
          </section>

          <section className="flex h-auto w-full items-center justify-between px-2 py-4">
            <div className="flex h-full w-full items-center justify-start border border-zinc-50">
              <button className="flex h-auto w-auto items-center justify-center px-4 text-zinc-50">
                <User size="24" variant={iconVariant} />
              </button>

              <div className="flex h-auto w-auto flex-col items-start justify-start">
                <span className="font-work-sans text-base text-zinc-50">Hitcolor</span>

                <span className="font-work-sans text-hitcolor-600 text-sm">user@email.com</span>
              </div>
            </div>

            <button className="text-hitcolor-800 active:bg-hitcolor-800 flex h-auto w-auto items-center justify-center border border-zinc-50 bg-zinc-50 p-4 duration-300 ease-in-out">
              <Bag size="20" variant={iconVariant} />
            </button>
          </section>
        </article>
      </section>
    </>
  );
};

export default Drawer;
