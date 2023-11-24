[rewrite_local]

^https?://yqsb\.qau\.edu\.cn/index\.php/index/osideentry/check url script-response-body https://raw.githubusercontent.com/LuxuryLee99/OwnJS/main/CYND.js

[mitm]

hostname = yqsb.qau.edu.cn

var body = $response.body;
var obj = JSON.parse(body);
obj."code" = 1;
obj."data" = {     "nickname" : "李茶青",     "admission_time" : "2023-10-01 ~ 2023-11-30"   };
obj."msg" = "登记成功";
$done({ body: JSON.stringify(obj) });
