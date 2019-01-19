<template>
  <div id="ctx">
    <table
      class="gridtable"
      v-for="(tableOne) in tableList "
      :key="tableOne.table"
    >
      <h3>{{tableOne.table}}</h3>
      <tr>
        <th
          v-for="(head) in tableOne.header"
          :key="head"
        >{{head}}</th>
      </tr>
      <tr
        v-for="(rowOne,index) in tableOne.rows"
        :key="index"
      >
        <td
          v-for="(colOne,index2) in rowOne"
          :key="index2"
        >{{colOne}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Tables',
  data () {
    return {
      tableList: [
        {
          table: 'user',
          header: ['字段', '类型', '备注'],
          rows: [
            [
              'user_id',
              'int64',
              '主键'
            ],
            [
              'name',
              'varchar(64)',
              '名字 名字 名字 名字 名字 名字 名字 名字 名字 名字 名字 名字 '
            ],
            [
              'mobile',
              'varchar(64)',
              '手机号'
            ]
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
table.gridtable {
  font-family: verdana, arial, sans-serif;
  font-size: 16px;
  color: #666;
  border-width: 1px;
  border-color: #cad9ea;
  border-collapse: collapse;
}
table.gridtable th,
td {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #cad9ea;
}
table.gridtable th {
  background-color: #cce8eb;
}
table.gridtable tr:nth-child(odd) {
  background: #fff;
}
table.gridtable tr:nth-child(even) {
  background: #f5fafa;
}
</style>
