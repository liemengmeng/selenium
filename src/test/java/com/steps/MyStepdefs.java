package com.steps;

import cucumber.api.PendingException;
import cucumber.api.java.zh_cn.并且;
import cucumber.api.java.zh_cn.当;
import cucumber.api.java.zh_cn.那么;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;


public class MyStepdefs {
        WebDriver driver;
        @当("^打开网页$")
    public void 打开网页()  {
driver=new ChromeDriver();
driver.get("http://192.168.100.17/#/Login");
    }

    @并且("^输入账号\"([^\"]*)\"$")
    public void 输入账号(String username) {
            driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div[2]/form/div[1]/div/div/input")).sendKeys( username);


    }

    @并且("^输入密码\"([^\"]*)\"$")
    public void 输入密码(String password){
        driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div[2]/form/div[2]/div/div/input")).sendKeys( password);

}

    @当("^点击登录按钮$")
    public void 点击登录按钮()  {
            driver.findElement(By.xpath("//*[@id=\"app\"]/div[2]/div[2]/div[2]/form/button/span")).click();

    }

    @那么("^登录成功$")
    public void 登录成功() throws Exception{
Thread.sleep(3000);
String nikknme=driver.findElement(By.className("nickName")).getText();
        Assert.assertEquals(nikknme,"啦啦");
        System.out.println("登录成功");
    }


}
