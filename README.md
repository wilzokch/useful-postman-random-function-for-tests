# useful-postman-random-function-for-tests

## Step to generate random global variable for postman test
1. create a request
2. go to pre-request script
3. put [following script](main.js) (refer [example](sample.js))
4. run the request, so it will initial the value of your global variable
5. go to the **body** tab of the request that you want to use global variable
6. value put {{$yourGlobalVariable}}
