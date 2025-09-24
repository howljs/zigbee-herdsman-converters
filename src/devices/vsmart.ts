import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["HS-SWL100ZB-VNM"],
        model: "HS-SWL100ZB-VNM",
        vendor: "VSmart",
        description: "VSmart Smart Wall Switch",
        extend: [m.onOff({powerOnBehavior: false})],
    },
    {
        zigbeeModel: ["HS-SWN100ZB-VNM"],
        model: "HS-SWN100ZB-VNM",
        vendor: "VSmart",
        description: "VSmart Smart Wall Switch 1N",
        extend: [m.onOff({powerOnBehavior: false})],
    },
    {
        zigbeeModel: ["HS-SWL200ZB-VNM"],
        model: "HS-SWL200ZB-VNM",
        vendor: "VSmart",
        description: "VSmart Smart Wall Switch 2",
        extend: [m.deviceEndpoints({endpoints: {"1": 1, "2": 2}}), m.onOff({powerOnBehavior: false, endpointNames: ["1", "2"]})],
        meta: {multiEndpoint: true},
    },
    {
        zigbeeModel: ["HS-SWN200ZB-VNM"],
        model: "HS-SWN200ZB-VNM",
        vendor: "VSmart",
        description: "VSmart Smart Wall Switch 2N",
        extend: [m.deviceEndpoints({endpoints: {"1": 1, "2": 2}}), m.onOff({powerOnBehavior: false, endpointNames: ["1", "2"]})],
        meta: {multiEndpoint: true},
    },
    {
        zigbeeModel: ["HS-SWL300ZB-VNM"],
        model: "HS-SWL300ZB-VNM",
        vendor: "VSmart",
        description: "VSmart Smart Wall Switch 3",
        extend: [m.deviceEndpoints({endpoints: {"1": 1, "2": 2, "3": 3}}), m.onOff({powerOnBehavior: false, endpointNames: ["1", "2", "3"]})],
        meta: {multiEndpoint: true},
    },
    {
        zigbeeModel: ["HS-SWL400ZB-VNM"],
        model: "HS-SWL400ZB-VNM",
        vendor: "VSmart",
        description: "VSmart Smart Wall Switch 4",
        extend: [
            m.deviceEndpoints({endpoints: {"1": 1, "2": 2, "3": 3, "4": 4}}),
            m.onOff({powerOnBehavior: false, endpointNames: ["1", "2", "3", "4"]}),
        ],
        meta: {multiEndpoint: true},
    },
    {
        zigbeeModel: ["HS-SEDR00ZB-VNM"],
        model: "HS-SEDR00ZB-VNM",
        vendor: "VSmart",
        description: "VSmart Smart door window sensor",
        extend: [m.battery(), m.iasZoneAlarm({zoneType: "contact", zoneAttributes: ["alarm_1", "battery_low"], skipInvertAlarmPayload: true})],
    },
];
