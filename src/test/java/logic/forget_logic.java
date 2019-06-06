package logic;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.forgetPwd;
import scala.util.control.Exception;

public class forget_logic {

public  static void skipForget(){
        //点击忘记密码页面跳转
    openURL.driver.findElement(forgetPwd.pwdBut).click();

    //校验url是否正确
    String url=openURL.driver.getCurrentUrl();
    Assert.assertEquals(url,"http://192.168.100.17/#/reset");
}
//录入账号验证码
public static void luru(String user,String yanzheng){
        openURL.driver.findElement(forgetPwd.user).sendKeys(user);
    try {
        Thread.sleep(61000);
    }catch (java.lang.Exception e ){
    }

    openURL.driver.findElement(forgetPwd.butCode).click();
    try {
        Thread.sleep(3000);
    }catch (java.lang.Exception e ){
    }
    openURL.driver.findElement(forgetPwd.yanzheng).sendKeys(yanzheng);
}
//点击下一步
    public static void next(){
        //校验下一步按钮是否为可点击状态

        boolean but=  openURL.driver.findElement(forgetPwd.nextBut).isEnabled();
      if (but){
              openURL.driver.findElement(forgetPwd.nextBut).click();

          }

    }
//重置密码
    public static void resetpwd(String pwd1 ,String pwd2){
openURL.driver.findElement(forgetPwd.newpwd1).sendKeys(pwd1);
    openURL.driver.findElement(forgetPwd.newpwd2).sendKeys(pwd2);
    openURL.driver.findElement(forgetPwd.affirmBut).click();
    }
    //重置成功
    public static void succeed(){
        openURL.driver.findElement(forgetPwd.atonce).click();
        //获取当前页面url查看是否跳转到登录页
    String url=    openURL.driver.getCurrentUrl();
    Assert.assertEquals(url,"http://192.168.100.17/#/Login");
    }


}
