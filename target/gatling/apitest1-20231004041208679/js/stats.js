var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "-",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "3392",
        "ok": "-",
        "ko": "3392"
    },
    "meanResponseTime": {
        "total": "1373",
        "ok": "-",
        "ko": "1373"
    },
    "standardDeviation": {
        "total": "1178",
        "ok": "-",
        "ko": "1178"
    },
    "percentiles1": {
        "total": "1177",
        "ok": "-",
        "ko": "1177"
    },
    "percentiles2": {
        "total": "2299",
        "ok": "-",
        "ko": "2299"
    },
    "percentiles3": {
        "total": "3182",
        "ok": "-",
        "ko": "3182"
    },
    "percentiles4": {
        "total": "3350",
        "ok": "-",
        "ko": "3350"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "-",
        "ko": "1.667"
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
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "-",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "3392",
        "ok": "-",
        "ko": "3392"
    },
    "meanResponseTime": {
        "total": "1373",
        "ok": "-",
        "ko": "1373"
    },
    "standardDeviation": {
        "total": "1178",
        "ok": "-",
        "ko": "1178"
    },
    "percentiles1": {
        "total": "1177",
        "ok": "-",
        "ko": "1177"
    },
    "percentiles2": {
        "total": "2299",
        "ok": "-",
        "ko": "2299"
    },
    "percentiles3": {
        "total": "3182",
        "ok": "-",
        "ko": "3182"
    },
    "percentiles4": {
        "total": "3350",
        "ok": "-",
        "ko": "3350"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "-",
        "ko": "1.667"
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
