<template>
  <div>
    <label for="">{{label}}</label>
    <input
      style="width:100%"
      type="text"
      :value="value"
      :placeholder="placeholder" @input="$emit('input',$event.target.value)"
    />
  </div>
  
</template>
<script>
export default{
  data:()=>({
    show: false
  }),
  props: {
    value : { type: String , required: false, default: ''},
    label: { type: String , required: false, default: ''}
  },
}
</script>

<style scoped>

::placeholder {
  opacity:.4;
}

div{
 padding-left: 7px;
  padding-right: 60px;   
}

label {
  width: calc(2.375rem - 50px);
  height: 1rem;
  margin: 1.219rem 13.125rem 0.25rem 1.5rem;
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--dark);
}

input[type="text"]{
  width: 24rem;
  height: 2rem;
  margin: 0.25rem 1.5rem 0.4rem 1rem;
  border-radius: 4px;
  border: solid 1px #c0c3d2;
  background-color: white;
  padding: 2px 10px 2px 10px;
}

</style>