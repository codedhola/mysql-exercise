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