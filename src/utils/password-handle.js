const crypto = require('crypto'); //node自带的一个库

const md5password = (password) => {
  const md5 = crypto.createHash('md5'); //采用md5加密 返回的是一个对象
  // md5.update(password) 返回的是一个对象
  // digest('hex')返回结果2进制转成16进制 字符串buffer
  // 在调用该函数进行加密的时候，请求的时候会报 500（Internal Server Error） 
  // 的状态码，这个我找了一下，发现调用 update(password) 方法的时候
  // 用户注册的密码必须是字符串类型才可以，如果用户的密码是纯数字的话
  // 在调用该方法的时候，对密码转换为字符串即可
  const result = md5.update(password + '').digest('hex');
  return result;
}

module.exports = md5password;