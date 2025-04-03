import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Keyboard } = require('grammy')

export const cofee = new Keyboard().resized()
.text('< Назад в бар').text('Эспрессо').row()
.text('Американо').text('Капучино').row()
.text('Ореховый капучино').text('Флэт Уайт').row()
.text('Пряный орех').text('Раф').row()
.text('Сырный раф').text('Раф халва арахис').row()
.text('Какао с маршмеллоу').text('Бамбл').row()
.text('Латте').text('Айс латте').row()
.text('Тыквенный латте').text('Эспрессо тоник').row()
.text('Латте банановое мороженое')
.text('Бамбл персик-шоколад').row()
.text('Айс латте банан кокос')
.text('Эспрессо тоник гранат').row()

export const tea = new Keyboard().resized()
.text('< Назад в бар').text('Гречишный').row()
.text('Жасмин').text('Зеленый чай с мятой').row()
.text('Молочный улун').text('Сенча').row()
.text('Чабрец').text('Ассам').row()
.text('Эрл Грей').text('Горные травы').row()
.text('Барбарис')



export const hotTea = new Keyboard().resized()
.text('< Назад в бар').text('Яблоко имбирь').row()
.text('Северные ягоды').text('Облепиха').row()
.text('Манго размарин').text('Цитрусовый чай').row()
.text('Пуэр с вишней и тимьяном')
.text('Мандарин-тархун').row()
.text('Улун с клубникой и гранатом')
.text('Смородина с брусничным листом').row()


export const hotDrinks = new Keyboard().resized()
.text('< Назад в бар').row()
.text('Глинтвейн красный').row()
.text('Глинтвейн белый').row()
.text('Глинтвейн безалкогольный').row()
.text('Грог с пряным ромом').row()


export const compots = new Keyboard().resized()
.text('< Назад в бар').row()
.text('Морс').row()
.text('Узвар').row()


export const water = new Keyboard().resized()
.text('< Назад в бар').text('Сок Rich').row()
.text('Кола').text('Кола zero').row()
.text('Вода "Бжни"газированная').row()
.text('Вода "Даусуз" газированная').row()
.text('Вода "Аква-дью" негазированная').row()


export const importLimonade = new Keyboard().resized()
.text('< Назад в бар').row()
.text('Натахтари').row()


export const limonade = new Keyboard().resized()
.text('< Назад в бар').text('Цитрусовый').row()
.text('Имбирь-лайм').text('Кинза-яблоко').row()
.text('Малина лаванда').text('Айва банан').row()
.text('Лмпа-гибискус').text('Базилик').row()


export const coctails = new Keyboard().resized()
.text('< Назад в бар').text('Апероль Спритц').row()
.text('Джинжер сауэр').text('Сливочный попкорн').row()
.text('Крыжовник-Базилик').text('Негрони').row()
.text('Тропический негрони').text('Текила роза').row()
.text('Клубника-Паприка').text('Персик сауэр').row()
.text('Фейхоа сауэр').text('Гранатовый сауэр').row()
.text('Клубника-Ром').text('Кампари тоник').row()
.text('Тропический хайбол').text('Олд фешн мёд имбирь').row()
.text('Вермут-Ром')

export const sangries = new Keyboard().resized()
.text('< Назад в бар').row()
.text('Сангрия на белом вине').row()
.text('Сангрия на красном').row()

export const tincture = new Keyboard().resized()
.text('< Назад в бар').row()
.text('Лимончелло').text('Сливочная коровка	').row()
.text('Сливочный банан').text('Вишня/миндаль/карамель').row()
.text('Киви/яблоко').text('Барбарис').row()
.text('Черная смородина').text('Гранат').row()
.text('Фейхоа').text('Малина').row()

