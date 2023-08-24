import { ApiServer } from "./utils/api-server";

const server = new ApiServer();
server.start();

export default server.app;