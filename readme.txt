
第一步
导入mysql数据库docs/fengshop.sql,
修改model/base.js中的数据库连接

cnpm install
2016年12月20日 11:15:27
cnpm install pm2 -g
引入pm2解决子进程假死问题
启动
pm2 start index
热启动并监听代码修改
pm2 start index --watch
访问
127.0.0.1:10087
查看输出
pm2 logs index

初始化日志文件夹
node environment.js

2017年5月4日 11:28:46
锋子
nuke2015
QQ:196971567

