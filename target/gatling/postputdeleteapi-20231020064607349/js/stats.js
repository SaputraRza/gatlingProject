var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3935",
        "ok": "3935",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "718",
        "ok": "718",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "770",
        "ok": "770",
        "ko": "-"
    },
    "percentiles1": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "percentiles2": {
        "total": "611",
        "ok": "611",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2902",
        "ok": "2902",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3692",
        "ok": "3692",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 170,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.182",
        "ok": "18.182",
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
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3935",
        "ok": "3935",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1038",
        "ok": "1038",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "985",
        "ok": "985",
        "ko": "-"
    },
    "percentiles1": {
        "total": "538",
        "ok": "538",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1063",
        "ok": "1063",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3421",
        "ok": "3421",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3742",
        "ok": "3742",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 71,
    "percentage": 71
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 5
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
    },"req_register-user-ad9a1": {
        type: "REQUEST",
        name: "Register User",
path: "Register User",
pathFormatted: "req_register-user-ad9a1",
stats: {
    "name": "Register User",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1278",
        "ok": "1278",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "398",
        "ok": "398",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles1": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "percentiles2": {
        "total": "396",
        "ok": "396",
        "ko": "-"
    },
    "percentiles3": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "percentiles4": {
        "total": "618",
        "ok": "618",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 1
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
