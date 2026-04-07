const form = document.querySelector(".subscribe-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    const value = input ? input.value.trim() : "";

    if (!value) {
      alert("请输入邮箱地址以完成订阅。");
      return;
    }

    alert("感谢订阅，下一封更新很快就到。");
    if (input) {
      input.value = "";
    }
  });
}
