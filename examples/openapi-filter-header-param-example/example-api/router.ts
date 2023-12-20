import { createRouter, Response } from 'fets';

export const router = createRouter()
  .route({
    method: 'GET',
    path: '/v1/example',
    async handler(req) {
      let test = req.headers.get("accept-language");
      console.log("GET /v1/example " + test)
      return Response.json({
        value: "hello + custom-header: " + test
      });
    },
  })
  .route({
    method: 'GET',
    path: '/openapi',
    async handler(req) {
        return Response.json(JSON.parse(spec));
    },
});

const spec = '{' +
    '  "openapi": "3.0.1",' +
    '  "info": {' +
    '    "title": "Example API with Accept-Language header",' +
    '    "description": "Example API with Accept-Language header",' +
    '    "version": "1.0"' +
    '  },' +
    '  "paths": {' +
    '    "/v1/example": {' +
    '      "get": {' +
    '        "summary": "Finds example with header Accept-Language",' +
    '        "operationId": "getExample",' +
    '        "parameters": [' +
    '          {' +
    '            "name": "Accept-Language",' +
    '            "in": "header",' +
    '            "required": true,' +
    '            "schema": {' +
    '              "type": "string"' +
    '            },' +
    '            "example": "en"' +
    '          }' +
    '        ],' +
    '        "responses": {' +
    '          "200": {' +
    '            "description": "Success",' +
    '            "content": {' +
    '              "application/json": {' +
    '                "schema": {' +
    '                  "$ref": "#/components/schemas/Result"' +
    '                }' +
    '              },' +
    '              "application/problem+json": {' +
    '                "schema": {' +
    '                  "$ref": "#/components/schemas/Result"' +
    '                }' +
    '              }' +
    '            }' +
    '          },' +
    '          "400": {' +
    '            "description": "Accept-Language invalid or missing.",' +
    '            "content": {' +
    '              "application/json": {' +
    '                "schema": {' +
    '                  "$ref": "#/components/schemas/Problem"' +
    '                }' +
    '              },' +
    '              "application/problem+json": {' +
    '                "schema": {' +
    '                  "$ref": "#/components/schemas/Problem"' +
    '                }' +
    '              }' +
    '            }' +
    '          },' +
    '          "404": {' +
    '            "description": "No example for the requested language.",' +
    '            "content": {' +
    '              "application/json": {' +
    '                "schema": {' +
    '                  "$ref": "#/components/schemas/Problem"' +
    '                }' +
    '              },' +
    '              "application/problem+json": {' +
    '                "schema": {' +
    '                  "$ref": "#/components/schemas/Problem"' +
    '                }' +
    '              }' +
    '            }' +
    '          }' +
    '        }' +
    '      }' +
    '    }' +
    '  },' +
    '  "components": {' +
    '    "schemas": {' +
    '      "Problem": {' +
    '        "type": "object",' +
    '        "properties": {' +
    '          "detail": {' +
    '            "type": "string"' +
    '          }' +
    '        }' +
    '      },' +
    '      "Result": {' +
    '        "type": "object",' +
    '        "properties": {' +
    '          "value": {' +
    '            "type": "string"' +
    '          }' +
    '        }' +
    '      }' +
    '    }' +
    '  }' +
    '}'