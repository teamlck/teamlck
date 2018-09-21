---
sidebar: auto
sidebarDepth: 2
---

# 각종 개발 문서

## npm 저장소에 배포하기

### 저장소 접근 권한
먼저 `@teamlck` 스코프 저장소에 배포하기 위해서는 권한이 필요하다. 권한 요청은 [Slack](https://teamlck.slack.com/messages/CCPLB4X16)으로 한다.
npm의 본인 계정(특히 이메일)을 첨부하여야 한다.

### npm login
권한이 추가되었다면, 배포할 준비는 90% 끝났다. 콘솔에서 npm 계정에 로그인을 한다.

```bash
$ npm login
```

위 명령어를 입력하면, npm 의 user/password/email 을 입력하도록 나온다.

### 배포하기

```bash
$ npm publish --access=public
```

위 명령어만 치면 npm에 배포가 된다. 단, 같은 버전은 덮어쓰기가 안되므로 `package.json`내의 정교한 버전관리가 필요하다.
버전관리는 [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)을 따른다.
