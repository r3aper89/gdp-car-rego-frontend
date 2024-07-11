# shoelace.style

follow instructions here [shoelace.style](https://shoelace.style/frameworks/angular)

install shoelace

```sh
npm install @shoelace-style/shoelace
```

add too `./angular.json`

```json
"architect": {
  "build": {
    ...
    "options": {
      ...
      "styles": [
        "src/styles.scss",
        "@shoelace-style/shoelace/dist/themes/light.css"
       ],
      "scripts": [
        "@shoelace-style/shoelace/dist/shoelace.js"
      ]
      ...
```
