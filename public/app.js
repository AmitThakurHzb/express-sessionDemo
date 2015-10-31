(function() {
    var btn = $('#formBtn');
    btn.on('click', function(){
    	
		$.get("/home?update", function(data) {
        	$("#exampleInputEmail1").val(data.email);
        	$("#exampleInputName").val(data.name);
        	$('#sessionId').html(data.sid);
        	$('#exp').html("session exp: "+data.exp+" sec");
        	
        	console.dir(data);
		});
    		
    	});
})();
