var classes = [
    {
        "name": "Carbon\\FactoryImmutable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Carbon\\Factory"
        ],
        "parents": [
            "Carbon\\Factory"
        ],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 224,
        "loc": 229,
        "lloc": 5,
        "mi": 220.96,
        "mIwoC": 171,
        "commentWeight": 49.96,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Laravel\\ServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setAppGetter",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocaleGetter",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocale",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getApp",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGlobalApp",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEventDispatcher",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 7,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 2,
        "wmc": 23,
        "ccn": 17,
        "ccnMethodMax": 5,
        "externals": [
            "Illuminate\\Support\\ServiceProvider",
            "Carbon\\Carbon",
            "Carbon\\CarbonImmutable",
            "Carbon\\CarbonPeriod",
            "Carbon\\CarbonInterval",
            "Illuminate\\Support\\Carbon",
            "Illuminate\\Support\\Facades\\Date"
        ],
        "parents": [
            "Illuminate\\Support\\ServiceProvider"
        ],
        "implements": [],
        "lcom": 2,
        "length": 87,
        "vocabulary": 23,
        "volume": 393.55,
        "difficulty": 15.47,
        "effort": 6086.9,
        "level": 0.06,
        "bugs": 0.13,
        "time": 338,
        "intelligentContent": 25.45,
        "number_operators": 29,
        "number_operands": 58,
        "number_operators_unique": 8,
        "number_operands_unique": 15,
        "cloc": 4,
        "loc": 80,
        "lloc": 76,
        "mi": 55.49,
        "mIwoC": 38.52,
        "commentWeight": 16.98,
        "kanDefect": 0.64,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0.56,
        "relativeSystemComplexity": 196.56,
        "totalStructuralComplexity": 1764,
        "totalDataComplexity": 5.07,
        "totalSystemComplexity": 1769.07,
        "package": "Carbon\\Laravel\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Carbon",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "isMutable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "DateTime",
            "Carbon\\CarbonInterface"
        ],
        "parents": [
            "DateTime"
        ],
        "implements": [
            "Carbon\\CarbonInterface"
        ],
        "lcom": 1,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 495,
        "loc": 504,
        "lloc": 9,
        "mi": 220.97,
        "mIwoC": 171,
        "commentWeight": 49.97,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "Carbon\\",
        "pageRank": 0.02,
        "afferentCoupling": 5,
        "efferentCoupling": 2,
        "instability": 0.29,
        "violations": {}
    },
    {
        "name": "Carbon\\Language",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "regions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNames",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCode",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVariant",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVariantName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRegion",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRegionName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFullIsoName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setIsoName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFullNativeName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setNativeName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIsoName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNativeName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIsoDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNativeDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFullIsoDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFullNativeDescription",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 22,
        "nbMethods": 16,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 16,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 2,
        "wmc": 40,
        "ccn": 25,
        "ccnMethodMax": 5,
        "externals": [
            "JsonSerializable",
            "static",
            "static"
        ],
        "parents": [],
        "implements": [
            "JsonSerializable"
        ],
        "lcom": 4,
        "length": 231,
        "vocabulary": 31,
        "volume": 1144.42,
        "difficulty": 17.28,
        "effort": 19775.57,
        "level": 0.06,
        "bugs": 0.38,
        "time": 1099,
        "intelligentContent": 66.23,
        "number_operators": 87,
        "number_operands": 144,
        "number_operators_unique": 6,
        "number_operands_unique": 25,
        "cloc": 133,
        "loc": 278,
        "lloc": 145,
        "mi": 71.97,
        "mIwoC": 28.07,
        "commentWeight": 43.9,
        "kanDefect": 0.85,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 2.1,
        "relativeSystemComplexity": 102.1,
        "totalStructuralComplexity": 2200,
        "totalDataComplexity": 46.27,
        "totalSystemComplexity": 2246.27,
        "package": "Carbon\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Carbon\\CarbonInterval",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setTimezone",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shiftTimezone",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCascadeFactors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultCascadeFactors",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "standardizeUnit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFlipCascadeFactors",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCascadeFactors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFactor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFactorWithDefault",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDaysPerWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHoursPerDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMinutesPerHour",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSecondsPerMinute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMillisecondsPerSecond",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMicrosecondsPerMillisecond",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__callStatic",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "this",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseFromLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "castIntervalToClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyNegativeUnits",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyStep",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cast",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "instance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeFromString",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveInterval",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromDateString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "weeksAndDays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEmpty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mixin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "callMacro",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getForHumansInitialVariables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getForHumansParameters",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRoundingMethodFromOptions",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonZeroValues",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValuesSequence",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forHumans",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDateInterval",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toPeriod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "invert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "solveNegativeInterval",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sub",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subtract",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "plus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "minus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "times",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shares",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyProperties",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "multiply",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "divide",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDateIntervalSpec",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "spec",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compareDateIntervals",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compare",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "invertCascade",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doCascade",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cascade",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasNegativeValues",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasPositiveValues",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "total",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "eq",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "equalTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ne",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notEqualTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "greaterThan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gte",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "greaterThanOrEqualTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lessThan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lte",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lessThanOrEqualTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "between",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "betweenIncluded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "betweenExcluded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isBetween",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roundUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floorUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ceilUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "round",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ceil",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "needsDeclension",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 99,
        "nbMethods": 97,
        "nbMethodsPrivate": 18,
        "nbMethodsPublic": 79,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 2,
        "wmc": 429,
        "ccn": 333,
        "ccnMethodMax": 57,
        "externals": [
            "DateInterval",
            "Carbon\\CarbonConverterInterface",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\ParseErrorException",
            "Carbon\\Exceptions\\ParseErrorException",
            "Carbon\\Exceptions\\ParseErrorException",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Carbon",
            "Carbon\\Exceptions\\BadFluentConstructorException",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\InvalidIntervalException",
            "static",
            "static",
            "Carbon\\Carbon",
            "static",
            "DateInterval",
            "Carbon\\Exceptions\\InvalidCastException",
            "static",
            "className",
            "DateInterval",
            "DateInterval",
            "DateInterval",
            "Carbon\\Carbon",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\UnknownGetterException",
            "Carbon\\Carbon",
            "static",
            "static",
            "Carbon\\Carbon",
            "Carbon\\Exceptions\\UnknownSetterException",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Carbon",
            "Carbon\\Carbon",
            "Carbon\\Carbon",
            "Carbon\\Exceptions\\BadFluentSetterException",
            "static",
            "Carbon\\Language",
            "static",
            "DateTimeZone",
            "Carbon\\CarbonPeriod",
            "static",
            "Carbon\\Exceptions\\InvalidIntervalException",
            "static",
            "DateInterval",
            "static",
            "DateInterval",
            "DateInterval",
            "Carbon\\Carbon",
            "DateInterval",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\UnknownUnitException",
            "static",
            "Carbon\\Exceptions\\UnitNotConfiguredException",
            "static",
            "static",
            "Carbon\\CarbonImmutable"
        ],
        "parents": [
            "DateInterval"
        ],
        "implements": [
            "Carbon\\CarbonConverterInterface"
        ],
        "lcom": 38,
        "length": 3030,
        "vocabulary": 290,
        "volume": 24785.12,
        "difficulty": 114.99,
        "effort": 2850100.12,
        "level": 0.01,
        "bugs": 8.26,
        "time": 158339,
        "intelligentContent": 215.54,
        "number_operators": 878,
        "number_operands": 2152,
        "number_operators_unique": 28,
        "number_operands_unique": 262,
        "cloc": 999,
        "loc": 2251,
        "lloc": 1252,
        "mi": 42.92,
        "mIwoC": 0,
        "commentWeight": 42.92,
        "kanDefect": 14.35,
        "relativeStructuralComplexity": 3249,
        "relativeDataComplexity": 2.7,
        "relativeSystemComplexity": 3251.7,
        "totalStructuralComplexity": 321651,
        "totalDataComplexity": 267.14,
        "totalSystemComplexity": 321918.14,
        "package": "Carbon\\",
        "pageRank": 0.03,
        "afferentCoupling": 7,
        "efferentCoupling": 18,
        "instability": 0.72,
        "violations": {}
    },
    {
        "name": "Carbon\\Doctrine\\DateTimeImmutableType",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getCarbonClassName",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Doctrine\\DBAL\\Types\\VarDateTimeImmutableType",
            "Carbon\\Doctrine\\CarbonDoctrineType"
        ],
        "parents": [
            "Doctrine\\DBAL\\Types\\VarDateTimeImmutableType"
        ],
        "implements": [
            "Carbon\\Doctrine\\CarbonDoctrineType"
        ],
        "lcom": 1,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 4,
        "loc": 13,
        "lloc": 9,
        "mi": 208.87,
        "mIwoC": 171,
        "commentWeight": 37.87,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "Carbon\\Doctrine\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Doctrine\\DateTimeDefaultPrecision",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 5,
        "vocabulary": 4,
        "volume": 10,
        "difficulty": 1.5,
        "effort": 15,
        "level": 0.67,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 6.67,
        "number_operators": 2,
        "number_operands": 3,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 10,
        "loc": 23,
        "lloc": 13,
        "mi": 111.21,
        "mIwoC": 68.56,
        "commentWeight": 42.64,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "Carbon\\Doctrine\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Carbon\\Doctrine\\DateTimeType",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Doctrine\\DBAL\\Types\\VarDateTimeType",
            "Carbon\\Doctrine\\CarbonDoctrineType"
        ],
        "parents": [
            "Doctrine\\DBAL\\Types\\VarDateTimeType"
        ],
        "implements": [
            "Carbon\\Doctrine\\CarbonDoctrineType"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 6,
        "lloc": 5,
        "mi": 200.56,
        "mIwoC": 171,
        "commentWeight": 29.56,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Doctrine\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Doctrine\\CarbonTypeConverter",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "getCarbonClassName",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSQLDeclaration",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "convertToPHPValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "convertToDatabaseValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 14,
        "ccnMethodMax": 7,
        "externals": [
            "Doctrine\\DBAL\\Platforms\\AbstractPlatform",
            "Carbon\\Doctrine\\DateTimeDefaultPrecision",
            "Doctrine\\DBAL\\Platforms\\AbstractPlatform",
            "class",
            "class",
            "Doctrine\\DBAL\\Types\\ConversionException",
            "Doctrine\\DBAL\\Platforms\\AbstractPlatform",
            "Doctrine\\DBAL\\Types\\ConversionException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 113,
        "vocabulary": 35,
        "volume": 579.61,
        "difficulty": 11.41,
        "effort": 6611.84,
        "level": 0.09,
        "bugs": 0.19,
        "time": 367,
        "intelligentContent": 50.81,
        "number_operators": 36,
        "number_operands": 77,
        "number_operators_unique": 8,
        "number_operands_unique": 27,
        "cloc": 19,
        "loc": 77,
        "lloc": 58,
        "mi": 75.09,
        "mIwoC": 40.3,
        "commentWeight": 34.79,
        "kanDefect": 0.78,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.31,
        "relativeSystemComplexity": 50.31,
        "totalStructuralComplexity": 196,
        "totalDataComplexity": 5.25,
        "totalSystemComplexity": 201.25,
        "package": "Carbon\\Doctrine\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Doctrine\\CarbonType",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "requiresSQLCommentHint",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Carbon\\Doctrine\\DateTimeType",
            "Carbon\\Doctrine\\CarbonDoctrineType",
            "Doctrine\\DBAL\\Platforms\\AbstractPlatform"
        ],
        "parents": [
            "Carbon\\Doctrine\\DateTimeType"
        ],
        "implements": [
            "Carbon\\Doctrine\\CarbonDoctrineType"
        ],
        "lcom": 2,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.5,
        "effort": 3.17,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 12.68,
        "number_operators": 2,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 10,
        "loc": 22,
        "lloc": 12,
        "mi": 113.94,
        "mIwoC": 70.71,
        "commentWeight": 43.23,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 5,
        "totalSystemComplexity": 5,
        "package": "Carbon\\Doctrine\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Doctrine\\CarbonImmutableType",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "requiresSQLCommentHint",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Carbon\\Doctrine\\DateTimeImmutableType",
            "Carbon\\Doctrine\\CarbonDoctrineType",
            "Doctrine\\DBAL\\Platforms\\AbstractPlatform"
        ],
        "parents": [
            "Carbon\\Doctrine\\DateTimeImmutableType"
        ],
        "implements": [
            "Carbon\\Doctrine\\CarbonDoctrineType"
        ],
        "lcom": 2,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.5,
        "effort": 3.17,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 12.68,
        "number_operators": 2,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 10,
        "loc": 22,
        "lloc": 12,
        "mi": 113.94,
        "mIwoC": 70.71,
        "commentWeight": 43.23,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 5,
        "totalSystemComplexity": 5,
        "package": "Carbon\\Doctrine\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\MessageFormatter\\MessageFormatterMapper",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transformLocale",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Carbon\\MessageFormatter\\LazyMessageFormatter",
            "Symfony\\Component\\Translation\\Formatter\\MessageFormatter"
        ],
        "parents": [
            "Carbon\\MessageFormatter\\LazyMessageFormatter"
        ],
        "implements": [],
        "lcom": 2,
        "length": 12,
        "vocabulary": 8,
        "volume": 36,
        "difficulty": 2.7,
        "effort": 97.2,
        "level": 0.37,
        "bugs": 0.01,
        "time": 5,
        "intelligentContent": 13.33,
        "number_operators": 3,
        "number_operands": 9,
        "number_operators_unique": 3,
        "number_operands_unique": 5,
        "cloc": 5,
        "loc": 18,
        "lloc": 13,
        "mi": 100.84,
        "mIwoC": 64.4,
        "commentWeight": 36.44,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "Carbon\\MessageFormatter\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\CarbonTimeZone",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseNumericTimezone",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDateTimeZoneNameFromMixed",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDateTimeZoneFromName",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cast",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "instance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAbbreviatedName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAbbr",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toOffsetName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toOffsetTimeZone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRegionName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRegionTimeZone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromHourOffset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromMinuteOffset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOffsetNameFromMinuteOffset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 18,
        "nbMethods": 18,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 15,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 50,
        "ccn": 33,
        "ccnMethodMax": 9,
        "externals": [
            "DateTimeZone",
            "static",
            "Carbon\\Exceptions\\InvalidTimeZoneException",
            "static",
            "static",
            "className",
            "Carbon\\Exceptions\\InvalidCastException",
            "className",
            "static",
            "static",
            "static",
            "Carbon\\Carbon",
            "Carbon\\Exceptions\\InvalidTimeZoneException",
            "DateTimeInterface",
            "Carbon\\Carbon",
            "static",
            "DateTimeInterface",
            "static",
            "DateTimeInterface",
            "Carbon\\Carbon",
            "Carbon\\Carbon",
            "DateTimeInterface",
            "static",
            "Carbon\\Carbon",
            "Carbon\\Carbon",
            "Carbon\\Exceptions\\InvalidTimeZoneException",
            "static",
            "static",
            "static",
            "static"
        ],
        "parents": [
            "DateTimeZone"
        ],
        "implements": [],
        "lcom": 11,
        "length": 252,
        "vocabulary": 64,
        "volume": 1512,
        "difficulty": 27.17,
        "effort": 41076,
        "level": 0.04,
        "bugs": 0.5,
        "time": 2282,
        "intelligentContent": 55.66,
        "number_operators": 89,
        "number_operands": 163,
        "number_operators_unique": 16,
        "number_operands_unique": 48,
        "cloc": 108,
        "loc": 255,
        "lloc": 147,
        "mi": 68.31,
        "mIwoC": 26.02,
        "commentWeight": 42.29,
        "kanDefect": 2.03,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 2.42,
        "relativeSystemComplexity": 123.42,
        "totalStructuralComplexity": 2178,
        "totalDataComplexity": 43.5,
        "totalSystemComplexity": 2221.5,
        "package": "Carbon\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 7,
        "instability": 0.88,
        "violations": {}
    },
    {
        "name": "Carbon\\Factory",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClassName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setClassName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "className",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSettings",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSettings",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "settings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeSettings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 2,
        "wmc": 18,
        "ccn": 14,
        "ccnMethodMax": 11,
        "externals": [
            "ReflectionMethod",
            "this"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 116,
        "vocabulary": 23,
        "volume": 524.73,
        "difficulty": 12.08,
        "effort": 6340.53,
        "level": 0.08,
        "bugs": 0.17,
        "time": 352,
        "intelligentContent": 43.43,
        "number_operators": 29,
        "number_operands": 87,
        "number_operators_unique": 5,
        "number_operands_unique": 18,
        "cloc": 224,
        "loc": 290,
        "lloc": 66,
        "mi": 88.29,
        "mIwoC": 39.38,
        "commentWeight": 48.91,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 1.11,
        "relativeSystemComplexity": 65.11,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 10,
        "totalSystemComplexity": 586,
        "package": "Carbon\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\CarbonPeriod",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "instance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromIso",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "intervalHasTime",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isIso8601",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseIso8601",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addMissingParts",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mixin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__callStatic",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyIfImmutable",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGetter",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__isset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDateClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDateClass",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDateInterval",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "invertDateInterval",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDates",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOptions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toggleOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "excludeStartDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "excludeEndDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDateInterval",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStartDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEndDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRecurrences",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStartExcluded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEndExcluded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStartIncluded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEndIncluded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIncludedStartDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIncludedEndDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addFilter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prependFilter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeFilter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasFilter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFilters",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFilters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetFilters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRecurrences",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setStartDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEndDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valid",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "key",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "current",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rewind",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "skip",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toIso8601String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "spec",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cast",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDatePeriod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isUnfilteredAndEndLess",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "first",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "last",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTimezone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shiftTimezone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "calculateEnd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEndFromRecurrences",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "iterateUntilEnd",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "overlaps",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forEach",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "map",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "eq",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "equalTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ne",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notEqualTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startsBefore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startsBeforeOrAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startsAfter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startsAfterOrAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startsAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endsBefore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endsBeforeOrAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endsAfter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endsAfterOrAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endsAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStarted",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEnded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInProgress",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roundUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floorUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ceilUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "round",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ceil",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "contains",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "follows",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFollowedBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isConsecutiveWith",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateInternalState",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFilterTuple",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isCarbonPredicateMethod",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filterRecurrences",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filterEndDate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endIteration",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "handleChangedParameters",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateCurrentDate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkFilters",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "prepareForReturn",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "incrementCurrentDateUntilValid",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "callMacro",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveCarbon",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveCarbonPeriod",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "orderCouple",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "makeDateTime",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInfiniteDate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rawDate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultParameters",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 124,
        "nbMethods": 120,
        "nbMethodsPrivate": 27,
        "nbMethodsPublic": 93,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 0,
        "wmc": 387,
        "ccn": 268,
        "ccnMethodMax": 43,
        "externals": [
            "Iterator",
            "Countable",
            "JsonSerializable",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\NotAPeriodException",
            "static",
            "static",
            "static",
            "static",
            "DateInterval",
            "Carbon\\CarbonInterval",
            "Carbon\\Carbon",
            "static",
            "Carbon\\Carbon",
            "Carbon\\Exceptions\\InvalidPeriodParameterException",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\CarbonInterval",
            "Carbon\\Exceptions\\InvalidPeriodParameterException",
            "Carbon\\Carbon",
            "Carbon\\CarbonInterval",
            "Carbon\\Exceptions\\UnknownGetterException",
            "Carbon\\Exceptions\\NotACarbonClassException",
            "Carbon\\CarbonInterval",
            "Carbon\\Exceptions\\InvalidIntervalException",
            "Carbon\\Exceptions\\InvalidIntervalException",
            "Carbon\\Exceptions\\InvalidPeriodParameterException",
            "Carbon\\Exceptions\\InvalidPeriodParameterException",
            "Carbon\\Exceptions\\InvalidPeriodDateException",
            "Carbon\\Exceptions\\InvalidPeriodDateException",
            "static",
            "className",
            "Carbon\\Exceptions\\InvalidCastException",
            "className",
            "Carbon\\Exceptions\\EndLessPeriodException",
            "static",
            "static",
            "Carbon\\Carbon",
            "Carbon\\Carbon",
            "Carbon\\CarbonInterval",
            "Carbon\\Carbon",
            "Carbon\\Exceptions\\UnknownMethodException",
            "Carbon\\Exceptions\\UnreachableException",
            "Carbon\\CarbonImmutable",
            "Carbon\\CarbonImmutable",
            "Carbon\\Exceptions\\UnreachableException",
            "static",
            "static",
            "Carbon\\TranslatorImmutable",
            "Carbon\\CarbonInterface",
            "Carbon\\Exceptions\\UnreachableException",
            "static",
            "static",
            "Carbon\\Carbon",
            "class"
        ],
        "parents": [],
        "implements": [
            "Iterator",
            "Countable",
            "JsonSerializable"
        ],
        "lcom": 20,
        "length": 1845,
        "vocabulary": 206,
        "volume": 14181.59,
        "difficulty": 60.13,
        "effort": 852706.02,
        "level": 0.02,
        "bugs": 4.73,
        "time": 47373,
        "intelligentContent": 235.86,
        "number_operators": 589,
        "number_operands": 1256,
        "number_operators_unique": 18,
        "number_operands_unique": 188,
        "cloc": 1156,
        "loc": 2217,
        "lloc": 1061,
        "mi": 44.98,
        "mIwoC": 0,
        "commentWeight": 44.98,
        "kanDefect": 9.71,
        "relativeStructuralComplexity": 12321,
        "relativeDataComplexity": 1.6,
        "relativeSystemComplexity": 12322.6,
        "totalStructuralComplexity": 1527804,
        "totalDataComplexity": 198.02,
        "totalSystemComplexity": 1528002.02,
        "package": "Carbon\\",
        "pageRank": 0.02,
        "afferentCoupling": 4,
        "efferentCoupling": 22,
        "instability": 0.85,
        "violations": {}
    },
    {
        "name": "Carbon\\CarbonImmutable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__clone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEndOfTimeYear",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStartOfTimeYear",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "DateTimeImmutable",
            "Carbon\\CarbonInterface",
            "static",
            "static"
        ],
        "parents": [
            "DateTimeImmutable"
        ],
        "implements": [
            "Carbon\\CarbonInterface"
        ],
        "lcom": 5,
        "length": 42,
        "vocabulary": 16,
        "volume": 168,
        "difficulty": 2.77,
        "effort": 465.23,
        "level": 0.36,
        "bugs": 0.06,
        "time": 26,
        "intelligentContent": 60.67,
        "number_operators": 18,
        "number_operands": 24,
        "number_operators_unique": 3,
        "number_operands_unique": 13,
        "cloc": 508,
        "loc": 553,
        "lloc": 45,
        "mi": 97.5,
        "mIwoC": 47.68,
        "commentWeight": 49.82,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.6,
        "relativeSystemComplexity": 17.6,
        "totalStructuralComplexity": 80,
        "totalDataComplexity": 8,
        "totalSystemComplexity": 88,
        "package": "Carbon\\",
        "pageRank": 0.01,
        "afferentCoupling": 4,
        "efferentCoupling": 3,
        "instability": 0.43,
        "violations": {}
    },
    {
        "name": "Carbon\\CarbonPeriodImmutable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "copyIfImmutable",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Carbon\\CarbonPeriod"
        ],
        "parents": [
            "Carbon\\CarbonPeriod"
        ],
        "implements": [],
        "lcom": 1,
        "length": 4,
        "vocabulary": 2,
        "volume": 4,
        "difficulty": 1.5,
        "effort": 6,
        "level": 0.67,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 2.67,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 1,
        "cloc": 11,
        "loc": 20,
        "lloc": 9,
        "mi": 120.32,
        "mIwoC": 74.7,
        "commentWeight": 45.62,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "Carbon\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Carbon\\Translator",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Carbon\\LazyTranslator"
        ],
        "parents": [
            "Carbon\\LazyTranslator"
        ],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 1,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "Carbon\\PHPStan\\MacroExtension",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "PHPStan\\Reflection\\MethodsClassReflectionExtension",
            "PHPStan\\Reflection\\Php\\PhpMethodReflectionFactory",
            "PHPStan\\Reflection\\ReflectionProvider",
            "Carbon\\PHPStan\\MacroScanner",
            "PHPStan\\Reflection\\ClassReflection",
            "PHPStan\\Reflection\\MethodReflection",
            "PHPStan\\Reflection\\ClassReflection",
            "PHPStan\\Type\\TypehintHelper",
            "PHPStan\\Reflection\\Assertions"
        ],
        "parents": [],
        "implements": [
            "PHPStan\\Reflection\\MethodsClassReflectionExtension"
        ],
        "lcom": 1,
        "length": 36,
        "vocabulary": 9,
        "volume": 114.12,
        "difficulty": 4.29,
        "effort": 489.07,
        "level": 0.23,
        "bugs": 0.04,
        "time": 27,
        "intelligentContent": 26.63,
        "number_operators": 6,
        "number_operands": 30,
        "number_operators_unique": 2,
        "number_operands_unique": 7,
        "cloc": 23,
        "loc": 44,
        "lloc": 21,
        "mi": 101.35,
        "mIwoC": 56.35,
        "commentWeight": 45.01,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.29,
        "relativeSystemComplexity": 169.29,
        "totalStructuralComplexity": 507,
        "totalDataComplexity": 0.86,
        "totalSystemComplexity": 507.86,
        "package": "Carbon\\PHPStan\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 8,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\PHPStan\\Macro",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Carbon\\PHPStan\\LazyMacro"
        ],
        "parents": [
            "Carbon\\PHPStan\\LazyMacro"
        ],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\PHPStan\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Carbon\\PHPStan\\AbstractMacro",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getReflectionFunction",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDeclaringClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isPrivate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isPublic",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFinal",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInternal",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isAbstract",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStatic",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDocComment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getParameters",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getReturnType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDeprecated",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isVariadic",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPrototype",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTentativeReturnType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "returnsByReference",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "adaptType",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasModernParser",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 17,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 14,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 35,
        "ccn": 19,
        "ccnMethodMax": 7,
        "externals": [
            "PHPStan\\Reflection\\Php\\BuiltinMethodReflection",
            "ReflectionMethod",
            "ReflectionFunction",
            "PHPStan\\BetterReflection\\Reflection\\Adapter\\ReflectionParameter",
            "stdClass",
            "Closure",
            "ReflectionFunction",
            "PHPStan\\BetterReflection\\Reflection\\ReflectionClass",
            "PHPStan\\BetterReflection\\Reflection\\ReflectionClass",
            "PHPStan\\BetterReflection\\Reflection\\ReflectionFunction",
            "PHPStan\\BetterReflection\\Reflection\\ReflectionFunction",
            "InvalidArgumentException",
            "ReflectionClass",
            "ReflectionClass",
            "PHPStan\\TrinaryLogic",
            "PHPStan\\TrinaryLogic",
            "PHPStan\\Reflection\\Php\\BuiltinMethodReflection",
            "PHPStan\\TrinaryLogic",
            "PHPStan\\TrinaryLogic",
            "PHPStan\\BetterReflection\\Reflection\\Adapter\\ReflectionType"
        ],
        "parents": [],
        "implements": [
            "PHPStan\\Reflection\\Php\\BuiltinMethodReflection"
        ],
        "lcom": 11,
        "length": 142,
        "vocabulary": 29,
        "volume": 689.83,
        "difficulty": 16.57,
        "effort": 11431.52,
        "level": 0.06,
        "bugs": 0.23,
        "time": 635,
        "intelligentContent": 41.63,
        "number_operators": 55,
        "number_operands": 87,
        "number_operators_unique": 8,
        "number_operands_unique": 21,
        "cloc": 81,
        "loc": 211,
        "lloc": 130,
        "mi": 72.41,
        "mIwoC": 31.45,
        "commentWeight": 40.96,
        "kanDefect": 0.71,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 1.54,
        "relativeSystemComplexity": 257.54,
        "totalStructuralComplexity": 5120,
        "totalDataComplexity": 30.88,
        "totalSystemComplexity": 5150.88,
        "package": "Carbon\\PHPStan\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 12,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\PHPStan\\MacroScanner",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMethod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "PHPStan\\Reflection\\ReflectionProvider",
            "className",
            "Carbon\\PHPStan\\Macro",
            "ReflectionClass",
            "Carbon\\PHPStan\\Macro"
        ],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 40,
        "vocabulary": 15,
        "volume": 156.28,
        "difficulty": 7,
        "effort": 1093.93,
        "level": 0.14,
        "bugs": 0.05,
        "time": 61,
        "intelligentContent": 22.33,
        "number_operators": 12,
        "number_operands": 28,
        "number_operators_unique": 5,
        "number_operands_unique": 10,
        "cloc": 30,
        "loc": 55,
        "lloc": 25,
        "mi": 99.12,
        "mIwoC": 53.61,
        "commentWeight": 45.52,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.58,
        "relativeSystemComplexity": 49.58,
        "totalStructuralComplexity": 147,
        "totalDataComplexity": 1.75,
        "totalSystemComplexity": 148.75,
        "package": "Carbon\\PHPStan\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Serialization",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "serialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromSerialized",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__set_state",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__sleep",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__serialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__wakeup",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__unserialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "serializeUsing",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cleanupDumpProperties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSleepProperties",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 47,
        "ccn": 37,
        "ccnMethodMax": 10,
        "externals": [
            "Carbon\\Exceptions\\InvalidFormatException",
            "static",
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 5,
        "length": 207,
        "vocabulary": 34,
        "volume": 1053.1,
        "difficulty": 18.54,
        "effort": 19521.44,
        "level": 0.05,
        "bugs": 0.35,
        "time": 1085,
        "intelligentContent": 56.81,
        "number_operators": 64,
        "number_operands": 143,
        "number_operators_unique": 7,
        "number_operands_unique": 27,
        "cloc": 127,
        "loc": 255,
        "lloc": 128,
        "mi": 72.3,
        "mIwoC": 27.89,
        "commentWeight": 44.41,
        "kanDefect": 1.43,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.95,
        "relativeSystemComplexity": 144.95,
        "totalStructuralComplexity": 1584,
        "totalDataComplexity": 10.46,
        "totalSystemComplexity": 1594.46,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\DeprecatedProperties",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 36,
        "loc": 44,
        "lloc": 8,
        "mi": 220.28,
        "mIwoC": 171,
        "commentWeight": 49.28,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Units",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "addRealUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subRealUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isModifiableUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rawAdd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rawSub",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sub",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subtract",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 67,
        "ccn": 58,
        "ccnMethodMax": 26,
        "externals": [
            "static",
            "Carbon\\Exceptions\\UnitException",
            "DateInterval",
            "Carbon\\CarbonInterval",
            "static",
            "static",
            "Carbon\\Exceptions\\UnitException",
            "DateInterval",
            "Carbon\\CarbonInterval",
            "Carbon\\CarbonInterval"
        ],
        "parents": [],
        "implements": [],
        "lcom": 4,
        "length": 486,
        "vocabulary": 87,
        "volume": 3131.27,
        "difficulty": 56.06,
        "effort": 175546.85,
        "level": 0.02,
        "bugs": 1.04,
        "time": 9753,
        "intelligentContent": 55.85,
        "number_operators": 174,
        "number_operands": 312,
        "number_operators_unique": 23,
        "number_operands_unique": 64,
        "cloc": 119,
        "loc": 316,
        "lloc": 197,
        "mi": 58.36,
        "mIwoC": 17.67,
        "commentWeight": 40.69,
        "kanDefect": 2.07,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 1.11,
        "relativeSystemComplexity": 362.11,
        "totalStructuralComplexity": 3610,
        "totalDataComplexity": 11.1,
        "totalSystemComplexity": 3621.1,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Mixin",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "mixin",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadMixinClass",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadMixinTrait",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAnonymousClassCodeForTrait",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMixableMethods",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindMacroContext",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "context",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "this",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 21,
        "ccn": 14,
        "ccnMethodMax": 5,
        "externals": [
            "ReflectionClass",
            "static",
            "Closure",
            "className",
            "static",
            "Generator",
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 8,
        "length": 82,
        "vocabulary": 23,
        "volume": 370.93,
        "difficulty": 15.47,
        "effort": 5737.08,
        "level": 0.06,
        "bugs": 0.12,
        "time": 319,
        "intelligentContent": 23.98,
        "number_operators": 24,
        "number_operands": 58,
        "number_operators_unique": 8,
        "number_operands_unique": 15,
        "cloc": 74,
        "loc": 142,
        "lloc": 68,
        "mi": 85.12,
        "mIwoC": 40.15,
        "commentWeight": 44.97,
        "kanDefect": 0.98,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0.53,
        "relativeSystemComplexity": 100.53,
        "totalStructuralComplexity": 800,
        "totalDataComplexity": 4.27,
        "totalSystemComplexity": 804.27,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Date",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "safeCreateDateTimeZone",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTimezone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRangesByUnit",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "avoidMutation",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nowWithSameTz",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expectDateTime",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveCarbon",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveUTC",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "carbonize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__isset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslatedFormByRegExp",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslatedDayName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslatedShortDayName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslatedMinDayName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslatedMonthName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslatedShortMonthName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dayOfYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "weekday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isoWeekday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDaysFromStartOfWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDaysFromStartOfWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUnitNoOverflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addUnitNoOverflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subUnitNoOverflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "utcOffset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setISODate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDateTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTimestamp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTimeFromTimeString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "timezone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tz",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTimezone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shiftTimezone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "utc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDateFrom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTimeFrom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDateTimeFrom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFirstDayOfWeek",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getWeekStartsAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setWeekStartsAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getWeekEndsAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setWeekEndsAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getWeekendDays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setWeekendDays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasRelativeKeywords",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUtf8",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "formatLocalized",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIsoFormats",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCalendarFormats",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIsoUnits",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPaddedUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ordinal",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "meridiem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAltNumber",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isoFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFormatsToIsoReplacements",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translatedFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOffsetString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeStaticCallable",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__callStatic",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "singularUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pluralUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeCallable",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeCallableWithContext",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGenericMacros",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 76,
        "nbMethods": 76,
        "nbMethodsPrivate": 11,
        "nbMethodsPublic": 65,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 307,
        "ccn": 232,
        "ccnMethodMax": 52,
        "externals": [
            "Carbon\\CarbonTimeZone",
            "Carbon\\CarbonTimeZone",
            "static",
            "Carbon\\Exceptions\\InvalidTypeException",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\CarbonTimeZone",
            "Carbon\\Exceptions\\UnknownGetterException",
            "Carbon\\Exceptions\\ImmutableException",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\UnknownSetterException",
            "Carbon\\Exceptions\\UnknownUnitException",
            "Carbon\\CarbonTimeZone",
            "static",
            "Carbon\\CarbonTimeZone",
            "static",
            "static",
            "DateTime",
            "DateTime",
            "static",
            "static",
            "static",
            "Closure",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\UnknownMethodException",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\UnknownMethodException",
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 24,
        "length": 2574,
        "vocabulary": 450,
        "volume": 22686.67,
        "difficulty": 59.17,
        "effort": 1342473.16,
        "level": 0.02,
        "bugs": 7.56,
        "time": 74582,
        "intelligentContent": 383.39,
        "number_operators": 644,
        "number_operands": 1930,
        "number_operators_unique": 26,
        "number_operands_unique": 424,
        "cloc": 1235,
        "loc": 2244,
        "lloc": 1009,
        "mi": 45.62,
        "mIwoC": 0,
        "commentWeight": 45.62,
        "kanDefect": 8.41,
        "relativeStructuralComplexity": 5929,
        "relativeDataComplexity": 2.2,
        "relativeSystemComplexity": 5931.2,
        "totalStructuralComplexity": 450604,
        "totalDataComplexity": 166.99,
        "totalSystemComplexity": 450770.99,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 10,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Mutability",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "isMutable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isImmutable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toMutable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toImmutable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 12,
        "vocabulary": 4,
        "volume": 24,
        "difficulty": 3,
        "effort": 72,
        "level": 0.33,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 8,
        "number_operators": 6,
        "number_operands": 6,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 27,
        "loc": 50,
        "lloc": 23,
        "mi": 105.9,
        "mIwoC": 60.5,
        "commentWeight": 45.4,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 5.33,
        "totalStructuralComplexity": 16,
        "totalDataComplexity": 5.33,
        "totalSystemComplexity": 21.33,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Difference",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "fixNegativeMicroseconds",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fixDiffInterval",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diff",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffAsCarbonInterval",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInYears",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInQuarters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInMonths",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInWeeks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInDays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInDaysFiltered",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInHoursFiltered",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffFiltered",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInWeekdays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInWeekendDays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInHours",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInRealHours",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInMinutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInRealMinutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInSeconds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInMicroseconds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInMilliseconds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInRealSeconds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInRealMicroseconds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffInRealMilliseconds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInSeconds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInMinutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInHours",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInDays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInWeeks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInMonths",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInYears",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInRealSeconds",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInRealMinutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInRealHours",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInRealDays",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInRealWeeks",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInRealMonths",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floatDiffInRealYears",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "secondsSinceMidnight",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "secondsUntilEndOfDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "diffForHumans",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "from",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "since",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "to",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "until",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromNow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toNow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ago",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "timespan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "calendar",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIntervalDayDiff",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 51,
        "nbMethods": 51,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 48,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 149,
        "ccn": 99,
        "ccnMethodMax": 13,
        "externals": [
            "Carbon\\CarbonInterval",
            "DateInterval",
            "Carbon\\CarbonInterval",
            "static",
            "static",
            "Closure",
            "Carbon\\CarbonInterval",
            "Closure",
            "Carbon\\CarbonInterval",
            "Carbon\\CarbonInterval",
            "Closure",
            "static",
            "static",
            "static",
            "DateInterval"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 1237,
        "vocabulary": 96,
        "volume": 8145.6,
        "difficulty": 112.89,
        "effort": 919595.21,
        "level": 0.01,
        "bugs": 2.72,
        "time": 51089,
        "intelligentContent": 72.15,
        "number_operators": 379,
        "number_operands": 858,
        "number_operators_unique": 20,
        "number_operands_unique": 76,
        "cloc": 621,
        "loc": 1023,
        "lloc": 402,
        "mi": 49.22,
        "mIwoC": 2.49,
        "commentWeight": 46.73,
        "kanDefect": 2.46,
        "relativeStructuralComplexity": 3025,
        "relativeDataComplexity": 1.15,
        "relativeSystemComplexity": 3026.15,
        "totalStructuralComplexity": 154275,
        "totalDataComplexity": 58.66,
        "totalSystemComplexity": 154333.66,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\ToStringFormat",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "resetToStringFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setToStringFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 3,
        "vocabulary": 2,
        "volume": 3,
        "difficulty": 1,
        "effort": 3,
        "level": 1,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 3,
        "number_operators": 1,
        "number_operands": 2,
        "number_operators_unique": 1,
        "number_operands_unique": 1,
        "cloc": 27,
        "loc": 40,
        "lloc": 13,
        "mi": 120.02,
        "mIwoC": 72.23,
        "commentWeight": 47.8,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 1.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 2.5,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\IntervalRounding",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "callRoundMethod",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roundWith",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 9,
        "ccnMethodMax": 7,
        "externals": [
            "Carbon\\CarbonInterval",
            "Carbon\\Exceptions\\InvalidIntervalException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 70,
        "vocabulary": 30,
        "volume": 343.48,
        "difficulty": 7.76,
        "effort": 2665.72,
        "level": 0.13,
        "bugs": 0.11,
        "time": 148,
        "intelligentContent": 44.26,
        "number_operators": 19,
        "number_operands": 51,
        "number_operators_unique": 7,
        "number_operands_unique": 23,
        "cloc": 3,
        "loc": 33,
        "lloc": 30,
        "mi": 71.33,
        "mIwoC": 48.81,
        "commentWeight": 22.51,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 10.25,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 20.5,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Creator",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "constructTimezoneFromDateTime",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__clone",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "instance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rawParse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseFromLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "now",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "today",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tomorrow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "yesterday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "maxValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "minValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertBetween",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createNowInstance",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createSafe",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createStrict",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createMidnightDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromTimeString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromFormatAndTimezone",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rawCreateFromFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromIsoFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromLocaleFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromLocaleIsoFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "make",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLastErrors",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastErrors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 31,
        "nbMethods": 31,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 26,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 129,
        "ccn": 99,
        "ccnMethodMax": 18,
        "externals": [
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\InvalidFormatException",
            "DateTimeInterface",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\InvalidFormatException",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\OutOfRangeException",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\InvalidDateException",
            "static",
            "static",
            "Carbon\\Exceptions\\InvalidDateException",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "instance",
            "static",
            "Carbon\\Exceptions\\InvalidFormatException",
            "static",
            "Carbon\\Translator",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\InvalidFormatException",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 29,
        "length": 1069,
        "vocabulary": 246,
        "volume": 8490.55,
        "difficulty": 26.69,
        "effort": 226598.39,
        "level": 0.04,
        "bugs": 2.83,
        "time": 12589,
        "intelligentContent": 318.14,
        "number_operators": 247,
        "number_operands": 822,
        "number_operators_unique": 15,
        "number_operands_unique": 231,
        "cloc": 353,
        "loc": 714,
        "lloc": 361,
        "mi": 47.7,
        "mIwoC": 3.38,
        "commentWeight": 44.31,
        "kanDefect": 3.83,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 2.39,
        "relativeSystemComplexity": 443.39,
        "totalStructuralComplexity": 13671,
        "totalDataComplexity": 74.09,
        "totalSystemComplexity": 13745.09,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\MagicParameter",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "getMagicParameter",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 18,
        "vocabulary": 6,
        "volume": 46.53,
        "difficulty": 3.25,
        "effort": 151.22,
        "level": 0.31,
        "bugs": 0.02,
        "time": 8,
        "intelligentContent": 14.32,
        "number_operators": 5,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 5,
        "loc": 19,
        "lloc": 14,
        "mi": 98.6,
        "mIwoC": 62.92,
        "commentWeight": 35.68,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 7,
        "relativeSystemComplexity": 7,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 7,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Macro",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "macro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetMacros",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "genericMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasLocalMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocalMacro",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "static",
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 6,
        "length": 39,
        "vocabulary": 11,
        "volume": 134.92,
        "difficulty": 14.4,
        "effort": 1942.82,
        "level": 0.07,
        "bugs": 0.04,
        "time": 108,
        "intelligentContent": 9.37,
        "number_operators": 15,
        "number_operands": 24,
        "number_operators_unique": 6,
        "number_operands_unique": 5,
        "cloc": 74,
        "loc": 114,
        "lloc": 40,
        "mi": 96.62,
        "mIwoC": 49.2,
        "commentWeight": 47.42,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.57,
        "relativeSystemComplexity": 3.57,
        "totalStructuralComplexity": 7,
        "totalDataComplexity": 18,
        "totalSystemComplexity": 25,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Week",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "isoWeekYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "weekYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isoWeeksInYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "weeksInYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "week",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isoWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 38,
        "ccn": 33,
        "ccnMethodMax": 14,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 282,
        "vocabulary": 35,
        "volume": 1446.46,
        "difficulty": 80,
        "effort": 115716.62,
        "level": 0.01,
        "bugs": 0.48,
        "time": 6429,
        "intelligentContent": 18.08,
        "number_operators": 92,
        "number_operands": 190,
        "number_operators_unique": 16,
        "number_operands_unique": 19,
        "cloc": 87,
        "loc": 174,
        "lloc": 87,
        "mi": 75.58,
        "mIwoC": 31.12,
        "commentWeight": 44.46,
        "kanDefect": 1,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 1.05,
        "relativeSystemComplexity": 170.05,
        "totalStructuralComplexity": 1014,
        "totalDataComplexity": 6.29,
        "totalSystemComplexity": 1020.29,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Cast",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "cast",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "className",
            "Carbon\\Exceptions\\InvalidCastException",
            "className"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 17,
        "vocabulary": 8,
        "volume": 51,
        "difficulty": 2.17,
        "effort": 110.5,
        "level": 0.46,
        "bugs": 0.02,
        "time": 6,
        "intelligentContent": 23.54,
        "number_operators": 4,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 12,
        "loc": 26,
        "lloc": 14,
        "mi": 106.07,
        "mIwoC": 62.64,
        "commentWeight": 43.43,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 0.75,
        "totalSystemComplexity": 9.75,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Comparison",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "eq",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "equalTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ne",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notEqualTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "greaterThan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isAfter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gte",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "greaterThanOrEqualTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lessThan",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isBefore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lte",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lessThanOrEqualTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "between",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "betweenIncluded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "betweenExcluded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isBetween",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isWeekday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isWeekend",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isYesterday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isToday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isTomorrow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isFuture",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isPast",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isLeapYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isLongYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isLongIsoYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSameAs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSameUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isCurrentUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSameQuarter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isSameMonth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDayOfWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isBirthday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isLastOfMonth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStartOfDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEndOfDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isMidnight",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isMidday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasFormatWithModifiers",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "canBeCreatedFromFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "is",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "matchFormatPattern",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStartOfTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEndOfTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "discourageNull",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "discourageBoolean",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 49,
        "nbMethods": 49,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 46,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 80,
        "ccn": 32,
        "ccnMethodMax": 11,
        "externals": [
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\BadComparisonUnitException",
            "static",
            "static",
            "static",
            "static",
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 6,
        "length": 521,
        "vocabulary": 103,
        "volume": 3483.67,
        "difficulty": 29.57,
        "effort": 103022.59,
        "level": 0.03,
        "bugs": 1.16,
        "time": 5723,
        "intelligentContent": 117.8,
        "number_operators": 145,
        "number_operands": 376,
        "number_operators_unique": 14,
        "number_operands_unique": 89,
        "cloc": 713,
        "loc": 1009,
        "lloc": 296,
        "mi": 65.19,
        "mIwoC": 16.99,
        "commentWeight": 48.21,
        "kanDefect": 1.64,
        "relativeStructuralComplexity": 961,
        "relativeDataComplexity": 1.94,
        "relativeSystemComplexity": 962.94,
        "totalStructuralComplexity": 47089,
        "totalDataComplexity": 94.94,
        "totalSystemComplexity": 47183.94,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\ObjectInitialisation",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 5,
        "loc": 10,
        "lloc": 5,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Timestamp",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "createFromTimestamp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromTimestampUTC",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromTimestampMsUTC",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createFromTimestampMs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "timestamp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPreciseTimestamp",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "valueOf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTimestampMs",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIntegerAndDecimalParts",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 18,
        "ccn": 9,
        "ccnMethodMax": 6,
        "externals": [
            "static",
            "static",
            "static",
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 8,
        "length": 191,
        "vocabulary": 51,
        "volume": 1083.43,
        "difficulty": 25.35,
        "effort": 27466.5,
        "level": 0.04,
        "bugs": 0.36,
        "time": 1526,
        "intelligentContent": 42.74,
        "number_operators": 57,
        "number_operands": 134,
        "number_operators_unique": 14,
        "number_operands_unique": 37,
        "cloc": 97,
        "loc": 169,
        "lloc": 72,
        "mi": 83.13,
        "mIwoC": 37.02,
        "commentWeight": 46.11,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.38,
        "relativeSystemComplexity": 50.38,
        "totalStructuralComplexity": 490,
        "totalDataComplexity": 13.75,
        "totalSystemComplexity": 503.75,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Boundaries",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "startOfDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfMonth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfMonth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfQuarter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfQuarter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfDecade",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfDecade",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfCentury",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfCentury",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfMillennium",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfMillennium",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfHour",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfHour",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfMinute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfMinute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOfSecond",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOfSecond",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startOf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "endOf",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 24,
        "nbMethods": 24,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 24,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 28,
        "ccn": 5,
        "ccnMethodMax": 2,
        "externals": [
            "static",
            "Carbon\\Exceptions\\UnknownUnitException",
            "static",
            "Carbon\\Exceptions\\UnknownUnitException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 238,
        "vocabulary": 25,
        "volume": 1105.24,
        "difficulty": 36.94,
        "effort": 40828.78,
        "level": 0.03,
        "bugs": 0.37,
        "time": 2268,
        "intelligentContent": 29.92,
        "number_operators": 81,
        "number_operands": 157,
        "number_operators_unique": 8,
        "number_operands_unique": 17,
        "cloc": 280,
        "loc": 397,
        "lloc": 117,
        "mi": 81.09,
        "mIwoC": 32.9,
        "commentWeight": 48.19,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 2.02,
        "relativeSystemComplexity": 123.02,
        "totalStructuralComplexity": 2904,
        "totalDataComplexity": 48.5,
        "totalSystemComplexity": 2952.5,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\IntervalStep",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "getStep",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setStep",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "convertDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveCarbon",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 6,
        "ccn": 5,
        "ccnMethodMax": 4,
        "externals": [
            "Carbon\\CarbonInterface",
            "DateTimeInterface",
            "DateTimeInterface",
            "Carbon\\CarbonImmutable",
            "Carbon\\Carbon"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 36,
        "vocabulary": 8,
        "volume": 108,
        "difficulty": 7.5,
        "effort": 810,
        "level": 0.13,
        "bugs": 0.04,
        "time": 45,
        "intelligentContent": 14.4,
        "number_operators": 11,
        "number_operands": 25,
        "number_operators_unique": 3,
        "number_operands_unique": 5,
        "cloc": 35,
        "loc": 66,
        "lloc": 31,
        "mi": 97.74,
        "mIwoC": 52.56,
        "commentWeight": 45.18,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.88,
        "relativeSystemComplexity": 49.88,
        "totalStructuralComplexity": 196,
        "totalDataComplexity": 3.5,
        "totalSystemComplexity": 199.5,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Options",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "useStrictMode",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStrictModeEnabled",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useMonthsOverflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetMonthsOverflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shouldOverflowMonths",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useYearsOverflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetYearsOverflow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shouldOverflowYears",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "settings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSettings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__debugInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addExtraDebugInfos",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 34,
        "ccn": 23,
        "ccnMethodMax": 14,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 10,
        "length": 263,
        "vocabulary": 130,
        "volume": 1846.88,
        "difficulty": 5.08,
        "effort": 9383.36,
        "level": 0.2,
        "bugs": 0.62,
        "time": 521,
        "intelligentContent": 363.51,
        "number_operators": 53,
        "number_operands": 210,
        "number_operators_unique": 6,
        "number_operands_unique": 124,
        "cloc": 223,
        "loc": 386,
        "lloc": 163,
        "mi": 71.96,
        "mIwoC": 25.78,
        "commentWeight": 46.18,
        "kanDefect": 1.24,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.57,
        "relativeSystemComplexity": 26.57,
        "totalStructuralComplexity": 300,
        "totalDataComplexity": 18.83,
        "totalSystemComplexity": 318.83,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Rounding",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "roundUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floorUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ceilUnit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "round",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ceil",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roundWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "floorWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ceilWeek",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 31,
        "ccn": 23,
        "ccnMethodMax": 20,
        "externals": [
            "static",
            "static",
            "Carbon\\Exceptions\\UnknownUnitException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 313,
        "vocabulary": 65,
        "volume": 1885,
        "difficulty": 52.74,
        "effort": 99412.39,
        "level": 0.02,
        "bugs": 0.63,
        "time": 5523,
        "intelligentContent": 35.74,
        "number_operators": 92,
        "number_operands": 221,
        "number_operators_unique": 21,
        "number_operands_unique": 44,
        "cloc": 89,
        "loc": 201,
        "lloc": 112,
        "mi": 72.16,
        "mIwoC": 29.27,
        "commentWeight": 42.89,
        "kanDefect": 1.47,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.83,
        "relativeSystemComplexity": 169.83,
        "totalStructuralComplexity": 1521,
        "totalDataComplexity": 7.43,
        "totalSystemComplexity": 1528.43,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Converter",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "format",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rawFormat",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDateString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toFormattedDateString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toFormattedDayDateString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toTimeString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDateTimeString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTimeFormatByPrecision",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDateTimeLocalString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDayDateTimeString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toAtomString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toCookieString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toIso8601String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRfc822String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toIso8601ZuluString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRfc850String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRfc1036String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRfc1123String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRfc2822String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRfc3339String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRssString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toW3cString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toRfc7231String",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toISOString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toJSON",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDateTime",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDateTimeImmutable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toPeriod",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "range",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 34,
        "nbMethods": 34,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 34,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 63,
        "ccn": 30,
        "ccnMethodMax": 8,
        "externals": [
            "static",
            "static",
            "static",
            "Carbon\\Exceptions\\UnitException",
            "static",
            "static",
            "DateTime",
            "DateTimeImmutable",
            "static",
            "Carbon\\CarbonInterval",
            "Carbon\\CarbonPeriod",
            "Carbon\\CarbonPeriodImmutable"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 249,
        "vocabulary": 67,
        "volume": 1510.46,
        "difficulty": 15.53,
        "effort": 23451.82,
        "level": 0.06,
        "bugs": 0.5,
        "time": 1303,
        "intelligentContent": 97.28,
        "number_operators": 72,
        "number_operands": 177,
        "number_operators_unique": 10,
        "number_operands_unique": 57,
        "cloc": 361,
        "loc": 544,
        "lloc": 183,
        "mi": 71.99,
        "mIwoC": 24.35,
        "commentWeight": 47.64,
        "kanDefect": 0.86,
        "relativeStructuralComplexity": 484,
        "relativeDataComplexity": 1.71,
        "relativeSystemComplexity": 485.71,
        "totalStructuralComplexity": 16456,
        "totalDataComplexity": 58.3,
        "totalSystemComplexity": 16514.3,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Modifiers",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "getMidDayAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setMidDayAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "midDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "next",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextOrPreviousDay",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextWeekday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "previousWeekday",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nextWeekendDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "previousWeekendDay",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "previous",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "firstOfMonth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastOfMonth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nthOfMonth",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "firstOfQuarter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastOfQuarter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nthOfQuarter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "firstOfYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastOfYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "nthOfYear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "average",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "closest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "farthest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "min",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "minimum",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "max",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "maximum",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "modify",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "change",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 28,
        "nbMethods": 28,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 27,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 47,
        "ccn": 20,
        "ccnMethodMax": 4,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 8,
        "length": 335,
        "vocabulary": 59,
        "volume": 1970.69,
        "difficulty": 30.38,
        "effort": 59875.29,
        "level": 0.03,
        "bugs": 0.66,
        "time": 3326,
        "intelligentContent": 64.86,
        "number_operators": 97,
        "number_operands": 238,
        "number_operators_unique": 12,
        "number_operands_unique": 47,
        "cloc": 254,
        "loc": 406,
        "lloc": 152,
        "mi": 73.69,
        "mIwoC": 26.65,
        "commentWeight": 47.05,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 676,
        "relativeDataComplexity": 1.15,
        "relativeSystemComplexity": 677.15,
        "totalStructuralComplexity": 18928,
        "totalDataComplexity": 32.15,
        "totalSystemComplexity": 18960.15,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Carbon\\Traits\\Localization",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "setHumanDiffOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "enableHumanDiffOption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "disableHumanDiffOption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHumanDiffOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTranslator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasLocalTranslator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocalTranslator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocalTranslator",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslationMessageWith",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslationMessage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translateWith",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translateNumber",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translateTimeString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translateTimeStringTo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "locale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFallbackLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFallbackLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeWithLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "localeHasShortUnits",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "localeHasDiffSyntax",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "localeHasDiffOneDayWords",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "localeHasDiffTwoDayWords",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "localeHasPeriodSyntax",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAvailableLocales",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAvailableLocalesInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslatorLocale",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocaleAwareTranslator",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFromCatalogue",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cleanWordFromTranslationString",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translateWordsByKeys",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTranslationArray",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "replaceOrdinalWords",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 37,
        "nbMethods": 36,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 28,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 144,
        "ccn": 109,
        "ccnMethodMax": 30,
        "externals": [
            "static",
            "static",
            "static",
            "Symfony\\Component\\Translation\\TranslatorInterface",
            "static",
            "Symfony\\Component\\Translation\\TranslatorInterface",
            "Carbon\\Exceptions\\InvalidTypeException",
            "static",
            "Symfony\\Component\\Translation\\TranslatorInterface",
            "static",
            "static",
            "static",
            "Carbon\\Translator",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Translator",
            "Carbon\\Translator",
            "static",
            "static",
            "static",
            "Carbon\\Translator",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "static",
            "Carbon\\Language",
            "Carbon\\Translator",
            "static",
            "static",
            "Carbon\\Exceptions\\NotLocaleAwareException",
            "static"
        ],
        "parents": [],
        "implements": [],
        "lcom": 29,
        "length": 901,
        "vocabulary": 158,
        "volume": 6580.71,
        "difficulty": 47.44,
        "effort": 312199.28,
        "level": 0.02,
        "bugs": 2.19,
        "time": 17344,
        "intelligentContent": 138.71,
        "number_operators": 282,
        "number_operands": 619,
        "number_operators_unique": 21,
        "number_operands_unique": 137,
        "cloc": 302,
        "loc": 650,
        "lloc": 348,
        "mi": 46.68,
        "mIwoC": 3.16,
        "commentWeight": 43.52,
        "kanDefect": 4.76,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 2.87,
        "relativeSystemComplexity": 363.87,
        "totalStructuralComplexity": 13357,
        "totalDataComplexity": 106.35,
        "totalSystemComplexity": 13463.35,
        "package": "Carbon\\Traits\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\TranslatorImmutable",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDirectories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setMessages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTranslations",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setConfigCacheFactory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetMessages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFallbackLocales",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "disallowMutation",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Carbon\\Translator",
            "Symfony\\Component\\Translation\\Formatter\\MessageFormatterInterface",
            "Symfony\\Component\\Config\\ConfigCacheFactoryInterface",
            "Carbon\\Exceptions\\ImmutableException"
        ],
        "parents": [
            "Carbon\\Translator"
        ],
        "implements": [],
        "lcom": 1,
        "length": 52,
        "vocabulary": 16,
        "volume": 208,
        "difficulty": 7.17,
        "effort": 1490.67,
        "level": 0.14,
        "bugs": 0.07,
        "time": 83,
        "intelligentContent": 29.02,
        "number_operators": 9,
        "number_operands": 43,
        "number_operators_unique": 4,
        "number_operands_unique": 12,
        "cloc": 16,
        "loc": 67,
        "lloc": 51,
        "mi": 80.59,
        "mIwoC": 46.25,
        "commentWeight": 34.34,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 2.15,
        "relativeSystemComplexity": 6.15,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 19.33,
        "totalSystemComplexity": 55.33,
        "package": "Carbon\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "Carbon\\Cli\\Invoker",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "runWithCli",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__invoke",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 6,
        "ccnMethodMax": 6,
        "externals": [
            "className"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 30,
        "vocabulary": 18,
        "volume": 125.1,
        "difficulty": 4.04,
        "effort": 505.2,
        "level": 0.25,
        "bugs": 0.04,
        "time": 28,
        "intelligentContent": 30.98,
        "number_operators": 9,
        "number_operands": 21,
        "number_operators_unique": 5,
        "number_operands_unique": 13,
        "cloc": 0,
        "loc": 20,
        "lloc": 20,
        "mi": 56.13,
        "mIwoC": 56.13,
        "commentWeight": 0,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.25,
        "relativeSystemComplexity": 3.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 4.5,
        "totalSystemComplexity": 6.5,
        "package": "Carbon\\Cli\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\EndLessPeriodException",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "RuntimeException",
            "Carbon\\Exceptions\\RuntimeException"
        ],
        "parents": [
            "RuntimeException"
        ],
        "implements": [
            "Carbon\\Exceptions\\RuntimeException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\InvalidTimeZoneException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\InvalidDateException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getField",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException",
            "Throwable"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 1,
        "length": 24,
        "vocabulary": 11,
        "volume": 83.03,
        "difficulty": 3.19,
        "effort": 264.65,
        "level": 0.31,
        "bugs": 0.03,
        "time": 15,
        "intelligentContent": 26.05,
        "number_operators": 7,
        "number_operands": 17,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 28,
        "loc": 48,
        "lloc": 20,
        "mi": 104.34,
        "mIwoC": 58.05,
        "commentWeight": 46.29,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.67,
        "relativeSystemComplexity": 2.67,
        "totalStructuralComplexity": 3,
        "totalDataComplexity": 5,
        "totalSystemComplexity": 8,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\UnknownUnitException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUnit",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Carbon\\Exceptions\\UnitException",
            "Throwable"
        ],
        "parents": [
            "Carbon\\Exceptions\\UnitException"
        ],
        "implements": [],
        "lcom": 1,
        "length": 15,
        "vocabulary": 10,
        "volume": 49.83,
        "difficulty": 1.63,
        "effort": 80.97,
        "level": 0.62,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 30.66,
        "number_operators": 2,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 108.56,
        "mIwoC": 62.98,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 4,
        "efferentCoupling": 2,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\ParseErrorException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExpected",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getActual",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getHelp",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException",
            "Throwable"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 1,
        "length": 41,
        "vocabulary": 18,
        "volume": 170.97,
        "difficulty": 3.3,
        "effort": 564.19,
        "level": 0.3,
        "bugs": 0.06,
        "time": 31,
        "intelligentContent": 51.81,
        "number_operators": 8,
        "number_operands": 33,
        "number_operators_unique": 3,
        "number_operands_unique": 15,
        "cloc": 38,
        "loc": 65,
        "lloc": 27,
        "mi": 99.19,
        "mIwoC": 52.87,
        "commentWeight": 46.32,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.13,
        "relativeSystemComplexity": 3.13,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 8.5,
        "totalSystemComplexity": 12.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\InvalidTypeException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\UnknownMethodException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMethod",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "BadMethodCallException",
            "Carbon\\Exceptions\\BadMethodCallException",
            "Throwable"
        ],
        "parents": [
            "BadMethodCallException"
        ],
        "implements": [
            "Carbon\\Exceptions\\BadMethodCallException"
        ],
        "lcom": 1,
        "length": 15,
        "vocabulary": 10,
        "volume": 49.83,
        "difficulty": 1.63,
        "effort": 80.97,
        "level": 0.62,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 30.66,
        "number_operators": 2,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 108.56,
        "mIwoC": 62.98,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\UnreachableException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "RuntimeException",
            "Carbon\\Exceptions\\RuntimeException"
        ],
        "parents": [
            "RuntimeException"
        ],
        "implements": [
            "Carbon\\Exceptions\\RuntimeException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\ImmutableException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "RuntimeException",
            "Carbon\\Exceptions\\RuntimeException",
            "Throwable"
        ],
        "parents": [
            "RuntimeException"
        ],
        "implements": [
            "Carbon\\Exceptions\\RuntimeException"
        ],
        "lcom": 1,
        "length": 14,
        "vocabulary": 9,
        "volume": 44.38,
        "difficulty": 1.71,
        "effort": 76.08,
        "level": 0.58,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 25.89,
        "number_operators": 2,
        "number_operands": 12,
        "number_operators_unique": 2,
        "number_operands_unique": 7,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 108.91,
        "mIwoC": 63.33,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\InvalidPeriodDateException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\InvalidFormatException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\OutOfRangeException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMax",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMin",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUnit",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException",
            "Throwable"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 1,
        "length": 38,
        "vocabulary": 15,
        "volume": 148.46,
        "difficulty": 2.31,
        "effort": 342.6,
        "level": 0.43,
        "bugs": 0.05,
        "time": 19,
        "intelligentContent": 64.33,
        "number_operators": 8,
        "number_operands": 30,
        "number_operators_unique": 2,
        "number_operands_unique": 13,
        "cloc": 44,
        "loc": 76,
        "lloc": 32,
        "mi": 98.03,
        "mIwoC": 51.83,
        "commentWeight": 46.21,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.6,
        "relativeSystemComplexity": 3.6,
        "totalStructuralComplexity": 5,
        "totalDataComplexity": 13,
        "totalSystemComplexity": 18,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\BadComparisonUnitException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUnit",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Carbon\\Exceptions\\UnitException",
            "Throwable"
        ],
        "parents": [
            "Carbon\\Exceptions\\UnitException"
        ],
        "implements": [],
        "lcom": 1,
        "length": 15,
        "vocabulary": 10,
        "volume": 49.83,
        "difficulty": 1.63,
        "effort": 80.97,
        "level": 0.62,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 30.66,
        "number_operators": 2,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 108.56,
        "mIwoC": 62.98,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\NotACarbonClassException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getClassName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException",
            "Throwable"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 1,
        "length": 13,
        "vocabulary": 8,
        "volume": 39,
        "difficulty": 1.83,
        "effort": 71.5,
        "level": 0.55,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.27,
        "number_operators": 2,
        "number_operands": 11,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 109.3,
        "mIwoC": 63.72,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\NotLocaleAwareException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException",
            "Throwable"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 1,
        "length": 14,
        "vocabulary": 8,
        "volume": 42,
        "difficulty": 0.93,
        "effort": 39,
        "level": 1.08,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 45.23,
        "number_operators": 1,
        "number_operands": 13,
        "number_operators_unique": 1,
        "number_operands_unique": 7,
        "cloc": 7,
        "loc": 16,
        "lloc": 9,
        "mi": 110.28,
        "mIwoC": 67.55,
        "commentWeight": 42.73,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 2.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\UnknownGetterException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getGetter",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException",
            "Throwable"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 1,
        "length": 15,
        "vocabulary": 10,
        "volume": 49.83,
        "difficulty": 1.63,
        "effort": 80.97,
        "level": 0.62,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 30.66,
        "number_operators": 2,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 108.56,
        "mIwoC": 62.98,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 3,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\InvalidPeriodParameterException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\NotAPeriodException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\UnitNotConfiguredException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getUnit",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Carbon\\Exceptions\\UnitException",
            "Throwable"
        ],
        "parents": [
            "Carbon\\Exceptions\\UnitException"
        ],
        "implements": [],
        "lcom": 1,
        "length": 15,
        "vocabulary": 10,
        "volume": 49.83,
        "difficulty": 1.63,
        "effort": 80.97,
        "level": 0.62,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 30.66,
        "number_operators": 2,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 108.56,
        "mIwoC": 62.98,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\InvalidCastException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 4,
        "efferentCoupling": 2,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\BadFluentConstructorException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMethod",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "BadMethodCallException",
            "Carbon\\Exceptions\\BadMethodCallException",
            "Throwable"
        ],
        "parents": [
            "BadMethodCallException"
        ],
        "implements": [
            "Carbon\\Exceptions\\BadMethodCallException"
        ],
        "lcom": 1,
        "length": 13,
        "vocabulary": 8,
        "volume": 39,
        "difficulty": 1.83,
        "effort": 71.5,
        "level": 0.55,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.27,
        "number_operators": 2,
        "number_operands": 11,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 109.3,
        "mIwoC": 63.72,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\UnknownSetterException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSetter",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\BadMethodCallException",
            "Throwable"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\BadMethodCallException"
        ],
        "lcom": 1,
        "length": 15,
        "vocabulary": 10,
        "volume": 49.83,
        "difficulty": 1.63,
        "effort": 80.97,
        "level": 0.62,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 30.66,
        "number_operators": 2,
        "number_operands": 13,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 108.56,
        "mIwoC": 62.98,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\BadFluentSetterException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSetter",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "BadMethodCallException",
            "Carbon\\Exceptions\\BadMethodCallException",
            "Throwable"
        ],
        "parents": [
            "BadMethodCallException"
        ],
        "implements": [
            "Carbon\\Exceptions\\BadMethodCallException"
        ],
        "lcom": 1,
        "length": 13,
        "vocabulary": 8,
        "volume": 39,
        "difficulty": 1.83,
        "effort": 71.5,
        "level": 0.55,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.27,
        "number_operators": 2,
        "number_operands": 11,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 17,
        "loc": 31,
        "lloc": 14,
        "mi": 109.3,
        "mIwoC": 63.72,
        "commentWeight": 45.58,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\InvalidIntervalException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.01,
        "afferentCoupling": 3,
        "efferentCoupling": 2,
        "instability": 0.4,
        "violations": {}
    },
    {
        "name": "Carbon\\Exceptions\\UnitException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "InvalidArgumentException",
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Carbon\\Exceptions\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Carbon\\Exceptions\\",
        "pageRank": 0.03,
        "afferentCoupling": 5,
        "efferentCoupling": 2,
        "instability": 0.29,
        "violations": {}
    },
    {
        "name": "Carbon\\AbstractTranslator",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDirectories",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDirectories",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeDirectory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetMessages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLocalesFiles",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAvailableLocales",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "translate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadMessagesFromFile",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setMessages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTranslations",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMessages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLocale",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__debugInfo",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "compareChunkLists",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 17,
        "nbMethods": 15,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 47,
        "ccn": 33,
        "ccnMethodMax": 14,
        "externals": [
            "Symfony\\Component\\Translation\\Translator",
            "static",
            "Symfony\\Component\\Translation\\Formatter\\MessageFormatterInterface",
            "Symfony\\Component\\Translation\\Loader\\ArrayLoader",
            "Carbon\\MessageFormatter\\MessageFormatterMapper",
            "ReflectionFunction"
        ],
        "parents": [
            "Symfony\\Component\\Translation\\Translator"
        ],
        "implements": [],
        "lcom": 4,
        "length": 367,
        "vocabulary": 85,
        "volume": 2352.25,
        "difficulty": 28.39,
        "effort": 66787,
        "level": 0.04,
        "bugs": 0.78,
        "time": 3710,
        "intelligentContent": 82.85,
        "number_operators": 102,
        "number_operands": 265,
        "number_operators_unique": 15,
        "number_operands_unique": 70,
        "cloc": 129,
        "loc": 305,
        "lloc": 176,
        "mi": 65.25,
        "mIwoC": 22.97,
        "commentWeight": 42.28,
        "kanDefect": 2.21,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 1.61,
        "relativeSystemComplexity": 257.61,
        "totalStructuralComplexity": 4352,
        "totalDataComplexity": 27.35,
        "totalSystemComplexity": 4379.35,
        "package": "Carbon\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    }
]