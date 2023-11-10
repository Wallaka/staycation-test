import camelCase from "camelcase-keys";

import DB from "../db";

export const getUser = async (userId) => {
  console.log("getUser");
  const res = await DB.query("SELECT * FROM users WHERE id=$1::int", [userId]);
  console.log("res ", res);
  return camelCase(res.rows[0]);
};
