#2 
insert into jury (username, password, name, surname, nationality)
values ();

insert into coach (username, password, name, surname, nationality)
values ();

insert into player (username, password, name, surname, date_of_birth, height, weight)
values ();
insert into playerpositions (player_positions_id, username, position)
values (); -- id ve username koddan
insert into playerteams (player_teams_id, username, team)
values (); -- id ve username koddan
-- id ve isim için yardimci
select * from position;
select team_id, team_name from team;

#3
update stadium
set stadium_name = ""
where stadium_name = "";

#4 (foreign key sayesinde diğer yerlerden de silinmeli)
delete from matchsession where session_id = _ID_;

#5.1 (kendi takimi olmasini eklemek lazim)
insert into matchsession (session_id, team_id, stadium_id, time_slot, date, assigned_jury_username)
values ();

#5.2 jury log rating (kendine ait olmayan bir id girerse izin vermemiz lazim, kod veya trigger)
select session_id from matchsession where assigned_jury_username = _NAME_ and rating = null;
update matchsession set rating = _RATING_ where session_id = _ID_;

#6 (kendi takimi olmasini eklemek lazim)
insert into sessionsquads (squad_id, session_id, played_player_username, position_id)
values ();

#7
select stadium_name, stadium_country from stadium;

#8
select avg(rating), count(*) from matchsession M where M.assigned_jury_username = "o_ozcelik";

#9 kodda daha iyi olur, gerekirse buradan destek yapariz

#10.1 
select P.name, P.surname 
from player P
where P.username in
	(select S.played_player_username 
	from sessionsquads S 
	where S.session_id in
		(select session_id from sessionsquads where played_player_username = "c_ozbay")
	and S.played_player_username != "c_ozbay");
    
#10.2
with playercounts as
	(select count(*) as count, A.played_player_username as username from
		(select S.played_player_username 
		from sessionsquads S 
		where S.session_id in
			(select session_id from sessionsquads where played_player_username = "ee_dundar")
		and S.played_player_username != "ee_dundar") A
	group by A.played_player_username)

select avg(height) from player P where P.username in 
(select username from playercounts where count = (select max(count) from playercounts));
