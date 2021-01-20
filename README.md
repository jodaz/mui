# mui-extra

A laravel-focused JSONAPI dataprovider for [react-admin](https://github.com/marmelab/react-admin).

## Components

- GET_LIST
- GET_ONE
- CREATE
- UPDATE
- DELETE
- GET_MANY

## Usage

1. Install the package and dependencies `npm i mui-extra @material-ui/core @material-ui/icons`.

``` javascript
//in app.js
import React from "react";
import { Admin, Resource } from "react-admin";
import apiClient from "ra-laravel-client";

const dataProvider = apiClient('http://dev.project.loc/api');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    ...
  </Admin>
);

export default App;
```

## Author

Me, obviously ([@jodaz](https://twitter.com/jodaz))

