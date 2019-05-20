package Run;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
            features = "src/test/resources/feature/",
            format = {"pretty",
                    "html:target/site/cucumber-pretty",
                    "rerun:target/site/return.txt",
                    "json:target/cucumber.json"},
 tags = {"@Automation"},
        glue = {"com.steps"})

    public class Runtest extends AbstractTestNGCucumberTests {
}
