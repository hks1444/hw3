delimiter //

drop trigger if exists username_taken_jury //

create trigger username_taken_jury
before insert on jury for each row

begin
	declare count int; 
    call sp_username_taken(count);
	if count > 0 then
        signal sqlstate '45000' set message_text = 'Username already taken';
    end if; 
end
//

delimiter ;
