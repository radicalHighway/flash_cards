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
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
