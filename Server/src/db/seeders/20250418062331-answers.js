'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      // Question 1
      { question_id: 1, answer: 'Германия', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 1, answer: 'Япония', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 1, answer: 'США', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 1, answer: 'Китай', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 2
      { question_id: 2, answer: 'Chevrolet', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 2, answer: 'Ford', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 2, answer: 'Dodge', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 2, answer: 'Tesla', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 3
      { question_id: 3, answer: 'BMW', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 3, answer: 'Audi', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 3, answer: 'Peugeot', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 3, answer: 'Volkswagen', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 4
      { question_id: 4, answer: 'Баварские моторные заводы', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 4, answer: 'Берлинский машиностроительный центр', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 4, answer: 'Базельская машинная фабрика', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 4, answer: 'Британские мототехнологии', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 5
      { question_id: 5, answer: 'Ferrari', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 5, answer: 'Volkswagen Group', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 5, answer: 'Porsche AG', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 5, answer: 'Toyota', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 6
      { question_id: 6, answer: 'Nissan', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 6, answer: 'Honda', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 6, answer: 'Hyundai', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 6, answer: 'Mazda', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 7
      { question_id: 7, answer: 'Porsche', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 7, answer: 'BMW', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 7, answer: 'Audi', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 7, answer: 'Fiat', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 8
      { question_id: 8, answer: 'Франция', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 8, answer: 'Германия', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 8, answer: 'Италия', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 8, answer: 'Испания', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 9
      { question_id: 9, answer: 'Hyundai', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 9, answer: 'Honda', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 9, answer: 'Lada', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 9, answer: 'Citroen', istrue: false, createdAt: new Date(), updatedAt: new Date() },

      // Question 10
      { question_id: 10, answer: 'Chevrolet', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 10, answer: 'Jeep', istrue: true, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 10, answer: 'Land Rover', istrue: false, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 10, answer: 'Suzuki', istrue: false, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
