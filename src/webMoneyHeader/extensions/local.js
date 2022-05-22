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
    "ru": "Мой Кошелек",
    "en": "My Purse",
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

export default function (options, key) {

  return localization[key][options.lang];
}