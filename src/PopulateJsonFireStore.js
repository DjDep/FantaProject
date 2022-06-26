const firebase = require("firebase");
require("firebase/firestore");
const fs = require('fs');


const { resolve } = require('path');


firebase.initializeApp({
  apiKey: ["AIzaSyBGeRyBjE4PxkdH0wYhBYZc1tXZDdYZvlw"],
  authDomain: ["fantaproject2-258ab.firebaseapp.com"],
  projectId: ["fantaproject2-258ab"],
});


class PopulateJsonFireStore {

  constructor() {
    console.time("Time taken");
    this.db = firebase.firestore();

    const [, , filepath, type, collectionname] = process.argv;

    this.absolutepath = resolve(process.cwd(), filepath);

    this.type = type;

    this.collectionname = collectionname;

    if (this.type !== 'set' && this.type !== 'add') {

      this.exit(1);
    }

    if (this.absolutepath == null || this.absolutepath.length < 1){
      this.exit(1);
    }

    if (this.collectionname == null || this.collectionname.length < 1){
      this.exit(1);
    }

  }




  async populate() {
    let data = [];

    try {
      data = JSON.parse(fs.readFileSync(this.absolutepath, {}), 'utf8');
    } catch (e) {
    }

    if (data.length < 1) {
    }
    var i = 0;
    for (var item of data) {
      try {
        this.type === 'set' ? await this.set(item) : await this.add(item);
      } catch (e) {
        this.exit(1);
      }

      if (data.length - 1 === i) {

        this.exit(0);
      }

      i++;
    }

  }

  add(item) {
    return this.db.collection(this.collectionname).add(Object.assign({}, item))
    .then(() => true)
    .catch((e) => console.error(e.message));
  }

  set(item) {
    return this.db.doc(`${this.collectionname}/${item.id}`).set(Object.assign({}, item))
    .then(() => true)
    .catch((e) => console.error(e.message));
  }

  exit(code) {
    return process.exit(code);
  }

}


const populateFireStore = new PopulateJsonFireStore();
populateFireStore.populate();

