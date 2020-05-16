// 工具文件

// 验证账号的正则  4到16位（字母，数字，下划线，减号）
const regUsername = /^[a-zA-Z]\w{3,15}$/
// 验证密码的正则  6到12位 （字母和数字的组合）
const regPassword = /^[a-zA-Z0-9]{6,12}$/
// 验证手机号的正则
const regMobile = /^13(\d{9})$|^15(\d{9})$|^189(\d{8})$/


module.exports = {
    regUsername,
    regPassword,
    regMobile,
}