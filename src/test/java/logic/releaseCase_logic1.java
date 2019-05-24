package logic;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;
import pages.releaseCasse;

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
        WebElement wd= openURL.driver.findElement(releaseCasse.ceselink);
        actions.moveToElement(wd).perform();
//点击发布案例
        openURL.driver.findElement(releaseCasse.release).click();

        //获取当前页面的句柄
        String handles1=openURL.driver.getWindowHandle();
//获得所有页面的句柄
        Set<String> handles=openURL.driver.getWindowHandles();
        for (String handle:handles) {
            if (handle.equals(handles1)) {
                continue;

            }else{
                openURL.driver.switchTo().window(handle);
                openURL.driver.findElement(releaseCasse.remould).click();
                openURL.driver.findElement(releaseCasse.kongtiao).click();
                openURL.driver.findElement(releaseCasse.affirm).click();
            }

        }
    }

    public static  void case2(String mingcheng){

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        openURL.driver.findElement(releaseCasse.casename).sendKeys(mingcheng);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //点击选择省
        openURL.driver.findElement(releaseCasse.sheng).click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        //选择省
        openURL.driver.findElement(releaseCasse.getsheng).click();
//点击选择市
        openURL.driver.findElement(releaseCasse.shi).click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        openURL.driver.findElement(releaseCasse.getShi).click();
//选择区
        openURL.driver.findElement(releaseCasse.qu).click();
        openURL.driver.findElement(releaseCasse.getQu).click();




//上传图片
        openURL.driver.findElement(releaseCasse.liulan).click();
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
        openURL.driver.findElement(releaseCasse.mingcheng).sendKeys("产品名称");
        openURL.driver.findElement(releaseCasse.gonglv).sendKeys("30");
        openURL.driver.findElement(releaseCasse.shuliang).sendKeys("50");
        try{
            Thread.sleep(3000);
        }catch (Exception e){

        }
        //点击提交按钮
        openURL.driver.findElement(releaseCasse.tijiao).click();
    }

    public static void case3(){
        openURL.driver.findElement(releaseCasse.fanhui).click();
    }


}
