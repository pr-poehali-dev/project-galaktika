interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Biography",
    paragraphs: [
      "William Carey was born on August 17, 1761, in Paulerspury, Northamptonshire, England. The son of a weaver and schoolteacher, he grew up in modest circumstances but displayed an extraordinary hunger for knowledge from an early age, teaching himself Latin, Greek, Hebrew, and Dutch from books he borrowed.",
      "Though he began his working life as a cobbler's apprentice, Carey's faith shaped his destiny. Inspired by the accounts of Captain James Cook's voyages and moved by the spiritual need of unreached peoples, he became convinced that Christians had a duty to carry the gospel to every corner of the earth — a radical idea in his day.",
      "In 1792, Carey helped found the Baptist Missionary Society — one of the first modern Protestant missionary organizations. His founding sermon, urging believers to \"expect great things from God, attempt great things for God,\" became one of the most celebrated calls to mission in Christian history.",
      "In 1793, Carey sailed to India, where he would spend the remaining 41 years of his life. Based at Serampore (near Calcutta), he and his colleagues established a mission that translated the Bible into Bengali, Sanskrit, and over two dozen other languages and dialects — making Scripture accessible to hundreds of millions of people.",
      "Beyond translation, Carey worked tirelessly as a reformer. He campaigned against the practice of sati (widow-burning), helped establish the first college in Asia open to all regardless of caste, and introduced the first printing press in Bengal. He also pioneered agricultural reform and founded the Agri-Horticultural Society of India.",
      "William Carey died on June 9, 1834, at Serampore. He is widely regarded as the \"Father of Modern Missions\" — a man of humble origins whose unwavering faith, intellectual brilliance, and sacrificial service transformed both the church and the continent he served.",
    ],
  },
  de: {
    heading: "Biografie",
    paragraphs: [
      "William Carey wurde am 17. August 1761 in Paulerspury, Northamptonshire, England, geboren. Als Sohn eines Webers und Schullehrers wuchs er in bescheidenen Verhaltnissen auf, zeigte jedoch von fruh an einen aussergewohnlichen Wissensdurst und brachte sich selbst Latein, Griechisch, Hebraisch und Niederlandisch bei.",
      "Obwohl er sein Berufsleben als Schuhmacherlehrling begann, formte sein Glaube sein Schicksal. Inspiriert durch die Berichte von Kapitän James Cooks Reisen und bewegt durch die spirituelle Not unerreichter Volker, wurde er uberzeugt, dass Christen die Pflicht hatten, das Evangelium in alle Winkel der Erde zu tragen.",
      "1792 half Carey bei der Grundung der Baptist Missionary Society — einer der ersten modernen protestantischen Missionsorganisationen. Seine Grundungspredigt mit der Aufforderung, 'Grosses von Gott zu erwarten, Grosses fur Gott zu versuchen', wurde zu einem der beruhmtesten Aufrufe zur Mission in der Kirchengeschichte.",
      "1793 segelte Carey nach Indien, wo er die verbleibenden 41 Jahre seines Lebens verbrachte. Von Serampore aus ubersetzten er und seine Kollegen die Bibel ins Bengalische, Sanskrit und uber zwei Dutzend weitere Sprachen und Dialekte.",
      "Uber die Ubersetzungsarbeit hinaus kampfte Carey unermudlich gegen die Praxis der Witwenverbrennung (Sati), half beim Aufbau des ersten fur alle offenen Colleges in Asien und fuhrte die erste Druckerpresse in Bengalen ein.",
      "William Carey starb am 9. Juni 1834 in Serampore. Er gilt weithin als der 'Vater der modernen Mission' — ein Mann bescheidener Herkunft, dessen unerschutterlicher Glaube und aufopferungsvoller Dienst sowohl die Kirche als auch den Kontinent, dem er diente, veranderten.",
    ],
  },
  ru: {
    heading: "Биография",
    paragraphs: [
      "Уильям Кэри родился 17 августа 1761 года в Полерспери, Нортгемптоншир, Англия. Сын ткача и учителя, он рос в скромных условиях, но с ранних лет обнаруживал необычайную жажду знаний — самостоятельно выучил латынь, греческий, иврит и нидерландский по книгам, которые брал взаймы.",
      "Хотя он начал трудовую жизнь учеником сапожника, его веру сформировала его судьбу. Вдохновлённый рассказами о путешествиях капитана Джеймса Кука и тронутый духовными нуждами народов, не слышавших Евангелия, он пришёл к убеждению, что христиане обязаны нести Благую Весть в каждый уголок земли.",
      "В 1792 году Кэри помог основать Баптистское миссионерское общество — одну из первых современных протестантских миссионерских организаций. Его проповедь с призывом «ожидать великого от Бога, предпринимать великое для Бога» стала одним из самых знаменитых призывов к миссии в истории христианства.",
      "В 1793 году Кэри отплыл в Индию, где провёл оставшиеся 41 год своей жизни. Работая в Серампоре близ Калькутты, он и его коллеги перевели Библию на бенгальский, санскрит и более двух десятков других языков и диалектов — сделав Писание доступным для сотен миллионов людей.",
      "Помимо переводческой работы, Кэри неустанно боролся против практики сати (сожжения вдов), участвовал в основании первого в Азии колледжа, открытого для всех независимо от касты, и ввёл в Бенгалии первый печатный станок. Он также занимался сельскохозяйственными реформами и основал Агрономическое общество Индии.",
      "Уильям Кэри умер 9 июня 1834 года в Серампоре. Он широко почитается как «Отец современных миссий» — человек скромного происхождения, чья непоколебимая вера, интеллектуальный блеск и жертвенное служение изменили и церковь, и континент, которому он посвятил свою жизнь.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}