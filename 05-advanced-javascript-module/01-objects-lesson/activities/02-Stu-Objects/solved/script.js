var customerOrder = [
    {
        name : "Coffee",
        numberOfSugars : 1,
        isReady : true
    },
    {
        name : "Tea",
        numberOfSugars : 2,
        isReady : false
    },
    {
        name : "Hot chocolate",
        numberOfSugars : 0,
        isReady : true
    }
    ];

for(var order of customerOrder)
{
    console.log("Customer order \n" + 
                "Drink  : " + order.name + "\n" +
                "Sugars : " + order.numberOfSugars + "\n" +
                "Status : " + (order.isReady ? "Ready for pick-up" : "Still in order queue")
    );
}
