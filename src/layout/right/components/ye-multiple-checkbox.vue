<template functional>
<!-- 多选 checkbox -->
    <div>
        <template v-for="(checkbox,index) in props.config.config.checkboxList">
            <input 
            type="checkbox" 
            v-bind="data.attrs"
            :value="checkbox.value"
            :key="index"
            v-on="listeners">{{checkbox.name}}
        </template>
    </div>
</template>