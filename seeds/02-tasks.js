exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          description: "scramble eggs",
          notes: "",
          completed: false,
          project_id: 1
        },
        {
          description: "toast bread",
          notes: "",
          completed: false,
          project_id: 1
        },
        {
          description: "make sandwich",
          notes: "",
          completed: false,
          project_id: 2
        },
        {
          description: "make salad",
          notes: "",
          completed: false,
          project_id: 2
        },
        {
          description: "grill steak",
          notes: "",
          completed: false,
          project_id: 3
        },
        {
          description: "make mashed potatoes",
          notes: "",
          completed: false,
          project_id: 3
        },
        {
          description: "grill veggies",
          notes: "",
          completed: false,
          project_id: 3
        }
      ]);
    });
};
