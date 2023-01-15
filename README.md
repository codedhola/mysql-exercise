# Postgresql 

## RELATIVE TO MYSQL
**CREATE A TABLE**
```sql
  CREATE TABLE person(id INT SERIAL , first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20), age INT NOT NULL, email VARCHAR(50) , phone INT, dob TIMESTAMP DEFAULT NOW(), gender VARCHAR(10) CHECK(gender = 'male' or gender = 'female') );
```
