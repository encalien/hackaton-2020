export default class Store {
  static get(dbName) {
    const db = localStorage[dbName] || "[]";
    return JSON.parse(db);
  }

  static post(dbName, newRecord) {
    const db = Store.get(dbName);
    newRecord.id = db.length + 1;
    db.push(newRecord);
    localStorage.setItem(dbName, JSON.stringify(db));
    return newRecord;
  }

  static put(dbName, editedRecord) {
    const db = Store.get(dbName);
    const recordIndex = db.findIndex(record => record.id == editedRecord.id);
    db[recordIndex] = editedRecord;
    localStorage.setItem(dbName, JSON.stringify(db));
    return editedRecord;
  }
}
