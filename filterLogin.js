// 로그인 페이지 입력값에 대한 검증
// 특수문자나 sql 예약어 입력 시 form 제출 막음, DB에 쿼리 전달 안됨

const filter = (target) => {
  let input = document.getElementById(target).value;
  if (input.length > 0) {
    //특수문자 제거
    let expText = /[%=*><]/;
    if (expText.test(input)) {
      alert("[No SQL Injection] 특수문자를 입력 할 수 없습니다.");
      input = input.split(expText).join("");
      return false;
    }

    //특정문자열(sql예약어의 앞뒤공백포함) 제거
    let sqlArray = new Array(
      //sql 예약어
      "OR",
      "SELECT",
      "INSERT",
      "DELETE",
      "UPDATE",
      "CREATE",
      "DROP",
      "EXEC",
      "UNION",
      "FETCH",
      "DECLARE",
      "TRUNCATE"
    );

    let regex;
    for (let i = 0; i < sqlArray.length; i++) {
      regex = new RegExp(sqlArray[i], "gi");
      if (regex.test(input)) {
        alert('[No SQL Injection] "' + sqlArray[i] + '"와(과) 같은 특정문자열로 검색할 수 없습니다.');
        input = input.replace(regex, "");
        return false;
      }
    }
  }
  return true;
};

const checkLoginKeyword = () => {
  let id = document.getElementById("id_input").value;
  let pw = document.getElementById("pw_input").value;
  if (filter("id_input") && filter("pw_input")) return true;
  return false;
};
