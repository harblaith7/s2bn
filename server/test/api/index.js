const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server-global');

// Extend the default timeout so MongoDB binaries can download
jest.setTimeout(60000);

// List all of your collection names here - I'll add some examples
const COLLECTIONS = ['users', 'messages', 'chapters'];

class DBManager {
  constructor() {
    this.db = null;
    this.server = new MongoMemoryServer();
    this.connection = null;
  }

  // Spin up a new in-memory mongo instance
  async start() {
    this.connection = await MongoClient.connect("--removed--", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db = this.connection.db(await this.server.getDbName());
  }

  // Close the connection and halt the mongo instance
  stop() {
    this.connection.close();
    return this.server.stop();
  }

  // Remove all documents from the entire database - useful between tests
  cleanup() {
    return Promise.all(COLLECTIONS.map((c) => this.db.collection(c).deleteMany({})));
  }
}

module.exports = DBManager;