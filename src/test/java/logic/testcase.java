package logic;

import log4j.LoggerControler;
import org.testng.annotations.Test;
import tools.RandomNum;

import java.util.logging.Logger;

public class testcase {
    LoggerControler log=LoggerControler.getLogger(testcase.class);

    @Test
    public void show(){
log.info("test");
    }

}
