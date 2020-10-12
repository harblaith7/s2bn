const DBManager = require('../index');

const GROUP = { _id: 'g1', createdAt: new Date() };

describe('Group.getGroupById', () => {
  const dbman = new DBManager();

  afterAll(() => dbman.stop());
  beforeAll(() => dbman.start());
  afterEach(() => dbman.cleanup());
  beforeEach(() => dbman.models.Group.collection.insertOne(GROUP));

  it('should return null with an invalid id', async () => {
    console.log()
  });

  it('should return a group with a valid id', async () => {
    expect.assertions(1);
    const result = await dbman.models.Group.getGroupById(GROUP._id);
    expect(result).toEqual(GROUP);
  });
});