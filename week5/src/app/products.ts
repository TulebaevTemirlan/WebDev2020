export interface Product{
  name:string,
  price:number,
  description:string,
  rating:number,
  link:string,
  img:string[],
  categoryID:number;
  productID:number;
}

export var product = {
  name:null,
  price:null,
  description:null,
  rating:null,
  link:null,
  img:null,
  categoryID:null,
  productID:null
}

export var productCategory=[
  product,product,product,product,product,product,product,product,product,product
]
  
  export const products1 = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:11
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone5.jpg"],
      categoryID:1,
      productID:12
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg",, "assets/images/phone6.jpg"],
      categoryID:1,
      productID:13
    },
    {
      name: 'Phone4 Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone5.jpg", "assets/images/phone6.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:14
    },
    {
      name: 'Phone5 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/iphone2.jpg"],
      categoryID:1,
      productID:15
    },
    {
      name: 'Phone6 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/iphone1.png"],
      categoryID:1,
      productID:16
    },

    {
      name: 'Phone7 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:1,
      productID:17
    },

    {
      name: 'Phone8 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone2.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:1,
      productID:18
      
    },
    {
      name: 'Phone9 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:19
    },
    {
      name: 'Phone10 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:1,
      productID:20
    }
    
  ]
  
  export const products2 = [
    {
      name: 'EWA супер-мини',
      price: 14,
      description: 'Водонепроницаемый Bluetooth динамик 2018 Япония лучший звук/бас качество EWA A106 Pro Портативный Динамик Bluetooth 5,0',
      rating: 5,
      link:'https://aliexpress.ru/item/32976654989.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&s=p&algo_pvid=f602b6c7-df61-4c92-a027-1a65997c6afd&algo_expid=f602b6c7-df61-4c92-a027-1a65997c6afd-0&btsid=0ab6f83a15823402375595680e5bd2&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/ewa1.jpg", "assets/images/ewa2.jpg", "assets/images/ewa3.jpg"],
      categoryID: 2,
      productID: 21
    },
    {
      name: 'HLTON LED',
      price: 5,
      description: 'Беспроводной Bluetooth динамик мини музыкальный аудио сабвуфер TF USB FM радио громкоговоритель с микрофоном для телефона MP3',
      rating: 3,
      link:'https://aliexpress.ru/item/32955838142.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&s=p&algo_pvid=f602b6c7-df61-4c92-a027-1a65997c6afd&algo_expid=f602b6c7-df61-4c92-a027-1a65997c6afd-1&btsid=0ab6f83a15823402375595680e5bd2&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/hlton1.jpg", "assets/images/hlton2.jpg", "assets/images/hlton3.jpg"],
      categoryID: 2,
      productID: 22
    },
    {
      name: 'Divoom Timebox Evo Bluetooth',
      price: 54,
      description: 'портативный динамик с будильником программируемый светодиодный дисплей для создания пиксельного искусства уникальный подарок',
      rating: 4,
      link:'https://aliexpress.ru/item/32927172496.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&s=p&algo_pvid=f602b6c7-df61-4c92-a027-1a65997c6afd&algo_expid=f602b6c7-df61-4c92-a027-1a65997c6afd-2&btsid=0ab6f83a15823402375595680e5bd2&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/divoom1.jpg", "assets/images/divoom2.jpg",, "assets/images/divoom3.jpg"],
      categoryID: 2,
      productID: 23
    },
    {
      name: 'Zealot S1',
      price: 17.29,
      description: 'Bluetooth динамик fm радио водонепроницаемый открытый велосипедный динамик Портативный беспроводной Колонка Бумбокс + фонарик + крепление для велосипеда',
      rating: 4.9,
      link:'https://aliexpress.ru/item/32848857207.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&s=p&algo_pvid=f602b6c7-df61-4c92-a027-1a65997c6afd&algo_expid=f602b6c7-df61-4c92-a027-1a65997c6afd-3&btsid=0ab6f83a15823402375595680e5bd2&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/zealot1.jpg", "assets/images/zealot2.jpg", "assets/images/zealot3.jpg"],
      categoryID: 2,
      productID: 24
    },
    {
      name: 'Myolsd',
      price: 16.46,
      description: 'Стерео Мощный Bluetooth динамик беспроводной портативный динамик fm-радио TF USB MP3 музыкальный центр Bluetooth Колонка для телефона компьютера',
      rating: 5,
      link:'https://aliexpress.ru/item/4000420986716.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&s=p&algo_pvid=f602b6c7-df61-4c92-a027-1a65997c6afd&algo_expid=f602b6c7-df61-4c92-a027-1a65997c6afd-6&btsid=0ab6f83a15823402375595680e5bd2&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/myolsd1.jpg", "assets/images/myolsd2.jpg", "assets/images/myolsd3.jpg"],
      categoryID: 2,
      productID: 25
    },
    {
      name: 'JBL Go Smart 2',
      price: 110.99,
      description: 'Портативный Bluetooth IPX7 водонепроницаемый беспроводной громкий динамик стерео Музыка Интеллект аудио динамик с микрофоном',
      rating: 5,
      link:'https://aliexpress.ru/item/4000287688322.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&algo_pvid=f602b6c7-df61-4c92-a027-1a65997c6afd&algo_expid=f602b6c7-df61-4c92-a027-1a65997c6afd-22&btsid=0ab6f83a15823402375595680e5bd2&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/jbl1.jpg", "assets/images/jbl2.jpg", "assets/images/jbl3.png"],
      categoryID: 2,
      productID: 26
    },

    {
      name: 'Xiaomi Mi',
      price: 41.24,
      description: 'динамик Ai, Wi-Fi, Bluetooth, голосовой пульт дистанционного управления, портативный умный Домашний Светильник, музыкальный плеер, приложение Xiaoai для Android Iphone',
      rating: 2.0,
      link:'https://aliexpress.ru/item/4000552149066.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&algo_pvid=f602b6c7-df61-4c92-a027-1a65997c6afd&algo_expid=f602b6c7-df61-4c92-a027-1a65997c6afd-36&btsid=0ab6f83a15823402375595680e5bd2&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/mi1.jpg", "assets/images/mi2.jpg", "assets/images/mi3.jpg"],
      categoryID: 2,
      productID: 27
    },

    {
      name: 'BT501',
      price: 19.38,
      description: 'Беспроводной Bluetooth портативный динамик usb зарядка Bluetooth аудио стерео бас эффект расширение хранения FM Hands-free ',
      rating: 5,
      link: 'https://aliexpress.ru/item/4000244827057.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&algo_pvid=f602b6c7-df61-4c92-a027-1a65997c6afd&algo_expid=f602b6c7-df61-4c92-a027-1a65997c6afd-56&btsid=0ab6f83a15823402375595680e5bd2&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/bt1.jpg", "assets/images/bt2.jpg", "assets/images/bt3.jpg"],
      categoryID: 2,
      productID: 28
    },
    {
      name: 'TG 108',
      price: 33.58,
      description: 'портативный интеллектуальный беспроводной Bluetooth динамик стерео басовый эффект многофункциональный динамик Универсальный электронный продукт',
      rating: 5,
      link:'https://aliexpress.ru/item/33058178786.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&algo_pvid=b0029d07-d794-4675-a406-766e13786033&algo_expid=b0029d07-d794-4675-a406-766e13786033-17&btsid=0be3764515823466294757498e8561&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/tg1.jpg", "assets/images/tg2.jpg", "assets/images/tg3.jpg"],
      categoryID: 2,
      productID: 29
    },
    {
      name: 'GGMM Мини',
      price: 33.49,
      description: 'Bluetooth беспроводной портативный динамик 10 Вт HiFi DSP колонка с микрофоном карманный размер поддержка голосового ассистента 14H воспроизведение музыки',
      rating: 1,
      link:'https://aliexpress.ru/item/4000261660554.html?spm=a2g0o.productlist.0.0.6b643860I1aRwZ&algo_pvid=b0029d07-d794-4675-a406-766e13786033&algo_expid=b0029d07-d794-4675-a406-766e13786033-20&btsid=0be3764515823466294757498e8561&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/ggmm1.jpg", "assets/images/ggmm2.jpg", "assets/images/ggmm3.jpg"],
      categoryID: 2,
      productID: 30
    }
    
  ]

  export const products3 = [
    {
      name: 'LEJIADA',
      price: 26.88,
      description: '814 светодиодный мини-проектор портативный проектор с USB домашний медиа-проектор поддерживает плеер 1080P Встроенный динамик',
      rating: 3,
      link:'https://aliexpress.ru/item/10000017996451.html?spm=a2g0o.productlist.0.0.2c383083PFL5rd&s=p&algo_pvid=222a84ca-77ed-4de3-95cf-6e361e80b51b&algo_expid=222a84ca-77ed-4de3-95cf-6e361e80b51b-0&btsid=0ab6f82115823485002664940e34e4&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/lejiada1.jpg", "assets/images/lejiada2.jpg", "assets/images/lejiada3.jpg"],
      categoryID: 3,
      productID: 31
    },
    {
      name: 'ALSTON M5 M5W Full HD 1080P',
      price: 200,
      description: 'проектор 4K 6500 люмен кинотеатр Proyector Beamer Android WiFi Bluetooth hdmi VGA AV USB с подарком',
      rating: 4.9,
      link:'https://aliexpress.ru/item/32965475341.html?spm=a2g0o.productlist.0.0.2c383083PFL5rd&s=p&algo_pvid=222a84ca-77ed-4de3-95cf-6e361e80b51b&algo_expid=222a84ca-77ed-4de3-95cf-6e361e80b51b-1&btsid=0ab6f82115823485002664940e34e4&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/alston1.jpg", "assets/images/alston2.jpg", "assets/images/alston3.jpg"],
      categoryID: 3,
      productID: 32
    },
    {
      name: 'WZATCO C2',
      price: 279.23,
      description: '4K Full HD 1080P светодиодный проектор Android 9,0 Wifi умный Домашний кинотеатр видео проэктор с цифровой коррекцией keystone',
      rating: 4.8,
      link:'https://aliexpress.ru/item/33054120874.html?spm=a2g0o.productlist.0.0.2c383083PFL5rd&s=p&algo_pvid=222a84ca-77ed-4de3-95cf-6e361e80b51b&algo_expid=222a84ca-77ed-4de3-95cf-6e361e80b51b-2&btsid=0ab6f82115823485002664940e34e4&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/wzatco1.jpg", "assets/images/wzatco2.jpg",, "assets/images/wzatco3.jpg"],
      categoryID: 3,
      productID: 33
    },
    {
      name: 'Real tv M8S ',
      price: 219.87,
      description: 'Full HD 1080P проектор 4K 6500 люмен кинопроектор проектор Android WiFi Bluetooth hdmi VGA AV USB',
      rating: 5,
      link:'https://aliexpress.ru/item/4000265190123.html?spm=a2g0o.productlist.0.0.2c3830833OavcR&s=p&algo_pvid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea&algo_expid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea-2&btsid=0be3743b15823493555081886e2856&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/realtv1.jpg", "assets/images/realtv2.jpg", "assets/images/realtv3.jpg"],
      categoryID: 3,
      productID: 34
    },
    {
      name: 'CRENOVA',
      price: 191.73,
      description: 'Новинка 2019 г.; проектор на базе Android с разрешением Full HD 1080 P; 6000 люменов; Android 7.1.2 OS; видео проектор; Поддержка 4K Dolby 2G 16G; проектор',
      rating: 4,
      link:'https://aliexpress.ru/item/4000028293113.html?spm=a2g0o.productlist.0.0.2c3830833OavcR&s=p&algo_pvid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea&algo_expid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea-7&btsid=0be3743b15823493555081886e2856&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/crenova1.jpg", "assets/images/crenova2.jpg", "assets/images/crenova3.jpg"],
      categoryID: 3,
      productID: 35
    },
    {
      name: 'BYINTEK UFO R19',
      price: 499.99,
      description: '300 дюймов 3D Смарт Android WIFI видео светодиодный портативный мини HD DLP проектор для Full HD 1080P HDMI 4K Iphone 11',
      rating: 4.9,
      link:'https://aliexpress.ru/item/4000177869285.html?spm=a2g0o.productlist.0.0.2c3830833OavcR&algo_pvid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea&algo_expid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea-8&btsid=0be3743b15823493555081886e2856&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/byintek1.jpg", "assets/images/byintek2.jpg", "assets/images/byintek3.png"],
      categoryID: 3,
      productID: 36
    },

    {
      name: 'XGIMI H2',
      price: 899,
      description: ' 1920*1080 dlp Full HD проектор 1350 ANSI люмен 3D проектор Поддержка 4K Android wifi мультимедийный проектор с технологией Bluetooth',
      rating: 5,
      link:'https://aliexpress.ru/item/32815691830.html?spm=a2g0o.productlist.0.0.2c3830833OavcR&algo_pvid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea&algo_expid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea-10&btsid=0be3743b15823493555081886e2856&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/xgimi1.jpg", "assets/images/xgimi2.jpg", "assets/images/xgimi3.jpg"],
      categoryID: 3,
      productID: 37
    },

    {
      name: 'AUN',
      price: 209.99,
      description: 'Full HD проектор AKEY6S, TV Box $1,99, 1920x1080 P, 6800 люмен, Android 6,0 WIFI проектор, светодиодный проектор для 4K 3D домашнего кинотеатра',
      rating: 5,
      link:'https://aliexpress.ru/item/4000110072065.html?spm=a2g0o.productlist.0.0.2c3830833OavcR&algo_pvid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea&algo_expid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea-12&btsid=0be3743b15823493555081886e2856&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/aun1.jpg", "assets/images/aun2.jpg", "assets/images/aun3.jpg"],
      categoryID: 3,
      productID: 38
    },
    {
      name: 'Vivicine',
      price: 438.85,
      description: '1080p 3D 4K проектор, Android WIFI HDMI USB Full HD мини ПК игра домашний кинотеатр проектор 12000 мАч батарея',
      rating: 4,
      link:'https://aliexpress.ru/item/32807640620.html?spm=a2g0o.productlist.0.0.2c3830833OavcR&algo_pvid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea&algo_expid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea-34&btsid=0ab6fb8315823493554544109e2f51&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/vivicine1.jpg", "assets/images/vivicine2.jpg", "assets/images/vivicine3.jpg"],
      categoryID: 3,
      productID: 39
    },
    {
      name: 'POWERFUL',
      price: 66.12,
      description: 'Мощный Q5 светодиодный мини проектор 800*600 точек/дюйм поддержка 720P портативный проектор домашнего кинотеатра Beamer опционально Android WIFI Proyector',
      rating: 4.7,
      link:'https://aliexpress.ru/item/32974510988.html?spm=a2g0o.productlist.0.0.2c3830833OavcR&algo_pvid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea&algo_expid=b11bd5ad-7eb8-46d8-93be-fdcf62f965ea-31&btsid=0ab6fb8315823493554544109e2f51&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/powerful1.jpg", "assets/images/powerful2.jpg", "assets/images/powerful3.jpg"],
      categoryID: 3,
      productID: 40
    }
    
  ]

  export const products4 = [
    {
      name: 'UG Professtional Socks',
      price: 2.56,
      description: 'Элитные толстые спортивные носки нескользящие прочные скейтборд полотенце нижние носки чулок',
      rating: 4.86,
      link:'https://aliexpress.ru/item/32955695140.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&s=p&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-0&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/ug1.jpg", "assets/images/ug2.jpg", "assets/images/ug3.jpg"],
      categoryID: 4,
      productID: 41
    },
    {
      name: 'Mizuno',
      price: 3.84,
      description: '1 пара, 2 шт., спортивные защитные наколенники для футбола, волейбола, баскетбола, губки, резиновые, хлопковые наколенники, спортивные наколенники, наколенники',
      rating: 4.8,
      link:'https://aliexpress.ru/item/32763403903.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&s=p&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-2&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/mizuno1.jpg", "assets/images/mizuno2.jpg", "assets/images/mizuno3.jpg"],
      categoryID: 4,
      productID: 42
    },
    {
      name: 'Kingsports',
      price: 19.90,
      description: 'Аниме Haikyuu! Karasuno High School #12 Yamaguchi Tadashi волейбольный клуб костюм для косплея Джерси Спортивная одежда Униформа M L XL XXL',
      rating: 4,
      link:'https://aliexpress.ru/item/32919982198.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-8&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/karasuno1.jpg", "assets/images/karasuno2.jpg",, "assets/images/karasuno3.jpg"],
      categoryID: 4,
      productID: 43
    },
    {
      name: 'China Sporting',
      price: 12.99,
      description: 'Популярный волейбол, mva300, супер твердое волокно, брендовый волейбол, соревнование, размер 5, бесплатный воздушный насос + Воздушная игла + сумка',
      rating: 4,
      link:'https://aliexpress.ru/item/4000383078571.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-9&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/mva1.jpg", "assets/images/mva2.jpg", "assets/images/mva3.jpg"],
      categoryID: 4,
      productID: 44
    },
    {
      name: 'Тренировочный пояс для волейбола',
      price: 10.35,
      description: 'отличный тренировочный пояс, предотвращающий чрезмерное движение руки вверх, 2019',
      rating: 4.9,
      link:'https://aliexpress.ru/item/32966512316.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-10&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/pos1.jpg", "assets/images/pos2.jpg", "assets/images/pos3.jpg"],
      categoryID: 4,
      productID: 45
    },
    {
      name: 'VSM5000',
      price: 12.59,
      description: 'размер 5, высокое качество волейбол, Спорт на открытом воздухе, обучение, бесплатный воздушный насос + игла + сумка',
      rating: 4.5,
      link:'https://aliexpress.ru/item/4000383073808.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-20&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/vsm1.jpg", "assets/images/vsm2.jpg", "assets/images/vsm3.png"],
      categoryID: 4,
      productID: 46
    },

    {
      name: 'Спортивная защитная лента для пальцев',
      price: 1.67,
      description: ' защита для пальцев, поддержка эластичной спортивной поддержки, волейбольные протекторы для пальцев для баскетбола',
      rating: 4.8,
      link:'https://aliexpress.ru/item/32966983174.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-22&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/lenta1.jpg", "assets/images/lenta2.jpg", "assets/images/lenta3.jpg"],
      categoryID: 4,
      productID: 47
    },

    {
      name: 'Mикрофибры для волейбола',
      price: 15.19,
      description: '1 пара профессиональных упражнений для волейбола из микрофибры для волейбола, тренировочный инструмент для волейбола 8',
      rating: 5,
      link:'https://aliexpress.ru/item/32978721470.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-34&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/vibro1.jpg", "assets/images/vibro2.jpg", "assets/images/vibro3.jpg"],
      categoryID: 4,
      productID: 48
    },
    {
      name: 'Tренировочная тактическая доска',
      price: 12.13,
      description: '1 комплект, тренировочная тактическая доска для игры в волейбол, тренировочная доска, набор магнитных шахматных деталей, складная доска для тренировок, чехол из искусственной кожи',
      rating: 3,
      link:'https://aliexpress.ru/item/33015661963.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&algo_pvid=18865206-ffe3-49c3-b22f-df6f26ab617f&algo_expid=18865206-ffe3-49c3-b22f-df6f26ab617f-41&btsid=0ab50f0815825279106923406e0db6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/doska1.jpg", "assets/images/doska2.jpg", "assets/images/doska3.jpg"],
      categoryID: 4,
      productID: 49
    },
    {
      name: 'Волейбольная сумка для волейбола',
      price: 4,
      description: 'Классная вещь , всегда удобно и есть много полезных отсеков и карманов',
      rating: 4.9,
      link:'https://aliexpress.ru/item/32994360225.html?spm=a2g0o.productlist.0.0.214e34a46bfSEZ&algo_pvid=cf50fef9-ab03-4807-9874-ff2be84a5597&algo_expid=cf50fef9-ab03-4807-9874-ff2be84a5597-17&btsid=0ab6f81615825303613404361e52a6&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      img:["assets/images/sumka1.jpg", "assets/images/sumka2.jpg", "assets/images/sumka3.jpg"],
      categoryID: 4,
      productID: 50
    }
    
  ]
  ;
  