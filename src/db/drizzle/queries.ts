import { UUID } from "crypto";
import { db } from "../db";
import { todosTable, usersTable } from "../schema";
import { desc, eq } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../schema";

export type DB = NodePgDatabase<typeof schema>;

export type NewTodo = {
  userId: UUID;
  title: string;
  description?: string;
  completed?: boolean;
};

export const insertUser = async (db: DB, email: string, password: string) => {
  const passwordHash = await Bun.password.hash(password);

  const [user] = await db
    .insert(usersTable)
    .values({ email, passwordHash })
    .returning();

  return user.id;
};

export const insertTodo = async (db: DB, todo: NewTodo) => {
  const [created] = await db.insert(todosTable).values(todo).returning();
  return created;
};

export const getTodosByUserId = async (userId: UUID) => {
  const todos = await db
    .select()
    .from(todosTable)
    .where(eq(todosTable.userId, userId))
    .orderBy(desc(todosTable.createdAt));

  return todos;
};
