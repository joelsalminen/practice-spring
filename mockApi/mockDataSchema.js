// Instruction for generating mock data:

// http://marak.github.io/faker.js/#toc7__anchor
// https://json-schema-faker.js.org/#gist/4199ca90fb5cd05337824b0695d17b5e

const personInfo = {
  firstName: {
    type: "string",
    faker: "name.firstName",
  },
  lastName: {
    type: "string",
    faker: "name.lastName",
  },
  mobilePhone: {
    type: "string",
    chance: "phone",
  },
  email: {
    type: "string",
    faker: "internet.email",
  },
};

module.exports = {
  type: "object",
  properties: {
    notices: {
      type: "array",
      maxItems: 1,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            unique: true,
            minimum: 1,
          },
          version: {
            type: "integer",
            minimum: 0,
          },
          created: {
            type: "string",
            faker: "date.past",
          },
          submitter: {
            type: "object",
            properties: personInfo,
          },
          updateKey: {
            type: "string",
            enum: [123],
          },
          // messageType: {
          //   type: 'boolean',
          //   faker: 'random.boolean'
          // },
          // status: {
          //   type: 'boolean',
          //   faker: 'random.boolean'
          // },
          project: {
            type: "string",
            faker: "random.words",
          },
          contractor: {
            type: "object",
            properties: {
              name: {
                type: "string",
                faker: "company.companyName",
              },
            },
          },
          contractorContactPersons: {
            type: "array",
            maxItems: 2,
            items: {
              type: "object",
              properties: personInfo,
            },
          },
          client: {
            type: "object",
            properties: {
              name: {
                type: "string",
                faker: "company.companyName",
              },
            },
          },
          clientContactPersons: {
            type: "array",
            maxItems: 1,
            items: {
              type: "object",
              properties: personInfo,
            },
          },
          diaryPermitNumber: {
            type: "string",
            faker: {
              fake: "{{random.alphaNumeric}}{{random.number}}",
            },
          },
          workStages: {
            type: "array",
            minItems: 1,
            maxItems: 4,
            items: {
              id: {
                type: "integer",
                unique: true,
                minimum: 1,
              },
              version: {
                type: "integer",
                minimum: 0,
              },
              mainWorkStage: {
                type: "boolean",
                faker: "random.boolean",
              },
              status: {
                type: "string",
                chance: { pickone: [["ACCEPTED"]] },
              },
              additionalInformationRequest: {
                type: "string",
                faker: "lorem.sentence",
              },
              location: {
                type: "object",
                properties: {
                  roadRegisterAddress: {
                    type: "object",
                    properties: {
                      roadNumber: {
                        type: "integer",
                        minimum: 0,
                        maximum: 500,
                      },
                      startSection: {
                        type: "integer",
                        minimum: 0,
                        maximum: 500,
                      },
                      startDistance: {
                        type: "integer",
                        minimum: 0,
                        maximum: 500,
                      },
                      endSection: {
                        type: "integer",
                        minimum: 0,
                        maximum: 500,
                      },
                      endDistance: {
                        type: "integer",
                        minimum: 0,
                        maximum: 500,
                      },
                    },
                  },
                  length: {
                    type: "integer",
                    minimum: 100,
                    maximum: 5000,
                  },
                  roadName: {
                    type: "string",
                    address: "address.streetName",
                  },
                  municipalities: {
                    type: "string",
                    faker: "address.city",
                  },
                  startLocationDescription: {
                    type: "string",
                    faker: "random.words",
                  },
                  endLocationDescription: {
                    type: "string",
                    faker: "random.words",
                  },
                },
              },
              startDate: {
                type: "string",
                faker: "date.past",
              },
              endDate: {
                type: "string",
                faker: "date.future",
              },
              workTypes: {
                type: "array",
                minItems: 0,
                maxItems: 3,
                items: {
                  type: "string",
                  chance: {
                    pickone: [
                      [
                        "ROAD_CONSTRUCTION",
                        "PAVING",
                        "FINISHING",
                        "IMPROVEMENT",
                        "MILLING_STABILIZING",
                        "RESEARCH_MEASURING",
                        "UNDERPASS_CONSTRUCTION",
                        "RAILING_WORK",
                        "ROADSIDE_EQUIPMENT_MAINTENANCE",
                      ],
                    ],
                  },
                },
              },
              workTypeOtherDescription: {
                type: "string",
                faker: "random.words",
              },
              workHours: {
                type: "array",
                minItems: 1,
                maxItems: 3,
                items: {
                  type: "object",
                  properties: {
                    monday: {
                      type: "boolean",
                    },
                    tuesday: {
                      type: "boolean",
                    },
                    wednesday: {
                      type: "boolean",
                    },
                    thursday: {
                      type: "boolean",
                    },
                    friday: {
                      type: "boolean",
                    },
                    saturday: {
                      type: "boolean",
                    },
                    sunday: {
                      type: "boolean",
                    },
                    startTime: {
                      type: "enum",
                      enum: ["18:00:00"],
                    },
                    endTime: {
                      type: "enum",
                      enum: ["21:00:00"],
                    },
                  },
                },
              },
              additionalInformation: {
                type: "string",
                faker: "lorem.sentence",
              },
              disturbanceType: {
                type: "string",
                chance: {
                  pickone: [
                    [
                      "BOTH_DIRECTIONS",
                      "POSITIVE_DIRECTION",
                      "NEGATIVE_DIRECTION",
                      "UNKNOWN",
                    ],
                  ],
                },
              },
              disturbanceDescription: {
                type: "string",
                faker: "lorem.sentence",
              },
              impact: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    unique: true,
                    minimum: 1,
                  },
                  laneArrangement: {
                    type: "string",
                    chance: {
                      pickone: [
                        ["LANE_CLOSED", "ROADWAY_CLOSED", "ROAD_CLOSED"],
                      ],
                    },
                  },
                  laneWidth: {
                    type: "integer",
                    minimum: 0,
                    maximum: 100,
                  },
                  speedLimit: {
                    type: "object",
                    properties: {
                      speedLimitType: {
                        type: "string",
                        chance: {
                          pickone: [
                            [
                              "SPEED_LIMIT_20",
                              "SPEED_LIMIT_30",
                              "SPEED_LIMIT_40",
                              "SPEED_LIMIT_50",
                              "SPEED_LIMIT_60",
                              "SPEED_LIMIT_70",
                              "SPEED_LIMIT_80",
                              "SPEED_LIMIT_90",
                              "SPEED_LIMIT_100",
                            ],
                          ],
                        },
                      },
                      length: {
                        type: "integer",
                        minimum: 0,
                        maximum: 100,
                      },
                    },
                  },
                  roadSurface: {
                    type: "object",
                    properties: {
                      surfaceMaterial: {
                        type: "string",
                        chance: {
                          pickone: [["PAVED", "MILLED", "GRAVEL"]],
                        },
                      },
                    },
                  },
                  detour: {
                    type: "object",
                    properties: {
                      curve: {
                        chance: { pickone: [["SHARP", "GENTLE"]] },
                      },
                      roadSurface: {
                        type: "object",
                        properties: {
                          surfaceMaterial: {
                            type: "string",
                            chance: {
                              pickone: [["PAVED", "MILLED", "GRAVEL"]],
                            },
                          },
                          length: {
                            type: "integer",
                            minimum: 0,
                          },
                          maxWeight: {
                            type: "integer",
                            minimum: 0,
                            maximum: 50,
                          },
                        },
                      },
                    },
                  },
                  trafficControlledByGuard: {
                    type: "boolean",
                  },
                  trafficControlledByLights: {
                    type: "boolean",
                  },
                  trafficControlDirection: {
                    type: "string",
                    chance: { pickone: [["BOTH_DIRECTIONS"]] },
                  },
                  trafficStops: {
                    type: "object",
                    properties: {
                      intermittentStops: {
                        type: "boolean",
                      },
                      roadClosedOccasionally: {
                        type: "boolean",
                      },
                      startTime: {
                        type: "enum",
                        enum: ["2020-03-01T08:00:00.000+0000"],
                      },
                      endTime: {
                        type: "enum",
                        enum: ["2020-03-05T12:00:00.000+0000"],
                      },
                    },
                  },
                  estimatedDelayDuringNormalTraffic: {
                    type: "integer",
                    minimum: 0,
                  },
                  estimatedDelayDuringPeakTraffic: {
                    type: "integer",
                    minimum: 0,
                  },
                  maxVehicleHeight: {
                    type: "integer",
                    minimum: 0,
                  },
                  maxVehicleWidth: {
                    type: "integer",
                    minimum: 0,
                  },
                  maxVehicleLength: {
                    type: "integer",
                    minimum: 0,
                  },
                  maxVehicleWeigth: {
                    type: "integer",
                    minimum: 0,
                  },
                  noticeOpenFire: {
                    type: "boolean",
                  },
                  noticeRoadMachineryInTraffic: {
                    type: "boolean",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
