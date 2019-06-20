package com.steps;
import com.fengzhaung.seleniumdriver;
import cucumber.api.java.zh_cn.假如;
import cucumber.api.java.zh_cn.那么;
import logic.login_logic;

public class loginSteps {

    //正确账号密码登录
    @假如("^录入账号\"([^\"]*)\"录入密码\"([^\"]*)\"后点击登录$")
    public void 录入账号录入密码(String username, String password)  {
        seleniumdriver.open("chrome");
        login_logic.userlogin(username,password);
    }
    @那么("^登录成功退出登录执行下一场景$")
    public void 登录成功() {
        //校验用户昵称是否与预期结果一致
        login_logic.assertlogin("店铺管理");
        //退出登录
        login_logic.out();
    }
    //错误账号密码登录
    @假如("^录入账号\"([^\"]*)\"加密码\"([^\"]*)\"后点击登录$")
    public void 录入账号加密码后点击登录(String username, String password)  {
        login_logic.userlogin(username,password);
    }

    @那么("^登录失败$")
    public void 登录失败()  {
login_logic.loginfalse();
    }

    //正确手机号验证码登录
    @假如("^录入手机号\"([^\"]*)\"录入验证码\"([^\"]*)\"后点击登录$")
    public void 录入手机号录入验证码后点击登录(String tel, String yanzheng)  {
        login_logic.tellogin(tel,yanzheng);
    }


    @那么("^登录成功$")
    public void 登录成功2()  {
        //校验用户昵称是否与预期结果一致
        login_logic.assertlogin("店铺管理");
        //点击退出执行下一场景
        login_logic.out();

    }
    //错误手机号验证码登录
    @假如("^录入手机号\"([^\"]*)\"加验证码\"([^\"]*)\"后点击登录$")
    public void 录入手机号加验证码后点击登录(String tel, String yanzheng)  {
        login_logic.tellogin(tel,yanzheng);
    }

    @那么("^失败$")
    public void 失败() {
        login_logic.loginfalse();
    }
    @那么("^关闭浏览器$")
    public void 关闭浏览器() {
        seleniumdriver.closeAll();
}
}
