var adminService = require('./adminService');

var createAdminControllerFn = async (req, res) =>{
    try {
        console.log(req.body);
        var status = await adminService.createAdminDBService(req.body);
        console.log(status);

        if(status) {
            res.send({"status":true, "message": "User created sucessfully"});
        }else {
            res.send({"status":false, "message": "Error creating admin"});
        }
    } catch(err)
    {
        console.log(err);
    }
}

var loginAdminControllerFn = async (req, res) => {

    try {
        result = await adminService.loginAdminDBService(req.body);
        if(result.status) {
            res.send({"status": true, 'message': result.msg});
        } else {
            res.send({'status': false, 'message': result.msg});
        }
    } catch (error) {
        console.log("ERROR: ", error);
        res.status(500).send({"status": false, "message": error.msg});
    }
}

module.exports = {createAdminControllerFn, loginAdminControllerFn};