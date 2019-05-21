package logic;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.login;

public class login_logic {
    //账号密码登录
@Test
    public static void userlogin(String username,String password){
    openURL.driver.findElement(login.loginName).sendKeys( username);
    openURL.driver.findElement(login.passWord).sendKeys(password);
    openURL.driver.findElement(login.longinbut).click();
    try{     Thread.sleep(2000);
    }catch ( Exception e){
        System.out.println("超出时间");
    }
    }

    //验证码登录
@Test
    public static void tellogin(String tel,String yanzheng){
    openURL.driver.findElement(login.tellogin).click();
    openURL.driver.findElement(login.tel).sendKeys(tel);
    openURL.driver.findElement(login.buttel).click();
    openURL.driver.findElement(login.yanzheng).sendKeys(yanzheng);
    try{     Thread.sleep(2000);
    }catch ( Exception e){
        System.out.println("超出时间");
    }
    openURL.driver.findElement(login.longinbut).click();
    try{     Thread.sleep(2000);
    }catch ( Exception e){
        System.out.println("超出时间");
    }
}
//登录成功校验昵称
@Test
    public static void assertlogin( String user) {
    try {
        Thread.sleep(3000);
    } catch (Exception e) {
        System.out.println("超出时间");
    }
    String getuser = openURL.driver.findElement(login.user).getText();
    Assert.assertEquals(getuser, user);
    try {
        Thread.sleep(2000);
    } catch (Exception e) {
        System.out.println("超出时间");
    }
}
//登录成功退出登录
    @Test
    public static void out(){
    openURL.driver.findElement(login.out1).click();
    openURL.driver.findElement(login.out2).click();
        try{     Thread.sleep(2000);
        }catch ( Exception e){
            System.out.println("超出时间");
        }
    }
}

