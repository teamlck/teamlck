---
sidebarDepth: 2
---

# 각종 개발 문서

## npm 저장소에 배포하기

### 저장소 접근 권한
먼저 `@teamlck` 스코프 저장소에 배포하기 위해서는 권한이 필요합니다. 권한 요청은 
[Slack](https://teamlck.slack.com/messages/CCPLB4X16)에 npm의 본인 
계정(특히 이메일)을 첨부하여 신청합니다.

### npm login
권한이 추가되었다면 배포할 준비는 90% 끝났습니다. 콘솔에서 npm 계정에 로그인을 합니다..

```bash
$ npm login
```

위 명령어를 입력하면 npm 의 user/password/email 을 입력하도록 나옵니다. 전부 입력하면
권한이 있는 npm 저장소에 배포할 수 있는 상태가 됩니다.

### 배포하기

```bash
$ npm publish --access=public
```

그리고 이 명령어만 치면 npm에 배포가 됩니다. 단, 같은 버전은 덮어쓰기가 안되므로 `package.json`내의 
정교한 버전관리가 필요합니다. 버전관리는 [시맨틱 버전 관리 2.0.0](/develop/semver)을 따릅니다.
