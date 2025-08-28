import { Bag } from "iconsax-reactjs";
import etiquetas_brancas from "./assets/etiquetas-brancas.svg";
import ilustrative_image from "./assets/ilustrative-image.svg";

export const Home = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-8 p-2">
      <section className="border-hitcolor-800 relative flex h-auto w-full flex-col items-center justify-end">
        <div>
          <img src={ilustrative_image} />
        </div>

        <div className="text-hitcolor-800 absolute flex h-auto w-full flex-col items-center justify-center p-4">
          <div className="glass flex h-auto w-full flex-col items-start justify-center gap-2 p-4 text-white">
            <h2 className="text-xl leading-tight font-medium">
              Impressão em alta escala, qualidade em cada rolo
            </h2>

            <span className="text-base font-light">
              Etiquetas e rótulos adesivos sob medida para grandes
            </span>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-start justify-center gap-4">
        <header className="text-hitcolor-800 flex w-full items-center justify-center py-4">
          <h2 className="text-2xl leading-tight font-medium">Etiquetas</h2>
        </header>

        <div className="flex w-full flex-wrap items-start justify-between gap-4">
          <div className="border-hitcolor-800 flex w-full flex-col items-start justify-center gap-6 border p-4">
            <div className="flex p-2">
              <img src={etiquetas_brancas} alt="Imagem de etiquetas brancas" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-zinc-900">Brancas</h3>
              <p className="font-light text-zinc-500">
                Etiquetas brancas para gerenciar e organizar seu estabelecimento
                de forma eficaz e prática. Produzidas em papel couchê ou BOPP
                fosco adesivo, compatíveis com impressoras térmicas, ideais para
                o setor industrial e comercial.
              </p>
            </div>

            <div className="bg-hitcolor-800 flex w-full items-center justify-between gap-3 p-4 text-white">
              <div className="flex items-end justify-center gap-2 font-light">
                <Bag size="24" variant="Broken" />

                <label>Add ao carrinho</label>
              </div>

              <label className="font-bold">R$ 999,99</label>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-4">
            <div className="flex bg-zinc-300">
              <img src={etiquetas_brancas} alt="Imagem de etiquetas brancas" />
            </div>

            <h3 className="text-xl font-medium">Brancas</h3>
            <hr />
            <p>
              Etiquetas brancas para gerenciar e organizar seu estabelecimento
              de forma eficaz e prática. Produzidas em papel couchê ou BOPP
              fosco adesivo, compatíveis com impressoras térmicas, ideais para o
              setor industrial e comercial.
            </p>

            <strong>R$ 999,99</strong>
          </div>
        </div>
      </section>

      <section>
        <h2>Ribbons</h2>
      </section>
    </main>
  );
};
