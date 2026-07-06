import { Hono } from "hono";
import { getTodosByUserId } from "./db/drizzle/queries";
import { db } from "./db/db";
import { UUID } from "crypto";

const app = new Hono();

app.get("/todos", async (c) => {
  const userId = c.req.query("userId");
  if (!userId) {
    return c.json({ error: "no user id provided" }, 400);
  }
  try {
    const todos = await getTodosByUserId(db, userId as UUID);
    return c.json({ todos }, 200);
  } catch (error) {
    console.log("Error fetching Todos: ", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

export default app;
