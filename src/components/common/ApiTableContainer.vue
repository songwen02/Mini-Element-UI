<template>
  <section>
    <h2 class="title_api">{{ indexTitle }}</h2>
    <h3 class="title_row">{{ indexSubTitle }}</h3>
    <table class="apiTable">
      <thead>
      <tr>
        <th v-for="item in headTitle" :key="item">{{ item }}</th>
      </tr>
      </thead>

      <tbody>
      <!--      align-->
      <tr v-for="data in bodyData">
        <td v-for="item in data" :key="item" v-html="item"></td>
      </tr>

      </tbody>
    </table>
  </section>
</template>

<script lang='ts'>
export default {
  props: {
    indexTitle: String,
    indexSubTitle: String,
    headTitle: Array,
    bodyData: Array
  }
};
</script>

<style lang='scss' scoped>
.title_api {
  margin-top: 2.25rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.3rem;
  line-height: 1.25;
  font-size: 1.65rem;
  font-weight: 600;
  color: #606266;
}

.title_row {
  margin: 28px 0 18px 0;
  font-weight: 500;
  color: #606266;
}

.apiTable {
  width: 100%;
  border: 1px solid #f0f0f0;

  & th {
    padding: 14px 12px 12px 12px;
    text-align: left;
    color: #5c6b77;
    font-weight: 500;
    white-space: nowrap;
    background: rgba(0, 0, 0, .02);
  }

  tbody {
    vertical-align: middle;

    & td {
      padding: 12px;
      border-top: 1px solid #f0f0f0;
      text-align: left;
      color: #595959;
      font-weight: 500;
      white-space: nowrap;

      &:nth-child(3) {
        width: 22%;
        color: #c41d7f;
        font-size: 13px;
      }
    }
  }
}
</style>