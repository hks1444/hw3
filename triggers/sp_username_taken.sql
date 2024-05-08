delimiter //

drop procedure if exists sp_username_taken //

create procedure sp_username_taken(out count int)
begin
	select count(*) into count from dbmanager D, player P, coach C, jury J 
    where new.username = D.username or new.username = P.username or new.username = C.username or new.username = J.username;
end