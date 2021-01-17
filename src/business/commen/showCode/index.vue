<template>
  <div>
    {{code}}
  </div>
</template>

<script>
  export default {
    name: "ShowCode",
    props: ["code"],
    created () {
      this.code.toString();
    }
  };
</script>
