package com.fengzhaung;

import cucumber.deps.difflib.myers.MyersDiff;
import log4j.LoggerControler;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.time.DateUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.Augmenter;

import tools.MyFile;

import java.io.File;
import java.io.IOException;

/*public class ScreenShot extends  seleniumdriver {
    LoggerControler log=LoggerControler.getLogger(ScreenShot.class);
    WebDriver augmentedDriver=new Augmenter().augment(driver);
    File file =((TakesScreenshot)augmentedDriver).getScreenshotAs(OutputType.FILE);
    try{
        MyFile myFile=new MyFile();
        myFile.creatFile(path+ DateUtils.format(DateUtils.CHECK_LOG_FORMAT));
        FileUtils.copyFile(file,new File(path+DateUtils.fromat(DateUtils.CHECK_LOG_FORMAT)+"/"
        DateUtile.format(DateUtils.RANGE_WEEK_RELATIVE)+"jpg"));
    }catch(IOException e){
//缺少log
e.printStackTrace();
    }

}
*/