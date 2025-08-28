import { Facebook, Google, Instagram, Whatsapp } from "iconsax-reactjs";
import { Link } from "react-router";
import logoHitcolorWhite from "../assets/logo-hitcolor-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-hitcolor-900 flex w-full flex-col items-start justify-start px-4 py-24 text-zinc-50">
      <div className="flex w-full flex-col items-center justify-start gap-8">
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <h2 className="text-2xl font-bold">Informações</h2>

          <p className="text-hitcolor-600 text-justify">
            A Hitcolor tem sua sede em São Carlos, cidade referência em
            tecnologia no interior paulista, e continua escrevendo sua história
            baseada em respeito, credibilidade e inovação.
          </p>
        </div>

        <div className="flex w-full flex-wrap items-start justify-between gap-8">
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-hitcolor-600">Contato</p>

            <Link
              to="tel:+551634161611"
              className="font-medium text-zinc-50 underline"
            >
              (16) 3416-1611
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-hitcolor-600">E-mail</p>

            <Link
              to="mailto:hitcolor@hitcolor.com.br"
              className="font-medium text-zinc-50 underline"
            >
              hitcolor@hitcolor.com.br
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-hitcolor-800 my-12 w-full border-0 border-t" />

      <div className="flex w-full flex-col items-start gap-8">
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-xl font-medium">Social</h2>

          <div className="text-hitcolor-600 flex w-full items-center justify-start gap-4">
            <Google size="32" variant="Broken" />

            <Whatsapp size="32" variant="Broken" />

            <Facebook size="32" variant="Broken" />

            <Instagram size="32" variant="Broken" />
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <h2 className="text-xl font-medium">Endereço</h2>

          <Link
            to="https://maps.app.goo.gl/tCsRJVvjEWQZsSoU9"
            target="_blank"
            className="text-hitcolor-600 underline"
          >
            Rua Cel. Domingos Marinho de Azevedo, 313 ─ Boa Vista, São Carlos ─
            SP, 13575-008
          </Link>
        </div>
      </div>

      <hr className="border-hitcolor-800 my-12 w-full border-0 border-t" />

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <Link to="/" className="flex h-8 w-full items-center justify-center">
          <img
            src={logoHitcolorWhite}
            className="text-hitcolor-300 h-full w-auto"
          />
        </Link>

        <p className="text-hitcolor-600 text-sm">
          HitColor © 2025 Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
