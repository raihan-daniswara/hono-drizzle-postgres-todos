import { describe, test, it, expect } from "bun:test";
import { insertTodo, getTodosByUserId, NewTodo } from "./queries";

describe("insertTodo", () => {
  it("should insert a todo into the database", async () => {
    const newTodo = {
      userId: "741bdbe4-283a-4ef7-f4c6-e35b416c8fc8",
      title: "Test Todo",
      description: "This is a test todo",
    } as NewTodo;

    const todo = await insertTodo(newTodo);

    expect(todo.id).toBeDefined();
    expect(todo.userId).toBe(newTodo.userId);
  });
});
