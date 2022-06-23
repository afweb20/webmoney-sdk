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
var constLangs = ["rus", "eng", "es"];

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
  // =========================
  // О системе (1)
  // =========================
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
  keeperStandardMini: {
    t: "Keeper Standard (Mini)",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/standard.shtml"]
  },
  keeperWinProClassic: {
    t: "Keeper WinPro (Classic)",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/winpro.shtml"]
  },
  keeperWebProLight: {
    t: "Keeper WebPro (Light)",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/webpro.shtml"]
  },
  keeperMobile: {
    t: "Keeper Mobile",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/mobile.shtml"]
  },
  keeperForSocialNetworks: {
    t: ["Keeper для социальных сетей", "Keeper for social networks", "Keeper para las redes sociales", 
      "Keeper para as redes sociais",
      "Sosyal ağlar için Keeper"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/social.shtml"]
  },
  systemFees: {
    t: ["Тарифы системы", "System fees", "Tarifas del sistema", 
      "Tarifas do sistema"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/rates/index.shtml"]
  },
  statistics: {
    t: ["Статистика", "Statistics", "Estadísticas", 
      "Estatística",
      "İstatistik"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/index.shtml"]
  },
  securityAndPrivacy: {
    t: ["Безопасность и конфиденциальность", "Security and privacy", "Seguridad", 
      "Segurança e Privacidade",
      "Güvenlik ve gizlilik"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/security.shtml"]
  },
  news: {
    t: ["Новости", "News", "Noticias", 
      "Notícias",
      "Haberler"
    ],
    u: ["news.wmtransfer.com",["", "/en"]]
  },
  // =========================
  // О системе (2)
  // =========================
  legalInformation: {
    t: ["Юридическая информация", "Legal information", "Información legal",
      "Informação jurídica",
      "Hukuki bilgiler"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/index.shtml"]
  },
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
  // =========================
  // О системе (3)
  // =========================
  systemSubjects: {
    t: ["Субъекты системы", "System subjects", "Sujetos del sistema", 
      "Sujeitos do sistema",
      "Sistemin konuları"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/index.shtml"]
  },
  ownerAndAdministrator: {
    t: ["Владелец и администратор", "Owner and administrator", "Administrador", 
      "Administrador",
      "Sahibi ve yönetici"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/administrator.shtml"]
  },
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
  // =========================
  // О системе (4)
  // =========================
  registrars: {
    t: ["Регистраторы", "Registrars", "Registradores", 
      "Registradores",
      "Kaydediciler"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/registrators.shtml"]
  },
  financialSupport: {
    t: ["Финансовая поддержка", "Financial support", "Soporte financiero", 
      "Apoio Financeiro",
      "Mali destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport: {
    t: ["Техническая поддержка", "Technical support", "Soporte técnico", 
      "Suporte técnico",
      "Teknik destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  cooperation: {
    t: ["Сотрудничество", "Cooperation", "Colaboración", 
      "Colaboração",
      "Kullanım koşulları"
    ],
    d: constAllDomainTypes,
    u: [constLangs, "/cooperation/merchants.shtml"]
  },
  forum: {
    t: ["Форум", "Forum", "Foro", 
      "Fórum",
      "Forum"
    ],
    u: "forum.web.money/index.php"
  },
  facebook: {
    t: "Facebook",
    u: "www.facebook.com/webmoneyofficial"
  },
  twitter: {
    t: "Twitter",
    u: ["twitter.com/webmoney_ru","twitter.com/WebMoneySystem"]
  },
  vk: {
    t: "Вконтакте",
    u: "vk.com/webmoney.transfer"
  },
  youTube: {
    t: "YouTube",
    u: "youtube.com/c/webmoney"
  },
  telegram: {
    t: "Telegram",
    u: "telegram.me/webmoney"
  },
  downloadSoftware: {
    t: ["Скачать приложения", "Download software", "Descargar software", 
      "Download de software",
      "Yazılım"
    ],
    u: [["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", 
      "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software",
      "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"
    ]]
  },
  // =========================
  // Частным лицам (1)
  // =========================
  topUpCash: {
    t: ["Наличными", "Cash", "Recargar", 
      "-", 
      "Nakit olarak"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#cash"] // TODO - проверить эту ссылку, отличается на es
  },
  topUpBankAccount: {
    t: ["С банковского счета", "Bank account", "-", 
      "-",
      "Banka hesabından"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#bank"]
  },
  topUpEMoney: {
    t: ["Электронными деньгами", "E-money", "-", 
      "-",
      "Elektronik paralar ile"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#emoney"]
  },
  topUpPaymentTerminat: {
    t: ["Через терминал", "Payment terminal", "-", 
      "-",
      "Terminalden"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#terminal"]
  },
  topUpMoneyTransfer: {
    t: ["Денежным переводом", "Money transfer", "-", 
      "-",
      "Para transferi ile"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#perevod"]
  },
  consultations: {
    t: ["Платные видеоконсультации", "Paid video consultations", "-", 
      "-",
      "-"
    ],
    u: "events.web.money/consultations"
  },
  softactivation: {
    t: ["Продажа цифровых товаров", "Sale of digital goods", "-", 
      "-",
      "-"
    ],
    u: "softactivation.webmoney.ru"
  },
  indx: {
    t: ["INDX: фондовая биржа", "INDX: Stock exchange", "INDX: bolsa de fondos", 
      "INDX: bolsa de fundos",
      "INDX: borsa"
    ],
    u: "indx.money/about"
  },
  publicant: {
    t: ["Publicant: опубликовать книгу", "Publicant: Publish a book", "Publicant: publicar el libro", 
      "Publicant: publicar o livro",
      "Publicant: kitabı yayınlamak"
    ],
    u: "publicant.webmoney.ru"
  },
  mestkom: {
    t: ["Mestcom: продажа рекламы", "Mestcom: Sell Ads", "Mestcom: vender los anuncios", 
      "Mestcom: venda de publicidade",
      "Mestcom: reklam satışı"
    ],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox: {
    t: ["CashBox: оплата за действия", "CashBox: Complete activities on a website", "CashBox: pagar por las acciones en el sitio web", 
      "Cashbox: comprar as ações no site",
      "CashBox: işlem için ödeme"
    ],
    u: "cashbox.ru"
  },
  shareholder: {
    t: ["Shareholder: дивиденды и торговля долями", "Shareholder: Dividends and share trading", "Shareholder: dividendos", 
      "Shareholder: utilização de fundos",
      "Shareholder: kar payları ve hisse satışı"
    ],
    u: ["www.shareholder.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en", 
      "?lang=en",
      "?lang=en"
    ]]
  },
  debtmart: {
    t: ["DebtMart: Биржа долгов", "Debt market", "Bolsa de deudas", 
      "Vender a dívida",
      "DebtMart: Borç borsası"
    ],
    u: ["debtmart.wmtransfer.com", ["", "?lang=en", "?lang=en", 
      "?lang=en", 
      "?lang=en"
    ]]
  },
  video: {
    t: ["Видеозвонки и онлайн-трансляции", "Video calls and online broadcasts", "-", 
      "-",
      "-"
    ],
    u: "video.webmoney.ru"
  },
  memo: {
    t: ["Управление закладками", "Bookmark management", "-", 
      "-",
      "-"
    ],
    u: "memo.web.money"
  },
  notes: {
    t: ["Верстка и публикация заметок", "Layout and publication of notes", "-", 
      "-",
      "-"
    ],
    u: "wmid.com/notes"
  },
  analytics: {
    t: ["Сервис аналитики", "Analytics", "-", 
      "-",
      "-"
    ],
    u: "analytics.webmoney.ru"
  },
  mail: {
    t: ["Защищенная почта", "Mail", "Correspondencia protegida", 
      "Mail protegido",
      "Korunmuş posta"
    ],
    u: "wmid.com"
  },
  files: {
    t: ["Файловое хранилище", "File storage", "Archivo", 
      "Seus arquivos",
      "Dosya deposu"
    ],
    u: ["files.webmoney.ru", ["", "?locale=en", "?locale=en", "?lang=en"]]
  },
  mentor: {
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service", "Mentor: control de ejecución de las tareas", 
      "Mentor: controlar a execução das tarefas",
      "Mentor: görevleri yürütmesinin kontrolü "
    ],
    u: ["mentor.wmtransfer.com", ["?lang=ru", "?lang=en", "?lang=en", 
      "?lang=en", 
      "?lang=en"
    ]]
  },
  // =========================
  // Частным лицам (2)
  // =========================
  withdrawCash: {
    t: ["Наличными", "Cash", "-", 
      "-",
      "Nakit olarak"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#cash"]
  },
  withdrawToBankCard: {
    t: ["На банковскую карту", "To bank card", "A una tarjeta bancaria", 
      "Ao cartão bancário",
      "-"
    ],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/cards"]
  },
  withdrawBankAccount: {
    t: ["На банковский счет", "Bank account", "-", 
      "-",
      "Banka hesabına"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#bank"]
  },
  withdrawEmoney: {
    t: ["Электронными деньгами", "E-money", "-", 
      "-",
      "Elektronik paralar ile"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#emoney"]
  },
  withdrawTransfer: {
    t: ["Денежным переводом", "Money transfer", "-", 
      "-",
      "Para transferi ile"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#perevod"]
  },
  exchanger: {
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service", "Exchanger: locales de cambio", 
      "Exchanger: lojas de câmbio",
      "Exchanger: döviz bürosu"
    ],
    u: "exchanger.web.money"
  },
  wmCheck: {
    t: ["WM.Check: оплата без регистрации", "WM.Check: Payment without registration", "WM.Check: pagar sin registrarse", 
      "WM.Check: pagar sem cadastrar-se",
      "WM.Check: kayıtsız ödeme"
    ],
    u: [["check.webmoney.ru", "check.wmtransfer.com/w/"],["?lang=ru", "?lang=en", "?lang=en", 
      "?lang=en",
      "?lang=en"
    ]]
  },
  protectedTransactions: {
    t: ["Переводы с протекцией (платежи в два шага)", "Protected transactions", "Transacciones con protección", 
      "Proteção das Transações",
      "Korumalı transferler (iki adımda ödemeler)"
    ],
    u: [["wiki.web.money/projects/webmoney/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%BA%D1%86%D0%B8%D0%B5%D0%B9", "wiki.wmtransfer.com/projects/webmoney/wiki/Protected_payment", 
      "http://wiki.webmoney.ru/projects/webmoney/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%BA%D1%86%D0%B8%D0%B5%D0%B9",
      "http://wiki.webmoney.ru/projects/webmoney/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%BA%D1%86%D0%B8%D0%B5%D0%B9"
    ]]
  },
  security: {
    t: ["Безопасность", "Security", "Seguiridad"], // в испанской версии не ссылка
    u: "security.web.money/asp/default.asp"
  },
  escrow: {
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions", "Escrow: acciones protegídas", 
      "Escrow: ações protegidas",
      "Escrow: korumalı anlaşmalar"
    ],
    u: "escrow.webmoney.ru"
  },
  enum: {
    t: ["E-Num: безопасная авторизация", "E-Num: Secure authorisation", "E-Num: autorización protegída", 
      "E-Num: autorização protegida",
      "E-Num: güvenli giriş yapma"
    ],
    u: ["enum.ru",["", "?lang=en", "?lang=en", "?lang=en"]]
  },
  operationNotification: {
    t: ["Оповещения об операциях", "Operation notification", "Notificación de las acciones", 
      "Ações de notificação",
      "İşlemler hakkında bildiriler"
    ],
    u: ["notify.webmoney.ru",["", "?lang=eng", "?lang=eng", "?lang=eng"]]
  },
  purseAccessLimiting: {
    t: ["Ограничение доступа к кошельку", "Purse access limiting", "Restringir el acceso al monedero", 
      "Restringir o acesso à carteira",
      "Cüzdana erişim sınırlaması"
    ],
    u: "security.web.money/asp/setallyip.asp"
  },
  expenseLimitsSetting: {
    t: ["Настройка расходных лимитов", "Expense limits setting", "Configuración de limites", 
      "Ajuste dos limites",
      "Harcama limitlerinin ayarlanması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
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
  advisor: {
    t: ["Advisor: отзывы о сайтах", "Advisor: Website reviews", "Advisor: recomendación de los sitios web", 
      "Advisor:recomendação do Websites",
      "Advisor: siteler hakkında yorumlar"
    ],
    u: "advisor.wmtransfer.com"
  },
  // =========================
  // Частным лицам (3)
  // =========================
  mobileCommunications: {
    t: ["Мобильная связь", "Mobile communications", "Telefonía movil", 
      "Telefonia móvel",
      "Mobil telefon bağlantısı"
    ],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/mobile"]
  },
  internetAccess: {
    t: ["Доступ в Интернет", "Internet access", "Acceso a internet", 
      "Acesso à internet",
      "İnternete erişim"
    ],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/isp"]
  },
  commercialTv: {
    t: ["Коммерческое телевидение", "Commercial TV", "Televisión comercial", 
      "televisão comercial",
      "Ticari televizyonculuk"
    ],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/tv"]
  },
  publicUtilities: {
    t: ["Коммунальные услуги", "Utilities", "Servicios públicos", 
      "Os serviços públicos",
      "Kamu hizmetleri"
    ],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/public-utilities"]
  },
  publicServices: {
    t: ["Государственные услуги, штрафы, налоги", "Public services, fines, taxes", "Servicios estatales, impuestos, multas", 
      "Serviços governamentais, impostos, multas",
      "Devlet hizmetleri, cezalar, vergiler"
    ],
    u: "payments.webmoney.ru"
  },
  bankAccountPayments: {
    t: ["Платежи по банковским реквизитам", "Bank account payments", "Pagar por requisito bancarios", 
      "Pagar por exigência bancária",
      "Banka bilgilerine göre ödemeler"
    ],
    u: "payments.webmoney.ru/freepay/Step1/4"
  },
  megastock: {
    t: ["Megastock: каталог продавцов", "Megastock: Merchant directory", "Megastock: catálogo de los vendedores", 
      "Megastock: catálogo de vendedores",
      "Megastock: satıcı katalogları"
    ],
    u: [["megastock.ru", "megastock.com"]]
  },
  digisellerCatalogOfdigitalGoods: {
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods", "Digiseller: catálogo de los servicios digitales", 
      "Digiseller: catálogo dos serviços digitais",
      "Digiseller: dijital ürünler"
    ],
    u: "digiseller.ru/outside/buygoods.asp"
  },
  antivirus: {
    t: ["Антивирус: программы по подписке", "Antivirus: software subscription", "-", 
      "-",
      "-"
    ],
    u: [["antivirus.webmoney.ru", "antivirus.wmtransfer.com"]]
  },
  rebills: {
    t: ["Rebills: автоплатежи", "Rebills and recurring payments", "Configuración de los pagos periódicos", 
      "Configuração de pagamentos diários",
      "Peryodik ödemelerin ayarları"
    ],
    u: "rebills.webmoney.ru"
  },
  creditService: {
    t: ["Кредитный сервис", "Credit service", "Servicio de crédito", 
      "Acordo sobre o uso do serviço de crédito",
      "Kredi servisi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/credit_service/about.shtml"]
  },
  debtService: {
    t: ["Долговой cервис", "Loan service", "Sobre el Servicio", "Empréstimo", 
      "-",
      "Borç Servisi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/debt_service/get_loan.shtml"]
  },
  passport: {
    t: ["Аттестация", "Verification", "Atestados", 
      "Atestados",
      "Belgelendirme"
    ], // TODO в испанкской версиии не ссылка
    u: "passport.web.money"
  },
  receivePassport: {
    t: ["Получить аттестат", "Receive WebMoney passport", "Recibir el atestado", 
      "Receber certificado",
      "Belge alma"
    ],
    u: "passport.web.money"
  },
  verificationPoints: {
    t: ["Пункты аттестации", "Verification points", "Locales de certificación", 
      "Lojas de certificação",
      "Belgelendirme noktaları"
    ],
    u: "passport.web.money/asp/Reglist.asp?rettid=130"
  },
  arbitrage: {
    t: ["Арбитраж", "Arbitrage", "Arbitraje", 
      "Arbitrágem",
      "Arbitraj"
    ],
    u: "arbitrage.web.money"
  },
  submitComplaint: {
    t: ["Подать иск", "Submit a complaint", "Entablar demanda", 
      "Começar demanda",
      "Dava açma"
    ],
    u: "arbitrage.web.money/asp/inewprocess.asp"
  },
  submitClaim: {
    t: ["Подать претензию", "Submit a claim", "Entablar la petición", 
      "Apresentar uma petição",
      "İtirazda bulunmak"
    ],
    u: "arbitrage.web.money/asp/newclaims.asp?authtype=1"
  },
  registerContract: {
    t: ["Зарегистрировать контракт", "Register contract", "Registrar el contrato", 
      "Insira o contrato",
      "Kontratı kaydetmek"
    ],
    u: "arbitrage.web.money/asp/bnewcontract.asp"
  },
  // =========================
  // Частным лицам (4)
  // =========================
  charity: {
    t: ["Благотворительность", "Charity", "-", 
      "-"
    ],
    u: "funding.web.money/donations"
  },
  crowdfunding: {
    t: ["Краудфандинг", "Crowdfunding", "-", 
      "-",
      "Kraudfanding"
    ],
    u: "funding.web.money/crowd"
  },
  groupBuying: {
    t: ["Коллективные покупки", "Group buying", "-", 
      "-",
      "Grup satın almalar"
    ],  
    u: "funding.web.money/group"
  },
  eventOrganization: {
    t: ["Организация мероприятий", "Event organization", "-", 
      "-",
      "Etkinliklerin organizasyon"
    ],
    u: "funding.web.money/tickets"
  },
  virtualCards: {
    t: ["Виртуальные карты Visa и MasterCard", "Virtual cards Visa and MasterCard", "Tarjetas virtuales Visa y MasterCard", 
      "Cartões virtuais Visa e MasterCard",
      "Sanal Visa ve MasterCard kartları"
    ],
    u: "cards.web.money"
  },
  plasticCards: {
    t: ["Пластиковые карты Visa и MasterCard", "Plastic cards Visa and MasterCard", "Tarjetas bancarias Visa y MasterCard", 
      "Visa e MasterCard cartões bancários",
      "Visa ve MasterCard kredi kartları"
    ],
    u: "cards.web.money"
  },
  moneySend: {
    t: ["Перевод с карты на карту", "MoneySend", "-", 
      "-",
      "-"
    ], // TODO в испанской версии закомментирован
    u: "moneysend.web.money"
  },
  events: {
    t: ["Деловая сеть", "Business network", "Red de negocio", 
      "Rede de Negócios",
      "İş şebekesi"
    ],
    u: "events.web.money"
  },
  blog: {
    t: ["Новости системы", "System news", "Noticias del sistema", 
      "Notícias do sistema",
      "Sistem haberleri"
    ],
    u: "blog.wmtransfer.com"
  },
  geo: {
    t: ["Интерактивная карта", "Interactive map", "Mapa interactivo", 
      "Mapa interativo",
      "İnteraktif harita"
    ],
    u: "geo.web.money"
  },
  wiki: {
    t: "Wiki",
    u: "wiki.web.money"
  },
  purseManagement2: {
    q: "",
    t: ["Управление кошельками", "Purse management", "Manejar los monederos", 
      "Métodos para gerir contas",
      "Cüzdanların yönetimi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/index.shtml"]
  },
  keeperStandardMini2: {
    t: "Keeper Standard (Mini)",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/standard.shtml"]
  },
  keeperWinProClassic2: {
    t: "Keeper WinPro (Classic)",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/winpro.shtml"]
  },
  keeperWebProLight2: {
    t: "Keeper WebPro (Light)",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/webpro.shtml"]
  },
  keeperMobile2: {
    t: "Keeper Mobile",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/mobile.shtml"]
  },
  keeperForSocialNetworks2: {
    q: "",
    t: ["Keeper для социальных сетей", "Keeper for social networks"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/social.shtml"]
  },
  enum2: {
    t: "E-NUM",
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/e-num.shtml"]
  },
  downloadSoftware2: {
    q: "",
    t: ["Скачать приложения", "Download software", "Descargar software", 
      "Download de software",
      "Yazılım"
    ],
    u: ["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", 
      "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software",
      "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"
    ]
  },
  // =========================
  // Для бизнеса (1)
  // =========================
  merchant: {
    q: "",
    t: ["Merchant: создать магазин", "Web Merchant Interface", "Merchant: hacer una tienda", 
      "Merchant: criar uma loja",
      "Merchant: dükkan oluşturmak"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/merchant.shtml"]
  },
  paymentsToBankAccounts: {
    q: "",
    t: ["Прием платежей на банковский счет", "Payments to bank accounts", "-", 
      "Aceitar pagamentos para a conta bancária",
      "-"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/bank.shtml"]
  },
  megastock2: {
    q: "",
    t: ["Megastock: каталог магазинов", "MegaStock: Directory of sites", "Megastock: catálogo de tiendas", 
      "Megastock: catálogo de lojas",
      "Megastock: dükkanların kataloğu"
    ],
    u: "megastock.ru"
  },
  digiseller2: {
    q: "",
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods", "Digiseller: catálogo de productos", 
      "Digiseller: catálogo de produtos",
      "Digiseller: dijital ürünler"
    ],
    u: "digiseller.ru/outside/sellgoods.asp"
  },
  funding: {
    q: "",
    t: ["Сбор средств", "Fundraising", "Colecta de los fondos", "-", 
      "-",
      "Kaynak toplanması"
    ],
    u: "funding.web.money"
  },
  mestcom2: {
    q: "",
    t: ["Mestcom: продажа рекламы", "Mestcom: Selling Ads", "Mestcom: comprar las publicidades", 
      "Mestcom: venda de publicidade",
      "Mestcom: reklam satışı"
    ],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox2: {
    q: "",
    t: ["Cashbox: покупка действий на сайте", "Cashbox: Purchase website activities", "Cashbox: comprar las acciones en el sitio web", 
      "Cashbox: comprar as ações no site",
      "Cashbox: sitede hareketlerin satın alınması"
    ],
    u: "cashbox.ru"
  },
  digiseller3: {
    q: "",
    t: ["Digiseller: виджет агентского магазина", "Digiseller: Agent shop widget", "Digiseller: vidget de la tienda de agencia", 
      "Digiseller: widget da loja de agência",
      "Digiseller: ajente dükkanı widjeti"
    ],
    u: "www.digiseller.ru/outside/agentshop.asp"
  },
  login: {
    q: "",
    t: ["Login: авторизация по WMID", "Login: WMID authorisation", "Login: autorización por WMID", 
      "Login: permissão pelo WMID",
      "Login: WMID’ye göre giriş yapma"
    ],
    u: "login.wmtransfer.com"
  },
  // =========================
  // Для бизнеса (2)
  // =========================
  masspayment: {
    q: "",
    t: ["Masspayment: массовые выплаты", "Mass Payments", "Masspayment: Pagos masivos", 
      "Masspayment: pagamentos em massa",
      "Masspayment: toplu ödemeler"
    ],
    u: "masspayment.web.money"
  },
  exchanger2: {
    q: "",
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service", "Exchanger: Cambio", 
      "Exchanger: troca",
      "Exchanger: döviz bürosu"
    ],
    u: "exchanger.web.money"
  },
  contracts: {
    q: "",
    t: ["Контракты: регистрация текстов Соглашений", "Contracts: Agreement text registration", "Contractos: Registración de los textos de los convencios", 
      "Contratos: Registro dos textos dos acordos",
      "Kontratlar: Sözleşmelerin metinlerinin kaydı"
    ],
    u: "arbitrage.web.money/asp/bContract.asp"
  },
  arbitrage2: {
    q: "",
    t: ["Арбитраж: разрешение споров", "Arbitrage: Dispute resolution", "Arbitraje: solución de los debates", 
      "Arbitragem: solução das discussões",
      "Arbitraj: anlaşmazlıkların giderilmesi"
    ],
    u: "arbitrage.web.money"
  },
  escrow2: {
    q: "",
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions", "Escrow: transacciones protegidas", 
      "Escrow: transações protegidas",
      "Escrow: korumalı anlaşmalar"
    ],
    u: "escrow.webmoney.ru"
  },
  creditMarket: {
    q: "",
    t: ["Кредитная биржа", "Credit market", "Bolsas de crédito", 
      "Mercado do crédito",
      "Kredi borsası"
    ],
    u: ["credit.web.money", ["", "?lang=en", "?lang=en", 
      "?lang=en",
      "?lang=en"
    ]]
  },
  reporting: {
    q: "",
    t: ["Отчетность", "Reporting", "Presentación de informes", 
      "Relatórios",
      "Raporlama"
    ],
    u: "report.webmoney.ru"
  },
  financialSupport2: {
    q: "",
    t: ["Служба финансовой поддержки", "Financial support", "Servicio del soporte financiero", 
      "Suporte para serviço financeiro",
      "Mali destek hizmeti"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  biz: {
    q: "",
    t: ["Выплаты участникам системы", "Payments to system participants", "-", 
      "-",
      "-"
    ],
    u: "biz.web.money", 
  },
  biz2: {
    q: "",
    t: ["Прием платежей", "Accepting payments", "-", 
      "-",
      "-"
    ],
    u: "biz.web.money"
  },
  // =========================
  // Для бизнеса (3)
  // =========================
  shareholder2: {
    q: "",
    t: ["Shareholder: вложение средств", "Shareholder: Investments", "Shareholder: usar fondos", 
      "Shareholder: utilização de fundos",
      "Shareholder: sermaye yatırma"
    ],
    u: ["www.shareholder.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en", 
      "?lang=en",
      "?lang=en"
    ]]
  },
  indx2: {
    q: "",
    t: ["INDX: фондовая биржа", "INDX: Stock exchange", "INDX: bolsa de fondos", 
      "INDX: bolsa de fundos",
      "INDX: Borsa"
    ],
    u: "indx.money/about/eth/#"
  },
  debtMarket: {
    q: "",
    t: ["Продажа долгов", "Debt market", "Vender las deudas", 
      "Vender a dívida",
      "Borçların satışı"
    ],
    u: ["debtmart.wmtransfer.com", ["?lang=ru", "?lang=en", "?lang=en", 
      "?lang=en",
      "?lang=en"
    ]]
  },
  capitaller: {
    q: "",
    t: ["Capitaller: управление средствами", "Capitaller: Funds management", "Capitaller: manejar los fondos", 
      "Capitaller: gerir fundos",
      "Capitaller: kaynakların yönetimi"
    ],
    u: ["www.capitaller.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en", 
      "?lang=en",
      "?lang=en"
    ]]
  },
  mentor2: {
    q: "",
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service", "Mentor: control de las tareas", 
      "Mentor: controlar a execução das tarefas",
      "Mentor: görevlerin yürütmesinin kontrolü"
    ],
    u: "mentor.wmtransfer.com"
  },
  secureMail: {
    q: "",
    t: ["Защищенная почта", "Secure mail", "Correspondencia protegída", 
      "Mail protegido",
      "Korumalı posta"
    ],
    u: "mail.wmid.com"
  },
  files2: {
    q: "",
    t: ["Файловое хранилище", "File storage", "Tus archivos", 
      "Seus arquivos",
      "Dosya deposu"
    ],
    u: "files.web.money"
  },
  letterPostingService: {
    q: "",
    t: ["Отправка бумажных писем", "Letter posting service", "Mandar «las» cartas de papel", 
      "Envio de Cartas «em» papel",
      "Hard «copy mektupların» gönderilmesi"
    ],
    u: "letters.wmtransfer.com"
  },
  newsline: {
    q: "",
    t: ["Лента новостей: рассылка", "Newsline: Subscription", "Noticias: boletín", 
      "Notícias: newsletter",
      "Haber dizisi: gönderim"
    ],
    u: "subscribe.web.money/subscribe"
  },
  programInterfaces: {
    q: "",
    t: ["API: программные интерфейсы", "API: Program interfaces", "API: aplicaciónes", 
      "API: aplicações",
      "API: program arayüzleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/api.shtml"]
  },
  stylesAndDesign: {
    q: "",
    t: ["Дизайн и стили", "Styles and design", "Diseño y estilos", 
      "Desenho e estilos",
      "Dizayn ve stiller"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/logos.shtml"]
  },
  technicalSupport2: {
    q: "",
    t: ["Техническая поддержка", "Technical support", "Soporte técnico", 
      "Suporte técnico",
      "Teknik destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  // =========================
  // Помощь (1)
  // =========================
  registration: {
    q: "",
    t: ["Регистрация", "Registration", "Registración", 
      "Inscrição",
      "Kayıt"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/registration.shtml"]
  },
  inoutOptions: {
    q: "",
    t: ["Выбор способа ввода/вывода", "Choosing a method for input/output", "Seleccionar el metodo de recarga/retiro", 
      "Selecione o método de recarga / retirada",
      "Para yatırma/çekme yönteminin seçimi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/inout_options.shtml"]
  },
  acceptPayments: {
    q: "",
    t: ["Выбор способа приема платежей", "Choosing a method for accepting payments", "Buscar los métodos de recarga", 
      "Pesquisa métodos de recarga",
      "Ödeme kabul etme yönteminin seçimi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/accept_payments.shtml"]
  },
  repayment: {
    q: "",
    t: ["Возврат займа на Debt", "Repayment", "-", 
      "-",
      "-"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment.shtml"]
  },
  repaymentCPurse: {
    q: "",
    t: ["Возврат кредита с С кошелька", "Repayment c purse", "-", 
      "-",
      "-"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment_c.shtml"]
  },
  controlRecovery: {
    q: "",
    t: ["Восстановление контроля", "Control recovery", "Recuperar el control", 
      "Recuperar o controle",
      "Parolanın onarılması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/recovery.shtml"]
  },
  keepers: {
    q: "",
    t: ["Выбор способа управления", "Choosing an account management method", "Seleccionar el metodo para manejar las cuentas", 
      "Selecione o método para lidar com as contas",
      "Yönetim şeklinin seçimi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/keepers.shtml"]
  },
  poluchenieAttestata: {
    q: "",
    t: ["Получение аттестата", "Receiving WebMoney passport", "Recibir el atestado", 
      "Receber certificado",
      "Belge alma"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/poluchenie_attestata.shtml"]
  },
  operationLimits: {
    q: "",
    t: ["Лимиты на операции", "Operation limits", "Límites de la operación", 
      "Limites da operação",
      "İşlem limitleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/operation_limits.shtml"]
  },
  changeData: {
    q: "",
    t: ["Изменение регистрационных данных", "Change data", "-", 
      "-",
      "-"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_data.shtml"]
  },
  pretenzIIski: {
    q: "",
    t: ["Подача претензий и исков", "Submitting claims and complaints", "Hacer una pretensión", 
      "Apresentação de queixas e reclamações",
      "Şikayetler ve talepler"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/pretenzi-iski.shtml"]
  },
  annullation: {
    q: "",
    t: ["Отказ в обслуживании", "Annullation", "Denegación del servicio", 
      "Negação de serviço",
      "Servis reddi"
    ],
    u: [constLangs, constUrlHelpGeneral, "/annullation.shtml"]
  },
  deleteWmid: {
    q: "",
    t: ["Порядок удаления WMID", "Delete WMID", "Remover su WMID", 
      "Remover o seu WMID",
      "-"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/delete_wmid.shtml"]
  },
  // =========================
  // Помощь (2)
  // =========================
  changeBl: {
    q: "",
    t: ["Изменение BL", "Changing BL", "Cambio de BL", 
      "Troca de BL",
      "BL değişikliği"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_bl.shtml"]
  },
  actionBlock: {
    q: "",
    t: ["Действия при блокировке кошелька", "Action block", "-", 
      "-",
      "-"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/action_block.shtml"]
  },
  photoId: {
    q: "",
    t: ["Создание PhotoID", "Create PhotoID", "-", 
      "-",
      "-"
    ],
    u: "wiki.web.money/projects/webmoney/wiki/PhotoID"
  },
  nevozvratDebt: {
    q: "",
    t: ["Невозвраты займов на Debt", "Loan defaults", "No hay reembolso de prestamos (se dice asi y también existe desembolso) en Debt", 
      "Não reembolso de empréstimos da dívida",
      "Debt’deki borçların iade edilmemesi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/nevozvrat_debt.shtml"]
  },
  transactionHistory: {
    q: "",
    t: ["Получение выписки операций", "Getting transacion history", "Historal de Transacciones", 
      "Histórico de Transações",
      "İşlem ekstrelerinin alınması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/transaction_history.shtml"]
  },
  crowdfunding2: {
    q: "",
    t: ["Сбор средств", "Crowdfunding", "Cobro de fondos", 
      "Recolha de fundos",
      "Kaynak toplanması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/croudfunding.shtml"]
  },
  exchange: {
    q: "",
    t: ["Обменные операции", "Exchange operations", "Operaciones de cambio", 
      "Operações de câmbio",
      "Döviz işlemleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/exchange.shtml"]
  },
  securityLimits: {
    q: "",
    t: ["Расходные лимиты", "Spending limits", "Límites de egresos", 
      "A limitação das despesas",
      "Harcama limitleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
  },
  tabu: {
    q: "",
    t: ["Запрещенные виды деятельности", "Restricted activities", "tipos de actividades prohibidas", 
      "Tipos de atividades proibidas",
      "Yasaklanan faaliyetler"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/tabu.shtml"]
  },
  bankCards: {
    q: "",
    t: ["Банковские карты", "Bank cards", "Tarjetas bancarias", 
      "Cartões bancários",
      "-"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/cards.shtml"]
  },
  checkCorr: {
    q: "",
    t: ["Проверка корреспондентов", "Correspondent check", "comprobar los contactos", 
      "Verificação de interlocutores",
      "Yazışmaların kontrolü"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/check_corr.shtml"]
  },
  automats: {
    q: "",
    t: ["Бюджетные и расчетные автоматы", "Budget and transact automation tools", "Budget Automation Tool", 
      "Maquinas de orçamento e liquidação",
      "Bütçe ve hesaplama makinaları"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/automats.shtml"]
  },
  // =========================
  // Помощь (3)
  // =========================
  downloadSoftware3: {
    q: "",
    t: ["Где скачать приложения", "Download software", "Descargar software", 
      "Download de software",
      "Yazılım"
    ],
    u: ["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", 
      "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software",
      "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"
    ]
  },
  AskQuestion: {
    q: "",
    t: ["Задать вопрос", "Ask a question", "Hacer una pregunta", 
      "Faça uma pergunta",
      "Soru sormak"
    ],
    u: ["support.wmtransfer.com", ["", "lang=eng", "lang=eng", 
      "lang=eng",
      "lang=eng"
    ]]
  },
  legalEntityWmid: {
    q: "",
    t: ["Использование WMID юридическими лицами", "Usage of WMID by legal entities", "Uso del WMID por personas juridicas", 
      "Uso de WMID por entidades jurídicas",
      "WMID’nin tüzel kişiler tarafından kullanılması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/legal_entity_wmid.shtml"]
  },
  videoTutorials: {
    q: "",
    t: ["Обучающие видео", "Video tutorials", "Video Tutorial", 
      "Tutorial em vídeo",
      "Videolu eğitim"
    ],
    u: ["www.youtube.com/playlist?list=PLxnBovRWjSvuQF841-x7onqshYgCzkxkU", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL", 
      "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL",
      "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL"
    ]
  },
  financialSupport3: {
    q: "",
    t: ["Финансовая поддержка", "Financial support", "-", 
      "Suporte Financeiro",
      "Mali destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport3: {
    q: "",
    t: ["Техническая поддержка", "Technical support", "Soporte técnico", 
      "Suporte técnico",
      "Teknik destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  searchPayment: {
    q: "",
    t: ["Розыск платежей", "Search payment", "Buscar pagos", 
      "Pesquisar pagamentos",
      "Ödeme arama"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/search_pay.shtml"]
  },
  interactiveMap: {
    q: "",
    t: ["Интерактивная карта", "Interactive map", "Mapa interactivo", 
      "Mapa interativo",
      "İnteraktif harita"
    ],
    u: "geo.web.money"
  },
  wiki2: {
    t: "Wiki",
    u: ["wiki.web.money", "wiki.wmtransfer.com/projects/webmoney/wiki/WebMoney_Wiki"]
  },
  forum2: {
    q: "",
    t: ["Форум", "Forum", "Foro", 
      "Fórum",
      "Forum"
    ],
    u: "forum.web.money/index.php"
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