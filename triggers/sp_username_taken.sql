delimiter //

drop procedure if exists sp_username_taken //

create procedure sp_username_taken(out count int, in un varchar(500))
begin
	select count(*) into count from dbmanager D, player P, coach C, jury J 
    where un = D.username or 
		un = P.username or 
        un = C.username or 
        un = J.username;
end