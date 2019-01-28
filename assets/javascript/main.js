// Initialize Firebase
var config = {
  apiKey: "AIzaSyBBY1VZ1WUgyOn0wv4E4wb8ICRuXotzmkU",
  authDomain: "bootcampspot-a8dda.firebaseapp.com",
  databaseURL: "https://bootcampspot-a8dda.firebaseio.com",
  projectId: "bootcampspot-a8dda",
  storageBucket: "bootcampspot-a8dda.appspot.com",
  messagingSenderId: "253201015540"
};
firebase.initializeApp(config);

var database = firebase.database();
// database.ref().on("value", function(snapshot) {



$("button").on("click", function (event) {
  event.preventDefault();
  var trainName = $("#name").val().trim();
  var trainDestination = $("#destination").val().trim();
  var trainFrequency = $("#frequency").val().trim();
  var trainArrival; = $("#arrival").val().trim();
  var trainMin; = $("#min-away").val().trim();

  console.log(trainName);
  var newTRow = $("<tr>").append(

    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency),
    $("<td>").text(trainArrival),
    $("<td>").text(trainMin),
 

  );

  $("#tbody").append(newTRow);
  $('#name').val('');
  $('#destination').val('');
  $('#frequency').val('');
  $('#arrival').val('');
  $('#min-away).val('')

  // store data in firebase

  database.ref().set({
    trainName: trainName,
    trainDestination: trainDestination,
    trainFrequency: trainFrequency,
    trainArrival: trainArrival,
    trainMin: trainMin,
  }
    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if false;
        }
      }
    }
  }
  

  })
  // Prettify the train start
  var trainStartPretty = moment.unix(trainFequency).format("hours/sec");
  console.log(trainStartPretty);

  // Calculate the arrival 
 
  var trainArrival = moment().diff(moment(trainFrequency, "X"), "arrival");
  console.log(trainArrival);

  // Calculate the frequency
  var trainFrequency = trainArrival + trainAway;
  console.log(trainFrequency);

    // Calculate the min away
    var trainAway = trainFrequency - trainArrival;
    console.log(trainMin);
  

});

 // });