<template>
  <div class="wrapper">
    <mark
      class="mark"
      v-show="showSeason"
      @click.stop="showSeason = false"
    ></mark>
    <el-input
      placeholder="请选择季度"
      v-model="showValue"
      style="width: 180px;text-align:center"
      @click.native="showSeason1"
    >
      <i slot="suffix" class="el-input__icon h-icon-calendar"></i>
    </el-input>
    <el-card class="box-card" v-show="showSeason">
      <div slot="header" class="clearfix header">
        <button
          type="button"
          aria-label="前一年"
          class="el-picker-panel__icon-btn el-date-picker__prev-btn h-icon-angle_left_sm"
          @click="prev"
        ></button>
        <span role="button" class="el-date-picker__header-label"
          >{{ year }}年</span
        >
        <button
          type="button"
          aria-label="后一年"
          @click="next"
          class="el-picker-panel__icon-btn el-date-picker__next-btn h-icon-angle_right_sm"
        ></button>
      </div>
      <div class="text item" style="text-align: center">
        <el-button
          type="text"
          size="medium"
          class="item-btn"
          @click="selectSeason(1)"
          >第一季度</el-button
        >
        <el-button
          type="text"
          size="medium"
          class="item-btn"
          @click="selectSeason(2)"
          >第二季度</el-button
        >
      </div>
      <div class="text item" style="text-align: center">
        <el-button
          type="text"
          size="medium"
          class="item-btn"
          @click="selectSeason(3)"
          >第三季度</el-button
        >
        <el-button
          type="text"
          size="medium"
          class="item-btn"
          @click="selectSeason(4)"
          >第四季度</el-button
        >
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Quarter',
  props: {
    defaultValue: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      showSeason: false,
      season: '',
      year: new Date().getFullYear(),
      showValue: '',
    }
  },
  created() {
    if (this.defaultValue) {
      let value = this.defaultValue
      let arr = value.split('/')
      this.year = arr[0]
      this.season = arr[1]
      this.showValue = `${this.year}年${this.season}季度`
      this.$emit('input', `${this.year}/${this.season}`)
    }
  },
  watch: {
    defaultValue: function (value, oldValue) {
      let arr = value.split('/')
      this.year = arr[0]
      this.season = arr[1]
      this.showValue = `${this.year}年${this.season}季度`
      this.$emit('input', `${this.year}/${this.season}`)
    },
  },
  methods: {
    showSeason1(){
      console.log('11')
      this.showSeason=true
    },
    one() {
      this.showSeason = false
    },
    prev() {
      this.year = this.year * 1 - 1
    },
    next() {
      this.year = this.year * 1 + 1
    },
    selectSeason(i) {
      this.season = i
      this.$emit('input', `${this.year}/${this.season}`)
      this.showSeason = false
      this.showValue = `${this.year}年${this.season}季度`
    },
  },
}
</script>
<style lang="less" scoped>
.wrapper {
  position: relative;
  display: inline-block;
  .mark {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 999;
  }
  .box-card {
    width: 322px;
    padding: 0 3px 20px;
    margin-top: 10px;
    position: absolute;
    z-index: 9999;
    top: 25px;
    left: 0;
    .header {
      text-align: center;
      padding: 0;
      vertical-align: middle;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .item {
      height: 100%;
      width: 100%;
      .item-btn {
        width: 40%;
        color: #606266;
        float: left;
      }
    }
  }
}
</style>