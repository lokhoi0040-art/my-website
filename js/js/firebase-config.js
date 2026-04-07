const firebaseConfig = {
    apiKey: "AIzaSyB-tw2lNCrv2AXA5mUP4bkp9vzDpLzXqe4",
    authDomain: "movie-booking-87997.firebaseapp.com",
    databaseURL: "https://movie-booking-87997-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "movie-booking-87997",
};
firebase.initializeApp(firebaseConfig);
window.db = firebase.database();
window.auth = firebase.auth();