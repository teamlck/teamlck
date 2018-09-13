---
sidebarDepth: 2
---

# Teamlck

## 테스트
테스트 페이지 입니다. 이제부터 우리가 채워나갑시다.

### 테스트2
문서는 한글로 씁시다. 다국어 관련된 페이지는 나중에 고려하도록!

markdown으로 쓰시면 됩니다.

#### 멤버
* L. SJ
* C. HJ
* K. HB

## 코드 테스트
```javascript
class Teamlck {
  constructor (name) {
    this.name = name
  }
  
  hello () {
    console.log(`${this.name}: hello!`)
  }
  
  bye () {
    console.log(`${this.name}: buy..`)
  }
}

let norux = new Teamlck('norux')
let xuron = new Teamlck('xuron')

norux.hello()
xuron.buy()
```
