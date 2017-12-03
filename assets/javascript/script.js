

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrHcKEjaaAhQ5xGg3F14pjKcv2Oy84fcQ",
    authDomain: "train-station-schedule.firebaseapp.com",
    databaseURL: "https://train-station-schedule.firebaseio.com",
    projectId: "train-station-schedule",
    storageBucket: "train-station-schedule.appspot.com",
    messagingSenderId: "257364766866"
  };
 
	firebase.initializeApp(config);
	 

   var database = firebase.database();

  var name = "";
  var destination = "";
  var frequency = "";
  var time = "";
  var minutes = "",

	 
    $("#add-user").on("click", function() {

      train = $("#name").val().trim();
      destination = $("#destination").val().trim();
      frequency = $("#frequency").val().trim();
      time = $("#time").val().trim();
      minutes = $("#minutes").val().trim();

      dataRef.ref().push({
        destination: destination,
        frequency: frequency,
        time: time,
        minutes: minutes,
        dateAdded: firebase,database.ServerValue.TIMESTAMP
      });

      var newTrain = {
        name: name,
        destination: destination,
        frequency: frequency,
        time: time,
        minutes: minutes
      };

      database.ref().push(newTrain); {

      console.log(snapshot.val().name);

      console.log(snapshot.val().destination);

      console.log(snapshot.val().frequency);

      console.log(snapshot.val().time);

      console.log(snapshot.val().minutes);

      alert("Train added to schedule!")


      $("#name").text(snapshot.val().name);

      $("#destination").text(snapshot.val().destination);

      $("#frequency").text(snapshot.val().frequency);

      $("#time").text(snapshot.val().time);

      $("#minutes").text(snapshot.val().minutes);
    };