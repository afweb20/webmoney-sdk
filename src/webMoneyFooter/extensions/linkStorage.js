var consts = {
  DOMAIN_TYPE_WMTRANSFER: "0",
  DOMAIN_TYPE_MONEY: "1",
  DOMAIN_TYPE_RU: "2",

  LANG_RU: "ru",
  LANG_EN: "en",
  LANG_ES: "es",
  LANG_PT: "pt",
  LANG_TR: "tr",
  LANG_VN: "vn"
}

var constAllDomainTypes = [consts.DOMAIN_TYPE_WMTRANSFER, consts.DOMAIN_TYPE_MONEY, consts.DOMAIN_TYPE_RU];
var constLangs = ["rus", "eng", "es", "br", "tr"];

var constUrlInformation = "/information";
var constUrlInformationManage = constUrlInformation + "/manage";
var constUrlInformationStatistic = constUrlInformation + "/statistic";

var constUrlInout = "/inout"
var constUrlInoutTopup = constUrlInout + "/topup.shtml";
var constUrlInoutWithdraw = constUrlInout + "/withdraw.shtml";

var constUrlHelp = "/help";
var constUrlHelpStart = constUrlHelp + "/start";
var constUrlHelpTechnical = constUrlHelp + "/technical";
var constUrlHelpGeneral =  constUrlHelp + "/general";
var constUrlHelpFinancial  =  constUrlHelp + "/financial";

var constUrlBusinessAcceptPaymentsOnlineShop = "/business/accept-payments/online-shop";
var constUrlIndividualsCredit = "/individuals/credit";
var constUrlDevelopers = "/developers";
var constUrlLegal = "/legal";
var constUrlSubjects = "/subjects";
var constUrlSupport = "/support";

var linkStorage = {
  // ============================
  // Ссылки в меню слева
  // ============================
  events: {
    t: ["Деловая сеть", "Business network", "Red de negocio", 
      "Rede de Negócios",
      "İş şebekesi"
    ],
    u: "events.web.money"
  },
  wiki: {
    t: "Wiki",
    u: "wiki.web.money"
  },
  news: {
    t: ["Новости", "News", "Noticias", 
      "Notícias",
      "Haberler"
    ],
    u: ["news.wmtransfer.com",["", "/en"]]
  },
  // ============================
  // Социальные сети
  // ============================
  vk: {
    t: "Вконтакте",
    u: "vk.com/webmoney.transfer"
  },
  facebook: {
    t: "Facebook",
    u: "www.facebook.com/webmoneyofficial"
  },
  twitter: {
    t: "Twitter",
    u: ["twitter.com/webmoney_ru","twitter.com/WebMoneySystem"]
  },
  odnoklassniki: {
    t: "Одноклассники",
    u: "ok.ru/group/53706567844072"
  },
  youTube: {
    t: "YouTube",
    u: "youtube.com/c/webmoney"
  },
  instagram: {
    t: "Instagram",
    u: "www.instagram.com/webmoney"
  },
  telegram: {
    t: "Telegram",
    u: "telegram.me/webmoney"
  },
  // ============================
  // О системе
  // ============================
  briefDescription: {
    t: ["Краткое описание", "Brief description", "Descripción corta", 
      "Descrição curta",
      "Kısaca tanımlama"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/short/index.shtml"]
  },
  purseTypes: {
    t: ["Типы кошельков", "Purse types", "Tipos de monederos", 
      "Tipos de bolsas",
      "Cüzdan tipleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/wmwallets/index.shtml"]
  },
  purseManagement: {
    t: ["Управление кошельками", "Purse management", "Metodos para manejar las cuentas", 
      "Métodos para gerir contas",
      "Yönetim yöntemleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/index.shtml"]
  },
  systemFees: {
    t: ["Тарифы системы", "System fees", "Tarifas del sistema", 
      "Tarifas do sistema"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/rates/index.shtml"]
  },
  operationLimits: { 
    t: ["Лимиты на операции", "Operation limits", "Límites de la operación", 
      "Limites da operação",
      "İşlem limitleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/operation_limits.shtml"]
  },
  securityAndPrivacy: {
    t: ["Безопасность и конфиденциальность", "Security and privacy", "Seguridad", 
      "Segurança e Privacidade",
      "Güvenlik ve gizlilik"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/security.shtml"]
  },
  // ============================
  // Инструкции
  // ============================
  faq: {
    t: [
      "Вопросы и ответы", "Questions and answers", "Preguntas y respuestas", "Perguntas e respostas",
      "Sorular ve cevaplar",
      "Câu hỏi và trả lời"
    ],
    u: ["wiki.web.money/projects/webmoney/wiki/FAQ"]
  },
  howToRegister: {
    t: [
      "Как зарегистрироваться", 
      "How to register", 
      "Cómo registrarse", 
      "Como se registrar",
      "Nasıl kayıt olunur"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/registration.shtml"]
  },
  howToCreateWallet: {
    t: [
      "Как создать кошелек", 
      "How to create a wallet", 
      "Cómo crear una billetera", 
      "Como criar uma carteira",
      "Bir cüzdan nasıl oluşturulur"
    ],
    u: ["wiki.web.money/projects/webmoney/wiki/kak_sozdat_wm_koshelek_v_wm_keeper"]
  },
  howToTopUp: {
    t: [
      "Как пополнить кошелек", 
      "How to top up your wallet", 
      "Cómo recargar su billetera", 
      "Como recarregar sua carteira",
      "Cüzdanınızı nasıl doldurabilirsiniz"
    ],
    u: ["wiki.web.money/projects/webmoney/wiki/sposoby_popolneniya"]
  },
  howToIden: {
    t: [
      "Как пройти идентификацию", 
      "How to complete identification", 
      "Cómo completar la identificación", 
      "Como completar a identificação",
      "Tanımlama nasıl tamamlanır"
    ],
    u: ["wiki.web.money/projects/webmoney/wiki/sposoby_popolneniya"]
  },
  videoTutorials: {
    t: [
      "Обучающие видео", 
      "Video tutorials", 
      "Video Tutorial", 
      "Tutorial em vídeo",
      "Videolu eğitim"
    ],
    u: ["www.youtube.com/playlist?list=PLxnBovRWjSvuQF841-x7onqshYgCzkxkU", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL", 
      "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL",
      "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL"
    ]
  },
  // ============================
  // Помощь
  // ============================
  technicalSupport: {
    t: ["Техническая поддержка", "Technical support", "Soporte técnico", 
      "Suporte técnico",
      "Teknik destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  financialSupport: {
    t: ["Финансовая поддержка", "Financial support", "Soporte financiero", 
      "Apoio Financeiro",
      "Mali destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  forum: {
    t: ["Форум", "Forum", "Foro", 
      "Fórum",
      "Forum"
    ],
    u: "forum.web.money/index.php"
  },
  changeData: {
    t: ["Изменение регистрационных данных", "Change data", "Cambiar datos", 
      "Alterar dados",
      "Verileri değiştir"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_data.shtml"]
  },
  pretenzIIski: {
    t: ["Подача претензий и исков", "Submitting claims and complaints", "Hacer una pretensión", 
      "Apresentação de queixas e reclamações",
      "Şikayetler ve talepler"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/pretenzi-iski.shtml"]
  },
  restoringControl: {
    t: ["Восстановление доступа", "Restoring control", "Recuperar el acceso", 
      "Recuperar o acesso",
      "Erişimin onarılması"
    ],
    u: ["key.wmtransfer.com", ["", "/10/NewApp.aspx?lang=en", "", 
      ""
    ]]
  },
  receivePassport: {
    t: [
      "Получить аттестат", 
      "Receive WebMoney passport", 
      "Recibir el atestado", 
      "Receber certificado",
      "Belge alma"
    ],
    u: "passport.web.money"
  },
  actionBlock: {
    t: ["Действия при блокировке кошелька", "Action block", "Bloque de acción", 
      "Bloco de ação",
      "Eylem bloğu"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/action_block.shtml"]
  },
  // ============================
  // Юридическая информаци
  // ============================
  webMoneyTransferCode: {
    t: ["Кодекс системы WebMoney Transfer", "WebMoney Transfer Code", "Código del sistema WebMoney Transfer",
      "O Código do sistema WebMoney Transfer",
      "WebMoney Transfer sisteminin Kanunu"  
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/codex.shtml"]
  },
  propertyRightsTransferAgreement: {
    t: ["Соглашение о трансфере имущественных прав", "Property rights transfer agreement", "Acuerdo de transferencia de los derechos de bienes",
      "Acordo transerencia dos direitos de propriedade",
      "Mülkiyet haklarının transferi hakkında anlaşma"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/transfert.shtml"]
  },
  amlAgreement: {
    t: ["Соглашение о борьбе с незаконной торговлей", "AML Agreement", "Acuerdo de la lucha contra la venta ilegal", 
      "Acordo sobre a luta contra a venda ilegal",
      "Yasadışı ticarete karşı mücadele hakkında anlaşma"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/illegaltrade.shtml"]
  },
  creditServiceAgreement: {
    t: ["Соглашение об использовании кредитного сервиса", "Credit service agreement", "Acuerdo del uso del servicio de crédito", 
      "Acordo sobre o uso do serviço de crédito",
      "Kredi servisinin kullanılması hakkında anlaşma"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/credit_service.shtml"]
  },
  wmPursesAgreement: {
    t: ["Соглашения по WM-кошелькам", "WM purses agreement", "Acuerdo de los monederos WM", 
      "Acordo sobre WM carteiras",
      "WM-cüzdanlar ile ilgili anlaşmalar"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/garants/index.shtml"]
  },
  warning: {
    t: ["Предупреждение", "Warning", "Atención", 
      "Atenção",
      "Uyarı"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/warning.shtml"]
  },
  // ============================
  // Разработчикам
  // ============================
  programInterfaces: {
    t: ["API: программные интерфейсы", "API: Program interfaces", "API: aplicaciónes", 
      "API: aplicações",
      "API: program arayüzleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/api.shtml"]
  },
  merchantInterface: {
    t: [
      "Web Merchant Interface"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/merchant.shtml"]
  },
  stylesAndDesign: {
    t: [
      "Дизайн и стили", 
      "Styles and design", 
      "Diseño y estilos", 
      "Desenho e estilos",
      "Dizayn ve stiller"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/logos.shtml"]
  },
  // ============================
  // Контакты
  // ============================
  wmPurseGuarantors: {
    t: ["Гаранты по WM-кошелькам", "WM purse guarantors", "Garantes de los monederos", 
      "Garantes das bolsas",
      "WM-cüzdanların kefilleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/guarantors/index.shtml"]
  },
  contactsForLegalRequests: {
    t: ["Контакты для запросов от судебных органов", "Contacts for legal requests", "Contactos para demandas jurídicas", 
      "Contatos para ações judiciais",
      "Yargı organlarından talep için iletişimler"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/official.shtml"]
  },
  verificationPoints: {
    t: ["Пункты аттестации", "Verification points", "Locales de certificación", 
      "Lojas de certificação",
      "Belgelendirme noktaları"
    ],
    u: "passport.web.money/asp/Reglist.asp?rettid=130"
  },
  cooperation: {
    t: ["Сотрудничество", "Cooperation", "Colaboración", 
      "Colaboração",
      "Kullanım koşulları"
    ],
    d: constAllDomainTypes,
    u: [constLangs, "/cooperation/merchants.shtml"]
  },
  pressService: {
    t: [
      "Пресс-центр", 
      "Press-centre", 
      "Centro de prensa", 
      "Centro de imprensa",
      "Basın merkezi",
      "Press-centre", 
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/press-service.shtml"]
  },
  // ============================
  // Приложения для смартфонов
  // ============================
  appAppStore: {
    t: ["App Store"],
    u: "itunes.apple.com/us/app/my-webmoney/id524382727"
  },
  appGooglePlay: {
    t: ["Google Play"],
    u: "play.google.com/store/apps/details?id=com.webmoney.my"
  },
  appAppGallery: {
    t: ["App Gallery"],
    u: "https://appgallery.huawei.com/#/app/C101543357"
  },
  // ============================
  // Приложения для ПК
  // ============================
  appWindows: {
    t: ["Windows"],
    u: "winpro.web.money/"
  },
  appMicrosoftStore: {
    t: ["Microsoft Store"],
    u: "www.microsoft.com/store/apps/9NQ5N286PQC0"
  },
  appMacOS: {
    t: ["Mac OS"],
    u: "itunes.apple.com/ru/app/my-webmoney/id807337125?l=ru&amp;ls=1&amp;mt=12"
  }
};

var containDomainType = function (items, domainType) {

  for (var i = 0; i < items.length; i++) {

    if (items[i] == domainType) {
      return true;
    }
  }

  return false;
}

var getLangValue = function (items, lang) {

  if (typeof items == "string") {
    return items;
  }

  if (lang == consts.LANG_RU && items.length > 0) { return items[0]; }
  else if (lang == consts.LANG_EN && items.length > 1) { return items[1]; }
  else if (lang == consts.LANG_ES && items.length > 2) { return items[2]; }
  else if (lang == consts.LANG_PT && items.length > 3) { return items[3]; }
  else if (lang == consts.LANG_TR && items.length > 4) { return items[4]; }
  else if (lang == consts.LANG_VN && items.length > 5) { return items[5]; }
  else if (items.length > 1) { return items[1]; }
  else if (items.length > 0) { return items[0]; }

  return "";
};

export default function (context, key) {

  var link = {
    title: "title_" + key + "_" + context.lang,
    url: "url_" + key + "_" + context.lang
  };

  var linkStorageItem = linkStorage[key];

  if (linkStorageItem != null) {

    var title = getLangValue(linkStorageItem.t, context.lang);

    var url = "";

    if (linkStorageItem.d != null ) {

      var domainType = null;

      if (containDomainType(linkStorageItem.d, context.domainType)) {

        domainType = context.domainType;
      } else if (containDomainType(linkStorageItem.d, consts.DOMAIN_TYPE_WMTRANSFER)) {

        domainType = consts.DOMAIN_TYPE_WMTRANSFER;
      } else if (containDomainType(linkStorageItem.d, consts.DOMAIN_TYPE_MONEY)) {

        domainType = consts.DOMAIN_TYPE_MONEY;
      } else if (containDomainType(linkStorageItem.d, consts.DOMAIN_TYPE_RU)) {

        domainType = consts.DOMAIN_TYPE_RU;
      }

      if (domainType == consts.DOMAIN_TYPE_WMTRANSFER) {

        url += "wmtransfer.com/";
      } else if (domainType == consts.DOMAIN_TYPE_MONEY) {
        
        url += "web.money/";
      } else if (domainType == consts.DOMAIN_TYPE_RU) {

        url += "webmoney.ru/";
      }
    }

    if (linkStorageItem.u != null && typeof linkStorageItem.u == "string") {

      url += linkStorageItem.u;
    } else if (linkStorageItem.u != null) {

      for (var i = 0; i < linkStorageItem.u.length; i++) {
        url += getLangValue(linkStorageItem.u[i], context.lang);
      }
    }

    url = "https://" + url;

    link.title = title;
    link.url = url;
    link.q = linkStorageItem.q;
  }

  return link;
}