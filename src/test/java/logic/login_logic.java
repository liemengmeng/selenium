package logic;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.login;

import java.net.URL;

public class login_logic {
    //账号密码登录

    public static void userlogin(String username,String password){
    openURL.driver.findElement(login.loginName).sendKeys( username);
    openURL.driver.findElement(login.passWord).sendKeys(password);
    openURL.driver.findElement(login.longinbut).click();
    }

    //验证码登录

    public static void tellogin(String tel,String yanzheng){
    //点击切换手机号的登录按钮
    openURL.driver.findElement(login.tellogin).click();
    openURL.driver.findElement(login.tel).sendKeys(tel);
        //显示等待
        WebDriverWait wait =new WebDriverWait(openURL.driver,61);
        wait.until(ExpectedConditions.presenceOfElementLocated(login.buttel));
        openURL.driver.findElement(login.buttel).click();
    try {
        Thread.sleep(3000);
    }catch (Exception e ){
    }
        openURL.driver.findElement(login.yanzheng).sendKeys(yanzheng);
    //显示等待
    wait.until(ExpectedConditions.presenceOfElementLocated(login.longinbut));
    openURL.driver.findElement(login.longinbut).click();


}
//登录成功校验昵称

    public static void assertlogin( String user) {
    String getuser = openURL.driver.findElement(login.user).getText();
    Assert.assertEquals(getuser, user);

}
//登录成功退出登录

    public static void out(){
    openURL.driver.findElement(login.out1).click();
    openURL.driver.findElement(login.out2).click();
    }


    //登录失败校验

    public static void loginfalse(){
    //获取当前页面的url
String url=openURL.driver.getCurrentUrl();
System.out.println(url);
Assert.assertEquals(url,"http://192.168.100.17/#/Login");
    }
}

