# demo-bank
A simple banking application to transfer funds and record all transactions on blockchain using Hyperledger.

## To create the business network archive(.bna) file
```composer archive create -t dir -n .```

## To list the business cards.
```composer card list```

## To delete a business network card.
```composer card delete -c admin@demo-bank```

## Installing composer runtime.
```composer network install  -c PeerAdmin@hlfv1 -a demo-bank@1.0.0.bna```

## Deploying the business network.
```composer network start -c PeerAdmin@hlfv1 -A admin -S adminpw -f BankAdmin.card -n demo-bank -V 1.0.0```

## Importing the network administrator identity as a usable business network card.
```composer card import --file BankAdmin.card```

## To verify if the business network has been deployed successfully.
```composer network ping --card admin@demo-bank```

## To expose a RESTful API.
```composer-rest-server```

## Ref
https://medium.freecodecamp.org/ultimate-end-to-end-tutorial-to-create-an-application-on-blockchain-using-hyperledger-3a83a80cbc71

https://hyperledger.github.io/composer/v0.16

https://hyperledger.github.io/composer/v0.16/tutorials/developer-tutorial
