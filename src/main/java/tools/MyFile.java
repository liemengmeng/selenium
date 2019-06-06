package tools;

import java.io.File;

public class MyFile {
    public static boolean fileExists(String filePath){
        return  new File(filePath).exists();
    }
    public static void creatFile(String filePath){
        MyFile myFile=new MyFile();
        if (!myFile.fileExists(filePath)){
            File file=new File(filePath);
            file.mkdir();
        }
    }
}
