import Hero from "@/src/features/landing/components/Hero";
import LanguageSwitcher from "@/src/components/shared/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="relative min-h-screen overflow-hidden">
      <LanguageSwitcher />
      <h1 className="absolute top-32 left-1/2 -translate-x-1/2 text-center text-6xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="absolute top-52 left-1/2 text-center -translate-x-1/2">
        {t("descreption")}
      </p>
      <Hero />
    </main>
  );
}
