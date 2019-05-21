package com.steps;
import cucumber.api.java.zh_cn.假如;
import cucumber.api.java.zh_cn.那么;
import logic.login_logic;
import logic.openURL;
import logic.quitURL;

public class loginSteps {
    @假如("^录入账号\"([^\"]*)\"录入密码\"([^\"]*)\"后点击登录$")
    public void 录入账号录入密码(String username, String password)  {
        openURL.open();
        login_logic.userlogin(username,password);
    }
    @那么("^登录成功退出登录执行下一场景$")
    public void 登录成功() {
        //校验用户昵称是否与预期结果一致
        login_logic.assertlogin("啦啦");
        //退出登录
        login_logic.out();
    }

    @假如("^录入手机号\"([^\"]*)\"录入验证码\"([^\"]*)\"后点击登录$")
    public void 录入手机号录入验证码后点击登录(String tel, String yanzheng)  {
        login_logic.tellogin(tel,yanzheng);
    }


    @那么("^登录成功$")
    public void 登录成功2()  {
        //校验用户昵称是否与预期结果一致
        login_logic.assertlogin("啦啦");
    }

    @那么("^关闭浏览器$")
    public void 关闭浏览器() {
        quitURL.quit();
}
}
