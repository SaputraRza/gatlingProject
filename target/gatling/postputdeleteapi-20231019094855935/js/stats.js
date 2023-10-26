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
        "total": "443",
        "ok": "443",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3550",
        "ok": "3550",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1131",
        "ok": "1131",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1043",
        "ok": "1043",
        "ko": "-"
    },
    "percentiles1": {
        "total": "541",
        "ok": "541",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3118",
        "ok": "3118",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3464",
        "ok": "3464",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
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
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "443",
        "ok": "443",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3550",
        "ok": "3550",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1131",
        "ok": "1131",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1043",
        "ok": "1043",
        "ko": "-"
    },
    "percentiles1": {
        "total": "541",
        "ok": "541",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3118",
        "ok": "3118",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3464",
        "ok": "3464",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
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
