# endpoints

http://localhost:8080/swagger-ui/index.html

## fleet-car-controller

GET
/api/fleet-cars

- use to populate table

```json
[
  {
    "fleetCarId": 1,
    "numberPlate": "S123ABC",
    "expiryDate": "2024-07-08",
    "carModel": {
      "modelId": 1,
      "modelName": "Landcruiser",
      "carBrand": {
        "brandId": 1,
        "brandName": "Toyota"
      }
    },
    "driverName": "Shelton Church",
    "fleetActive": true
  },
    {
    "fleetCarId": 1, ... ,
  },
]
```

GET
/api/fleet-cars/{id}

GET
/api/fleet-cars/inactive

GET
/api/fleet-cars/active

## car-model-controller

GET
/api/car-models/{modelId}

GET
/api/car-models/{modelId}/brand

GET
/api/car-models/brand/{brandId}

## car-brand-controller

GET
/api/car-brands

GET
/api/car-brands/{id}

## docker network

```sh
docker network inspect network-gdp-car-rego

[
    {
        "Name": "network-gdp-car-rego",
        "Id": "a72815d7c011a1c7a6243731d3bfe8999b5306dc89623a2f3bf374c0b96cd8be",
        "Created": "2024-07-11T03:29:22.650165258Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.27.0.0/16",
                    "Gateway": "172.27.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "0c4978a47b1d6a81a9ce000c0f790f31d6c875bd02a2ce57e4e26306fbaec5b1": {
                "Name": "postgres-db",
                "EndpointID": "93d8a0c24be22979f5fd2b61dd5df0829c74fec888e15b0cb4ffcac7434b1aba",
                "MacAddress": "02:42:ac:1b:00:02",
                "IPv4Address": "172.27.0.2/16",
                "IPv6Address": ""
            },
            "d1112b13d24ddbc3b1c265623fc2f56e37e7312bfc562e2b7de58d5bfde4cb96": {
                # this container
                "Name": "typescript-node18",
                "EndpointID": "9443ebc57e9cb0e13a35052d83a06efe2850e7d05e07774bff4212844ad47bbc",
                "MacAddress": "02:42:ac:1b:00:05",
                "IPv4Address": "172.27.0.5/16",
                "IPv6Address": ""
            },
            "d503e8484ed2e7ba9d6b856a5a936d6d9e647213e2804841f0d76886f1743221": {
                # backend use `api-java-maven-springboot` name in service
                "Name": "api-java-maven-springboot",
                "EndpointID": "49a5e188ce079fffe0a47af350a291a19de7c2e286a97a8c88dec66668c696aa",
                "MacAddress": "02:42:ac:1b:00:04",
                "IPv4Address": "172.27.0.4/16",
                "IPv6Address": ""
            },
            "e442599e5e2d76a9ec51d9e09c46b8f7e5d13d4bb5ba1a5e5522c3b84e351e4f": {
                "Name": "pgadmin",
                "EndpointID": "53016b1fc5af5dd952b63dbbe74db16d08437ec8f64906a43e42c7b9e3bbc870",
                "MacAddress": "02:42:ac:1b:00:03",
                "IPv4Address": "172.27.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]

```
