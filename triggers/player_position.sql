delimiter //

drop trigger if exists player_position //

create trigger player_position
before insert on sessionsquads for each row

begin
	declare count int;
    select count(*) into count from playerpositions PP 
    where PP.username = new.played_player_username and PP.position = new.position_id; 
	if count = 0 then
		signal sqlstate '45000' set message_text = "Illegal position for player";
	end if;
end

//
delimiter ;