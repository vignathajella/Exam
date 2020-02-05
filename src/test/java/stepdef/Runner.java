package stepdef;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/exam.feature",
                 glue="stepdef",plugin="html:target/htmlreport")
public class Runner {

}
