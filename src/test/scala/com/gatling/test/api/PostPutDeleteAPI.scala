package com.gatling.test.api

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder


class PostPutDeleteAPI extends Simulation{

  //Protocol
  val httpProtocol1: HttpProtocolBuilder = http
    .baseUrl("https://reqres.in/api")

  //Scenario
  val scn1: ScenarioBuilder = scenario("Create User")
    .exec(
      http("create user request")
        .post("/users")
        .header("content-type","application/json")
        .asJson
        .body(StringBody(
          """
            |{
            |    "name": "morpheus",
            |    "job": "leader"
            |}
            |""".stripMargin))
        .check(
          status is 201,
          jsonPath("$.name") is "morpheus"
        )
    )
    .exec(
      http("Register User")
        .post("/api/register")
        .header("content-type", "application/json")
        .body(RawFileBody("Data/user.json")).asJson
        .check(
          status is 201
        )
    )
    .exec(
      http("Update User")
        .put("/api/users/2")
        .header("content-type","application/json")
        .asJson
        .body(StringBody(
          """
            |{
            |    "name": "morpheus",
            |    "job": "zion resident"
            |}
            |""".stripMargin))
        .check(
          status is 200
        )
    )
    .exec(
      http("Delete User")
        .put("/api/users/2")
        .header("content-type", "application/json")
        .asJson
        .check(
          status is 200
        )
    )

  //Setup
  setUp(
    scn1.inject(rampUsers(10).during(10))
      .protocols(httpProtocol1)
  )
}
