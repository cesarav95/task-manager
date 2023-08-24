import { describe } from "node:test";
import { ApiServer } from "./utils/api-server";

describe('app.ts', () => {
  const server = new ApiServer();

  test('should init server', async() => {
    expect(server.app).toBeDefined();
  });
});