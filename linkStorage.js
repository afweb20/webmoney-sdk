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
    t: ["Краткое описание", "Brief description", "Descripción corta"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/short/index.shtml"]
  },
  purseTypes: {
    t: ["Типы кошельков", "Purse types", "Tipos de monederos"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/wmwallets/index.shtml"]
  },
  purseManagement: {
    t: ["Управление кошельками", "Purse management", "Metodos para manejar las cuentas"],
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
    t: ["Keeper для социальных сетей", "Keeper for social networks", "Keeper para las redes sociales"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/social.shtml"]
  },
  systemFees: {
    t: ["Тарифы системы", "System fees", "Tarifas del sistema"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/rates/index.shtml"]
  },
  statistics: {
    t: ["Статистика", "Statistics", "Estadísticas"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/index.shtml"]
  },
  securityAndPrivacy: {
    t: ["Безопасность и конфиденциальность", "Security and privacy", "Seguridad"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/security.shtml"]
  },
  news: {
    t: ["Новости", "News", "Noticias"],
    u: ["news.wmtransfer.com",["", "/en"]]
  },
  // =========================
  // О системе (2)
  // =========================
  legalInformation: {
    t: ["Юридическая информация", "Legal information", "Información legal"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/index.shtml"]
  },
  webMoneyTransferCode: {
    t: ["Кодекс системы WebMoney Transfer", "WebMoney Transfer Code", "Código del sistema WebMoney Transfer"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/codex.shtml"]
  },
  propertyRightsTransferAgreement: {
    t: ["Соглашение о трансфере имущественных прав", "Property rights transfer agreement", "Acuerdo de transferencia de los derechos de bienes"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/transfert.shtml"]
  },
  amlAgreement: {
    t: ["Соглашение о борьбе с незаконной торговлей", "AML Agreement", "Acuerdo de la lucha contra la venta ilegal"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/illegaltrade.shtml"]
  },
  creditServiceAgreement: {
    t: ["Соглашение об использовании кредитного сервиса", "Credit service agreement", "Acuerdo del uso del servicio de crédito"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/credit_service.shtml"]
  },
  wmPursesAgreement: {
    t: ["Соглашения по WM-кошелькам", "WM purses agreement", "Acuerdo de los monederos WM"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/garants/index.shtml"]
  },
  warning: {
    t: ["Предупреждение", "Warning", "Atención"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/warning.shtml"]
  },
  // =========================
  // О системе (3)
  // =========================
  systemSubjects: {
    t: ["Субъекты системы", "System subjects", "Sujetos del sistema"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/index.shtml"]
  },
  ownerAndAdministrator: {
    t: ["Владелец и администратор", "Owner and administrator", "Administrador"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/administrator.shtml"]
  },
  wmPurseGuarantors: {
    t: ["Гаранты по WM-кошелькам", "WM purse guarantors", "Garantes de los monederos"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/guarantors/index.shtml"]
  },
  contactsForLegalRequests: {
    t: ["Контакты для запросов от судебных органов", "Contacts for legal requests", "Contactos para demandas jurídicas"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/official.shtml"]
  },
  // =========================
  // О системе (4)
  // =========================
  registrars: {
    t: ["Регистраторы", "Registrars", "Registradores"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/registrators.shtml"]
  },
  financialSupport: {
    t: ["Финансовая поддержка", "Financial support", "Soporte financiero"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport: {
    t: ["Техническая поддержка", "Technical support", "Soporte técnico"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  cooperation: {
    t: ["Сотрудничество", "Cooperation", "Colaboración"],
    d: constAllDomainTypes,
    u: [constLangs, "/cooperation/merchants.shtml"]
  },
  forum: {
    t: ["Форум", "Forum", "Foro"],
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
    t: ["Скачать приложения", "Download software", "Descargar software"],
    u: [["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]]
  },
  // =========================
  // Частным лицам (1)
  // =========================
  topUpCash: {
    t: ["Наличными", "Cash", "Recargar"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#cash"] // TODO - проверить эту ссылку, отличается на es
  },
  topUpBankAccount: {
    t: ["С банковского счета", "Bank account", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#bank"]
  },
  topUpEMoney: {
    t: ["Электронными деньгами", "E-money", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#emoney"]
  },
  topUpPaymentTerminat: {
    t: ["Через терминал", "Payment terminal", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#terminal"]
  },
  topUpMoneyTransfer: {
    t: ["Денежным переводом", "Money transfer", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#perevod"]
  },
  consultations: {
    t: ["Платные видеоконсультации", "Paid video consultations", "-"],
    u: "events.web.money/consultations"
  },
  softactivation: {
    t: ["Продажа цифровых товаров", "Sale of digital goods", "-"],
    u: "softactivation.webmoney.ru"
  },
  indx: {
    t: ["INDX: фондовая биржа", "INDX: Stock exchange", "INDX: bolsa de fondos"],
    u: "indx.money/about"
  },
  publicant: {
    t: ["Publicant: опубликовать книгу", "Publicant: Publish a book", "Publicant: publicar el libro"],
    u: "publicant.webmoney.ru"
  },
  mestkom: {
    t: ["Mestcom: продажа рекламы", "Mestcom: Sell Ads", "Mestcom: vender los anuncios"],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox: {
    t: ["CashBox: оплата за действия", "CashBox: Complete activities on a website", "CashBox: pagar por las acciones en el sitio web"],
    u: "cashbox.ru"
  },
  shareholder: {
    t: ["Shareholder: дивиденды и торговля долями", "Shareholder: Dividends and share trading", "Shareholder: dividendos"],
    u: ["www.shareholder.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en"]]
  },
  debtmart: {
    t: ["DebtMart: Биржа долгов", "Debt market", "Bolsa de deudas"],
    u: ["debtmart.wmtransfer.com", ["", "?lang=en"]]
  },
  video: {
    t: ["Видеозвонки и онлайн-трансляции", "Video calls and online broadcasts", "-"],
    u: "video.webmoney.ru"
  },
  memo: {
    t: ["Управление закладками", "Bookmark management", "-"],
    u: "memo.web.money"
  },
  notes: {
    t: ["Верстка и публикация заметок", "Layout and publication of notes", "-"],
    u: "wmid.com/notes"
  },
  analytics: {
    t: ["Сервис аналитики", "Analytics", "-"],
    u: "analytics.webmoney.ru"
  },
  mail: {
    t: ["Защищенная почта", "Mail", "Correspondencia protegida"],
    u: "wmid.com"
  },
  files: {
    t: ["Файловое хранилище", "File storage", "Archivo"],
    u: ["files.webmoney.ru", ["", "?locale=en", "?locale=en"]]
  },
  mentor: {
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service", "Mentor: control de ejecución de las tareas"],
    u: ["mentor.wmtransfer.com", ["?lang=ru", "?lang=en", "?lang=en"]]
  },
  // =========================
  // Частным лицам (2)
  // =========================
  withdrawCash: {
    t: ["Наличными", "Cash", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#cash"]
  },
  withdrawToBankCard: {
    t: ["На банковскую карту", "To bank card", "A una tarjeta bancaria"],
    u: ["telepay.web.money", ["/ru", "/en", "/en"], "/cards"]
  },
  withdrawBankAccount: {
    t: ["На банковский счет", "Bank account", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#bank"]
  },
  withdrawEmoney: {
    t: ["Электронными деньгами", "E-money", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#emoney"]
  },
  withdrawTransfer: {
    t: ["Денежным переводом", "Money transfer", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#perevod"]
  },
  exchanger: {
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service", "Exchanger: locales de cambio"],
    u: "exchanger.web.money"
  },
  wmCheck: {
    t: ["WM.Check: оплата без регистрации", "WM.Check: Payment without registration", "WM.Check: pagar sin registrarse"],
    u: [["check.webmoney.ru", "check.wmtransfer.com/w/"],["?lang=ru", "?lang=en", "?lang=en"]]
  },
  protectedTransactions: {
    t: ["Переводы с протекцией (платежи в два шага)", "Protected transactions", "Transacciones con protección"],
    u: [["wiki.web.money/projects/webmoney/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%BA%D1%86%D0%B8%D0%B5%D0%B9", "wiki.wmtransfer.com/projects/webmoney/wiki/Protected_payment"]]
  },
  security: {
    t: ["Безопасность", "Security", "Seguiridad"], // в испанской версии не ссылка
    u: "security.web.money/asp/default.asp"
  },
  escrow: {
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions", "Escrow: acciones protegídas"],
    u: "escrow.webmoney.ru"
  },
  enum: {
    t: ["E-Num: безопасная авторизация", "E-Num: Secure authorisation", "E-Num: autorización protegída"],
    u: ["enum.ru",["", "?lang=en", "?lang=en"]]
  },
  operationNotification: {
    t: ["Оповещения об операциях", "Operation notification", "Notificación de las acciones"],
    u: ["notify.webmoney.ru",["", "?lang=eng", "?lang=eng"]]
  },
  purseAccessLimiting: {
    t: ["Ограничение доступа к кошельку", "Purse access limiting", "Restringir el acceso al monedero"],
    u: "security.web.money/asp/setallyip.asp"
  },
  expenseLimitsSetting: {
    t: ["Настройка расходных лимитов", "Expense limits setting", "Configuración de limites"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
  },
  restoringControl: {
    t: ["Восстановление доступа", "Restoring control", "Recuperar el acceso"],
    u: ["key.wmtransfer.com", ["", "/10/NewApp.aspx?lang=en", ""]]
  },
  advisor: {
    t: ["Advisor: отзывы о сайтах", "Advisor: Website reviews", "Advisor: recomendación de los sitios web"],
    u: "advisor.wmtransfer.com"
  },
  // =========================
  // Частным лицам (3)
  // =========================
  mobileCommunications: {
    t: ["Мобильная связь", "Mobile communications", "Telefonía movil"],
    u: ["telepay.web.money", ["/ru", "/en", "/en"], "/mobile"]
  },
  internetAccess: {
    t: ["Доступ в Интернет", "Internet access", "Acceso a internet"],
    u: ["telepay.web.money", ["/ru", "/en", "/en"], "/isp"]
  },
  commercialTv: {
    t: ["Коммерческое телевидение", "Commercial TV", "Televisión comercial"],
    u: ["telepay.web.money", ["/ru", "/en", "/en"], "/tv"]
  },
  publicUtilities: {
    t: ["Коммунальные услуги", "Utilities", "Servicios públicos"],
    u: ["telepay.web.money", ["/ru", "/en", "/en"], "/public-utilities"]
  },
  publicServices: {
    t: ["Государственные услуги, штрафы, налоги", "Public services, fines, taxes", "Servicios estatales, impuestos, multas"],
    u: "payments.webmoney.ru"
  },
  bankAccountPayments: {
    t: ["Платежи по банковским реквизитам", "Bank account payments", "Pagar por requisito bancarios"],
    u: "payments.webmoney.ru/freepay/Step1/4"
  },
  megastock: {
    t: ["Megastock: каталог продавцов", "Megastock: Merchant directory", "Megastock: catálogo de los vendedores"],
    u: [["megastock.ru", "megastock.com"]]
  },
  digisellerCatalogOfdigitalGoods: {
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods", "Digiseller: catálogo de los servicios digitales"],
    u: "digiseller.ru/outside/buygoods.asp"
  },
  antivirus: {
    t: ["Антивирус: программы по подписке", "Antivirus: software subscription", "-"],
    u: [["antivirus.webmoney.ru", "antivirus.wmtransfer.com"]]
  },
  rebills: {
    t: ["Rebills: автоплатежи", "Rebills and recurring payments", "Configuración de los pagos periódicos"],
    u: "rebills.webmoney.ru"
  },
  creditService: {
    t: ["Кредитный сервис", "Credit service", "Servicio de crédito"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/credit_service/about.shtml"]
  },
  debtService: {
    t: ["Долговой cервис", "Loan service", "Sobre el Servicio"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/debt_service/get_loan.shtml"]
  },
  passport: {
    t: ["Аттестация", "Verification", "Atestados"], // TODO в испанкской версиии не ссылка
    u: "passport.web.money"
  },
  receivePassport: {
    t: ["Получить аттестат", "Receive WebMoney passport", "Recibir el atestado"],
    u: "passport.web.money"
  },
  verificationPoints: {
    t: ["Пункты аттестации", "Verification points", "Locales de certificación"],
    u: "passport.web.money/asp/Reglist.asp?rettid=130"
  },
  arbitrage: {
    t: ["Арбитраж", "Arbitrage", "Arbitraje"],
    u: "arbitrage.web.money"
  },
  submitComplaint: {
    t: ["Подать иск", "Submit a complaint", "Entablar demanda"],
    u: "arbitrage.web.money/asp/inewprocess.asp"
  },
  submitClaim: {
    t: ["Подать претензию", "Submit a claim", "Entablar la petición"],
    u: "arbitrage.web.money/asp/newclaims.asp?authtype=1"
  },
  registerContract: {
    t: ["Зарегистрировать контракт", "Register contract", "Registrar el contrato"],
    u: "arbitrage.web.money/asp/bnewcontract.asp"
  },
  // =========================
  // Частным лицам (4)
  // =========================
  charity: {
    t: ["Благотворительность", "Charity", "-"],
    u: "funding.web.money/donations"
  },
  crowdfunding: {
    t: ["Краудфандинг", "Crowdfunding", "-"],
    u: "funding.web.money/crowd"
  },
  groupBuying: {
    t: ["Коллективные покупки", "Group buying", "-"],
    u: "funding.web.money/group"
  },
  eventOrganization: {
    t: ["Организация мероприятий", "Event organization", "-"],
    u: "funding.web.money/tickets"
  },
  virtualCards: {
    t: ["Виртуальные карты Visa и MasterCard", "Virtual cards Visa and MasterCard", "Tarjetas virtuales Visa y MasterCard"],
    u: "cards.web.money"
  },
  plasticCards: {
    t: ["Пластиковые карты Visa и MasterCard", "Plastic cards Visa and MasterCard", "Tarjetas bancarias Visa y MasterCard"],
    u: "cards.web.money"
  },
  moneySend: {
    t: ["Перевод с карты на карту", "MoneySend", "-"], // TODO в испанской версии закомментирован
    u: "moneysend.web.money"
  },
  events: {
    t: ["Деловая сеть", "Business network", "Red de negocio"],
    u: "events.web.money"
  },
  blog: {
    t: ["Новости системы", "System news", "Noticias del sistema"],
    u: "blog.wmtransfer.com"
  },
  geo: {
    t: ["Интерактивная карта", "Interactive map", "Mapa interactivo"],
    u: "geo.web.money"
  },
  wiki: {
    t: "Wiki",
    u: "wiki.web.money"
  },
  purseManagement2: {
    q: "",
    t: ["Управление кошельками", "Purse management", "Manejar los monederos"],
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
    t: ["Скачать приложения", "Download software", "Descargar software"],
    u: ["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]
  },
  // =========================
  // Для бизнеса (1)
  // =========================
  merchant: {
    q: "",
    t: ["Merchant: создать магазин", "Web Merchant Interface", "Merchant: hacer una tienda"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/merchant.shtml"]
  },
  paymentsToBankAccounts: {
    q: "",
    t: ["Прием платежей на банковский счет", "Payments to bank accounts", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/bank.shtml"]
  },
  megastock2: {
    q: "",
    t: ["Megastock: каталог магазинов", "MegaStock: Directory of sites", "Megastock: catálogo de tiendas"],
    u: "megastock.ru"
  },
  digiseller2: {
    q: "",
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods", "Digiseller: catálogo de productos"],
    u: "digiseller.ru/outside/sellgoods.asp"
  },
  funding: {
    q: "",
    t: ["Сбор средств", "Fundraising", "Colecta de los fondos"],
    u: "funding.web.money"
  },
  mestcom2: {
    q: "",
    t: ["Mestcom: продажа рекламы", "Mestcom: Selling Ads", "Mestcom: comprar las publicidades"],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox2: {
    q: "",
    t: ["Cashbox: покупка действий на сайте", "Cashbox: Purchase website activities", "Cashbox: comprar las acciones en el sitio web"],
    u: "cashbox.ru"
  },
  digiseller3: {
    q: "",
    t: ["Digiseller: виджет агентского магазина", "Digiseller: Agent shop widget", "Digiseller: vidget de la tienda de agencia"],
    u: "www.digiseller.ru/outside/agentshop.asp"
  },
  login: {
    q: "",
    t: ["Login: авторизация по WMID", "Login: WMID authorisation", "Login: autorización por WMID"],
    u: "login.wmtransfer.com"
  },
  // =========================
  // Для бизнеса (2)
  // =========================
  masspayment: {
    q: "",
    t: ["Masspayment: массовые выплаты", "Mass Payments", "Masspayment: Pagos masivos"],
    u: "masspayment.web.money"
  },
  exchanger2: {
    q: "",
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service", "Exchanger: Cambio"],
    u: "exchanger.web.money"
  },
  contracts: {
    q: "",
    t: ["Контракты: регистрация текстов Соглашений", "Contracts: Agreement text registration", "Contractos: Registración de los textos de los convencios"],
    u: "arbitrage.web.money/asp/bContract.asp"
  },
  arbitrage2: {
    q: "",
    t: ["Арбитраж: разрешение споров", "Arbitrage: Dispute resolution", "Arbitraje: solución de los debates"],
    u: "arbitrage.web.money"
  },
  escrow2: {
    q: "",
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions", "Escrow: transacciones protegidas"],
    u: "escrow.webmoney.ru"
  },
  creditMarket: {
    q: "",
    t: ["Кредитная биржа", "Credit market", "Bolsas de crédito"],
    u: ["credit.web.money", ["", "?lang=en", "?lang=en"]]
  },
  reporting: {
    q: "",
    t: ["Отчетность", "Reporting", "Presentación de informes"],
    u: "report.webmoney.ru"
  },
  financialSupport2: {
    q: "",
    t: ["Служба финансовой поддержки", "Financial support", "Servicio del soporte financiero"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  biz: {
    q: "",
    t: ["Выплаты участникам системы", "Payments to system participants", "-"],
    u: "biz.web.money", 
  },
  biz2: {
    q: "",
    t: ["Прием платежей", "Accepting payments", "-"],
    u: "biz.web.money"
  },
  // =========================
  // Для бизнеса (3)
  // =========================
  shareholder2: {
    q: "",
    t: ["Shareholder: вложение средств", "Shareholder: Investments", "Shareholder: usar fondos"],
    u: ["www.shareholder.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en"]]
  },
  indx2: {
    q: "",
    t: ["INDX: фондовая биржа", "INDX: Stock exchange", "INDX: bolsa de fondos"],
    u: "indx.money/about/eth/#"
  },
  debtMarket: {
    q: "",
    t: ["Продажа долгов", "Debt market", "Vender las deudas"],
    u: ["debtmart.wmtransfer.com", ["?lang=ru", "?lang=en", "?lang=en"]]
  },
  capitaller: {
    q: "",
    t: ["Capitaller: управление средствами", "Capitaller: Funds management", "Capitaller: manejar los fondos"],
    u: ["www.capitaller.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en"]]
  },
  mentor2: {
    q: "",
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service", "Mentor: control de las tareas"],
    u: "mentor.wmtransfer.com"
  },
  secureMail: {
    q: "",
    t: ["Защищенная почта", "Secure mail", "Correspondencia protegída"],
    u: "mail.wmid.com"
  },
  files2: {
    q: "",
    t: ["Файловое хранилище", "File storage", "Tus archivos"],
    u: "files.web.money"
  },
  letterPostingService: {
    q: "",
    t: ["Отправка бумажных писем", "Letter posting service", "Mandar «las» cartas de papel"],
    u: "letters.wmtransfer.com"
  },
  newsline: {
    q: "",
    t: ["Лента новостей: рассылка", "Newsline: Subscription", "Noticias: boletín"],
    u: "subscribe.web.money/subscribe"
  },
  programInterfaces: {
    q: "",
    t: ["API: программные интерфейсы", "API: Program interfaces", "API: aplicaciónes"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/api.shtml"]
  },
  stylesAndDesign: {
    q: "",
    t: ["Дизайн и стили", "Styles and design", "Diseño y estilos"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/logos.shtml"]
  },
  technicalSupport2: {
    q: "",
    t: ["Техническая поддержка", "Technical support", "Soporte técnico"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  // =========================
  // Помощь (1)
  // =========================
  registration: {
    q: "",
    t: ["Регистрация", "Registration", "Registración"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/registration.shtml"]
  },
  inoutOptions: {
    q: "",
    t: ["Выбор способа ввода/вывода", "Choosing a method for input/output", "Seleccionar el metodo de recarga/retiro"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/inout_options.shtml"]
  },
  acceptPayments: {
    q: "",
    t: ["Выбор способа приема платежей", "Choosing a method for accepting payments", "Buscar los métodos de recarga"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/accept_payments.shtml"]
  },
  repayment: {
    q: "",
    t: ["Возврат займа на Debt", "Repayment", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment.shtml"]
  },
  repaymentCPurse: {
    q: "",
    t: ["Возврат кредита с С кошелька", "Repayment c purse", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment_c.shtml"]
  },
  controlRecovery: {
    q: "",
    t: ["Восстановление контроля", "Control recovery", "Recuperar el control"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/recovery.shtml"]
  },
  keepers: {
    q: "",
    t: ["Выбор способа управления", "Choosing an account management method", "Seleccionar el metodo para manejar las cuentas"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/keepers.shtml"]
  },
  poluchenieAttestata: {
    q: "",
    t: ["Получение аттестата", "Receiving WebMoney passport", "Recibir el atestado"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/poluchenie_attestata.shtml"]
  },
  operationLimits: {
    q: "",
    t: ["Лимиты на операции", "Operation limits", "Límites de la operación"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/operation_limits.shtml"]
  },
  changeData: {
    q: "",
    t: ["Изменение регистрационных данных", "Change data", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_data.shtml"]
  },
  pretenzIIski: {
    q: "",
    t: ["Подача претензий и исков", "Submitting claims and complaints", "Hacer una pretensión"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/pretenzi-iski.shtml"]
  },
  annullation: {
    q: "",
    t: ["Отказ в обслуживании", "Annullation", "Denegación del servicio"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/annullation.shtml"]
  },
  deleteWmid: {
    q: "",
    t: ["Порядок удаления WMID", "Delete WMID", "Remover su WMID"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/delete_wmid.shtml"]
  },
  // =========================
  // Помощь (2)
  // =========================
  changeBl: {
    q: "",
    t: ["Изменение BL", "Changing BL", "Cambio de BL"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_bl.shtml"]
  },
  actionBlock: {
    q: "",
    t: ["Действия при блокировке кошелька", "Action block", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/action_block.shtml"]
  },
  photoId: {
    q: "",
    t: ["Создание PhotoID", "Create PhotoID", "-"],
    u: "wiki.web.money/projects/webmoney/wiki/PhotoID"
  },
  nevozvratDebt: {
    q: "",
    t: ["Невозвраты займов на Debt", "Loan defaults", "No hay reembolso de prestamos (se dice asi y también existe desembolso) en Debt"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/nevozvrat_debt.shtml"]
  },
  transactionHistory: {
    q: "",
    t: ["Получение выписки операций", "Getting transacion history", "Historal de Transacciones"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/transaction_history.shtml"]
  },
  crowdfunding2: {
    q: "",
    t: ["Сбор средств", "Crowdfunding", "Cobro de fondos"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/croudfunding.shtml"]
  },
  exchange: {
    q: "",
    t: ["Обменные операции", "Exchange operations", "Operaciones de cambio"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/exchange.shtml"]
  },
  securityLimits: {
    q: "",
    t: ["Расходные лимиты", "Spending limits", "Límites de egresos"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
  },
  tabu: {
    q: "",
    t: ["Запрещенные виды деятельности", "Restricted activities", "tipos de actividades prohibidas"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/tabu.shtml"]
  },
  bankCards: {
    q: "",
    t: ["Банковские карты", "Bank cards", "Tarjetas bancarias"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/cards.shtml"]
  },
  checkCorr: {
    q: "",
    t: ["Проверка корреспондентов", "Correspondent check", "comprobar los contactos"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/check_corr.shtml"]
  },
  automats: {
    q: "",
    t: ["Бюджетные и расчетные автоматы", "Budget and transact automation tools", "Budget Automation Tool"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/automats.shtml"]
  },
  // =========================
  // Помощь (3)
  // =========================
  downloadSoftware3: {
    q: "",
    t: ["Где скачать приложения", "Download software", "Descargar software"],
    u: ["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]
  },
  AskQuestion: {
    q: "",
    t: ["Задать вопрос", "Ask a question", "Hacer una pregunta"],
    u: ["support.wmtransfer.com", ["", "lang=eng", "lang=eng"]]
  },
  legalEntityWmid: {
    q: "",
    t: ["Использование WMID юридическими лицами", "Usage of WMID by legal entities", "Uso del WMID por personas juridicas"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/legal_entity_wmid.shtml"]
  },
  videoTutorials: {
    q: "",
    t: ["Обучающие видео", "Video tutorials", "Video Tutorial"],
    u: ["www.youtube.com/playlist?list=PLxnBovRWjSvuQF841-x7onqshYgCzkxkU", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL"]
  },
  financialSupport3: {
    q: "",
    t: ["Финансовая поддержка", "Financial support", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport3: {
    q: "",
    t: ["Техническая поддержка", "Technical support", "Soporte técnico"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  searchPayment: {
    q: "",
    t: ["Розыск платежей", "Search payment", "Buscar pagos"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/search_pay.shtml"]
  },
  interactiveMap: {
    q: "",
    t: ["Интерактивная карта", "Interactive map", "Mapa interactivo"],
    u: "geo.web.money"
  },
  wiki2: {
    t: "Wiki",
    u: ["wiki.web.money", "wiki.wmtransfer.com/projects/webmoney/wiki/WebMoney_Wiki"]
  },
  forum2: {
    q: "",
    t: ["Форум", "Forum", "Foro"],
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

export default function (options, key) {

  var link = {
    title: "title_" + key + "_" + options.lang,
    url: "url_" + key + "_" + options.lang
  };

  var linkStorageItem = linkStorage[key];

  if (linkStorageItem != null) {

    var title = getLangValue(linkStorageItem.t, options.lang);

    var url = "";

    if (linkStorageItem.d != null ) {

      var domainType = null;

      if (containDomainType(linkStorageItem.d, options.domainType)) {

        domainType = options.domainType;
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
        url += getLangValue(linkStorageItem.u[i], options.lang);
      }
    }

    url = "https://" + url;

    link.title = title;
    link.url = url;
    link.q = linkStorageItem.q;
  }

  return link;
}