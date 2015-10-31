module.exports = function(app) {
    app.get('/home', function(req, res) {
        var sess = req.session; 
        if(sess.view){
        	sess.view++;
        	//res.send("session contineue expires :"+ (sess.cookie.maxAge / 1000) +" sec");	
        	res.json(
        		{
        			"email":"amitthakur.mca08@gmail.com",
        			"name":"amit Thakur",
        			"exp":sess.cookie.maxAge / 1000,
        			"sid":sess.id
        		});
        	
        }
        else{
        	sess.view = true;
        	res.json(
        	{
        			"email":"amitthakur.mca08@gmail.com",
        			"name":"amit Thakur",
        			"exp":sess.cookie.maxAge / 1000,
        			"sid":sess.id
        		});

        }
        console.log(sess.cookie.maxAge);
        

    });
};
