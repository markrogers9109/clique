
angular.module('app')
    .service("profileInfo", function profileInfo() {
        return {
            name: "Choose a User_Name",
            age: "How old are you?",
            phone: "What is your phone number",
            email: "What is your email",
            websites: "Do you own any websites",
            work: "Where do you work?",
            accounts: "Other social media accounts you would like to link to?",
            education: "Education",
            family: "Family Members on Clique?",
            places: "Where do you live?",
            coworkers: "CoWorkers on Clique?",
            top: "Top friends on Clique?"
        };

    });
