## 注意点

* **Disclaimer**: Have in mind, under no circumstances should you ever, (EVER!) have your secret key publicly visible like this. Always put all of your keys in environment variables! I’m only writing it like this for demo purposes.

  永远不要把你的密匙写成这样，让谁都看得见。将你的密匙写入到环境变量里面。

  [Node中使用环境变量来保存密匙](https://hackernoon.com/how-to-use-environment-variables-keep-your-secret-keys-safe-secure-8b1a7877d69c)

* The `jwt.sign()` method takes a payload and the secret key defined in **config.js **as parameters. It creates a unique string of characters representing the payload. In our case, the payload is an object containing only the id of the user.

