<template>
  <div>
    <table border="1">
      <tr>
        <th>key</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>cid</td>
        <td>chat id，每个chat id对应一组弹幕池
          如填了 aid, 这个字段不填也没关系
        </td>
      </tr>
      <tr>
        <td>aid</td>
        <td>article id, 视频的av号
          就是B站的 avxxxx 后面的数字
        </td>
      </tr>
      <tr>
        <td>bvid</td>
        <td>bilibili video id, 视频的bv号
          2020.03 时候, B站把 AV 号根据一定的算法转成这个了
          如果填了 bvid, 那么 aid 不填也可以
        </td>
      </tr>
      <tr>
        <td>page</td>
        <td>第几个视频, 起始下标为 1 (默认值也是为1)
          就是B站视频, 选集里的, 第几个视频
        </td>
      </tr>
      <tr>
        <td>as_wide</td>
        <td>是否宽屏
          1: 宽屏, 0: 小屏
        </td>
      </tr>
      <tr>
        <td>danmaku</td>
        <td>是否开启弹幕
          1: 开启(默认), 0: 关闭
        </td>
      </tr>
      <tr>
        <td>t</td>
        <td>打开时, 自动跳转到某个时间, 并且自动播放(单位秒)
          比如 t=60, 那么自动跳转到1分钟, 且自动播放
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "bilibili"
  };
</script>

<style scoped>

</style>
