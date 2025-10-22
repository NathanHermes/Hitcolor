import Drawer from "@/components/Drawer";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-zinc-100 p-4">
      <div className="flex w-auto flex-col items-center justify-center">
        <h1 className="text-hitcolor-700 text-xl font-bold">HITCOLOR</h1>
        <label className="text-sm font-light text-zinc-500">ETIQUETAS & RIBBONS</label>
      </div>

      <Drawer />
    </header>
  );
};
