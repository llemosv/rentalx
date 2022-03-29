import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidv4();
  const hashPass = await hash("123597", 8);

  await connection.query(
    `INSERT INTO USERS (id, name, password, email, "isAdmin", created_at, driver_license)
        VALUES('${id}', 'Administrator', '${hashPass}', 'admin@gmail.com', true, 'now()', '123456789')
      `
  );

  await connection.close;
}

create().then(() => console.log("User admin created!"));
