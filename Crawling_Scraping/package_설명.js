/* 
// node_modules 가 없지만 package.json 이 존재하면 npm i 명령어를 이용하여
// node_modules 폴더와 하위 내용을 생성할 수 있다.

package.json

** 삭제하면 안됨 **

Node.js 에서 프로젝트의 신분증과 같은 존재 (매우 중요한 설정 파일)
프로젝트에 대한 모든 정보와 어떤 외부 도구(패키지)를 사용하는지가
모두 이 파일 하나에 기록됨


** 아래 두개는 삭제해도 상관 X, package.json 만 있으면 언제든지 만들기 가능 **

package-lock.json

package에 작성되어 있는 도구를 어디서 어떻게 가져올지에 대해 작성되어
있는 목록 node_modules 폴더에 도구를 가져올 수 있도록 경로나 버전을
기록해놓은 파일이기 때문에 잠금, 수정x 직접적인 수정할 일 없음

node-modules

프로젝트에 필요한 모든 외부 라이브러리 들의 실제 소스코드가 저장되는 폴더

npm install 명령어를 실행하면 package.json에 도구이름-도구버전이 기록되고,
기록된 경로를 package-lock 에서 알아서 세팅, 세팅된 내용을 바탕으로
node_modules 에 실제 파일들이 만들어짐

{
  "name": "crawling_scraping",          -> 폴더이름 작성
  "version": "1.0.0",                   -> 버전
  "description": "",                    -> 설명
  "main": "index.js",                   -> 어디 js가 메인인지
  "scripts": {                          -> cmd창에서 명령어를 작성하고 수행
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",                         -> 프로젝트 만든이
  "license": "ISC",                     -> 라이선스 권한 자격
  "dependencies": {                     -> 프로젝트를 만듬에 있어 필요한 도구들과 도구들의 버전
    "puppeteer": "^24.16.0"
  }
}


 */
