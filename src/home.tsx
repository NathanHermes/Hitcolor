import ilustrative_image from "./assets/ilustrative-image.svg";

export const Home = () => {
  return (
    <main className="flex w-full items-center justify-center p-4">
      <section className="border-hitcolor-800 relative flex h-auto w-full flex-col items-center justify-end">
        <div>
          <img src={ilustrative_image} />
        </div>

        <div className="text-hitcolor-800 absolute flex h-auto w-full flex-col items-center justify-center p-4">
          <div className="glass flex h-auto w-full flex-col items-start justify-center gap-2 p-4 text-white">
            <h2 className="text-xl leading-tight font-black">
              Impressão em alta escala, qualidade em cada rolo
            </h2>

            <span className="text-sm font-light">
              Etiquetas e rótulos adesivos sob medida para grandes
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};
