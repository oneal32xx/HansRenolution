"use strict";(self.webpackChunkhans_renolution=self.webpackChunkhans_renolution||[]).push([[181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u5982\u4f55\u5728 Net 7 Web api \u5c08\u6848\u4f7f\u7528 JWT \u9a57\u8b49\u6388\u6b0a",sidebar_position:1,sidebar_label:"\u5982\u4f55\u5728 Net 7 Web api \u5c08\u6848\u4f7f\u7528 JWT \u9a57\u8b49\u6388\u6b0a",description:"\u5982\u4f55\u5728 Net 7 Web api \u5c08\u6848\u4f7f\u7528 JWT \u9a57\u8b49\u6388\u6b0a",tags:["article","jwt","Net7"],authors:"H.J"},s=void 0,l={unversionedId:"net/net7_webapijwt",id:"net/net7_webapijwt",title:"\u5982\u4f55\u5728 Net 7 Web api \u5c08\u6848\u4f7f\u7528 JWT \u9a57\u8b49\u6388\u6b0a",description:"\u5982\u4f55\u5728 Net 7 Web api \u5c08\u6848\u4f7f\u7528 JWT \u9a57\u8b49\u6388\u6b0a",source:"@site/docs/net/net7_webapijwt.md",sourceDirName:"net",slug:"/net/net7_webapijwt",permalink:"/docs/net/net7_webapijwt",draft:!1,tags:[{label:"article",permalink:"/docs/tags/article"},{label:"jwt",permalink:"/docs/tags/jwt"},{label:"Net7",permalink:"/docs/tags/net-7"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u5982\u4f55\u5728 Net 7 Web api \u5c08\u6848\u4f7f\u7528 JWT \u9a57\u8b49\u6388\u6b0a",sidebar_position:1,sidebar_label:"\u5982\u4f55\u5728 Net 7 Web api \u5c08\u6848\u4f7f\u7528 JWT \u9a57\u8b49\u6388\u6b0a",description:"\u5982\u4f55\u5728 Net 7 Web api \u5c08\u6848\u4f7f\u7528 JWT \u9a57\u8b49\u6388\u6b0a",tags:["article","jwt","Net7"],authors:"H.J"},sidebar:"tutorialSidebar",previous:{title:"Net",permalink:"/docs/category/net"},next:{title:"Markdown",permalink:"/docs/category/markdown"}},o={},u=[{value:".Net 7 Webapi JWT Demo",id:"net-7-webapi-jwt-demo",level:2},{value:"\u5efa\u7acb<code>\u7522\u751f\uff06\u9a57\u8b49 JWT Token</code>\u7684\u65b9\u6cd5",id:"\u5efa\u7acb\u7522\u751f\u9a57\u8b49-jwt-token\u7684\u65b9\u6cd5",level:3},{value:"\u5efa\u7acb User \u6e2c\u8a66\u8cc7\u6599\u4ee5\u53ca User \u767b\u5165API",id:"\u5efa\u7acb-user-\u6e2c\u8a66\u8cc7\u6599\u4ee5\u53ca-user-\u767b\u5165api",level:3},{value:"\u5efa\u7acb<code>JwtMiddleware</code>",id:"\u5efa\u7acbjwtmiddleware",level:3},{value:"\u5efa\u7acb<code>AuthorizeAttribute</code>",id:"\u5efa\u7acbauthorizeattribute",level:3},{value:"\u6e2c\u8a66 Jwt \u9a57\u8b49\u6388\u6b0a",id:"\u6e2c\u8a66-jwt-\u9a57\u8b49\u6388\u6b0a",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:3},{value:"GitHub \u9023\u7d50",id:"github-\u9023\u7d50",level:4},{value:"\u53c3\u8003",id:"\u53c3\u8003",level:4}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"net-7-webapi-jwt-demo"},".Net 7 Webapi JWT Demo"),(0,a.kt)("p",null,"\u4e4b\u524d\u5728 Medium \u7684\u6587\u7ae0\uff0c\u5df2\u7d93\u6709\u4ecb\u7d39\u904e JWT \u6982\u5ff5\uff0c\u6545\u9019\u6b21\u91cd\u9ede\u76f4\u63a5\u653e\u5728 Net7 \u5be6\u4f5c\u7684\u7a0b\u5f0f\u78bc\uff0c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Medium \u6587\u7ae0\u9023\u7d50\n",(0,a.kt)("a",{parentName:"li",href:"https://medium.com/hans-revolution/c-json-web-token-jwt-%E8%AA%8D%E8%AD%89-authentication-%E6%8E%88%E6%AC%8A-authorization-409b5c000032"},"[C#] JSON Web Token(JWT)\u8a8d\u8b49(authentication)\u6388\u6b0a(authorization)"))),(0,a.kt)("p",null,"\u9019\u6b21\u4f7f\u7528\u7684\u958b\u767c\u5de5\u5177\u70baVisual Studio 2022 for Mac\uff0c\u6211\u5011\u76f4\u63a5\u7528 IDE \u5efa\u7acb\u4e00\u500b\uff37ebapi\u5c08\u6848\n",(0,a.kt)("img",{alt:"\u5efa\u7acb\u5c08\u6848",src:n(2600).Z,width:"1788",height:"1266"}),(0,a.kt)("br",{parentName:"p"}),"\n","\u76f4\u63a5\u57f7\u884c\u5075\u932f\uff0c\u5c31\u6703\u770b\u5230 Swagger \u9801\u9762 \u88cf\u982d\u53ea\u6709\u4e00\u96bb WeatherForecast API\uff0c\u5230\u9019\u908a\uff0c\u4ee3\u8868\u6211\u5011 Web API \u5c08\u6848\u5df2\u7d93\u5efa\u7acb\u6210\u529f\u4e86\uff01\u5982\u4e0b\u5716",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Swagger \u756b\u9762",src:n(1425).Z,width:"2400",height:"1290"})),(0,a.kt)("p",null,"\u4f46\u9019\u6642\u5019\u9084\u6c92\u6709\u9a57\u8b49\u7684\u6a5f\u5236\uff0c\u6240\u4ee5\u63a5\u4e0b\u4f86\u6211\u5011\u958b\u59cb\u4eca\u5929\u7684\u91cd\u9ede\uff01\u4e3b\u8981\u5206\u70ba\u4ee5\u4e0b\u5e7e\u500b\u91cd\u9ede"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb",(0,a.kt)("inlineCode",{parentName:"li"},"\u7522\u751f\uff06\u9a57\u8b49 JWT Token"),"\u7684\u65b9\u6cd5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u65bc\u7522\u751f\uff06\u9a57\u8b49JWT Token\u662f\u5426\u6709\u6548"))),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb User \u6e2c\u8a66\u8cc7\u6599\u4ee5\u53ca User \u767b\u5165API"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb",(0,a.kt)("inlineCode",{parentName:"li"},"JwtMiddleware"),"  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u7576\u6709 Request \u5e36 JWT Token \u9032 API \u6642\uff0c\u5c31\u6703\u5148\u9a57\u8b49JWT Token \u662f\u5426\u6709\u6548\uff0c\u4e26\u5c07\u89e3\u6790\u5f8c\u7684Claims\u5b58\u5165Context"))),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb",(0,a.kt)("inlineCode",{parentName:"li"},"AuthorizeAttribute"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8b93\u9700\u8981\u6388\u6b0a\u7684 Controller \u639b\u4e0a\u9019\u500b Attribute \u4e4b\u5f8c\uff0c\u624d\u64c1\u6709\u5b58\u53d6\u7684\u6b0a\u9650"))),(0,a.kt)("li",{parentName:"ol"},"\u6e2c\u8a66 Jwt \u9a57\u8b49\u6388\u6b0a")),(0,a.kt)("h3",{id:"\u5efa\u7acb\u7522\u751f\u9a57\u8b49-jwt-token\u7684\u65b9\u6cd5"},"\u5efa\u7acb",(0,a.kt)("inlineCode",{parentName:"h3"},"\u7522\u751f\uff06\u9a57\u8b49 JWT Token"),"\u7684\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Authorization/JwtUtils.cs" showLineNumbers',title:'"Authorization/JwtUtils.cs"',showLineNumbers:!0},'        public string GenerateJwtToken(User user)\n        {\n            // generate token that is valid for 7 days\n            var tokenHandler = new JwtSecurityTokenHandler();\n            var key = Encoding.ASCII.GetBytes(_appSettings.Secret!);\n            var tokenDescriptor = new SecurityTokenDescriptor\n            {\n                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),\n                Expires = DateTime.UtcNow.AddDays(7),\n                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)\n            };\n            var token = tokenHandler.CreateToken(tokenDescriptor);\n            return tokenHandler.WriteToken(token);\n        }\n\n        public int? ValidateJwtToken(string? token)\n        {\n            if (token == null)\n                return null;\n\n            var tokenHandler = new JwtSecurityTokenHandler();\n            var key = Encoding.ASCII.GetBytes(_appSettings.Secret!);\n            try\n            {\n                tokenHandler.ValidateToken(token, new TokenValidationParameters\n                {\n                    ValidateIssuerSigningKey = true,\n                    IssuerSigningKey = new SymmetricSecurityKey(key),\n                    ValidateIssuer = false,\n                    ValidateAudience = false,\n                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)\n                    ClockSkew = TimeSpan.Zero\n                }, out SecurityToken validatedToken);\n\n                var jwtToken = (JwtSecurityToken)validatedToken;\n                var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);\n\n                // return user id from JWT token if validation successful\n                return userId;\n            }\n            catch\n            {\n                // return null if validation fails\n                return null;\n            }\n        }\n')),(0,a.kt)("h3",{id:"\u5efa\u7acb-user-\u6e2c\u8a66\u8cc7\u6599\u4ee5\u53ca-user-\u767b\u5165api"},"\u5efa\u7acb User \u6e2c\u8a66\u8cc7\u6599\u4ee5\u53ca User \u767b\u5165API"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u5011\u5efa\u7acb User \u7684 DataModel\uff0c\u9019\u90e8\u5206\u5c31\u662f\u65b0\u589e\u4e00\u500b User class \u50c5\u6b64\u800c\u5df2\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Entities/User.cs" showLineNumbers',title:'"Entities/User.cs"',showLineNumbers:!0},"    public class User\n    {\n        public int Id { get; set; }\n        public string? FirstName { get; set; }\n        public string? LastName { get; set; }\n        public string? Username { get; set; }\n\n        [JsonIgnore]\n        public string? Password { get; set; }\n    }\n")),(0,a.kt)("p",null,"\u5be6\u52d9\u4e0a User\u8cc7\u6599\u61c9\u8a72\u8981\u4f86\u81ea\u8cc7\u6599\u5eab\uff0c\u4f46\u6211\u5011\u9019\u6b21\u91cd\u9ede\u5728\u65bcJWT\u9a57\u8b49\u6388\u6b0a\uff0c\u6240\u4ee5\u6211\u5011\u7528 hardcode \u7684\u65b9\u5f0f\u76f4\u63a5\u5efa\u7acb User \u5047\u8cc7\u6599\uff0c\n\u5982\u7a0b\u5f0f\u78bc 13~15 \u884c\u6211\u5011\u65b0\u589e\u4e86\u4e09\u7b46\u5047\u8cc7\u6599\uff0c\u63a5\u8457\u5efa\u7acb Authenticate \u65b9\u6cd5\uff0c\u76ee\u7684\u5728\u9a57\u8b49\u6211\u5011\u50b3\u5165\u7684\u5e33\u865f\u5bc6\u78bc\uff0c\u662f\u5426\u6709\u5728\u6211\u5011\u7684\u5047\u8cc7\u6599\u88e1\u9762\uff0e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Services/UserService.cs" showLineNumbers',title:'"Services/UserService.cs"',showLineNumbers:!0},'   public interface IUserService\n    {\n        AuthenticateResponse? Authenticate(AuthenticateRequest model);\n        IEnumerable<User> GetAll();\n        User? GetById(int id);\n    }\n\n    public class UserService : IUserService\n    {\n        // users hardcoded for simplicity, store in a db with hashed passwords in production applications\n        private List<User> _users = new List<User>\n    {\n        // highlight-start\n        new User { Id = 1, FirstName = "User01", LastName = "User01", Username = "test", Password = "test" },\n        new User { Id = 2, FirstName = "User02", LastName = "User02", Username = "test02", Password = "test" },\n        new User { Id = 3, FirstName = "User03", LastName = "User03", Username = "test03", Password = "test" }\n        // highlight-end\n    };\n\n        private readonly IJwtUtils _jwtUtils;\n\n        public UserService(IJwtUtils jwtUtils)\n        {\n            _jwtUtils = jwtUtils;\n        }\n\n        public AuthenticateResponse? Authenticate(AuthenticateRequest model)\n        {\n            var user = _users.SingleOrDefault(x => x.Username == model.Username && x.Password == model.Password);\n\n            // return null if user not found\n            if (user == null) return null;\n\n            // authentication successful so generate jwt token\n            var token = _jwtUtils.GenerateJwtToken(user);\n\n            return new AuthenticateResponse(user, token);\n        }\n\n        public IEnumerable<User> GetAll()\n        {\n            return _users;\n        }\n\n        public User? GetById(int id)\n        {\n            return _users.FirstOrDefault(x => x.Id == id);\n        }\n    }\n\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u8981\u5efa\u7acb User \u767b\u5165\u7684 API\uff0c\u76f4\u63a5\u5efa\u7acb UserController\uff0c\u5167\u5bb9\u5982\u4e0b\uff0c\n\u5171\u6709\u5169\u96bbAPI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Authenticate")," \u7528\u4f86\u9a57\u8b49User"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GetAll")," \u53d6\u5f97\u6240\u6709User\u8cc7\u6599(\u9700\u8981\u6388\u6b0a)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controller/UserController.cs" showLineNumbers',title:'"Controller/UserController.cs"',showLineNumbers:!0},'    [ApiController]\n    [Route("[controller]")]\n    public class UsersController : ControllerBase\n    {\n        private IUserService _userService;\n\n        public UsersController(IUserService userService)\n        {\n            _userService = userService;\n        }\n\n        [AllowAnonymous]\n        [HttpPost("authenticate")]\n        public IActionResult Authenticate(AuthenticateRequest model)\n        {\n            var response = _userService.Authenticate(model);\n\n            if (response == null)\n                return BadRequest(new { message = "Username or password is incorrect" });\n\n            return Ok(response);\n        }\n\n        [HttpGet]\n        public IActionResult GetAll()\n        {\n            var users = _userService.GetAll();\n            return Ok(users);\n        }\n    }\n\n')),(0,a.kt)("h3",{id:"\u5efa\u7acbjwtmiddleware"},"\u5efa\u7acb",(0,a.kt)("inlineCode",{parentName:"h3"},"JwtMiddleware")),(0,a.kt)("p",null,"\u91cd\u9ede\u7a0b\u5f0f\u78bc 12~18 \u884c\nJwtMiddleware \u64f7\u53d6\u5230 Header \u4e2d\u7684 Authorization Bearer Token \u6642\uff0c\u5c31\u4f7f\u7528\u6211\u5011\u7b2c\u4e00\u6b65\u9a5f\u5275\u5efa\u7684 ValidateToken \u65b9\u6cd5\uff0c\n\u9a57\u8b49 Token \u6709\u6548\u4e4b\u5f8c\uff0c\u5c31\u6703\u628a UserId \u5b58\u5165 Context \u4e4b\u4e2d\uff0e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Authorization/JwtMiddleware.cs" showLineNumbers',title:'"Authorization/JwtMiddleware.cs"',showLineNumbers:!0},'    public class JwtMiddleware\n    {\n        private readonly RequestDelegate _next;\n\n        public JwtMiddleware(RequestDelegate next)\n        {\n            _next = next;\n        }\n\n        public async Task Invoke(HttpContext context, IUserService userService, IJwtUtils jwtUtils)\n        { \n            // highlight-start\n            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();\n            var userId = jwtUtils.ValidateJwtToken(token);\n            if (userId != null)\n            {\n                // attach user to context on successful jwt validation\n                context.Items["User"] = userService.GetById(userId.Value);\n            }\n            // highlight-end\n            await _next(context);\n        }\n    }\n')),(0,a.kt)("h3",{id:"\u5efa\u7acbauthorizeattribute"},"\u5efa\u7acb",(0,a.kt)("inlineCode",{parentName:"h3"},"AuthorizeAttribute")),(0,a.kt)("p",null,"\u9019\u908a\u6211\u5011\u5be6\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthorizeAttribute")," \u7e7c\u627f\u4e86 Attribute, IAuthorizationFilter\uff0c\n\u5728\u9019\u908a\u4e3b\u8981\u63a5\u7e8c\u6211\u5011\u4e0a\u4e00\u6b65\u9a5f\u5728 JwtMiddleware \u88e1\u9762\uff0c\u7576 User \u6709\u5e36\u5165JWT Token\u4e26\u4e14\u9a57\u8b49\u6210\u529f\uff0c\u5c31\u6703\u628a User \u767b\u5165\u8cc7\u8a0a\u5b58\u5165 context \u4e4b\u4e2d\uff0c\n\u7136\u5f8c OnAuthorization \u65b9\u6cd5\u5c31\u53ef\u4ee5\u53d6\u51fa context \u88e1\u9762\u7684 User \u8cc7\u8a0a\uff0c\u5224\u65b7\u662f\u5426\u6709\u6b0a\u9650\u53ef\u4ee5\u4f7f\u7528 API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Authorization/AuthorizeAttribute.cs" showLineNumbers',title:'"Authorization/AuthorizeAttribute.cs"',showLineNumbers:!0},'    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]\n    public class AuthorizeAttribute : Attribute, IAuthorizationFilter\n    {\n        public void OnAuthorization(AuthorizationFilterContext context)\n        {\n            // skip authorization if action is decorated with [AllowAnonymous] attribute\n            var allowAnonymous = context.ActionDescriptor.EndpointMetadata.OfType<AllowAnonymousAttribute>().Any();\n            if (allowAnonymous)\n                return;\n\n            // authorization\n            var user = (User?)context.HttpContext.Items["User"];\n            if (user == null)\n            {\n                // not logged in or role not authorized\n                context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };\n            }\n        }\n    }\n')),(0,a.kt)("h3",{id:"\u6e2c\u8a66-jwt-\u9a57\u8b49\u6388\u6b0a"},"\u6e2c\u8a66 Jwt \u9a57\u8b49\u6388\u6b0a"),(0,a.kt)("p",null,"\u6211\u5011\u5c07\u5beb\u597d\u7684\u7a0b\u5f0f Run \u8d77\u4f86\uff0c\u6703\u770b\u5230\u6211\u5011\u525b\u525b\u65b0\u589e\u7684 Users API \u5df2\u7d93\u5728 Swagger Ui \u5217\u8868\u4e0a\u9762\u4e86\n",(0,a.kt)("img",{alt:"Test Jwt",src:n(3558).Z,width:"2344",height:"306"})),(0,a.kt)("p",null,"\u6211\u5011\u4f7f\u7528 Postman \u4f86\u6e2c\u8a66 API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76f4\u63a5\u547c\u53eb Users\uff0c\u6703\u767c\u73fe API \u56de\u50b3 ",(0,a.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," \u56e0\u70ba\u6211\u5011\u9084\u6c92\u6709\u7d93\u904e\u6388\u6b0a\uff0c\u6240\u4ee5\u88ab\u64cb\u4e86\u4e0b\u4f86\uff01\n",(0,a.kt)("img",{alt:"Login401",src:n(2310).Z,width:"2034",height:"826"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6a21\u64ec\u4e00\u4e0b\u547c\u53eb Users/authenticate \u4f86\u505a\u767b\u5165\uff0cAPI \u56de\u50b3 200 \u4e26\u5c07 Jwt Token \u56de\u50b3\u7d66\u6211\u5011\n",(0,a.kt)("img",{alt:"Login200",src:n(3221).Z,width:"2006",height:"1042"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u73fe\u5728\u5c07 Jwt Token \u653e\u5165Header\u4e2d\u7684 Bearer Token \uff0c\u5728\u547c\u53eb\u4e00\u6b21 Users\uff0c\u6703\u767c\u73fe API \u56de\u50b3 200 \u4e26\u4e14\u5c07\u6211\u5011\u5efa\u7acb\u7684\u5047\u8cc7\u6599\u6210\u529f\u56de\u50b3\uff01\n",(0,a.kt)("img",{alt:"GetUserOk",src:n(86).Z,width:"2002",height:"1176"})))),(0,a.kt)("h3",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,a.kt)("p",null,"\u96d6\u7136 Microsoft \u5718\u968a\u91dd\u5c0d\u5c08\u6848\u7684 JWT \u8a2d\u5b9a\u512a\u5316\u4e86\u8a31\u591a\uff0c\u4f7f\u5f97\u65b0\u5c08\u6848\u5728\u8a2d\u5b9a\u4f7f\u7528 JWT \u9a57\u8b49\u7684\u6d41\u7a0b\u8b8a\u5f97\u7c21\u55ae\u8a31\u591a\uff0c\u4f46\u5be6\u52d9\u4e0a\u9084\u662f\u6709\u8a31\u591a\u8981\u5ba2\u88fd\u5316\u7684\u90e8\u5206\uff0c\n\u6240\u4ee5\u9019\u5728\u908a\u6211\u5011\u5f9e\u982d\u958b\u59cb\u7528 .Net 7 \u5efa\u7acb WebAPI \u65b0\u5c08\u6848\uff0c\u4e26\u5be6\u4f5c Middleware \u53ca Attribute\uff0c \u8b93 JWT \u9a57\u8b49\u6388\u6b0a\u638c\u63e1\u5728\u81ea\u5df1\u624b\u4e2d\uff0c\u4e5f\u65b9\u4fbf\u6211\u5011\u5ba2\u88fd\u5316\uff0e"),(0,a.kt)("p",null,"\u5728\u5be6\u52d9\u5efa\u8b70\u4ee5\u4e0b\u5e7e\u9ede\u4e8b\u9805\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"JWT Secret Key \u5efa\u8b70\u96a8\u6a5f\u4e82\u6578\u7522\u751f\uff0c\u7db2\u8def\u4e0a\u6709\u8a31\u591a\u514d\u8cbb\u7684\u3112 GUID Generator \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff01"),(0,a.kt)("li",{parentName:"ol"},"\u6388\u6b0a\u5efa\u8b70\u4f7f\u7528 Role-Base \u505a API \u7684\u89d2\u8272\u6b0a\u9650\u63a7\u7ba1\uff0c\u907f\u514d\u6240\u6709\u4eba\u767b\u5165\u4e4b\u5f8c\u6b0a\u9650\u90fd\u4e00\u6a23\uff0e"),(0,a.kt)("li",{parentName:"ol"},"JWT Token \u5bb9\u6613\u88ab\u62c6\u89e3\uff0c\u5982\u679c\u6709\u6a5f\u654f\u8cc7\u6599\uff0c\u4e0d\u61c9\u8a72\u5b58\u5728 JWT \u7684 Payload \u4e4b\u4e2d\uff0e"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u53ef\u4ee5 \u7522\u51fa\u7684 JWT Token \u5efa\u8b70\u5728\u591a\u4e00\u5c64\u52a0\u5bc6\uff0c\u907f\u514d Payload \u88ab\u62c6\u89e3\u62ff\u53bb\u505a\u5176\u4ed6\u4e8b\u60c5\uff0e")),(0,a.kt)("h4",{id:"github-\u9023\u7d50"},"GitHub \u9023\u7d50"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/oneal32xx/Net7Jwt/"},"Net7Jwt")),(0,a.kt)("h4",{id:"\u53c3\u8003"},"\u53c3\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.miniasp.com/post/2022/02/13/How-to-use-JWT-token-based-auth-in-aspnet-core-60"},"How-to-use-JWT-token-based-auth-in-aspnet-core-60")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis/security?view=aspnetcore-7.0"},"Authentication and authorization in minimal APIs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/samples?view=aspnetcore-7.0"},"Authentication samples for ASP.NET Core"))))}p.isMDXComponent=!0},86:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GetUserOk-f0bb882be9c295c2da85198a60ca7aa6.png"},3221:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Login200-d778c5dbf04d43a56bf740d12cd57e21.png"},2310:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Login401-de73f160365337ede7680cdf2c2fac3a.png"},2600:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Net7CreateSln-de070cae1ada6b4c465bbec5c9f22c27.png"},3558:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Net7TestJwt-e05ccebacc131b2ff3d569f9aed3445f.png"},1425:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/swagger-85088b49393dff67abd92cde5da626c0.png"}}]);