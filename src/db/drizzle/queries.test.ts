import { describe, it, expect, beforeEach, afterEach, mock } from "bun:test";
import { insertTodo, NewTodo, insertUser, getTodosByUserId } from "./queries";
import {
  createTestDb,
  destroyTestDb,
  TestDbContext,
} from "../../test/setup-test-db";

let ctx: TestDbContext;

beforeEach(async () => {
  ctx = await createTestDb();

  await mock.module("../db/db.ts", () => ({
    db: ctx.db,
  }));
});

afterEach(async () => {
  await destroyTestDb(ctx);
});

describe("insertTodo", () => {
  it("should insert a todo into the database", async () => {
    const userId = await insertUser(ctx.db, "test@test.com", "password123");
    const newTodo = {
      userId: userId,
      title: "Test Todo",
      description: "This is a test todo",
    } as NewTodo;

    const todo = await insertTodo(ctx.db, newTodo);

    expect(todo.id).toBeDefined();
    expect(todo.userId).toBe(newTodo.userId);
  });
});

describe("getUserById", () => {
  it("should return todos for a given userId", async () => {
    const userId = await insertUser(ctx.db, "test@test.com", "password123");

    const newTodo1 = {
      userId: userId,
      title: "Test Todo 1",
      description: "This is a test todo 1",
    } as NewTodo;

    const newTodo2 = {
      userId: userId,
      title: "Test Todo 2",
      description: "This is a test todo 2",
    } as NewTodo;

    await insertTodo(ctx.db, newTodo1);
    await insertTodo(ctx.db, newTodo2);

    const todos = await getTodosByUserId(ctx.db, userId)
    expect(todos.length).toBe(2)
    });
});
