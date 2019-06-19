package Run;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
/*
Cucumber+testn配置
 */
@CucumberOptions(
            features = "src/test/resources/feature",
            format = {"pretty",
                    "html:target/site/cucumber-pretty",
                    "rerun:target/site/return.txt",
                    "json:target/cucumberjson.json"},
 tags = {"@Automation"},//设置运行哪些标签下的test
        glue = {"com.steps"})//设置steps路径

    public class Runtest extends AbstractTestNGCucumberTests {
}
