#!/bin/bash

rm -fr /var/lib/mysql/*
chown -R mysql. /var/lib/mysql
mysqld --initialize-insecure --user=mysql
chown -R mysql. /var/lib/mysql
mysqld -u mysql &
sleep 5
mysql < /base.sql

sleep infinity
