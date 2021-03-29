module.exports = ({ env }) => ({
  url: env('HEROKU_URL'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'fec03b1763ab583155784c8c3ae65aa7'),
    },
  },
})
