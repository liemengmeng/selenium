package logic;



import com.fengzhaung.ScreenShot;
import log4j.LoggerControler;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.annotations.Test;



public class testcase {
LoggerControler log= LoggerControler.getLogger(testcase.class);

    @Test
    public static void test(){
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chromedriver.exe");
        WebDriver driver=new ChromeDriver();
        driver.get("https://www.baidu.com/");
        driver.findElement( By.xpath("abc")).click();
        ScreenShot.screenShots();




    }

    }




