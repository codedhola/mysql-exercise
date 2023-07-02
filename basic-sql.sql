CREATE TABLE IF NOT EXISTS STUDENTS

(

    ID                         VARCHAR(20) PRIMARY KEY

  , FIRST_NAME       VARCHAR(100) NOT NULL

  , LAST_NAME        VARCHAR(100) NOT NULL

  , GENDER               VARCHAR(10) CHECK (GENDER IN ('M', 'F', 'Male', 'Female'))

  , AGE                      INT

  , DOB                     DATE

  , GRADE                 FLOAT

  , IS_ACTIVE           BOOLEAN

  , CONSTRAINT CH_STUDENTS_AGE CHECK (AGE > 0)

);


ALTER TABLE STUDENTS DROP COLUMN GRADE; -- Drop a column.

ALTER TABLE STUDENTS ADD COLUMN REGISTER_NO VARCHAR(100); -- Add new column.

ALTER TABLE STUDENTS ALTER COLUMN IS_ACTIVE TYPE VARCHAR(1); -- Change data type of a column.

ALTER TABLE STUDENTS RENAME COLUMN IS_ACTIVE TO ACTIVE; -- Rename a column.

ALTER TABLE STUDENTS ADD CONSTRAINT UNQ_STD UNIQUE (REGISTER_NO); -- Add new constraint

ALTER TABLE STUDENTS DROP CONSTRAINT UNQ_STD; -- Drop a constraint.

ALTER TABLE STUDENTS RENAME TO STUDENTS123; -- Rename a table.


DROP TABLE STUDENTS;


TRUNCATE TABLE STUDENTS; 

INSERT INTO STUDENTS (ID, FIRST_NAME, LAST_NAME, GENDER, AGE, DOB, GRADE, IS_ACTIVE)

VALUES ('STD10251','Minnaminnie','Cleft','Female',8,TO_DATE('2012-02-23', 'YYYY-MM-DD'), 3, TRUE); -- Mention the column names.

INSERT INTO STUDENTS

VALUES ('STD10252','Effie','Emlyn','Female',8,TO_DATE('2012-03-28', 'YYYY-MM-DD'), 3, TRUE); -- Do not mention column names.

INSERT INTO STUDENTS VALUES

        ('STD10253','Kerry','Aysik','Female',8,TO_DATE('2012-01-09', 'YYYY-MM-DD'), 3, TRUE),

        ('STD10254','Jo','Mansfield','Male',8,TO_DATE('2012-03-26', 'YYYY-MM-DD'), 3, TRUE),

        ('STD10255','Elianore','Macon','Female',8,TO_DATE('2012-04-01', 'YYYY-MM-DD'), 3, FALSE); -- Insert multiple records.



UPDATE  STUDENTS

SET     FIRST_NAME = 'James'

WHERE   ID = 'STD10253'; -- Update single column.

UPDATE  STUDENTS

SET     FIRST_NAME = 'Rohan', GRADE = 4

WHERE   ID = 'STD10251'; -- Update multiple columns at once.



DELETE FROM STUDENTS WHERE ID = 'STD10251'; -- Removes only one record.

DELETE FROM STUDENTS; -- Removes all data from table.


SELECT   column_name

FROM     table_name

WHERE   join / filter conditions;

SELECT clause - All the columns which needs to be displayed when the query is executed.

FROM clause - All the tables which are required to execute this query.

WHERE clause - All the join conditions or filter conditions to fetch the desired data.



SELECT  T1.COLUMN1 AS C1, T1.COLUMN2 C2, T2.COLUMN3 AS C3

FROM  TABLE1    T1

JOIN  TABLE2 AS T2 ON T1.C1 = T2.C1 AND T1.C2 = T2.C2;


SELECT * FROM SCHOOL; -- Table contains school name and other school details.

SELECT * FROM SUBJECTS; -- Contains all subjects thought in this school.

SELECT * FROM STAFF; -- All teaching and non teaching staff details are present here.

SELECT * FROM STAFF_SALARY; -- Staff salary can be found in this table.

SELECT * FROM CLASSES; -- Total classes in the school (from Grade 1 to Grade 10) along with subjects thought in each class and the teachers teaching these subjects.

SELECT * FROM STUDENTS; -- Student details including their name, age, gender etc.

SELECT * FROM PARENTS; -- Parents details including their name, address etc.

SELECT * FROM STUDENT_CLASSES; -- Students present in each class (or grade).

SELECT * FROM STUDENT_PARENT; -- Parent of each student can be found here.

SELECT * FROM ADDRESS; -- Address of all staff and students.




SELECT * FROM STUDENTS;   -- Fetch all columns and all records (rows) from table.

SELECT ID, FIRST_NAME FROM STUDENTS; -- Fetch only ID and FIRST_NAME columns from students table.


SELECT * FROM SUBJECTS WHERE SUBJECT_NAME = 'Mathematics'; -- Fetch all records where subject name is Mathematics.

SELECT * FROM SUBJECTS WHERE SUBJECT_NAME <> 'Mathematics'; -- Fetch all records where subject name is not Mathematics.

SELECT * FROM SUBJECTS WHERE SUBJECT_NAME != 'Mathematics'; -- same as above. Both "<>" and "!=" are NOT EQUAL TO operator in SQL.

SELECT * FROM STAFF_SALARY WHERE SALARY > 10000; -- All records where salary is greater than 10000.

SELECT * FROM STAFF_SALARY WHERE SALARY < 10000; -- All records where salary is less than 10000.

SELECT * FROM STAFF_SALARY WHERE SALARY < 10000 ORDER BY SALARY; -- All records where salary is less than 10000 and the output is sorted in ascending order of salary.

SELECT * FROM STAFF_SALARY WHERE SALARY < 10000 ORDER BY SALARY DESC; -- All records where salary is less than 10000 and the output is sorted in descending order of salary.

SELECT * FROM STAFF_SALARY WHERE SALARY >= 10000; -- All records where salary is greater than or equal to 10000.

SELECT * FROM STAFF_SALARY WHERE SALARY <= 10000; -- All records where salary is less than or equal to 10000.



-- ---------------------------------------------------------------------------------------------------


SELECT * FROM STAFF_SALARY WHERE SALARY BETWEEN 5000 AND 10000; -- Fetch all records where salary is between 5000 and 10000.

SELECT * FROM SUBJECTS WHERE SUBJECT_NAME IN ('Mathematics', 'Science', 'Arts'); -- All records where subjects is either Mathematics, Science or Arts.

SELECT * FROM SUBJECTS WHERE SUBJECT_NAME NOT IN ('Mathematics', 'Science', 'Arts'); -- All records where subjects is not Mathematics, Science or Arts.

SELECT * FROM SUBJECTS WHERE SUBJECT_NAME LIKE 'Computer%'; -- Fetch records where subject name has Computer as prefixed. % matches all characters.

SELECT * FROM SUBJECTS WHERE SUBJECT_NAME NOT LIKE 'Computer%'; -- Fetch records where subject name does not have Computer as prefixed. % matches all characters.

SELECT * FROM STAFF WHERE AGE > 50 AND GENDER = 'F'; -- Fetch records where staff is female and is over 50 years of age. AND operator fetches result only if the condition mentioned both on left side and right side of AND operator holds true. In OR operator, atleast any one of the conditions needs to hold true to fetch result.

SELECT * FROM STAFF WHERE FIRST_NAME LIKE 'A%' AND LAST_NAME LIKE 'S%'; -- Fetch record where first name of staff starts with "A" AND last name starts with "S".

SELECT * FROM STAFF WHERE FIRST_NAME LIKE 'A%' OR LAST_NAME LIKE 'S%'; -- Fetch record where first name of staff starts with "A" OR last name starts with "S". Meaning either the first name or the last name condition needs to match for query to return data.

SELECT * FROM STAFF WHERE (FIRST_NAME LIKE 'A%' OR LAST_NAME LIKE 'S%') AND AGE > 50; -- Fetch record where staff is over 50 years of age AND has his first name starting with "A" OR his last name starting with "S".




-- -------------------------------------------------------------------------------------------------------

SELECT (5+2) AS ADDITION;   -- Sum of two numbers. PostgreSQL does not need FROM clause to execute such queries.

SELECT (5-2) AS SUBTRACT;   -- Oracle & MySQL equivalent query would be -->  select (5+2) as Addition FROM DUAL; --> Where dual is a dummy table.

SELECT (5*2) AS MULTIPLY;

SELECT (5/2) AS DIVIDE;   -- Divides 2 numbers and returns whole number.

SELECT (5%2) AS MODULUS;  -- Divides 2 numbers and returns the remainder

SELECT STAFF_TYPE FROM STAFF ; -- Returns lot of duplicate data.

SELECT DISTINCT STAFF_TYPE FROM STAFF ; -- Returns unique values only.

SELECT STAFF_TYPE FROM STAFF LIMIT 5; -- Fetches only the first 5 records from the result.

-- --------------------------------------------------------------------------------------------------------------------------------------------------------

-- CASE statement:  (IF 1 then print True ; IF 0 then print FALSE ; ELSE print -1)

SELECT STAFF_ID, SALARY

, CASE WHEN SALARY >= 10000 THEN 'High Salary'

       WHEN SALARY BETWEEN 5000 AND 10000 THEN 'Average Salary'

       WHEN SALARY < 5000 THEN 'Too Low'

  END AS RANGE

FROM STAFF_SALARY

ORDER BY 2 DESC;


-- ------------------------------------------------------------------------------------------------------------------------------------------------------------


-- TO_CHAR / TO_DATE:

SELECT * FROM STUDENTS WHERE TO_CHAR(DOB,'YYYY') = '2014';

SELECT * FROM STUDENTS WHERE DOB = TO_DATE('13-JAN-2014','DD-MON-YYYY');

-- ----------------------------------------------------
-- #1. Using JOIN keyword between tables in FROM clause.

SELECT  T1.COLUMN1 AS C1, T1.COLUMN2 C2, T2.COLUMN3 AS C3    -- C1, C2, C3 are aliase to the column

  FROM  TABLE1    T1

  JOIN  TABLE2 AS T2 ON T1.C1 = T2.C1 AND T1.C2 = T2.C2;    -- T1, T2 are aliases for table names.


-- --------------------------------------------------------------------------

-- Fetch all the class name where Music is taught as a subject.

SELECT CLASS_NAME

FROM SUBJECTS SUB

JOIN CLASSES CLS ON SUB.SUBJECT_ID = CLS.SUBJECT_ID

WHERE SUBJECT_NAME = 'Music';
-- --------------------------------------------------------


-- Return only the records where there are more than 100 students in each class

SELECT SC.CLASS_ID, COUNT(1) AS "no_of_students"

FROM STUDENT_CLASSES SC

GROUP BY SC.CLASS_ID

HAVING COUNT(1) > 100

ORDER BY SC.CLASS_ID;

-- ----------------------------------------------------------------


-- Parents with more than 1 kid in school.

SELECT PARENT_ID, COUNT(1) AS "no_of_kids"

FROM STUDENT_PARENT SP

GROUP BY PARENT_ID

HAVING COUNT(1) > 1;

-- -------------------------------------------------------------------------------------------------------------

-- SUB QUERY

-- Staff details who’s salary is less than 5000

SELECT STAFF_TYPE, FIRST_NAME, LAST_NAME

FROM  STAFF

WHERE STAFF_ID IN (SELECT STAFF_ID

                     FROM STAFF_SALARY

                    WHERE SALARY < 5000);


-- --------------

-- Fetch the details of parents having more than 1 kids going to this school. Also display student details.

SELECT (P.FIRST_NAME||' '||P.LAST_NAME) AS PARENT_NAME

,    (S.FIRST_NAME||' '||S.LAST_NAME) AS STUDENT_NAME

,    S.AGE AS STUDENT_AGE

,    S.GENDER AS STUDENT_GENDER

,    (ADR.STREET||', '||ADR.CITY||', '||ADR.STATE||', '||ADR.COUNTRY) AS ADDRESS

FROM PARENTS P

JOIN STUDENT_PARENT SP ON P.ID = SP.PARENT_ID

JOIN STUDENTS S ON S.ID = SP.STUDENT_ID

JOIN ADDRESS ADR ON P.ADDRESS_ID = ADR.ADDRESS_ID

WHERE P.ID IN (  SELECT PARENT_ID

                   FROM STUDENT_PARENT SP

               GROUP BY PARENT_ID

                 HAVING COUNT(1) > 1)

ORDER BY 1;


-- -------------------------------------------------------------------------------------



-- THEY ARE 3 INSTANCE WHERE WE USE A SUB QUERY


-- 1). THE 'SELECT' STATEMENT
SELECT name, description, (SELECT AVG(effect)FROM herb) FROM herb; -- A SUBQUERY IN A SELECT STATEMENT

-- 2). THE 'FROM' STATEMENT
SELECT * FROM herb;
SELECT name, description FROM (SELECT * FROM herb) herb;

-- 3) THE 'WHERE' CLAUSE
SELECT * FROM herb WHERE name IN (SELECT name FROM herb WHERE name LIKE '%se%');


-- ---------------------------------------------------------------------------------------------


