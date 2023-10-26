var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "100",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "363",
        "ok": "405",
        "ko": "363"
    },
    "maxResponseTime": {
        "total": "3928",
        "ok": "3928",
        "ko": "418"
    },
    "meanResponseTime": {
        "total": "650",
        "ok": "920",
        "ko": "380"
    },
    "standardDeviation": {
        "total": "750",
        "ok": "989",
        "ko": "14"
    },
    "percentiles1": {
        "total": "411",
        "ok": "446",
        "ko": "374"
    },
    "percentiles2": {
        "total": "446",
        "ok": "783",
        "ko": "394"
    },
    "percentiles3": {
        "total": "2865",
        "ok": "3319",
        "ko": "402"
    },
    "percentiles4": {
        "total": "3769",
        "ok": "3865",
        "ko": "413"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 80,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.182",
        "ok": "9.091",
        "ko": "9.091"
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
        "total": "405",
        "ok": "405",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3928",
        "ok": "3928",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "920",
        "ok": "920",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "989",
        "ok": "989",
        "ko": "-"
    },
    "percentiles1": {
        "total": "446",
        "ok": "446",
        "ko": "-"
    },
    "percentiles2": {
        "total": "783",
        "ok": "783",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3319",
        "ok": "3319",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3865",
        "ok": "3865",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 80,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 15
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
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "363",
        "ok": "-",
        "ko": "363"
    },
    "maxResponseTime": {
        "total": "418",
        "ok": "-",
        "ko": "418"
    },
    "meanResponseTime": {
        "total": "380",
        "ok": "-",
        "ko": "380"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "percentiles1": {
        "total": "374",
        "ok": "-",
        "ko": "374"
    },
    "percentiles2": {
        "total": "394",
        "ok": "-",
        "ko": "394"
    },
    "percentiles3": {
        "total": "402",
        "ok": "-",
        "ko": "402"
    },
    "percentiles4": {
        "total": "413",
        "ok": "-",
        "ko": "413"
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
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "-",
        "ko": "9.091"
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
