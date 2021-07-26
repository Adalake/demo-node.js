## 使用NodeJs爬取数据
https://www.jianshu.com/p/0de5a6e53482

> 网络请求
> 网页分析工具 cheerio
> 文件系统

本来是想用vue-cli的，写到最后发现好麻烦：
```
<template>
  <div>
    <div class="test" ref="testDom" v-html="data1"></div>
    <van-button class="btn" @click="btnClick" type="primary"
      >获取列表</van-button
    >
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.timeout = 1000;
export default {
  data() {
    return {
      data1: "疯狂加载中...",
      timer: null,
      apiList: [],
    };
  },
  methods: {
    // 下载单个文章
    downloadtext(filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    // 获取文章内容
    detailGet(api) {
      var that = this;
      axios({
        url: api,
        responseType: "blob",
        transformResponse: [
          function(data) {
            let reader = new FileReader();
            reader.readAsText(data, "GBK");
            reader.onload = function(e) {
              var dom_container = reader.result; // 获取dom
              var detail_start = dom_container.indexOf('<div class="content">');
              var detail_end = dom_container.indexOf("记住手机版网址");
              var detail = dom_container.slice(detail_start + 21, detail_end); //获取正文内容
              var title_start = dom_container.indexOf("<title>");
              var title_end = dom_container.indexOf("</title>");
              var title = dom_container.slice(title_start + 7, title_end); // 获取标题
              var title_temp = title.indexOf(" ");
              title = title.slice(0, title_temp);
              // console.log(title, detail);
              console.log("文章详情");
              // that.downloadtext(`${title}.html`, detail); //下载当前html
            };
            return data;
          },
        ],
      })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取文章列表
    listGet(api) {
      var that = this;
      axios({
        url: api,
        responseType: "blob",
        transformResponse: [
          function(data) {
            let reader = new FileReader();
            reader.readAsText(data, "GBK");
            reader.onload = function(e) {
              var dom_container = reader.result; // 获取dom
              var list_start = dom_container.indexOf('<ul class="chapter">');
              var list_end = dom_container.indexOf('<div class="listpage">');
              var list = dom_container.slice(list_start, list_end); //获取正文内容
              that.data1 = list;
              that.apiList = list.split(".html").map((x) => {
                var q = x.indexOf("<li>");
                var w = x.slice(q);
                return w.replace(/[^0-9]/gi, ""); // 正则 寻找数字
              });
              that.apiList.pop();
              console.log("文章列表", that.apiList, list);
            };
            return data;
          },
        ],
      }).then(() => {
        console.log(111, this.apiList);
        // this.afterContent(this.apiList);
      });
    },
    // 获取到文章内容之后
    afterContent(clist) {
      console.log(111, clist);
    },
    btnClick() {
      this.detailGet("/api/103631738.html");
    },
  },
  mounted() {
    this.listGet("/api/index_86.html");
  },
};
</script>

<style></style>
```

跨域配置：
```
  // http://xs.niuniuxs.com/kuaichuanpianzhibossbuhaore/103631738.html
  devServer: {
    proxy: {
      "/api": {
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "/",
        },
         target: "http://xs.niuniuxs.com/kuaichuanpianzhibossbuhaore",
      },
    },
  },
```