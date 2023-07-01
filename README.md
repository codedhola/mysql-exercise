# Postgresql 

## RELATIVE TO MYSQL
**CREATE A TABLE**
```sql
CREATE TABLE person(id INT SERIAL , first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20), age INT NOT NULL, email VARCHAR(50) , phone INT, dob TIMESTAMP DEFAULT NOW(), gender VARCHAR(10) CHECK(gender = 'male' or gender = 'female') );
```
---
**READ A TABLE**
```sql
SELECT * FROM customers 
```
---
**UPDATE A TABLE**
```sql
UPDATE customers SET phone = '+234-8035-603-930' WHERE id = 'idjdj-23993-mdfj';
```
---
**DELETE A TABLE**
```sql
DELETE FROM customers WHERE id = 'cres-233-jfnhdh'; 
```
---

**Still similar to mysql for alter, querying, joins**


## MORE
### *COALESCE* 
COALESE HELPS TO SET A DEFAULT IF THE OPTIONS FOR THE FIRST ARGUMENT IS NOT GIVEN.
For example to update an optional parameter in nodejs if given by the user or not

```sql
UPDATE blog SET title = COALESCE($1, title), body = COALESCE($2, body), state = COALESCE($3, state) WHERE id = $4 RETURNING *;
```
the coalesce is set to the default title if the user didn't pass data

---

### *ALTERING TABLES* 
ALTERING TABLES COULD BE DONE ON BOTH THE TABLES AND COLUMNS, Here are some type of table ALTER

```sql
ALTER TABLE transaction_type RENAME TO transaction;

-- Add a new column
ALTER TABLE sales_item ADD day_of_week VARCHAR(8)

-- Modify a column (Change any Constraint this Way)
ALTER TABLE sales_item ALTER COLUMN day_of_week SET NOT NULL;
ALTER TABLE tableName ALTER COLUMN columnName DROP NOT NULL;

-- Change name of a column
ALTER TABLE sales_item RENAME COLUMN day_of_week TO weekday;

-- Drop a column
ALTER TABLE sales_item DROP COLUMN weekday;

-- Rename table
ALTER TABLE transaction_type RENAME TO transaction;

-- Have to first change data type for zip
ALTER TABLE sales_person ALTER COLUMN zip TYPE INTEGER;

-- ADD Check constraints to a  table
ALTER TABLE "testing" ADD CHECK(state = 'draft' or state = 'publish'); 

```

---

### *INSERT* 
TO INSERT INTO A TABLE

```sql
INSERT INTO person(first_name, last_name, age, email) VALUES('coded', 'hola', 22, 'codedhola2000@gmail.com'), ('shola', 'samuel', 10, 'samuelshola2gmail.com');
```
This insert data into the tables

---

### *WHERE* 
TO INSERT INTO A TABLE

```sql
SELECT * FROM sales_item WHERE discount > .15;

--

SELECT time_order_taken
FROM sales_order
WHERE time_order_taken > '2018-12-01' AND time_order_taken < '2018-12-31';

-- BETWEEN CAN BE USED TO GET SAME RESULT

You can use BETWEEN to get the same results
 
SELECT time_order_taken
FROM sales_order
WHERE time_order_taken BETWEEN '2018-12-01' AND '2018-12-31';

-- ORDER BY

SELECT * FROM sales_item WHERE discount > .15 ORDER BY discount DESC;

-- CONCAT
SELECT CONCAT(first_name,  ' ', last_name) AS Name, phone, state FROM customer WHERE state = 'TX';


-- DISTINCT
-- You can use distinct to eliminate duplicates in results. Get a list of states we have customers in.
 
SELECT DISTINCT state
FROM customer
ORDER BY state;

-- NOT INCLUDING
-- Find all states where we have customers not including 'CA'
 
SELECT DISTINCT state
FROM customer
WHERE state != 'CA'
ORDER BY state;
 
-- The IN phrase can be used to test if a value is in a list. Find customer states that are in my list. You can also use NOT IN.
 
SELECT DISTINCT state
FROM customer
WHERE state IN ('CA', 'NJ')
ORDER BY state;


```
---

**JOINS**
```sql
-- We can get results from multiple tables with either inner joins, outer joins, or unions. The most common join is the inner join. You join data from 2 tables in the FROM clause with the JOIN keyword. The ON keyword is used to define the join condition. Get all items ordered ever and sort them by id while listing their price : 

SELECT item.item_id, sales_item.price
FROM item INNER JOIN sales_item
ON item.id = sales_item.item_id
ORDER BY item_id;

-- Now let's join 3 tables. Get the orders, quantity and the total sale.
 
SELECT sales_order.id, sales_item.quantity, item.price, 
(sales_item.quantity * item.price) AS Total
FROM sales_order
JOIN sales_item
ON sales_item.sales_order_id = sales_order.id
JOIN item
ON item.id = sales_item.item_id


-- A Left Outer Join returns all rows from the table being joined on the left. The Right Outer Join returns all rows from the table on the right. It's common practice to avoid Right Outer joins though.
 
-- Here I'll get product information from 2 tables
 
SELECT name, supplier, price
FROM product LEFT JOIN item
ON item.product_id = product.id
ORDER BY name;

-- Unions combine the results of 2 or more select statements in one result. Each result must return the same number of columns and data in each column must have the same data type.
 
-- Let's say we want to send birthday cards to all customers and sales persons for the month of December we could do this. Always put the Order By statement last. The column names are taken from those provided in the 1st select statement. (We use Extract to get just the month from the birth date)
 
SELECT first_name, last_name, street, city, zip, birth_date
FROM customer
WHERE EXTRACT(MONTH FROM birth_date) = 12
UNION
SELECT first_name, last_name, street, city, zip, birth_date
FROM sales_person
WHERE EXTRACT(MONTH FROM birth_date) = 12
ORDER BY birth_date;





-- SIMILAR LIKE ~ & REGEXP
-- SIMILAR is used to search for simple string matches. Match any customers whose name begins with M
 
SELECT first_name, last_name
FROM customer
WHERE first_name SIMILAR TO 'M%';

-- LIKE
SELECT first_name, last_name
FROM customer
WHERE first_name LIKE 'A_____';


-- Return all customers whose 1st name begins with D, or whose last name ends with an n
 
SELECT first_name, last_name
FROM customer
WHERE first_name SIMILAR TO 'D%' OR last_name SIMILAR TO '%n';



-- REGEXP SLIDE
 
-- REGEXP is used to search for complex patterns using regular expressions. Match 1st name that starts with Ma using the match operator
 
SELECT first_name, last_name
FROM customer
WHERE first_name ~ '^Ma';

-- Match names that end with ez
SELECT first_name, last_name
FROM customer
WHERE last_name ~ 'ez$';

-- Match last names that end with ez or son
SELECT first_name, last_name
FROM customer
WHERE last_name ~ 'ez|son';

-- Last names that contain w, x, y, or z
SELECT first_name, last_name
FROM customer
WHERE last_name ~ '[w-z]';

```


---


**VIEWS**
Views are select statements thats result is stored in your database. Let's create a view that contains our main purchase order info.
```sql
CREATE VIEW purchase_order_overview AS
SELECT sales_order.purchase_order_number, customer.company, 
sales_item.quantity, product.supplier, product.name, item.price, 
--Can’t use total if you want this to be updated Fix Below
(sales_item.quantity * item.price) AS Total,
--Remove concat if you want this to be updatable 
CONCAT(sales_person.first_name, ' ', sales_person.last_name) AS Salesperson
FROM sales_order     -- Join some tables
JOIN sales_item
ON sales_item.sales_order_id = sales_order.id    -- Tables go together by joining on sales order id
-- Any time you join tables you need to find foreign and primary keys that match up
JOIN item
ON item.id = sales_item.item_id    -- Join item as well using matching item id
JOIN customer
ON sales_order.cust_id = customer.id    // Join customer using customer ids
JOIN product
ON product.id = item.product_id
JOIN sales_person
ON sales_person.id = sales_order.sales_person_id
ORDER BY purchase_order_number;

-- When data in the database is updated so is the view. You can use the view in all the same ways you can a regular table. If you want it to be updatable though it can’t include DISTINCT, UNION, Aggregate Functions, GROUP BY or HAVING.

-- Drop a View
DROP VIEW purchase_order_overview;

```
---

---
**FUNCTION**
You can write programs that are similar to traditional programming languages. There are different types of stored programs. Stored Functions can be executed by SQL statements. 
After creating the function they appear in the functions folder. You can see info on the function by using properties on the function.
```sql
CREATE OR REPLACE FUNCTION fn_add(int, int) 
returns INT 
as  'SELECT $1 + $2;'
LANGUAGE SQL;

-- BEST WAY OF WRITING IT IS USING THE $$ SYNMBOL I.E = >

CREATE OR REPLACE FUNCTION fn_minus(int, int) 
returns INT 
as  
$body$
SELECT $1 - $2;
$body$
LANGUAGE SQL;


-- TO MAKE USE OF THE FUNCTION THE CALL IT USING THE 'SELECT'

SELECT fn_minus(25, 10);

-- Functions that Return Void
-- Check if sales_person has a state assigned and if not change it to ‘PA’
CREATE OR REPLACE FUNCTION fn_update_employee_state() 
RETURNS void as
$body$
	UPDATE sales_person
	SET state = 'PA'
	WHERE state is null
$body$
LANGUAGE SQL


-- Get Maximum Product Price
CREATE OR REPLACE FUNCTION fn_max_product_price() 
RETURNS numeric as
$body$
	SELECT MAX(price)
	FROM item
$body$
LANGUAGE SQL


-- Named Parameters
-- Get Number of Customers from Texas using a Named Parameter
CREATE OR REPLACE FUNCTION fn_get_number_customers_from_state(state_name char(2)) 
RETURNS numeric as
$body$
	SELECT count(*)
	FROM customer
	WHERE state = state_name;	
$body$
LANGUAGE SQL;

SELECT fn_get_number_customers_from_state('TX');


--Get names and phone number using function results

SELECT first_name, last_name, phone
FROM fn_get_employees_location('CA');

```
---
