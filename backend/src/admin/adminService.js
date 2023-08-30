var adminModel = require('./adminModel');
var key = 'a123456789bhiram';
var encryptor = require('simple-encryptor')(key);

module.exports.createAdminDBService = (adminDetails) => {

    return new Promise((resolve, reject) => {

        const admin = new adminModel(adminDetails);
        admin.save().then(savedAdmin => {
            resolve(savedAdmin);
        })
        .catch(error => {
            reject(error);
        });
        var adminModelData = new adminModel();

        adminModelData.username = adminDetails.username;
        adminModelData.password = adminDetails.password;
        var encrypted = encryptor.encrypt(adminDetails.password);
        adminModelData.password = encrypted;

        adminModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports.loginAdmidDBService = (adminDetails) => {
    return new Promise((resolve, reject) => {
        adminModel.findOne({username: adminDetails.username}, function getresult(errorvalue, result){
            if (errorvalue) {
                reject({status: false, msg: "Invalid Data"});
            } else {
                if(result != undefined && result != null)
                {
                    var decrypted = encryptor.decrypt(result.password);

                    if(decrypted === adminDetails.password){
                        resolve({status: true, msg: "Login Successfully"});
                    } else {
                        reject({status: false, msg: "Password is Incorrect"});
                    }
                } else{
                    reject({status: false, msg: "Username or Password is incorrect"});
                }
            }
        });
    });
}