alter table matchsession add constraint slot_constraint check (time_slot > 0 and time_slot < 4);
alter table dbmanager modify column username varchar(500);
alter table dbmanager add primary key (username);