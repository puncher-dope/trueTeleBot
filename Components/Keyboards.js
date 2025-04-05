import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Keyboard } = require('grammy')


export const usersMenu = new Keyboard().resized()
.placeholder('text')
.text('Покажи меню').row()
.text('Мой ID').row()

export const menuRestraunt = new Keyboard().resized()
.text('Меню кухни').row()
.text('Меню бара').row()
.text('< Назад к началу')

export const positionCitchen = new Keyboard().resized()
.text('< Назад в меню')
.text('Завтраки').row()
.text('Закуски')
.text('Салаты').row()
.text('Супы')
.text('Хинкали').row()
.text('Основные блюда')
.text('Чебуреки').row()
.text('Мангал')
.text('Гарниры').row()
.text('Хачапури')
.text('Десерты').row()
.text('Детское меню')

export const positionBar = new Keyboard().resized()
.text('< Назад в меню')
.text('Кофе').row()
.text('Чай')
.text('Согревающий чай').row()
.text('Горячие напитки')
.text('Морс и Узвар').row()
.text('Вода и соки')
.text('Импортные лимонады').row()
.text('Коктейли')
.text('Лимонады').row()
.text('Аперетивы')
.text('Водка').row()
.text('Дестиляты')
.text('Джин').row()
.text('Ром')
.text('Виски').row()
.text('Сангрии')
.text('Настойки').row()
.text('Вино')
.text('Заготовки')


// export { usersMenu, menuRestraunt, positionCitchen }



























const users = [ 'Лавров','Ким','Иванова',];