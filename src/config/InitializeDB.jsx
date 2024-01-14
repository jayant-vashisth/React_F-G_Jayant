export const initializeDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("DiningExperienceDB", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create an object store named 'diningExperience' with an auto-incrementing key
      const objectStore = db.createObjectStore("diningExperience", {
        autoIncrement: true,
      });

      // Define the structure of the object store (fields in the form)
      objectStore.createIndex("customerName", "customerName", {
        unique: false,
      });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("phone", "phone", { unique: true });
      objectStore.createIndex("serviceQuality", "serviceQuality", {
        unique: false,
      });
      objectStore.createIndex("beverageQuality", "beverageQuality", {
        unique: false,
      });
      objectStore.createIndex("cleanliness", "cleanliness", {
        unique: false,
      });
      objectStore.createIndex("diningExperience", "diningExperience", {
        unique: false,
      });
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      resolve(db);
    };

    request.onerror = (event) => {
      reject(`Error opening database: ${event.target.error}`);
    };
  });
};

export const getFormData = (setFormDataArray) => {
  initializeDB()
    .then((db) => {
      const transaction = db.transaction(["diningExperience"], "readonly");
      const objectStore = transaction.objectStore("diningExperience");
      const request = objectStore.getAll();

      request.onsuccess = () => {
        const formDataArrayData = request.result;
        setFormDataArray(formDataArrayData);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    })
    .catch((error) => {
      console.error(error);
    });
};
