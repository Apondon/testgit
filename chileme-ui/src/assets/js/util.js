// 将字段转换为汉字
const transKey = str => {
    let s = ''
    switch(str){
        case 'hot':
            s = '拿手菜'
            break
        case 'cool':
            s = '下酒菜'
            break
        case 'soup':
            s = '汤羹'
            break
        case 'staple':
            s = '主食'
            break
        case 'quick':
            s = '方便食品'
            break              
    }
    return s
}




module.exports = {
    transKey
}