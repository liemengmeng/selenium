package com.steps;
import cucumber.api.java.zh_cn.并且;
import cucumber.api.java.zh_cn.当;
import cucumber.api.java.zh_cn.那么;
import logic.quitURL;
import logic.releaseCase_logic1;

public class releaseCaseSteps {
    @当("^登录账号$")
    public void 登录账号()  {
        releaseCase_logic1.login();
    }

    @并且("^打开发布案例页面，第一步选择类目分类$")
    public void 打开发布案例页面第一步选择类目分类() {
     releaseCase_logic1.case1();
    }

    @并且("^填写案例详情信息$")
    public void 填写案例详情信息() {
      releaseCase_logic1.case2("产品名称");
    }

    @并且("^进入审核并且返回列表$")
    public void 进入审核并且返回列表() {
        releaseCase_logic1.case3();
    }

    @那么("^发布成功，退出浏览器$")
    public void 发布成功退出浏览器()  {
        quitURL.quit();
    }
}
