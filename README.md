## Seat Changer React

* #### [查看网页](https://seat-changer-react.pages.dev/)

* ### 概述

    这是一个基于 React ，使用 Create React App 构建，托管于 Cloudflare Pages 的换座位计算器，根据某班级换座位规律编写，用于预测以后的座位，具有强定制性。

* ### 前身

    * 基于 Python & PyQt6 的 SeatChanger
    * 基于 C# & .NET & WPF 的 SeatChangerWPF

* ### 使用的 环境/语言/第三方库/平台

    * JavaScript
    * [React](https://react.dev/)
    * [MUI](https://mui.com/)
    * [Cloudflare](https://www.cloudflare.com)
    * [Create React App](https://github.com/facebook/create-react-app)
    * [LXGW WenKai / 霞鹜文楷](https://github.com/lxgw/LxgwWenKai)
    * [lxgw-wenkai-webfont](https://github.com/chawyehsu/lxgw-wenkai-webfont)
    * [Node.JS](https://nodejs.org)
    * [Visual Studio Code](https://code.visualstudio.com/)

## 更新日志

* ### Version 1.1.0 (Cloudflare Pages 发布)

    * 为解决速度问题，更换站点托管平台至 Cloudflare Pages
    * 修改部分提示
    * 修改 package.json 中的 homepage 以适配 Cloudflare Pages
    * 由于解决了加载速度问题，将以前优化加载速度的功能全部取消
    * 撰写本 README 文件

* ### Version 1.0.1 (Github Pages 发布)

    * 添加 holidayStartShift 功能
    * 由于放假，暂停座位自动更新

* ### Version 1.0.0 (Github Pages 发布)

    * 使用新的方法渲染字体，解决兼容性问题
    * 为修复不稳定问题取消自动全屏
    * 在发布版本中删除了字体文件，缓解加载速度慢的问题
    * 将图片上传到洛谷图床，缓解加载速度慢的问题

* ### Version 0.9.0 (无发布)
    
    * 原始版本，没有正式发布过

---
以下是 README.md 的原内容(由 Create React App 自动生成)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
