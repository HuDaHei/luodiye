
<style lang="scss" scoped>
.ye_range_container{
    display: flex;
    flex-direction: column;
    .range-input{
        display: flex;
        align-items: center;
        height: 30px;
        span{
            padding-left: 8px;
        }
    }
}
</style>
<template functional>
  <div class="ye_range_container">
    <div>
      <label>{{props.config.config.name}}</label>
    </div>
    <div class="range-input">
      <input 
        type="range" 
        step="1" 
        v-bind="data.attrs"
        :min="props.config.config.range[0]" 
        :max="props.config.config.range[1]" 
        v-on="listeners"/>
      <span>{{props.config.value}}</span>
    </div>
  </div>
</template>