
--以下をhttp://sqlfiddle.com/の左側のウインドウに貼り付けて bild schema

CREATE TABLE users(
  id INT,
  name VARCHAR(10),
  age INT
  );


INSERT INTO users VALUES (1,'太郎1',11);
INSERT INTO users VALUES (2,'太郎2',12);
INSERT INTO users VALUES (3,'太郎3',13);
INSERT INTO users VALUES (4,'太郎4',14);
INSERT INTO users VALUES (5,'太郎5',15);
INSERT INTO users VALUES (6,'太郎6',16);
INSERT INTO users VALUES (7,'太郎7',17);
INSERT INTO users VALUES (8,'太郎8',18);
INSERT INTO users VALUES (9,'太郎9',19);
INSERT INTO users VALUES (10,'太郎10',20);



CREATE TABLE userdetails (
  id INT,
  occupation VARCHAR(1000),
  address  VARCHAR(1000),
  zip_code  VARCHAR(7)
);


INSERT INTO userdetails VALUES (1,'会社員11','東京都墨田区1-1-1','222-001');
INSERT INTO userdetails VALUES (2,'会社員12','東京都墨田区1-1-2','222-002');
INSERT INTO userdetails VALUES (3,'会社員13','東京都墨田区1-1-3','222-003');
INSERT INTO userdetails VALUES (4,'会社員14','東京都墨田区1-1-4','222-004');
INSERT INTO userdetails VALUES (5,'会社員15','東京都墨田区1-1-5','222-005');
INSERT INTO userdetails VALUES (6,'会社員16','東京都墨田区1-1-6','222-006');
INSERT INTO userdetails VALUES (7,'会社員17','東京都墨田区1-1-7','222-007');
INSERT INTO userdetails VALUES (8,'会社員18','東京都墨田区1-1-8','222-008');
INSERT INTO userdetails VALUES (9,'会社員19','東京都墨田区1-1-9','222-009');
INSERT INTO userdetails VALUES (10,'会社員20','東京都墨田区1-1-10','222-010');
INSERT INTO userdetails VALUES (11,'会社員21','東京都墨田区1-1-11','222-011');
INSERT INTO userdetails VALUES (12,'会社員22','東京都墨田区1-1-12','222-012');
INSERT INTO userdetails VALUES (13,'会社員23','東京都墨田区1-1-13','222-013');
INSERT INTO userdetails VALUES (14,'会社員24','東京都墨田区1-1-14','222-014');
INSERT INTO userdetails VALUES (15,'会社員25','東京都墨田区1-1-15','222-015');
INSERT INTO userdetails VALUES (16,'会社員26','東京都墨田区1-1-16','222-016');
INSERT INTO userdetails VALUES (17,'会社員27','東京都墨田区1-1-17','222-017');
INSERT INTO userdetails VALUES (18,'会社員28','東京都墨田区1-1-18','222-018');
INSERT INTO userdetails VALUES (19,'会社員29','東京都墨田区1-1-19','222-019');
INSERT INTO userdetails VALUES (20,'会社員30','東京都墨田区1-1-20','222-020');
