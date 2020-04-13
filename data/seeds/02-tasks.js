exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      description: "have a meeting with superman",
      notes: "",
      is_complete: false,
      project_id: 1
    },
    {
      description: "make a plan",
      notes: "",
      is_complete: false,
      project_id: 1
    },
    {
      description: "have a meeting with engineers",
      notes: "share ideas",
      is_complete: false,
      project_id: 2
    },
    {
      description: "divide tasks",
      notes: "divide team according to their functions",
      is_complete: false,
      project_id: 2
    },
    {
      description: "have a meeting with scientists",
      notes: "discuss possibilities",
      is_complete: false,
      project_id: 3
    },
    {
      description: "have a meeting with world leaders",
      notes: "",
      is_complete: false,
      project_id: 4
    },
    {
      description: "reduce carbon emission",
      notes: "",
      is_complete: false,
      project_id: 4
    }
  ]);
};
