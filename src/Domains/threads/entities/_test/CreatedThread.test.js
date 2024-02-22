const CreatedThread = require("../CreatedThread");

describe("a CreatedThread entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload = {
      owner: "user-123",
      title: "ini title",
      body: "ini body",
    };

    // Action and Assert
    expect(() => new CreatedThread(payload)).toThrowError("CREATED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY");
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      id: 123,
      owner: "user-123",
      title: [],
      body: {},
    };

    // Action and Assert
    expect(() => new CreatedThread(payload)).toThrowError("CREATED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION");
  });

  it("should create createdThread object correctly", () => {
    // Arrange
    const payload = {
      id: "thread-123",
      owner: "user-123",
      title: "ini title",
      body: "ini body",
    };

    // Action
    const createdThread = new CreatedThread(payload);

    // Assert
    expect(createdThread.id).toEqual(payload.id);
    expect(createdThread.owner).toEqual(payload.owner);
    expect(createdThread.title).toEqual(payload.title);
    expect(createdThread.body).toEqual(payload.body);
  });
});
