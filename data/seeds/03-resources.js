exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "superman", description: "" },
    { name: "software engineer", description: "knows how to code" },
    { name: "scientist", description: "" },
    { name: "meeting room", description: "" },
    { name: "software license", description: "MIT" },
    { name: "tools", description: "" }
  ]);
};
