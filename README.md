# stmanag

> 员工管理系统
> CSDN项目开源：http://t.csdnimg.cn/TJ8Bq

##### 运行vue项目：

环境配置：vue2,nodejs:10.24.0

###### vue实战__vue2.0

- 员工管理系统

- 打开项目后很简单两行代码就可以运行

```
 cd stmanag
 npm run dev
```

- 接口管理工具RAP2（可以自己编写）|在线模拟接口工具JSONPlaceholder

  - 点击登录的时候是需要请求登录接口才能够登录
  - 来到员工列表必须请求员工列表对应的接口，才能把数据渲染出来

- 接口测试工具postman（借助工具跑通接口）

  - 进入RAP2点击上面的数据<img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220145236253.png" alt="image-20231220145236253" style="zoom:50%;" />

  - 得到以下链接![image-20231220145522667](http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220145522667.png)

  - 复制接口地址http://rap2api.taobao.org/repository/get到postman，key填id和token,value填后面的数字
  - 出现数据后表示接口是成功的
  - 如果要进行传参（测试平台：JSONPlaceholder-Routes.GET_/commments?postId=1）则key为postId，value为后面的数据
  - post方法是在body里面进行传参（使用JSON形式）

- 数据交互使用Axios（浏览器http库：转换JSON工具等）这个方法跑通接口

  - 在main.js里面挂载到全局

  - 使用方法：this.axios.get(“和postman测试的网址一样(我的这个项目使用的是：http://rap2api.taobao.org/app/mock/304740/login）”)

    ```
    //回调函数，控制台如何打印获取的信息
    .thisss(res=>{
    	console.log(res)
    })
    .catch(err=>){
    	console.error(err)
    }
    ```



  - 至于Axios二次封装的意义：可以定义一些url，请求的响应，拦截等提高开发效率

    ```
    //在service.js进行封装
    baseURL:""//在请求的时候直接进行网址拼接
    ```



- 使用的存储平台是crudapi官网（增删改查接口）

  - 对应student文件的增删改查

  - 进入网址crudapi，点击系统下的关于，点击web管理UI中的链接，其中有写如何对信息进行获取的说明，比如：

    ```
    http://demo.crudapi.cn/api/bussiness/{表名}//对表格进行get，postman也可以测试
    ```

    <img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220162623674.png" alt="image-20231220162623674" style="zoom:33%;" /><img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220162610479.png" alt="image-20231220162610479" style="zoom:33%;" />

    ```
    //对service.js的baseURL进行修改，把crudapi的/api/business写上去
    this.service.post('')//即可进行添加数据
    //index.js有定义'/api’
    ```



- 如何通过在crudapi创建表单成功显示数据

  - 以StudentList.vue为参考

    ```
    188：'/studentss'
    24-32：建立各项数据
    ```

  - 在crudapi的主数据源上创建名为studentss的表单<img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220173652054.png" alt="image-20231220173652054" style="zoom:33%;" /><img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220173709086.png" alt="image-20231220173709086" style="zoom:33%;" /><img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220173725583.png" alt="image-20231220173725583" style="zoom: 33%;" />

- 如何发布项目

  - nginx本地部署（不用打开项目文件运行就能直接访问）

    - 打包项目：进入vue实战_vue2.0/stmanag目录，终端输入：npm run build_
    - 出现dist文件夹<img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220193528489.png" alt="image-20231220193528489" style="zoom: 50%;" />

    - 打开nginx.conf文件，把root后的内容换成dist路径，再修改端口（0-65535）<img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220195229124.png" alt="image-20231220195229124" style="zoom: 80%;" />

    - 运行nginx，验证项目![image-20231220195459022](http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220195459022.png)

    - 验证nginx配置是否正确

      ```
      .\nginx -t -c D:\"Program Files"\nginx-1.24.0\nginx-1.24.0\conf\nginx.conf
      ```

      ![image-20231220200026811](http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220200026811.png)

    - 停止命令：nginx -s quit(完全停止)

    - 对于刷新后出现404问题的解决：再nginx.conf文件中配置<img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220200938724.png" alt="image-20231220200938724" style="zoom: 67%;" />

  - 内网穿透工具[Sunnny-ngrok](https://www.ngrok.cc/user.html),也可以下载下来（自己的电脑运行项目文件，把自己的电脑当作了服务器）

    - 教程参考网址[内网穿透工具--Sunny-Ngrok讲解_sunny内网穿透-CSDN博客](https://blog.csdn.net/weixin_44563573/article/details/120907527)，选择一个免费的服务器，输入正确的http端口即可进行下一步
    - 按照教程输入隧道id，在其他手机或电脑上输入：http://231220.free.idcfengye.com就可以对网站进行访问了<img src="http://fqtypora-test.oss-cn-chengdu.aliyuncs.com/fqtypora-testimage-20231220203339156.png" alt="image-20231220203339156" style="zoom: 50%;" />
