var localization = {
  menuFooterBusinessNetwork: {
    "ru": "Деловая сеть",
    "en": "Business network",
    "es": "Red de negocios",
    "pt": "Rede de Negócios",
    "tr": "İş şebekesi",
    "vn": "Mạng xã hội"
  },
  menuFooterNews: {
    "ru": "Новости",
    "en": "News",
    "es": "Noticias",
    "pt": "Notícias",
    "tr": "Haberler",
    "vn": "Tin tức"
  },
  menuFooterDevelopers: {
    "ru": "Разработчикам",
    "en": "Developers",
    "es": "Desarolladores",
    "pt": "Para programadores",
    "tr": "Geliştiriciler ve webmasterlar için",
    "vn": "Nhà phát triển"
  },
  menuFooterCopyrightText: {
    "ru": "Воспроизводимые на данном сайте торговые марки WEBMONEY и WEBMONEY TRANSFER используются держателями сайта с разрешения правообладателя.",
    "en": "Usage of trademarks WEBMONEY and WEBMONEY TRANSFER by site owners is authorized by the trademark owners.",
    "es": "Las marcas comerciales WEBMONEY y WEBMONEY TRANSFER reproducidas en este sitio web se utilizan con el permiso del titular de derecho de autor.",
    "pt": "Marcas WebMoney e WebMoney Transfer neste site são usadas com permissão do titular dos direitos.",
    "tr": "Site sahiplerince WEBMONEY ve WEBMONEY TRANSFER'in logolarının kullanım hakkı marka sahipleri tarafından yetkilendirilmiştir.",
    "vn": "Việc sử dụng tên thương hiệu WEBMONEY và WEBMONEY TRANSFER trên trang web này đã được sự chấp thuận từ chủ sở hữu."
  },
  menuFooterCooperation: {
    "ru": "Сотрудничество",
    "en": "Cooperation",
    "es": "Colaboración",
    "pt": "Colaboração",
    "tr": "Kullanım koşulları",
    "vn": "Hợp tác"
  },
  menuFooterPressCentre: {
    "ru": "Пресс-центр",
    "en": "Press-centre",
    "es": "Centro de prensa",
    "pt": "Centro de imprensa",
    "tr": "Basın merkezi",
    "vn": "Trung tâm tin tức"
  },
  menuFooterContacts: {
    "ru": "Контакты",
    "en": "Contacts",
    "es": "Contáctenos",
    "pt": "Contatos",
    "tr": "Kontaklar",
    "vn": "Liên hệ"
  },
  menuFooterSupport: {
    "ru": "Поддержка",
    "en": "Support",
    "es": "Soporte",
    "pt": "Suporte",
    "tr": "Destek",
    "vn": "Hỗ trợ"
  },
  menuFooterOurApps: {
    "ru": "Наши приложения",
    "en": "Our apps",
    "es": "Nuestras aplicaciones",
    "pt": "Nosso aplicativos",
    "tr": "bizim uygulamamız",
    "vn": "Ứng dụng của chúng tôi"
  },
  textFooterEventsLink: {
    "ru": "events.webmoney.ru",
    "en": "events.wmtransfer.com",
    "es": "events.wmtransfer.com",
    "pt": "events.wmtransfer.com",
    "tr": "events.wmtransfer.com",
    "vn": "events.wmtransfer.com"
  },
  allNewsLinkText: {
    "ru": "Все новости",
    "en": "All news",
    "es": "Todas las noticias",
    "pt": "Todas as notícias",
    "tr": "Bütün haberler",
    "vn": "Tất cả tin tức"
  },
  langTitle_ru: {
    "ru": "Русский",
    "en": "Русский",
    "es": "Русский",
    "pt": "Русский",
    "tr": "Русский",
    "vn": "Русский"
  },
  langTitle_en: {
    "ru": "English",
    "en": "English",
    "es": "English",
    "pt": "English",
    "tr": "English",
    "vn": "English"
  },
  langTitle_es: {
    "ru": "Español",
    "en": "Español",
    "es": "Español",
    "pt": "Español",
    "tr": "Español",
    "vn": "Español"
  },
  langTitle_pt: {
    "ru": "Português",
    "en": "Português",
    "es": "Português",
    "pt": "Português",
    "tr": "Português",
    "vn": "Português"
  },
  langTitle_tr: {
    "ru": "Türk",
    "en": "Türk",
    "es": "Türk",
    "pt": "Türk",
    "tr": "Türk",
    "vn": "Türk"
  },
  langTitle_vn: {
    "ru": "tiếng Việt",
    "en": "tiếng Việt",
    "es": "tiếng Việt",
    "pt": "tiếng Việt",
    "tr": "tiếng Việt",
    "vn": "tiếng Việt"
  }
};

export default function (options, key) {

  return localization[key][options.lang];
}