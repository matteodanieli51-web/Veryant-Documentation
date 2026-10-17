## Common Table Expressions (CTEs)

A Common Table Expression (CTE) is the result set of a query which exists temporarily and for use only within the context of a larger query. Much like a derived table, the result of a CTE is not stored and exists only for the duration of the query.

CTEs, like database views, enable users to more easily write and maintain complex queries via increased readability and simplification.

A CTE is initiated with the WITH keyword.

```cobol
WITH
expression_name_1 AS
(Query definition 1)
...
[, expression_name_N AS
   (Query definition N)]
```

and is followed by a SELECT statement that reads data from the result of the query definitions, i.e.

```cobol
SELECT field_1, field_2, ..., field_N
  FROM expression_name_1
```

The code from WITH to SELECT must be included in the same embedded SQL block.

### Code example

Let’s say you have a table called *sales* with the following columns: *sale_id*, *product_id*, *quantity*, and *sale_date*. You want to find the total sales per product and the total sales per month.

```cobol
           EXEC SQL 
              WITH total_sales_per_product AS (
                   SELECT product_id, SUM(quantity) AS total_quantity
                     FROM sales
                 GROUP BY product_id ),
                   total_sales_per_month AS (
                   SELECT DATE_TRUNC('month', sale_date) AS sale_month,
                          SUM(quantity) AS total_quantity
                     FROM sales
                 GROUP BY sale_month )
              SELECT p.product_id, p.total_quantity AS product_total
                   , m.sale_month, m.total_quantity AS month_total
                FROM total_sales_per_product p
                JOIN total_sales_per_month m 
                     ON DATE_TRUNC('month', CURRENT_DATE) = m.sale_month
           END-EXEC. 
```
