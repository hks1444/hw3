delimiter //

drop trigger if exists session_error //

create trigger session_error
before insert on matchsession for each row

begin
	declare count_session int;
    declare count_jury int;
    
    -- is there a conflict
    select count(*) into count_session from matchsession M
    where new.stadium_id = M.stadium_id and new.date = M.date 
			and (new.time_slot = M.time_slot or new.time_slot = M.time_slot-1 or new.time_slot = M.time_slot+1);
         
	-- does the jury exist
	select count(*) into count_jury from jury J where new.assigned_jury_username = J.username;
    
	if count_session > 0 or count_jury = 0 then
        signal sqlstate '45000' set message_text = "Illegal input (conflict, non-existing jury or unaccessible team) ";
    end if; 
end
//

delimiter ;
