#parcel : cmd : npm parcel index.html 
# DEV build 
-Local Server
-HMR =Hot module Replacement 
-File wathcing Alog writeen in c++
-Caching -Faster Builds
-Tree shaking: remove used code .
-diagnostic
-ImageOptmization
-and many more please refer   parcel.org

-- How to solve cros error from Ui Side--
-use fecth with mode:no-cros


two types of routing 
1: client side :
2: severe Side :when we have diff html (like home.html ,about.html ,etc) and when  whole page got reload mean that page is coming from server.

react class lifecycle :https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

chunking or splitting code or lazy loading or bundling means to divide app done with trhe help of loading data with help of lazy and suspense given by react 
why we nedd suspense : to handle the time when the other componnet is loading and react tries to render (error:react suspended componet) 

#Testing
-unit testing- like testing a small portion in isolation 
-Integration Testing- testing the intergartion onf diff component 
-end to end (e2e)

- test setup=
react testing lib 
then installed jest 
then i installed babel dependecy
then configure babel.config.js
configure parcel.config file to disable deafult bable transportation
jest -npx jest --init 
install jsdom lib
install @babel/preset-react-to make jsx work on test cases
include @babel/preset-react inside my babel config 
install npm i -D @testing-library/jest-dom