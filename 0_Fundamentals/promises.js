const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(console.log("aa")), 2000);
});

async function a() {
  console.log("eae");
}

a();
