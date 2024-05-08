delimiter //

drop trigger if exists coach_has_contract //

create trigger coach_has_contract
before insert on team for each row

begin
	declare count int;
	select count(*) into count from team T 
    where T.coach_username = new.coach_username 
		and (new.contract_start between T.contract_start and T.contract_finish
			or new.contract_finish between T.contract_start and T.contract_finish);
	if count > 0 then
		signal sqlstate '45000' set message_text = "Coach has contract";
	end if;
end

//
delimiter ;