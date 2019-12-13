exports.up = function(knex) {
  return knex.schema
    .createTableIfNotExists("projects", tbl => {
      tbl.increments();
      tbl.string("name").notNullable;
      tbl.string("description");
      tbl.boolean("completed");
    })
    .createTableIfNotExists("tasks", tbl => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTableIfNotExists("resources", tbl => {
      tbl.increments();
      tbl
        .string("name")
        .notNullable()
        .unique();
      tbl.string("description");
    })
    .createTableIfNotExists("project_resources", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
