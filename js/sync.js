
function getJsonSync(messageGetId){
    
            // console.log("Entra getJson");

                    var deferred = new $.Deferred();

                    var node_url = 'http://147.83.178.140:3000/tasks/' + messageGetId;

                    var request = $.ajax({
                                url       : node_url,
                                //data    :  { "name": shopParams.name,"adress": shopParams.adress,"img_url": shopParams.img_url,"google_id": shopParams.google_id, "lng": shopParams.lng, "lat": shopParams.lat},
                                dataType    : "json",
                                type        : "GET"
                            });

            
                        request.done(function(data, textStatus, jqXHR){
                            console.log(jqXHR);
                            //console.log( "Request success: " + textStatus );
                            if(data){


                                 deferred.resolve(data);
                            }
                        });

            
                        request.fail(function(jqXHR, textStatus) {
                            // console.log(jqXHR);
                            console.log( "Request failed: " + textStatus );

                            deferred.fail("error");
                        });
    return deferred.promise();
    
}



function postJsonSync(jsonString,messageSendId){
    
<<<<<<< HEAD
            // console.log("Entra postJson");
=======
            //console.log("Entra postJson");
>>>>>>> bbd51171e2c6b47b66b18e7e760d1e4e224cc405

                    var deferred = new $.Deferred();

                    var node_url = 'http://147.83.178.140:3000/tasks/' + messageSendId;

                    var request = $.ajax({
                                url       : node_url,
                                data    :  { "name": jsonString},
                                dataType    : "json",
                                type        : "PUT"
                            });

            
                        request.done(function(data, textStatus, jqXHR){
                            // console.log(jqXHR);
                            // console.log( "Request success: " + textStatus );
                            if(data){


                                 deferred.resolve(data);
                            }
                        });

            
                        request.fail(function(jqXHR, textStatus) {
                            // console.log(jqXHR);
                            console.log( "Request failed: " + textStatus );

                            deferred.fail("error");
                        });
    return deferred.promise();
    
}

