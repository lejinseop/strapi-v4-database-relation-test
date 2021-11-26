module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '291a6adf1ab5f2893b9b389c5fe20db3'),
  },
});
