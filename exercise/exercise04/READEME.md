# 各种express中间件
## express-session
Create a session middleware with the given options.

**Note** Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

**Note** Since version 1.5.0, the cookie-parser middleware no longer needs to be used for this module to work. This module now directly reads and writes cookies on req/res. Using cookie-parser may result in issues if the secret is not the same between this module and cookie-parser.

## cookie-parser
Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.

## body-parser

# pug语法
## 继承 extends block
In a template, a block is simply a “block” of Pug that a child template may replace. This process is recursive.
继承的子页面的block 后面的名字要和父页面中的block的名字对应上。