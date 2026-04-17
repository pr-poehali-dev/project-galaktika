interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Key Milestones",
    learnMore: "Learn More",
  },
  de: {
    heading: "Wichtige Meilensteine",
    learnMore: "Mehr erfahren",
  },
  ru: {
    heading: "Ключевые события",
    learnMore: "Подробнее",
  },
}

const concerts = {
  en: [
    {
      date: "1792",
      time: "Kettering, England",
      title: "Founded the Baptist Missionary Society",
      venue: "The historic sermon: \"Expect great things from God\"",
      location: "England",
    },
    {
      date: "1793",
      time: "India",
      title: "Arrived in India",
      venue: "Began mission work in Bengal, later settled in Serampore",
      location: "India",
    },
    {
      date: "1801",
      time: "Serampore",
      title: "First Bengali New Testament Published",
      venue: "Serampore Mission Press — the first Bible in an Asian language",
      location: "India",
    },
    {
      date: "1818",
      time: "Serampore",
      title: "Founded Serampore College",
      venue: "First college in Asia open to students of all castes and faiths",
      location: "India",
    },
    {
      date: "1829",
      time: "Calcutta",
      title: "Sati Abolished by Law",
      venue: "Carey's decades of campaigning contributed to the official ban",
      location: "India",
    },
  ],
  de: [
    {
      date: "1792",
      time: "Kettering, England",
      title: "Grundung der Baptist Missionary Society",
      venue: "Die historische Predigt: 'Erwarte Grosses von Gott'",
      location: "England",
    },
    {
      date: "1793",
      time: "Indien",
      title: "Ankunft in Indien",
      venue: "Beginn der Missionsarbeit in Bengalen, spater in Serampore",
      location: "Indien",
    },
    {
      date: "1801",
      time: "Serampore",
      title: "Erstes bengalisches Neues Testament veroffentlicht",
      venue: "Serampore Mission Press — erste Bibel in einer asiatischen Sprache",
      location: "Indien",
    },
    {
      date: "1818",
      time: "Serampore",
      title: "Grundung des Serampore College",
      venue: "Erstes College in Asien, offen fur alle Kasten und Religionen",
      location: "Indien",
    },
    {
      date: "1829",
      time: "Kalkutta",
      title: "Sati durch Gesetz verboten",
      venue: "Careys jahrzehntelanger Einsatz trug zum offiziellen Verbot bei",
      location: "Indien",
    },
  ],
  ru: [
    {
      date: "1792",
      time: "Кеттеринг, Англия",
      title: "Основание Баптистского миссионерского общества",
      venue: "Историческая проповедь: «Ожидай великого от Бога»",
      location: "Англия",
    },
    {
      date: "1793",
      time: "Индия",
      title: "Прибытие в Индию",
      venue: "Начало миссионерской работы в Бенгалии, затем в Серампоре",
      location: "Индия",
    },
    {
      date: "1801",
      time: "Серампор",
      title: "Издан первый Новый Завет на бенгальском языке",
      venue: "Типография Серампорской миссии — первая Библия на азиатском языке",
      location: "Индия",
    },
    {
      date: "1818",
      time: "Серампор",
      title: "Основание Серампорского колледжа",
      venue: "Первый колледж в Азии, открытый для всех независимо от касты",
      location: "Индия",
    },
    {
      date: "1829",
      time: "Калькутта",
      title: "Сати запрещено законом",
      venue: "Многолетняя борьба Кэри способствовала официальному запрету",
      location: "Индия",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <span className="text-taupe text-sm">{concert.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}