// WITHOUT CALLBACK

// function checkInventory() {
//   setTimeout(() => {
//     console.log("Checking inventory");
//   }, 2000);
// }

// function createOrder() {
//   setTimeout(() => {
//     console.log("Creating order");
//   }, 1000);
// }

// function chargePayment() {
//   setTimeout(() => {
//     console.log("Charging payment");
//   }, 1000);
// }

// function sendEmail() {
//   setTimeout(() => {
//     console.log("Sending email");
//   }, 1000);
// }

// checkInventory();
// createOrder();
// chargePayment();
// sendEmail();


// USING DEFAULT CALLBACK
function checkInventoryCb(callback = () => {}) {
  setTimeout(() => {
    console.log("Checking inventory");
    callback();
  }, 2000);
}

function createOrderCb(callback = () => {}) {
  setTimeout(() => {
    console.log("Creating order");
    callback();
  }, 1000);
}

function chargePaymentCb(callback = () => {}) {
  setTimeout(() => {
    console.log("Charging payment");
    callback();
  }, 1000);
}

function sendEmailCb(callback = () => {}) {
  setTimeout(() => {
    console.log("Sending email");
    callback();
  }, 1000);
}

checkInventoryCb(() => {
  createOrderCb(() => {
    chargePaymentCb(() => {
      sendEmailCb(() => {
        console.log("All done");
      });
    });
  });
});


// WITHOUT USING DEFAULT CALLBACK

// function checkInventoryCb(callback) {
//   setTimeout(() => {
//     console.log("Checking inventory");
//     callback();
//   }, 2000);
// }

// function createOrderCb(callback) {
//   setTimeout(() => {
//     console.log("Creating order");
//     callback();
//   }, 1000);
// }

// function chargePaymentCb(callback) {
//   setTimeout(() => {
//     console.log("Charging payment");
//     callback();
//   }, 1000);
// }

// function sendEmailCb(callback) {
//   setTimeout(() => {
//     console.log("Sending email");
//     callback();
//   }, 1000);
// }

// checkInventoryCb(() => {
//   createOrderCb(() => {
//     chargePaymentCb(() => {
//       sendEmailCb(() => {
//         console.log("All done");
//       });
//     });
//   });
// });