exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          name: "Cook Breakfast",
          description: "Cook a 3 course meal for breakfast",
          completed: false
        },
        {
          name: "Cook Lunch",
          description: "Cook a 3 course meal for lunch",
          completed: false
        },
        {
          name: "Cook Dinner",
          description: "Cook a 3 course meal for dinner",
          completed: false
        }
      ]);
    });
};
