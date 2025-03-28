import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// import enTranslation from '../public/locales/en/translation.json';
// import trTranslation from '../public/locales/tr/translation.json';
// import azTranslation from'../public/locales/az/translation.json';

const resources={
az:{
    translation:{
       " About me":"Haqqımda",
        "Projects": "Proyektler",
        "Certificates":"Sertifikatlar",
        "Skills":"Bacarıqlar",
        "Contact":"Əlaqə",
        "I AM A WEB  DEVELOPER":"Web Developer",
"I have been involved in web design and development for the past two years.During this time,I have focused on creating user-friendly and visually appealing websites that are compatible with both mobile and desktop platforms.I take responsibility in my work and strive to complete projects on time.Customer satisfaction is always my top priority.You can explore my portfolio and CV to get a better idea of my work.":"Son iki ildə veb dizayn və inkişaf ilə məşğulam. Bu müddət ərzində, həm mobil, həm də masaüstü platformalarla uyğun, istifadəçi dostu və vizual cəhətdən cəlbedici veb saytlar yaratmağa fokuslandım.İşimdə məsuliyyət daşıyıram və layihələri vaxtında tamamlamağa çalışıram. Müştəri məmnuniyyəti hər zaman prioritetimdir. İşlərim haqqinda daha yaxşi bir fikir əldə etmək üçün portfelimi və CV-mi araşdıra bilərsiniz",
        "Download CV":"CV Yüklə ",

        "View CV":"CV Bax",
        "Hi! I'm ":" Salam mən",
" Narmin.":" Nərmin. ",
"My Projects":"Proyektlerim",
"My Skills":"Bacariqlar",
"Certificates":"Sertifikatlar",
"Contact Me":"Əlaqə",
"Send Message":"Göndər",
"First name":"Ad",
"Last name":"Soyad",
"Email address":"Email",
"Phone Number":"Telefon",
'Write message here':"Mesajınızı yazın",
"Years of":"İllik",
"Experience":"Təcrübə",
"Projects":"Proyekt",
"Satisfaction":"Məmnuniyyət",
"Guarante":"Zəmanəti",
"View":"Bax",
"click":"bax",
"Thank you! We will get back to you soon.":"Təşəkkürlər.Sizinlə Tezliklə əlaqə saxlanılacaq",
"Error:Please try again later.":"Xəta:Yenidən cəhd edin"

        
     }
},
ru:{
    translation:{
        " About me": "О себе",
    "Projects": "Проекты",
    "Certificates": "Сертификаты",
    "Skills": "Навыки",
    "Contact": "Контакт",
    "I AM A WEB  DEVELOPER":"Я фронтенд-разработчик",
   "I have been involved in web design and development for the past two years.During this time,I have focused on creating user-friendly and visually appealing websites that are compatible with both mobile and desktop platforms.I take responsibility in my work and strive to complete projects on time.Customer satisfaction is always my top priority.You can explore my portfolio and CV to get a better idea of my work.":"Я занимаюсь веб-дизайном и разработкой последние два года. За это время я сосредоточился на создании удобных для пользователя и визуально привлекательных веб-сайтов, совместимых как с мобильными, так и с настольными платформами.Я принимаю ответственность за свою работу и стараюсь завершать проекты в срок. Удовлетворенность клиента всегда является моим приоритетом. Вы можете ознакомиться с моим портфолио и резюме, чтобы лучше понять мою работу.",

    "Download CV": "Скачать CV",
    "View CV": "Просмотреть ",
    "Hi! I'm ":"Привет! Я",
    " Narmin.":" Нərмин.",
    "My Projects":"Мои проекты",
    "My Skills":"Мои навыки",
    "Certificates": "Сертификаты",
    "Contact Me":"Контакт",
    "Send Message":"Отправить",
    "First name":"Имя",
    "Last name":"Фамилия",
    "Email address":"Электронная почта",
    "Phone Number":"Номер телефона",
    'Write message here':"Напишите сообщение здесь",
    "Years of": "Года",
    "Experience":"Опыт",
     "Projects": "Проекты",
     "Satisfaction":"Гарантия",
     "Satisfaction":"Yдовлетворения",
     "View": "Просмотр",
     "click":"Нажмите",
     "Thank you! We will get back to you soon.":"Спасибо! Мы скоро с вами свяжемся.",

    "Error:Please try again later.":"Ошибка:Пожалуйста, попробуйте позже."


     }
},
en:{
translation:{
   " About me":"About me",
   "Projects":"Projects",
   "Certificates": "Certificates",
   "Skills":"Skills",
   "Contact":"Contact",
   "I have been involved in web design and development for the past two years.During this time,I have focused on creating user-friendly and visually appealing websites that are compatible with both mobile and desktop platforms.I take responsibility in my work and strive to complete projects on time.Customer satisfaction is always my top priority.You can explore my portfolio and CV to get a better idea of my work.":"I have been involved in web design and development for the past two years.During this time,I have focused on creating user-friendly and visually appealing websites that are compatible with both mobile and desktop platforms.I take responsibility in my work and strive to complete projects on time.Customer satisfaction is always my top priority.You can explore my portfolio and CV to get a better idea of my work.",
   "Download CV":"Download CV",
"View CV":"View CV",
"Hi! I'm ":"Hi! I'm ",
" Narmin.":" Narmin.",
"My Projects":"My Projects",
"My Skills":"My Skills",
"Certificates":"Certificates",
"Contact Me":"Contact Me",
"Send Message":"Send Message",
"First name":"First name",
"Last name":"Last name",
"Email address":"Email address",
"Phone Number":"Phone Number",
'Write message here':'Write message here',
"Years of":"Years of",
"Experience":"Experience",
"Projects":"Projects",
"Satisfaction":"Satisfaction",
"Guarante":"Guarante",
"View":"View",
"click":"click",
"Thank! We will get back to you soon.":"Thank you! We will get back to you soon.",
"Error:Please try again later.":"Error:Please try again later."


}

}
}

i18n
.use(initReactI18next)
.init({
    lng:"en",
    resources,

})

export default i18n