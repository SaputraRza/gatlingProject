package com.gatling.test

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class EditComputerName extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-GB,en-US;q=0.9,en;q=0.8,id;q=0.7,ja;q=0.6,ms;q=0.5")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36")

	val select = exec(http("Select")
		.get("/computers/381"))
		.pause(3)

	val edit = exec(http("Edit")
		.post("/computers/381")
		.formParam("name", "ACE")
		.formParam("introduced", "2019-01-01")
		.formParam("discontinued", "2024-01-01")
		.formParam("company", "2"))
		.pause(3)

	//val scn = scenario("EditComputerName").exec(select, edit)

	val users = scenario("Users").exec(select)
	val admin = scenario("Admins").exec(select, edit)

	setUp{
		users.inject(rampUsers(10).during(10))
		admin.inject(rampUsers(4).during(10))
	}.protocols(httpProtocol)

}