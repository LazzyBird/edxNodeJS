"use strict";
const data = [
  {
    id : "boo",
    name: "JFC",
    rrp: "50.00",
    info: "who knows what shit is",
   },
   {
    id : "coo",
    name: "FYI",
    rrp: "10.00",
    info: "nobody knows what shit is",
   }
]
export default async function (fastify) {
  fastify.get("/", async function (request, reply) {{
    return data;
  }})}