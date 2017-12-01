1. To list the available Cards:

composer card list

2. To create a new .bna
composer archive create ...

3. To deploy it to fabric:
composer runtime install ...

4. To start the deployed network
composer network start 


5. To update the network definition for an already deployed network
composer network update

6. To install composer runtime:

composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName hr-network


7. TO deploy business network:

composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile hr-network@0.0.1.bna --file networkadmin.card

8. To import the network administrator identity as a usable business network card:

composer card import --file networkadmin.card

9. To check that the business network has been deployed successfully:

composer network ping --card admin@hr-network

10. Generate a Rest Server without authentication and without multiuser.
composer-rest-server

business card name: admin@hr-network

11. To restart the REST server using authentication and multiuser enabled.
composer-rest-server -c admin@workvalid -n never -m true

12. Add a new participant using nodejs client API
https://hyperledger.github.io/composer/managing/participant-add.html
but modified some part of the code.

using command line :

composer participant add -c admin@workvalid -d '{"$class":"org.acme.workvalidation.EduInstitution","institutionId":"sjsu@workvalid.org","institutionName":"San Jose State University","institutionLocation":"San Jose"}'


13. TO issue a new identity to the added participant(https://hyperledger.github.io/composer/managing/identity-issue.html)
command line
composer identity issue -c admin@workvalid -f sjsuid.card -u sjsuid -a "org.acme.workvalidation.EduInstitution#sjsu@workvalid.org" --issuer true

This command worked:
composer identity issue -u tcsid1 -a org.acme.biznet.Employer#TCS -c admin@hr-network

Also worked with javascript API

akhil@akhil:~/client_app_nodejs$ node issue_new_identity.js 
userID = infyid1
userSecret = xgeAbkHoZScw

14. To create the business network card from the userid and usersecret created
composer card create --file infyid1.card --businessNetworkName hr-network --connectionProfileFile /home/akhil/.composer/cards/admin@hr-network/connection.json --user infyid1 --enrollSecret xgeAbkHoZScw

15. Imported the card for security reasons:

akhil@akhil:~/hr-network$ composer card import -f infyid1.card -n infyid1@hr-network
Successfully imported business network card: infyid1@hr-network

Command succeeded


16. To list all the identities
composer identity list -c admin@hr-network


17. In github after registering the Oauth application
clientID:
45d3d1a2f584d6b4899e
client secret: 
e8d3c28524ff5839b3c08e29bca707a50aeaaf24


export COMPOSER_PROVIDERS='{
  "github": {
    "provider": "github",
    "module": "passport-github",
    "clientID": "45d3d1a2f584d6b4899e",
    "clientSecret": "e8d3c28524ff5839b3c08e29bca707a50aeaaf24",
    "authPath": "/auth/github",
    "callbackURL": "/auth/github/callback",
    "successRedirect": "/",
    "failureRedirect": "/"
  }
}'

To remove white spaces:
https://www.browserling.com/tools/remove-all-whitespace

18. Command to start the rest server:

composer-rest-server --card admin@workvalid -n "never" -a true -m true -p 3000

19 navigate to localhost:3000/auth/github and give authorization




References:
https://hyperledger.github.io/composer/managing/participantsandidentities.html

https://hyperledger.github.io/composer/managing/identity-issue.html

https://hyperledger.github.io/composer/managing/id-cards-playground.html - havent followed

------------------------------------------------------------------------------------------
This is one of the most important thing to be done by tomorrow at any cost.
Login and authentication is done using passport strategy:
https://github.com/hyperledger/composer/issues/142
-------------------------------------------------------------------------------------------

This is for using the passport-jwt

https://github.com/hyperledger/composer/issues/2038

-------------------------------------------------------------------------------------------
Passport google authentication:
https://github.com/jaredhanson/passport-google-oauth2#readme
-------------------------------------------------------------------------------------------
