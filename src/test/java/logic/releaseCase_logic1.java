package logic;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;

import java.awt.*;
import java.awt.event.KeyEvent;
import java.util.Set;

public class releaseCase_logic1 {
    public  static void login() {
        //打开网页
        openURL.open();
//登录账号
        login_logic.userlogin("13592280532", "lmm123456");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    //该方法只适用于除照明工程之外的案例
    public static void case1(){
        //点击案例管理
        Actions actions =new Actions(openURL.driver);
        WebElement wd= openURL.driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[1]/div/div[3]/div/div"));
        actions.moveToElement(wd).perform();
//点击发布案例
        openURL.driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div/div/div[1]/span")).click();

        //获取当前页面的句柄
        String handles1=openURL.driver.getWindowHandle();
//获得所有页面的句柄
        Set<String> handles=openURL.driver.getWindowHandles();
        for (String handle:handles) {
            if (handle.equals(handles1)) {
                continue;

            }else{
                openURL.driver.switchTo().window(handle);
                openURL.driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div/label[2]/span[2]")).click();
                openURL.driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[3]/div/div/label[2]/span[1]/span")).click();
                openURL.driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/button/span")).click();
            }

        }
    }

    public static  void case2(String mingcheng){

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        openURL.driver.findElement(By.xpath("//*[@id=\"productTitle\"]")).sendKeys(mingcheng);
        //点击选择省
        openURL.driver.findElement(By.xpath("//*[@id=\"struct-productKeywords\"]/div/div[2]/div[1]/div[1]/div[1]/input")).click();
        //选择福建省
        openURL.driver.findElement(By.xpath("/html/body/div[3]/div[1]/div[1]/ul/li[12]")).click();
//点击选择市
        openURL.driver.findElement(By.xpath("//*[@id=\"struct-productKeywords\"]/div/div[2]/div[1]/div[2]/div/input")).click();
        openURL.driver.findElement(By.xpath("/html/body/div[4]/div[1]/div[1]/ul/li[3]")).click();
//选择区
        openURL.driver.findElement(By.xpath("//*[@id=\"struct-productKeywords\"]/div/div[2]/div[1]/div[3]/div/input")).click();
        openURL.driver.findElement(By.xpath("/html/body/div[5]/div[1]/div[1]/ul/li[3]")).click();




//上传图片
        openURL.driver.findElement(By.xpath("//*[@id=\"struct-scImages\"]/div/div[2]/div[1]/div/div/div/div[1]/input")).click();
        try {
            Robot robot = new Robot();
            robot.setAutoDelay(2000);
            robot.mouseMove(131, 348);
            robot.setAutoDelay(2000);
            robot.mousePress(KeyEvent.BUTTON1_DOWN_MASK);
            robot.setAutoDelay(2000);
            robot.mouseRelease(KeyEvent.BUTTON1_DOWN_MASK);
            robot.setAutoDelay(2000);
            robot.mouseMove(531, 309);
            robot.setAutoDelay(1000);
            robot.mousePress(KeyEvent.BUTTON1_DOWN_MASK);
            robot.setAutoDelay(2000);
            robot.mouseRelease(KeyEvent.BUTTON1_DOWN_MASK);
            robot.setAutoDelay(1000);
            robot.mouseMove(567, 467);
            robot.setAutoDelay(1000);
            robot.mousePress(KeyEvent.BUTTON1_DOWN_MASK);
            robot.setAutoDelay(1000);
            robot.mouseRelease(KeyEvent.BUTTON1_DOWN_MASK);
            robot.setAutoDelay(1000);

        }catch (AWTException e){

        }
        openURL.driver.findElement(By.xpath("//*[@id=\"struct-ladderPrice\"]/div/div[2]/div[1]/div/div/div/div/div[1]/div/div[3]/table/tbody/tr/td[1]/div/span[1]/input")).sendKeys("产品名称");
        openURL.driver.findElement(By.xpath("//*[@id=\"struct-ladderPrice\"]/div/div[2]/div[1]/div/div/div/div/div[1]/div/div[3]/table/tbody/tr/td[2]/div/span[1]/input")).sendKeys("30");
        openURL.driver.findElement(By.xpath("//*[@id=\"struct-ladderPrice\"]/div/div[2]/div[1]/div/div/div/div/div[1]/div/div[3]/table/tbody/tr/td[3]/div/span[1]/input")).sendKeys("50");
        //点击提交按钮
        openURL.driver.findElement(By.xpath("//*[@id=\"struct-buttons\"]/button[3]")).click();
    }
@Test
    public void show(){
        releaseCase_logic1.login();
        releaseCase_logic1.case1();
        releaseCase_logic1.case2("alalal");
}

}
