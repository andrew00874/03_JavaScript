        // const 명칭 = password passwordConfirm passwordResult
        const password = document.getElementById("password");
        const passwordConfirm = document.getElementById("password-confirm");
        const passwordResult = document.getElementById("password-result");

        passwordConfirm.addEventListener("keyup", function (e) {
          if (e.key === "Enter") {
            //  trim() = 스페이스바로 작성한 띄어쓰기 글자취급 XXXX
            // 좌우  모두 확인해서 공백을 제거 스페이스바 와 같은
            // 공백 제거 후 비밀번호 입력했는지 확인
            if (password.value.trim() || passwordConfirm.value === "") {
              passwordResult.textContent = `
                비밀번호를 입력하세요.
                `;
            } else if (password.value === passwordConfirm.value) {
              passwordResult.textContent = `
                    비밀번호 일지합니다!
                    비밀번호      길이 : ${password.value.length}
                    비밀번호확인 글자수 : ${passwordConfirm.value.length}
                    비밀번호         값 : ${password.value}
                    비밀번호     확인값 : ${passwordConfirm.value}

                    `;
            } else {
              passwordResult.textContent = `
                원본비밀번호 : ${password.value}
                확인비밀번호 : ${passwordConfirm.value}
                `;
            }
          }
        });
        // keyup 을 이용해서 Enter 키 입력이 확인되면
        // if 문을 확용해서 비밀번호가 일치하는지 확인하고,
        // 비밀번호가 일치하면 비밀번호가 일치합니다! 와 함께
        // 비밀번호 길이   :   글자
        // 비밀번호 글자수 : 입력한 글자 수
        // else 비밀번호가 일치하지 않는다면
        // 원본비밀번호  :
        // 확인비밀번호 : 값 확인
        // 응용편
        // 비밀번호 가 "" 빈 값이라면 비밀번호를 입력하세요. 보여주기