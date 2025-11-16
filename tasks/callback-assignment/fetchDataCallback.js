function fetchDataWithCallback(callback) {
  try {
    // simulate a delay of 2 seconds
    setTimeout(() => {
      let error = false; // change to true to simulate an error

      if (error) {
        throw new Error("Fetch failed");
      } else {
        callback("Data fetched");
      }

    }, 2000);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

// Call the function
fetchDataWithCallback(function (result) {
  console.log(result);
});
