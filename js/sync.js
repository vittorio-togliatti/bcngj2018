
function getJsonSync(){
    
            console.log("Entra getJson");

                    var deferred = new $.Deferred();

                    var node_url = 'http://147.83.178.140:3000/tasks/5a6bf3777f0cfc4ec6cc7932';

                    var request = $.ajax({
                                url       : node_url,
                                //data    :  { "name": shopParams.name,"adress": shopParams.adress,"img_url": shopParams.img_url,"google_id": shopParams.google_id, "lng": shopParams.lng, "lat": shopParams.lat},
                                dataType    : "json",
                                type        : "GET"
                            });

            
                        request.done(function(data, textStatus, jqXHR){
                            console.log(jqXHR);
                            console.log( "Request success: " + textStatus );
                            if(data){


                                 deferred.resolve(data);
                            }
                        });

            
                        request.fail(function(jqXHR, textStatus) {
                            console.log(jqXHR);
                            console.log( "Request failed: " + textStatus );

                            deferred.fail("error");
                        });
    return deferred.promise();
    
}



function postJsonSync(jsonString){
    
            console.log("Entra postJson");

                    var deferred = new $.Deferred();

                    var node_url = 'http://147.83.178.140:3000/tasks/5a6bf3de7f0cfc4ec6cc7933';

                    var request = $.ajax({
                                url       : node_url,
                                data    :  { "name": jsonString},
                                dataType    : "json",
                                type        : "PUT"
                            });

            
                        request.done(function(data, textStatus, jqXHR){
                            console.log(jqXHR);
                            console.log( "Request success: " + textStatus );
                            if(data){


                                 deferred.resolve(data);
                            }
                        });

            
                        request.fail(function(jqXHR, textStatus) {
                            console.log(jqXHR);
                            console.log( "Request failed: " + textStatus );

                            deferred.fail("error");
                        });
    return deferred.promise();
    
}

