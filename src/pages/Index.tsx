import etiquetas_brancas from "@/assets/etiquetas-brancas.png";
import ilustrative_images from "@/assets/ilustrative-image.png";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <>
      <Header />

      <main className="flex w-full flex-col items-center justify-center gap-8">
        <section className="flex h-auto w-full flex-col items-center justify-end gap-12 border-b border-zinc-100 bg-zinc-50 px-4 py-12">
          <div className="flex h-auto w-full">
            <img src={ilustrative_images} className="rounded-md" />
          </div>

          <div className="flex h-auto w-full flex-col gap-4">
            <h2 className="text-hitcolor-900 leading text-3xl font-bold">
              Impressão em alta escala, qualidade em cada rolo
            </h2>

            <h3 className="text-xl font-light text-zinc-600">
              Etiquetas e rótulos adesivos sob medida para grandes volumes
            </h3>
          </div>

          <div className="flex h-auto w-auto items-center justify-center">
            <a href="#produtos" className="bg-hitcolor-700 rounded-md px-4 py-2 text-white">
              Ver produtos
            </a>
          </div>
        </section>

        <section id="produtos" className="flex w-full flex-col items-start justify-center gap-4 px-4">
          <header className="flex w-full items-center justify-start py-4">
            <h2 className="text-hitcolor-900 text-3xl leading-tight font-medium">Etiquetas</h2>
          </header>

          <div className="flex w-full flex-wrap items-start justify-between gap-4">
            <div className="flex w-full flex-col items-start justify-center rounded-xl border border-zinc-300">
              <div className="flex h-auto w-full">
                <img src={etiquetas_brancas} alt="Imagem de etiquetas brancas" className="rounded-t-xl" />
              </div>

              <div className="flex h-auto w-full flex-col items-start justify-center gap-6 p-6">
                <h3 className="text-xl font-medium text-zinc-900">Brancas</h3>

                <p className="text-sm font-light text-zinc-500">
                  Etiquetas brancas para gerenciar e organizar seu estabelecimento de forma eficaz e prática. Produzidas
                  em papel couchê ou BOPP fosco adesivo, compatíveis com impressoras térmicas, ideais para o setor
                  industrial e comercial.
                </p>

                <h3 className="text-hitcolor-700 text-2xl font-medium">R$ 999,99</h3>
              </div>

              <div className="flex h-auto w-full items-center justify-between p-6">
                <div className="bg-hitcolor-800 flex w-full items-end justify-center gap-2 rounded-md py-2">
                  {/* <Bag size="24" variant="Broken" /> */}

                  <label className="font-light text-white">Ver detalhes</label>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-4">
              <div className="flex bg-zinc-300">
                <img src={etiquetas_brancas} alt="Imagem de etiquetas brancas" />
              </div>

              <h3 className="text-xl font-medium">Brancas</h3>
              <hr />
              <p>
                Etiquetas brancas para gerenciar e organizar seu estabelecimento de forma eficaz e prática. Produzidas
                em papel couchê ou BOPP fosco adesivo, compatíveis com impressoras térmicas, ideais para o setor
                industrial e comercial.
              </p>

              <strong>R$ 999,99</strong>
            </div>
          </div>
        </section>

        <section>
          <h2>Ribbons</h2>
        </section>
      </main>
    </>
  );
};

export default Index;
