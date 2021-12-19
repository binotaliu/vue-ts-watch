<template>
  hello, world
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { clone } from './utils'

export default defineComponent({
  data: () => {
    foo: clone({ bar: 'baz' })
  }
})
</script>

