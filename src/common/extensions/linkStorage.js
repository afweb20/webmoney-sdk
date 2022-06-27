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
  logoLink: {
    t: [],
    d: constAllDomainTypes,
    u: []
  },
  // =========================
  // Сервисы (1)
  // =========================
  servWmx: {
    t: "WMX (Bitcoin)",
    u: "wmx.wmtransfer.com"
  },
  servWmh: {
    t: "WMH (Bitcoin Cash)",
    u: "wmh.wmtransfer.com"
  },
  servWml: {
    t: "WML (Litecoin)",
    u: "wml.wmtransfer.com"
  },
  servWmf: {
    t: "WMF (Ethereum)",
    u: "wmf.wmtransfer.com"
  },
  servWithdrawToBankCard: {
    t: ["Вывод на карту", "Withdraw to card", "Retirar a tarjeta", 
      "Retirar para o cartão",
      "Karta geri çek"
    ],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/cards"]
  },
  servBankTransfer: {
    t: ["Банковский перевод", "Bank transfer", "Transferencia bancaria", 
      "Transferência bancária",
      "Banka transferi"
    ],
    u: "withdraw.web.money/Home/Index"
  },
  servGames: {
    t: ["Онлайн-игры", "Online games", "Juegos en línea", 
      "Jogos online",
      "Cevrimiçi oyunlar"
    ],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/online-games"]
  },
  servApple: {
    t: ["Подарочная карта Apple", "Apple gift card"],
    u: "plati.market/games/podarochnaja-karta-app-store-itunes/90/"
  },
  servSteam: {
    t: ["Steam"],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/operator/5714"]
  },
  // =========================
  // Приложения
  // =========================
  appAppStore: {
    t: ["App Store"],
    u: "itunes.apple.com/us/app/my-webmoney/id524382727"
  },
  appGooglePlay: {
    t: ["Google Play"],
    u: "play.google.com/store/apps/details?id=com.webmoney.my"
  },
  appMicrosoftStore: {
    t: ["Microsoft Store"],
    u: "www.microsoft.com/store/apps/9NQ5N286PQC0"
  },
  appWindows: {
    t: ["Windows"],
    u: "winpro.web.money/"
  },
  appMacOS: {
    t: ["Mac OS"],
    u: "itunes.apple.com/ru/app/my-webmoney/id807337125?l=ru&amp;ls=1&amp;mt=12"
  },
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
  topUpBankCard: {
    t: ["С банковской карты", "Bank card", "Tarjeta bancaria", 
      "Cartão do banco",
      "Banka kartı"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "?method=bank-card_method"]
  },
  topUpEMoney: {
    t: ["Электронными деньгами", "E-money", "Dinero electrónico", 
      "Dinheiro eletrônico",
      "Elektronik paralar ile"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "?method=e-money_method"]
  },
  
  topUpBankAccount: {
    t: ["С банковского счета", "Bank account", "Cuenta bancaria", 
      "Conta bancária",
      "Banka hesabından"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "?method=bank-account_method"]
  },
  topUpCash: {
    t: ["Наличными", "Cash", "Recargar", 
      "Dinheiro", 
      "Nakit olarak"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutTopup, "?method=cash_method"]
  },
  consultations: {
    t: ["Платные видеоконсультации", "Paid video consultations", "Videoconsultas pagadas", 
      "Videoconsultas pagas",
      "Ücretli görüntülü konsültasyonlar"
    ],
    u: "events.web.money/consultations"
  },
  softactivation: {
    t: ["Продажа цифровых товаров", "Sale of digital goods", "Venta de bienes digitales", 
      "Venda de produtos digitais",
      "Dijital ürünlerin satışı"
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
  debt: {
    t: ["Debt: сервис выдачи онлайн займов", "Debt", "Debt", 
      "Debt",
      "Debt"
    ],
    u: ["debt.wmtransfer.com", ["", "?lang=en", "?lang=en", 
      "?lang=en", 
      "?lang=en"
    ]]
  },
  credit: {
    t: ["Биржа кредитов", "Credit Exchange", "Credit Exchange", 
      "Credit Exchange",
      "Credit Exchange"
    ],
    u: ["debt.wmtransfer.com", ["", "?lang=en", "?lang=en", 
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
    t: ["Видеозвонки и онлайн-трансляции", "Video calls and online broadcasts", "Videollamadas y transmisiones en línea", 
      "Videochamadas e transmissões online",
      "Görüntülü aramalar ve çevrimiçi yayınlar"
    ],
    u: "video.webmoney.ru"
  },
  memo: {
    t: ["Управление закладками", "Bookmark management", "Gestión de marcadores", 
      "Gerenciamento de favoritos",
      "Yer imi yönetimi"
    ],
    u: "memo.web.money"
  },
  notes: {
    t: ["Верстка и публикация заметок", "Layout and publication of notes", "Maquetación y publicación de notas.", 
      "Layout e publicação de notas",
      "Notların düzeni ve yayınlanması"
    ],
    u: "wmid.com/notes"
  },
  analytics: {
    t: ["Сервис аналитики", "Analytics", "Analítica", 
      "Análise",
      "Analitik"
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
    t: ["Наличными", "Cash", "Dinero", 
      "Dinheiro",
      "Nakit olarak"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "?method=cash_method"]
  },
  withdrawToBankCard: {
    t: ["На банковскую карту", "To bank card", "A una tarjeta bancaria", 
      "Ao cartão bancário",
      "Banka kartına"
    ],
    u: ["telepay.web.money", ["/ru", "/en", "/en", "/en", "/en"], "/cards"]
  },
  withdrawBankAccount: {
    t: ["На банковский счет", "Bank account", "Cuenta bancaria", 
      "Conta bancária",
      "Banka hesabına"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "?method=bank-account_method"]
  },
  withdrawEmoney: {
    t: ["Электронными деньгами", "E-money", "Dinero electrónico", 
      "Dinheiro eletrônico",
      "Elektronik paralar ile"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlInoutWithdraw, "?method=e-money_method"]
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
    u: "advisor.web.money"
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
    t: ["Антивирус: программы по подписке", "Antivirus: software subscription", "Antivirus: suscripción de software", 
      "Antivírus: assinatura de software",
      "Antivirüs: yazılım aboneliği"
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
      "Kredi hizmeti",
      "Borç Servisi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlIndividualsCredit, "/debt_service/get_loan.shtml"]
  },
  passport: {
    t: ["Аттестация", "Verification", "Atestados", 
      "Atestados",
      "Belgelendirme"
    ],
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
    t: ["Благотворительность", "Charity", "Caridad", 
      "Caridade",
      "Hayır kurumu"
    ],
    u: "funding.web.money/donations"
  },
  crowdfunding: {
    t: ["Краудфандинг", "Crowdfunding", "Recaudación de fondos", 
      "Financiamento colaborativo",
      "Kraudfanding"
    ],
    u: "funding.web.money/crowd"
  },
  groupBuying: {
    t: ["Коллективные покупки", "Group buying", "Compra en grupo", 
      "Compra em grupo",
      "Grup satın almalar"
    ],  
    u: "funding.web.money/group"
  },
  eventOrganization: {
    t: ["Организация мероприятий", "Event organization", "Organización del evento", 
      "Organização do evento",
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
    t: ["Перевод с карты на карту", "Transfer from card to card", "Transferencia de tarjeta a tarjeta", 
      "Transferência de cartão para cartão",
      "Karttan karta transfer"
    ],
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
  developers: {
    t: ["Разработчикам", "For developers", "Para desorolladores",
    "Para programadores",
    "Geliştiriciler için"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/api.shtml"]
  },
  purseManagement2: {
    
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
    
    t: ["Merchant: создать магазин", "Web Merchant Interface", "Merchant: hacer una tienda", 
      "Merchant: criar uma loja",
      "Merchant: dükkan oluşturmak"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/merchant.shtml"]
  },
  paymentsToBankAccounts: {
    
    t: ["Прием платежей на банковский счет", "Payments to bank accounts", "Pagos a cuentas bancarias", 
      "Aceitar pagamentos para a conta bancária",
      "Banka hesaplarına yapılan ödemeler"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlBusinessAcceptPaymentsOnlineShop, "/bank.shtml"]
  },
  megastock2: {
    
    t: ["Megastock: каталог магазинов", "MegaStock: Directory of sites", "Megastock: catálogo de tiendas", 
      "Megastock: catálogo de lojas",
      "Megastock: dükkanların kataloğu"
    ],
    u: "megastock.ru"
  },
  digiseller2: {
    
    t: ["Digiseller: цифровые товары", "Digiseller: Catalog of digital goods", "Digiseller: catálogo de productos", 
      "Digiseller: catálogo de produtos",
      "Digiseller: dijital ürünler"
    ],
    u: "digiseller.ru/outside/sellgoods.asp"
  },
  funding: {
    
    t: ["Сбор средств", "Fundraising", "Colecta de los fondos", "Angariação de fundos",
      "Kaynak toplanması"
    ],
    u: "funding.web.money"
  },
  mestcom2: {
    
    t: ["Mestcom: продажа рекламы", "Mestcom: Selling Ads", "Mestcom: comprar las publicidades", 
      "Mestcom: venda de publicidade",
      "Mestcom: reklam satışı"
    ],
    u: "www.mestkom.ru/sell.aspx"
  },
  cashbox2: {
    
    t: ["Cashbox: покупка действий на сайте", "Cashbox: Purchase website activities", "Cashbox: comprar las acciones en el sitio web", 
      "Cashbox: comprar as ações no site",
      "Cashbox: sitede hareketlerin satın alınması"
    ],
    u: "cashbox.ru"
  },
  digiseller3: {
    
    t: ["Digiseller: виджет агентского магазина", "Digiseller: Agent shop widget", "Digiseller: vidget de la tienda de agencia", 
      "Digiseller: widget da loja de agência",
      "Digiseller: ajente dükkanı widjeti"
    ],
    u: "www.digiseller.ru/outside/agentshop.asp"
  },
  login: {
    
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
    
    t: ["Masspayment: массовые выплаты", "Mass Payments", "Masspayment: Pagos masivos", 
      "Masspayment: pagamentos em massa",
      "Masspayment: toplu ödemeler"
    ],
    u: "masspayment.web.money"
  },
  exchanger2: {
    
    t: ["Exchanger: обменный пункт", "Exchanger: Exchange service", "Exchanger: Cambio", 
      "Exchanger: troca",
      "Exchanger: döviz bürosu"
    ],
    u: "exchanger.web.money"
  },
  contracts: {
    
    t: ["Контракты: регистрация текстов Соглашений", "Contracts: Agreement text registration", "Contractos: Registración de los textos de los convencios", 
      "Contratos: Registro dos textos dos acordos",
      "Kontratlar: Sözleşmelerin metinlerinin kaydı"
    ],
    u: "arbitrage.web.money/asp/bContract.asp"
  },
  arbitrage2: {
    
    t: ["Арбитраж: разрешение споров", "Arbitrage: Dispute resolution", "Arbitraje: solución de los debates", 
      "Arbitragem: solução das discussões",
      "Arbitraj: anlaşmazlıkların giderilmesi"
    ],
    u: "arbitrage.web.money"
  },
  escrow2: {
    
    t: ["Escrow: защищенные сделки", "Escrow: Secure transactions", "Escrow: transacciones protegidas", 
      "Escrow: transações protegidas",
      "Escrow: korumalı anlaşmalar"
    ],
    u: "escrow.webmoney.ru"
  },
  creditMarket: {
    
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
    
    t: ["Отчетность", "Reporting", "Presentación de informes", 
      "Relatórios",
      "Raporlama"
    ],
    u: "report.webmoney.ru"
  },
  financialSupport2: {
    
    t: ["Служба финансовой поддержки", "Financial support", "Servicio del soporte financiero", 
      "Suporte para serviço financeiro",
      "Mali destek hizmeti"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  biz: {
    
    t: ["Выплаты участникам системы", "Payments to system participants", "Pagos a los participantes del sistema", 
      "Pagamentos aos participantes do sistema",
      "Sistem katılımcılarına yapılan ödemeler"
    ],
    u: "biz.web.money", 
  },
  biz2: {
    
    t: ["Прием платежей", "Accepting payments", "Aceptando el pago", 
      "Aceitando pagamento",
      "Odeme kabul"
    ],
    u: "biz.web.money"
  },
  // =========================
  // Для бизнеса (3)
  // =========================
  shareholder2: {
    
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
    
    t: ["INDX: фондовая биржа", "INDX: Stock exchange", "INDX: bolsa de fondos", 
      "INDX: bolsa de fundos",
      "INDX: Borsa"
    ],
    u: "indx.money/about/eth/#"
  },
  debtMarket: {
    
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
    
    t: ["Mentor: контроль исполнения задач", "Mentor: Task management service", "Mentor: control de las tareas", 
      "Mentor: controlar a execução das tarefas",
      "Mentor: görevlerin yürütmesinin kontrolü"
    ],
    u: "mentor.wmtransfer.com"
  },
  secureMail: {
    
    t: ["Защищенная почта", "Secure mail", "Correspondencia protegída", 
      "Mail protegido",
      "Korumalı posta"
    ],
    u: "mail.wmid.com"
  },
  files2: {
    
    t: ["Файловое хранилище", "File storage", "Tus archivos", 
      "Seus arquivos",
      "Dosya deposu"
    ],
    u: "files.web.money"
  },
  letterPostingService: {
    
    t: ["Отправка бумажных писем", "Letter posting service", "Mandar «las» cartas de papel", 
      "Envio de Cartas «em» papel",
      "Hard «copy mektupların» gönderilmesi"
    ],
    u: "letters.wmtransfer.com"
  },
  newsline: {
    
    t: ["Лента новостей: рассылка", "Newsline: Subscription", "Noticias: boletín", 
      "Notícias: newsletter",
      "Haber dizisi: gönderim"
    ],
    u: "subscribe.web.money/subscribe"
  },
  programInterfaces: {
    
    t: ["API: программные интерфейсы", "API: Program interfaces", "API: aplicaciónes", 
      "API: aplicações",
      "API: program arayüzleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/api.shtml"]
  },
  stylesAndDesign: {
    
    t: ["Дизайн и стили", "Styles and design", "Diseño y estilos", 
      "Desenho e estilos",
      "Dizayn ve stiller"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlDevelopers, "/logos.shtml"]
  },
  technicalSupport2: {
    
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
    
    t: ["Регистрация", "Registration", "Registración", 
      "Inscrição",
      "Kayıt"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/registration.shtml"]
  },
  inoutOptions: {
    
    t: ["Выбор способа ввода/вывода", "Choosing a method for input/output", "Seleccionar el metodo de recarga/retiro", 
      "Selecione o método de recarga / retirada",
      "Para yatırma/çekme yönteminin seçimi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/inout_options.shtml"]
  },
  acceptPayments: {
    
    t: ["Выбор способа приема платежей", "Choosing a method for accepting payments", "Buscar los métodos de recarga", 
      "Pesquisa métodos de recarga",
      "Ödeme kabul etme yönteminin seçimi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/accept_payments.shtml"]
  },
  repayment: {
    
    t: ["Возврат займа на Debt", "Repayment", "Reembolso", 
      "Reembolso",
      "Geri ödeme"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment.shtml"]
  },
  repaymentCPurse: {
    
    t: ["Возврат кредита с С кошелька", "Repayment c purse", "Reembolso c monedero", 
      "Reembolso c bolsa",
      "Geri ödeme cüzdanı"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/repayment_c.shtml"]
  },
  controlRecovery: {
    
    t: ["Восстановление контроля", "Control recovery", "Recuperar el control", 
      "Recuperar o controle",
      "Parolanın onarılması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/recovery.shtml"]
  },
  keepers: {
    
    t: ["Выбор способа управления", "Choosing an account management method", "Seleccionar el metodo para manejar las cuentas", 
      "Selecione o método para lidar com as contas",
      "Yönetim şeklinin seçimi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/keepers.shtml"]
  },
  poluchenieAttestata: {
    
    t: ["Получение аттестата", "Receiving WebMoney passport", "Recibir el atestado", 
      "Receber certificado",
      "Belge alma"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/poluchenie_attestata.shtml"]
  },
  operationLimits: {
    
    t: ["Лимиты на операции", "Operation limits", "Límites de la operación", 
      "Limites da operação",
      "İşlem limitleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/operation_limits.shtml"]
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
  annullation: {
    
    t: ["Отказ в обслуживании", "Annullation", "Denegación del servicio", 
      "Negação de serviço",
      "Servis reddi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/annullation.shtml"]
  },
  deleteWmid: {
    
    t: ["Порядок удаления WMID", "Delete WMID", "Remover su WMID", 
      "Remover o seu WMID",
      "Kaldırıcı veya seu WMID"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/delete_wmid.shtml"]
  },
  // =========================
  // Помощь (2)
  // =========================
  changeBl: {
    
    t: ["Изменение BL", "Changing BL", "Cambio de BL", 
      "Troca de BL",
      "BL değişikliği"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/change_bl.shtml"]
  },
  actionBlock: {
    
    t: ["Действия при блокировке кошелька", "Action block", "Bloque de acción", 
      "Bloco de ação",
      "Eylem bloğu"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/action_block.shtml"]
  },
  photoId: {
    
    t: ["Создание PhotoID", "Create PhotoID", "Crear PhotoID", 
      "Criar PhotoID",
      "PhotoID oluştur"
    ],
    u: "wiki.web.money/projects/webmoney/wiki/PhotoID"
  },
  nevozvratDebt: {
    
    t: ["Невозвраты займов на Debt", "Loan defaults", "No hay reembolso de prestamos (se dice asi y también existe desembolso) en Debt", 
      "Não reembolso de empréstimos da dívida",
      "Debt’deki borçların iade edilmemesi"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/nevozvrat_debt.shtml"]
  },
  transactionHistory: {
    
    t: ["Получение выписки операций", "Getting transacion history", "Historal de Transacciones", 
      "Histórico de Transações",
      "İşlem ekstrelerinin alınması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/transaction_history.shtml"]
  },
  crowdfunding2: {
    
    t: ["Сбор средств", "Crowdfunding", "Cobro de fondos", 
      "Recolha de fundos",
      "Kaynak toplanması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpStart, "/croudfunding.shtml"]
  },
  exchange: {
    
    t: ["Обменные операции", "Exchange operations", "Operaciones de cambio", 
      "Operações de câmbio",
      "Döviz işlemleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/exchange.shtml"]
  },
  securityLimits: {
    
    t: ["Расходные лимиты", "Spending limits", "Límites de egresos", 
      "A limitação das despesas",
      "Harcama limitleri"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/security_limits.shtml"]
  },
  tabu: {
    
    t: ["Запрещенные виды деятельности", "Restricted activities", "tipos de actividades prohibidas", 
      "Tipos de atividades proibidas",
      "Yasaklanan faaliyetler"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/tabu.shtml"]
  },
  bankCards: {
    
    t: ["Банковские карты", "Bank cards", "Tarjetas bancarias", 
      "Cartões bancários",
      "Banka kartları"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpTechnical, "/cards.shtml"]
  },
  checkCorr: {
    
    t: ["Проверка корреспондентов", "Correspondent check", "comprobar los contactos", 
      "Verificação de interlocutores",
      "Yazışmaların kontrolü"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpGeneral, "/check_corr.shtml"]
  },
  automats: {
    
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
    
    t: ["Где скачать приложения", "Download software", "Descargar software", 
      "Download de software",
      "Yazılım"
    ],
    u: [["wiki.webmoney.ru/projects/webmoney/wiki/gde_skachat_prilozheniya_webmoney", "wiki.wmtransfer.com/projects/webmoney/wiki/Download_software"]]
  },
  AskQuestion: {
    
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
    
    t: ["Использование WMID юридическими лицами", "Usage of WMID by legal entities", "Uso del WMID por personas juridicas", 
      "Uso de WMID por entidades jurídicas",
      "WMID’nin tüzel kişiler tarafından kullanılması"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/legal_entity_wmid.shtml"]
  },
  videoTutorials: {
    
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
    
    t: ["Финансовая поддержка", "Financial support", "Soporte financiero", 
      "Suporte Financeiro",
      "Mali destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/financial.shtml"]
  },
  technicalSupport3: {
    
    t: ["Техническая поддержка", "Technical support", "Soporte técnico", 
      "Suporte técnico",
      "Teknik destek"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlSupport, "/tech.shtml"]
  },
  searchPayment: {
    
    t: ["Розыск платежей", "Search payment", "Buscar pagos", 
      "Pesquisar pagamentos",
      "Ödeme arama"
    ],
    d: constAllDomainTypes,
    u: [constLangs, constUrlHelpFinancial, "/search_pay.shtml"]
  },
  interactiveMap: {
    
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