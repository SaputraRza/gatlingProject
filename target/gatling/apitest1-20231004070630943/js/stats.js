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
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3175",
        "ok": "3175",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1220",
        "ok": "1220",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1107",
        "ok": "1107",
        "ko": "-"
    },
    "percentiles1": {
        "total": "954",
        "ok": "954",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2076",
        "ok": "2076",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2963",
        "ok": "2963",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3133",
        "ok": "3133",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
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
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3175",
        "ok": "3175",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1220",
        "ok": "1220",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1107",
        "ok": "1107",
        "ko": "-"
    },
    "percentiles1": {
        "total": "954",
        "ok": "954",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2076",
        "ok": "2076",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2963",
        "ok": "2963",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3133",
        "ok": "3133",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
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
