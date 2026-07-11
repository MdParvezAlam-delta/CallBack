// Handling a sequence of asynchronous operations.:--->
// Example: file read → validate data → save to database → send response.
//  If each step must wait for the previous step to finish, nested callbacks can quickly create callback hell.

function fileRead(callback) {
  setTimeout(() => {
    console.log("File has been read");
    callback();
  }, 1000);
}

function validate(callback) {
  setTimeout(() => {
    console.log("Validate the data");
    callback();
  }, 2000);
}

function saveDb(callback) {
  setTimeout(() => {
    console.log("Save to the database");
    callback();
  }, 3000);
}

function response(callback) {
  setTimeout(() => {
    console.log("Send the response");
    callback();
  }, 4000);
}

fileRead(() => {
  validate(() => {
    saveDb(() => {
      response(() => {
        console.log("Process Completed.");
      });
    });
  });
});