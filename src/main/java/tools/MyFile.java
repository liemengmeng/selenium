package tools;

import java.io.File;

public class MyFile {
    //判断文件是否存在
    public static boolean fileExists(String filePath){
        return  new File(filePath).exists();
    }
    //文件不存在创建一个新的文件
    public static void creatFile(String filePath){
        MyFile myFile=new MyFile();
        if (!myFile.fileExists(filePath)){
            File file=new File(filePath);
            file.mkdir();
        }
    }
}
