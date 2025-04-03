import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Keyboard } = require('grammy')

export const breakfast = new Keyboard().resized()
.text('< Назад').text('Сырники').row()
.text('Слойка').text('Боул').row()
.text('Томленая говядина с гречкой').text('Шакшука').row()
.text('Глазунья из 2').text('Омлет из 3').row()
.text('Скрэмбл из 3')




export const chebureks = new Keyboard().resized()
.text('< Назад').text('Чебурек с сыром').row()
.text('Чебурек с курицей').row().text('Чебурек свино-говяжьий').row()
.text('Чебурек с говядиной').row()



export const childFood = new Keyboard().resized()
.text('< Назад').text('Мини-сосиски с пюре').row()
.text('Наггетсы с фри').row().text('Суп с фрикадельками').row()
.text('Мини-оладушки').row().text('Мини хинкали со сметаной').row()
.text('Пиццаридзе').row().text('Макароны с сыром').row()
.text('Суп с мини хинкалями').row().text('Творожные фигурки').row()
.text('Котлеты куриные с пюре и овощами').row()


export const dessert = new Keyboard().resized()
.text('< Назад').text('Шоколадные хинкали').row()
.text('Сырный брауни').row().text('Морковный торт').row()
.text('Домашняя пахлава').row().text('Пахлава').row()
.text('Мороженое').row().text('Птичье молоко').row()


export const garnirs = new Keyboard().resized()
.text('< Назад').text('Картофель фри').row()
.text('Картофельное пюре').row().text('Картофель по-домашнему').row()
.text('Картофель на мангале').row().text('Овощи гриль').row()



export const hach = new Keyboard().resized()
.text('< Назад').text('Пирог с яйцом и луком').row()
.text('Мини пеновани').text('Тбилисский кубдари').row()
.text('По-имеретински').text('По-аджарски').row()
.text('По-аджарски с зеленью').text('Хачапури с куриным филе').row()
.text('Хачапури с беконом и помидорами').text('Хачапури с грибами и сыром').row()
.text('Хачапури с лососем').text('Хачапури на шампуре').row()
.text('Пеновани').text('Кутаб с картофелем').row()
.text('Пури с домашним маслом').text('Кутаб с творогом').row()



export const hinkali = new Keyboard().resized()
.text('< Назад').text('Курица').row()
.text('Свино-говяжьи').row().text('Говяжьи').row()
.text('С креветкой').row().text('С сыром').row()
.text('Мини с курицей').row().text('Мини с говядиной').row()


export const lanch = new Keyboard().resized()
.text('< Назад').text('Чкмерули').row()
.text('Судак ').text('Куриное филе с пюре').row()
.text('Паста орзо').text('Чахохбили').row()
.text('Томленая говядина').text('Бифштекс из курицы').row()
.text('Бифштекс из говядины').text('Котлета миланеза').row()
.text('Креветки чкмерули').text('Ростбиф').row()
.text('Оджахури').text('Паста с говядиной').row()
.text('Форель с овощами').text('Щучьи котлетки').row()
.text('Ребрышки барбекю').text('Чанахи').row()


export const mangal = new Keyboard().resized()
.text('< Назад').text('Люля из картофеля').row()
.text('Цыплёнок на мангале').text('Люля куриное').row()
.text('Люля говяжье').text('Шашлык куриный').row()
.text('Шашлык свиной').text('Индейка на мангале').row()
.text('Форель речная').text('Стейк из лосося').row()



export const salads = new Keyboard().resized()
.text('< Назад').text('Боул с креветками').row()
.text('Салат с авокадо').text('Салат с ростбифом').row()
.text('Овощной салат').text('Салат с баклажаном').row()
.text('Салат с курицей').text('Салат с индейкой').row()
.text('Овощной с ореховой заправкой').row()



export const snacks = new Keyboard().resized()
.text('< Назад').text('Лобио').row()
.text('Горячий лобио').text('Ассорти пхали').row()
.text('Аджапсандал').text('Рулетики из баклажанов').row()
.text('Классический хумус').text('Долма').row()
.text('Сырная тарелка').text('Хрустящие баклажаны').row()
.text('Сыр копченый жареный').text('Жареный сулугуни').row()
.text('Суджук').text('Бастурма').row()
.text('Пивное ассорти').text('Сельдь').row()
.text('Паштет из цесарки').row().text('Печёные шампиньоны с сыром').row()




export const soup = new Keyboard().resized()
.text('< Назад').text('Шурпа').row()
.text('Уха').row().text('Харчо').row()
.text('Куриный суп').row().text('Грибной').row()
