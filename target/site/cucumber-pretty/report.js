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
  "duration": 8439141432,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"忘记登录密码？\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58723}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 9e112f1992a0dfe09718f083266c5ebb\n*** Element info: {Using\u003dlink text, value\u003d忘记登录密码？}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.forget_logic.skipForget(forget_logic.java:10)\r\n\tat com.steps.forgetSteps.点击忘记密码按钮(forgetSteps.java:14)\r\n\tat ✽.假如点击忘记密码按钮(step_definitions/forget.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "forgetSteps.点击下一步()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "forgetSteps.重置成功()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("step_definitions/forget.feature");
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
  "duration": 69430617,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: D:\\KDubaSoftDownloads\\JavaWork\\selenium\\null\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.fengzhaung.seleniumdriver.open(seleniumdriver.java:19)\r\n\tat com.steps.forgetSteps.点击忘记密码按钮(forgetSteps.java:13)\r\n\tat ✽.假如点击忘记密码按钮(step_definitions/forget.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "forgetSteps.点击下一步()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "forgetSteps.重置成功()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("step_definitions/forget.feature");
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
  "duration": 16533410,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: D:\\KDubaSoftDownloads\\JavaWork\\selenium\\null\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.fengzhaung.seleniumdriver.open(seleniumdriver.java:19)\r\n\tat com.steps.forgetSteps.点击忘记密码按钮(forgetSteps.java:13)\r\n\tat ✽.假如点击忘记密码按钮(step_definitions/forget.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "forgetSteps.点击下一步()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "forgetSteps.重置成功()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 63242077,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: D:\\KDubaSoftDownloads\\JavaWork\\selenium\\null\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.fengzhaung.seleniumdriver.open(seleniumdriver.java:19)\r\n\tat com.steps.loginSteps.录入账号录入密码(loginSteps.java:12)\r\n\tat ✽.假如录入账号\"lmm6823@163.com\"录入密码\"lmm123456\"后点击登录(step_definitions/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录成功()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 67206661,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"app\"]/div[2]/div[2]/div[2]/form/div[1]/div/div/input\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58723}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 9e112f1992a0dfe09718f083266c5ebb\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"app\"]/div[2]/div[2]/div[2]/form/div[1]/div/div/input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.userlogin(login_logic.java:14)\r\n\tat com.steps.loginSteps.录入账号加密码后点击登录(loginSteps.java:25)\r\n\tat ✽.假如录入账号\"lmm6823@164.com\"加密码\"lmm12345678\"后点击登录(step_definitions/login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录失败()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 56133537,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"app\"]/div[2]/div[2]/div[1]/span[2]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58723}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 9e112f1992a0dfe09718f083266c5ebb\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"app\"]/div[2]/div[2]/div[1]/span[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.tellogin(login_logic.java:24)\r\n\tat com.steps.loginSteps.录入手机号录入验证码后点击登录(loginSteps.java:36)\r\n\tat ✽.假如录入手机号\"13592280532\"录入验证码\"1234\"后点击登录(step_definitions/login.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录成功2()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 42042885,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"app\"]/div[2]/div[2]/div[1]/span[2]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d72.0.3626.7 (efcef9a3ecda02b2132af215116a03852d08b9cb),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.7 (efcef9a3ecda02..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58723}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.169, webStorageEnabled: true}\nSession ID: 9e112f1992a0dfe09718f083266c5ebb\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"app\"]/div[2]/div[2]/div[1]/span[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.tellogin(login_logic.java:24)\r\n\tat com.steps.loginSteps.录入手机号加验证码后点击登录(loginSteps.java:51)\r\n\tat ✽.假如录入手机号\"13592280538\"加验证码\"1234\"后点击登录(step_definitions/login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.失败()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1424890296,
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
  "duration": 19507081,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: D:\\KDubaSoftDownloads\\JavaWork\\selenium\\null\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.fengzhaung.seleniumdriver.open(seleniumdriver.java:19)\r\n\tat com.steps.loginSteps.录入账号录入密码(loginSteps.java:12)\r\n\tat ✽.假如录入账号\"lmm6823@163.com\"录入密码\"lmm123456\"后点击登录(step_definitions/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录成功()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 4319149,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.userlogin(login_logic.java:14)\r\n\tat com.steps.loginSteps.录入账号加密码后点击登录(loginSteps.java:25)\r\n\tat ✽.假如录入账号\"lmm6823@164.com\"加密码\"lmm12345678\"后点击登录(step_definitions/login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录失败()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 669939,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.tellogin(login_logic.java:24)\r\n\tat com.steps.loginSteps.录入手机号录入验证码后点击登录(loginSteps.java:36)\r\n\tat ✽.假如录入手机号\"13592280532\"录入验证码\"1234\"后点击登录(step_definitions/login.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录成功2()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2550994,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.tellogin(login_logic.java:24)\r\n\tat com.steps.loginSteps.录入手机号加验证码后点击登录(loginSteps.java:51)\r\n\tat ✽.假如录入手机号\"13592280538\"加验证码\"1234\"后点击登录(step_definitions/login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.失败()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 722191,
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
  "duration": 17687142,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: D:\\KDubaSoftDownloads\\JavaWork\\selenium\\null\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.fengzhaung.seleniumdriver.open(seleniumdriver.java:19)\r\n\tat com.steps.loginSteps.录入账号录入密码(loginSteps.java:12)\r\n\tat ✽.假如录入账号\"lmm6823@163.com\"录入密码\"lmm123456\"后点击登录(step_definitions/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录成功()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 569169,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.userlogin(login_logic.java:14)\r\n\tat com.steps.loginSteps.录入账号加密码后点击登录(loginSteps.java:25)\r\n\tat ✽.假如录入账号\"lmm6823@164.com\"加密码\"lmm12345678\"后点击登录(step_definitions/login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录失败()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1314686,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.tellogin(login_logic.java:24)\r\n\tat com.steps.loginSteps.录入手机号录入验证码后点击登录(loginSteps.java:36)\r\n\tat ✽.假如录入手机号\"13592280532\"录入验证码\"1234\"后点击登录(step_definitions/login.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.登录成功2()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1199919,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u00277JYZXTMLZ4PZZPL\u0027, ip: \u0027192.168.100.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat logic.login_logic.tellogin(login_logic.java:24)\r\n\tat com.steps.loginSteps.录入手机号加验证码后点击登录(loginSteps.java:51)\r\n\tat ✽.假如录入手机号\"13592280538\"加验证码\"1234\"后点击登录(step_definitions/login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginSteps.失败()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3857283,
  "status": "passed"
});
});