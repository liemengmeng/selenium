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
  "duration": 10553876199,
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
  "duration": 64528657850,
  "status": "passed"
});
formatter.match({
  "location": "forgetSteps.点击下一步()"
});
formatter.result({
  "duration": 146538408,
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
  "duration": 464871828,
  "status": "passed"
});
formatter.match({
  "location": "forgetSteps.重置成功()"
});
formatter.result({
  "duration": 1245897907,
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
  "duration": 6791326623,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录成功()"
});
formatter.result({
  "duration": 584650001,
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
  "duration": 795082667,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录失败()"
});
formatter.result({
  "duration": 9947380,
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
  "duration": 65738297879,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.登录成功2()"
});
formatter.result({
  "duration": 417865535,
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
  "duration": 65924896862,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.失败()"
});
formatter.result({
  "duration": 14045857,
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
  "duration": 1200029019,
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
  "duration": 13519087894,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.打开发布案例页面第一步选择类目分类()"
});
formatter.result({
  "duration": 4045750857,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.填写案例详情信息()"
});
formatter.result({
  "duration": 25642443430,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.进入审核并且返回列表()"
});
formatter.result({
  "duration": 3229879556,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//*[@id\u003d\"app\"]/div[2]/div[2]/div[2]/button[1]/span\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.releaseCase_logic1.case3(releaseCase_logic1.java:130)\r\n\tat com.steps.releaseCaseSteps.进入审核并且返回列表(releaseCaseSteps.java:26)\r\n\tat ✽.并且进入审核并且返回列表(step_definitions/releaseCase.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "releaseCaseSteps.发布成功退出浏览器()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 11726735368,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.打开发布案例页面第一步选择类目分类()"
});
formatter.result({
  "duration": 4274408100,
  "status": "passed"
});
formatter.match({
  "location": "releaseCaseSteps.填写案例详情信息()"
});
formatter.result({
  "duration": 28491131007,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62132}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 4798f10743196822a43aa1eb3e5f935b\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"struct-ladderPrice\"]/div/div[2]/div[1]/div/div/div/div/div[1]/div/div[3]/table/tbody/tr/td[1]/div/span[1]/input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.releaseCase_logic1.case2(releaseCase_logic1.java:117)\r\n\tat com.steps.releaseCaseSteps.填写案例详情信息(releaseCaseSteps.java:21)\r\n\tat ✽.并且填写案例详情信息(step_definitions/releaseCase.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "releaseCaseSteps.进入审核并且返回列表()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "releaseCaseSteps.发布成功退出浏览器()"
});
formatter.result({
  "status": "skipped"
});
});