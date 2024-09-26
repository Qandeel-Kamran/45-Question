
// Question:2
let personName = "khan malik";
console.log ("hellow",personName,"would you like to learn some python today?");

// Question:3
let nickName ="khan malik";
console.log(nickName.toLowerCase());
console.log(nickName.toUpperCase());
console.log(nickName.replace(/\b\w/g,(jar)=>jar.toUpperCase()));

//Question:4
console.log("Albert Einstein once said,\"A person who never made a mistake never tried anything new.\"");

//Question:5
let famousPerson = "Albert Einstine";
let message = "once said,\"A person who never made a mistake never tried anything new.\""
console.log(famousPerson,message);

//Qusetion:6
let whiteSpace = "\n\t KHAN MALIK \t\n";
console.log(whiteSpace);
let withoutwhiteSpace = whiteSpace.trim();
console.log(withoutwhiteSpace);

//Question:7 & 8
console.log(6+2);
console.log(16-8);
console.log(4*2);
console.log(16/2);

//Question:9
let favNumber = 20;
let telegram = "mine favourite number is:";
console.log(telegram,favNumber);

//Question:10 
//\n => new line , \t => forSpace
let whitespaceName = "\n\t KHAN MALIK \t\n";
console.log(whiteSpace);
//trim is used to remob=ve all whitespace
let withoutWhitespace = whiteSpace.trim();
console.log(withoutwhiteSpace);

 //Question:11
 let friendsName = ["Ayeza", "Azlan","Ilma","khan","Malik"];
 friendsName.forEach(friendName => console.log(friendName));

//Question:12
let friendCalls = ["hamza","hafsa","bilal","fatima"];
friendCalls.forEach (friendCall => console.log (`hello ${friendCall},How are you?`));

//Question:13
let transportationModes = ["bike","sport car","bus","truck"];
transportationModes.forEach (mode => console.log(`I would like to own a ${mode}`));

//Question:14
let guestList = ["hamza","fatima","abeera","usman"];
guestList.forEach(guest => console.log(`salam ${guest},would you like us to join us on dinner today.`));

//Question:15
let guestName = ["hamza","fatima","abeera","usman"];
let donotCome = guestName[0];
console.log(donotCome, "Nahi Ahh Sakta");
guestName.splice(0,1,"alishba");
guestName.forEach(gName => console.log(`salam ${gName},would you like to dinner with us?`));

//Question:16
//create a guest name list array
let guestNamelist = ["hamza","fatima","abeera","usman"];
//making variable for those guest who cant come
let dontCome = guestNamelist[0];
//print the name of the guest who cant come
console.log(dontCome,"nahi ahh saktay hai");
//add or remove name of guest in guestNamelist of array
guestNamelist.splice(0,1,"afiya");
//message print for bigger table
console.log("good news ! we have found a bigger table for dinner");
//adding a new guest at starting index of array
guestNamelist.unshift("ali");
//adding a new guest at ending index of array
guestNamelist.push("habiba");
//getting a middle index of our middled index of our guestNamelist of array
let middleIndex : number = Math.floor(guestNamelist.length/2);
//adding a new guest of middle index of array
guestNamelist.splice(middleIndex,0,"anaya");
//print message for updating list
console.log("updating list of our guest");
//sending an invitation message to our guest one by one with their own name
guestNamelist.forEach(oneguest => console.log (`salam ${oneguest}, would you like to dinner with me?`));

//Question:17
//create a guest name list array
let guestNameList = ["hamza","fatima","abeera","usman"];
//making variable for those guest who cant come
let donTCome = guestNameList[0];
//print the name of the guest who cant come
console.log(donTCome,"nahi ahh saktay hai");
//add or remove name of guest in guestNameList of array
guestNameList.splice(0,1,"afiya");
//message print for bigger table
console.log("good news ! we have found a bigger table for dinner");
//adding a new guest at starting index of array
guestNameList.unshift("ali");
//adding a new guest at ending index of array
guestNameList.push("habiba");
//getting a middle index of our middled index of our guestNamelist of array
let middlEIndex : number = Math.floor(guestNameList.length/2);
//adding a new guest of middle index of array
guestNameList.splice(middlEIndex,0,"anaya");
//print message for updating list
console.log("updating list of our guest");
//sending an invitation message to our guest one by one with their own name
guestNameList.forEach(oneguest => console.log (`salam ${oneguest}, would you like to dinner with me?`));
//Inform that two guests can be invited on dinner.
console.log("unfortunitely, the new table wont drive on time! so, I can only invited on dinner.");
// Using whileloop to remove guests from array until only two guests remain .
while(guestNameList.length > 2){let removeGuest = guestNameList.pop();console.log(`sorry,${removeGuest}, I can invite you to dinner`);}
//sending an invitation to the last two guests on the list.
console.log("Invitation to the last 2 guest.");
guestNameList.forEach(lasttwo => console.log(`luckly! ${lasttwo}, ypu are still invited on dinner`));
//Removing last two guests from the list.
guestNameList.pop();
guestNameList.pop();
console.log("Empty list:",guestNameList);

//Question:18.
//making a Array of countries and print it's original order.
let countriesTovisit:string[]=["China","Denmark","Brazil","Argentina"];
console.log("original order:", countriesTovisit);
//Print the array in Alphabetic order without modifying the Actual order array list.
console.log("Alphabetic order:", [...countriesTovisit].sort());
//show that the Array is still in it's original order.
console.log("stil in original order:", countriesTovisit);
//print the array in reversed order with out modifying the actual array list.
console.log("Reversed order:", [...countriesTovisit].reverse());
//shoe again that the Array is still in it's original order.
console.log("check again still in original order:", countriesTovisit);
 //we have change the original array order noe.
 console.log("original array reversed:",countriesTovisit.reverse());
 //print the array to show that it's back to it's original order.
 console.log("back to it's original order:",countriesTovisit.reverse());
 //print the array again to show that it's order has been changed in alphabetic order now.
 console.log("sorted in Alphabetical order:",countriesTovisit.sort());
 //we have changed the original array order again , now inreverse order again.
 console.log("original array reversed:", countriesTovisit.reverse());

//Question:19
let guesTList = ["hamza","fatima","abeera","usman"];
//guestList.forEach(guest => console.log(`salam ${guest},would you like us to join us on dinner today.`));
let lengthguest : number = guesTList.length;
console.log(`we are invitined the total ${lengthguest} guest.`);

//Question:20
//making a prorramming languages array.
let programmingLanguage:string[]=["typescript","javascript","python","c++"];
//print the message of list.
console.log("list of programming languages:");
//print the value of array in the form of list.
programmingLanguage.forEach(language => console.log(language));


//Question:21
//make an object interface
interface itcourse
 {
    courseName : string;
    location : string;
    onsiteStudent : number;
}
let itcourse = {
    courseName:"typescript and javascript",
    location: "Governer House Sindh",
    onsiteStudent: 50000
};
console.log(itcourse);

//Question:22
//Create a array
let errorArray : string[]= ["A","B","C","D"];
// Producing error! by accesssing invalid index of array.
console.log(errorArray[10]);
// Error Removed.
console.log(errorArray[3]);


//Question:23
let x = 10;
let y = 40;
//test:1
console.log("TEST 1: x is equal to 10.");
console.log(x == 10);
//test:2
console.log("TEST 2: x is not equal to 15");
console.log(x == 15)
//test:3
console.log("TEST 3: y is equal to 40");
console.log(y == 40);
//test:4
console.log("TEST 4: y is not equal to 20");
console.log(y == 20);
//test:5
console.log("TEST 5: x is not greater than 15");
console.log(x >= 15);
//test:6
console.log("TEST 6: y is greater than 15");
console.log(y >= 15);
//test:7
console.log("TEST 7: y is not smaller than 20");
console.log(y <= 20);
//test:8
console.log("TEST 8: x is smaller than 20");
console.log(x <=20);
//test:9
console.log("TEST 9: x is greater th n 5");
console.log(x >= 5);
//test:10
console.log("TEST 10: y is not greater than 50");
console.log(y >= 50);

//Question:24.
// now firt make variable with the help of let.
let fruits = "mango";

//test:1
console.log("TEST 1: fruits is equal to mango")
console.log(fruits == "mango");
