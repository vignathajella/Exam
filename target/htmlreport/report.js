$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/exam.feature");
formatter.feature({
  "name": "Test login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches chrome and opens application",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks the signin link",
  "keyword": "When "
});
formatter.step({
  "name": "user enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "name": "validate the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ]
    },
    {
      "cells": [
        "exam",
        "password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches chrome and opens application",
  "keyword": "When "
});
formatter.match({
  "location": "exam.user_launches_chrome_and_opens_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the signin link",
  "keyword": "When "
});
formatter.match({
  "location": "exam.user_clicks_the_signin_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "exam.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"Password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "exam.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "exam.user_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "exam.validate_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches chrome and opens application",
  "keyword": "When "
});
formatter.match({
  "location": "exam.user_launches_chrome_and_opens_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the signin link",
  "keyword": "When "
});
formatter.match({
  "location": "exam.user_clicks_the_signin_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"exam\"",
  "keyword": "When "
});
formatter.match({
  "location": "exam.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "exam.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "exam.user_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "exam.validate_the_home_page()"
});
formatter.result({
  "status": "passed"
});
});