Hugging Face's logo
Hugging Face
Search models, datasets, users...
Models
Datasets
Spaces
Posts
Docs
Pricing



Hugging Face is way more fun with friends and colleagues! 🤗 Join an organization
与朋友和同事拥抱更有趣！ 🤗 加入组织
Spaces:

laofang090
/
keep-alive 
private

App
Files
Community
Settings
keep-alive  活着
/
index.js 索引.js

laofang090's picture
laofang090
Update index.js
759ce3a
VERIFIED
6 days ago
raw
history
  历史
blame
  责备
edit
 编辑
delete
  删除
No virus
 没有病毒
3.39 kB
const axios = require('axios');
const moment = require('moment-timezone');
const moment = require('时刻-时区');
const http = require('http');
const cron = require('node-cron');
const port = process.env.PORT || 7860;           

// 添加24小时是不间断访问的url数组
const webpages = [ 常量网页 = [
  'https://keb1-fangqin090.koyeb.app',   // Glitch-688
  'https://keb1-fangqin090.koyeb.app', // Glitch-688
  'https://keb2-fangqin092.koyeb.app',   // Glitch-688
  'https://keb2-fangqin092.koyeb.app', // Glitch-688
  'https://flv2-fangqin092.koyeb.app',   // Glitch-688
  'https://flv2-fangqin092.koyeb.app', // Glitch-688
  'https://keb6-gbufang11.koyeb.app',   // Glitch-688
'https://keb6-gbufang11.koyeb.app', // Glitch-688
  'https://kob-14-ebufang14.koyeb.app',   // Glitch-688
'https://kob-14-ebufang14.koyeb.app', // Glitch-688
  'https://lao-ebufang14.koyeb.app',   // Glitch-688
  'https://lao-ebufang14.koyeb.app', // Glitch-688
  'https://fke9-fbufang28.koyeb.app',   // Glitch-688
  'https://fke9-fbufang28.koyeb.app', // Glitch-688
  'https://fbu28-fbufang28.koyeb.app',   // Glitch-688
  'https://fbu28-fbufang28.koyeb.app', // Glitch-688
  'https://feb10-fangqin093.koyeb.app',   // Glitch-688
  'https://feb10-fangqin093.koyeb.app', // Glitch-688
  'https://k093-fangqin093.koyeb.app',   // Glitch-688
  'https://k093-fangqin093.koyeb.app', // Glitch-688
  'https://fbe11-fangqin095.koyeb.app',   // Glitch-688
  'https://fbe11-fangqin095.koyeb.app', // Glitch-688
  'https://welcome-tori-fangqin095.koyeb.app',   // Glitch-688
  'https://welcome-tori-fangqin095.koyeb.app', // Glitch-688
  'https://keb-476836253.koyeb.app',   // Glitch-688
  'https://keb-476836253.koyeb.app', // Glitch-688
  'https://laof-476836253.koyeb.app',   // Glitch-688
  'https://laof-476836253.koyeb.app', // Glitch-688
  'https://fke15-fangqin097.koyeb.app',   // Glitch-688
  'https://fke15-fangqin097.koyeb.app', // Glitch-688
  'https://flao-fangqin097.koyeb.app',   // Glitch-688
  'https://flao-fangqin097.koyeb.app', // Glitch-688
  
  // ... 添加更多url
];

// 添加1:00-6:00暂停，其他时间正常访问的url数组
const urls = [ 常量 url = [
  'https://www.google.com',  // 备注名称
  'https://www.google.com', // 备注名称
  'https://www.baidu.com',
  // ... 添加更多url
];

// 遍历网页数组并发请求访问网页
const visit = async (url) => {
const 访问 = 异步 (url) => {
  try {
    const response = await axios.get(url);
    const 响应 = 等待 axios.get(url);
    console.log(`${moment().tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss')} Visited web successfully: ${url} --- Status: ${response.status}\n`);
    console.log(`${moment().tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss')} 已成功访问网页：${url} --- 状态：$ {响应.状态}\n`);
  } catch (error) {
  } 捕获（错误）{
    console.error(`Failed to visit ${url}: ${error.message}\n`);
    console.error(`无法访问 ${url}: ${error.message}\n`);
  }
};
const visitAll = async () => {
  for (let url of urls) {
  for (让 url 的 url) {
    await visit(url);
    等待访问（网址）；
  }
};

// 定判断是否在访问时间段内
const isWithinTime = () => {
  const now = moment().tz('Asia/Hong_Kong');
  const now = moment().tz('亚洲/香港');
  const hour = now.hour();
  const 小时 = now.hour();
  if (hour >= 1 && hour < 6) {
  if (小时 >= 1 && 小时 < 6) {
    return false;
    返回假；
  }
  return true;
};

// 创建http服务
const createServer = () => {
  const server = http.createServer((req, res) => {
  const 服务器 = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello world!');
      res.end('你好世界！');
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
      res.end('404 未找到');
    }
  });
  server.listen(port, () => {
  服务器.listen(端口, () => {
    console.log(`Server started on port ${port}`);
console.log(`服务器在端口 ${port} 上启动`);
  });
};

// 执行访问逻辑
const main = async () => {
const main = async() => {
  createServer();   创建服务器（）；
  setInterval(async () => {
  setInterval（异步（）=> {
    if (isWithinTime()) {
    如果（isWithinTime（））{
      await visitAll();
      等待访问全部（）；
    } else {
      console.log(`Stop visiting at ${moment().tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss')}`);
      console.log(`停止访问 ${moment().tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss')}`);
    }
  }, 2 * 60 * 1000); // 指定时间段访问的间隔2分钟
};
main();

//24小时不间断访问部分
async function access(url) {
异步函数访问（url）{
  try {
    const response = await axios.get(url);
    const 响应 = 等待 axios.get(url);
    console.log(`${moment().tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss')} Web visited successfully: ${url} --- status：${response.status}`);
    console.log(`${moment().tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss')} 成功访问网页：${url} --- 状态：$ {响应.状态}`);
  } catch (error) {
  } 捕获（错误）{
    console.error(`${moment().tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss')} Failed to visit ${url}, Error ${error.message}`);
    console.error(`${moment().tz('Asia/Hong_Kong').format('YYYY-MM-DD HH:mm:ss')} 访问${url}失败，错误${error.message }`);
  }
}

async function batchVisit() {
异步函数batchVisit() {

  for (let url of webpages) {
  for (设网页的 url) {
    await access(url);
    等待访问（url）；
  }
}
cron.schedule('*/1 * * * *', batchVisit); // 24小时访问任务间隔周期，默认2分钟
