interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    title: "William Carey",
    subtitle: "Missionary. Linguist. Pioneer of Modern Missions.",
    description: "\"Expect great things from God; attempt great things for God.\" — Serampore, 1793",
  },
  de: {
    title: "William Carey",
    subtitle: "Missionar. Sprachwissenschaftler. Vater der modernen Mission.",
    description: '"Erwarte Grosses von Gott; versuche Grosses fuer Gott." — Serampore, 1793',
  },
  ru: {
    title: "Уильям Кэри",
    subtitle: "Миссионер. Лингвист. Отец современных миссий.",
    description: "«Ожидай великого от Бога; предпринимай великое для Бога.» — Серампор, 1793",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/df492e8b-03df-49b7-8efa-bbd63617f750/files/d28ca5eb-b99d-4821-962a-777fb79b5546.jpg"
          alt="William Carey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 animate-fade-in-up">{t.title}</h1>
          <h3 className="text-white font-light mb-8 animate-fade-in-up animation-delay-100">{t.subtitle}</h3>
          <div className="line-accent mb-10 animate-fade-in-up animation-delay-200"></div>
          <p className="text-white font-light max-w-2xl mb-16 animate-fade-in-up animation-delay-300">{t.description}</p>

          {/* Years */}
          <div className="flex gap-8 animate-fade-in-up animation-delay-400">
            <span className="text-white/80 text-sm tracking-widest uppercase font-light">1761 – 1834</span>
          </div>
        </div>
      </div>
    </section>
  )
}