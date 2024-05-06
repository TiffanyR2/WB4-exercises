function printContact(contact){
    console.log(contact.name)
    console.log(contact.address)
    console.log(contact.city + ",", contact.state, contact.zip)
}

let myInfo = {
    name: "Tiffany May", 
    address: "121 Main Street",
    city: "Lakeland",
    state: "Florida",
    zip: "33789",
    /* other properties not shown */
   };
   printContact(myInfo);