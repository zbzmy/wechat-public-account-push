/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe04ed777f9870be0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8b8eeedc1ac29c68ca54830aab7d758b',

  PROVINCE: '江苏',
  CITY: '常州',

  USERS: ["ZMY912116"],
    {
      // 想要发送的人的名字
      name: '马叶',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1CTX6H32R-kUHaF5agqq0RGARyI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	nH-0dJwed1vCSsw8mD-S9tSK3MI8tY1C6wHBZRuoVaY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2003', date: '06-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '马叶', year: '2003', date: '06-01',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '07-27',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-27' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	nH-0dJwed1vCSsw8mD-S9tSK3MI8tY1C6wHBZRuoVaY',

  CALLBACK_USERS: ["Kmynsty"]
    {
      name: '赵本周',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1CTX6MhE3RPBI9pCUI0s_P8KYkU',
    }
  ],

}

module.exports = USER_CONFIG

