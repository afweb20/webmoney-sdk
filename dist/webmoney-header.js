(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebMoneyHeader"] = factory();
	else
		root["WebMoneyHeader"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./linkStorage.js":
/*!************************!*\
  !*** ./linkStorage.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
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
};
var constAllDomainTypes = [consts.DOMAIN_TYPE_WMTRANSFER, consts.DOMAIN_TYPE_MONEY, consts.DOMAIN_TYPE_RU];
var constLangs = ["rus", "eng", "es"];
var constUrlInformation = "/information";
var constUrlInformationManage = constUrlInformation + "/manage";
var constUrlInformationStatistic = constUrlInformation + "/statistic";
var constUrlInout = "/inout";
var constUrlInoutTopup = constUrlInout + "/topup.shtml";
var constUrlInoutWithdraw = constUrlInout + "/withdraw.shtml";
var constUrlHelp = "/help";
var constUrlHelpStart = constUrlHelp + "/start";
var constUrlHelpTechnical = constUrlHelp + "/technical";
var constUrlHelpGeneral = constUrlHelp + "/general";
var constUrlHelpFinancial = constUrlHelp + "/financial";
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
    t: ["Краткое описание", "Brief description", "Descripción corta", "Descrição curta", "Kısaca tanımlama"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/short/index.shtml"]
  },
  purseTypes: {
    t: ["Типы кошельков", "Purse types", "Tipos de monederos", "Tipos de bolsas", "Cüzdan tipleri"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/wmwallets/index.shtml"]
  },
  purseManagement: {
    t: ["Управление кошельками", "Purse management", "Metodos para manejar las cuentas", "Métodos para gerir contas", "Yönetim yöntemleri"],
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
    t: ["Keeper для социальных сетей", "Keeper for social networks", "Keeper para las redes sociales", "Keeper para as redes sociais", "Sosyal ağlar için Keeper"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationManage, "/social.shtml"]
  },
  systemFees: {
    t: ["Тарифы системы", "System fees", "Tarifas del sistema", "Tarifas do sistema"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformation, "/rates/index.shtml"]
  },
  statistics: {
    t: ["Статистика", "Statistics", "Estadísticas", "Estatística", "İstatistik"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/index.shtml"]
  },
  securityAndPrivacy: {
    t: ["Безопасность и конфиденциальность", "Security and privacy", "Seguridad", "Segurança e Privacidade", "Güvenlik ve gizlilik"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInformationStatistic, "/security.shtml"]
  },
  news: {
    t: ["Новости", "News", "Noticias", "Notícias", "Haberler"],
    u: ["news.wmtransfer.com", ["", "/en"]]
  },
  // =========================
  // О системе (2)
  // =========================
  legalInformation: {
    t: ["Юридическая информация", "Legal information", "Información legal", "Informação jurídica", "Hukuki bilgiler"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/index.shtml"]
  },
  webMoneyTransferCode: {
    t: ["Кодекс системы WebMoney Transfer", "WebMoney Transfer Code", "Código del sistema WebMoney Transfer", "O Código do sistema WebMoney Transfer", "WebMoney Transfer sisteminin Kanunu"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/codex.shtml"]
  },
  propertyRightsTransferAgreement: {
    t: ["Соглашение о трансфере имущественных прав", "Property rights transfer agreement", "Acuerdo de transferencia de los derechos de bienes", "Acordo transerencia dos direitos de propriedade", "Mülkiyet haklarının transferi hakkında anlaşma"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/transfert.shtml"]
  },
  amlAgreement: {
    t: ["Соглашение о борьбе с незаконной торговлей", "AML Agreement", "Acuerdo de la lucha contra la venta ilegal", "Acordo sobre a luta contra a venda ilegal", "Yasadışı ticarete karşı mücadele hakkında anlaşma"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/illegaltrade.shtml"]
  },
  creditServiceAgreement: {
    t: ["Соглашение об использовании кредитного сервиса", "Credit service agreement", "Acuerdo del uso del servicio de crédito", "Acordo sobre o uso do serviço de crédito", "Kredi servisinin kullanılması hakkında anlaşma"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/credit_service.shtml"]
  },
  wmPursesAgreement: {
    t: ["Соглашения по WM-кошелькам", "WM purses agreement", "Acuerdo de los monederos WM", "Acordo sobre WM carteiras", "WM-cüzdanlar ile ilgili anlaşmalar"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/garants/index.shtml"]
  },
  warning: {
    t: ["Предупреждение", "Warning", "Atención", "Atenção", "Uyarı"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlLegal, "/warning.shtml"]
  },
  // =========================
  // О системе (3)
  // =========================
  systemSubjects: {
    t: ["Субъекты системы", "System subjects", "Sujetos del sistema", "Sujeitos do sistema", "Sistemin konuları"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/index.shtml"]
  },
  ownerAndAdministrator: {
    t: ["Владелец и администратор", "Owner and administrator", "Administrador", "Administrador", "Sahibi ve yönetici"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/administrator.shtml"]
  },
  wmPurseGuarantors: {
    t: ["Гаранты по WM-кошелькам", "WM purse guarantors", "Garantes de los monederos", "Garantes das bolsas", "WM-cüzdanların kefilleri"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/guarantors/index.shtml"]
  },
  contactsForLegalRequests: {
    t: ["Контакты для запросов от судебных органов", "Contacts for legal requests", "Contactos para demandas jurídicas", "Contatos para ações judiciais", "Yargı organlarından talep için iletişimler"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/official.shtml"]
  },
  // =========================
  // О системе (4)
  // =========================
  registrars: {
    t: ["Регистраторы", "Registrars", "Registradores", "Registradores", "Kaydediciler"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSubjects, "/registrators.shtml"]
  },
  financialSupport: {
    t: ["Финансовая поддержка", "Financial support", "Soporte financiero", "Apoio Financeiro", "Mali destek"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport: {
    t: ["Техническая поддержка", "Technical support", "Soporte técnico", "Suporte técnico", "Teknik destek"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  cooperation: {
    t: ["Сотрудничество", "Cooperation", "Colaboración", "Colaboração", "Kullanım koşulları"],
    d: constAllDomainTypes,
    u: [constLangs, "/cooperation/merchants.shtml"]
  },
  forum: {
    t: ["Форум", "Forum", "Foro", "Fórum", "Forum"],
    u: "forum.web.money/index.php"
  },
  facebook: {
    t: "Facebook",
    u: "www.facebook.com/webmoneyofficial"
  },
  twitter: {
    t: "Twitter",
    u: ["twitter.com/webmoney_ru", "twitter.com/WebMoneySystem"]
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
    t: ["Скачать приложения", "Download software", "Descargar software", "Download de software", "Yazılım"],
    u: [["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]]
  },
  // =========================
  // Частным лицам (1)
  // =========================
  topUpCash: {
    t: ["Наличными", "Cash", "Recargar", "-", "Nakit olarak"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#cash"] // TODO - проверить эту ссылку, отличается на es

  },
  topUpBankAccount: {
    t: ["С банковского счета", "Bank account", "-", "-", "Banka hesabından"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#bank"]
  },
  topUpEMoney: {
    t: ["Электронными деньгами", "E-money", "-", "-", "Elektronik paralar ile"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#emoney"]
  },
  topUpPaymentTerminat: {
    t: ["Через терминал", "Payment terminal", "-", "-", "Terminalden"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#terminal"]
  },
  topUpMoneyTransfer: {
    t: ["Денежным переводом", "Money transfer", "-", "-", "Para transferi ile"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "#perevod"]
  },
  consultations: {
    t: ["Платные видеоконсультации", "Paid video consultations", "-", "-", "-"],
    u: "events.web.money/consultations"
  },
  softactivation: {
    t: ["Продажа цифровых товаров", "Sale of digital goods", "-", "-", "-"],
    u: "softactivation.webmoney.ru"
  },
  indx: {
    t: ["INDX: фондовая биржа", "INDX: Stock exchange", "INDX: bolsa de fondos", "INDX: bolsa de fundos", "INDX: borsa"],
    u: "indx.money/about"
  },
  publicant: {
    t: ["Publicant: опубликовать книгу", "Publicant: Publish a book", "Publicant: publicar el libro", "Publicant: publicar o livro", "Publicant: kitabı yayınlamak"],
    u: "publicant.webmoney.ru"
  },
  mestkom: {
    t: ["Mestcom: продажа рекламы", "Mestcom: Sell Ads", "Mestcom: vender los anuncios", "Mestcom: venda de publicidade", "Mestcom: reklam satışı"],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox: {
    t: ["CashBox: оплата за действия", "CashBox: Complete activities on a website", "CashBox: pagar por las acciones en el sitio web", "Cashbox: comprar as ações no site", "CashBox: işlem için ödeme"],
    u: "cashbox.ru"
  },
  shareholder: {
    t: ["Shareholder: дивиденды и торговля долями", "Shareholder: Dividends and share trading", "Shareholder: dividendos", "Shareholder: utilização de fundos", "Shareholder: kar payları ve hisse satışı"],
    u: ["www.shareholder.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en", "?lang=en", "?lang=en"]]
  },
  debtmart: {
    t: ["DebtMart: Биржа долгов", "Debt market", "Bolsa de deudas", "Vender a dívida", "DebtMart: Borç borsası"],
    u: ["debtmart.wmtransfer.com", ["", "?lang=en", "?lang=en", "?lang=en", "?lang=en"]]
  },
  video: {
    t: ["Видеозвонки и онлайн-трансляции", "Video calls and online broadcasts", "-", "-", "-"],
    u: "video.webmoney.ru"
  },
  memo: {
    t: ["Управление закладками", "Bookmark management", "-", "-", "-"],
    u: "memo.web.money"
  },
  notes: {
    t: ["Верстка и публикация заметок", "Layout and publication of notes", "-", "-", "-"],
    u: "wmid.com/notes"
  },
  analytics: {
    t: ["Сервис аналитики", "Analytics", "-", "-", "-"],
    u: "analytics.webmoney.ru"
  },
  mail: {
    t: ["Защищенная почта", "Mail", "Correspondencia protegida", "Mail protegido", "Korunmuş posta"],
    u: "wmid.com"
  },
  files: {
    t: ["Файловое хранилище", "File storage", "Archivo", "Seus arquivos", "Dosya deposu"],
    u: ["files.webmoney.ru", ["", "?locale=en", "?locale=en", "?lang=en"]]
  },
  mentor: {
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service", "Mentor: control de ejecución de las tareas", "Mentor: controlar a execução das tarefas", "Mentor: görevleri yürütmesinin kontrolü "],
    u: ["mentor.wmtransfer.com", ["?lang=ru", "?lang=en", "?lang=en", "?lang=en", "?lang=en"]]
  },
  // =========================
  // Частным лицам (2)
  // =========================
  withdrawCash: {
    t: ["Наличными", "Cash", "-", "-", "Nakit olarak"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#cash"]
  },
  withdrawToBankCard: {
    t: ["На банковскую карту", "To bank card", "A una tarjeta bancaria", "Ao cartão bancário", "-"],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/cards"]
  },
  withdrawBankAccount: {
    t: ["На банковский счет", "Bank account", "-", "-", "Banka hesabına"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#bank"]
  },
  withdrawEmoney: {
    t: ["Электронными деньгами", "E-money", "-", "-", "Elektronik paralar ile"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#emoney"]
  },
  withdrawTransfer: {
    t: ["Денежным переводом", "Money transfer", "-", "-", "Para transferi ile"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "#perevod"]
  },
  exchanger: {
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service", "Exchanger: locales de cambio", "Exchanger: lojas de câmbio", "Exchanger: döviz bürosu"],
    u: "exchanger.web.money"
  },
  wmCheck: {
    t: ["WM.Check: оплата без регистрации", "WM.Check: Payment without registration", "WM.Check: pagar sin registrarse", "WM.Check: pagar sem cadastrar-se", "WM.Check: kayıtsız ödeme"],
    u: [["check.webmoney.ru", "check.wmtransfer.com/w/"], ["?lang=ru", "?lang=en", "?lang=en", "?lang=en", "?lang=en"]]
  },
  protectedTransactions: {
    t: ["Переводы с протекцией (платежи в два шага)", "Protected transactions", "Transacciones con protección", "Proteção das Transações", "Korumalı transferler (iki adımda ödemeler)"],
    u: [["wiki.web.money/projects/webmoney/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%BA%D1%86%D0%B8%D0%B5%D0%B9", "wiki.wmtransfer.com/projects/webmoney/wiki/Protected_payment", "http://wiki.webmoney.ru/projects/webmoney/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%BA%D1%86%D0%B8%D0%B5%D0%B9", "http://wiki.webmoney.ru/projects/webmoney/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81_%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%BA%D1%86%D0%B8%D0%B5%D0%B9"]]
  },
  security: {
    t: ["Безопасность", "Security", "Seguiridad"],
    // в испанской версии не ссылка
    u: "security.web.money/asp/default.asp"
  },
  escrow: {
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions", "Escrow: acciones protegídas", "Escrow: ações protegidas", "Escrow: korumalı anlaşmalar"],
    u: "escrow.webmoney.ru"
  },
  enum: {
    t: ["E-Num: безопасная авторизация", "E-Num: Secure authorisation", "E-Num: autorización protegída", "E-Num: autorização protegida", "E-Num: güvenli giriş yapma"],
    u: ["enum.ru", ["", "?lang=en", "?lang=en", "?lang=en"]]
  },
  operationNotification: {
    t: ["Оповещения об операциях", "Operation notification", "Notificación de las acciones", "Ações de notificação", "İşlemler hakkında bildiriler"],
    u: ["notify.webmoney.ru", ["", "?lang=eng", "?lang=eng", "?lang=eng"]]
  },
  purseAccessLimiting: {
    t: ["Ограничение доступа к кошельку", "Purse access limiting", "Restringir el acceso al monedero", "Restringir o acesso à carteira", "Cüzdana erişim sınırlaması"],
    u: "security.web.money/asp/setallyip.asp"
  },
  expenseLimitsSetting: {
    t: ["Настройка расходных лимитов", "Expense limits setting", "Configuración de limites", "Ajuste dos limites", "Harcama limitlerinin ayarlanması"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
  },
  restoringControl: {
    t: ["Восстановление доступа", "Restoring control", "Recuperar el acceso", "Recuperar o acesso", "Erişimin onarılması"],
    u: ["key.wmtransfer.com", ["", "/10/NewApp.aspx?lang=en", "", ""]]
  },
  advisor: {
    t: ["Advisor: отзывы о сайтах", "Advisor: Website reviews", "Advisor: recomendación de los sitios web", "Advisor:recomendação do Websites", "Advisor: siteler hakkında yorumlar"],
    u: "advisor.wmtransfer.com"
  },
  // =========================
  // Частным лицам (3)
  // =========================
  mobileCommunications: {
    t: ["Мобильная связь", "Mobile communications", "Telefonía movil", "Telefonia móvel", "Mobil telefon bağlantısı"],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/mobile"]
  },
  internetAccess: {
    t: ["Доступ в Интернет", "Internet access", "Acceso a internet", "Acesso à internet", "İnternete erişim"],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/isp"]
  },
  commercialTv: {
    t: ["Коммерческое телевидение", "Commercial TV", "Televisión comercial", "televisão comercial", "Ticari televizyonculuk"],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/tv"]
  },
  publicUtilities: {
    t: ["Коммунальные услуги", "Utilities", "Servicios públicos", "Os serviços públicos", "Kamu hizmetleri"],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/public-utilities"]
  },
  publicServices: {
    t: ["Государственные услуги, штрафы, налоги", "Public services, fines, taxes", "Servicios estatales, impuestos, multas", "Serviços governamentais, impostos, multas", "Devlet hizmetleri, cezalar, vergiler"],
    u: "payments.webmoney.ru"
  },
  bankAccountPayments: {
    t: ["Платежи по банковским реквизитам", "Bank account payments", "Pagar por requisito bancarios", "Pagar por exigência bancária", "Banka bilgilerine göre ödemeler"],
    u: "payments.webmoney.ru/freepay/Step1/4"
  },
  megastock: {
    t: ["Megastock: каталог продавцов", "Megastock: Merchant directory", "Megastock: catálogo de los vendedores", "Megastock: catálogo de vendedores", "Megastock: satıcı katalogları"],
    u: [["megastock.ru", "megastock.com"]]
  },
  digisellerCatalogOfdigitalGoods: {
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods", "Digiseller: catálogo de los servicios digitales", "Digiseller: catálogo dos serviços digitais", "Digiseller: dijital ürünler"],
    u: "digiseller.ru/outside/buygoods.asp"
  },
  antivirus: {
    t: ["Антивирус: программы по подписке", "Antivirus: software subscription", "-", "-", "-"],
    u: [["antivirus.webmoney.ru", "antivirus.wmtransfer.com"]]
  },
  rebills: {
    t: ["Rebills: автоплатежи", "Rebills and recurring payments", "Configuración de los pagos periódicos", "Configuração de pagamentos diários", "Peryodik ödemelerin ayarları"],
    u: "rebills.webmoney.ru"
  },
  creditService: {
    t: ["Кредитный сервис", "Credit service", "Servicio de crédito", "Acordo sobre o uso do serviço de crédito", "Kredi servisi"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/credit_service/about.shtml"]
  },
  debtService: {
    t: ["Долговой cервис", "Loan service", "Sobre el Servicio", "Empréstimo", "-", "Borç Servisi"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/debt_service/get_loan.shtml"]
  },
  passport: {
    t: ["Аттестация", "Verification", "Atestados", "Atestados", "Belgelendirme"],
    // TODO в испанкской версиии не ссылка
    u: "passport.web.money"
  },
  receivePassport: {
    t: ["Получить аттестат", "Receive WebMoney passport", "Recibir el atestado", "Receber certificado", "Belge alma"],
    u: "passport.web.money"
  },
  verificationPoints: {
    t: ["Пункты аттестации", "Verification points", "Locales de certificación", "Lojas de certificação", "Belgelendirme noktaları"],
    u: "passport.web.money/asp/Reglist.asp?rettid=130"
  },
  arbitrage: {
    t: ["Арбитраж", "Arbitrage", "Arbitraje", "Arbitrágem", "Arbitraj"],
    u: "arbitrage.web.money"
  },
  submitComplaint: {
    t: ["Подать иск", "Submit a complaint", "Entablar demanda", "Começar demanda", "Dava açma"],
    u: "arbitrage.web.money/asp/inewprocess.asp"
  },
  submitClaim: {
    t: ["Подать претензию", "Submit a claim", "Entablar la petición", "Apresentar uma petição", "İtirazda bulunmak"],
    u: "arbitrage.web.money/asp/newclaims.asp?authtype=1"
  },
  registerContract: {
    t: ["Зарегистрировать контракт", "Register contract", "Registrar el contrato", "Insira o contrato", "Kontratı kaydetmek"],
    u: "arbitrage.web.money/asp/bnewcontract.asp"
  },
  // =========================
  // Частным лицам (4)
  // =========================
  charity: {
    t: ["Благотворительность", "Charity", "-", "-"],
    u: "funding.web.money/donations"
  },
  crowdfunding: {
    t: ["Краудфандинг", "Crowdfunding", "-", "-", "Kraudfanding"],
    u: "funding.web.money/crowd"
  },
  groupBuying: {
    t: ["Коллективные покупки", "Group buying", "-", "-", "Grup satın almalar"],
    u: "funding.web.money/group"
  },
  eventOrganization: {
    t: ["Организация мероприятий", "Event organization", "-", "-", "Etkinliklerin organizasyon"],
    u: "funding.web.money/tickets"
  },
  virtualCards: {
    t: ["Виртуальные карты Visa и MasterCard", "Virtual cards Visa and MasterCard", "Tarjetas virtuales Visa y MasterCard", "Cartões virtuais Visa e MasterCard", "Sanal Visa ve MasterCard kartları"],
    u: "cards.web.money"
  },
  plasticCards: {
    t: ["Пластиковые карты Visa и MasterCard", "Plastic cards Visa and MasterCard", "Tarjetas bancarias Visa y MasterCard", "Visa e MasterCard cartões bancários", "Visa ve MasterCard kredi kartları"],
    u: "cards.web.money"
  },
  moneySend: {
    t: ["Перевод с карты на карту", "MoneySend", "-", "-", "-"],
    // TODO в испанской версии закомментирован
    u: "moneysend.web.money"
  },
  events: {
    t: ["Деловая сеть", "Business network", "Red de negocio", "Rede de Negócios", "İş şebekesi"],
    u: "events.web.money"
  },
  blog: {
    t: ["Новости системы", "System news", "Noticias del sistema", "Notícias do sistema", "Sistem haberleri"],
    u: "blog.wmtransfer.com"
  },
  geo: {
    t: ["Интерактивная карта", "Interactive map", "Mapa interactivo", "Mapa interativo", "İnteraktif harita"],
    u: "geo.web.money"
  },
  wiki: {
    t: "Wiki",
    u: "wiki.web.money"
  },
  purseManagement2: {
    q: "",
    t: ["Управление кошельками", "Purse management", "Manejar los monederos", "Métodos para gerir contas", "Cüzdanların yönetimi"],
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
    t: ["Скачать приложения", "Download software", "Descargar software", "Download de software", "Yazılım"],
    u: ["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]
  },
  // =========================
  // Для бизнеса (1)
  // =========================
  merchant: {
    q: "",
    t: ["Merchant: создать магазин", "Web Merchant Interface", "Merchant: hacer una tienda", "Merchant: criar uma loja", "Merchant: dükkan oluşturmak"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/merchant.shtml"]
  },
  paymentsToBankAccounts: {
    q: "",
    t: ["Прием платежей на банковский счет", "Payments to bank accounts", "-", "Aceitar pagamentos para a conta bancária", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/bank.shtml"]
  },
  megastock2: {
    q: "",
    t: ["Megastock: каталог магазинов", "MegaStock: Directory of sites", "Megastock: catálogo de tiendas", "Megastock: catálogo de lojas", "Megastock: dükkanların kataloğu"],
    u: "megastock.ru"
  },
  digiseller2: {
    q: "",
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods", "Digiseller: catálogo de productos", "Digiseller: catálogo de produtos", "Digiseller: dijital ürünler"],
    u: "digiseller.ru/outside/sellgoods.asp"
  },
  funding: {
    q: "",
    t: ["Сбор средств", "Fundraising", "Colecta de los fondos", "-", "-", "Kaynak toplanması"],
    u: "funding.web.money"
  },
  mestcom2: {
    q: "",
    t: ["Mestcom: продажа рекламы", "Mestcom: Selling Ads", "Mestcom: comprar las publicidades", "Mestcom: venda de publicidade", "Mestcom: reklam satışı"],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox2: {
    q: "",
    t: ["Cashbox: покупка действий на сайте", "Cashbox: Purchase website activities", "Cashbox: comprar las acciones en el sitio web", "Cashbox: comprar as ações no site", "Cashbox: sitede hareketlerin satın alınması"],
    u: "cashbox.ru"
  },
  digiseller3: {
    q: "",
    t: ["Digiseller: виджет агентского магазина", "Digiseller: Agent shop widget", "Digiseller: vidget de la tienda de agencia", "Digiseller: widget da loja de agência", "Digiseller: ajente dükkanı widjeti"],
    u: "www.digiseller.ru/outside/agentshop.asp"
  },
  login: {
    q: "",
    t: ["Login: авторизация по WMID", "Login: WMID authorisation", "Login: autorización por WMID", "Login: permissão pelo WMID", "Login: WMID’ye göre giriş yapma"],
    u: "login.wmtransfer.com"
  },
  // =========================
  // Для бизнеса (2)
  // =========================
  masspayment: {
    q: "",
    t: ["Masspayment: массовые выплаты", "Mass Payments", "Masspayment: Pagos masivos", "Masspayment: pagamentos em massa", "Masspayment: toplu ödemeler"],
    u: "masspayment.web.money"
  },
  exchanger2: {
    q: "",
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service", "Exchanger: Cambio", "Exchanger: troca", "Exchanger: döviz bürosu"],
    u: "exchanger.web.money"
  },
  contracts: {
    q: "",
    t: ["Контракты: регистрация текстов Соглашений", "Contracts: Agreement text registration", "Contractos: Registración de los textos de los convencios", "Contratos: Registro dos textos dos acordos", "Kontratlar: Sözleşmelerin metinlerinin kaydı"],
    u: "arbitrage.web.money/asp/bContract.asp"
  },
  arbitrage2: {
    q: "",
    t: ["Арбитраж: разрешение споров", "Arbitrage: Dispute resolution", "Arbitraje: solución de los debates", "Arbitragem: solução das discussões", "Arbitraj: anlaşmazlıkların giderilmesi"],
    u: "arbitrage.web.money"
  },
  escrow2: {
    q: "",
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions", "Escrow: transacciones protegidas", "Escrow: transações protegidas", "Escrow: korumalı anlaşmalar"],
    u: "escrow.webmoney.ru"
  },
  creditMarket: {
    q: "",
    t: ["Кредитная биржа", "Credit market", "Bolsas de crédito", "Mercado do crédito", "Kredi borsası"],
    u: ["credit.web.money", ["", "?lang=en", "?lang=en", "?lang=en", "?lang=en"]]
  },
  reporting: {
    q: "",
    t: ["Отчетность", "Reporting", "Presentación de informes", "Relatórios", "Raporlama"],
    u: "report.webmoney.ru"
  },
  financialSupport2: {
    q: "",
    t: ["Служба финансовой поддержки", "Financial support", "Servicio del soporte financiero", "Suporte para serviço financeiro", "Mali destek hizmeti"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  biz: {
    q: "",
    t: ["Выплаты участникам системы", "Payments to system participants", "-", "-", "-"],
    u: "biz.web.money"
  },
  biz2: {
    q: "",
    t: ["Прием платежей", "Accepting payments", "-", "-", "-"],
    u: "biz.web.money"
  },
  // =========================
  // Для бизнеса (3)
  // =========================
  shareholder2: {
    q: "",
    t: ["Shareholder: вложение средств", "Shareholder: Investments", "Shareholder: usar fondos", "Shareholder: utilização de fundos", "Shareholder: sermaye yatırma"],
    u: ["www.shareholder.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en", "?lang=en", "?lang=en"]]
  },
  indx2: {
    q: "",
    t: ["INDX: фондовая биржа", "INDX: Stock exchange", "INDX: bolsa de fondos", "INDX: bolsa de fundos", "INDX: Borsa"],
    u: "indx.money/about/eth/#"
  },
  debtMarket: {
    q: "",
    t: ["Продажа долгов", "Debt market", "Vender las deudas", "Vender a dívida", "Borçların satışı"],
    u: ["debtmart.wmtransfer.com", ["?lang=ru", "?lang=en", "?lang=en", "?lang=en", "?lang=en"]]
  },
  capitaller: {
    q: "",
    t: ["Capitaller: управление средствами", "Capitaller: Funds management", "Capitaller: manejar los fondos", "Capitaller: gerir fundos", "Capitaller: kaynakların yönetimi"],
    u: ["www.capitaller.ru/About.aspx", ["?lang=ru", "?lang=en", "?lang=en", "?lang=en", "?lang=en"]]
  },
  mentor2: {
    q: "",
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service", "Mentor: control de las tareas", "Mentor: controlar a execução das tarefas", "Mentor: görevlerin yürütmesinin kontrolü"],
    u: "mentor.wmtransfer.com"
  },
  secureMail: {
    q: "",
    t: ["Защищенная почта", "Secure mail", "Correspondencia protegída", "Mail protegido", "Korumalı posta"],
    u: "mail.wmid.com"
  },
  files2: {
    q: "",
    t: ["Файловое хранилище", "File storage", "Tus archivos", "Seus arquivos", "Dosya deposu"],
    u: "files.web.money"
  },
  letterPostingService: {
    q: "",
    t: ["Отправка бумажных писем", "Letter posting service", "Mandar «las» cartas de papel", "Envio de Cartas «em» papel", "Hard «copy mektupların» gönderilmesi"],
    u: "letters.wmtransfer.com"
  },
  newsline: {
    q: "",
    t: ["Лента новостей: рассылка", "Newsline: Subscription", "Noticias: boletín", "Notícias: newsletter", "Haber dizisi: gönderim"],
    u: "subscribe.web.money/subscribe"
  },
  programInterfaces: {
    q: "",
    t: ["API: программные интерфейсы", "API: Program interfaces", "API: aplicaciónes", "API: aplicações", "API: program arayüzleri"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/api.shtml"]
  },
  stylesAndDesign: {
    q: "",
    t: ["Дизайн и стили", "Styles and design", "Diseño y estilos", "Desenho e estilos", "Dizayn ve stiller"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/logos.shtml"]
  },
  technicalSupport2: {
    q: "",
    t: ["Техническая поддержка", "Technical support", "Soporte técnico", "Suporte técnico", "Teknik destek"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  // =========================
  // Помощь (1)
  // =========================
  registration: {
    q: "",
    t: ["Регистрация", "Registration", "Registración", "Inscrição", "Kayıt"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/registration.shtml"]
  },
  inoutOptions: {
    q: "",
    t: ["Выбор способа ввода/вывода", "Choosing a method for input/output", "Seleccionar el metodo de recarga/retiro", "Selecione o método de recarga / retirada", "Para yatırma/çekme yönteminin seçimi"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/inout_options.shtml"]
  },
  acceptPayments: {
    q: "",
    t: ["Выбор способа приема платежей", "Choosing a method for accepting payments", "Buscar los métodos de recarga", "Pesquisa métodos de recarga", "Ödeme kabul etme yönteminin seçimi"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/accept_payments.shtml"]
  },
  repayment: {
    q: "",
    t: ["Возврат займа на Debt", "Repayment", "-", "-", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment.shtml"]
  },
  repaymentCPurse: {
    q: "",
    t: ["Возврат кредита с С кошелька", "Repayment c purse", "-", "-", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment_c.shtml"]
  },
  controlRecovery: {
    q: "",
    t: ["Восстановление контроля", "Control recovery", "Recuperar el control", "Recuperar o controle", "Parolanın onarılması"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/recovery.shtml"]
  },
  keepers: {
    q: "",
    t: ["Выбор способа управления", "Choosing an account management method", "Seleccionar el metodo para manejar las cuentas", "Selecione o método para lidar com as contas", "Yönetim şeklinin seçimi"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/keepers.shtml"]
  },
  poluchenieAttestata: {
    q: "",
    t: ["Получение аттестата", "Receiving WebMoney passport", "Recibir el atestado", "Receber certificado", "Belge alma"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/poluchenie_attestata.shtml"]
  },
  operationLimits: {
    q: "",
    t: ["Лимиты на операции", "Operation limits", "Límites de la operación", "Limites da operação", "İşlem limitleri"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/operation_limits.shtml"]
  },
  changeData: {
    q: "",
    t: ["Изменение регистрационных данных", "Change data", "-", "-", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_data.shtml"]
  },
  pretenzIIski: {
    q: "",
    t: ["Подача претензий и исков", "Submitting claims and complaints", "Hacer una pretensión", "Apresentação de queixas e reclamações", "Şikayetler ve talepler"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/pretenzi-iski.shtml"]
  },
  annullation: {
    q: "",
    t: ["Отказ в обслуживании", "Annullation", "Denegación del servicio", "Negação de serviço", "Servis reddi"],
    u: [constLangs, constUrlHelpGeneral, "/annullation.shtml"]
  },
  deleteWmid: {
    q: "",
    t: ["Порядок удаления WMID", "Delete WMID", "Remover su WMID", "Remover o seu WMID", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/delete_wmid.shtml"]
  },
  // =========================
  // Помощь (2)
  // =========================
  changeBl: {
    q: "",
    t: ["Изменение BL", "Changing BL", "Cambio de BL", "Troca de BL", "BL değişikliği"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_bl.shtml"]
  },
  actionBlock: {
    q: "",
    t: ["Действия при блокировке кошелька", "Action block", "-", "-", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/action_block.shtml"]
  },
  photoId: {
    q: "",
    t: ["Создание PhotoID", "Create PhotoID", "-", "-", "-"],
    u: "wiki.web.money/projects/webmoney/wiki/PhotoID"
  },
  nevozvratDebt: {
    q: "",
    t: ["Невозвраты займов на Debt", "Loan defaults", "No hay reembolso de prestamos (se dice asi y también existe desembolso) en Debt", "Não reembolso de empréstimos da dívida", "Debt’deki borçların iade edilmemesi"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/nevozvrat_debt.shtml"]
  },
  transactionHistory: {
    q: "",
    t: ["Получение выписки операций", "Getting transacion history", "Historal de Transacciones", "Histórico de Transações", "İşlem ekstrelerinin alınması"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/transaction_history.shtml"]
  },
  crowdfunding2: {
    q: "",
    t: ["Сбор средств", "Crowdfunding", "Cobro de fondos", "Recolha de fundos", "Kaynak toplanması"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/croudfunding.shtml"]
  },
  exchange: {
    q: "",
    t: ["Обменные операции", "Exchange operations", "Operaciones de cambio", "Operações de câmbio", "Döviz işlemleri"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/exchange.shtml"]
  },
  securityLimits: {
    q: "",
    t: ["Расходные лимиты", "Spending limits", "Límites de egresos", "A limitação das despesas", "Harcama limitleri"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
  },
  tabu: {
    q: "",
    t: ["Запрещенные виды деятельности", "Restricted activities", "tipos de actividades prohibidas", "Tipos de atividades proibidas", "Yasaklanan faaliyetler"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/tabu.shtml"]
  },
  bankCards: {
    q: "",
    t: ["Банковские карты", "Bank cards", "Tarjetas bancarias", "Cartões bancários", "-"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/cards.shtml"]
  },
  checkCorr: {
    q: "",
    t: ["Проверка корреспондентов", "Correspondent check", "comprobar los contactos", "Verificação de interlocutores", "Yazışmaların kontrolü"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/check_corr.shtml"]
  },
  automats: {
    q: "",
    t: ["Бюджетные и расчетные автоматы", "Budget and transact automation tools", "Budget Automation Tool", "Maquinas de orçamento e liquidação", "Bütçe ve hesaplama makinaları"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/automats.shtml"]
  },
  // =========================
  // Помощь (3)
  // =========================
  downloadSoftware3: {
    q: "",
    t: ["Где скачать приложения", "Download software", "Descargar software", "Download de software", "Yazılım"],
    u: ["wiki.web.money/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software", "http://wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]
  },
  AskQuestion: {
    q: "",
    t: ["Задать вопрос", "Ask a question", "Hacer una pregunta", "Faça uma pergunta", "Soru sormak"],
    u: ["support.wmtransfer.com", ["", "lang=eng", "lang=eng", "lang=eng", "lang=eng"]]
  },
  legalEntityWmid: {
    q: "",
    t: ["Использование WMID юридическими лицами", "Usage of WMID by legal entities", "Uso del WMID por personas juridicas", "Uso de WMID por entidades jurídicas", "WMID’nin tüzel kişiler tarafından kullanılması"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/legal_entity_wmid.shtml"]
  },
  videoTutorials: {
    q: "",
    t: ["Обучающие видео", "Video tutorials", "Video Tutorial", "Tutorial em vídeo", "Videolu eğitim"],
    u: ["www.youtube.com/playlist?list=PLxnBovRWjSvuQF841-x7onqshYgCzkxkU", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL", "www.youtube.com/playlist?list=PLxnBovRWjSvvLcfubSk3cNFrvPxk8Y8GL"]
  },
  financialSupport3: {
    q: "",
    t: ["Финансовая поддержка", "Financial support", "-", "Suporte Financeiro", "Mali destek"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport3: {
    q: "",
    t: ["Техническая поддержка", "Technical support", "Soporte técnico", "Suporte técnico", "Teknik destek"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  searchPayment: {
    q: "",
    t: ["Розыск платежей", "Search payment", "Buscar pagos", "Pesquisar pagamentos", "Ödeme arama"],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/search_pay.shtml"]
  },
  interactiveMap: {
    q: "",
    t: ["Интерактивная карта", "Interactive map", "Mapa interactivo", "Mapa interativo", "İnteraktif harita"],
    u: "geo.web.money"
  },
  wiki2: {
    t: "Wiki",
    u: ["wiki.web.money", "wiki.wmtransfer.com/projects/webmoney/wiki/WebMoney_Wiki"]
  },
  forum2: {
    q: "",
    t: ["Форум", "Forum", "Foro", "Fórum", "Forum"],
    u: "forum.web.money/index.php"
  }
};

var containDomainType = function containDomainType(items, domainType) {
  for (var i = 0; i < items.length; i++) {
    if (items[i] == domainType) {
      return true;
    }
  }

  return false;
};

var getLangValue = function getLangValue(items, lang) {
  if (typeof items == "string") {
    return items;
  }

  if (lang == consts.LANG_RU && items.length > 0) {
    return items[0];
  } else if (lang == consts.LANG_EN && items.length > 1) {
    return items[1];
  } else if (lang == consts.LANG_ES && items.length > 2) {
    return items[2];
  } else if (lang == consts.LANG_PT && items.length > 3) {
    return items[3];
  } else if (lang == consts.LANG_TR && items.length > 4) {
    return items[4];
  } else if (lang == consts.LANG_VN && items.length > 5) {
    return items[5];
  } else if (items.length > 1) {
    return items[1];
  } else if (items.length > 0) {
    return items[0];
  }

  return "";
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(options, key) {
  var link = {
    title: "title_" + key + "_" + options.lang,
    url: "url_" + key + "_" + options.lang
  };
  var linkStorageItem = linkStorage[key];

  if (linkStorageItem != null) {
    var title = getLangValue(linkStorageItem.t, options.lang);
    var url = "";

    if (linkStorageItem.d != null) {
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License
(function (Math) {
  var trimLeft = /^\s+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      mathRound = Math.round,
      mathMin = Math.min,
      mathMax = Math.max,
      mathRandom = Math.random;

  function tinycolor(color, opts) {
    color = color ? color : '';
    opts = opts || {}; // If input is already a tinycolor, return itself

    if (color instanceof tinycolor) {
      return color;
    } // If we are called as a function, call using new instead


    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType; // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`

    if (this._r < 1) {
      this._r = mathRound(this._r);
    }

    if (this._g < 1) {
      this._g = mathRound(this._g);
    }

    if (this._b < 1) {
      this._b = mathRound(this._b);
    }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
  }

  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      //http://www.w3.org/TR/AERT#color-contrast
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function getLuminance() {
      //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;

      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }

      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }

      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }

      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = mathRound(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = mathRound(hsv.h * 360),
          s = mathRound(hsv.s * 100),
          v = mathRound(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = mathRound(hsl.h * 360),
          s = mathRound(hsl.s * 100),
          l = mathRound(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return '#' + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return '#' + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: mathRound(this._r),
        g: mathRound(this._g),
        b: mathRound(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: mathRound(bound01(this._r, 255) * 100) + "%",
        g: mathRound(bound01(this._g, 255) * 100) + "%",
        b: mathRound(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }

      if (this._a < 1) {
        return false;
      }

      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";

      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }

      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

      if (needsAlphaFormat) {
        // Special case for "transparent", all other non-alpha formats
        // will return rgba when there is transparency.
        if (format === "name" && this._a === 0) {
          return this.toName();
        }

        return this.toRgbString();
      }

      if (format === "rgb") {
        formattedString = this.toRgbString();
      }

      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }

      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }

      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }

      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }

      if (format === "hex8") {
        formattedString = this.toHex8String();
      }

      if (format === "name") {
        formattedString = this.toName();
      }

      if (format === "hsl") {
        formattedString = this.toHslString();
      }

      if (format === "hsv") {
        formattedString = this.toHsvString();
      }

      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    triad: function triad() {
      return this._applyCombination(_triad, arguments);
    },
    tetrad: function tetrad() {
      return this._applyCombination(_tetrad, arguments);
    }
  }; // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1

  tinycolor.fromRatio = function (color, opts) {
    if (_typeof(color) == "object") {
      var newColor = {};

      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }

      color = newColor;
    }

    return tinycolor(color, opts);
  }; // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //


  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
      color = stringInputToObject(color);
    }

    if (_typeof(color) == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }

      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }

    a = boundAlpha(a);
    return {
      ok: ok,
      format: color.format || format,
      r: mathMin(255, mathMax(rgb.r, 0)),
      g: mathMin(255, mathMax(rgb.g, 0)),
      b: mathMin(255, mathMax(rgb.b, 0)),
      a: a
    };
  } // Conversion Functions
  // --------------------
  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]


  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  } // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]


  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      l: l
    };
  } // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]


  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      v: v
    };
  } // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex


  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))]; // Return a 3 character hex if possible

    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
  } // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex


  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)), pad2(convertDecimalToHex(a))]; // Return a 4 character hex if possible

    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
  } // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"


  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
    return hex.join("");
  } // `equals`
  // Can be called with any tinycolor input


  tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) {
      return false;
    }

    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };

  tinycolor.random = function () {
    return tinycolor.fromRatio({
      r: mathRandom(),
      g: mathRandom(),
      b: mathRandom()
    });
  }; // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }

  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }

  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
    return tinycolor(rgb);
  }

  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  } // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.


  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  } // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>


  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }

  function _triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 120) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 240) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 90) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 180) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 270) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }

    return ret;
  }

  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h,
        s = hsv.s,
        v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
      ret.push(tinycolor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }

    return ret;
  } // Utility Functions
  // ---------------------


  tinycolor.mix = function (color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  }; // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)


  tinycolor.readability = function (color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  }; // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false


  tinycolor.isReadable = function (color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);

    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;

      case "AAlarge":
        out = readability >= 3;
        break;

      case "AAAsmall":
        out = readability >= 7;
        break;
    }

    return out;
  }; // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


  tinycolor.mostReadable = function (baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;

    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);

      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {
      "level": level,
      "size": size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  }; // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>


  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  }; // Make it easy to access colors via `hexNames[hex]`

  var hexNames = tinycolor.hexNames = flip(names); // Utilities
  // ---------
  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`

  function flip(o) {
    var flipped = {};

    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }

    return flipped;
  } // Return a valid alpha value [0,1] with all invalid values being set to 1


  function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }

    return a;
  } // Take input from [0, n] and return it as [0, 1]


  function bound01(n, max) {
    if (isOnePointZero(n)) {
      n = "100%";
    }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n))); // Automatically convert percentage into number

    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    } // Handle floating point rounding errors


    if (Math.abs(n - max) < 0.000001) {
      return 1;
    } // Convert into [0, 1] range if it isn't already


    return n % max / parseFloat(max);
  } // Force a number between 0 and 1


  function clamp01(val) {
    return mathMin(1, mathMax(0, val));
  } // Parse a base-16 hex value into a base-10 integer


  function parseIntFromHex(val) {
    return parseInt(val, 16);
  } // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>


  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  } // Check to see if string passed in is a percentage


  function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
  } // Force a hex value to have 2 characters


  function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
  } // Replace a decimal with it's percentage value


  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }

    return n;
  } // Converts a decimal to a hex value


  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  } // Converts a hex value to a decimal


  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }

  var matchers = function () {
    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?"; // <http://www.w3.org/TR/css3-values/#number-value>

    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?"; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")"; // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren

    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }(); // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).


  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  } // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`


  function stringInputToObject(color) {
    color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
    var named = false;

    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == 'transparent') {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    } // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.


    var match;

    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }

    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }

    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }

    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }

    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        a: convertHexToDecimal(match[4] + '' + match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        format: named ? "name" : "hex"
      };
    }

    return false;
  }

  function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {
      "level": "AA",
      "size": "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();

    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }

    if (size !== "small" && size !== "large") {
      size = "small";
    }

    return {
      "level": level,
      "size": size
    };
  } // Node: Export function


  if ( true && module.exports) {
    module.exports = tinycolor;
  } // AMD/requirejs: Define the module
  else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return tinycolor;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // Browser: Expose to window
  else {}
})(Math);

/***/ }),

/***/ "./node_modules/url-polyfill/url-polyfill.js":
/*!***************************************************!*\
  !*** ./node_modules/url-polyfill/url-polyfill.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */
  var checkIfIteratorIsSupported = function checkIfIteratorIsSupported() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };

  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function createIterator(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === void 0,
          value: value
        };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  };
  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */


  var serializeParam = function serializeParam(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function deserializeParam(value) {
    return decodeURIComponent(String(value).replace(/\+/g, ' '));
  };

  var polyfillURLSearchParams = function polyfillURLSearchParams() {
    var URLSearchParams = function URLSearchParams(searchString) {
      Object.defineProperty(this, '_entries', {
        writable: true,
        value: {}
      });

      var typeofSearchString = _typeof(searchString);

      if (typeofSearchString === 'undefined') {// do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;

        searchString.forEach(function (value, name) {
          _this.append(name, value);
        });
      } else if (searchString !== null && typeofSearchString === 'object') {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];

            if (Object.prototype.toString.call(entry) === '[object Array]' || entry.length !== 2) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function (name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };

    proto.delete = function (name) {
      delete this._entries[name];
    };

    proto.get = function (name) {
      return name in this._entries ? this._entries[name][0] : null;
    };

    proto.getAll = function (name) {
      return name in this._entries ? this._entries[name].slice(0) : [];
    };

    proto.has = function (name) {
      return name in this._entries;
    };

    proto.set = function (name, value) {
      this._entries[name] = [String(value)];
    };

    proto.forEach = function (callback, thisArg) {
      var entries;

      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];

          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function () {
      var searchArray = [];
      this.forEach(function (value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };

    global.URLSearchParams = URLSearchParams;
  };

  var checkIfURLSearchParamsSupported = function checkIfURLSearchParamsSupported() {
    try {
      var URLSearchParams = global.URLSearchParams;
      return new URLSearchParams('?a=1').toString() === 'a=1' && typeof URLSearchParams.prototype.set === 'function' && typeof URLSearchParams.prototype.entries === 'function';
    } catch (e) {
      return false;
    }
  };

  if (!checkIfURLSearchParamsSupported()) {
    polyfillURLSearchParams();
  }

  var proto = global.URLSearchParams.prototype;

  if (typeof proto.sort !== 'function') {
    proto.sort = function () {
      var _this = this;

      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);

        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function (a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });

      if (_this._entries) {
        // force reset because IE keeps keys index
        _this._entries = {};
      }

      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function value(searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function (value, name) {
            keys.push(name);
          });

          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }

        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;

        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
        }
      }
    });
  } // HTMLAnchorElement

})(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

(function (global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */
  var checkIfURLIsSupported = function checkIfURLIsSupported() {
    try {
      var u = new global.URL('b', 'http://a');
      u.pathname = 'c d';
      return u.href === 'http://a/c%20d' && u.searchParams;
    } catch (e) {
      return false;
    }
  };

  var polyfillURL = function polyfillURL() {
    var _URL = global.URL;

    var URL = function URL(url, base) {
      if (typeof url !== 'string') url = String(url);
      if (base && typeof base !== 'string') base = String(base); // Only create another document if the base is different from current location.

      var doc = document,
          baseElement;

      if (base && (global.location === void 0 || base !== global.location.href)) {
        base = base.toLowerCase();
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);

        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;

      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      var inputElement = doc.createElement('input');
      inputElement.type = 'url';
      inputElement.value = url;

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href) || !inputElement.checkValidity() && !base) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      }); // create a linked searchParams which reflect its changes on URL

      var searchParams = new global.URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;

      var _this = this;

      ['append', 'delete', 'set'].forEach(function (methodName) {
        var method = searchParams[methodName];

        searchParams[methodName] = function () {
          method.apply(searchParams, arguments);

          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });
      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });
      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function value() {
          if (this.search !== search) {
            search = this.search;

            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;

              this.searchParams._fromString(this.search);

              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function linkURLWithAnchorAttribute(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function get() {
          return this._anchorElement[attributeName];
        },
        set: function set(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (attributeName) {
      linkURLWithAnchorAttribute(attributeName);
    });
    Object.defineProperty(proto, 'search', {
      get: function get() {
        return this._anchorElement['search'];
      },
      set: function set(value) {
        this._anchorElement['search'] = value;

        this._updateSearchParams();
      },
      enumerable: true
    });
    Object.defineProperties(proto, {
      'toString': {
        get: function get() {
          var _this = this;

          return function () {
            return _this.href;
          };
        }
      },
      'href': {
        get: function get() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function set(value) {
          this._anchorElement.href = value;

          this._updateSearchParams();
        },
        enumerable: true
      },
      'pathname': {
        get: function get() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function set(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },
      'origin': {
        get: function get() {
          // get expected port from protocol
          var expectedPort = {
            'http:': 80,
            'https:': 443,
            'ftp:': 21
          }[this._anchorElement.protocol]; // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''

          var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';
          return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
        },
        enumerable: true
      },
      'password': {
        // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      },
      'username': {
        // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      }
    });

    URL.createObjectURL = function (blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function (url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;
  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if (global.location !== void 0 && !('origin' in global.location)) {
    var getOrigin = function getOrigin() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function () {
        global.location.origin = getOrigin();
      }, 100);
    }
  }
})(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

/***/ }),

/***/ "./src/webMoneyHeader/extensions/ajax.js":
/*!***********************************************!*\
  !*** ./src/webMoneyHeader/extensions/ajax.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(method, url, successCallback, errorCallback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var response = xhr.responseText;
      successCallback(response);
    } else if (xhr.readyState === XMLHttpRequest.DONE) {
      errorCallback();
    }
  };

  xhr.open(method, url);
  xhr.send();
}

/***/ }),

/***/ "./src/webMoneyHeader/extensions/antiCache.js":
/*!****************************************************!*\
  !*** ./src/webMoneyHeader/extensions/antiCache.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getValue: function getValue() {
    var value = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    return value;
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/consts.js":
/*!*************************************************!*\
  !*** ./src/webMoneyHeader/extensions/consts.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  DOMAIN_TYPE_WMTRANSFER: "0",
  DOMAIN_TYPE_MONEY: "1",
  DOMAIN_TYPE_RU: "2",
  VIEW_DESKTOP: "desktop",
  VIEW_MOBILE: "mobile",
  VIEW_ADAPTIVE: "adaptive",
  LANG_RU: "ru",
  LANG_EN: "en",
  LANG_ES: "es",
  LANG_PT: "pt",
  LANG_TR: "tr",
  LANG_VN: "vn",
  SEARCH_WHERE_INFO: "info",
  SEARCH_WHERE_GOODS: "goods",
  SEARCH_WHERE_INOUT: "inout",
  SEARCH_WHERE_WIKI: "wiki",
  SEARCH_WHERE_ANT: "ant",
  MENU_URL: {
    "ru": "https://assets.webmoney.ru/json/wm-ext-menu.json",
    "en": "https://assets.webmoney.ru/json/wm-ext-menu-eng.json",
    "es": "https://assets.webmoney.ru/json/wm-ext-menu-es.json",
    "pt": "https://assets.webmoney.ru/json/wm-ext-menu-br.json",
    "tr": "https://assets.webmoney.ru/json/wm-ext-menu-tr.json",
    "vn": "https://assets.webmoney.ru/json/wm-ext-menu-eng.json"
  },
  MENU_URL_MOBILE: {
    "ru": "https://assets.webmoney.ru/json/wm-ext-menumobile.json",
    "en": "https://assets.webmoney.ru/json/wm-ext-menumobile-eng.json",
    "es": "https://assets.webmoney.ru/json/wm-ext-menumobile-es.json",
    "pt": "https://assets.webmoney.ru/json/wm-ext-menumobile-br.json",
    "tr": "https://assets.webmoney.ru/json/wm-ext-menumobile-tr.json",
    "vn": "https://assets.webmoney.ru/json/wm-ext-menumobile-eng.json"
  },
  SEARCH_COOKIE_NAME: "searchOption",
  SEARCH_COOKIE_EX_DAYS: 365,
  MEGASTOCK_URL: "https://megastock.ru/searchres.aspx"
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/cookie.js":
/*!*************************************************!*\
  !*** ./src/webMoneyHeader/extensions/cookie.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  set: function set(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  get: function get(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/htmlGenerator.js":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/extensions/htmlGenerator.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local */ "./src/webMoneyHeader/extensions/local.js");
/* harmony import */ var _ml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ml */ "./src/webMoneyHeader/extensions/ml.js");
/* harmony import */ var _linkStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../linkStorage */ "./linkStorage.js");





var tinycolor = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  generate: function generate(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-flv"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row n7g-spb"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-bgr"
    }, ""), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lft"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-llg"
    }, this.generateLogo(options)), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mdl"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-dtr"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-svs"
    }), this.generateFirstLevelMenu(options), this.generateSearchBlock(options)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-rgt"
    }, this.generateLoginBlock(options))]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-bgr-dd"
    })])), this.generateServicesDropDown(options), this.generateIndividualsDropDown(options), this.generateBusinessDropDown(options), this.generateSearchDropDown(options)]); // return ml("div", { "class": options.view == consts.VIEW_MOBILE ? "n20g20 n20g20-mobile" : "n20g20" },
    //   ml("div", { "class": "n20g20-wrapper" }, [
    //     options.view == consts.VIEW_MOBILE ? ml("div", { "class": "n20g20-toggle-button" }) : "",
    //     this.generateLogo(options),
    //     options.view == consts.VIEW_MOBILE ? "" : this.generateMenu(options),
    //     this.generateLoginBlock(options),
    //     this.generateSearchBlock(options),
    //     options.view == consts.VIEW_MOBILE ? this.generateMenu(options) : ""
    //   ])
    // );
  },
  generateLogo: function generateLogo(options) {
    var logoUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? logoUrl = "https://www.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? logoUrl = "https://www.webmoney.ru" : logoUrl = "https://www.web.money/";
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": logoUrl,
      "class": "n7g-lgo"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-lgi",
      "src": __webpack_require__(/*! ../images/wm-logo.svg */ "./src/webMoneyHeader/images/wm-logo.svg")
    }));
  },
  generateFirstLevelMenu: function generateFirstLevelMenu(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lks"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lki n7g-ind"
    }, "Частным лицам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lki n7g-biz"
    }, "Для бизнеса")]);
  },
  generateSearchBlock: function generateSearchBlock(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-srh"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-sbtn"
    })]);
  },
  generateLoginBlock: function generateLoginBlock(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lgb"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lbs"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lbi n7g-lbi--reg",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonSignUp")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lbi n7g-lbi--log",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogIn"))]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-lgw"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-uln"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-unm"
    }, ""), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-uim"
    })]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-overlay"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-wdw"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-usr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-uwr"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-uil",
      "href": "#"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-uifm"
    })), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-uif"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-ufnm",
      "href": "#"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-unt"
    }, ""))])])), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-itm n7g-itm--purse",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonMyPurse")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-itm n7g-itm--profile",
      "href": "#"
    }, "Деловая сеть"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-itm n7g-itm--settings",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogInSettings")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-itm n7g-itm--logout",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogOut")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-owd"
    }, "Другие WMID"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-awl"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-itm n7g-itm--login",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogInAnotherWmid")), // ml("a", {"class": "n23g23-login-block-window-settings", "href": "#"}, local(options, "buttonLogInSettings")),
    options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-close"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonBack")) : ""])])]);
  },
  generateServicesDropDown: function generateServicesDropDown(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-slv n7g-svs-dd"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-rw"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cnt"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mni"
    }, "Криптовалюты"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cti"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/bitcoin.svg */ "./src/webMoneyHeader/images/services/bitcoin.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "WMX (Bitcoin)")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/bitcoin-cash.svg */ "./src/webMoneyHeader/images/services/bitcoin-cash.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "WMH (Bitcoin Cash)")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/litecoin.svg */ "./src/webMoneyHeader/images/services/litecoin.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "WML (Litecoin)")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/ethereum.svg */ "./src/webMoneyHeader/images/services/ethereum.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "WMF (Ethereum)")])])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mni"
    }, "Заработать"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cti"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/video-c.svg */ "./src/webMoneyHeader/images/services/video-c.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Платные видеоконсультации")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/indx.svg */ "./src/webMoneyHeader/images/services/indx.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "INDX: фондовая биржа")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/softactivation.svg */ "./src/webMoneyHeader/images/services/softactivation.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Продажа цифровых товаров")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/publicant.svg */ "./src/webMoneyHeader/images/services/publicant.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Publicant: опубликовать книгу")])])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mni"
    }, "Оплатить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cti"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/apple.svg */ "./src/webMoneyHeader/images/services/apple.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Подарочная карта Apple")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/steam.svg */ "./src/webMoneyHeader/images/services/steam.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Steam")])])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-mni"
    }, "Для работы"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-cti"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/video.svg */ "./src/webMoneyHeader/images/services/video.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Видеозвонки и онлайн-трансляции")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/memo.svg */ "./src/webMoneyHeader/images/services/memo.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Управление закладками")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/files.svg */ "./src/webMoneyHeader/images/services/files.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Файловое хранилище")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-svi",
      "href": "#"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-sic",
      "src": __webpack_require__(/*! ../images/services/notes.svg */ "./src/webMoneyHeader/images/services/notes.svg")
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-stl"
    }, "Верстка и публикация заметок")])])])])])));
  },
  // getLink(options, "indx").title
  // getLink(options, "indx").url
  generateIndividualsDropDown: function generateIndividualsDropDown(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-slv n7g-ind-dd"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Пополнить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpCash").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpCash").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpBankAccount").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpBankAccount").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpEMoney").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpEMoney").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpPaymentTerminat").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpPaymentTerminat").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpMoneyTransfer").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "topUpMoneyTransfer").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Заработать"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "consultations").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "consultations").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "softactivation").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "softactivation").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "indx").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "indx").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicant").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicant").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mestkom").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mestkom").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "cashbox").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "cashbox").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "shareholder").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "shareholder").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtmart").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtmart").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Для работы"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "video").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "video").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "memo").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "memo").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "notes").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "notes").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "analytics").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "analytics").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mail").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mail").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "files").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "files").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mentor").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mentor").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Вывести"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawCash").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawCash").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawToBankCard").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawToBankCard").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawBankAccount").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawBankAccount").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawEmoney").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawEmoney").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawTransfer").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "withdrawTransfer").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Операции с WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "exchanger").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "exchanger").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "wmCheck").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "wmCheck").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "protectedTransactions").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "protectedTransactions").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "security").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "escrow").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "escrow").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "enum").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "enum").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "operationNotification").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "operationNotification").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "purseAccessLimiting").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "purseAccessLimiting").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "expenseLimitsSetting").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "expenseLimitsSetting").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "restoringControl").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "restoringControl").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "advisor").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "advisor").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Оплатить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mobileCommunications").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mobileCommunications").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "internetAccess").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "internetAccess").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "commercialTv").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "commercialTv").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicUtilities").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicUtilities").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicServices").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "publicServices").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "bankAccountPayments").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "bankAccountPayments").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "megastock").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "megastock").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digisellerCatalogOfdigitalGoods").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digisellerCatalogOfdigitalGoods").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "antivirus").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "antivirus").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "rebills").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "rebills").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Одолжить"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "creditService").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "creditService").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtService").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtService").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "passport").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "receivePassport").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "receivePassport").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "verificationPoints").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "verificationPoints").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "arbitrage").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "submitComplaint").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "submitComplaint").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "submitClaim").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "submitClaim").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "registerContract").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "registerContract").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Сбор средств"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "charity").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "charity").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "crowdfunding").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "crowdfunding").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "groupBuying").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "groupBuying").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "eventOrganization").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "eventOrganization").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Банковские карты"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "virtualCards").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "virtualCards").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "plasticCards").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "plasticCards").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "moneySend").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "moneySend").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Территория WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "events").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "events").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "blog").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "blog").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "geo").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "geo").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "wiki").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "wiki").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "purseManagement2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperStandardMini2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperStandardMini2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperWinProClassic2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperWinProClassic2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperWebProLight2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperWebProLight2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperMobile2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperMobile2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperForSocialNetworks2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "keeperForSocialNetworks2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "enum2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "enum2").title)])])])));
  },
  generateBusinessDropDown: function generateBusinessDropDown(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-slv n7g-biz-dd"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Магазинам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "merchant").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "merchant").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "paymentsToBankAccounts").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "paymentsToBankAccounts").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "megastock2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "megastock2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digiseller2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digiseller2").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Сайтам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "funding").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "funding").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mestcom2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mestcom2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "cashbox2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "cashbox2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digiseller3").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "digiseller3").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "login").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "login").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Общие"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "masspayment").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "masspayment").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "exchanger2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "exchanger2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "contracts").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "contracts").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "arbitrage2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "arbitrage2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "escrow2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "escrow2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "creditMarket").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "creditMarket").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "reporting").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "reporting").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "financialSupport2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "financialSupport2").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Юридическим лицам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "biz").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "biz").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "biz2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "biz2").title)])]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Капитал"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "shareholder2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "shareholder2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "indx2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "indx2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtMarket").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "debtMarket").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "capitaller").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "capitaller").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Возможности WebMoney"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mentor2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "mentor2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "secureMail").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "secureMail").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "files2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "files2").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "letterPostingService").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "letterPostingService").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "newsline").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "newsline").title)]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-clm"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ttl"
    }, "Разработчикам"), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "programInterfaces").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "programInterfaces").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "stylesAndDesign").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "stylesAndDesign").title), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-lnk",
      "href": (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "technicalSupport2").url
    }, (0,_linkStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(options, "technicalSupport2").title)])])])));
  },
  generateSearchDropDown: function generateSearchDropDown(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-slv n7g-srch-dd"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-ctr"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-row"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-col"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-sctr"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("input", {
      "class": "n7g-sbxi",
      "type": "text"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-sbxb"
    }, "Найти")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-chps"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n7g-smr"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-sml",
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO)), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-sml",
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS)), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-sml",
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT)), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-sml",
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI)), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-sml",
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT))]))]))));
  },
  generateMenu: function generateMenu(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n20g20-ext-menu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("ul", {
      "class": "n24g24-header-menu clearfix"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
      "class": "n24g24-header-menu-with-submenu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {}, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuAboutWebMoney"))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
      "class": "n24g24-header-menu-with-submenu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {}, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuPersonal"))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
      "class": "n24g24-header-menu-with-submenu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {}, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuBusiness"))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
      "class": "n24g24-header-menu-with-submenu"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {}, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuHelp")))]));
  },
  generateBgGradient: function generateBgGradient(color) {
    var primaryColor = color;
    var primaryColorLighten = tinycolor(primaryColor).saturate(20).lighten(15).toString();
    var primaryColorDarken = tinycolor(primaryColor).darken(15).toString();
    var gradientBg = "background: linear-gradient(45deg, " + primaryColorDarken + " 0%, " + primaryColor + " 50%, " + primaryColorLighten + " 100%)";
    return gradientBg;
  },
  generateSearchBlock2: function generateSearchBlock2(options) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n22g22-header-user-search"
    }, [options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n22g22-toggle-search-button"
    }) : "", (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n22g22-search-block"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n20g20-close-search-button"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "alt": "search options",
      "src": __webpack_require__(/*! ../images/icon-search-toggle-down.svg */ "./src/webMoneyHeader/images/icon-search-toggle-down.svg"),
      "class": "n22g22-toggle-search"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n22g22-icon-search n20-g20-search-button"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("input", {
      "class": "n22g22-search-box-input n20g20-search-box",
      "type": "search"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("ul", {
      "class": "n22g22-search-more"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {}, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "href": "#",
      "where": _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "menuFindTitle_" + _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT)))])])]);
  },
  generateLoginBlock2: function generateLoginBlock2(options) {
    // todo: Локализация.
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-buttons"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-buttons-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-button n23g23-login-block-button--registration",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonSignUp")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-button n23g23-login-block-button--login",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogIn"))])), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-user-line"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n23g23-login-block-user-line-image"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-user-line-name"
    }, "")]), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-overlay"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-user"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-user-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-user-image-link",
      "href": "#"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n23g23-login-block-window-user-image"
    })), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-user-info"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-user-info-name",
      "href": "#"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n23g23-login-block-window-user-info-name-text"
    }, "")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-user-info-wrapper"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-user-info-purse",
      "href": "#"
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n23g23-login-block-window-user-info-purse-text"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonMyPurse"))), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-user-info-logout",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogOut"))])])])), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-additional-wmids-list"
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-login-button",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogInAnotherWmid")), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n23g23-login-block-window-settings",
      "href": "#"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonLogInSettings")), options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
      "class": "n23g23-login-block-window-close"
    }, (0,_local__WEBPACK_IMPORTED_MODULE_1__["default"])(options, "buttonBack")) : ""])])]);
  },
  getnerateLoginBlockWmidItem: function getnerateLoginBlockWmidItem(options, wmid, displayName, avatarUrl, loginUrl) {
    return (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("a", {
      "class": "n7g-awli",
      "href": loginUrl
    }, (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-aww"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("img", {
      "class": "n7g-awi",
      "src": avatarUrl
    }), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-awif"
    }, [(0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-awn"
    }, displayName), (0,_ml__WEBPACK_IMPORTED_MODULE_2__["default"])("span", {
      "class": "n7g-aww"
    }, wmid)])]));
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/local.js":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/extensions/local.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var localization = {
  menuAboutWebMoney: {
    "ru": "О системе",
    "en": "About WebMoney",
    "es": "Acerca del sistema",
    "pt": "Sobre o sistema",
    "tr": "Sistem hakkında",
    "vn": "About WebMoney"
  },
  menuPersonal: {
    "ru": "Частным лицам",
    "en": "Personal",
    "es": "Individuos",
    "pt": "Indivíduos",
    "tr": "Bireysel",
    "vn": "Personal"
  },
  menuBusiness: {
    "ru": "Для бизнеса",
    "en": "Business",
    "es": "Empresas",
    "pt": "Para empresas",
    "tr": "Kurumsal",
    "vn": "Business"
  },
  menuHelp: {
    "ru": "Помощь",
    "en": "Help",
    "es": "Ayuda",
    "pt": "Ajuda",
    "tr": "Yardım",
    "vn": "Help"
  },
  menuFindTitle_info: {
    "ru": "Найти информацию",
    "en": "Find information",
    "es": "Encontrar Información",
    "pt": "Encontrar a informação",
    "tr": "Bilgi ara",
    "vn": "Tìm kiếm thông tin"
  },
  menuFindTitle_goods: {
    "ru": "Найти товары",
    "en": "Find goods",
    "es": "Encontrar Producto",
    "pt": "Encontrar produtos",
    "tr": "Ürün ara",
    "vn": "Tìm kiếm hàng hoá"
  },
  menuFindTitle_inout: {
    "ru": "Найти как ввести/вывести",
    "en": "Find how to top-up/withdraw",
    "es": "Encontrar la manera de recargar/retirar",
    "pt": "Veja como recarregar/retirar",
    "tr": "Nasıl yükleme ve çekme yapılır ara",
    "vn": "Tìm kiếm cách nạp tiền/rút tiền"
  },
  menuFindTitle_wiki: {
    "ru": "Искать в Wiki",
    "en": "Find in Wiki",
    "es": "Buscar información en Wiki",
    "pt": "Pesquisar em Wiki",
    "tr": "Wiki'de bilgi ara",
    "vn": "Tìm kiếm thông tin trên Wiki"
  },
  menuFindTitle_ant: {
    "ru": "Спросить консультанта",
    "en": "Ask virtual agent",
    "es": "Preguntar agente virtual",
    "pt": "Pergunte ao agente virtual",
    "tr": "Sanal aracıya sor",
    "vn": "Hỏi đại lý ảo"
  },
  buttonSignUp: {
    "ru": "Регистрация",
    "en": "Sign Up",
    "es": "Regístrese",
    "pt": "Cadastre-se",
    "tr": "Kayıt",
    "vn": "Đăng ký"
  },
  buttonLogIn: {
    "ru": "Вход",
    "en": "Log In",
    "es": "Ingresar",
    "pt": "Entrar",
    "tr": "Giriş",
    "vn": "Đăng nhập"
  },
  buttonMyPurse: {
    "ru": "Мой кошелек",
    "en": "My purse",
    "es": "Mi billetera",
    "pt": "Minha carteira",
    "tr": "Cüzdanim",
    "vn": "Túi của tôi"
  },
  buttonLogOut: {
    "ru": "Выход",
    "en": "Log out",
    "es": "Cerrar sesión",
    "pt": "Desligar",
    "tr": "Çıkış",
    "vn": "Đăng xuất"
  },
  buttonLogInAnotherWmid: {
    "ru": "Войти другим WMID",
    "en": "Log in another WMID",
    "es": "Entrar en otro WMID",
    "pt": "Log em outro WMID",
    "tr": "Başka bir WMID ile giriş yapın",
    "vn": "Đăng nhập với WMID khác"
  },
  buttonLogInSettings: {
    "ru": "Настройки входа",
    "en": "Login settings",
    "es": "Configuraciones de Sesión",
    "pt": "Configurações de sessão",
    "tr": "Giriş ayarları",
    "vn": "Thiết lập đăng nhập"
  },
  buttonBack: {
    "ru": "Назад",
    "en": "Back",
    "es": "Atrás",
    "pt": "Voltar",
    "tr": "Geri",
    "vn": "Trở lại"
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(options, key) {
  return localization[key][options.lang];
}

/***/ }),

/***/ "./src/webMoneyHeader/extensions/loginBlock.js":
/*!*****************************************************!*\
  !*** ./src/webMoneyHeader/extensions/loginBlock.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _antiCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./antiCache */ "./src/webMoneyHeader/extensions/antiCache.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _htmlGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlGenerator */ "./src/webMoneyHeader/extensions/htmlGenerator.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var rootElement = options.rootElement;
    var loginBlockLine = rootElement.getElementsByClassName("n7g-lgw")[0];
    var loginBlockOverlay = rootElement.getElementsByClassName("n23g23-login-block-overlay")[0];
    loginBlockLine.addEventListener("click", function (event) {
      this.classList.toggle("is-opened");
    });
    loginBlockOverlay.addEventListener("click", function (event) {
      this.classList.remove("is-opened");
    });
    window.addEventListener("click", function (e) {
      if (!document.querySelector(".n7g-lgw").contains(e.target)) {
        if (loginBlockLine.classList.contains("is-opened")) {
          loginBlockLine.classList.remove("is-opened");
        }
      }
    });

    if (options.view == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE) {
      var loginBlockClose = rootElement.getElementsByClassName("n23g23-login-block-window-close")[0];
      loginBlockClose.addEventListener("click", function (event) {
        this.classList.remove("is-opened");
      });
    }

    var context = this;
    this.singleSignOn(options, function (singleSignOnResponse) {
      context.renderLoginBlock(options, singleSignOnResponse);
    }, function () {
      context.renderLoginBlock(options, null);
    });
  },
  singleSignOn: function singleSignOn(options, resolve, reject) {
    try {
      var url = this.getLoginServiceUrl(options) + "/GateKeeper/SingleSignOn.js?type=cors";
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          try {
            var singleSignOnResponse = JSON.parse(xhr.responseText);
            resolve(singleSignOnResponse);
          } catch (_unused) {
            reject();
          }
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
          reject();
        }
      };

      xhr.open("GET", url);
      xhr.withCredentials = true;
      xhr.send();
    } catch (error) {
      reject();
    }
  },
  renderLoginBlock: function renderLoginBlock(options, singleSignOnResponse) {
    var loginBlockData = this.getLoginBlockData(options, singleSignOnResponse);

    if (!loginBlockData.loggedOn) {
      var rootElement = options.rootElement;
      var loginBlockElement = rootElement.getElementsByClassName("n7g-lgb")[0];
      var loginBlockButtonsElement = rootElement.getElementsByClassName("n7g-lbs")[0];
      var loginBlockButtonRegistrationElement = loginBlockButtonsElement.getElementsByClassName("n7g-lbi--reg")[0];
      var loginBlockButtonLoginElement = loginBlockButtonsElement.getElementsByClassName("n7g-lbi--log")[0];
      loginBlockButtonRegistrationElement.href = loginBlockData.registrationUrl;
      loginBlockButtonLoginElement.href = loginBlockData.loginUrl;
      loginBlockElement.classList.remove("is-logged-in");
      loginBlockElement.classList.add("is-not-logged-in");
    } else {
      var rootElement = options.rootElement;
      var loginBlockElement = rootElement.getElementsByClassName("n7g-lgb")[0];
      var loginBlockWrapperElement = rootElement.getElementsByClassName("n7g-lgw")[0];
      var loginBlockUserLineImageElement = loginBlockWrapperElement.getElementsByClassName("n7g-uim")[0];
      var loginBlockUserLineNameElement = loginBlockWrapperElement.getElementsByClassName("n7g-unm")[0];
      var loginBlockWindowUserImageLinkElement = loginBlockWrapperElement.getElementsByClassName("n7g-uil")[0];
      var loginBlockWindowUserImageElement = loginBlockWrapperElement.getElementsByClassName("n7g-uifm")[0];
      var loginBlockWindowUserInfoNameElement = loginBlockWrapperElement.getElementsByClassName("n7g-ufnm")[0];
      var loginBlockWindowUserInfoNameTextElement = loginBlockWrapperElement.getElementsByClassName("n7g-unt")[0];
      var loginBlockWindowUserInfoPurseElement = loginBlockWrapperElement.getElementsByClassName("n7g-itm--purse")[0];
      var loginBlockWindowUserInfoLogoutElement = loginBlockWrapperElement.getElementsByClassName("n7g-itm--logout")[0];
      var loginBlockWindowAdditionalWmidsList = loginBlockWrapperElement.getElementsByClassName("n7g-awl")[0];
      var loginBlockWindowLoginButtonElement = loginBlockWrapperElement.getElementsByClassName("n7g-itm--login")[0];
      var loginBlockWindowSettingsElement = loginBlockWrapperElement.getElementsByClassName("n7g-itm--settings")[0];
      loginBlockUserLineImageElement.src = loginBlockData.smallAvatarUrl;
      loginBlockUserLineNameElement.innerText = loginBlockData.preview;
      loginBlockWrapperElement.getElementsByClassName("n7g-itm--profile")[0].href = loginBlockData.eventsUrl;
      loginBlockWindowUserImageLinkElement.href = loginBlockData.eventsUrl;
      loginBlockWindowUserImageElement.src = loginBlockData.smallAvatarUrl;
      loginBlockWindowUserInfoNameElement.href = loginBlockData.eventsUrl;
      loginBlockWindowUserInfoNameTextElement.innerText = loginBlockData.displayName;
      loginBlockWindowUserInfoPurseElement.href = loginBlockData.keeperUrl;
      loginBlockWindowUserInfoLogoutElement.href = loginBlockData.logoutUrl;

      for (var i = 0; i < loginBlockData.additionalUsers.length; i++) {
        var additionalUser = loginBlockData.additionalUsers[i];
        var getneratedLoginBlockWmidItemElement = _htmlGenerator__WEBPACK_IMPORTED_MODULE_2__["default"].getnerateLoginBlockWmidItem(options, additionalUser.wmid, additionalUser.displayName, additionalUser.avatarUrl, additionalUser.loginUrl);
        loginBlockWindowAdditionalWmidsList.appendChild(getneratedLoginBlockWmidItemElement);
      }

      loginBlockWindowLoginButtonElement.href = loginBlockData.reloginUrl;
      loginBlockWindowSettingsElement.href = loginBlockData.settingsUrl;
      loginBlockElement.classList.remove("is-not-logged-in");
      loginBlockElement.classList.add("is-logged-in");
    }

    options.onLoginBlockRendered({
      wmid: loginBlockData.wmid,
      tid: loginBlockData.tid,
      dataFillProgress: loginBlockData.dataFillProgress
    });
  },
  getLoginBlockData: function getLoginBlockData(options, singleSignOnResponse) {
    var wmid = options.wmid;

    if (wmid == null && options.recognize && singleSignOnResponse != null) {
      if (singleSignOnResponse.wmId != null) {
        wmid = singleSignOnResponse.wmId;
      } else if (singleSignOnResponse.users != null && singleSignOnResponse.users.length > 0) {
        wmid = singleSignOnResponse.users[0].wmId;
      }
    }

    var currentUser = null;
    var additionalUsers = [];

    if (singleSignOnResponse != null && singleSignOnResponse.users != null && singleSignOnResponse.users.length > 0) {
      for (var i = 0; i < singleSignOnResponse.users.length; i++) {
        var user = singleSignOnResponse.users[i];
        var dataFillProgress = 0;

        if (user.datafill != null) {
          dataFillProgress = user.datafill.progress;
        }

        if (user.wmId == wmid) {
          currentUser = {
            wmid: user.wmId,
            displayName: user.displayName,
            avatarUrl: user.avatarUrl,
            keeperType: user.keeperType,
            tid: user.tid,
            dataFillProgress: dataFillProgress,
            loginUrl: this.getLoginUrl(options, user.wmId)
          };
        } else {
          additionalUsers.push({
            wmid: user.wmId,
            displayName: user.displayName,
            avatarUrl: user.avatarUrl,
            keeperType: user.keeperType,
            tid: user.tid,
            dataFillProgress: dataFillProgress,
            loginUrl: this.getLoginUrl(options, user.wmId)
          });
        }
      }
    }

    if (wmid != null && currentUser == null) {
      currentUser = {
        wmid: wmid,
        displayName: "WMID: " + wmid,
        avatarUrl: this.getAvatarUrl(options, "tiny", wmid),
        keeperType: 0,
        tid: 0,
        dataFillProgress: 0,
        loginUrl: this.getLoginUrl(options, wmid)
      };
    }

    var loginBlockData = null;

    if (currentUser == null) {
      loginBlockData = {
        loggedOn: false,
        wmid: null,
        tid: null,
        dataFillProgress: null,
        registrationUrl: this.getRegistrationUrl(options),
        loginUrl: options.loginUrl != null ? options.loginUrl : this.getLoginUrl(options, null)
      };
    } else {
      loginBlockData = {
        loggedOn: true,
        wmid: currentUser.wmid,
        tid: currentUser.tid,
        dataFillProgress: currentUser.dataFillProgress,
        preview: "WMID: " + currentUser.wmid,
        displayName: currentUser.displayName,
        tinyAvatarUrl: this.getAvatarUrl(options, "tiny", currentUser.wmid),
        smallAvatarUrl: this.getAvatarUrl(options, "small", currentUser.wmid),
        eventsUrl: this.getEventsUrl(options, currentUser.wmid),
        keeperUrl: this.getKeeperUrl(options, currentUser.wmid, currentUser.keeperType),
        logoutUrl: options.logoutUrl != null ? options.logoutUrl : this.getLogoutUrl(options),
        reloginUrl: this.getReloginUrl(options),
        settingsUrl: this.getSettingsUrl(options),
        additionalUsers: additionalUsers
      };
    }

    return loginBlockData;
  },
  getRegistrationUrl: function getRegistrationUrl(options) {
    var registrationUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER ? registrationUrl = "https://start.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU ? registrationUrl = "https://start.webmoney.ru" : registrationUrl = "https://start.web.money";
    return registrationUrl;
  },
  getLoginServiceUrl: function getLoginServiceUrl(options) {
    var loginServiceUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY ? loginServiceUrl = "https://login.web.money" : loginServiceUrl = "https://login.wmtransfer.com";
    options.testMode ? loginServiceUrl += "/better" : loginServiceUrl += "";
    return loginServiceUrl;
  },
  getSettingsUrl: function getSettingsUrl(options) {
    var settingsUrl = this.getLoginServiceUrl(options) + "/GateKeeper/Options.aspx";
    return settingsUrl;
  },
  getLoginUrl: function getLoginUrl(options, wmid) {
    var loginUrl = this.getLoginServiceUrl(options) + "/GateKeeper.aspx" + "?RID=" + options.rid + "&Quiet=1" + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue() + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());

    if (wmid != null) {
      loginUrl += "&WmId=" + wmid;
    }

    return loginUrl;
  },
  getReloginUrl: function getReloginUrl(options) {
    var reloginUrl = this.getLoginServiceUrl(options) + "/GateKeeper.aspx" + "?RID=" + options.rid + "&WmId=" + "&Quiet=0" + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue() + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());
    return reloginUrl;
  },
  getLogoutUrl: function getLogoutUrl(options, wmid) {
    var logoutUrl = this.getLoginServiceUrl(options) + "/GateKeeper/LogOff.aspx" + "?RID=" + options.rid + "&WmId=" + wmid + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue() + "&ReturnUrl=" + encodeURIComponent(this.getReturnUrl());
    return logoutUrl;
  },
  getEventsUrl: function getEventsUrl(options, wmid) {
    var rid = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER ? rid = "6F26FAFD-ABAF-4E22-B5A6-A6A400E2D62B" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU ? rid = "E1D2A3F8-88E6-45DE-9A4C-A68F00BBBA1C" : rid = "B94F739D-DBC8-4CA5-9964-A8EA00CF636A";
    var eventsUrl = this.getLoginServiceUrl(options) + "/GateKeeper.aspx" + "?RID=" + rid + "&WmId=" + wmid + "&Quiet=1" + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue();
    return eventsUrl;
  },
  getKeeperUrl: function getKeeperUrl(options, wmid, keeperType) {
    var rid = null;

    if (keeperType == "1") {
      if (options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY) {
        rid = "D65F715A-DDF7-4BB2-8E4F-A8EA011BB678";
      } else if (options.lang == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_RU) {
        rid = "535E0FD1-2DB2-4906-B421-A3930133E774";
      } else {
        rid = "FDC51D96-C961-4967-A4CE-A3930133F11F";
      }
    } else {
      if (options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY) {
        rid = "7544EC73-6BA5-41AC-A397-A8EE007C635C";
      } else if (options.lang == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_RU) {
        rid = "448CCF32-1611-45B5-B3A9-A69B00DDDC31";
      } else {
        rid = "010B268D-88D1-4A18-AEDF-A89600EF7B9F";
      }
    }

    var keeperUrl = this.getLoginServiceUrl(options) + "/GateKeeper.aspx" + "?RID=" + rid + "&WmId=" + wmid + "&Quiet=1" + "&Rnd=" + _antiCache__WEBPACK_IMPORTED_MODULE_0__["default"].getValue();
    return keeperUrl;
  },
  getAvatarUrl: function getAvatarUrl(options, size, wmid) {
    var avatarUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER ? avatarUrl = "https://events.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU ? avatarUrl = "https://events.webmoney.ru" : avatarUrl = "https://events.web.money";
    avatarUrl += "/open/avatar.aspx?t=Url";
    avatarUrl += "&s=" + size;
    avatarUrl += "&w=" + wmid;
    return avatarUrl;
  },
  getReturnUrl: function getReturnUrl() {
    var retutnUrl = (location.pathname || "") + (location.search || "") + (location.hash || "");
    return retutnUrl;
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/menu.js":
/*!***********************************************!*\
  !*** ./src/webMoneyHeader/extensions/menu.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax */ "./src/webMoneyHeader/extensions/ajax.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var rootElement = options.rootElement;
    var url = options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE ? _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MENU_URL_MOBILE[options.lang] : _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MENU_URL[options.lang];
    var servicesMenu = rootElement.getElementsByClassName("n7g-svs")[0];
    var servicesMenuDd = rootElement.getElementsByClassName("n7g-svs-dd")[0];
    var individiualsMenu = rootElement.getElementsByClassName("n7g-ind")[0];
    var individiualsMenuDd = rootElement.getElementsByClassName("n7g-ind-dd")[0];
    var businessMenu = rootElement.getElementsByClassName("n7g-biz")[0];
    var businessMenuDd = rootElement.getElementsByClassName("n7g-biz-dd")[0];
    var burger = rootElement.getElementsByClassName("n7g-bgr")[0];
    var burgerDd = rootElement.getElementsByClassName("n7g-bgr-dd")[0];
    var servicesMenuItems = rootElement.getElementsByClassName("n7g-mni");
    var servicesMenuItemsDd = rootElement.getElementsByClassName("n7g-cti");
    var searchButton = rootElement.getElementsByClassName("n7g-sbtn")[0];
    var searchDd = rootElement.getElementsByClassName("n7g-srch-dd")[0];
    var pagesMenuItems = rootElement.getElementsByClassName("n7g-clm");
    searchButton.addEventListener("click", function (e) {
      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");
      this.parentNode.classList.toggle("is-a");
      searchDd.classList.toggle("is-a");
    });
    burger.addEventListener("click", function (e) {
      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      this.classList.toggle("is-a");
      burgerDd.classList.toggle("is-a");
      servicesMenu.classList.toggle("is-a");
      servicesMenuDd.classList.toggle("is-a");
    });
    Array.prototype.forEach.call(pagesMenuItems, function (element, index) {
      element.addEventListener('click', function () {
        this.classList.toggle("is-a");
      });
    });
    Array.prototype.forEach.call(servicesMenuItems, function (element, index) {
      element.addEventListener('click', function () {
        rootElement.querySelector(".n7g-mni.is-a").classList.remove("is-a");
        rootElement.querySelector(".n7g-cti.is-a").classList.remove("is-a");
        this.classList.add("is-a");
        servicesMenuItemsDd[index].classList.add("is-a");
      });
    });
    servicesMenu.addEventListener("click", function (e) {
      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      this.classList.toggle("is-a");
      servicesMenuDd.classList.toggle("is-a");
    });
    individiualsMenu.addEventListener("click", function (e) {
      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");
      businessMenu.classList.remove("is-a");
      businessMenuDd.classList.remove("is-a");
      this.classList.toggle("is-a");
      individiualsMenuDd.classList.toggle("is-a");
    });
    businessMenu.addEventListener("click", function (e) {
      individiualsMenu.classList.remove("is-a");
      individiualsMenuDd.classList.remove("is-a");
      servicesMenu.classList.remove("is-a");
      servicesMenuDd.classList.remove("is-a");
      this.classList.toggle("is-a");
      businessMenuDd.classList.toggle("is-a");
    });
  }
});

/***/ }),

/***/ "./src/webMoneyHeader/extensions/ml.js":
/*!*********************************************!*\
  !*** ./src/webMoneyHeader/extensions/ml.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tagName, props, nest) {
  var el = document.createElement(tagName);

  if (props) {
    for (var name in props) {
      if (name.indexOf("on") === 0) {
        el.addEventListener(name.substr(2).toLowerCase(), props[name], false);
      } else {
        el.setAttribute(name, props[name]);
      }
    }
  }

  if (!nest) {
    return el;
  }

  if (typeof nest === "string") {
    var t = document.createTextNode(nest);
    el.appendChild(t);
  } else if (nest instanceof Array) {
    for (var i = 0; i < nest.length; i++) {
      if (typeof nest[i] === "string") {
        var t = document.createTextNode(nest[i]);
        el.appendChild(t);
      } else if (nest[i] instanceof Node) {
        el.appendChild(nest[i]);
      }
    }
  } else if (nest instanceof Node) {
    el.appendChild(nest);
  }

  return el;
}

/***/ }),

/***/ "./src/webMoneyHeader/extensions/searchBlock.js":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/extensions/searchBlock.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie */ "./src/webMoneyHeader/extensions/cookie.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./src/webMoneyHeader/extensions/local.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init(options) {
    var rootElement = options.rootElement;
    var where = _cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(_consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_COOKIE_NAME);

    if (where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO && where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS && where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT && where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI && where != _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT) {
      where = _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO;
    }

    var placeholder = (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFindTitle_" + where);
    var searchBoxInput = rootElement.getElementsByClassName("n7g-sbxi")[0];
    var toggleSearch = rootElement.getElementsByClassName("n22g22-toggle-search")[0];
    var iconButton = rootElement.getElementsByClassName("n22g22-icon-search")[0];
    var searchMore = rootElement.getElementsByClassName("n7g-smr")[0];
    var searchMoreList = searchMore.getElementsByTagName("a");
    var toggleSearchButton = rootElement.getElementsByClassName("n22g22-toggle-search-button")[0];
    var closeSearchButton = rootElement.getElementsByClassName("n20g20-close-search-button")[0];
    searchBoxInput.value = placeholder;
    searchBoxInput.classList.add("n22g22-watermark");
    this.refreshSearchMore(options, searchMoreList, where);
    searchBoxInput.addEventListener("keypress", function (event) {
      if (event.which == 13) {
        event.preventDefault();
        searchBoxInput.blur();
        iconButton.click();
        return false;
      }
    });
    searchBoxInput.addEventListener("focus", function (event) {
      if (this.value == placeholder) {
        this.classList.remove("n22g22-watermark");
        this.value = "";
      }
    });
    searchBoxInput.addEventListener("blur", function (event) {
      this.value = this.value.trim();

      if (this.value == "") {
        this.classList.add("n22g22-watermark");
        this.value = placeholder;
      } // searchMore.style.display = "none";

    }); // iconButton.addEventListener("click", function (event) {
    //   var value = searchBoxInput.value;
    //   if (value.length > 0) {
    //     if (value != placeholder) {
    //       context.search(options, where, value);
    //     } else {
    //       searchBoxInput.focus();
    //     }
    //   }
    // });

    searchMore.addEventListener("mouseleave", function (event) {// searchMore.style.display = "none";
    });
    searchMore.addEventListener("click", function (event) {
      // searchMore.style.display = "none";
      searchBoxInput.focus();
    }); // toggleSearch.addEventListener("click", function (event) {
    //   var visible = searchMore.style.display == "block";
    //   searchMore.style.display = (!visible ? "block" : "none");
    // });

    var context = this;

    for (var i = 0; i < searchMoreList.length; i++) {
      searchMoreList[i].addEventListener("click", function (event) {
        where = this.attributes["where"].value;
        placeholder = (0,_local__WEBPACK_IMPORTED_MODULE_2__["default"])(options, "menuFindTitle_" + where);
        searchBoxInput.value = placeholder;
        searchBoxInput.focus(); // searchMore.style.display = "none";

        context.refreshSearchMore(options, searchMoreList, where);
        _cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(_consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_COOKIE_NAME, where, _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_COOKIE_EX_DAYS);
        return false;
      });
    }

    window.addEventListener("click", function (e) {
      if (!document.querySelector(".n7g-srh").contains(e.target) && !document.querySelector(".n7g-srch-dd").contains(e.target)) {
        // searchMore.style.display = "none"; 
        document.querySelector(".n7g-srh").classList.remove("is-a");
        document.querySelector(".n7g-srch-dd").classList.remove("is-a");
      }
    });

    if (options.view == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].VIEW_MOBILE) {
      toggleSearchButton.addEventListener("click", function (e) {
        e.stopPropagation();
        !this.classList.contains("is-activated") ? this.classList.add("is-activated") : this.classList.remove("is-activated");
      });
      closeSearchButton.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleSearchButton.classList.remove("is-activated");
      });
    }
  },
  refreshSearchMore: function refreshSearchMore(options, searchMoreList, where) {
    for (var i = 0; i < searchMoreList.length; i++) {
      if (searchMoreList[i].attributes["where"] != null) {
        if (searchMoreList[i].attributes["where"].value == where) {
          searchMoreList[i].classList.add("n7g-sml-a");
        } else {
          searchMoreList[i].classList.remove("n7g-sml-a");
        }
      }
    }
  },
  search: function search(options, where, value) {
    value = window.encodeURIComponent(value);
    var url = null;
    var searchInfoUrl = null;
    var searchUrl = null;
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? searchInfoUrl = "https://passport.wmtransfer.com/asp/CertView.asp" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? searchInfoUrl = "https://passport.webmoney.ru/asp/CertView.asp" : searchInfoUrl = "https://passport.web.money/asp/CertView.asp";
    options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? searchUrl = "https://search.wmtransfer.com" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? searchUrl = "https://search.webmoney.ru" : searchUrl = "https://search.web.money";

    switch (where) {
      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INFO:
        if (/^[RZEUXBYCGD]\d{12}$/i.test(value)) {
          url = searchInfoUrl + "?purse=" + value;
        } else if (/^\d{12}$/.test(value)) {
          url = searchInfoUrl + "?wmid=" + value;
        } else {
          url = searchUrl + "?q=" + value + "&locale=" + options.lang;
        }

        break;

      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_GOODS:
        url = _consts__WEBPACK_IMPORTED_MODULE_0__["default"].MEGASTOCK_URL + "?search=" + value + "&lang=" + options.lang;
        break;

      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_INOUT:
        var geoUrl = null;
        options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? geoUrl = "https://geo.wmtransfer.com/find/geosearchpage.aspx" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? geoUrl = "https://geo.webmoney.ru/find/geosearchpage.aspx" : geoUrl = "https://geo.web.money/find/geosearchpage.aspx";
        url = geoUrl + "?name=" + value + "&userID=" + "0045DF2D-7BD9-44FB-B5A8-9F1E5C08DC4A" + "&lang=" + options.lang;
        break;

      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_WIKI:
        var url = searchUrl + "?q=" + value + "&w=" + "webmoney_wiki";
        break;

      case _consts__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_WHERE_ANT:
        var supportUrl = null;
        options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_WMTRANSFER ? supportUrl = "https://support.wmtransfer.com/asp/index.asp" : options.domainType == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].DOMAIN_TYPE_RU ? supportUrl = "https://support.webmoney.ru/asp/index.asp" : supportUrl = "https://support.web.money/asp/index.asp";
        var url = supportUrl + "?ant_question=" + value + "&lang=" + (options.lang == _consts__WEBPACK_IMPORTED_MODULE_0__["default"].LANG_RU ? "rus" : "eng");
        break;
    }

    if (url != null) {
      window.open(url, "_blank");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyHeader/webMoneyHeader.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyHeader/webMoneyHeader.scss ***!
  \*****************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-SemiBold.woff2 */ "./src/webMoneyHeader/fonts/Manrope-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-SemiBold.woff */ "./src/webMoneyHeader/fonts/Manrope-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Regular.woff2 */ "./src/webMoneyHeader/fonts/Manrope-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Regular.woff */ "./src/webMoneyHeader/fonts/Manrope-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Medium.woff2 */ "./src/webMoneyHeader/fonts/Manrope-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Manrope-Medium.woff */ "./src/webMoneyHeader/fonts/Manrope-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bgr.svg */ "./src/webMoneyHeader/images/bgr.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bgr-a.svg */ "./src/webMoneyHeader/images/bgr-a.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/svs.svg */ "./src/webMoneyHeader/images/svs.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/svs-a.svg */ "./src/webMoneyHeader/images/svs-a.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-down.svg */ "./src/webMoneyHeader/images/arrow-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search-a.svg */ "./src/webMoneyHeader/images/search-a.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search.svg */ "./src/webMoneyHeader/images/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/login/events.svg */ "./src/webMoneyHeader/images/login/events.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/login/wallet.svg */ "./src/webMoneyHeader/images/login/wallet.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/login/setting.svg */ "./src/webMoneyHeader/images/login/setting.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/login/logout.svg */ "./src/webMoneyHeader/images/login/logout.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./images/login/plus.svg */ "./src/webMoneyHeader/images/login/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./images/login.svg */ "./src/webMoneyHeader/images/login.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap; }\n\n@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap; }\n\n@font-face {\n  font-family: \"Manrope\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap; }\n\n.n7g {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n  width: 100%;\n  box-shadow: 0 1px #eeeeee; }\n  .n7g * {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n    box-sizing: border-box;\n    background-color: transparent;\n    text-decoration: none; }\n    .n7g *:hover, .n7g *:active {\n      outline: none; }\n  .n7g a {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .n7g img {\n    border-style: none; }\n  .n7g-ctr {\n    width: 100%;\n    min-width: 320px;\n    max-width: 960px;\n    padding: 0 16px;\n    margin: 0 auto; }\n    @media (min-width: 992px) {\n      .n7g-ctr {\n        padding: 0; } }\n  .n7g-flv {\n    padding: 0;\n    display: flex;\n    align-items: center; }\n  .n7g-row {\n    display: flex; }\n  .n7g-spb {\n    justify-content: space-between; }\n  .n7g-bgr {\n    width: 48px;\n    height: 48px;\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center center no-repeat;\n    margin-left: -16px;\n    background-size: 32px;\n    cursor: pointer; }\n    .n7g-bgr.is-a {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") center center no-repeat;\n      background-size: 32px; }\n      @media (max-width: 767px) {\n        .n7g-bgr.is-a + .n7g-lft .n7g-mdl {\n          left: 0;\n          top: 48px;\n          right: 0;\n          align-items: center;\n          height: 48px; } }\n  @media (max-width: 767px) and (max-width: 575px) {\n    .n7g-bgr.is-a + .n7g-lft .n7g-mdl {\n      display: flex;\n      justify-content: center; } }\n    @media (min-width: 576px) {\n      .n7g-bgr {\n        display: none; } }\n    .n7g-bgr-dd {\n      display: none; }\n      .n7g-bgr-dd.is-a {\n        height: 48px;\n        display: block; }\n      @media (min-width: 576px) {\n        .n7g-bgr-dd {\n          display: none; }\n          .n7g-bgr-dd.is-a {\n            display: none; } }\n  .n7g-lft {\n    display: flex;\n    flex: 1; }\n  .n7g-llg {\n    display: flex;\n    align-items: center; }\n  .n7g-lgo {\n    padding: 8px 0;\n    display: block; }\n    @media (min-width: 768px) {\n      .n7g-lgo {\n        padding: 16px 0;\n        margin-right: 32px; } }\n  .n7g-lgi {\n    display: block;\n    height: 32px; }\n  .n7g-mdl {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    position: absolute;\n    display: none;\n    min-width: 320px; }\n    @media (min-width: 576px) {\n      .n7g-mdl {\n        position: static;\n        display: flex;\n        padding-left: 16px; } }\n    @media (min-width: 768px) {\n      .n7g-mdl {\n        padding-left: 0;\n        padding-right: 64px;\n        display: flex; } }\n  .n7g-dtr {\n    width: 2px;\n    background-color: #eeeeee;\n    height: calc(100% - 32px);\n    margin-right: 32px;\n    display: none; }\n    @media (min-width: 768px) {\n      .n7g-dtr {\n        display: block; } }\n  .n7g-svs {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") center center no-repeat;\n    width: 32px;\n    height: 32px;\n    cursor: pointer; }\n    @media (max-width: 767px) {\n      .n7g-svs {\n        background-size: 28px; } }\n    @media (min-width: 768px) {\n      .n7g-svs {\n        margin-right: 32px; } }\n    .n7g-svs.is-a {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") center center no-repeat; }\n      @media (max-width: 767px) {\n        .n7g-svs.is-a {\n          background-size: 28px; } }\n  @media (min-width: 768px) {\n    .n7g-cnt {\n      display: flex; } }\n  .n7g-mni {\n    cursor: default;\n    flex: 1;\n    font-family: \"Manrope\";\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 4px 0;\n    margin-bottom: 8px;\n    display: block; }\n    @media (min-width: 768px) {\n      .n7g-mni {\n        margin-bottom: 16px; } }\n  .n7g-cti {\n    flex: 1; }\n    @media (max-width: 767px) {\n      .n7g-cti {\n        display: flex;\n        flex-wrap: wrap; } }\n  .n7g-svi {\n    margin-bottom: 16px;\n    align-items: center;\n    padding-right: 16px;\n    display: flex; }\n    @media (min-width: 768px) {\n      .n7g-svi {\n        margin-bottom: 24px; } }\n  .n7g-sic {\n    width: 24px;\n    height: 24px;\n    margin-right: 8px; }\n    @media (min-width: 768px) {\n      .n7g-sic {\n        width: 40px;\n        height: 40px;\n        margin-right: 16px; } }\n  .n7g-sim {\n    width: 40px;\n    height: 40px;\n    display: flex;\n    border-radius: 8px;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 16px; }\n  .n7g-simg {\n    width: 24px;\n    display: block;\n    height: auto; }\n  .n7g-stl {\n    color: #707070;\n    font-family: \"Manrope\", sans-serif;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    cursor: pointer;\n    transition: all 0.2s;\n    display: block; }\n    .n7g-stl:hover {\n      color: #006cb4; }\n  .n7g-lks {\n    display: flex; }\n  .n7g-lki {\n    display: block;\n    padding: 0 8px;\n    font-size: 14px;\n    line-height: 20px;\n    color: #101828;\n    font-weight: 600;\n    cursor: pointer;\n    border-radius: 4px;\n    position: relative;\n    text-decoration: none;\n    font-family: \"Manrope\";\n    transition: all 0.2s; }\n    .n7g-lki.is-a {\n      color: #006cb4; }\n    @media (min-width: 768px) {\n      .n7g-lki {\n        padding: 6px 40px 6px 8px;\n        margin-right: 16px; }\n        .n7g-lki:after {\n          content: \"\";\n          display: block;\n          background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") center center no-repeat;\n          width: 32px;\n          height: 32px;\n          position: absolute;\n          right: 8px;\n          top: 50%;\n          margin-top: -16px; }\n        .n7g-lki.is-a {\n          color: #101828; }\n          .n7g-lki.is-a:after {\n            transform: rotate(-180deg);\n            margin-top: -15px; } }\n  .n7g-srh {\n    background-color: #fff;\n    border-radius: 4px; }\n    @media (min-width: 768px) {\n      .n7g-srh {\n        right: 40px;\n        width: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: center; } }\n    .n7g-srh.is-a .n7g-sbtn {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") center center no-repeat; }\n  .n7g-sbtn {\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") center center no-repeat;\n    width: 38px;\n    height: 38px;\n    cursor: pointer;\n    position: relative;\n    z-index: 1; }\n  .n7g-sbxi {\n    border: 1px solid #cfd1d4;\n    background-color: #fff;\n    border-radius: 4px;\n    width: 100%;\n    padding: 11px 16px;\n    line-height: 16px;\n    font-family: \"Manrope\";\n    font-size: 14px; }\n    .n7g-sbxi:focus {\n      border-color: #bac1c8;\n      outline: none;\n      border-color: #cfd1d4;\n      outline: none; }\n  .n7g-sbxb {\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 7px 16px;\n    display: block;\n    border: 1px solid;\n    border-radius: 4px;\n    background-color: #006cb4;\n    border-color: #006cb4;\n    color: #fff;\n    margin-left: 16px;\n    cursor: pointer; }\n  .n7g-smr {\n    display: flex; }\n    @media (max-width: 767px) {\n      .n7g-smr {\n        flex-wrap: wrap; } }\n  .n7g-sml {\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    padding: 7px 8px;\n    margin-right: 8px;\n    color: #758793;\n    border: 1px solid #eeeeee;\n    border-radius: 4px;\n    transition: all .2s ease; }\n    @media (max-width: 767px) {\n      .n7g-sml {\n        margin-bottom: 8px; } }\n    .n7g-sml:hover {\n      border-color: #758793; }\n    .n7g-sml.n7g-sml-a {\n      border-color: #006cb4;\n      color: #006cb4; }\n  .n7g-sctr {\n    display: flex;\n    margin-bottom: 16px; }\n  .n7g-rgt {\n    display: flex;\n    align-items: center; }\n  .n7g-lgb.is-logged-in .n7g-lbs {\n    display: none; }\n  .n7g-lgb.is-not-logged-in .n7g-lgw {\n    display: none; }\n  .n7g-lbs {\n    display: flex; }\n  .n7g-lgw {\n    position: relative;\n    display: flex;\n    height: 100%; }\n    .n7g-lgw.is-opened .n7g-wdw {\n      opacity: 3;\n      visibility: visible; }\n  .n7g-uln {\n    display: flex;\n    align-items: center;\n    cursor: pointer; }\n  .n7g-unm {\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 16px;\n    padding-right: 16px;\n    display: none; }\n    @media (min-width: 992px) {\n      .n7g-unm {\n        display: block; } }\n  .n7g-uim {\n    width: 32px;\n    height: 32px;\n    border-radius: 40px; }\n    @media (min-width: 768px) {\n      .n7g-uim {\n        width: 40px;\n        height: 40px; } }\n  .n7g-wdw {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s;\n    border: 1px solid #eeeeee;\n    background-color: #fff;\n    top: 100%;\n    z-index: 99;\n    width: 240px;\n    right: 0;\n    padding: 0 0 8px; }\n  .n7g-usr {\n    background-color: #f2f4f6;\n    padding: 8px;\n    margin-bottom: 8px; }\n  .n7g-uwr {\n    display: flex;\n    align-items: center; }\n  .n7g-uil {\n    display: block;\n    margin-right: 8px; }\n  .n7g-uifm {\n    display: block;\n    width: 40px;\n    height: 40px;\n    border-radius: 40px; }\n  .n7g-uif {\n    width: calc(100% - 48px); }\n  .n7g-ufnm {\n    color: #000;\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 16px;\n    display: block; }\n  .n7g-unt {\n    font-family: inherit;\n    font-weight: inherit;\n    font-size: inherit;\n    line-height: inherit; }\n  .n7g-itm {\n    color: #758793;\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 16px;\n    padding: 12px 8px 12px 40px;\n    display: block;\n    cursor: pointer;\n    transition: color .2s ease; }\n    .n7g-itm:hover {\n      color: #101828; }\n    .n7g-itm--profile {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") 15px center no-repeat;\n      background-size: 19px; }\n    .n7g-itm--purse {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") 16px center no-repeat;\n      background-size: 16px; }\n    .n7g-itm--settings {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") 15px center no-repeat;\n      background-size: 18px; }\n    .n7g-itm--logout {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") 16px center no-repeat;\n      background-size: 16px; }\n    .n7g-itm--login {\n      background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") 16px center no-repeat;\n      background-size: 13px;\n      font-size: 13px; }\n  .n7g-owd {\n    border-top: 1px solid #eeeeee;\n    margin-top: 8px;\n    color: #101828;\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 16px;\n    padding: 12px 16px;\n    display: block; }\n  .n7g-awli {\n    display: block;\n    padding: 8px 16px; }\n  .n7g-aww {\n    display: flex;\n    align-items: center; }\n  .n7g-awi {\n    display: block;\n    width: 24px;\n    height: 24px;\n    margin-right: 8px;\n    border-radius: 24px; }\n  .n7g-awif {\n    width: calc(100% - 40px); }\n  .n7g-awn {\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 16px;\n    color: #101828; }\n  .n7g-aww {\n    font-family: \"Manrope\";\n    font-weight: 500;\n    line-height: 16px;\n    font-size: 11px;\n    color: #758793; }\n  .n7g-lbi {\n    font-family: \"Manrope\";\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 7px 16px;\n    display: block;\n    border: 1px solid;\n    border-radius: 4px;\n    margin-right: -16px; }\n    @media (min-width: 768px) {\n      .n7g-lbi {\n        margin-left: 16px;\n        margin-right: 0; } }\n    @media (max-width: 767px) {\n      .n7g-lbi--log {\n        background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") center center no-repeat;\n        border: none;\n        width: 48px;\n        height: 48px;\n        border-radius: 0;\n        text-indent: -9999px;\n        background-size: 32px; } }\n    @media (min-width: 768px) {\n      .n7g-lbi--log {\n        background-color: #006cb4;\n        border-color: #006cb4;\n        color: #fff; } }\n    .n7g-lbi--reg {\n      border-color: #006cb4;\n      color: #006cb4;\n      display: none; }\n      @media (min-width: 768px) {\n        .n7g-lbi--reg {\n          display: block; } }\n  .n7g-slv {\n    opacity: 0;\n    visibility: hidden;\n    max-height: 0;\n    top: 64px;\n    left: 0;\n    right: 0;\n    padding: 0;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n    z-index: 2;\n    background-color: #fff;\n    border-top: 1px solid #eeeeee;\n    position: absolute; }\n    .n7g-slv.is-a {\n      max-height: 10000px;\n      opacity: 1;\n      visibility: visible;\n      position: static;\n      padding: 16px 0; }\n      @media (min-width: 576px) {\n        .n7g-slv.is-a {\n          padding: 16px 0 24px; } }\n      @media (min-width: 768px) {\n        .n7g-slv.is-a {\n          transition: all 0.3s;\n          padding: 32px 0 48px;\n          position: absolute;\n          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); } }\n    .n7g-slv .n7g-row {\n      margin: 0 -16px; }\n      @media (max-width: 767px) {\n        .n7g-slv .n7g-row {\n          display: block; } }\n    @media (max-width: 575px) {\n      .n7g-slv {\n        top: 96px; } }\n  .n7g-col {\n    flex: 1;\n    padding: 0 16px; }\n  @media (min-width: 768px) {\n    .n7g-clm + .n7g-clm {\n      margin-top: 24px; } }\n  @media (max-width: 767px) {\n    .n7g-clm .n7g-lnk {\n      display: none; }\n    .n7g-clm.is-a {\n      padding-bottom: 8px; }\n      .n7g-clm.is-a .n7g-ttl:after {\n        transform: rotate(-180deg);\n        margin-top: -15px; }\n      .n7g-clm.is-a .n7g-lnk {\n        display: block; } }\n  .n7g-ttl {\n    font-family: \"Manrope\";\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 4px 0;\n    display: block; }\n    @media (max-width: 767px) {\n      .n7g-ttl {\n        position: relative; }\n        .n7g-ttl:after {\n          content: \"\";\n          display: block;\n          background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") center center no-repeat;\n          width: 32px;\n          height: 32px;\n          position: absolute;\n          right: 8px;\n          top: 50%;\n          margin-top: -16px; } }\n    @media (min-width: 768px) {\n      .n7g-ttl {\n        margin-bottom: 4px; } }\n  .n7g-lnk {\n    display: block;\n    text-decoration: none;\n    font-family: \"Manrope\";\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n    padding: 4px 0;\n    color: #707070;\n    cursor: pointer;\n    transition: all 0.3s linear; }\n    .n7g-lnk:hover {\n      color: #006cb4; }\n", "",{"version":3,"sources":["webpack://./src/webMoneyHeader/webMoneyHeader.scss"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,oHAA2G;EAC3G,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EACE,sBAAsB;EACtB,oHAAyG;EACzG,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EACE,sBAAsB;EACtB,oHAAuG;EACvG,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB,EAAA;;AAiCpB;EApBE,SAAS;EACT,UAAU;EACV,SAAS;EACT,wBAAwB;EACxB,sBAAsB;EAkBtB,WAAW;EAEX,yBAAyB,EAAA;EAJ3B;IApBE,SAAS;IACT,UAAU;IACV,SAAS;IACT,wBAAwB;IACxB,sBAAsB;IAItB,6BAA6B;IAC7B,qBAAqB,EAAA;IACrB;MAEE,aAAa,EAAA;EAQjB;IA7BE,2BAA2B;IAC3B,yBAAyB;IACzB,wBAAwB;IACxB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB,EAAA;EAwBnB;IAHE,kBAAkB,EAAA;EAkBlB;IACE,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,cAAc,EAAA;IACd;MANF;QAOI,UAAU,EAAA,EAEb;EACD;IACE,UAAU;IACV,aAAa;IACb,mBAAmB,EAAA;EAErB;IACE,aAAa,EAAA;EAEf;IACE,8BAA8B,EAAA;EAEhC;IACE,WAAW;IACX,YAAY;IACZ,uFAAuE;IACvE,kBAAkB;IAClB,qBAAqB;IACrB,eAAe,EAAA;IANhB;MAQG,uFAAyE;MACzE,qBAAqB,EAAA;MACrB;QAVH;UAaS,OAAO;UACP,SAAS;UACT,QAAQ;UACR,mBAAmB;UACnB,YAAY,EAAA,EAKb;EAJC;IAlBT;MAmBW,aAAa;MACb,uBAAuB,EAAA,EAE1B;IAIP;MA1BF;QA2BI,aAAa,EAAA,EAehB;IAbC;MACE,aAAa,EAAA;MADd;QAGG,YAAY;QACZ,cAAc,EAAA;MAEhB;QANF;UAOI,aAAa,EAAA;UAPhB;YASK,aAAa,EAAA,EACd;EAIP;IACE,aAAa;IACb,OAAO,EAAA;EAET;IACE,aAAa;IACb,mBAAmB,EAAA;EAErB;IACE,cAAc;IACd,cAAc,EAAA;IACd;MAHF;QAII,eAAe;QACf,kBAAkB,EAAA,EAErB;EACD;IACE,cAAc;IACd,YAAY,EAAA;EAEd;IACE,OAAO;IACP,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,gBAAgB,EAAA;IAChB;MAPF;QAQI,gBAAgB;QAChB,aAAa;QACb,kBAAkB,EAAA,EAOrB;IALC;MAZF;QAaI,eAAe;QACf,mBAAmB;QACnB,aAAa,EAAA,EAEhB;EACD;IACE,UAAU;IACV,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa,EAAA;IACb;MANF;QAOI,cAAc,EAAA,EAEjB;EACD;IACE,uFAAuE;IACvE,WAAW;IACX,YAAY;IACZ,eAAe,EAAA;IACf;MALF;QAMI,qBAAqB,EAAA,EAWxB;IATC;MARF;QASI,kBAAkB,EAAA,EAQrB;IAjBA;MAYG,uFAAyE,EAAA;MACzE;QAbH;UAcK,qBAAqB,EAAA,EAExB;EAMD;IADF;MAEI,aAAa,EAAA,EAEhB;EACD;IACE,eAAe;IACf,OAAO;IACP,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,cAAc,EAAA;IACd;MAVF;QAWI,mBAAmB,EAAA,EAEtB;EACD;IACE,OAAO,EAAA;IACP;MAFF;QAGI,aAAa;QACb,eAAe,EAAA,EAElB;EACD;IACE,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa,EAAA;IACb;MALF;QAMI,mBAAmB,EAAA,EAEtB;EACD;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB,EAAA;IACjB;MAJF;QAKI,WAAW;QACX,YAAY;QACZ,kBAAkB,EAAA,EAErB;EACD;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB,EAAA;EAErB;IACE,WAAW;IACX,cAAc;IACd,YAAY,EAAA;EAEd;IACE,cAAc;IACd,kCAAkC;IAClC,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,cAAc,EAAA;IARf;MAUG,cAAc,EAAA;EAGlB;IACE,aAAa,EAAA;EAEf;IACE,cAAc;IACd,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,sBAAsB;IACtB,oBAAoB,EAAA;IAZrB;MAcG,cAAc,EAAA;IAEhB;MAhBF;QAiBI,yBAAyB;QACzB,kBAAkB,EAAA;QAlBrB;UAoBK,WAAW;UACX,cAAc;UACd,wFAA8E;UAC9E,WAAW;UACX,YAAY;UACZ,kBAAkB;UAClB,UAAU;UACV,QAAQ;UACR,iBAAiB,EAAA;QA5BtB;UA+BK,cAAc,EAAA;UA/BnB;YAiCO,0BAA0B;YAC1B,iBAAiB,EAAA,EAClB;EAIP;IACE,sBAAsB;IACtB,kBAAkB,EAAA;IAClB;MAHF;QAII,WAAW;QACX,WAAW;QACX,aAAa;QACb,mBAAmB;QACnB,uBAAuB,EAAA,EAc1B;IAtBA;MAYK,wFAA4E,EAAA;EAclF;IACE,wFAA0E;IAC1E,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,UAAU,EAAA;EAEZ;IACE,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;IACtB,eAAe,EAAA;IARhB;MAUG,qBAAqB;MACrB,aAAa;MACb,qBAAqB;MACrB,aAAa,EAAA;EAGjB;IACE,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,eAAe,EAAA;EAEjB;IACE,aAAa,EAAA;IACb;MAFF;QAGI,eAAe,EAAA,EAElB;EACD;IACE,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,wBAAwB,EAAA;IACxB;MAXF;QAYI,kBAAkB,EAAA,EAUrB;IAtBA;MAeG,qBAAqB,EAAA;IAfxB;MAmBG,qBAAqB;MACrB,cAAc,EAAA;EAGlB;IAOE,aAAa;IACb,mBAAmB,EAAA;EAErB;IACE,aAAa;IACb,mBAAmB,EAAA;EAEpB;IAGK,aAAa,EAAA;EAHlB;IAQK,aAAa,EAAA;EAInB;IACE,aAAa,EAAA;EAEf;IACE,kBAAkB;IAClB,aAAa;IACb,YAAY,EAAA;IAHb;MAMK,UAAU;MACV,mBAAmB,EAAA;EAIzB;IACE,aAAa;IACb,mBAAmB;IACnB,eAAe,EAAA;EAEjB;IACE,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,aAAa,EAAA;IACb;MAPF;QAQI,cAAc,EAAA,EAEjB;EACD;IACE,WAAW;IACX,YAAY;IACZ,mBAAmB,EAAA;IACnB;MAJF;QAKI,WAAW;QACX,YAAY,EAAA,EAEf;EACD;IACE,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,0CAA0C;IAC1C,oBAAoB;IACpB,yBAAyB;IACzB,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,gBAAgB,EAAA;EAElB;IACE,yBAAyB;IACzB,YAAY;IACZ,kBAAkB,EAAA;EAEpB;IACE,aAAa;IACb,mBAAmB,EAAA;EAErB;IACE,cAAc;IACd,iBAAiB,EAAA;EAEnB;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,mBAAmB,EAAA;EAErB;IACE,wBAAwB,EAAA;EAE1B;IACE,WAAW;IACX,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc,EAAA;EAEhB;IACE,oBAAoB;IACpB,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB,EAAA;EAEtB;IACE,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,2BAA2B;IAC3B,cAAc;IACd,eAAe;IACf,0BAA0B,EAAA;IAT3B;MAWG,cAAc,EAAA;IAEhB;MACE,sFAA8E;MAC9E,qBAAqB,EAAA;IAEvB;MACE,sFAA8E;MAC9E,qBAAqB,EAAA;IAEvB;MACE,sFAA+E;MAC/E,qBAAqB,EAAA;IAEvB;MACE,sFAA8E;MAC9E,qBAAqB,EAAA;IAEvB;MACE,sFAA4E;MAC5E,qBAAqB;MACrB,eAAe,EAAA;EAGnB;IACE,6BAA6B;IAC7B,eAAe;IACf,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,cAAc,EAAA;EAKhB;IACE,cAAc;IACd,iBAAiB,EAAA;EAEnB;IACE,aAAa;IACb,mBAAmB,EAAA;EAErB;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,mBAAmB,EAAA;EAErB;IACE,wBAAwB,EAAA;EAE1B;IACE,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc,EAAA;EAEhB;IACE,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,cAAc,EAAA;EAEhB;IACE,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB,EAAA;IACnB;MAVF;QAWI,iBAAiB;QACjB,eAAe,EAAA,EA0BlB;IAvBG;MADF;QAEI,wFAAyE;QACzE,YAAY;QACZ,WAAW;QACX,YAAY;QACZ,gBAAgB;QAChB,oBAAoB;QACpB,qBAAqB,EAAA,EAOxB;IALC;MAVF;QAWI,yBAAyB;QACzB,qBAAqB;QACrB,WAAW,EAAA,EAEd;IACD;MACE,qBAAqB;MACrB,cAAc;MACd,aAAa,EAAA;MACb;QAJF;UAKI,cAAc,EAAA,EAEjB;EAEH;IACE,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,OAAO;IACP,QAAQ;IACR,UAAU;IACV,yCAAyC;IACzC,UAAU;IACV,sBAAsB;IACtB,6BAA6B;IAC7B,kBAAkB,EAAA;IAZnB;MAcG,mBAAmB;MACnB,UAAU;MACV,mBAAmB;MACnB,gBAAgB;MAChB,eAAe,EAAA;MACf;QAnBH;UAoBK,oBAAoB,EAAA,EAQvB;MANC;QAtBH;UAuBK,oBAAoB;UACpB,oBAAoB;UACpB,kBAAkB;UAClB,0CAA0C,EAAA,EAE7C;IA5BF;MA8BG,eAAe,EAAA;MACf;QA/BH;UAgCK,cAAc,EAAA,EAEjB;IAQD;MA1CF;QA2CI,SAAS,EAAA,EAEZ;EACD;IACE,OAAO;IACP,eAAe,EAAA;EAIb;IAFH;MAGK,gBAAgB,EAAA,EAEnB;EACD;IAND;MAQK,aAAa,EAAA;IARlB;MAWK,mBAAmB,EAAA;MAXxB;QAcS,0BAA0B;QAC1B,iBAAiB,EAAA;MAf1B;QAmBO,cAAc,EAAA,EACf;EAIP;IACE,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,cAAc,EAAA;IACd;MAPF;QAQI,kBAAkB,EAAA;QARrB;UAUK,WAAW;UACX,cAAc;UACd,wFAA8E;UAC9E,WAAW;UACX,YAAY;UACZ,kBAAkB;UAClB,UAAU;UACV,QAAQ;UACR,iBAAiB,EAAA,EAClB;IAEH;MArBF;QAsBI,kBAAkB,EAAA,EAErB;EACD;IACE,cAAc;IACd,qBAAqB;IACrB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,cAAc;IACd,eAAe;IACf,2BAA2B,EAAA;IAV5B;MAYG,cAAc,EAAA","sourcesContent":["@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-SemiBold.woff2\") format(\"woff2\"), url(\"fonts/Manrope-SemiBold.woff\") format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-Regular.woff2\") format(\"woff2\"), url(\"fonts/Manrope-Regular.woff\") format(\"woff\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Manrope\";\r\n  src: url(\"fonts/Manrope-Medium.woff2\") format(\"woff2\"), url(\"fonts/Manrope-Medium.woff\") format(\"woff\");\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@mixin noSelection {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n@mixin resetDiv {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  vertical-align: baseline;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@mixin resetA {\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n  &:hover,\r\n  &:active {\r\n    outline: none;\r\n  }\r\n}\r\n\r\n@mixin resetImg {\r\n  border-style: none;\r\n}\r\n\r\n.n7g {\r\n  @include resetDiv;\r\n  width: 100%;\r\n  // overflow: hidden;\r\n  box-shadow: 0 1px #eeeeee;\r\n  * {\r\n    @include resetDiv;\r\n    @include resetA;\r\n  }\r\n  a {\r\n    @include noSelection;\r\n  }\r\n  img {\r\n    @include resetImg;\r\n  }\r\n  &-ctr {\r\n    width: 100%;\r\n    min-width: 320px;\r\n    max-width: 960px;\r\n    padding: 0 16px;\r\n    margin: 0 auto;\r\n    @media (min-width: 992px) {\r\n      padding: 0;\r\n    }\r\n  }\r\n  &-flv{\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &-row{\r\n    display: flex;\r\n  }\r\n  &-spb{\r\n    justify-content: space-between;\r\n  }\r\n  &-bgr{\r\n    width: 48px;\r\n    height: 48px;\r\n    background: transparent url(\"./images/bgr.svg\") center center no-repeat;\r\n    margin-left: -16px;\r\n    background-size: 32px;\r\n    cursor: pointer;\r\n    &.is-a{\r\n      background: transparent url(\"./images/bgr-a.svg\") center center no-repeat;\r\n      background-size: 32px;\r\n      @media (max-width: 767px) {\r\n        & + .n7g-lft {\r\n          .n7g-mdl {\r\n            left: 0;\r\n            top: 48px;\r\n            right: 0;\r\n            align-items: center;\r\n            height: 48px;\r\n            @media (max-width: 575px) {\r\n              display: flex;\r\n              justify-content: center;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n    @media (min-width: 576px) {\r\n      display: none;\r\n    }\r\n    &-dd{\r\n      display: none;\r\n      &.is-a{\r\n        height: 48px;\r\n        display: block;\r\n      }\r\n      @media (min-width: 576px) {\r\n        display: none;\r\n        &.is-a{\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &-lft{\r\n    display: flex;\r\n    flex: 1;\r\n  }\r\n  &-llg{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &-lgo{\r\n    padding: 8px 0;\r\n    display: block;\r\n    @media (min-width: 768px) {\r\n      padding: 16px 0;\r\n      margin-right: 32px;\r\n    }\r\n  }\r\n  &-lgi{ \r\n    display: block;\r\n    height: 32px;\r\n  }\r\n  &-mdl{\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    position: absolute;\r\n    display: none;\r\n    min-width: 320px;\r\n    @media (min-width: 576px) {\r\n      position: static;\r\n      display: flex;\r\n      padding-left: 16px;\r\n    }\r\n    @media (min-width: 768px) {\r\n      padding-left: 0;\r\n      padding-right: 64px;\r\n      display: flex;\r\n    }\r\n  }\r\n  &-dtr{\r\n    width: 2px;\r\n    background-color: #eeeeee;\r\n    height: calc(100% - 32px);\r\n    margin-right: 32px;\r\n    display: none;\r\n    @media (min-width: 768px) {\r\n      display: block;\r\n    }\r\n  }\r\n  &-svs{\r\n    background: transparent url(\"./images/svs.svg\") center center no-repeat;\r\n    width: 32px;\r\n    height: 32px;\r\n    cursor: pointer;\r\n    @media (max-width: 767px) {\r\n      background-size: 28px;\r\n    }\r\n    @media (min-width: 768px) {\r\n      margin-right: 32px;\r\n    }\r\n    &.is-a{\r\n      background: transparent url(\"./images/svs-a.svg\") center center no-repeat;\r\n      @media (max-width: 767px) {\r\n        background-size: 28px;\r\n      }\r\n    }\r\n  }\r\n  // &-mnu{\r\n  //   display: flex;\r\n  // }\r\n  &-cnt{\r\n    @media (min-width: 768px) {\r\n      display: flex;\r\n    }\r\n  }\r\n  &-mni{\r\n    cursor: default;\r\n    flex: 1;\r\n    font-family: \"Manrope\";\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    padding: 4px 0;\r\n    margin-bottom: 8px;\r\n    display: block;\r\n    @media (min-width: 768px) {\r\n      margin-bottom: 16px;\r\n    }\r\n  }\r\n  &-cti{\r\n    flex: 1;\r\n    @media (max-width: 767px) {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n    }\r\n  }\r\n  &-svi{\r\n    margin-bottom: 16px;\r\n    align-items: center;\r\n    padding-right: 16px;\r\n    display: flex;\r\n    @media (min-width: 768px) {\r\n      margin-bottom: 24px;\r\n    }\r\n  }\r\n  &-sic{\r\n    width: 24px;\r\n    height: 24px;\r\n    margin-right: 8px;\r\n    @media (min-width: 768px) {\r\n      width: 40px;\r\n      height: 40px;\r\n      margin-right: 16px;\r\n    }\r\n  }\r\n  &-sim{\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    border-radius: 8px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 16px;\r\n  }\r\n  &-simg{\r\n    width: 24px;\r\n    display: block;\r\n    height: auto;\r\n  }\r\n  &-stl{\r\n    color: #707070;\r\n    font-family: \"Manrope\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    cursor: pointer;\r\n    transition: all 0.2s;\r\n    display: block;\r\n    &:hover{\r\n      color: #006cb4;\r\n    }\r\n  }\r\n  &-lks{\r\n    display: flex;\r\n  }\r\n  &-lki{\r\n    display: block;\r\n    padding: 0 8px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    color: #101828;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-family: \"Manrope\";\r\n    transition: all 0.2s;\r\n    &.is-a {\r\n      color: #006cb4;\r\n    }\r\n    @media (min-width: 768px) {\r\n      padding: 6px 40px 6px 8px;\r\n      margin-right: 16px;\r\n      &:after{\r\n        content: \"\";\r\n        display: block;\r\n        background: transparent url(\"./images/arrow-down.svg\") center center no-repeat;\r\n        width: 32px;\r\n        height: 32px;\r\n        position: absolute;\r\n        right: 8px;\r\n        top: 50%;\r\n        margin-top: -16px;\r\n      }\r\n      &.is-a {\r\n        color: #101828;\r\n        &:after {\r\n          transform: rotate(-180deg);\r\n          margin-top: -15px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &-srh{\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    @media (min-width: 768px) {\r\n      right: 40px;\r\n      width: 40px;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n    &.is-a{\r\n      .n7g-sbtn{\r\n        background: transparent url(\"./images/search-a.svg\") center center no-repeat;\r\n      }\r\n      // left: 32px;\r\n      // z-index: 1;\r\n      // width: 100%;\r\n      // border-color: #f2f4f6;\r\n      // .n7g-sctr{\r\n      //   display: block;\r\n      // }\r\n    }\r\n  }\r\n  &-srch-dd{\r\n\r\n  }\r\n  &-sbtn{\r\n    background: transparent url(\"./images/search.svg\") center center no-repeat;\r\n    width: 38px;\r\n    height: 38px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  &-sbxi{\r\n    border: 1px solid #cfd1d4;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    width: 100%;\r\n    padding: 11px 16px;\r\n    line-height: 16px;\r\n    font-family: \"Manrope\";\r\n    font-size: 14px;\r\n    &:focus{\r\n      border-color: #bac1c8;\r\n      outline: none;\r\n      border-color: #cfd1d4;\r\n      outline: none;\r\n    }\r\n  }\r\n  &-sbxb{\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    padding: 7px 16px;\r\n    display: block;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    background-color: #006cb4;\r\n    border-color: #006cb4;\r\n    color: #fff;\r\n    margin-left: 16px;\r\n    cursor: pointer;\r\n  }\r\n  &-smr{\r\n    display: flex;\r\n    @media (max-width: 767px) {\r\n      flex-wrap: wrap;\r\n    }\r\n  }\r\n  &-sml{\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    padding: 7px 8px;\r\n    margin-right: 8px;\r\n    color: #758793;\r\n    border: 1px solid #eeeeee;\r\n    border-radius: 4px;\r\n    transition: all .2s ease;\r\n    @media (max-width: 767px) {\r\n      margin-bottom: 8px;\r\n    }\r\n    &:hover{\r\n      border-color: #758793;\r\n    }\r\n    &.n7g-sml-a{\r\n      // background-color: #006cb4;\r\n      border-color: #006cb4;\r\n      color: #006cb4;\r\n    }\r\n  }\r\n  &-sctr{\r\n    // display: none;\r\n    // position: absolute;\r\n    // left: 0;\r\n    // top: 0;\r\n    // right: 0;\r\n    // bottom: 0;\r\n    display: flex;\r\n    margin-bottom: 16px;\r\n  }\r\n  &-rgt{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &-lgb{\r\n    &.is-logged-in{\r\n      .n7g-lbs{\r\n        display: none;\r\n      }\r\n    }\r\n    &.is-not-logged-in{\r\n      .n7g-lgw{\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n  &-lbs{\r\n    display: flex;\r\n  }\r\n  &-lgw{\r\n    position: relative;\r\n    display: flex;\r\n    height: 100%;\r\n    &.is-opened{\r\n      .n7g-wdw{\r\n        opacity: 3;\r\n        visibility: visible;\r\n      }\r\n    }\r\n  }\r\n  &-uln{\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n  }\r\n  &-unm{\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    padding-right: 16px;\r\n    display: none;\r\n    @media (min-width: 992px) {\r\n      display: block;\r\n    }\r\n  }\r\n  &-uim{\r\n    width: 32px;\r\n    height: 32px;\r\n    border-radius: 40px;\r\n    @media (min-width: 768px) {\r\n      width: 40px;\r\n      height: 40px;\r\n    }\r\n  }\r\n  &-wdw{\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    position: absolute;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.3s;\r\n    border: 1px solid #eeeeee;\r\n    background-color: #fff;\r\n    top: 100%;\r\n    z-index: 99;\r\n    width: 240px;\r\n    right: 0;\r\n    padding: 0 0 8px;\r\n  }\r\n  &-usr{\r\n    background-color: #f2f4f6;\r\n    padding: 8px;\r\n    margin-bottom: 8px;\r\n  }\r\n  &-uwr{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &-uil{\r\n    display: block;\r\n    margin-right: 8px;\r\n  } \r\n  &-uifm{\r\n    display: block;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 40px;\r\n  }\r\n  &-uif{\r\n    width: calc(100% - 48px);\r\n  }\r\n  &-ufnm{\r\n    color: #000;\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    display: block;\r\n  }\r\n  &-unt{\r\n    font-family: inherit;\r\n    font-weight: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n  }\r\n  &-itm{\r\n    color: #758793;\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    padding: 12px 8px 12px 40px;\r\n    display: block;\r\n    cursor: pointer;\r\n    transition: color .2s ease;\r\n    &:hover{\r\n      color: #101828;\r\n    }\r\n    &--profile{\r\n      background: transparent url(\"./images/login/events.svg\") 15px center no-repeat;\r\n      background-size: 19px;\r\n    }\r\n    &--purse{\r\n      background: transparent url(\"./images/login/wallet.svg\") 16px center no-repeat;\r\n      background-size: 16px;\r\n    }\r\n    &--settings{\r\n      background: transparent url(\"./images/login/setting.svg\") 15px center no-repeat;\r\n      background-size: 18px;\r\n    }\r\n    &--logout{\r\n      background: transparent url(\"./images/login/logout.svg\") 16px center no-repeat;\r\n      background-size: 16px;\r\n    }\r\n    &--login{\r\n      background: transparent url(\"./images/login/plus.svg\") 16px center no-repeat;\r\n      background-size: 13px;\r\n      font-size: 13px;\r\n    }\r\n  }\r\n  &-owd{\r\n    border-top: 1px solid #eeeeee;\r\n    margin-top: 8px;\r\n    color: #101828;\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    padding: 12px 16px;\r\n    display: block;\r\n  }\r\n  &-awl{\r\n\r\n  }\r\n  &-awli{\r\n    display: block;\r\n    padding: 8px 16px;\r\n  }\r\n  &-aww{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  &-awi{\r\n    display: block;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin-right: 8px;\r\n    border-radius: 24px;\r\n  }\r\n  &-awif{\r\n    width: calc(100% - 40px);\r\n  }\r\n  &-awn{\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #101828;\r\n  }\r\n  &-aww{\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    font-size: 11px;\r\n    color: #758793;\r\n  }\r\n  &-lbi{\r\n    font-family: \"Manrope\";\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    padding: 7px 16px;\r\n    display: block;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    margin-right: -16px; \r\n    @media (min-width: 768px) {\r\n      margin-left: 16px;\r\n      margin-right: 0; \r\n    }\r\n    &--log{\r\n      @media (max-width: 767px) {\r\n        background: transparent url(\"./images/login.svg\") center center no-repeat;\r\n        border: none;\r\n        width: 48px;\r\n        height: 48px;\r\n        border-radius: 0;\r\n        text-indent: -9999px;\r\n        background-size: 32px;\r\n      }\r\n      @media (min-width: 768px) {\r\n        background-color: #006cb4;\r\n        border-color: #006cb4;\r\n        color: #fff;\r\n      }\r\n    }\r\n    &--reg{\r\n      border-color: #006cb4;\r\n      color: #006cb4;\r\n      display: none;\r\n      @media (min-width: 768px) {\r\n        display: block;\r\n      }\r\n    }\r\n  }\r\n  &-slv{\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    max-height: 0;\r\n    top: 64px;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 0;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n    z-index: 2;\r\n    background-color: #fff;\r\n    border-top: 1px solid #eeeeee;\r\n    position: absolute;\r\n    &.is-a{\r\n      max-height: 10000px;\r\n      opacity: 1;\r\n      visibility: visible;\r\n      position: static;\r\n      padding: 16px 0;\r\n      @media (min-width: 576px) {\r\n        padding: 16px 0 24px;\r\n      }\r\n      @media (min-width: 768px) {\r\n        transition: all 0.3s;\r\n        padding: 32px 0 48px;\r\n        position: absolute;\r\n        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n      }\r\n    }\r\n    .n7g-row{\r\n      margin: 0 -16px;\r\n      @media (max-width: 767px) {\r\n        display: block;\r\n      }\r\n    }\r\n    // .n7g-col{\r\n    //   @media (max-width: 767px) {\r\n    //     @media (min-width: 576px) {\r\n    //       display: flex;\r\n    //     }\r\n    //   }\r\n    // }\r\n    @media (max-width: 575px) {\r\n      top: 96px;\r\n    }\r\n  }\r\n  &-col{\r\n    flex: 1;\r\n    padding: 0 16px;\r\n  }\r\n  &-clm{\r\n    & + .n7g-clm {\r\n      @media (min-width: 768px) {\r\n        margin-top: 24px;\r\n      } \r\n    }\r\n    @media (max-width: 767px) {\r\n      .n7g-lnk{\r\n        display: none;\r\n      }\r\n      &.is-a{\r\n        padding-bottom: 8px;\r\n        .n7g-ttl{\r\n          &:after {\r\n            transform: rotate(-180deg);\r\n            margin-top: -15px;\r\n          }\r\n        }\r\n        .n7g-lnk{\r\n          display: block;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &-ttl{\r\n    font-family: \"Manrope\";\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    padding: 4px 0;\r\n    display: block;\r\n    @media (max-width: 767px) {\r\n      position: relative;\r\n      &:after{\r\n        content: \"\";\r\n        display: block;\r\n        background: transparent url(\"./images/arrow-down.svg\") center center no-repeat;\r\n        width: 32px;\r\n        height: 32px;\r\n        position: absolute;\r\n        right: 8px;\r\n        top: 50%;\r\n        margin-top: -16px;\r\n      }\r\n    }\r\n    @media (min-width: 768px) {\r\n      margin-bottom: 4px;\r\n    }\r\n  }\r\n  &-lnk{\r\n    display: block;\r\n    text-decoration: none;\r\n    font-family: \"Manrope\";\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    padding: 4px 0;\r\n    color: #707070;\r\n    cursor: pointer;\r\n    transition: all 0.3s linear;\r\n    &:hover{\r\n      color: #006cb4;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/webMoneyHeader/webMoneyHeader.scss":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/webMoneyHeader.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./webMoneyHeader.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/webMoneyHeader/webMoneyHeader.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_webMoneyHeader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-Medium.woff":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-Medium.woff ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "455e3f5bb2cbb93667d5.woff";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-Medium.woff2":
/*!*******************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-Medium.woff2 ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "230210f79765501c1ab7.woff2";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-Regular.woff":
/*!*******************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-Regular.woff ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d1384c3221d6bf5c6f29.woff";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-Regular.woff2":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-Regular.woff2 ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "15e344c414d52dd672ef.woff2";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-SemiBold.woff":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-SemiBold.woff ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a716e35a52599b8145e4.woff";

/***/ }),

/***/ "./src/webMoneyHeader/fonts/Manrope-SemiBold.woff2":
/*!*********************************************************!*\
  !*** ./src/webMoneyHeader/fonts/Manrope-SemiBold.woff2 ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "45721b3429a1fa90f750.woff2";

/***/ }),

/***/ "./src/webMoneyHeader/images/arrow-down.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyHeader/images/arrow-down.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a9de67558370894eebf0.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/bgr-a.svg":
/*!*********************************************!*\
  !*** ./src/webMoneyHeader/images/bgr-a.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fded50e06c7bdce8c1e0.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/bgr.svg":
/*!*******************************************!*\
  !*** ./src/webMoneyHeader/images/bgr.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "1128829a86f9198e67a7.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/icon-search-toggle-down.svg":
/*!***************************************************************!*\
  !*** ./src/webMoneyHeader/images/icon-search-toggle-down.svg ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "0ee4ed65779ce31e0b9e.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/login.svg":
/*!*********************************************!*\
  !*** ./src/webMoneyHeader/images/login.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "4afc6b04163b4a957e76.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/login/events.svg":
/*!****************************************************!*\
  !*** ./src/webMoneyHeader/images/login/events.svg ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c30b9a1bc72441ca0d83.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/login/logout.svg":
/*!****************************************************!*\
  !*** ./src/webMoneyHeader/images/login/logout.svg ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c47edd5b75280407e05d.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/login/plus.svg":
/*!**************************************************!*\
  !*** ./src/webMoneyHeader/images/login/plus.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "4bc5b410bee92bdc90f9.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/login/setting.svg":
/*!*****************************************************!*\
  !*** ./src/webMoneyHeader/images/login/setting.svg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c588bf5bb9d6b86a4c8e.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/login/wallet.svg":
/*!****************************************************!*\
  !*** ./src/webMoneyHeader/images/login/wallet.svg ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7d542699e22eb18d0dd0.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/search-a.svg":
/*!************************************************!*\
  !*** ./src/webMoneyHeader/images/search-a.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "5578246bc51d2aaf4cf3.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/search.svg":
/*!**********************************************!*\
  !*** ./src/webMoneyHeader/images/search.svg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2265db788626cfd6a06c.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/apple.svg":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/images/services/apple.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d0323e848f44ce5f5646.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/bitcoin-cash.svg":
/*!*************************************************************!*\
  !*** ./src/webMoneyHeader/images/services/bitcoin-cash.svg ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2b3b303879fb8d2f6199.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/bitcoin.svg":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/images/services/bitcoin.svg ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "913e8f058974bb2a146e.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/ethereum.svg":
/*!*********************************************************!*\
  !*** ./src/webMoneyHeader/images/services/ethereum.svg ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "5412d71a859486566a83.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/files.svg":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/images/services/files.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "75e88a61f7647705dda7.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/indx.svg":
/*!*****************************************************!*\
  !*** ./src/webMoneyHeader/images/services/indx.svg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "6fbbe10acffd1b7752b7.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/litecoin.svg":
/*!*********************************************************!*\
  !*** ./src/webMoneyHeader/images/services/litecoin.svg ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2f590da4552b73b30955.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/memo.svg":
/*!*****************************************************!*\
  !*** ./src/webMoneyHeader/images/services/memo.svg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2bbea3fab251e405e727.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/notes.svg":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/images/services/notes.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "b15e9ba14b7f68abd190.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/publicant.svg":
/*!**********************************************************!*\
  !*** ./src/webMoneyHeader/images/services/publicant.svg ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "0b6a14f88f16239c98b6.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/softactivation.svg":
/*!***************************************************************!*\
  !*** ./src/webMoneyHeader/images/services/softactivation.svg ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "edf7c33af11f1b64fe48.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/steam.svg":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/images/services/steam.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "38ec13605c9a247eb43a.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/video-c.svg":
/*!********************************************************!*\
  !*** ./src/webMoneyHeader/images/services/video-c.svg ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "6ce4c2c00488eb1cfd2d.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/services/video.svg":
/*!******************************************************!*\
  !*** ./src/webMoneyHeader/images/services/video.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a26e2497292f72c5adee.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/svs-a.svg":
/*!*********************************************!*\
  !*** ./src/webMoneyHeader/images/svs-a.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "2130d8979d3de745afc8.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/svs.svg":
/*!*******************************************!*\
  !*** ./src/webMoneyHeader/images/svs.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "23f48315246a2e5f7f73.svg";

/***/ }),

/***/ "./src/webMoneyHeader/images/wm-logo.svg":
/*!***********************************************!*\
  !*** ./src/webMoneyHeader/images/wm-logo.svg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f00ea7780171df717238.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"webmoney-header": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************************************!*\
  !*** ./src/webMoneyHeader/webMoneyHeader.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WebMoneyHeader; }
/* harmony export */ });
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extensions_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensions/consts */ "./src/webMoneyHeader/extensions/consts.js");
/* harmony import */ var _extensions_htmlGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/htmlGenerator */ "./src/webMoneyHeader/extensions/htmlGenerator.js");
/* harmony import */ var _extensions_loginBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/loginBlock */ "./src/webMoneyHeader/extensions/loginBlock.js");
/* harmony import */ var _extensions_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/menu */ "./src/webMoneyHeader/extensions/menu.js");
/* harmony import */ var _extensions_searchBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/searchBlock */ "./src/webMoneyHeader/extensions/searchBlock.js");
 // IE 11 не поддерживает конструктор URL, который использует webpack 5.







__webpack_require__(/*! ./webMoneyHeader.scss */ "./src/webMoneyHeader/webMoneyHeader.scss");

function WebMoneyHeader() {
  this.init = function (options) {
    if (options == null) {
      console.error("options empty");
      return;
    }

    var rootElement = options.rootElement;

    if (rootElement == null) {
      console.error("rootElement empty");
      return;
    }

    var testMode = options.testMode === true ? true : false;
    var domainType = this.tryParseDomainType(options);
    var view = this.tryParseView(options);
    var lang = this.tryParseLang(options);
    var recognize = options.recognize === false ? false : true;
    var wmid = options.wmid == "" || options.wmid == null ? null : options.wmid;
    var loginUrl = options.loginUrl == "" || options.loginUrl == null ? null : options.loginUrl;
    var logoutUrl = options.logoutUrl == "" || options.logoutUrl == null ? null : options.logoutUrl;
    var rid = options.rid == "" || options.rid == null ? null : options.rid;
    var onLoginBlockRendered = this.tryParseOnLoginBlockRendered(options);

    if (rid == null) {
      console.error("rid empty");
      return;
    }

    options = {
      rootElement: rootElement,
      testMode: testMode,
      domainType: domainType,
      view: view,
      lang: lang,
      recognize: recognize,
      wmid: wmid,
      loginUrl: loginUrl,
      logoutUrl: logoutUrl,
      rid: rid,
      onLoginBlockRendered: onLoginBlockRendered
    };

    if (options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_ADAPTIVE) {
      this.initAdaptive(options);
    } else {
      this.initNotAdaptive(options);
    }
  };

  this.initNotAdaptive = function (options) {
    var generatedElement = _extensions_htmlGenerator__WEBPACK_IMPORTED_MODULE_2__["default"].generate(options);
    options.rootElement.innerHTML = "";
    options.rootElement.appendChild(generatedElement);
    _extensions_menu__WEBPACK_IMPORTED_MODULE_4__["default"].init(options);
    _extensions_searchBlock__WEBPACK_IMPORTED_MODULE_5__["default"].init(options);
    _extensions_loginBlock__WEBPACK_IMPORTED_MODULE_3__["default"].init(options);
  };

  this.initAdaptive = function (options) {
    var desktopMinClientWidth = 960;

    if (document.documentElement.clientWidth < desktopMinClientWidth) {
      options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE;
      this.initNotAdaptive(options);
    } else {
      options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_DESKTOP;
      this.initNotAdaptive(options);
    }

    var context = this;
    window.addEventListener("resize", function () {
      var clientWidth = document.documentElement.clientWidth;

      if (clientWidth < desktopMinClientWidth && options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_DESKTOP) {
        options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE;
        context.initNotAdaptive(options);
      } else if (clientWidth >= desktopMinClientWidth && options.view == _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE) {
        options.view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_DESKTOP;
        context.initNotAdaptive(options);
      }
    });
  };

  this.tryParseDomainType = function (options) {
    var domainType = options.domainType;

    if (domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER && domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY && domainType != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU) {
      try {
        var hostname = window.location.hostname;

        if (hostname.indexOf("wmtransfer") != -1) {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_WMTRANSFER;
        } else if (hostname.indexOf("ru") != -1) {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_RU;
        } else {
          domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY;
        }
      } catch (_unused) {
        domainType = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].DOMAIN_TYPE_MONEY;
      }
    }

    return domainType;
  };

  this.tryParseView = function (options) {
    var view = options.view;

    if (view != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_DESKTOP && view != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_MOBILE && view != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_ADAPTIVE) {
      view = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].VIEW_ADAPTIVE;
    }

    return view;
  };

  this.tryParseLang = function (options) {
    var lang = options.lang;

    if (lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_RU && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_EN && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_ES && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_PT && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_TR && lang != _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_VN) {
      lang = _extensions_consts__WEBPACK_IMPORTED_MODULE_1__["default"].LANG_EN;
    }

    return lang;
  };

  this.tryParseOnLoginBlockRendered = function (options) {
    var onLoginBlockRendered = options.onLoginBlockRendered;

    if (typeof onLoginBlockRendered != "function") {
      onLoginBlockRendered = function onLoginBlockRendered(renderedData) {};
    }

    var onLoginBlockRenderedWrapper = function onLoginBlockRenderedWrapper(renderedData) {
      try {
        onLoginBlockRendered(renderedData);
      } catch (error) {
        console.log(error);
      }
    };

    return onLoginBlockRenderedWrapper;
  };
}
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=webmoney-header.js.map