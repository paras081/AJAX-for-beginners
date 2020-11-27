<html>
    <body>
    
            <script>
                    //step-1 creat hmlhttp request object
                    var objXMLHttpRequest =new XMLHttpRequest();
                    //step-2 ask or prepare requested resource file/data
                    objXMLHttpRequest.open('GET','request_ajax_data.php');
                    //step-3 request send
                    objXMLHttpRequest.send();
                    //step-4
                    objXMLHttpRequest.onreadystatechange = function(){ 
                        
                        if(objXMLHttpRequest.readyState === 4)
                        {  
                            if(objXMLHttpRequest.status === 200)
                            {
                                alert(objXMLHttpRequest.responseText);
                                //alert('onreadystate change happened');
                            }else{
                                alert('Error Code:'+objXMLHttpRequest.status+' '+objXMLHttpRequest.statusText);
                                //alert('Error Message:'+objXMLHttpRequest.statusText);
                            }
                        }
                    };
            </script>
    
    </body>
    
</html>