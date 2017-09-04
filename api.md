### RESTful API 约束文档

#### 错误处理
在接口处理发生错误的时候，如果是客户端请求参数导致的错误，我们会返回 4xx 状态码，如果是服务端自身的处理逻辑错误，我们会返回 5xx 状态码。所有的异常对象都是对这个异常状态的描述，其中 error 字段是错误的描述，detail 字段（可选）是导致错误的详细原因。

例如，当客户端传递的参数异常时，我们可能返回一个响应，状态码为 422，返回响应体为：

```
{
  "error": "Validation Failed",
  "detail": [ { "message": "required", "field": "title", "code": "missing_field" } ]
}
```

#### 登录

- GET /api/admin/login
- 相应状态码：200
- 响应体

```
{
  success: true | false,
  message: '',
}
```



  
  
