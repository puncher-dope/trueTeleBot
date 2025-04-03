import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Keyboard } = require('grammy')

export const wines = new Keyboard().resized()
.text('< Назад в бар').row()
.text('Вина Грузии')
.text('Белые вина').row()
.text('Красные вина')
.text('Розовые вина').row()
.text('Игристые вина')
.text('Розовое Игристое').row()
.text('Вино домашнее')


export const georgiansWines = new Keyboard().resized()
.text('< Назад в вино').row()
.text('Чинебули').row()
.text('Квезани').row()
.text('GWS Elibo').row()
.text('Асканели').row()
.text('Тамада').row()

//============================================
export const chinebuli = new Keyboard().resized()
.text('< Назад в Грузинские вина').row()
.text('Чинебули белое').row()
.text('Чинебули красное').row()


export const chinebuliWhite = new Keyboard().resized()
.text('< Назад в Чинебули').row()
.text('Чинебули Ркацители').row()
.text('Чинебули Цинандали').row()
.text('Чинебули Алазанская Долина Белое ').row()

export const chinebuliRed = new Keyboard().resized()
.text('< Назад в Чинебули').row()
.text('Чинебули Саперави').row()
.text('Чинебули Хванчкара').row()
.text('Чинебули Киндзмараули').row()
.text('Чинебули Алазанская Долина Красное').row()

//============================================
export const kvezani = new Keyboard().resized()
.text('< Назад в Грузинские вина').row()
.text('Квезани белое').row()
.text('Квезани красное').row()

export const kvezaniWhite = new Keyboard().resized()
.text('< Назад в Квезани').row()
.text('Квезани Цинандали, Тифлиси Марани').row()

export const kvezaniRed = new Keyboard().resized()
.text('< Назад в Квезани').row()
.text('Квезани Саперави, Тифлиси Марани').row()
.text('Квезани Киндзмараули, Тифлиси Марани').row()

//============================================
export const elibo = new Keyboard().resized()
.text('< Назад в Грузинские вина').row()
.text('Elibo белое').row()
.text('Elibo красное').row()

export const eliboWhite = new Keyboard().resized()
.text('< Назад в Elibo').row()
.text('Элибо Алазани белое').row()
.text('Элибо Ркацители, Мцване').row()

export const eliboRed = new Keyboard().resized()
.text('< Назад в Elibo' ).row()
.text('Элибо Алазани красное').row()
.text('Элибо Саперави').row()

//============================================
export const askaneli = new Keyboard().resized()
.text('< Назад в Грузинские вина').row()
.text('Асканели оранжевое').row()
.text('Асканели красное').row()

export const askaneliOrange = new Keyboard().resized()
.text('< Назад в Асканели').row()
.text('Асканели Ркацители Квеври').row()

export const askaneliRed = new Keyboard().resized()
.text('< Назад в Асканели' ).row()
.text('Асканели Мукузани').row()
.text('Асканели Саперави Премиуим').row()


//============================================
export const tamada = new Keyboard().resized()
.text('< Назад в Грузинские вина').row()
.text('Тамада белое').row()
.text('Тамада красное').row()

export const tamadaWhite = new Keyboard().resized()
.text('< Назад в Тамада').row()
.text('Тамада Цинандали').row()
.text('Тамада Пиросмани Белое').row()

export const tamadaRed = new Keyboard().resized()
.text('< Назад в Тамада' ).row()
.text('Тамада Мукузани').row()
.text('Тамада Пиросмани Красное').row()
.text('Тамада Саперави').row()


//============================================
export const whiteWines = new Keyboard().resized()
.text('< Назад в вино')
.text('Велада Рислинг').row()
.text('Адагум Рислинг')
.text('Луизелла Пино Гриджо делле Венецие').row()
.text('Бодегас Тагуа-Тагуа Совиньон Блан')
.text('Циммерманн Рислинг').row()
.text('Норте Виньо Верде')
.text('Конкеста Шардоне').row()
.text('Бон Вояж Совиньон Блан (Б/А)')


//============================================
export const redWines = new Keyboard().resized()
.text('< Назад в вино').row()
.text('Бодегас Тагуа-Тагуа Карменер').row()
.text('Луизелла Санджовезе Пулия').row()
.text('Конкеста Мерло').row()

//============================================
export const pinkWines = new Keyboard().resized()
.text('< Назад в вино').row()
.text('Норте Виньо Верде Розовое').row()

//============================================
export const shampWines = new Keyboard().resized()
.text('< Назад в вино').row()
.text('Проветто Спуманте Бьянко Брют').row()
.text('Проветто Спуманте Бьянко').row()
.text('Тинтонелли Просекко').row()
.text('Кампоферро Асти Дольче').row()
.text('Солиго Просекко Тревизо Брют').row()

//============================================
export const pinkShamp = new Keyboard().resized()
.text('< Назад в вино').row()
.text('Проветто Спуманте Бьянко Розато Секко').row()

//=====================================
export const homieWines = new Keyboard().resized()
.text('< Назад в вино').row()
.text('Грузинское домашнее Белое').row()
.text('Грузинское домашнее Красное').row()
