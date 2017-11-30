****Installing and developing with Hyperledger Composer****

**1. Install Development Components.**

	https://hyperledger.github.io/composer/installing/development-tools.html

**2. Start Hyperledger Fabric:**

Remove all containers and images
    * docker kill $(docker ps -q)
    * docker rm $(docker ps -aq)
    * docker rmi $(docker images dev-* -q)

mkdir ~/fabric-tools && cd ~/fabric-tools

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip
unzip fabric-dev-servers.zip

cd ~/fabric-tools
./downloadFabric.sh
./startFabric.sh
./createPeerAdminCard.sh

**3. Create business structure network**

	yo hyperledger-composer:businessnetwork

**4. Define business network**
	
	Define Models and transaction logic. 

**5. Generate a business network archive:**

	composer archive create -t dir -n .

**6. Deploy business network:**

1. Install composer runtime:

    composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName tutorial-network

2. Deploy business network in tutorial-network
	
    composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile tutorial-network@0.0.1.bna --file networkadmin.card
  

3. import  network admin identity

	  composer card import --file networkadmin.card

4. Check business network deployment

	  composer network ping --card admin@tutorial-network

5. Generate a Rest Server

	  composer-rest-server









		
