const router = require('koa-router')()

router.all('*', (ctx, next) => {
  console.log(`${ctx.method} ${ctx.url}`);

  if (ctx.request.body && Object.keys(ctx.request.body).length !== 0) {
    console.log(JSON.stringify(ctx.request.body, null, '\t'));
  }

  ctx.response.body = 'Request OK';
})

module.exports = router
