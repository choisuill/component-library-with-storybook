## 초기 실행

```
yarn install
yarn run storybook
```

## 개발 이후, 업로드시 순서

```
yarn run chromatic
```
chromatic을 실행해서 빌드를 진행한 후,

```
git add .
git commit -m ""
git push
```
storybook log를 같이 github에 올립니다.


Storybook 확인하는곳
https://6449e3bca54e46c4e070d077-sfqusranbf.chromatic.com/?path=/docs/example-selectandtextfield--docs
