
angular.module('app')
    .service("profileInfo", function profileInfo() {
        return {
            name: "",
            age: "",
            phone: "",
            email: "",
            websites: "",
            work: "",
            accounts: "",
            education: "",
            family: "",
            places: "",
            coworkers: "",
            top: ""
        };

    });
