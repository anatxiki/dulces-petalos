// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a GET /user request
  rest.get(
    "https://dulces-petalos.herokuapp.com/api/product",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            name: "Orquídea",
          },
          {
            id: "ND1elEt4nqZrCeFflDUZ2",
            name: "Rosa de damasco",
          },
        ])
      );
    }
  ),
];
