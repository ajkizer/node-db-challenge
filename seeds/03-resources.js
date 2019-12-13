exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        { name: "egg", description: "food" },
        { name: "bread", description: "food" },
        { name: "steak", description: "food" },
        { name: "veggies", description: "food" },
        { name: "potatoes", description: "food" },
        { name: "lunch meat", description: "food" },
        { name: "cheese", description: "food" },
        { name: "kitchen utensils", description: "tools" }
      ]);
    });
};
