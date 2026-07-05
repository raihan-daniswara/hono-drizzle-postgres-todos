import * as schema from "../src/db/schema";
import { db, pool } from "../src/db/db";
import { reset, seed } from "drizzle-seed";

export const seedDb = async () => {
  await reset(db, schema);
  await seed(db, schema).refine((funcs) => ({
    usersTable: {
      columns: {
        age: funcs.int({ minValue: 0, maxValue: 120 }),
      },
      count: 10,
      with: {
        todosTable: 10,
      },
    },
    todosTable: {
      columns: {
        title: funcs.valuesFromArray({
          values: [
            "Buy Groceries",
            "Walk the cat",
            "Wash the dishes",
            "Clean the kitchen",
            "Do the laundry",
            "Fold the clothes",
            "Iron shirts",
            "Water the plants",
            "Feed the dog",
            "Take out the trash",
            "Vacuum the rug",
            "Mop the floor",
            "Dust the shelves",
            "Wipe the mirrors",
            "Clean the windows",
            "Change bed sheets",
            "Make the bed",
            "Organize the desk",
            "Sort mail",
            "Pay bills",
            "Reply to emails",
            "Schedule dentist",
            "Plan weekly menu",
            "Prep meals",
            "Pack lunch",
          ],
        }),
        description: funcs.valuesFromArray({
          values: [
            "Very carefully",
            "Very focused",
            "Remember to stretch",
            "Keep things clean",
          ],
        }),
      },
    },
  }));
};

seedDb()
  .then(() => {
    console.log("Database was seeded succesfully");
    return pool.end();
  })
  .catch((err) => {
    console.log(err);
    return pool.end();
  });
