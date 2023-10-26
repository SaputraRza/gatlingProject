package com.gatling.test

import io.gatling.core.Predef._
import io.gatling.core.feeder.BatchableFeederBuilder
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder


class FeederDemo extends Simulation{

  //protocol
  val httpProtocol: HttpProtocolBuilder = http
    .baseUrl("https://computer-database.gatling.io/")

  //scenario
  val feeder: BatchableFeederBuilder[String] = csv("Data/data1.csv").circular

  val scn: ScenarioBuilder = scenario("Feeders Demo")
    .repeat(3){
      feed(feeder)
        .exec { session =>
          println("Name: " + session("name").as[String])
          println("Job: " + session("job").as[String])
          println("Page: " + session("page").as[String])
          session
        }
        .pause(1)
        .exec(http("Goto ${page}")
          .get("/#{page}"))
    }

  //setup
  setUp(
    scn.inject(atOnceUsers(1))
      .protocols(httpProtocol)
  )
}
