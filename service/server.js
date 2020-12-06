// const superagent = require('superagent');
const Koa = require('koa');
const app = new Koa();
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const port = 9090;
const key = '6463984cc40725baa856ed898d7e45f6';
// const https = require('https');
const fs = require('fs');
// const enforceHttps = require('koa-sslify').default;

// app.use(enforceHttps());
// const proxyData = () => new Promise((resolve, reject) => {
//     superagent
//       .get(`http://v.juhe.cn/toutiao/index?key=${key}`)
//         .end((err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//     });
// })
app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200;
    } else {
      await next();
    }
});

// const testAPI = () => new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       resolve({data: 111});
//     }, 3000);
// })

app.use(async (ctx, next) => {
  if (ctx.request.path === '/news') {
    // const res = await proxyData();
    // const res = await testAPI();
    // console.log(res);
    // proxyData().then((res) => {
    // })
    ctx.response.type = 'application/json';
    ctx.body = {
      code: 200,
      data: {
        title: 'hello pwa',
        list: [
          {
            title: 'mike',
          },
          {
            title: 'john',
          },
          {
            title: 'mary',
          },
        ]
      }
    };
  } else {
    await next();
  }
});
let count = 0;
app.use(async (ctx, next) => {
  count++;
  console.log(ctx.request.path, count);
  if (ctx.request.path === '/manifest') {
    const { startUrl, name } = ctx.query;
    const  manifest = {
      "name": "智慧保",
      "short_name": "智慧保",
      "theme_color": "#4DBA87",
      "icons": [{
        "src": "1317/img/icons/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      }, {
        "src": "1317/img/icons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }],
      "start_url": "/",
      "display": "standalone",
      "background_color": "#000000"
    }
    ctx.response.type = 'application/json';
    if (startUrl) {
      ctx.body = {
        ...manifest,
        short_name: name || manifest.short_name,
        name: manifest.name,
        start_url: startUrl,
      }
    } else {
      ctx.body = manifest;
    }
  } else {
    await next();
  }
});

app.use(async (ctx, next) => {
  count++;
  console.log(ctx.request.path, count);
  if (ctx.request.path === '/subscribe') {
    // const { startUrl, name } = ctx.query;
    console.log(ctx.request.body);
    ctx.body = {
      status: 0
    }
    // ctx.body = manifest;
  } else {
    await next();
  }
});
// callback
// superagent
//   .get(`http://v.juhe.cn/toutiao/index?key=${key}`)
// //   .send({ key }) // sends a JSON post body
// //   .set('accept', 'json')
//   .end((err, res) => {
//     if (err) {
//       console.log(error);
//     } else {
//       console.log(res);
//     }
//     // Calling the end function will send the request
//   });
const options = {
  // key: fs.readFileSync('./CustomSSL/server.key'),
  // cert: fs.readFileSync('./CustomSSL/server.crt')
};
// https.createServer(options, app.callback()).listen(port, () => {
//   // const host = server.address().address
//   console.log(`应用实例，11111访问地址为 https://localhost:${port}`);
// });

  app.listen(port,() => {
    console.log('Your app is listeing at port: http://localhost:'+ port);
  })
