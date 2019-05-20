package Run;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
            features = "src/test/resources/feature/",
            format = {"pretty",
                    "html:target/site/cucumber-pretty",
                    "rerun:target/site/return.txt",
                    "json:target/cucumber.json"},
    //   根据注解进行执行 tags = {""},
        glue = {"com.steps"})

    public class Runtest extends AbstractTestNGCucumberTests {
}
