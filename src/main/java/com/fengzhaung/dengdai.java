package com.fengzhaung;

import log4j.LoggerControler;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class dengdai extends seleniumdriver {
    final static LoggerControler log=LoggerControler.getLogger(seleniumdriver.class);
    public static WebElement findElement(final By by){

        WebElement element=null;
        try {
            WebDriverWait wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.presenceOfElementLocated(by));
        }catch (Exception e){
            log.info("查找元素超时"+by);
            e.printStackTrace();
        }
        return  driver.findElement(by);
    }
}
