package com.steps;

import cucumber.api.PendingException;
import cucumber.api.java.zh_cn.假如;
import cucumber.api.java.zh_cn.并且;
import cucumber.api.java.zh_cn.那么;
import logic.forget_logic;
import logic.openURL;
import logic.quitURL;

public class forgetSteps {
    @假如("^点击忘记密码按钮$")
    public void 点击忘记密码按钮() {
        openURL.open();
        forget_logic.skipForget();
    }

    @并且("^账号\"([^\"]*)\"获取验证码录入验证码\"([^\"]*)\"$")
    public void 账号获取验证码录入验证码(String user,String yanzheng) {
      forget_logic.luru(user,yanzheng);
    }

    @并且("^点击下一步$")
    public void 点击下一步() {
    forget_logic.next();
    }

    @并且("^重置密码新密码\"([^\"]*)\"确认\"([^\"]*)\"并确认$")
    public void 重置密码新密码确认并确认(String pwd1 ,String pwd2) throws Throwable {
        forget_logic.resetpwd(pwd1,pwd2);
    }

    @那么("^重置成功$")
    public void 重置成功()  {
       forget_logic.succeed();
        quitURL.quit();
    }
}
