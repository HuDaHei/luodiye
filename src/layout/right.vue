<template>
  <div>
    <component :is="componentName"></component>
  </div>
</template>
<script>
export default {
  name: 'luodiyeEdit',
  components: {
    'edit-title-content': () => import('./right/title/content')
  },
  data() {
    return {
      componentName: ''
    }
  }
}
</script>
