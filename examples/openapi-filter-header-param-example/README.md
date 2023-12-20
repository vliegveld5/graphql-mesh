
# Example Mesh + OpenAPI handler + Filter Transform on header params

# Expect
- Filter out param headers in the OpenAPI spec, example "Accept-Language" (paramCase)
- The "Accept-Language" header is not part as a param of the query in the Mesh GraphQL schema
- On runtime the "Accept-Language" header can be pass along as regular headers, and not part of the query as param.

# Setup
- API (feTS router)
  - The OpenAPI spec http://localhost:3000/openapi
  - Rest GET endpoint: http://localhost:3000/v1/example (requires: Accept-Language header)
- Gateway (Mesh):
  - http://localhost:4000
```
sources:
  - name: filter-header-example
    handler:
      openapi:
        source: http://localhost:3000/openapi
        endpoint: http://localhost:3000/
    transforms:
      - filterSchema:
          filters:
            - Query.*.!Accept_Language #filter the Accept-Language param

serve:
  playground: true
```

Example GraphQL query:
```
query MyQuery {
  getExample {
    ... on Result {
      value
    }
  }
}
```
Header:
```
{
  "Accept-Language":"en"
}
```