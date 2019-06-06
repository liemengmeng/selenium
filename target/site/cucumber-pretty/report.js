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
  "duration": 15981130667,
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
  "duration": 64634149732,
  "status": "passed"
});
formatter.match({
  "location": "forgetSteps.点击下一步()"
});
formatter.result({
  "duration": 174180934,
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
  "duration": 479676489,
  "status": "passed"
});
formatter.match({
  "location": "forgetSteps.重置成功()"
});
formatter.result({
  "duration": 1536303148,
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
  "duration": 14288944883,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录成功()"
});
formatter.result({
  "duration": 899039785,
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
  "duration": 1165388681,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录失败()"
});
formatter.result({
  "duration": 34434223,
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
  "duration": 66076469178,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录成功2()"
});
formatter.result({
  "duration": 598066320,
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
  "duration": 66191502782,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.失败()"
});
formatter.result({
  "duration": 28398705,
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
  "duration": 1558307573,
  "status": "passed"
});
formatter.uri("step_definitions/releaseCase.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:zh-CN"
    }
  ],
  "line": 2,
  "name": "发布案例",
  "description": "",
  "id": "发布案例",
  "keyword": "功能"
});
formatter.scenario({
  "line": 4,
  "name": "发布改造类空调案例",
  "description": "",
  "id": "发布案例;发布改造类空调案例",
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
  "name": "登录账号",
  "keyword": "当"
});
formatter.step({
  "line": 6,
  "name": "打开发布案例页面，第一步选择类目分类",
  "keyword": "并且"
});
formatter.step({
  "line": 7,
  "name": "填写案例详情信息",
  "keyword": "并且"
});
formatter.step({
  "line": 8,
  "name": "进入审核并且返回列表",
  "keyword": "并且"
});
formatter.step({
  "line": 9,
  "name": "发布成功，退出浏览器",
  "keyword": "那么"
});
formatter.match({
  "location": "releaseCaseSteps.登录账号()"
});
formatter.result({
  "duration": 17902750110,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.打开发布案例页面第一步选择类目分类()"
});
formatter.result({
  "duration": 4071133457,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.填写案例详情信息()"
});
formatter.result({
  "duration": 26907719604,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.进入审核并且返回列表()"
});
formatter.result({
  "duration": 816134806,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.发布成功退出浏览器()"
});
formatter.result({
  "duration": 1694821687,
  "status": "passed"
});
});