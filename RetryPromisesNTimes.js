// Implement a function in JavaScript that retries promises N number of times with a delay between each call.

function retryPromisesNTimesWithDelay(api, n, delay) {
  const attempt = async (attemptCount = 1) => {
    try {
      const data = await api();
      return data;
    } catch (err) {
      if (attemptCount >= n) throw err;
      await new Promise((res) => setTimeout(res, delay));
      return attempt(attemptCount + 1);
    }
  };
  return attempt();
}

const api = () => {
  return new Promise((res, reject) => {
    setTimeout(() => res("data"), 1000);
  });
};

retryPromisesNTimesWithDelay(api, 3, 1000).then((data) =>
  console.log("data", data)
);
