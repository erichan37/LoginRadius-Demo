/**
 * Created by chaneric on 2017-05-06.
 */
var options= {};

options.onError = function(response) {
    alert("Error, please relogin");
    console.log(response);
  // window.location = "/index.html";
};
options.onSuccess = function() {
    // do nothing, this is normal behaviour
};
LRObject.util.ready(function() {
    LRObject.init("ssoNotLoginThenLogout", options);

});