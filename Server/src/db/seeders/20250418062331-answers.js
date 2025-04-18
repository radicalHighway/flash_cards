'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      // Question 1
      {
        question_id: 1,
        answer: 'Германия',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        answer: 'Япония',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        answer: 'США',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 1,
        answer: 'Китай',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 2
      {
        question_id: 2,
        answer: 'Chevrolet',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 2,
        answer: 'Ford',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 2,
        answer: 'Dodge',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 2,
        answer: 'Tesla',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 3
      {
        question_id: 3,
        answer: 'BMW',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 3,
        answer: 'Audi',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 3,
        answer: 'Peugeot',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 3,
        answer: 'Volkswagen',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 4
      {
        question_id: 4,
        answer: 'Баварские моторные заводы',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 4,
        answer: 'Берлинский машиностроительный центр',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 4,
        answer: 'Базельская машинная фабрика',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 4,
        answer: 'Британские мототехнологии',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 5
      {
        question_id: 5,
        answer: 'Ferrari',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 5,
        answer: 'Volkswagen Group',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 5,
        answer: 'Porsche AG',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 5,
        answer: 'Toyota',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 6
      {
        question_id: 6,
        answer: 'Nissan',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 6,
        answer: 'Honda',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 6,
        answer: 'Hyundai',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 6,
        answer: 'Mazda',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 7
      {
        question_id: 7,
        answer: 'Porsche',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 7,
        answer: 'BMW',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 7,
        answer: 'Audi',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 7,
        answer: 'Fiat',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 8
      {
        question_id: 8,
        answer: 'Франция',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 8,
        answer: 'Германия',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 8,
        answer: 'Италия',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 8,
        answer: 'Испания',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 9
      {
        question_id: 9,
        answer: 'Hyundai',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 9,
        answer: 'Honda',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 9,
        answer: 'Lada',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 9,
        answer: 'Citroen',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Question 10
      {
        question_id: 10,
        answer: 'Chevrolet',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 10,
        answer: 'Jeep',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 10,
        answer: 'Land Rover',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 10,
        answer: 'Suzuki',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Q1
      {
        question_id: 11,
        answer: 'Брэд Питт',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 11,
        answer: 'Киану Ривз',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 11,
        answer: 'Том Хэнкс',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 11,
        answer: 'Джон Траволта',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q2
      {
        question_id: 12,
        answer: 'Мартин Скорсезе',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 12,
        answer: 'Фрэнсис Форд Коппола',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 12,
        answer: 'Ридли Скотт',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 12,
        answer: 'Кристофер Нолан',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q3
      {
        question_id: 13,
        answer: '1917',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 13,
        answer: 'Паразиты',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 13,
        answer: 'Однажды в Голливуде',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 13,
        answer: 'Джокер',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q4
      {
        question_id: 14,
        answer: 'Прометей',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 14,
        answer: 'Ностромо',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 14,
        answer: 'Энтерпрайз',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 14,
        answer: 'Андромеда',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q5
      {
        question_id: 15,
        answer: 'Хоакин Феникс',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 15,
        answer: 'Хит Леджер',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 15,
        answer: 'Джаред Лето',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 15,
        answer: 'Джек Николсон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q6
      {
        question_id: 16,
        answer: 'Пираты Карибского моря',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 16,
        answer: 'Остров проклятых',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 16,
        answer: 'Индиана Джонс',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 16,
        answer: 'Сокровище нации',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q7
      {
        question_id: 17,
        answer: 'Стивен Спилберг',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 17,
        answer: 'Кристофер Нолан',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 17,
        answer: 'Роберт Земекис',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 17,
        answer: 'Питер Джексон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q8
      {
        question_id: 18,
        answer: 'Реальных событиях',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 18,
        answer: 'Романе Уинстона Грума',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 18,
        answer: 'Комиксах Marvel',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 18,
        answer: 'Мифологии США',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q9
      {
        question_id: 19,
        answer: 'Джеймс',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 19,
        answer: 'Джек',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 19,
        answer: 'Роберт',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 19,
        answer: 'Генри',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q10
      {
        question_id: 20,
        answer: 'Челюсти',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 20,
        answer: 'Сияние',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 20,
        answer: 'Терминатор',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 20,
        answer: 'Матрица',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Q1
      {
        question_id: 21,
        answer: '8',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 21,
        answer: '9',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 21,
        answer: '7',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 21,
        answer: '10',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q2
      {
        question_id: 22,
        answer: 'Кислород',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 22,
        answer: 'Азот',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 22,
        answer: 'Олово',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 22,
        answer: 'Серебро',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q3
      {
        question_id: 23,
        answer: 'Гермиона',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 23,
        answer: 'Рон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 23,
        answer: 'Гарри',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 23,
        answer: 'Драко',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q4
      {
        question_id: 24,
        answer: 'Сидней',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 24,
        answer: 'Мельбурн',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 24,
        answer: 'Канберра',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 24,
        answer: 'Брисбен',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q5
      {
        question_id: 25,
        answer: 'Достоевский',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 25,
        answer: 'Толстой',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 25,
        answer: 'Чехов',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 25,
        answer: 'Пушкин',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q6
      {
        question_id: 26,
        answer: '15',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 26,
        answer: '16',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 26,
        answer: '13',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 26,
        answer: '14',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q7
      {
        question_id: 27,
        answer: 'Юань',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 27,
        answer: 'Йена',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 27,
        answer: 'Вон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 27,
        answer: 'Рупия',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q8
      {
        question_id: 28,
        answer: 'Атлантический',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 28,
        answer: 'Тихий',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 28,
        answer: 'Индийский',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 28,
        answer: 'Северный Ледовитый',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q9
      {
        question_id: 29,
        answer: 'Марк Цукерберг',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 29,
        answer: 'Илон Маск',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 29,
        answer: 'Билл Гейтс',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 29,
        answer: 'Стив Джобс',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q10
      {
        question_id: 30,
        answer: 'Железо',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 30,
        answer: 'Одинаково',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 30,
        answer: 'Вата',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 30,
        answer: 'Это зависит от плотности воздуха',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Q1
      {
        question_id: 31,
        answer: 'Авраам Линкольн',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 31,
        answer: 'Джордж Вашингтон',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 31,
        answer: 'Томас Джефферсон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 31,
        answer: 'Бенджамин Франклин',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q2
      {
        question_id: 32,
        answer: '2',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 32,
        answer: '4',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 32,
        answer: '3',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 32,
        answer: '1',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q3
      {
        question_id: 33,
        answer: 'Джон Адамс',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 33,
        answer: 'Томас Джефферсон',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 33,
        answer: 'Джеймс Мэдисон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 33,
        answer: 'Александр Гамильтон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q4
      {
        question_id: 34,
        answer: 'Эндрю Джексон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 34,
        answer: 'Авраам Линкольн',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 34,
        answer: 'Улисс Грант',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 34,
        answer: 'Джеймс Бьюкенен',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q5
      {
        question_id: 35,
        answer: 'Ричард Никсон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 35,
        answer: 'Линдон Джонсон',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 35,
        answer: 'Геральд Форд',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 35,
        answer: 'Дуайт Эйзенхауэр',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q6
      {
        question_id: 36,
        answer: 'Джордж Буш',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 36,
        answer: 'Ричард Никсон',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 36,
        answer: 'Билл Клинтон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 36,
        answer: 'Рональд Рейган',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q7
      {
        question_id: 37,
        answer: 'Дональд Трамп',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 37,
        answer: 'Рональд Рейган',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 37,
        answer: 'Джордж Буш-старший',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 37,
        answer: 'Барак Обама',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q8
      {
        question_id: 38,
        answer: 'Теодор Рузвельт',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 38,
        answer: 'Джон Ф. Кеннеди',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 38,
        answer: 'Билл Клинтон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 38,
        answer: 'Авраам Линкольн',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q9
      {
        question_id: 39,
        answer: 'Барак Обама',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 39,
        answer: 'Джордж Буш-младший',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 39,
        answer: 'Билл Клинтон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 39,
        answer: 'Альберт Гор',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Q10
      {
        question_id: 40,
        answer: 'Джордж Вашингтон',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 40,
        answer: 'Авраам Линкольн',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 40,
        answer: 'Барак Обама',
        istrue: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_id: 40,
        answer: 'Мартин Лютер Кинг',
        istrue: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
