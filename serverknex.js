var hapi = require('hapi');
require("dotenv").config();
var mysql = require('mysql');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'forms'
  }
});
var server = new hapi.Server({
  host: 'localhost',
  port: 7000,
  routes: {
    cors: true
  },
});

server.route({
  method: 'GET',
  path: '/',
  handler: async (request, reply) => {
    await knex.raw(`select *,date_format(Date_of_Birth, '%Y-%m-%d') as Date_of_Birth from users`)
      .then(data => {
        reply = 
          data
      })
    return reply;
  }
});

server.start((err) => {
  if (err) throw err;

})

console.log("Server is started")