function CacheApiWithExpirtyTime(api, expirtyTime) {
  let cache = {};

  return function () {
    if (cache.data) {
      return Promise.resolve(cache.data);
    }
    return api
      .then((data) => {
        cache.data = data;
        setTimeout(() => {
          cache.data = "";
        }, expirtyTime);
        return data;
      })
      .catch((err) => {
        console.log("api call faied with error" + err);
        throw err;
      });
  };
}

const apiCall = CacheApiWithExpirtyTime(
  fetch("https://randomuser.me/api/?results=2"),
  1000
);

apiCall().then((data) => console.log("data", data));
