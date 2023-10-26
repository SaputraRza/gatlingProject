var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4223",
        "ok": "4223",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2141",
        "ok": "2141",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1268",
        "ok": "1268",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2009",
        "ok": "2009",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3147",
        "ok": "3147",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4012",
        "ok": "4012",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4181",
        "ok": "4181",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.429",
        "ko": "-"
    }
},
contents: {
"req_get-single-user-e1512": {
        type: "REQUEST",
        name: "Get single user",
path: "Get single user",
pathFormatted: "req_get-single-user-e1512",
stats: {
    "name": "Get single user",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4223",
        "ok": "4223",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2141",
        "ok": "2141",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1268",
        "ok": "1268",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2009",
        "ok": "2009",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3147",
        "ok": "3147",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4012",
        "ok": "4012",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4181",
        "ok": "4181",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.429",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
