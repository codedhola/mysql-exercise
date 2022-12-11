# mysql-exercise
SQL => Structure Query Language

SQL or Sequel is a a special purpose programming language that was created to work with relational database, generally to store data and work with everything data

MySQL is a relational database management system(RDBMS) that makes use of SQL Language

---
### Create Database
```bash
    CREATE DATABASE test;
```
---
### Delete Database
```bash
    DROP DATABASE test;
```
---
### Use Database
```bash
    CREATE DATABASE test1;
    USE test1
```
---
### Create a table 
note: a Table can have only One primary key
```bash
    CREATE TABLE test(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(30),
    PRIMARY KEY(id)
);
```
---
### Delete a table 
```bash
    DROP TABLE test;
```
---
## *CRUD OPERATION*
NOW LET"S CREATE A NEW DATABASE AND TABLE

```bash
    CREATE DATABASE productify;
    use productify;
    CREATE TABLE customers(
        id INT NOT NULL AUTO_INCREMENT,
        firstName VARCHAR(25),
        lastName VARCHAR(25),
        email VARCHAR(25),
        city VARCHAR(25),
        state VARCHAR(25),
        zipCode VARCHAR(25),
        PRIMARY KEY(id)
    );
```
---
## CREATE
### Insert into Database table
```bash
    INSERT INTO customers(firstName, lastName, email, city, state) VALUES ("John", "Tolu", "Tolu@gmail.com", "Surulere", "Lagos");
```
 *You could also INSERT MANY into the database table*
```bash
    INSERT INTO customers(firstName, lastName, email, city, state, zipCode) VALUES ("Coded", "Hola", "codedhola@gmail.com", "Surulere", "Lagos", "100001"), ("Shola", "Dave", "dave@gmail.com", "bariga", "Lagos", "100002");
```
---
## READ
### Select from database table
```bash
    SELECT * FROM customers 
```

---
## UPDATE
### Update data in dtabase table
```bash
    UPDATE customers SET email = "codeboss@gmail.com" where id = 2;
```
---
## DELETE 
### Delete data from database Table
```bash
    DELETE FROM customers WHERE id = 2;
```
---
## ALTER TABLE
Add column 'age' to an existing Table schema with "INT" data type
```bash
    ALTER TABLE customers 
    ADD age INT;
```
Modify a Table
```bash
    ALTER TABLE customers
    MODIFY COLUMN review VARCHAR(240);
```

Delete a Column from a  Table
```bash
    ALTER TABLE customers DROP height;
```
Add a Primary key to a Table
*note: you can only have a single primary key in a table*
```bash
    ALTER TABLE customers
    ADD PRIMARY KEY (id);
```
Remove a Primary key from a table
```bash
    ALTER TABLE table_name
    DROP PRIMARY KEY;
```
---
## FOREIGN KEYS
**Before we start the concept of 'FOREIGN KEYS' we need to create another table that would reference another**
*Lets create a review table for customers*
```bash
    CREATE TABLE reviews(
        id INT AUTO_INCREMENT NOT NULL,
        stars INT,
        comment VARCHAR(255),
        userID INT NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(userID) REFERENCES customers(id)
);
```
**NOTE: We created it own primary key and also a 'userID' which we added as a FOREIGN KEY and also referrence to 'customers' Table**
*The referrence will return error if not found in thee database*

```bash
    INSERT INTO reviews(stars, comment, userID) VALUES(4, "Loving it", 3);
```
--- 
## SELECT QUERYING
**We could select the list we want to retrieve by specifying after the 'SELECT' statement and also choose the order we want with 'ORDER BY' statement** 
```bash
    SELECT firstName, email FROM customers ORDER BY id ASC;
```

**The 'ORDER BY' Arranges the query by it id in an Ascending format 'DESC' is used Arrange in a Descending format**

**To select unique names or value from the database, we use the 'DISTINCT' after the 'SELECT'  statement**

```bash 
    SELECT DISTINT city FROM customers;
```
*This select unique 'city' without repitition* 
**The 'WHERE' CLAUSE IS BE USED MOSTLY USED TO FILTER SELECTION**

```bash
    SELECT * FROM customers
    WHERE age < 20;
```
*This selects only customers with age less than 20 years old another example is using wildcard 'like'*

```bash 
    SELECT * FROM customers
    WHERE firstName LIKE '%co%';
```
*The '%{value}%' means any character could be before and after*

**OR - AND**

```bash
    SELECT * FROM customers
    WHERE firstName LIKE '%co%' OR age > 18;
```

```bash 
    SELECT * FROM customers
    WHERE firstName LIKE '%o%' AND age > 18;
```
**BETWEEN**

```BASH
    SELECT * FROM customers
    WHERE age BETWEEN 19 AND 20;
```

**IN**

```bash
    SELECT * FROM customers 
    WHERE city IN ("surulere" "yaba");
```

## INDEXES
**Index are used to speed up queries, it a pointer to data in the table**
*Indexes are used to find data more quickly and efficiently, users do not see indexes.
put indexes on column that are search often and not on every column*

**Create Index**
```bash
    CREATE INDEX cIndex ON customers(email);
```

**Delete an index**
```bash
    DROP INDEX cIndex ON emails
```

## REFERNCES 

```bash
    CREATE TABLE orders (
        id INT NOT NULL AUTO_INCREMENT,
        orderNumber INT,
        orderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
        productID INT,
        customerID INT,
        PRIMARY KEY(id),
        FOREIGN KEY(productID) REFERENCES products(id),
        FOREIGN KEY(customerID) REFERENCES customers(id)
);
```

```bash 
    CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(70),
    price int,
    PRIMARY KEY(id)
);
```

## JOIN 
*INNER JOIN*
```bash
    SELECT customers.firstName, customers.email, orders.orderDate, orders.orderNumber
    FROM customers INNER JOIN orders
    ON customers.id = orders.customerID
    ORDER BY customers.email;
```
*LEFT JOIN*
```bash
    SELECT products.name, products.price, orders.orderDate, orders.orderNumber
    FROM products LEFT JOIN orders
    ON products.id = orders.customerID
    ORDER BY products.price;
```
*RIGHT JOIN*
```bash
    SELECT products.name, products.price, orders.orderDate, orders.orderNumber
    FROM products RIGHT JOIN orders
    ON products.id = orders.customerID
    ORDER BY products.price;
```

*MULTIPLE JOINS*
```bash
    SELECT products.name, products.price, orders.orderDate, customers.firstName, customers.email, customers.city 
    FROM orders INNER JOIN products
    ON orders.productID = products.id
    INNER JOIN customers
    ON orders.customerID = customers.id;
```

## ALIASES
Aliases are used to give tables or columns temporary name to make them more readable 
```bash 
    SELECT firstName AS "first name" lastName AS "last name" FROM customers;
```

To combine columns we use the CONCAT()

```bash
    SELECT CONCAT(firstName," ", lastName) 
    AS "Name", city, state FROM customers;
```
Aliases could also be used as tables and columns

```bash
    SELECT o.id, o.orderDate, c.firstName, c.email
    FROM customers AS c, orders AS o
```

## CALCS && AGGREGATION
**We could also do some calculations in sql**
Get average age
```bash
    SELECT AVG(age) FROM customers;
```

Count Age
```bash 
    SELECT COUNT(age) FROM customers;
```
Max Age
```bash 
    SELECT MAX(age) FROM customers;
```
MIN Age
```bash 
    SELECT MIN(age) FROM customers;
```
SUM Age
```bash 
    SELECT SUM(age) FROM customers;
```
AGGREGATE
```bash
    SELECT age, COUNT(age)
    FROM customers 
    WHERE age > 30
    GROUP BY age;
```
This code returns the age of number of people greater or equal to 2
```bash
    SELECT age, COUNT(age)
    FROM customers 
    WHERE age > 30
    GROUP BY age
    HAVING COUNT(age) >= 2;
```
CASING
The UCASE function returns an uppercase while the LCASE function returns a lowercase
```bash
    SELECT LCASE(firstName), UCASE(lastName) FROM customers;
```

