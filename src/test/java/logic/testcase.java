package logic;



import com.fengzhaung.ScreenShot;
import com.fengzhaung.seleniumdriver;
import log4j.LoggerControler;


import org.testng.annotations.Test;




public class testcase {
    LoggerControler log = LoggerControler.getLogger(testcase.class);

    @Test
    public static void test() {
        seleniumdriver.open("chrome");
        seleniumdriver.driver.get("https://www.baidu.com/");
      ScreenShot.screenShots1("HAHA");


    }
}




