$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("step_definitions/forget.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:zh-CN"
    }
  ],
  "line": 2,
  "name": "忘记密码",
  "description": "",
  "id": "忘记密码",
  "keyword": "功能"
});
formatter.scenario({
  "line": 4,
  "name": "正确修改忘记密码",
  "description": "",
  "id": "忘记密码;正确修改忘记密码",
  "type": "scenario",
  "keyword": "场景",
  "tags": [
    {
      "line": 3,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "点击忘记密码按钮",
  "keyword": "假如"
});
formatter.step({
  "line": 6,
  "name": "账号\"13592280532\"获取验证码录入验证码\"1234\"",
  "keyword": "并且"
});
formatter.step({
  "line": 7,
  "name": "点击下一步",
  "keyword": "并且"
});
formatter.step({
  "line": 8,
  "name": "重置密码新密码\"lmm123456\"确认\"lmm123456\"并确认",
  "keyword": "并且"
});
formatter.step({
  "line": 9,
  "name": "重置成功",
  "keyword": "那么"
});
formatter.match({
  "location": "forgetSteps.点击忘记密码按钮()"
});
formatter.result({
  "duration": 15355221280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13592280532",
      "offset": 3
    },
    {
      "val": "1234",
      "offset": 26
    }
  ],
  "location": "forgetSteps.账号获取验证码录入验证码(String,String)"
});
formatter.result({
  "duration": 64929161857,
  "status": "passed"
});
formatter.match({
  "location": "forgetSteps.点击下一步()"
});
formatter.result({
  "duration": 258920782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lmm123456",
      "offset": 8
    },
    {
      "val": "lmm123456",
      "offset": 21
    }
  ],
  "location": "forgetSteps.重置密码新密码确认并确认(String,String)"
});
formatter.result({
  "duration": 749389544,
  "status": "passed"
});
formatter.match({
  "location": "forgetSteps.重置成功()"
});
formatter.result({
  "duration": 1683345479,
  "status": "passed"
});
formatter.uri("step_definitions/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:zh-CN"
    }
  ],
  "line": 2,
  "name": "登录模块",
  "description": "",
  "id": "登录模块",
  "keyword": "功能"
});
formatter.scenario({
  "line": 4,
  "name": "账号密码登录并打开url",
  "description": "",
  "id": "登录模块;账号密码登录并打开url",
  "type": "scenario",
  "keyword": "场景",
  "tags": [
    {
      "line": 3,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "录入账号\"lmm6823@163.com\"录入密码\"lmm123456\"后点击登录",
  "keyword": "假如"
});
formatter.step({
  "line": 6,
  "name": "登录成功退出登录执行下一场景",
  "keyword": "那么"
});
formatter.match({
  "arguments": [
    {
      "val": "lmm6823@163.com",
      "offset": 5
    },
    {
      "val": "lmm123456",
      "offset": 26
    }
  ],
  "location": "loginSteps.录入账号录入密码(String,String)"
});
formatter.result({
  "duration": 14439339709,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录成功()"
});
formatter.result({
  "duration": 972590808,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "账号密码错误登录",
  "description": "",
  "id": "登录模块;账号密码错误登录",
  "type": "scenario",
  "keyword": "场景",
  "tags": [
    {
      "line": 8,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "录入账号\"lmm6823@164.com\"加密码\"lmm12345678\"后点击登录",
  "keyword": "假如"
});
formatter.step({
  "line": 11,
  "name": "登录失败",
  "keyword": "那么"
});
formatter.match({
  "arguments": [
    {
      "val": "lmm6823@164.com",
      "offset": 5
    },
    {
      "val": "lmm12345678",
      "offset": 25
    }
  ],
  "location": "loginSteps.录入账号加密码后点击登录(String,String)"
});
formatter.result({
  "duration": 1923839666,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录失败()"
});
formatter.result({
  "duration": 37348646,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "手机验证码登录",
  "description": "",
  "id": "登录模块;手机验证码登录",
  "type": "scenario",
  "keyword": "场景",
  "tags": [
    {
      "line": 15,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "录入手机号\"13592280532\"录入验证码\"1234\"后点击登录",
  "keyword": "假如"
});
formatter.step({
  "line": 18,
  "name": "登录成功",
  "keyword": "那么"
});
formatter.match({
  "arguments": [
    {
      "val": "13592280532",
      "offset": 6
    },
    {
      "val": "1234",
      "offset": 24
    }
  ],
  "location": "loginSteps.录入手机号录入验证码后点击登录(String,String)"
});
formatter.result({
  "duration": 66692588867,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录成功2()"
});
formatter.result({
  "duration": 793527622,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "手机号验证码错误登录",
  "description": "",
  "id": "登录模块;手机号验证码错误登录",
  "type": "scenario",
  "keyword": "场景",
  "tags": [
    {
      "line": 20,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "录入手机号\"13592280538\"加验证码\"1234\"后点击登录",
  "keyword": "假如"
});
formatter.step({
  "line": 23,
  "name": "失败",
  "keyword": "那么"
});
formatter.match({
  "arguments": [
    {
      "val": "13592280538",
      "offset": 6
    },
    {
      "val": "1234",
      "offset": 23
    }
  ],
  "location": "loginSteps.录入手机号加验证码后点击登录(String,String)"
});
formatter.result({
  "duration": 66380038424,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.失败()"
});
formatter.result({
  "duration": 28136514,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "关闭浏览器",
  "description": "",
  "id": "登录模块;关闭浏览器",
  "type": "scenario",
  "keyword": "场景",
  "tags": [
    {
      "line": 26,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "关闭浏览器",
  "keyword": "那么"
});
formatter.match({
  "location": "loginSteps.关闭浏览器()"
});
formatter.result({
  "duration": 1530533554,
  "status": "passed"
});
});