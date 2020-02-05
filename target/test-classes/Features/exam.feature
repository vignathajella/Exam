Feature: Test login

Scenario Outline: Validate login
When user launches chrome and opens application
When user clicks the signin link
When user enters username as "<username>"
When user enters password as "<password>"
And user clicks on login 
Then validate the home page


Examples:
|username|password|
|Lalitha|Password123|
|exam|password123|