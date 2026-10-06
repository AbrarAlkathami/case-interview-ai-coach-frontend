import HeroPortrait from "./HeroPortrait";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="max-h-[85vh]">
          <HeroPortrait />
        </div>
      </div>
    </main>
  );
}
