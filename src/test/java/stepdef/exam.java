package stepdef;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class exam {

	WebDriver driver;
	@When("user launches chrome and opens application")
	public void user_launches_chrome_and_opens_application() {
		System.out.println("Launch chrome browser");
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_c2a.04.30\\Desktop\\selenium drivers\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	}

	@When("user clicks the signin link")
	public void user_clicks_the_signin_link() {
		driver.findElement(By.linkText("SignIn")).click();
	}

	@When("user enters username as {string}")
	public void user_enters_username_as(String username) {
		driver.findElement(By.name("userName")).sendKeys(username);
	}

	@When("user enters password as {string}")
	public void user_enters_password_as(String password) {
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@When("user clicks on login")
	public void user_clicks_on_login() {
		driver.findElement(By.xpath("//input[@type='submit' and @value='Login']")).click();
	}

	@Then("validate the home page")
	public void validate_the_home_page() {
		Assert.assertEquals("Home", driver.getTitle());
	}
}
