package tools;

import com.google.common.annotations.VisibleForTesting;
import log4j.LoggerControler;

import java.lang.annotation.Target;
import java.util.Random;

public class RandomNum {
//生成N位数的一个随机数
        static LoggerControler log=    LoggerControler.getLogger(RandomNum.class);
        public static String getNumRandom(int length){
                String num="";
                //random生成0-1的随机数，*10的多少次方后转为int类型，在转换为String类型
                num= String.valueOf((int)(Math.random()*Math.pow(10,length)));
                log.info("生成的随机数是"+num);
                return num;
        }
        //生成x到x的随机数
        public static  long getNumRandom(int min,int max){
                long num=0;
                Random random=new Random();
            num=random.nextInt(max-min+1)+min;
            return num;

        }
        //生成随机数字和字母
        public static String getStringRandom(int length) {
                String val = "";
                Random random = new Random();
                for (int i = 0; i < length; i++) {
                        String charOrNum = random.nextInt(2) % 2 == 0 ? "char" : "num";
                        if ("char".equals(charOrNum)) {
                                int temp = random.nextInt(2) % 2 == 0 ? 65 : 97;
                                val += (char) (random.nextInt(26) + temp);
                        } else if ("num".equals(charOrNum)) {
                                val += String.valueOf(random.nextInt(10));
                        }
                }
                return val;
        }
}


