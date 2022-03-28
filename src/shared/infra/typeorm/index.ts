import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}
// gerar conexão
getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database_ignite";
  createConnection({
    ...options,
  });
});
