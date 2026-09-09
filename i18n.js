(() => {
  'use strict';
  const english = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { english[el.dataset.i18n] = el.innerHTML; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { english[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { english[el.dataset.i18nAlt] = el.getAttribute('alt'); });
  english.description = document.querySelector('meta[name="description"]').content;
  const translations = {
    en: english,
    fi: {
      skip: 'Siirry sisältöön', navigation: 'Päänavigaatio', navWork: 'Projektit', navAbout: 'Minusta', navContact: 'Yhteys <svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19L19 5M5 5h14v14"/></svg>', language: 'Kieli', languageEnglish: 'Englanti', languageFinnish: 'Suomi', languageRussian: 'Venäjä',
      portrait: 'Lev Yarysh järven ja vuorten edustalla', hero: 'Web-kehittäjä.<br>Python &amp;<br>JavaScript.', heroNote: 'Python · JavaScript · SQL', scroll: 'Vieritä alas <span><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v18M5 14l7 7 7-7"/></svg></span>',
      aboutLabel: 'MINUSTA', aboutHeading: 'Verkkosivut ja<br><span>web-sovellukset.</span>',
      bio: 'Olen Lev, Joensuussa asuva aloitteleva ohjelmistokehittäjä. Rakennan verkkosivustoja ja web-sovelluksia Pythonilla ja JavaScriptillä sekä työskentelen rajapintojen ja tietokantojen parissa.',
      education: 'Opiskelen ohjelmistokehitystä Riveriassa Suomessa (2024–2027). Projekteihini kuuluu asiakkaalle tehty verkkosivusto, IT-tuki Odoossa ja sovellusten käyttöönotto AWS:ssä.',
      approach: 'Näiden projektien lisäksi olen tehnyt verkkosivuston golfpisteiden laskemiseen ja muita pieniä verkkotyökaluja. Sopeudun helposti uusiin tehtäviin ja teknologioihin, selvitän mielelläni, miten asiat toimivat, ja kehitän ideoista käytännöllisiä ratkaisuja.',
      viewWork: 'Projektit', technologies: 'Keskeiset teknologiat', workLabel: 'VALITUT PROJEKTIT', workNote: 'Asiakas- ja opiskeluprojekteja', workHeading: 'Valitut<br><span>projektit.</span>', workIntro: 'Verkkosivustoja, sovelluksia<br>ja integraatioita.',
      autoType: 'ASIAKASPROJEKTI', autoDescription: 'Uuden autokorjaamon verkkosivusto, joka toteutettiin asiakkaan vaatimusten mukaisesti maksullisena toimeksiantona.', openAuto: 'Avaa LA-Korjaamon sivusto uudessa välilehdessä',
      odooType: 'ERP / AUTOMAATIO', odooTitle: 'IT-tuki Odoossa', odooDescription: 'Räätälöity Python-moduuli IT-tukipyyntöjen luomiseen ja hallintaan Odoossa.', module: 'Moduuli',
      appType: 'WEB-SOVELLUS', flaskDescription: 'Pythonilla ja Flaskilla toteutettu tietokantapohjainen sovellus sekä harjoittelua sovelluksen käyttöönotosta AWS EC2:ssa.', application: 'Sovellus',
      wordpressType: 'VERKKOSIVUSTO / INFRASTRUKTUURI', wordpressTitle: 'WordPress Linuxissa', wordpressDescription: 'WordPress-sivuston asennus ja määritys, Linux-palvelimen ylläpito sekä vianmääritys.', website: 'Sivusto',
      contactLabel: 'YHTEYS', contactNote: 'Sähköposti', contactHeading: 'Ota<span> yhteyttä.</span><span class="contact-arrow" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19L19 5M5 5h14v14"/></svg></span>', contactInvite: 'Projektit, työ- ja harjoittelumahdollisuudet.', copyright: '© 2026 · Henkilökohtainen portfolio', backTop: 'Takaisin ylös <svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21V3M5 10l7-7 7 7"/></svg>',
      description: 'Lev Yarysh — web-kehittäjä Joensuusta. Python, JavaScript, Flask ja Odoo. Projektit ja yhteystiedot.'
    },
    ru: {
      skip: 'Перейти к содержимому', navigation: 'Основная навигация', navWork: 'Работы', navAbout: 'Обо мне', navContact: 'Контакт <svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19L19 5M5 5h14v14"/></svg>', language: 'Язык', languageEnglish: 'Английский', languageFinnish: 'Финский', languageRussian: 'Русский',
      portrait: 'Lev Yarysh на фоне гор и озера', hero: 'Веб-разработчик.<br>Python &amp;<br>JavaScript.', heroNote: 'Python · JavaScript · SQL', scroll: 'Листай ниже <span><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v18M5 14l7 7 7-7"/></svg></span>',
      aboutLabel: 'ОБО МНЕ', aboutHeading: 'Сайты и<br><span>веб-приложения.</span>',
      bio: 'Я Лев — начинающий разработчик из Йоэнсуу. Создаю сайты и веб-приложения на Python и JavaScript, работаю с API и базами данных.',
      education: 'Учусь на разработчика ПО в Riveria, Финляндия, 2024–2027. В моих проектах — клиентский сайт, IT-поддержка в Odoo и развёртывание приложений на AWS.',
      approach: 'Помимо этих проектов, я сделал сайт для подсчёта очков в гольфе и другие небольшие веб-инструменты. Легко адаптируюсь к новым задачам и технологиям, люблю разбираться в том, как всё устроено, и превращать идеи в полезные решения.',
      viewWork: 'К работам', technologies: 'Основные технологии', workLabel: 'ИЗБРАННЫЕ РАБОТЫ', workNote: 'Клиентские и учебные проекты', workHeading: 'Избранные<br><span>проекты.</span>', workIntro: 'Сайты, приложения<br>и интеграции.',
      autoType: 'КЛИЕНТСКИЙ ПРОЕКТ', autoDescription: 'Сайт для начинающего автосервиса. Разработан по требованиям клиента — мой оплаченный проект.', openAuto: 'Открыть сайт автосервиса LA-Korjaamo в новой вкладке',
      odooType: 'ERP / АВТОМАТИЗАЦИЯ', odooTitle: 'IT-поддержка в Odoo', odooDescription: 'Собственный Python-компонент для создания и управления обращениями в IT-поддержку.', module: 'Модуль',
      appType: 'ВЕБ-ПРИЛОЖЕНИЕ', flaskDescription: 'Приложение на Python и Flask с базой данных. Практика развёртывания на AWS EC2.', application: 'Приложение',
      wordpressType: 'САЙТ / ИНФРАСТРУКТУРА', wordpressTitle: 'WordPress на Linux', wordpressDescription: 'Установка и настройка сайта, обслуживание Linux-сервера и устранение неполадок.', website: 'Сайт',
      contactLabel: 'КОНТАКТ', contactNote: 'Почта', contactHeading: 'Связаться<br><span>со мной.</span><span class="contact-arrow" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19L19 5M5 5h14v14"/></svg></span>', contactInvite: 'По вопросам проектов, работы и практики.', copyright: '© 2026 · Персональное портфолио', backTop: 'Наверх <svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21V3M5 10l7-7 7 7"/></svg>',
      description: 'Lev Yarysh — веб-разработчик из Йоэнсуу, Финляндия. Python, JavaScript, Flask и Odoo. Проекты и контакты.'
    }
  };
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const storageKey = 'lev-portfolio-language';
  function setLanguage(language, persist = false) {
    const locale = Object.hasOwn(translations, language) ? language : 'en';
    const copy = translations[locale];
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = copy[el.dataset.i18n] ?? english[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', copy[el.dataset.i18nAria] ?? english[el.dataset.i18nAria]); });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.setAttribute('alt', copy[el.dataset.i18nAlt] ?? english[el.dataset.i18nAlt]); });
    document.querySelector('meta[name="description"]').content = copy.description;
    document.documentElement.lang = locale;
    document.title = locale === 'fi' ? 'Lev Yarysh — Web-kehittäjä' : locale === 'ru' ? 'Lev Yarysh — Веб-разработчик' : 'Lev Yarysh — Web Developer';
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === locale)));
    if (persist) { try { localStorage.setItem(storageKey, locale); } catch { /* Language switching still works without storage. */ } }
  }
  let initialLanguage = 'en';
  try { initialLanguage = localStorage.getItem(storageKey) || 'en'; } catch { /* English is the default. */ }
  setLanguage(initialLanguage);
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language, true)));
})();
