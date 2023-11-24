[rewrite_local]

^https?://yqsb\\.qau\\.edu\\.cn/index\\.php/index/osideentry/check url script-response-body https://raw.githubusercontent.com/LuxuryLee99/OwnJS/main/CYND.js

[mitm]

hostname = yqsb.qau.edu.cn

*************************************

var LEE = JSON.parse($response.body);

// 使用正则表达式修改内容
LEE.someProperty = LEE.someProperty.replace(/"data":".*?\"/g, ""data":{     "nickname" : "李茶青",     "admission_time" : "2023-10-01 ~ 2023-11-30"   }");
LEE.anotherProperty = LEE.anotherProperty.replace(/"msg":".*?\"/g, ""msg":"登记成功"");
LEE.thirdProperty = LEE.thirdProperty.replace(/"code":\d+/g, ""code":1");

// 返回修改后的 JSON 响应
$done({ body: JSON.stringify(LEE) });
