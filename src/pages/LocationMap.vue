<template>
  <div class="warpper">
    <iframe
      id="amap-iframe"
      src="https://m.amap.com/picker/?center=116.3972,39.9696&key=608d75903d29ad471362f8c58c550daf"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  mounted() {
    (function() {
      document.getElementById("amap-iframe").onload = function() {
        var iframe = document.getElementById("amap-iframe").contentWindow;
        iframe.postMessage("hello", "https://m.amap.com/picker/");
      };
      window.addEventListener(
        "message",
        function(e) {
          alert("您选择了:" + e.data.name + "," + e.data.location);
        },
        false
      );
    })();
  }
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  .warpper {
    position: absolute;
    width: 100%;
    height: 100%;
    #amap-iframe {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>
