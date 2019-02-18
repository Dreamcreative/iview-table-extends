<template>
    <div >
        <Input placeholder="下限" v-model="lowLimit"  @on-blur="blur('low')" :style="`width:${width};`"></Input>
        <Input placeholder="上限" v-model="upLimit"  @on-blur="blur('up')" :style="`width:${width};margin-left:-7px;`"></Input>
    </div>
</template>
<script>
import { Message } from "iview";
export default {
  name: "Region",
  props: {
    current:Object,
    width:{ 
      type:String,
      default:"78px",
    }  
  },
  data() {
    return {
      lowLimit: "",
      upLimit: "",
      limitValue: ""
    };
  },
  components: {},
  computed: {},
  created() {
      if( this.current.value ){
        this.lowLimit= this.current.value ?this.current.value[0]:'';
        this.upLimit=this.current.value ?this.current.value[1]:'';
      }
  },
  watch: {
    reset(to, from) {
      this.lowLimit = "";
      this.upLimit = "";
    }
  },
  watch:{
    "current.value":function( val ){
      this.current.value = val ;
      this.lowLimit= val ?val[0]:'';
      this.upLimit=val ?val[1]:'';
    }
  },
  mounted() {},
  methods: {
    init() {},
    blur(type) {
      this.current.value = [this.lowLimit,this.upLimit];
      this.$emit("blur",this.current.value);
    },
  }
};
</script>

<style>

</style>
