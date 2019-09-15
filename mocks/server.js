'use strict';

const Hapi = require('@hapi/hapi');

const MONTH_IN_SEC = 2592000;

const init = async () => {
  const server = Hapi.server({
    port: 8090,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
        credentials: true
      }
    },
  });

  server.route({
    method: 'GET',
    path: '/voting/1',
    handler: function (request, h) {
      return {
        title: 'Переезд в новый офис',
        description: 'Мы хотим переехать в новый офис. Наш текущий офис начинает заканчиваться ' +
          'нам необходимо большее пространство. Так же хочется выглядеть более презентабильно в целом ' +
          'перед нашими заказчиками. А так же повысить комфорт для своей команды. Так же хочется ' +
          'чтобы можно было приглашать людей для знакомства в наш офис - в нем должно быть комфортно ',
        points: [
          {
            title: 'Заказать кофе машину',
            links: [
              {
                text: 'кофе-машина.pdf',
                url: 'https://material-ui.com/api/divider/'
              },
              {
                title: 'монитор.pdf',
                url: 'https://material-ui.com/api/divider/'
              },

              {
                title: 'стул.pdf',
                url: 'https://material-ui.com/api/divider/'
              },
            ]
          },
          {
            title: 'Купить мониторы',
            links: [
              {
                title: 'кофе-машина.pdf',
                url: 'https://material-ui.com/api/divider/'
              },
            ]
          },
          {
            title: 'Заказать стулья',
            links: [
              {
                title: 'кофе-машина.pdf',
                url: 'https://material-ui.com/api/divider/'
              },
            ]
          },
          {
            title: 'Заказать массажистку',
            links: [
              {
                title: 'монитор.pdf',
                url: 'https://material-ui.com/api/divider/'
              },

              {
                title: 'стул.pdf',
                url: 'https://material-ui.com/api/divider/'
              },
            ]
          },
        ],
        admin : 'Владимир Раменский',
        // был meetType
        // withTimeBounds
        // withoutTimeBounds
        type : 'Бессрочная',
        closed: false,
        id: '1',
        // dateOfBegin: '21 - 09 - 2019 13:48',
        createdTime: '01/09/2019 04:42',
        // dateOfEnd: '22 - 09 - 2019 13:40',
        closedTime: '01/09/2019 04:42',
        status: 'В работе'
      }

    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);

};

// rzd
server.route({
  method: 'POST',
  path: '/auth',
  handler: function (request, h) {
    switch (request.payload.username) {
      case "toba@klevertech.fun" :
        return {
          role: "admin",
        };
      case "myanshin@klevertech.fun" :
        return {
          role: "user",
        };
    }

    // Не авторизовывать если нет данных
  }
});


process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();


