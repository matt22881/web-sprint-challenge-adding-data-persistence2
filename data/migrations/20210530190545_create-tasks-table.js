
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_name').unique().notNullable()
        tbl.string('task_description')
        tbl.boolean('task_completed')
        tbl.integer('project_id')
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
  }
  