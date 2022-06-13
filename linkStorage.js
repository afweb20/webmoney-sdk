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
var constLangs = ["rus", "eng"];

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
    t: ["Краткое описание", "Brief description"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/short/index.shtml"]
  },
  purseTypes: {
    t: ["Типы кошельков", "Purse types"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/wmwallets/index.shtml"]
  },
  purseManagement: {
    t: ["Управление кошельками", "Purse management"],
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
    t: ["Keeper для социальных сетей", "Keeper for social networks"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/social.shtml"]
  },
  systemFees: {
    t: ["Тарифы системы", "System fees"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/rates/index.shtml"]
  },
  statistics: {
    t: ["Статистика", "Statistics"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/index.shtml"]
  },
  securityAndPrivacy: {
    t: ["Безопасность и конфиденциальность", "Security and privacy"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/security.shtml"]
  },
  news: {
    t: ["Новости", "News"],
    u: ["news.wmtransfer.com",["", "/en"]]
  },
  // =========================
  // О системе (2)
  // =========================
  legalInformation: {
    t: ["Юридическая информация", "Legal information"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/index.shtml"]
  },
  webMoneyTransferCode: {
    t: ["Кодекс системы WebMoney Transfer", "WebMoney Transfer Code"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/codex.shtml"]
  },
  propertyRightsTransferAgreement: {
    t: ["Соглашение о трансфере имущественных прав", "Property rights transfer agreement"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/transfert.shtml"]
  },
  amlAgreement: {
    t: ["Соглашение о борьбе с незаконной торговлей", "AML Agreement"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/illegaltrade.shtml"]
  },
  creditServiceAgreement: {
    t: ["Соглашение об использовании кредитного сервиса", "Credit service agreement"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/credit_service.shtml"]
  },
  wmPursesAgreement: {
    t: ["Соглашения по WM-кошелькам", "WM purses agreement"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/garants/index.shtml"]
  },
  warning: {
    t: ["Предупреждение"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/warning.shtml"]
  },
  // =========================
  // О системе (3)
  // =========================
  systemSubjects: {
    t: ["Субъекты системы", "System subjects"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/index.shtml"]
  },
  ownerAndAdministrator: {
    t: ["Владелец и администратор", "Owner and administrator"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/administrator.shtml"]
  },
  wmPurseGuarantors: {
    t: ["Гаранты по WM-кошелькам", "WM purse guarantors"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/guarantors/index.shtml"]
  },
  contactsForLegalRequests: {
    t: ["Контакты для запросов от судебных органов", "Contacts for legal requests"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/official.shtml"]
  },
  // =========================
  // О системе (4)
  // =========================
  registrars: {
    t: ["Регистраторы", "Registrars"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/registrators.shtml"]
  },
  financialSupport: {
    t: ["Финансовая поддержка", "Financial support"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport: {
    t: ["Техническая поддержка", "Technical support"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  cooperation: {
    t: ["Сотрудничество", "Cooperation"],
    d: constAllDomainTypes,
    u: [constLangs, "/cooperation/merchants.shtml"]
  },
  forum: {
    t: ["Форум", "Forum"],
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
    t: ["Скачать приложения", "Download software"],
    u: [["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]]
  },
  // =========================
  // Частным лицам (1)
  // =========================
  topUpCash: {
    t: ["Наличными", "Cash"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#cash"]
  },
  topUpBankAccount: {
    t: ["С банковского счета", "Bank account"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#bank"]
  },
  topUpEMoney: {
    t: ["Электронными деньгами", "E-money"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#emoney"]
  },
  topUpPaymentTerminat: {
    t: ["Через терминал", "Payment terminal"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#terminal"]
  },
  topUpMoneyTransfer: {
    t: ["Денежным переводом", "Money transfer"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#perevod"]
  },
  consultations: {
    t: ["Платные видеоконсультации", "Paid video consultations"],
    u: "events.web.money/consultations"
  },
  softactivation: {
    t: ["Продажа цифровых товаров", "Sale of digital goods"],
    u: "softactivation.webmoney.ru"
  },
  indx: {
    t: ["INDX: фондовая биржа", "INDX: Stock exchange"],
    u: "indx.money/about"
  },
  publicant: {
    t: ["Publicant: опубликовать книгу", "Publicant: Publish a book"],
    u: "publicant.webmoney.ru"
  },
  mestkom: {
    t: ["Mestcom: продажа рекламы", "Mestcom: Sell Ads"],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox: {
    t: ["CashBox: оплата за действия", "CashBox: Complete activities on a website"],
    u: "cashbox.ru"
  },
  shareholder: {
    t: ["Shareholder: дивиденды и торговля долями", "Shareholder: Dividends and share trading"],
    u: ["www.shareholder.ru/About.aspx", ["?lang=ru", "?lang=en"]]
  },
  debtmart: {
    t: ["DebtMart: Биржа долгов", "Debt market"],
    u: ["debtmart.wmtransfer.com", ["", "?lang=en"]]
  },
  video: {
    t: ["Видеозвонки и онлайн-трансляции", "Video calls and online broadcasts"],
    u: "video.webmoney.ru"
  },
  memo: {
    t: ["Управление закладками", "Bookmark management"],
    u: "memo.web.money"
  },
  notes: {
    t: ["Верстка и публикация заметок", "Layout and publication of notes"],
    u: "wmid.com/notes"
  },
  analytics: {
    t: ["Сервис аналитики", "Analytics"],
    u: "analytics.webmoney.ru"
  },
  mail: {
    t: ["Защищенная почта", "Mail"],
    u: "wmid.com"
  },
  files: {
    t: ["Файловое хранилище", "File storage"],
    u: ["files.webmoney.ru", ["", "?locale=en"]]
  },
  mentor: {
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service"],
    u: ["mentor.wmtransfer.com", ["?lang=ru", "?lang=en"]]
  },
  // =========================
  // Частным лицам (2)
  // =========================
  withdrawCash: {
    t: ["Наличными", "Cash"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#cash"]
  },
  withdrawToBankCard: {
    t: ["На банковскую карту", "To bank card"],
    u: ["telepay.web.money", ["/ru", "/en"], "/cards"]
  },
  withdrawBankAccount: {
    t: ["На банковский счет", "Bank account"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#bank"]
  },
  withdrawEmoney: {
    t: ["Электронными деньгами", "E-money"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#emoney"]
  },
  withdrawTransfer: {
    t: ["Денежным переводом", "Money transfer"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#perevod"]
  },
  exchanger: {
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service"],
    u: "exchanger.web.money"
  },
  wmCheck: {
    t: ["WM.Check: оплата без регистрации", "WM.Check: Payment without registration"],
    u: [["check.webmoney.ru", "check.wmtransfer.com/w/"],["?lang=ru", "?lang=en"]]
  },
  protectedTransactions: {
    t: ["Переводы с протекцией (платежи в два шага)", "Protected transactions"],
    u: [["wiki.web.money/projects/webmoney/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%BA%D1%86%D0%B8%D0%B5%D0%B9", "wiki.wmtransfer.com/projects/webmoney/wiki/Protected_payment"]]
  },
  security: {
    t: ["Безопасность", "Security"],
    u: "security.web.money/asp/default.asp"
  },
  escrow: {
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions"],
    u: "escrow.webmoney.ru"
  },
  enum: {
    t: ["E-Num: безопасная авторизация", "E-Num: Secure authorisation"],
    u: ["enum.ru",["", "?lang=en"]]
  },
  operationNotification: {
    t: ["Оповещения об операциях", "Operation notification"],
    u: ["notify.webmoney.ru",["", "?lang=eng"]]
  },
  purseAccessLimiting: {
    t: ["Ограничение доступа к кошельку", "Purse access limiting"],
    u: "security.web.money/asp/setallyip.asp"
  },
  expenseLimitsSetting: {
    t: ["Настройка расходных лимитов", "Expense limits setting"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
  },
  restoringControl: {
    t: ["Восстановление доступа", "Restoring control"],
    u: ["key.wmtransfer.com", ["", "/10/NewApp.aspx?lang=en"]]
  },
  advisor: {
    t: ["Advisor: отзывы о сайтах", "Advisor: Website reviews"],
    u: "advisor.wmtransfer.com"
  },
  // =========================
  // Частным лицам (3)
  // =========================
  mobileCommunications: {
    t: ["Мобильная связь", "Mobile communications"],
    u: ["telepay.web.money", ["/ru", "/en"], "/mobile"]
  },
  internetAccess: {
    t: ["Доступ в Интернет", "Internet access"],
    u: ["telepay.web.money", ["/ru", "/en"], "/isp"]
  },
  commercialTv: {
    t: ["Коммерческое телевидение", "Commercial TV"],
    u: ["telepay.web.money", ["/ru", "/en"], "/tv"]
  },
  publicUtilities: {
    t: ["Коммунальные услуги", "Utilities"],
    u: ["telepay.web.money", ["/ru", "/en"], "/public-utilities"]
  },
  publicServices: {
    t: ["Государственные услуги, штрафы, налоги", "Public services, fines, taxes"],
    u: "payments.webmoney.ru"
  },
  bankAccountPayments: {
    t: ["Платежи по банковским реквизитам", "Bank account payments"],
    u: "payments.webmoney.ru/freepay/Step1/4"
  },
  megastock: {
    t: ["Megastock: каталог продавцов", "Megastock: Merchant directory"],
    u: [["megastock.ru", "megastock.com"]]
  },
  digisellerCatalogOfdigitalGoods: {
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods"],
    u: "digiseller.ru/outside/buygoods.asp"
  },
  antivirus: {
    t: ["Антивирус: программы по подписке", "Antivirus: software subscription"],
    u: [["antivirus.webmoney.ru", "antivirus.wmtransfer.com"]]
  },
  rebills: {
    t: ["Rebills: автоплатежи", "Rebills and recurring payments"],
    u: "rebills.webmoney.ru"
  },
  creditService: {
    t: ["Кредитный сервис", "Credit service"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/credit_service/about.shtml"]
  },
  debtService: {
    t: ["Долговой cервис", "Loan service"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/debt_service/get_loan.shtml"]
  },
  passport: {
    t: ["Аттестация", "Verification"],
    u: "passport.web.money"
  },
  receivePassport: {
    t: ["Получить аттестат", "Receive WebMoney passport"],
    u: "passport.web.money"
  },
  verificationPoints: {
    t: ["Пункты аттестации", "Verification points"],
    u: "passport.web.money/asp/Reglist.asp?rettid=130"
  },
  arbitrage: {
    t: ["Арбитраж", "Arbitrage"],
    u: "arbitrage.web.money"
  },
  submitComplaint: {
    t: ["Подать иск", "Submit a complaint"],
    u: "arbitrage.web.money/asp/inewprocess.asp"
  },
  submitClaim: {
    t: ["Подать претензию", "Submit a claim"],
    u: "arbitrage.web.money/asp/newclaims.asp?authtype=1"
  },
  registerContract: {
    t: ["Зарегистрировать контракт", "Register contract"],
    u: "arbitrage.web.money/asp/bnewcontract.asp"
  },
  // =========================
  // Частным лицам (4)
  // =========================
  charity: {
    t: ["Благотворительность", "Charity"],
    u: "funding.web.money/donations"
  },
  crowdfunding: {
    t: ["Краудфандинг", "Crowdfunding"],
    u: "funding.web.money/crowd"
  },
  groupBuying: {
    t: ["Коллективные покупки", "Group buying"],
    u: "funding.web.money/group"
  },
  eventOrganization: {
    t: ["Организация мероприятий", "Event organization"],
    u: "funding.web.money/tickets"
  },
  virtualCards: {
    t: ["Виртуальные карты Visa и MasterCard", "Virtual cards Visa and MasterCard"],
    u: "cards.web.money"
  },
  plasticCards: {
    t: ["Пластиковые карты Visa и MasterCard", "Plastic cards Visa and MasterCard"],
    u: "cards.web.money"
  },
  moneySend: {
    t: ["Перевод с карты на карту", "MoneySend"],
    u: "moneysend.web.money"
  },
  events: {
    t: ["Деловая сеть", "Business network"],
    u: "events.web.money"
  },
  blog: {
    t: ["Новости системы", "System news"],
    u: "blog.wmtransfer.com"
  },
  geo: {
    t: ["Интерактивная карта", "Interactive map"],
    u: "geo.web.money"
  },
  wiki: {
    t: "Wiki",
    u: "wiki.web.money"
  },
  purseManagement2: {
    q: "",
    t: ["Управление кошельками", "Purse management"],
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
    t: ["Скачать приложения", "Download software"],
    u: ["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]
  },
  // =========================
  // Для бизнеса (1)
  // =========================
  merchant: {
    q: "",
    t: ["Merchant: создать магазин", "Web Merchant Interface"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/merchant.shtml"]
  },
  paymentsToBankAccounts: {
    q: "",
    t: ["Прием платежей на банковский счет", "Payments to bank accounts"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/bank.shtml"]
  },
  megastock2: {
    q: "",
    t: ["Megastock: каталог магазинов", "MegaStock: Directory of sites"],
    u: "megastock.ru"
  },
  digiseller2: {
    q: "",
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods"],
    u: "digiseller.ru/outside/sellgoods.asp"
  },
  funding: {
    q: "",
    t: ["Сбор средств", "Fundraising"],
    u: "funding.web.money"
  },
  mestcom2: {
    q: "",
    t: ["Mestcom: продажа рекламы", "Mestcom: Selling Ads"],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox2: {
    q: "",
    t: ["Cashbox: покупка действий на сайте", "Cashbox: Purchase website activities"],
    u: "cashbox.ru"
  },
  digiseller3: {
    q: "",
    t: ["Digiseller: виджет агентского магазина", "Digiseller: Agent shop widget"],
    u: "www.digiseller.ru/outside/agentshop.asp"
  },
  login: {
    q: "",
    t: ["Login: авторизация по WMID", "Login: WMID authorisation"],
    u: "login.wmtransfer.com"
  },
  // =========================
  // Для бизнеса (2)
  // =========================
  masspayment: {
    q: "",
    t: ["Masspayment: массовые выплаты", "Mass Payments"],
    u: "masspayment.web.money"
  },
  exchanger2: {
    q: "",
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service"],
    u: "exchanger.web.money"
  },
  contracts: {
    q: "",
    t: ["Контракты: регистрация текстов Соглашений", "Contracts: Agreement text registration"],
    u: "arbitrage.web.money/asp/bContract.asp"
  },
  arbitrage2: {
    q: "",
    t: ["Арбитраж: разрешение споров", "Arbitrage: Dispute resolution"],
    u: "arbitrage.web.money"
  },
  escrow2: {
    q: "",
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions"],
    u: "escrow.webmoney.ru"
  },
  creditMarket: {
    q: "",
    t: ["Кредитная биржа", "Credit market"],
    u: ["credit.web.money", ["", "?lang=en"]]
  },
  reporting: {
    q: "",
    t: ["Отчетность", "Reporting"],
    u: "report.webmoney.ru"
  },
  financialSupport2: {
    q: "",
    t: ["Служба финансовой поддержки", "Financial support"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  biz: {
    q: "",
    t: ["Выплаты участникам системы", "Payments to system participants"],
    u: "biz.web.money"
  },
  biz2: {
    q: "",
    t: ["Прием платежей", "Accepting payments"],
    u: "biz.web.money"
  },
  // =========================
  // Для бизнеса (3)
  // =========================
  shareholder2: {
    q: "",
    t: ["Shareholder: вложение средств", "Shareholder: Investments"],
    u: ["www.shareholder.ru/About.aspx", ["?lang=ru", "?lang=en"]]
  },
  indx2: {
    q: "",
    t: ["INDX: фондовая биржа", "INDX: Stock exchange"],
    u: "indx.money/about/eth/#"
  },
  debtMarket: {
    q: "",
    t: ["Продажа долгов", "Debt market"],
    u: ["debtmart.wmtransfer.com", ["?lang=ru", "?lang=en"]]
  },
  capitaller: {
    q: "",
    t: ["Capitaller: управление средствами", "Capitaller: Funds management"],
    u: ["www.capitaller.ru/About.aspx", ["?lang=ru", "?lang=en"]]
  },
  mentor2: {
    q: "",
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service"],
    u: "mentor.wmtransfer.com"
  },
  secureMail: {
    q: "",
    t: ["Защищенная почта", "Secure mail"],
    u: "mail.wmid.com"
  },
  files2: {
    q: "",
    t: ["Файловое хранилище", "File storage"],
    u: "files.web.money"
  },
  letterPostingService: {
    q: "",
    t: ["Отправка бумажных писем", "Letter posting service"],
    u: "letters.wmtransfer.com"
  },
  newsline: {
    q: "",
    t: ["Лента новостей: рассылка", "Newsline: Subscription"],
    u: "subscribe.web.money/subscribe"
  },
  programInterfaces: {
    q: "",
    t: ["API: программные интерфейсы", "API: Program interfaces"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/api.shtml"]
  },
  stylesAndDesign: {
    q: "",
    t: ["Дизайн и стили", "Styles and design"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/logos.shtml"]
  },
  technicalSupport2: {
    q: "",
    t: ["Техническая поддержка", "Technical support"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  // =========================
  // Помощь (1)
  // =========================
  registration: {
    q: "",
    t: ["Регистрация", "Registration"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/registration.shtml"]
  },
  inoutOptions: {
    q: "",
    t: ["Выбор способа ввода/вывода", "Choosing a method for input/output"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/inout_options.shtml"]
  },
  acceptPayments: {
    q: "",
    t: ["Выбор способа приема платежей", "Choosing a method for accepting payments"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/accept_payments.shtml"]
  },
  repayment: {
    q: "",
    t: ["Возврат займа на Debt", "Repayment"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment.shtml"]
  },
  repaymentCPurse: {
    q: "",
    t: ["Возврат кредита с С кошелька", "Repayment c purse"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment_c.shtml"]
  },
  controlRecovery: {
    q: "",
    t: ["Восстановление контроля", "Control recovery"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/recovery.shtml"]
  },
  keepers: {
    q: "",
    t: ["Выбор способа управления", "Choosing an account management method"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/keepers.shtml"]
  },
  poluchenieAttestata: {
    q: "",
    t: ["Получение аттестата", "Receiving WebMoney passport"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/poluchenie_attestata.shtml"]
  },
  operationLimits: {
    q: "",
    t: ["Лимиты на операции", "Operation limits"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/operation_limits.shtml"]
  },
  changeData: {
    q: "",
    t: ["Изменение регистрационных данных", "Change data"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_data.shtml"]
  },
  pretenzIIski: {
    q: "",
    t: ["Подача претензий и исков", "Submitting claims and complaints"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/pretenzi-iski.shtml"]
  },
  annullation: {
    q: "",
    t: ["Отказ в обслуживании", "Annullation"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/annullation.shtml"]
  },
  deleteWmid: {
    q: "",
    t: ["Порядок удаления WMID", "Delete WMID"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/delete_wmid.shtml"]
  },
  // =========================
  // Помощь (2)
  // =========================
  changeBl: {
    q: "",
    t: ["Изменение BL", "Changing BL"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_bl.shtml"]
  },
  actionBlock: {
    q: "",
    t: ["Действия при блокировке кошелька", "Action block"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/action_block.shtml"]
  },
  photoId: {
    q: "",
    t: ["Создание PhotoID", "Create PhotoID"],
    u: "wiki.web.money/projects/webmoney/wiki/PhotoID"
  },
  nevozvratDebt: {
    q: "",
    t: ["Невозвраты займов на Debt", "Loan defaults"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/nevozvrat_debt.shtml"]
  },
  transactionHistory: {
    q: "",
    t: ["Получение выписки операций", "Getting transacion history"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/transaction_history.shtml"]
  },
  crowdfunding2: {
    q: "",
    t: ["Сбор средств", "Crowdfunding"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/croudfunding.shtml"]
  },
  exchange: {
    q: "",
    t: ["Обменные операции", "Exchange operations"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/exchange.shtml"]
  },
  securityLimits: {
    q: "",
    t: ["Расходные лимиты", "Spending limits"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
  },
  tabu: {
    q: "",
    t: ["Запрещенные виды деятельности", "Restricted activities"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/tabu.shtml"]
  },
  bankCards: {
    q: "",
    t: ["Банковские карты", "Bank cards"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/cards.shtml"]
  },
  checkCorr: {
    q: "",
    t: ["Проверка корреспондентов", "Correspondent check"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/check_corr.shtml"]
  },
  automats: {
    q: "",
    t: ["Бюджетные и расчетные автоматы", "Budget and transact automation tools"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/automats.shtml"]
  },
  // =========================
  // Помощь (3)
  // =========================
  downloadSoftware3: {
    q: "",
    t: ["Где скачать приложения", "Download software"],
    u: ["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]
  },
  AskQuestion: {
    q: "",
    t: ["Задать вопрос", "Ask a question"],
    u: ["support.wmtransfer.com", ["", "lang=eng"]]
  },
  legalEntityWmid: {
    q: "",
    t: ["Использование WMID юридическими лицами", "Usage of WMID by legal entities"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/legal_entity_wmid.shtml"]
  },
  videoTutorials: {
    q: "",
    t: ["Обучающие видео", "Video tutorials"],
    u: ["www.youtube.com/playlist?list=PLxnBovRWjSvuQF841-x7onqshYgCzkxkU", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL"]
  },
  financialSupport3: {
    q: "",
    t: ["Финансовая поддержка", "Financial support"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport3: {
    q: "",
    t: ["Техническая поддержка", "Technical support"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  searchPayment: {
    q: "",
    t: ["Розыск платежей", "Search payment"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/search_pay.shtml"]
  },
  interactiveMap: {
    q: "",
    t: ["Интерактивная карта", "Interactive map"],
    u: "geo.web.money"
  },
  wiki2: {
    t: "Wiki",
    u: ["wiki.web.money", "wiki.wmtransfer.com/projects/webmoney/wiki/WebMoney_Wiki"]
  },
  forum2: {
    q: "",
    t: ["Форум", "Forum"],
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