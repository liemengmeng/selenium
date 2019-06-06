package logic;


import log4j.LoggerControler;
import org.testng.annotations.Test;
import tools.RandomNum;

public class testcase {
LoggerControler log= LoggerControler.getLogger(testcase.class);

    @Test
    public void show(){
        RandomNum.getNumRandom(5);
log.error("这是一个error");

    }

}
