'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      { theme: 'Автобренды', question: 'Какая страна является родиной бренда Toyota?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'Какой бренд выпускает модель Mustang?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'Какой логотип содержит кольца?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'BMW — это аббревиатура для...', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'Какая компания владеет брендом Lamborghini?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'Какой бренд выпускает модель Civic?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'У какого бренда есть модель 911?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'Где базируется компания Ferrari?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'Какой из этих брендов родом из Южной Кореи?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Автобренды', question: 'Какой бренд известен моделью Wrangler?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Кто сыграл главную роль в фильме "Матрица"?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Как зовут режиссёра "Крёстного отца"?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Какой фильм получил "Оскар" за лучший фильм в 2020 году?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Как называется корабль в "Чужом"?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Кто играл Джокера в "Тёмном рыцаре"?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Какой фильм начинается с "Я — капитан Джек Воробей"?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Кто режиссировал "Начало" (Inception)?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Фильм "Форрест Гамп" основан на...', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Как зовут героя Леонардо Ди Каприо в "Титанике"?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Кинофильмы', question: 'Какой из этих фильмов снял Стэнли Кубрик?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Сколько планет в Солнечной системе?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Какой химический элемент обозначается как "O"?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Как зовут главного героя "Гарри Поттера"?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Столица Австралии — это...', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Кто написал «Войну и мир»?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Какое число идёт после π (3.14)?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Какая валюта в Японии?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Какой океан самый большой на планете?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Как зовут создателя Facebook?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Общие вопросы', question: 'Что тяжелее: килограмм ваты или килограмм железа?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Кто был первым президентом США?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Сколько сроков отслужил Франклин Д. Рузвельт?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Какой президент подписал Декларацию независимости?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Кто был президентом США во время Гражданской войны?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Кто стал президентом после убийства Джона Кеннеди?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Какой президент ушёл в отставку из-за Уотергейтского скандала?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Кто был актером до того, как стал президентом?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Кто был самым молодым избранным президентом США?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Кто был президентом США в 2001 году?', createdAt: new Date(), updatedAt: new Date() },
      { theme: 'Президенты США', question: 'Кто стал первым афроамериканским президентом США?', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
