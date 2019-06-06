package tools;

import java.text.SimpleDateFormat;
import java.util.Date;

//时间戳生成
//System.currentTimeMillis();
//日期处理类
public class DeteFormat {
    public static final String CHECK_LOG_FORMAT="yyyyMMdd";
    public static final String TEN_PAY_DATE_STRING_FORMAT="yyMMdd";
    public static final String REPORT_CSV_FORMAT="yyyyMMdd_HHmm";
    public static final String ZH_DATE_FORMAT="yyyy年mm月dd日 HH:mm:ss";
    public static final String DEFAULT_DATE_FORMAT="yyyy-MM-dd HH:mm:ss" ;
    public static final String DATE_FORMAT="yyyy-mm-dd HH-mm-ss";
    //引入simpleDateFormat类处理时间
    private static SimpleDateFormat simpleDateFormat;
    public  static String format(String type){
        simpleDateFormat=new SimpleDateFormat(type);
        return simpleDateFormat.format(new Date());
    }

}


