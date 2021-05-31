
exports.up = function(knex) {
    return knex.schema.createTable('project_resources', tbl => {
        tbl.increments('projectResources_id')
        tbl.integer('project_id')
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            
    })
    
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
  };
  