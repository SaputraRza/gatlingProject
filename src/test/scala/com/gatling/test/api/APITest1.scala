package com.gatling.test.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class APITest1 extends Simulation{

  //Protocol
  val httpProtocol = http.baseUrl("https://reqres.in/api/users")

  //Scenario
  val scn = scenario("Get API request")
    .exec(
      http("Get single user")
        .get("/2")
        .check(
          status.is(200), // Memeriksa status respons adalah 200
          jsonPath("$.data.first_name").is("Janet"), // Memeriksa value dari sebuah key
          jsonPath("$.data.last_name").is("Weaver")) // Memeriksa value dari sebuah key

    )
    .pause(1)

  //Setup
  setUp(
    scn.inject(rampUsers(10).during(5)
    ).protocols(httpProtocol)
  )
}
