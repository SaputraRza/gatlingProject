var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4335",
        "ok": "4335",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1004",
        "ok": "1004",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1083",
        "ok": "1083",
        "ko": "-"
    },
    "percentiles1": {
        "total": "445",
        "ok": "445",
        "ko": "-"
    },
    "percentiles2": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3679",
        "ok": "3679",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4136",
        "ok": "4136",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 69,
    "percentage": 69
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
        "ko": "-"
    }
},
contents: {
"req_create-user-req-94e13": {
        type: "REQUEST",
        name: "create user request",
path: "create user request",
pathFormatted: "req_create-user-req-94e13",
stats: {
    "name": "create user request",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4335",
        "ok": "4335",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1004",
        "ok": "1004",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1083",
        "ok": "1083",
        "ko": "-"
    },
    "percentiles1": {
        "total": "445",
        "ok": "445",
        "ko": "-"
    },
    "percentiles2": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3679",
        "ok": "3679",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4136",
        "ok": "4136",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 69,
    "percentage": 69
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
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
