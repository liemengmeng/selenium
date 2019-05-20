$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fristfeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:zh-CN"
    }
  ],
  "line": 3,
  "name": "登录模块",
  "description": "",
  "id": "登录模块",
  "keyword": "功能",
  "tags": [
    {
      "line": 2,
      "name": "@Automation"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "正确登录",
  "description": "",
  "id": "登录模块;正确登录",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 5,
  "name": "打开网页",
  "keyword": "当"
});
formatter.step({
  "line": 6,
  "name": "输入账号\"13592280532\"",
  "keyword": "并且"
});
formatter.step({
  "line": 7,
  "name": "输入密码\"lmm123456\"",
  "keyword": "并且"
});
formatter.step({
  "line": 8,
  "name": "点击登录按钮",
  "keyword": "当"
});
formatter.step({
  "line": 9,
  "name": "登录成功",
  "keyword": "那么"
});
formatter.match({
  "location": "MyStepdefs.打开网页()"
});
formatter.result({
  "duration": 10732251509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13592280532",
      "offset": 5
    }
  ],
  "location": "MyStepdefs.输入账号(String)"
});
formatter.result({
  "duration": 453847439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lmm123456",
      "offset": 5
    }
  ],
  "location": "MyStepdefs.输入密码(String)"
});
formatter.result({
  "duration": 300271335,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.点击登录按钮()"
});
formatter.result({
  "duration": 147358639,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.登录成功()"
});
formatter.result({
  "duration": 3061923192,
  "status": "passed"
});
});