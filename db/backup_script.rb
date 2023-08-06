# system(`echo heroku pg:backups:capture`)
# system(`echo heroku pg:backups:download`)

dump_version = 31

system(`echo pg_restore --verbose --clean --no-acl --no-owner -h localhost -U adam -d four_minim_sales_development latest.dump.#{dump_version}`)

# heroku pg:backups:capture
# heroku pg:backups:download
# pg_restore --verbose --clean --no-acl --no-owner -h localhost -U adam -d four_minim_sales_development ./db/db_dumps/latest.dump.31

# select first_name, last_name, kind from orders o 
# join esrog_sets es on o.id = es.order_id 
# join customers c on c.id = o.customer_id 
# --join lulavs l on l.id = es.lulav_id 
# --join hadasims h on h.id = es.hadasim_id 
# --join esrogs e on e.id  = es.esrog_id 
# --join extras e on e.id = es.extra_id 
# order by kind, esrog_price desc, last_name, first_name
