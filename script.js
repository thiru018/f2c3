function getMenu() {
  return fetch(
    "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching menu:", error);
    });
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Assume random selection of 3 menu items for the order
      getMenu().then((menuItems) => {
        const order = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * menuItems.length);
          order.push(menuItems[randomIndex]);
        }
        resolve(order);
      });
    }, 2500);
  });
}

function orderPrep(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

function thankyouFnc() {
  alert("Thank you for eating with us today!");
}

async function main() {
  try {
    const order = await takeOrder();
    console.log("Order:", order);

    const prepStatus = await orderPrep(order);
    console.log("Order Preparation Status:", prepStatus);

    const paymentStatus = await payOrder();
    console.log("Payment Status:", paymentStatus);

    if (paymentStatus.paid) {
      thankyouFnc();
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the main function to start the process
main();
