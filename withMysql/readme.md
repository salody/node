* 为本地Mysql设置密码

```
mysqladmin -u root password 'password'
```
* 修改mysql数据库root密码

The best answer I got onlineMy mysql version is 5.7.16, For those who hasn't solved the problem:  
  1. Stop MYSQL Server 
  ```
  sudo /usr/local/mysql/support-files/mysql.server stop
  ``` 
  2. Open terminal and enter: cd /usr/local/mysql/bin/   
  3. Enter: sudo su  , then enter your mac password
  4. Enter: sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables  
  5. Open a new terminal tab and enter: sudo /usr/local/mysql/bin/mysql -u root  
  6. Enter: UPDATE mysql.user SET authentication_string=PASSWORD('YOUR NEW MYSQL PASSWORD') WHERE User='root';  
  7. Enter: FLUSH PRIVILEGES;  
  8.Enter: \q  Hope this might help you, it took me almost half a day to find the solution, and it works just fine to me.