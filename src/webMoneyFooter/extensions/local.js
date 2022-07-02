var localization = {
  menuAboutWebMoney: {
    "ru": "О системе",
    "en": "About WebMoney",
    "es": "Acerca de WebMoney",
    "pt": "Sobre o WebMoney",
    "tr": "WebMoney Hakkında",
    "vn": "About WebMoney"
  },
  menuPurseManagement: {
    "ru": "Управление кошельками",
    "en": "Purse management",
    "es": "Manejar los monederos",
    "pt": "Métodos para gerir contas",
    "tr": "Cüzdanların yönetimi",
    "vn": "Purse management"
  },
  menuLegalInformation: {
    "ru": "Юридическая информация",
    "en": "Legal information",
    "es": "Información legal",
    "pt": "Informação jurídica",
    "tr": "Hukuki bilgiler",
    "vn": "Legal information"
  },
  menuContactInformation: {
    "ru": "Контактная информация",
    "en": "Contact information",
    "es": "Información del contacto",
    "pt": "Informações de contato",
    "tr": "İletişim bilgileri",
    "vn": "Contact information"
  },
  menuInstrucciones: {
    "ru": "Инструкции",
    "en": "Instructions",
    "es": "Instrucciones",
    "pt": "Instruções",
    "tr": "Talimatlar",
    "vn": "Instructions"
  },
  menuHelp: {
    "ru": "Помощь",
    "en": "Help",
    "es": "Ayuda",
    "pt": "Ajuda",
    "tr": "Yardım",
    "vn": "Help"
  },
  menuMobileApps: {
    "ru": "Приложения для смартфонов",
    "en": "Mobile applications",
    "es": "Aplicaciones móviles",
    "pt": "Aplicações móveis",
    "tr": "Mobil uygulamalar",
    "vn": "Ứng dụng di động"
  },
  menuPcApps: {
    "ru": "Приложения для ПК",
    "en": "PC applications",
    "es": "PC aplicaciones",
    "pt": "PC formulários",
    "tr": "PC uygulamalar",
    "vn": "Ứng dụng PC"
  },
  menuFooterCopyrightText: {
    "ru": "Воспроизводимые на данном сайте торговые марки WEBMONEY и WEBMONEY TRANSFER используются держателями сайта с разрешения правообладателя.",
    "en": "Usage of trademarks WEBMONEY and WEBMONEY TRANSFER by site owners is authorized by the trademark owners.",
    "es": "Las marcas comerciales WEBMONEY y WEBMONEY TRANSFER reproducidas en este sitio web se utilizan con el permiso del titular de derecho de autor.",
    "pt": "Marcas WebMoney e WebMoney Transfer neste site são usadas com permissão do titular dos direitos.",
    "tr": "Site sahiplerince WEBMONEY ve WEBMONEY TRANSFER'in logolarının kullanım hakkı marka sahipleri tarafından yetkilendirilmiştir.",
    "vn": "Việc sử dụng tên thương hiệu WEBMONEY và WEBMONEY TRANSFER trên trang web này đã được sự chấp thuận từ chủ sở hữu."
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

export default function (context, key) {

  return localization[key][context.lang];
}