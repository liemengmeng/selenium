package logic;
import com.fengzhaung.seleniumdriver;
import org.openqa.selenium.By;
import org.testng.Assert;

import pages.login;



public class login_logic extends seleniumdriver {
    //账号密码登录

    public static void userlogin(String username,String password){
  driver.findElement(login.loginName).sendKeys( username);
  driver.findElement(login.passWord).sendKeys(password);
  driver.findElement(login.longinbut).click();

    }

    //验证码登录

    public static void tellogin(String tel,String yanzheng){
    //点击切换手机号的登录按钮
   driver.findElement(login.tellogin).click();
   driver.findElement(login.tel).sendKeys(tel);
        try {
            Thread.sleep(62000);
        }catch (Exception e ){
        }
        driver.findElement(login.buttel).click();
    try {
        Thread.sleep(3000);
    }catch (Exception e ){
    }
    driver.findElement(login.yanzheng).sendKeys(yanzheng);
 driver.findElement(login.longinbut).click();


}
//登录存在店铺管理

    public static void assertlogin( String user) {
    String getuser = driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div/div/div[1]/div/div/a")).getText();
    Assert.assertEquals(getuser, user);

}
//登录成功退出登录

    public static void out(){
    driver.findElement(login.out1).click();
    driver.findElement(login.out2).click();
    }


    //登录失败校验

    public static void loginfalse(){
    //获取当前页面的url
String url=driver.getCurrentUrl();
System.out.println(url);
Assert.assertEquals(url,"http://192.168.100.17/#/Login");
    }
}

